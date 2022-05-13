import { StyleSheet, Text, ScrollView, View, Image, TouchableOpacity, Modal, TextInput, TextAncestor } from 'react-native';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../Context/Auth';
import axios from 'axios';

const DoiXacNhan = () => {
    const { authState } = useContext(AuthContext)
    const [modalVisible, setModalVisible] = useState(false);
    const [list, setList] = useState(null);
    const [detail, setDetail] = useState()
    useEffect(async () => {
        const res = await axios.get('https://mobile12346.herokuapp.com/order/bill', { headers: { Authorization: `Bearer ${authState.user.token}` } })
        if (!res.data.success)
            setList(([]))
        else
            setList(res.data.order)
    }, [])
    function formatVND(n) {
        return n.toFixed(1).replace(/(\d)(?=(\d{3})+\.)/g, '$1,') + ' đ';
    }
    return (
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
                {list && list.map((e) => {
                    return (
                        <View key={e.id}
                            style={{
                                width: '94%',
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
                                    borderTopRightRadius: 5,
                                    borderTopLeftRadius: 5,
                                    backgroundColor: '#fff',

                                }}>
                                <Text style={{
                                    fontSize: 13,
                                    color: '#444'
                                }}>ĐẶT NGÀY: {e.OrderDay}</Text>
                            </View>
                            <View
                                style={{
                                    width: '100%',
                                    marginBottom: 1,
                                    backgroundColor: '#fff',
                                }}>
                                {e.Detail.map((e) => {
                                    return (
                                        <View style={styles.SPNB}>

                                            <View style={styles.SPNB_item} >
                                                <Image
                                                    style={styles.ImageSPNB}
                                                    source={{
                                                        uri: e.Image
                                                    }}
                                                />
                                            </View>
                                            <View>
                                                <View style={styles.SPNB_item}>
                                                    <Text
                                                        style={styles.TenSP}>
                                                        {e.ProductName}
                                                    </Text>
                                                </View>
                                                <View style={styles.SPNB_item}>
                                                    <Text
                                                        style={styles.GiaSP}>
                                                        {formatVND(e.Price)}
                                                    </Text>
                                                    <Text>Số lượng: {e.Quantity}</Text>
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
                                <TouchableOpacity onPress={async () => {
                                    console.log(authState.user.token)
                                    console.log(e.id)
                                    setModalVisible(true)
                                    const res = await axios.get(`https://mobile12346.herokuapp.com/order/detail/${e.id}`, { headers: { Authorization: `Bearer ${authState.user.token}` } })
                                    setDetail(res.data)
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
                                        marginRight: 10,
                                    }}>
                                    <Text
                                        style={{
                                            fontSize: 14,
                                            color: '#A60D0D'
                                        }}>Xem chi tiết</Text>
                                </TouchableOpacity>
                                <View
                                    style={{
                                        width: 100,
                                        backgroundColor: '#F40E0E',
                                        height: 40,
                                        borderRadius: 5,
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}>
                                    <Text
                                        style={{
                                            fontSize: 14,
                                            color: '#fff'
                                        }}>Hủy</Text>
                                </View>
                            </View>
                        </View>
                    )
                })}
                <View style={{
                    height: 100
                }}>
                </View>
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                {!detail &&
                    <View style={styles.centeredView} >
                        <Text>Đang tải...</Text>
                    </View>}
                {detail && <View style={styles.centeredView}
                >
                    <TouchableOpacity onPress={() => {
                        setModalVisible(!modalVisible);
                    }} style={{
                        minHeight: 150,
                        width: '100%',
                    }}>

                    </TouchableOpacity>
                    <View style={styles.modalView}>
                        <View style=
                            {{
                                width: '100%',
                                padding: 10,
                                backgroundColor: '#A60D0D',
                                marginBottom: 10,
                            }}>
                            <Text style={{
                                color: '#fff',
                                fontWeight: '700',
                            }}>ĐANG ĐỢI XÁC NHẬN</Text>
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
                                fontStyle: 'italic'
                            }}>{detail.address.Name}</Text>
                            <Text style={{
                                marginLeft: 5,
                                fontStyle: 'italic'
                            }}>{detail.address.PhoneNumber}</Text>
                            <Text style={{
                                marginLeft: 5,
                                fontStyle: 'italic'
                            }}>{detail.address.Address}</Text>
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
                            <ScrollView style={{
                                height: 150
                            }} nestedScrollEnabled={true}>
                                <View >
                                    {detail.detail.map((e) => {
                                        return (
                                            <View key={e.ProductId} style={styles.SPNB}>

                                                <View style={styles.SPNB_item} >
                                                    <Image
                                                        style={styles.ImageSPNB}
                                                        source={{
                                                            uri: e.Image
                                                        }}
                                                    />
                                                </View>
                                                <View>
                                                    <View style={styles.SPNB_item}>
                                                        <Text
                                                            style={styles.TenSP}>
                                                            {e.ProductName}
                                                        </Text>
                                                    </View>
                                                    <View style={styles.SPNB_item}>
                                                        <Text
                                                            style={styles.GiaSP}>
                                                            {formatVND(e.Price)}
                                                        </Text>
                                                        <Text>Số lượng: {e.Quantity}</Text>
                                                    </View>
                                                </View>
                                            </View>
                                        )

                                    })}
                                </View>
                            </ScrollView>

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
                                }}>{detail.totalbill && formatVND(detail.totalbill)}</Text>
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
                            }}>{detail.payment}</Text>
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
                                <Text>{detail.date}</Text>
                            </View>

                        </View>
                    </View>
                    <TouchableOpacity onPress={() => {
                        setModalVisible(!modalVisible);
                    }} style={{
                        minHeight: 150,
                        width: '100%',
                    }}>
                    </TouchableOpacity>
                </View>}
            </Modal>

        </ScrollView >
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
        backgroundColor: '#fff',
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
        fontWeight: '700',
        width: 250,
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
        width: '95%',
        backgroundColor: "#f1f1f1",
        borderRadius: 5,
        padding: 10,
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
        borderRadius: 10,
        borderColor: '#bbb',
        width: '100%'
    },
    Comment_Input_lable: {
        width: '90%',
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
export default DoiXacNhan