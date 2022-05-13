import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ActivityIndicator, Text, View, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native';
import { Link, Routes, Route, NativeRouter, useNavigate } from 'react-router-native';
import { useState } from 'react';
import { AuthContext } from '../../../Context/Auth';
import { useEffect, useContext } from 'react';
import axios from 'axios';
import ModalC from '../../ComponentPublic/ModalC';
const ThanhTien = (lists) => {
    let thanhtien = lists != null ? lists.reduce((tong, e) => tong + Number(e.Total), 0) : 0
    return thanhtien
}
const GioHang_Main = ({ navigation }) => {
    const [Load, setLoad] = useState(false)
    const { authState } = useContext(AuthContext)
    const [listSP, setlistSP] = useState()
    const [Tien, setTien] = useState(ThanhTien(listSP))
    const Tiens = formatVND(Tien)
    const [list, setlist] = useState([])
    useEffect(async () => {
        const res = await axios.get('https://mobile12346.herokuapp.com/cart', { headers: { Authorization: `Bearer ${authState.user.token}` } })
        setlistSP(res.data)
        setTien(ThanhTien(res.data))
        setlist(res.data.map((e) => {
            return e.Quantity
        }))
    }, [listSP])
    function formatVND(n) {
        return n.toFixed(1).replace(/(\d)(?=(\d{3})+\.)/g, '$1,') + ' đ';
    }

    return (
        <View style={styles.container}>
            <View style={{
                height: 80,
                paddingTop: 30
            }}>
                <View style={{
                    width: '100%',
                    height: 50,
                    elevation: 5,
                    shadowColor: '#000',
                    shadowOpacity: 1,
                    shadowOffset: { width: 5, height: 5 },
                    backgroundColor: '#fff',
                }}>
                    <View style={styles.header}>
                        <Text style={styles.headerText}>Giỏ hàng</Text>
                    </View>
                </View>

            </View>

            <ScrollView>
                <View style={styles.listSP}>
                    {!listSP &&
                        <View>
                            <Text style={{
                                fontSize: 18,
                                fontWeight: '700',
                                color: '#444',
                            }}>
                                Đang tải...
                            </Text>
                        </View>

                    }
                    {listSP && listSP.length == 0 &&
                        <View>
                            <Text style={{
                                fontSize: 18,
                                fontWeight: '700',
                                color: '#444',
                            }}>
                                Không có sản phẩm nào trong giỏ hàng.
                            </Text>
                        </View>
                    }
                    {listSP &&
                        listSP.map((e, i, a) => {
                            return (
                                <View style={styles.SP} key={e.id}>
                                    <TouchableOpacity
                                        onPress={async () => {
                                            setLoad(true)
                                            const res = await axios.delete(`https://mobile12346.herokuapp.com/cart/${e.id}`,
                                                { headers: { Authorization: `Bearer ${authState.user.token}` } })
                                            setLoad(false)
                                            let newList = listSP.filter(item => item.id != e.id)
                                            setlistSP([...newList])
                                            setTien(ThanhTien(newList))
                                        }}
                                        style={{
                                            position: 'absolute',
                                            top: 10,
                                            right: 10,
                                            width: 20,
                                            height: 20,
                                        }}
                                    >

                                        <Text style={{
                                            fontSize: 18,
                                            fontWeight: '700',
                                            color: '#bbb',
                                        }}>X</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => {
                                        navigation.navigate('ChiTiet', {
                                            id: e.ProductId
                                        })
                                    }}>
                                        <Image
                                            style={styles.SP_ImSP}
                                            source={
                                                {
                                                    uri: e.Picture
                                                }
                                            } />
                                    </TouchableOpacity>
                                    <View>
                                        <Text style={styles.SP_TenSP}>{e.ProductName}</Text>
                                        <Text style={styles.SP_Gia}>{formatVND(Number(e.Price))}</Text>
                                        <View style={styles.SL}>
                                            <Text>Số lượng: </Text>

                                            <TouchableOpacity
                                                style={styles.SP_btnGiam}
                                                onPress={async (ele) => {

                                                    const res = await axios.patch(`https://mobile12346.herokuapp.com/cart/${e.id}`,
                                                        {
                                                            Quantity: e.Quantity - 1,
                                                            ProductId: e.ProductId

                                                        }, { headers: { Authorization: `Bearer ${authState.user.token}` } })

                                                }}
                                            >
                                            </TouchableOpacity >
                                            <TextInput style={styles.SP_InputSL} value={String(list[i])} />
                                            <TouchableOpacity
                                                onPress={async (ele) => {
                                                    let newA = list.slice()
                                                    newA[i]++
                                                    setlist(newA)

                                                    const res = await axios.patch(`https://mobile12346.herokuapp.com/cart/${e.id}`,
                                                        {
                                                            Quantity: e.Quantity + 1,
                                                            ProductId: e.ProductId

                                                        }, { headers: { Authorization: `Bearer ${authState.user.token}` } })
                                                }}
                                                style={styles.SP_btnTang}
                                            >
                                            </TouchableOpacity >
                                        </View>
                                    </View>
                                    <View style={styles.SP_ThanhTien}>
                                        <Text style={styles.SP_TextThanhTienTT}>Thành tiền: </Text>
                                        <Text style={styles.SP_TextThanhTien}>{formatVND(Number(e.Total))}</Text>
                                    </View>
                                </View>
                            )
                        })}
                    {Load &&
                        <ModalC>
                            <ActivityIndicator size="large" color="#0000ff" />
                            <Text style={
                                {
                                    marginTop: 10,
                                }
                            }>Đang xử lí...</Text>
                        </ModalC>
                    }
                    <View style={{
                        height: 150,
                    }}>

                    </View>
                </View>

            </ScrollView>
            {listSP && listSP.length != 0 && <View
                style={{
                    backgroundColor: '#A60D0D',
                    height: 70,
                    width: '94%',
                    right: '3%',
                    position: 'absolute',
                    bottom: 85,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 10,
                }}>
                <Link to='/Home/ThanhToan' underlayColor={'#'}>
                    <View>
                        <View style={{
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Text style={{
                                color: '#fff',
                                fontSize: 18,
                                fontWeight: '500',
                            }}>TIẾN HÀNH ĐẶT HÀNG</Text>
                        </View>
                        <Text
                            style={{
                                color: '#bbb',
                                fontSize: 16,
                                fontWeight: '300',
                            }}>(Tổng tiền tạm tính: {Tiens})</Text>

                    </View >
                </Link>
            </View>}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        position: 'relative',
        justifyContent: 'center'
    },
    header: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#A60D0D',
        // backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#bbb',
    },
    headerText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '500',

    },
    listSP: {
        backgroundColor: '#f1f1f1',
        width: '100%',
        alignItems: 'center',
        paddingTop: 17,
    },
    SP: {
        marginBottom: 10,
        position: 'relative',
        paddingLeft: 20,
        width: '94%',
        padding: 20,
        borderRadius: 10,
        elevation: 5,
        shadowColor: '#000',
        shadowOpacity: 1,
        shadowOffset: { width: 5, height: 5 },
        backgroundColor: '#fff',
        flexDirection: 'row', alignItems: 'center'
    },
    SP_ImSP: {
        marginRight: 20,
        width: 90,
        height: 90,
    },
    SP_TenSP: {
        width: 200,
        fontSize: 13,
        fontWeight: '700',
    },
    SP_Gia: {
        fontWeight: '700',
        color: 'red',

    },
    SL: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    SP_InputSL: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderColor: '#bbb',
        textAlign: 'center',
        fontSize: 12,
        margin: 10,
    },
    SP_controlSL: {

    },
    SP_btnGiam: {
        width: 0,
        height: 0,
        borderWidth: 8,
        borderTopColor: '#fff',
        borderBottomColor: '#fff',
        borderLeftColor: '#fff',
        borderRightColor: '#bbb',
        justifyContent: 'center',
        alignItems: 'center',
    },
    SP_btnTang: {
        width: 0,
        height: 0,
        borderWidth: 8,
        borderTopColor: '#fff',
        borderBottomColor: '#fff',
        borderLeftColor: '#bbb',
        borderRightColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    SP_ThanhTien: {
        width: 190,
        position: 'absolute',
        bottom: 10,
        right: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    SP_TextThanhTien: {
        fontSize: 15,
        color: '#A60D0D',
        fontWeight: '700',
    },
    SP_TextThanhTienTT: {
        color: '#000', fontSize: 14,

    }
});
export default GioHang_Main 