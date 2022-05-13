import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, Image, Modal } from 'react-native';
import { Link, Routes, Route, NativeRouter, useNavigate } from 'react-router-native';
import { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { AuthContext } from '../../../Context/Auth';
const DiaChi = () => {
    const { authState } = useContext(AuthContext)
    const [modalVisible, setModalVisible] = useState(false);
    const [Sua, setSua] = useState('ChonDiaChi')
    const [DiaChiThem, setDiaChiThem] = useState(
        {
            id: '',
            Name: '',
            PhoneNumber: '',
            Address: '',
            Note: ''
        }
    )
    const [DiaChiSua, setDiaChiSua] = useState()
    const [listDiaChi, setListDiaChi] = useState()
    const [DiaChi, setDiaChi] = useState()
    useEffect(async () => {
        const res = await axios.get('https://mobile12346.herokuapp.com/users/address', { headers: { Authorization: `Bearer ${authState.user.token}` } })
        if (res.data.address.success) {
            setDiaChi(res.data.address.data)
        }
        else {
            setDiaChi({})
        }
    }, [])
    useEffect(async () => {
        const res = await axios.get('https://mobile12346.herokuapp.com/users/address', { headers: { Authorization: `Bearer ${authState.user.token}` } })
        if (res.data.address.success) {
            setListDiaChi(res.data.listAddress)
        }
        else {
            setListDiaChi([])
        }
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.Title}>
                <Text style={styles.Title_Text} >THÔNG TIN GIAO HÀNG</Text>
            </View>
            <View style={styles.ContentMain}>
                {!DiaChi && <View style={styles.Content} >
                    <Text>Đang tải...</Text>
                </View>}
                {DiaChi && Object.keys(DiaChi).length == 0 && <View style={styles.Content} >
                    <Text>Vui lòng cập nhật địa chỉ...</Text>
                </View>}
                {DiaChi && Object.keys(DiaChi).length != 0 && <View style={styles.Content} >
                    <View style={styles.Content_Item}>
                        <Text style={styles.Content_ItemLB}>Tên: </Text>
                        <Text style={styles.Content_ItemText}>{DiaChi.Name}</Text>
                    </View>
                    <View style={styles.Content_Item}>
                        <Text style={styles.Content_ItemLB}>SDT: </Text>
                        <Text style={styles.Content_ItemText}>{DiaChi.PhoneNumber}</Text>
                    </View>
                    <View style={styles.Content_Item}>
                        <Text style={styles.Content_ItemLB}>Địa Chỉ: </Text>
                        <Text style={styles.Content_ItemText}>{DiaChi.Address}</Text>
                    </View>
                    <View style={styles.Content_Item}>
                        <Text style={styles.Content_ItemLB}>Ghi chú: </Text>
                        <Text style={styles.Content_ItemText}>{DiaChi.Note}</Text>
                    </View>
                </View>}

                <TouchableOpacity
                    onPress={() => {
                        setModalVisible(!modalVisible)
                    }}
                >
                    <Image
                        style={{
                            height: 19, width: 19,
                        }}
                        source={{
                            uri: 'https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-right-01-512.png'
                        }} />
                </TouchableOpacity>
            </View>
            <View
            >
                <Modal
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

                        {Boolean(Sua == 'ChonDiaChi') && <View style={styles.modalView}>
                            <TouchableOpacity
                                onPress={() => {
                                    setModalVisible(false)
                                    setSua('ChonDiaChi')
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
                            <View style={{
                                marginBottom: 10
                            }}>
                                <Text style={{
                                    fontSize: 18,
                                    fontWeight: '700',
                                    color: '#444',

                                }}>Chọn Địa Chỉ</Text>
                            </View>
                            {listDiaChi && listDiaChi.map((e) => {
                                return (
                                    <View style={styles.ContentMain} key={e.id}>
                                        <TouchableOpacity
                                            onPress={async () => {
                                                let newList = listDiaChi.filter(item => item.id != e.id)
                                                setListDiaChi([...newList])
                                                if (newList.length == 0)
                                                    setDiaChi({})
                                                else setDiaChi(newList[0])
                                                const res = await axios.delete(`https://mobile12346.herokuapp.com/users/deleteAddress/${e.id}`, { headers: { Authorization: `Bearer ${authState.user.token}` } })
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
                                        <TouchableOpacity onPress={async () => {
                                            setDiaChi(e)
                                            setModalVisible(false)
                                            const res = await axios.patch(`https://mobile12346.herokuapp.com/users/pickaddress/${e.id}`, {}, { headers: { Authorization: `Bearer ${authState.user.token}` } })
                                        }} style={styles.Content} >
                                            <View style={styles.Content_Item}>
                                                <Text style={styles.Content_ItemLB}>Tên: </Text>
                                                <Text style={styles.Content_ItemText}>{e.Name}</Text>
                                            </View>
                                            <View style={styles.Content_Item}>
                                                <Text style={styles.Content_ItemLB}>SDT: </Text>
                                                <Text style={styles.Content_ItemText}>{e.PhoneNumber}</Text>
                                            </View>
                                            <View style={styles.Content_Item}>
                                                <Text style={styles.Content_ItemLB}>Địa Chỉ: </Text>
                                                <Text style={styles.Content_ItemText}>{e.Address}</Text>
                                            </View>
                                            <View style={styles.Content_Item}>
                                                <Text style={styles.Content_ItemLB}>Ghi chú: </Text>
                                                <Text style={styles.Content_ItemText}>{e.Note}</Text>
                                            </View>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => {
                                            setSua('Sua')
                                            setDiaChiSua(e)
                                        }} style={styles.ContentControl}>
                                            <Text style={styles.ContentControl_Text}> Sửa</Text>
                                        </TouchableOpacity>
                                    </View>
                                )
                            })}
                            {listDiaChi && listDiaChi.length == 0 &&
                                <Text style={
                                    {
                                        marginBottom: 30,
                                        marginTop: 30,
                                    }
                                }>Chưa có địa chỉ nào được thêm.</Text>}
                            <TouchableOpacity onPress={() => {
                                setSua('Them')
                            }} style={{
                                backgroundColor: '#fff',
                                width: '50%',
                                height: 40,
                                justifyContent: 'center', alignItems: 'center',
                                borderRadius: 2,
                                borderWidth: 1,
                                borderColor: '#A60D0D',
                            }}>
                                <Text style={{
                                    color: '#A60D0D'
                                }}>Thêm Địa Chỉ</Text>
                            </TouchableOpacity>
                        </View>}
                        {Boolean(Sua == 'Sua') &&
                            <View style={styles.modalView}>
                                <TouchableOpacity
                                    onPress={() => {
                                        setModalVisible(false)
                                        setSua('ChonDiaChi')
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
                                <View style={{
                                    width: '94%',
                                    marginBottom: 10,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                    <Text style={{
                                        fontSize: 20,
                                        fontWeight: '700',
                                        color: '#444',
                                    }}>Sửa địa chỉ</Text>
                                    <View style={{
                                        width: '94%',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}>
                                        <TextInput
                                            onChangeText={(e) => {
                                                const newDC = DiaChiSua
                                                setDiaChiSua({ ...newDC, Name: e })
                                            }}
                                            value={DiaChiSua.Name}
                                            style={styles.inputSua}
                                            placeholder='Tên'
                                        />
                                        <TextInput
                                            onChangeText={(e) => {
                                                const newDC = DiaChiSua
                                                setDiaChiSua({ ...newDC, PhoneNumber: e })
                                            }}
                                            value={DiaChiSua.PhoneNumber}
                                            style={styles.inputSua}
                                            placeholder='SDT'
                                        />
                                        <TextInput
                                            onChangeText={(e) => {
                                                const newDC = DiaChiSua
                                                setDiaChiSua({ ...newDC, Address: e })
                                            }}
                                            value={DiaChiSua.Address}
                                            style={styles.inputSua}
                                            placeholder='Địa chỉ'
                                        />
                                        <TextInput
                                            onChangeText={(e) => {
                                                const newDC = DiaChiSua
                                                setDiaChiSua({ ...newDC, Note: e })
                                            }}
                                            value={DiaChiSua.Note}
                                            style={styles.inputSua}
                                            placeholder='Ghi Chú'
                                        />
                                    </View>
                                    <View style={{
                                        width: '94%',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        flexDirection: 'row',
                                        marginTop: 10
                                    }}>
                                        <TouchableOpacity onPress={() => {
                                            setSua('ChonDiaChi')
                                        }} style={styles.Btn_Huy}>
                                            <Text style={styles.Btn_Text}>Hủy</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            onPress={async () => {
                                                setSua('ChonDiaChi')

                                                const newListDC = listDiaChi.slice()
                                                for (let i of newListDC) {
                                                    if (i.id == DiaChiSua.id) {
                                                        Object.assign(i, DiaChiSua)
                                                    }
                                                }
                                                setListDiaChi(newListDC)
                                                const res = await axios.patch(`https://mobile12346.herokuapp.com/users/updateAddress/${DiaChiSua.id}`, DiaChiSua, { headers: { Authorization: `Bearer ${authState.user.token}` } })
                                            }}
                                            style={styles.Btn_XacNhan}>
                                            <Text style={styles.Btn_Text}>Xác nhận</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        }
                        {Boolean(Sua == 'Them') &&
                            <View style={styles.modalView}>
                                <TouchableOpacity
                                    onPress={() => {
                                        setModalVisible(false)
                                        setSua('ChonDiaChi')
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
                                <View style={{
                                    width: '94%',
                                    marginBottom: 10,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                    <Text style={{
                                        fontSize: 18,
                                        color: '#444',
                                        fontWeight: '700'
                                    }}>Thêm địa chỉ</Text>
                                    <View style={{
                                        width: '94%',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}>
                                        <TextInput
                                            onChangeText={(e) => {
                                                const newDC = DiaChiThem
                                                setDiaChiThem({ ...newDC, Name: e })
                                            }}
                                            value={DiaChiThem.Ten}
                                            style={styles.inputSua}
                                            placeholder='Tên'
                                        />
                                        <TextInput
                                            onChangeText={(e) => {
                                                const newDC = DiaChiThem
                                                setDiaChiThem({ ...newDC, PhoneNumber: e })
                                            }}
                                            value={DiaChiThem.SDT}
                                            style={styles.inputSua}
                                            placeholder='SDT'
                                        />
                                        <TextInput
                                            onChangeText={(e) => {
                                                const newDC = DiaChiThem
                                                setDiaChiThem({ ...newDC, Address: e })
                                            }}
                                            value={DiaChiThem.DiaChi}
                                            style={styles.inputSua}
                                            placeholder='Địa chỉ'
                                        />
                                        <TextInput
                                            onChangeText={(e) => {
                                                const newDC = DiaChiThem
                                                setDiaChiThem({ ...newDC, Note: e })
                                            }}
                                            value={DiaChiThem.GhiChu}
                                            style={styles.inputSua}
                                            placeholder='Ghi Chú'
                                        />
                                    </View>
                                    <View style={{
                                        width: '94%',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        flexDirection: 'row',
                                        marginTop: 10
                                    }}>
                                        <TouchableOpacity onPress={() => {
                                            setSua('ChonDiaChi')
                                        }} style={styles.Btn_Huy}>
                                            <Text style={styles.Btn_Text}>Hủy</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            onPress={async (e) => {
                                                styles.Btn_XacNhan = { ...styles.Btn_XacNhan, backgroundColor: 'rgba(0,180,216,0.5)' }
                                                const res = await axios.post('https://mobile12346.herokuapp.com/users/addAddress ', DiaChiThem, { headers: { Authorization: `Bearer ${authState.user.token}` } })
                                                const newListDC = listDiaChi.slice()
                                                setListDiaChi([...newListDC, { ...DiaChiThem, id: res.data.data }])
                                                setSua('ChonDiaChi')
                                                styles.Btn_XacNhan = { ...styles.Btn_XacNhan, backgroundColor: 'rgba(0,180,216,1)' }
                                            }
                                            }
                                            style={styles.Btn_XacNhan}>
                                            <Text style={styles.Btn_Text}>Xác nhận</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        }
                    </View>
                </Modal>
            </View >
        </View >
    )
}

const styles = StyleSheet.create({
    centeredView: {
        position: 'relative',
        backgroundColor: 'rgba(0,0,0,0.7)',
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalView: {
        width: '92%',
        margin: 20,
        backgroundColor: "#eee",
        borderRadius: 10,
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
    container: {
        paddingTop: 10,
        marginTop: 10,
        width: '100%',
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    Title: {
        width: '94%',
        marginBottom: 0,
    },
    Title_Text: {
        fontSize: 16,
        fontWeight: '700',
        color: '#000',
    },
    ContentMain: {
        backgroundColor: '#fff',
        marginBottom: 10,
        width: '94%',
        flexDirection: 'row',
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    Content: {
        marginBottom: 5
    },
    Content_Item: {
        flexDirection: 'row',
    },
    Content_ItemLB: {
        fontSize: 14,
        fontWeight: '700',
        width: 80,
    },
    Content_ItemText: {
        width: 180,
        fontSize: 16,
        fontWeight: '100',
        color: '#777',
        fontStyle: "italic",
    },
    ContentControl: {
        position: 'absolute',
        bottom: 10,
        right: 10,
    },
    ContentControl_Text: {
        fontSize: 16,
        color: '#A60D0D'
    },
    inputSua: {
        marginTop: 10,
        fontSize: 16,
        padding: 10,
        backgroundColor: '#fff',
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: '#bbb',
        borderRadius: 5,
    },
    Btn_Huy: {
        width: 140,
        marginRight: 10,
        height: 40,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#D83434',
    },
    Btn_XacNhan: {
        width: 140,
        height: 40,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00B4D8',
    },
    Btn_Text: {
        color: 'white'
    },
});
export default DiaChi