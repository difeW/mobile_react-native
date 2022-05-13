import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Pressable, ActivityIndicator, Modal, Text, View, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native';
import { Link, Routes, Route, NativeRouter, useNavigate } from 'react-router-native';
import { useState, useContext, useEffect } from 'react';
import DiaChi from './DiaChi';
import HinhThucThanhToan from './HinhThucThanhToan';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import { NavContext } from '../../../Context/NavContext';
import { AuthContext } from '../../../Context/Auth';
import axios from 'axios';
import { HinhThucContext } from '../../../Context/HinhThucThanhToan';


const ThanhToan = () => {
    const { hinhThucThanhToan, setValue } = useContext(HinhThucContext)
    const { setNav } = useContext(NavContext)
    const [XacNhan, setXacNhan] = useState(false)
    const [ChacChan, setChacChan] = useState('0')
    const ThanhTien = (list) => {

        let thanhtien = list != null ? list.reduce((tong, e) => tong + Number(e.Total), 0) : 0
        return thanhtien
    }
    function formatVND(n) {
        return n.toFixed(1).replace(/(\d)(?=(\d{3})+\.)/g, '$1,') + ' đ';
    }
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
        return function cleanup() {
            setlistSP()
            setTien(ThanhTien(listSP))
            setlist([])
        };
    }, [listSP])
    function formatVND(n) {
        return n.toFixed(1).replace(/(\d)(?=(\d{3})+\.)/g, '$1,') + ' đ';
    }
    return (
        <View style={styles.container}>
            <View style={{
                height: 80,
                paddingTop: 30,

            }}>
                <View style={{
                    position: 'relative',
                    width: '100%',
                    height: 50,
                    elevation: 5,
                    shadowColor: '#000',
                    shadowOpacity: 1,
                    shadowOffset: { width: 5, height: 5 },
                    backgroundColor: '#fff',
                }}>
                    <View style={styles.header}>
                        <Text style={styles.headerText}>Thanh Toán</Text>
                    </View>
                    <Link to='/Home/GioHang' onPress={() => {
                        setNav('Giỏ hàng')
                    }} underlayColor={'#'} style={{
                        position: 'absolute',
                        left: 20,
                        top: 15,
                    }}>
                        <Text style={{
                            fontSize: 16,
                            fontWeight: '700',
                            color: '#fff'
                        }}>{'<'} Trở về</Text>
                    </Link>
                </View>
            </View>


            <ScrollView>
                <DiaChi />
                <View style={styles.listSP}>
                    <View style={styles.Title}>
                        <Text style={styles.Title_Text} >THÔNG TIN ĐƠN HÀNG </Text>
                    </View>
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
                            let soluong = e.Quantity
                            return (
                                <View style={styles.SP} key={e.id}>
                                    <TouchableOpacity
                                        onPress={async () => {
                                            const res = await axios.delete(`https://mobile12346.herokuapp.com/cart/${e.id}`,
                                                { headers: { Authorization: `Bearer ${authState.user.token}` } })

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
                                    <Image
                                        style={styles.SP_ImSP}
                                        source={
                                            {
                                                uri: e.Picture
                                            }
                                        } />
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
                </View>
                <HinhThucThanhToan />
                <View
                    style={{
                        height: 82,
                    }}></View>
            </ScrollView>
            <View
                style={{
                    backgroundColor: '#A60D0D',
                    height: 60,
                    width: '94%',
                    right: '3%',
                    position: 'absolute',
                    bottom: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 10,
                }}>

                <TouchableOpacity onPress={() => {
                    setXacNhan(true)
                }}>
                    <View style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <Text style={{
                            color: '#fff',
                            fontSize: 18,
                            fontWeight: '700',
                        }}>ĐẶT HÀNG</Text>
                    </View>
                    <Text
                        style={{
                            color: '#bbb',
                            fontSize: 16,
                            fontWeight: '300',
                        }}>(Tổng tiền: {Tiens})</Text>
                </TouchableOpacity>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={XacNhan}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        {Boolean(ChacChan == '0') &&
                            <View style={styles.modalView}>
                                <Text style={styles.modalText}>Bạn chắc chắn muốn đặt hàng?
                                </Text>
                                <View style={{
                                    flexDirection: 'row',
                                }
                                }>
                                    <TouchableOpacity onPress={() => {
                                        setXacNhan(false)
                                    }} style={{
                                        backgroundColor: '#A60D0D',
                                        width: 100,
                                        height: 35,
                                        marginRight: 8,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        borderRadius: 5,
                                    }}>
                                        <Text style={{
                                            color: 'white'
                                        }}>Hủy</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={async () => {
                                        const cartId = listSP.map((e) => e.id)
                                        setChacChan('1')
                                        const res = await axios.post('https://mobile12346.herokuapp.com/order ', {
                                            cartId,
                                            payment: hinhThucThanhToan
                                        }, { headers: { Authorization: `Bearer ${authState.user.token}` } })
                                        setChacChan('2')
                                    }} style={{
                                        backgroundColor: 'green',
                                        width: 100,
                                        height: 35,
                                        marginRight: 8,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        borderRadius: 5,
                                    }}>
                                        <Text style={{
                                            color: 'white'
                                        }}>Chắn chắn</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>}
                        {Boolean(ChacChan == '2') &&
                            <View style={styles.modalView}>
                                <Image
                                    style={
                                        {
                                            width: 70,
                                            height: 70
                                        }
                                    }
                                    source={{
                                        uri: 'data:image/png;base64,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'
                                    }}
                                />
                                <Text style={{
                                    color: 'green',
                                    fontWeight: '700',
                                    fontSize: 18,
                                }}>Đặt hàng thành công.

                                </Text>
                                <Text style={styles.modalText}>
                                    Cảm ơn Qúy Khách đã tin tưởng và ủng hộ GoTech!
                                    (Bấm 'OK' để quay lại trang chủ.)
                                </Text>
                                <View style={{
                                    flexDirection: 'row',
                                }
                                }>
                                    <Link to='/Home' onPress={async () => {

                                        setNav('Trang chủ')
                                    }} underlayColor={'#'} style={{
                                        backgroundColor: 'green',
                                        width: 100,
                                        height: 35,
                                        marginRight: 8,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        borderRadius: 5,
                                    }}>
                                        <Text style={{
                                            color: 'white'
                                        }}>OK</Text>
                                    </Link>
                                </View>
                            </View>}
                        {Boolean(ChacChan == '1') &&
                            <View style={styles.modalView}>
                                <ActivityIndicator size="large" color="#0000ff" />
                                <Text style={
                                    {
                                        marginTop: 10,
                                    }
                                }>Đang xử lí...</Text>
                            </View>}
                    </View>
                </Modal>
            </View >
        </View >
    )
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        position: 'relative',
        justifyContent: 'center',
        backgroundColor: '#eee'
    },
    Title: {
        width: '94%',
        marginBottom: 10,
    },
    Title_Text: {
        fontSize: 16,
        fontWeight: '700',
        color: '#000',
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
        fontWeight: '700',

    },
    listSP: {
        marginTop: 10,
        backgroundColor: '#fff',
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
        color: '#333',
        fontSize: 13,
        fontWeight: '700',
    },
    SP_Gia: {
        fontWeight: '700',
        color: '#A60D0D',

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

    }, centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(0,0,0,0.7)'
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});
export default ThanhToan