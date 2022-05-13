
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ActivityIndicator, ScrollView, View, Image, TouchableOpacity, Modal, TextInput, TextAncestor, Picker } from 'react-native';
import { Link, Routes, Route, NativeRouter } from 'react-router-native';
import { useState, useContext } from 'react';
import { Dimensions } from 'react-native';
import { NavContext } from '../../../Context/NavContext';
import { selectProductContext } from '../../../Context/selectProductContext';
import { AuthContext } from '../../../Context/Auth';
import axios from 'axios';
import ModalC from '../../ComponentPublic/ModalC';

const ThongSoLaptop = ({ Data }) => {
    const [Load, setLoad] = useState('')
    const { id } = useContext(selectProductContext)
    const { authState } = useContext(AuthContext)
    const { setNav } = useContext(NavContext)
    return (
        <View>
            <View style={styles.container}>
                <View style={styles.KhuyenMaiTT}>
                    <Image
                        style={styles.ImageGift}
                        source={{
                            uri: 'https://supership.vn/wp-content/uploads/2019/02/gift-box-icon-1.png'
                        }} />

                    <Text style={styles.TextKhuyenMai}>KHUYẾN MÃI</Text>
                </View>
                <View style={styles.KhuyenMaiContainer}>
                    <Text style={styles.li}>
                        1
                    </Text>
                    <View style={styles.liContainer}>
                        <Text style={styles.Textli}>Thu cũ lên mới - Trợ giá 1 triệu</Text>
                    </View>
                </View>
            </View>

            <TouchableOpacity onPress={async () => {
                setLoad('xl')
                const res = await axios.post('https://mobile12346.herokuapp.com/cart', {
                    ProductId: id
                }, { headers: { Authorization: `Bearer ${authState.user.token}` } })
                setLoad(res.data.mess)

            }} underlayColor={'#'} style={styles.BTNMuaNgay}>
                <View style={styles.BTNMuaNgay}>
                    <Text style={styles.TextBTN1}>Thêm vào giỏ</Text>
                    <Text style={styles.TextBTN2}>(Giao hàng tận nơi hoặc đến cửa hàng)</Text>
                </View>
            </TouchableOpacity>
            {Load == 'xl' &&
                <ModalC>
                    <ActivityIndicator size="large" color="#0000ff" />
                    <Text style={
                        {
                            marginTop: 10,
                        }
                    }>Đang xử lí...</Text>
                </ModalC>
            }
            {Load != '' && Load != 'xl' && <ModalC>
                <Text style={{
                    fontSize: 16,
                    fontWeight: '700',
                }}>Thông báo</Text>
                <Text style={
                    {
                        marginTop: 10,
                        marginBottom: 10,
                    }
                }>{Load}</Text>
                <TouchableOpacity onPress={() => {
                    setLoad('')
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
                    }}>OK</Text>
                </TouchableOpacity>
            </ModalC>}
            <View style={styles.containerUDT}>
                <View style={styles.UDTTT}>
                    <Text style={styles.TextUDT}>ƯU ĐÃI THÊM</Text>
                </View>
                <View style={styles.KhuyenMaiContainer}>
                    <Text style={styles.li}>
                        1
                    </Text>
                    <View style={styles.liContainer}>
                        <Text style={styles.Textli}>Thu cũ lên mới - Trợ giá 1 triệu</Text>
                    </View>
                </View>
            </View>

            <View style={styles.containerUDT}>
                <View style={styles.UDTTT}>
                    <Text style={styles.TextUDT}>Thông tin máy</Text>
                </View>
                <View style={styles.KhuyenMaiContainer}>
                    <Image

                        style={{
                            width: 20, height: 20,
                            marginRight: 10,
                        }}
                        source={{
                            uri: 'https://cdn-icons-png.flaticon.com/512/65/65680.png'
                        }} />
                    <View style={styles.liContainer}>
                        <Text style={styles.Textli}>Máy mới đầy đủ phụ kiện từ nhà sản xuất</Text>
                    </View>
                </View>
                <View style={styles.KhuyenMaiContainer}>
                    <Image

                        style={{
                            width: 20, height: 20,
                            marginRight: 10,
                        }}
                        source={{
                            uri: 'data:image/png;base64,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'
                        }} />
                    <View style={styles.liContainer}>
                        <Text style={styles.Textli}>Bảo hành 12 tháng tại trung tâm bảo hành chính hãng Apple Việt Nam. 1 ĐỔI 1 trong 30 ngày nếu có lỗi phần cứng nhà sản xuất. </Text>
                    </View>
                </View>
            </View>
            <View style={styles.containerUDT}>
                <View style={styles.UDTTT}>
                    <Text style={styles.TextUDT}>Thông số kĩ thuật</Text>
                </View>
                {Data && Data.map((e) => {
                    if (e.id % 2 == 1)
                        return (
                            <View key={e.id} style={{
                                padding: 3,
                                flexDirection: 'row',
                            }}>
                                <View style={{
                                    width: '30%',
                                    padding: 10,
                                }}>
                                    <Text>{e.Name}: </Text>
                                </View>
                                <View style={{
                                    width: '70%',
                                    padding: 10,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                    <Text style={styles.Textli}>{e.Value}</Text>
                                </View>
                            </View>
                        )
                    else {
                        return (
                            <View key={e.id} style={{
                                padding: 3,
                                flexDirection: 'row',
                                backgroundColor: '#EBEBEB',
                            }}>
                                <View style={{
                                    width: '30%',
                                    padding: 10,
                                }}>
                                    <Text>{e.Name}: </Text>
                                </View>
                                <View style={{
                                    width: '70%',
                                    padding: 10,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                    <Text style={styles.Textli}>{e.Value}</Text>
                                </View>
                            </View>)
                    }
                })}
            </View>
        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        width: '100%',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#CAF0F8',
        marginBottom: 10,
    },
    KhuyenMaiTT: {
        width: '100%',
        height: 40,
        backgroundColor: '#E4C9C9',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    ImageGift: {
        width: 20,
        height: 20,
        marginRight: 4,
    },
    TextKhuyenMai: {
        color: '#A60D0D',
        fontSize: 15,
        fontWeight: '700',
    },
    KhuyenMaiContainer: {
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    li: {
        fontSize: 13,
        textAlign: 'center',
        borderRadius: 50,
        width: 20,
        height: 20,
        color: '#fff',
        backgroundColor: '#A60D0D',
        marginRight: 15,
    },
    liContainer: {
        width: '80%',
    },
    Textli: {
        fontWeight: '100',
        fontSize: 13,
    },
    containerUDT: {
        marginTop: 10,
        width: '100%',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#bbb'
    },
    UDTTT: {
        width: '100%',
        height: 40,
        backgroundColor: '#bbb',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    TextUDT: {
        color: '#000',
        fontSize: 15,
        fontWeight: '700',
    },
    BTNMuaNgay: {
        height: 60,
        backgroundColor: '#A60D0D',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    TextBTN1: {
        fontSize: 18,
        color: 'white',
        fontWeight: '700',
    },
    TextBTN2: {
        fontSize: 15,
        color: '#bbb',
        fontWeight: '100',
    },

});
export default ThongSoLaptop