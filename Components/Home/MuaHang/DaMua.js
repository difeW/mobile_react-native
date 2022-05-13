import { StyleSheet, Text, ScrollView, View, Image, TouchableOpacity, Modal, TextInput, TextAncestor } from 'react-native';
import { useState } from 'react';
import StarReview from 'react-native-stars';
import { useEffect } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../Context/Auth';
import axios from 'axios';

const DaMua = ({ navigation }) => {
    // navigation.navigate('ChiTietSPDG', { id: '624e5bf684b636f655c458fa' })
    const [cmt, setCmt] = useState('')
    const { authState } = useContext(AuthContext)
    const [modalVisible, setModalVisible] = useState(false);
    const [Loai, setLoai] = useState('')
    const [countStar, setCountStar] = useState(0)
    const [list, setList] = useState([]);
    const [id, setId] = useState('')
    const [detail, setDetail] = useState()
    useEffect(async () => {
        const res = await axios.get('https://mobile12346.herokuapp.com/order/finish', { headers: { Authorization: `Bearer ${authState.user.token}` } })
        if (!res.data.success)
            setList([])
        else
            setList(res.data.order)
    }, [id])

    function formatVND(n) {
        return n.toFixed(1).replace(/(\d)(?=(\d{3})+\.)/g, '$1,') + ' đ';
    }
    return (
        <View>
            <ScrollView
                style={{
                    width: '100%',
                }}>
                <View
                    style={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                    {list.map((e) => {
                        return (
                            <View key={e.id}
                                style={{
                                    width: '94%',
                                    borderColor: '#bbb',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderRadius: 5,
                                    marginBottom: 15,
                                    marginTop: 15,
                                }}>
                                <View
                                    style={{
                                        width: '100%',
                                        marginBottom: 1,
                                        padding: 8,
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        borderTopRightRadius: 5,
                                        borderTopLeftRadius: 5,
                                        backgroundColor: '#fff',
                                    }}>
                                    <Text style={{
                                        fontSize: 12,
                                        color: '#444',
                                        width: 190,
                                    }}>ĐẶT NGÀY: {e.OrderDay}</Text>
                                    <Text style={{
                                        fontSize: 12,
                                        color: '#444',
                                        width: 190
                                    }}>GIAO NGÀY: 13/5/2022</Text>
                                </View>
                                <View
                                    style={{
                                        width: '100%',
                                        marginBottom: 1,
                                        backgroundColor: '#fff',
                                    }}>
                                    {e.Detail.map((i) => {
                                        return (
                                            <View key={e.ProductId} style={styles.SPNB}>

                                                <TouchableOpacity onPress={() => {
                                                    navigation.navigate('ChiTietSPDG', {
                                                        id: i.ProductId
                                                    })
                                                }} style={styles.SPNB_item} >
                                                    <Image
                                                        style={styles.ImageSPNB}
                                                        source={{
                                                            uri: i.Image
                                                        }}
                                                    />
                                                </TouchableOpacity>
                                                <View>
                                                    <View style={styles.SPNB_item}>
                                                        <Text
                                                            style={styles.TenSP}>
                                                            {i.ProductName}
                                                        </Text>
                                                    </View>
                                                    <View style={styles.SPNB_item}>
                                                        <Text
                                                            style={styles.GiaSP}>
                                                            {formatVND(i.Price)}
                                                        </Text>
                                                        <View style={{
                                                            flexDirection: 'row',
                                                            justifyContent: 'space-between',
                                                            alignItems: 'center'
                                                        }}>
                                                            <Text>Số lượng: {i.Quantity}</Text>

                                                            {!i.Rate ? <TouchableOpacity onPress={() => {
                                                                setModalVisible(true)
                                                                setLoai('DG')
                                                                setDetail(i)
                                                                setId(e.id)

                                                                console.log(i.ProductId)
                                                            }}
                                                                style={{
                                                                    marginLeft: 10,
                                                                    width: 80,
                                                                    height: 30,
                                                                    borderRadius: 5,
                                                                    display: 'flex',
                                                                    justifyContent: 'center',
                                                                    alignItems: 'center',
                                                                    borderWidth: 1,
                                                                    borderColor: '#A60D0D',
                                                                }}>
                                                                <Text
                                                                    style={{
                                                                        fontSize: 14,
                                                                        color: '#A60D0D'
                                                                    }}>Đánh giá</Text>
                                                            </TouchableOpacity> : <View>
                                                                <Text style={{
                                                                    color: '#A60D0D'
                                                                }}>
                                                                    Đã đánh giá</Text></View>}
                                                        </View>

                                                    </View>
                                                </View>
                                            </View>
                                        )

                                    })}
                                </View>

                                <View
                                    style={{
                                        width: '100%',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        marginBottom: 1,
                                        flexDirection: 'row',
                                        padding: 10,
                                        backgroundColor: '#fff',
                                    }}>
                                    <Text style={{
                                        color: '#444',
                                        fontSize: 12,
                                    }}>{e.Detail.length} sản phẩm</Text>
                                    <View style={{
                                        justifyContent: 'flex-end',
                                        alignItems: 'center',
                                        marginBottom: 1,
                                        flexDirection: 'row',
                                    }}>
                                        <Text style={{
                                            fontSize: 16,
                                            color: '#444',
                                        }}>Đơn giá: </Text>
                                        <Text style={{
                                            fontSize: 16,
                                            color: '#A60D0D',
                                        }}>{formatVND(e.Paid)}</Text>
                                    </View>

                                </View>
                                <View
                                    style={{
                                        width: '100%',
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'flex-end',
                                        alignItems: 'center',
                                        backgroundColor: '#fff',
                                        padding: 10,
                                        borderBottomRightRadius: 5,
                                        borderBottomLeftRadius: 5,
                                    }}>
                                    <TouchableOpacity onPress={() => {
                                        setModalVisible(true)
                                        setLoai('XCT')
                                    }}
                                        style={{
                                            width: 100,
                                            height: 40,
                                            borderRadius: 5,
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            borderWidth: 1,
                                            borderColor: '#A60D0D',
                                        }}>
                                        <Text
                                            style={{
                                                fontSize: 14,
                                                color: '#A60D0D'
                                            }}>Xem chi tiết</Text>
                                    </TouchableOpacity>

                                </View>
                            </View>
                        )
                    })}
                </View>
                <View style={{
                    height: 100,
                }}>

                </View>

            </ScrollView>
            {modalVisible && <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}
                >
                    <TouchableOpacity onPress={() => {
                        setModalVisible(!modalVisible);
                    }} style={{
                        minHeight: 150,
                        width: '100%',
                    }}>

                    </TouchableOpacity>
                    {
                        Boolean(Loai == 'DG') &&
                        <View style={styles.modalView}>
                            <View
                                style={{

                                    height: 100,
                                    width: '100%',
                                    marginBottom: 1,
                                    backgroundColor: '#fff',
                                }}>
                                <View style={styles.SPNB}>

                                    <View style={styles.SPNB_item} >
                                        <Image
                                            style={styles.ImageSPNB}
                                            source={{
                                                uri: detail.Image
                                            }}
                                        />
                                    </View>
                                    <View>
                                        <View style={styles.SPNB_item}>
                                            <Text
                                                style={styles.TenSP}>
                                                {detail.ProductName}
                                            </Text>
                                        </View>
                                        <View style={styles.SPNB_item}>
                                            <Text
                                                style={styles.GiaSP}>
                                                {formatVND(detail.Price)}
                                            </Text>
                                            <Text>Số lượng đã mua: {detail.Quantity}</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={{
                                backgroundColor: '#fff',
                                width: '100%',
                                marginTop: 10,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <View style={{ alignItems: 'center', margin: 10, }}>
                                    <StarReview
                                        half={true}
                                        default={0}
                                        update={(val) => { setCountStar(val) }}
                                        spacing={4}
                                        starSize={30}
                                        count={5}
                                    />
                                </View>
                                <View style={styles.Comment_Input_lable}>
                                    <TextInput multiline={true} value={cmt} onChangeText={(e) => { setCmt(e) }}
                                        numberOfLines={4} style={styles.Comment_Input_item} placeholder='Comment' />
                                </View>
                                <View style={{
                                    width: '100%',
                                    flexDirection: 'row',
                                    justifyContent: 'flex-end'
                                }}>
                                    <TouchableOpacity
                                        onPress={() => {
                                            setModalVisible(false)
                                        }}
                                        style={{
                                            borderRadius: 5,
                                            marginTop: 10,
                                            position: 'relative',
                                            backgroundColor: '#fff',
                                            width: 100,
                                            height: 40,
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            borderWidth: 1,
                                            borderColor: '#444'
                                        }}
                                    >
                                        <Text style={{
                                            color: '#444',
                                            fontSize: 14,
                                            width: '100%',
                                            textAlign: 'center'

                                        }}>HỦY</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={async () => {
                                            const res = await axios.post(`https://mobile12346.herokuapp.com/feedback/${id}/${detail.ProductId}`, { Rate: countStar, Comment: cmt }, { headers: { Authorization: `Bearer ${authState.user.token}` } })
                                            setId('')
                                            setModalVisible(false)
                                        }}
                                        style={{
                                            borderRadius: 5,
                                            margin: 10,
                                            position: 'relative',
                                            backgroundColor: '#fff',
                                            width: 100,
                                            height: 40,
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            borderWidth: 1,
                                            borderColor: '#A60D0D'
                                        }}
                                    >
                                        <Text style={{
                                            color: '#A60D0D',
                                            fontSize: 14,
                                            width: '100%',
                                            textAlign: 'center'

                                        }}>ĐÁNH GIÁ</Text>
                                    </TouchableOpacity>
                                </View>

                            </View>
                        </View>
                    }
                    {
                        Boolean(Loai == 'XCT') &&
                        <View style={styles.modalView}>
                            <View style=
                                {{
                                    width: '100%',
                                    padding: 10,
                                    backgroundColor: '#025159',
                                    marginBottom: 10,
                                }}>
                                <Text style={{
                                    color: '#fff',
                                    fontWeight: '700',
                                }}>GIAO HÀNG THÀNH CÔNG</Text>
                                <Text style={{
                                    marginLeft: 5,
                                    color: '#fff',
                                }}>Cảm ơn bạn đã mua hàng tại GOTECH</Text>
                            </View>
                            <View style=
                                {{
                                    width: '100%',
                                    padding: 10,
                                    backgroundColor: '#fff',
                                }}>
                                <Text style={{
                                    color: '#000',
                                    fontWeight: '700',
                                }}>Địa chỉ nhận hàng</Text>
                                <Text style={{
                                    marginLeft: 5,
                                }}>Nguyễn Đình Trải</Text>
                                <Text style={{
                                    marginLeft: 5,
                                }}>0328 910 355</Text>
                                <Text style={{
                                    marginLeft: 5,
                                }}>Phú Hòa, Mỹ Đức, Phù Mỹ, Bình Định</Text>
                            </View>

                            <View style={{
                                width: '100%',
                                backgroundColor: '#fff',
                                marginTop: 10,
                            }}>
                                <Text style={{
                                    margin: 10,
                                    color: '#000',
                                    fontWeight: '700',
                                }}>Thông tin đơn hàng</Text>
                                <View style={
                                    {
                                        height: 1,
                                        width: '100%',
                                        backgroundColor: '#f1f1f1'
                                    }
                                }></View>
                                <View style={styles.SPNB}>

                                    <View style={styles.SPNB_item} >
                                        <Image
                                            style={styles.ImageSPNB}
                                            source={{
                                                uri: 'https://cdn.tgdd.vn/Products/Images/42/269831/Xiaomi-redmi-note-11-blue-200x200.jpg'
                                            }}
                                        />
                                    </View>
                                    <View>
                                        <View style={styles.SPNB_item}>
                                            <Text
                                                style={styles.TenSP}>
                                                Xiaomi Redmi Note 11
                                            </Text>
                                        </View>
                                        <View style={styles.SPNB_item}>
                                            <Text
                                                style={styles.GiaSP}>
                                                4,000,000 đ
                                            </Text>
                                            <Text>Số lượng: 1</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={
                                    {
                                        height: 1,
                                        width: '100%',
                                        backgroundColor: '#f1f1f1'
                                    }
                                }></View>
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between'
                                }}>
                                    <Text style={{
                                        margin: 10,
                                        color: '#444',
                                        fontWeight: '700',
                                        fontSize: 14
                                    }}>THÀNH TIỀN</Text>
                                    <Text style={{
                                        margin: 10,
                                        color: '#A60D0D',
                                        fontSize: 16,
                                    }}>4.000.000 đ</Text>
                                </View>

                            </View>
                            <View style=
                                {{
                                    width: '100%',
                                    padding: 10,
                                    backgroundColor: '#fff',
                                    marginTop: 10,
                                }}>
                                <Text style={{
                                    color: '#000',
                                    fontWeight: '700',
                                }}>Hình thức thanh toán</Text>
                                <Text style={{
                                    marginLeft: 5,
                                }}>Thanh toán khi nhận hàng</Text>
                            </View>
                            <View style=
                                {{
                                    width: '100%',
                                    padding: 10,
                                    backgroundColor: '#fff',
                                    marginTop: 10,
                                }}>
                                <Text style={{
                                    color: '#000',
                                    fontWeight: '700',
                                }}>Thời gian ghi nhận</Text>
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                }}>

                                    <Text style={{
                                        marginLeft: 5,
                                    }}>Thời gian đặt hàng: </Text>
                                    <Text>13/03/2022</Text>
                                </View>
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                }}>

                                    <Text style={{
                                        marginLeft: 5,
                                    }}>Thời gian nhận hàng: </Text>
                                    <Text>17/03/2022</Text>
                                </View>

                            </View>
                        </View>
                    }
                    <TouchableOpacity onPress={() => {
                        setModalVisible(!modalVisible);
                    }} style={{
                        minHeight: 150,
                        width: '100%',
                    }}>

                    </TouchableOpacity>
                </View>
            </Modal>}

        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#fff',
    },
    container: {
        width: '100%',
        backgroundColor: '#fff',
    },
    SPNB: {
        paddingLeft: 15,
        width: '100%',
        height: 100,
        borderColor: '#bbb',
        paddingTop: 0,
        display: "flex",
        alignItems: "center",
        flexDirection: 'row',
        marginBottom: 1,
    },
    SPNB_item: {
        marginRight: 20,
        display: 'flex',
        marginTop: 8,

    },
    ImageSPNB: {
        width: 70,
        height: 70,
    },
    ImageSP: {
        width: 64,
        height: 90,
        borderRadius: 5,
    },
    TenSP: {
        width: 250,
        fontWeight: '700',

    },
    GiaSP: {
        marginRight: 20,
        color: 'red',
        marginBottom: 10,
    },
    centeredView: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalView: {
        width: '94%',
        padding: 10,
        backgroundColor: "#f1f1f1",
        borderRadius: 5,
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
    Comment_Input_item: {
        padding: 10,
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#bbb',
        width: '100%'
    },
    Comment_Input_lable: {
        width: '98%',
    },
    myStarStyle: {
        color: 'yellow',
        backgroundColor: 'transparent',
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
    },
    myEmptyStarStyle: {
        color: 'white',
    }
});
export default DaMua
