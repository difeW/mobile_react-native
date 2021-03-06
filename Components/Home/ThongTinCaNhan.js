import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ActivityIndicator, Text, Modal, View, Image, TouchableOpacity, Pressable, TextInput } from 'react-native';
import { Link, Routes, Route, NativeRouter } from 'react-router-native';
import { useState } from 'react';

import ModalC from '../ComponentPublic/ModalC';
import { useEffect } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Context/Auth';
import { NameContext } from '../../Context/NameContext';
import axios from 'axios';
import { Picker } from '@react-native-picker/picker'
import { url } from '../../Context/container';

const ThongTinCaNhan = () => {
    const { setName, setAva } = useContext(NameContext)
    const days = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    const handleDate = (string) => {
        if (string == null) {
            return {
                day: '1',
                month: '2',
                year: '1960',
            }
        }
        const day = [string[0], string[1]].join('')
        const month = [string[3], string[4]].join('')
        const year = [string[6], string[7], string[8], string[9]].join('')
        return {
            day,
            month,
            year
        }
    }
    const { authState } = useContext(AuthContext)
    const [Load, setLoad] = useState(false)
    const [modalVisible, setModalVisible] = useState('');
    const [Ten, setTen] = useState('')
    const [SDT, setSDT] = useState('')
    const [diaChi, setDiaChi] = useState('')
    const [ngaySinh, setNgaySinh] = useState('')
    const [taiKhoan, setTaiKhoan] = useState('')
    const [Email, setEmail] = useState('')
    const [date, setdate] = useState({
        day: '1',
        month: '2',
        year: '1960',
    })
    const [API, setAPI] = useState(false)
    useEffect(async () => {
        const thongtin = await axios.get(`${url}/users/me`, { headers: { Authorization: `Bearer ${authState.user.token}` } })
        setTen(thongtin.data.FullName)
        setSDT(thongtin.data.PhoneNumber)
        setDiaChi(thongtin.data.Address)
        setNgaySinh(thongtin.data.Birthday)
        setdate({ ...handleDate(thongtin.data.Birthday) })
        setTaiKhoan(thongtin.data.UserName)
        setEmail(thongtin.data.Email)
        setName(thongtin.data.UserName)
        setAPI(true)
    }, [])
    const [Old_Value, setPassword] = useState('')
    const [New_Value, setNewPassword] = useState('')
    const [ReNew_Value, setReNewPassword] = useState('')
    const [mess, setMess] = useState('')
    const handleSubmitPassword = async () => {
        if (!Old_Value || !New_Value || !ReNew_Value) {
            setMess('C??c tr?????ng kh??ng ???????c ????? tr???ng')
        }
        else {
            if (New_Value != ReNew_Value) {
                setMess('M???t kh???u nh???p l???i kh??ng ????ng')
            } else {
                setLoad(true)
                const res = await axios.post(`${url}/users/changepassword`, {
                    Old_Value, New_Value
                }, { headers: { Authorization: `Bearer ${authState.user.token}` } })
                if (res.data.success) {
                    setModalVisible('')
                    setPassword('')
                    setReNewPassword('')
                    setNewPassword('')
                    setLoad(false)
                } else {
                    setMess(res.data.mess)
                    setLoad(false)
                }

            }
        }
    }
    return API ? (
        <View style={styles.container}>
            {Load && <ModalC>
                <ActivityIndicator size="large" color="#0000ff" />
            </ModalC>}
            <View style={styles.row}>
                <View style={styles.label}>
                    <Text
                        style={styles.textlabel}
                    >T??n: </Text>
                </View>
                <TouchableOpacity onPress={() => {
                    setModalVisible('Ten')
                }} style={styles.text}>
                    <Text
                        style={styles.textT}>{Ten || "ch??a c???p nh???t"}</Text>
                    <Image
                        style={{
                            height: 19, width: 19,
                        }}
                        source={{
                            uri: 'https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-right-01-512.png'
                        }} />
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <View style={styles.label}>
                    <Text
                        style={styles.textlabel}
                    >SDT: </Text>
                </View>
                <TouchableOpacity onPress={() => {
                    if (SDT)
                        setModalVisible('SDT')
                    else
                        setModalVisible('AddSDT')
                }} style={styles.text}>
                    <Text
                        style={styles.textT}>{SDT || "ch??a c???p nh???t"}</Text>
                    <Image
                        style={{
                            height: 19, width: 19,
                        }}
                        source={{
                            uri: 'https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-right-01-512.png'
                        }} />
                </TouchableOpacity>
            </View>
            <View style={styles.rowNgaySinh}>
                <View style={styles.label}>
                    <Text
                        style={styles.textlabel}
                    >Ng??y sinh: </Text>
                </View>
                <TouchableOpacity onPress={() => {
                    setModalVisible('NgaySinh')
                }} style={styles.text}>
                    <Text
                        style={styles.textT}>{ngaySinh || "ch??a c???p nh???t"}</Text>
                    <Image
                        style={{
                            height: 19, width: 19,
                        }}
                        source={{
                            uri: 'https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-right-01-512.png'
                        }} />
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <View style={styles.label}>
                    <Text
                        style={styles.textlabel}
                    >T??n ????ng nh???p: </Text>
                </View>
                <View style={styles.text}>
                    <Text
                        style={styles.textT}>{taiKhoan || "ch??a c???p nh???t"}</Text>
                </View>
            </View>
            <View style={styles.rowNgaySinh}>
                <View style={styles.label}>
                    <Text
                        style={styles.textlabel}
                    >Email: </Text>
                </View>
                <View onPress={() => {
                    setModalVisible('EM')
                }} style={styles.text}>
                    <Text
                        style={styles.textT}>{Email || "ch??a c???p nh???t"}</Text>

                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.label}>
                    <Text
                        style={styles.textlabel}
                    >Thi???t l???p m???t kh???u: </Text>
                </View>
                <TouchableOpacity onPress={() => {
                    setModalVisible('MK')

                }} style={styles.text}>
                    <Text
                        style={styles.textT}></Text>
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
                {modalVisible == 'MK' && <ModalC>
                    <TouchableOpacity
                        onPress={() => {
                            setMess('')
                            setModalVisible(false)
                        }}
                        style={{
                            position: 'absolute',
                            top: 10,
                            right: 10,
                            width: 30,
                            height: 30,
                        }}
                    >
                        <Text style={{
                            fontWeight: '700',
                            color: '#777',
                            fontSize: 20,
                        }}>X</Text>
                    </TouchableOpacity>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 'bold',
                        marginBottom: 10,
                    }}>C???P NH???T M???T KH???U</Text>
                    <View style={styles.DangNhap_Input_lable}>
                        <TextInput style={styles.DangNhap_Input_item} secureTextEntry={true} onChangeText={(e) => {
                            setPassword(e)
                            setMess('')
                        }} value={Old_Value} placeholder='Nh???p m???t kh???u c??' />
                    </View>
                    <View style={styles.DangNhap_Input_lable}>
                        <TextInput style={styles.DangNhap_Input_item} secureTextEntry={true} onChangeText={(e) => {
                            setNewPassword(e)
                            setMess('')
                        }} value={New_Value} placeholder='M???t kh???u m???i' />
                    </View>
                    <View style={styles.DangNhap_Input_lable}>
                        <TextInput style={styles.DangNhap_Input_item} secureTextEntry={true} onChangeText={(e) => {
                            setReNewPassword(e)
                            setMess('')
                        }} value={ReNew_Value} placeholder='Nh???p l???i m???t kh???u m???i' />
                    </View>
                    <Text style={{
                        color: 'red'
                    }}>{mess}</Text>
                    <TouchableOpacity
                        onPress={() => {
                            handleSubmitPassword()
                        }}
                        style={{
                            borderRadius: 2,
                            position: 'relative',
                            backgroundColor: '#fff',
                            width: 200,
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
                            fontSize: 16,
                        }}>X??c nh???n</Text>
                    </TouchableOpacity>
                </ModalC>}

                {modalVisible == 'SDT' && <ModalC>
                    <TouchableOpacity
                        onPress={() => {
                            setMess('')
                            setModalVisible(false)
                        }}
                        style={{
                            position: 'absolute',
                            top: 10,
                            right: 10,
                            width: 30,
                            height: 30,
                        }}
                    >
                        <Text style={{
                            fontWeight: '700',
                            color: '#777',
                            fontSize: 20,
                        }}>X</Text>
                    </TouchableOpacity>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 'bold',
                        marginBottom: 10,
                    }}>C???P NH???T SDT</Text>
                    <View style={styles.DangNhap_Input_lable}>
                        <TextInput style={styles.DangNhap_Input_item} value={Old_Value} onChangeText={(e) => {
                            setPassword(e)
                        }} placeholder='Nh???p SDT c??' />
                    </View>
                    <View style={styles.DangNhap_Input_lable}>
                        <TextInput style={styles.DangNhap_Input_item} value={New_Value} onChangeText={(e) => {
                            setNewPassword(e)
                        }} placeholder='Nh???p SDT m???i' />
                    </View>
                    <Text style={{
                        color: 'red'
                    }}>{mess}</Text>
                    <TouchableOpacity
                        onPress={async () => {
                            if (!Old_Value || !New_Value) {
                                setMess("C??c tr?????ng kh??ng ???????c ????? tr???ng")
                            } else {
                                setLoad(true)
                                const res = await axios.patch(`${url}/users/updatephonenumber`, {
                                    Old_Value, New_Value
                                }, { headers: { Authorization: `Bearer ${authState.user.token}` } })
                                if (res.data.success) {
                                    setSDT(New_Value)
                                    setLoad(false)
                                    setModalVisible('')
                                    setPassword('')
                                    setNewPassword('')
                                } else {
                                    setLoad(false)
                                    setMess(res.data.mess)
                                }
                            }


                        }}
                        style={{
                            borderRadius: 2,

                            position: 'relative',
                            backgroundColor: '#fff',
                            width: 200,
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
                            fontSize: 16,
                        }}>X??c nh???n</Text>
                    </TouchableOpacity>
                </ModalC>}
                {modalVisible == 'Ten' && <ModalC>
                    <TouchableOpacity
                        onPress={() => {
                            setMess('')
                            setModalVisible(false)
                        }}
                        style={{
                            position: 'absolute',
                            top: 10,
                            right: 10,
                            width: 30,
                            height: 30,
                        }}
                    >
                        <Text style={{
                            fontWeight: '700',
                            color: '#777',
                            fontSize: 20,
                        }}>X</Text>
                    </TouchableOpacity>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 'bold',
                        marginBottom: 10,
                    }}>C???P NH???T T??N</Text>
                    <View style={styles.DangNhap_Input_lable}>
                        <TextInput style={styles.DangNhap_Input_item} value={Ten} onChangeText={(e) => {
                            setTen(e)
                            setMess('')
                        }} />
                    </View>
                    <Text style={{
                        color: 'red',
                    }
                    }>{mess}</Text>
                    <TouchableOpacity
                        onPress={async () => {
                            if (Ten == null || Ten == '') {
                                setMess('T??n kh??ng ???????c ????? tr???ng')
                            } else {
                                setLoad(true)
                                await axios.patch(`${url}/users/changename`, {
                                    Text: Ten
                                }, { headers: { Authorization: `Bearer ${authState.user.token}` } })
                                setModalVisible('')
                                setLoad(false)
                            }
                        }}
                        style={{
                            borderRadius: 2,
                            position: 'relative',
                            backgroundColor: '#fff',
                            width: 200,
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
                            fontSize: 16,
                        }}>X??c nh???n</Text>
                    </TouchableOpacity>
                </ModalC>}
                {modalVisible == 'DC' && <ModalC>
                    <TouchableOpacity
                        onPress={() => {
                            setMess('')
                            setModalVisible(false)
                        }}
                        style={{
                            position: 'absolute',
                            top: 10,
                            right: 10,
                            width: 30,
                            height: 30,
                        }}
                    >
                        <Text style={{
                            fontWeight: '700',
                            color: '#777',
                            fontSize: 20,
                        }}>X</Text>
                    </TouchableOpacity>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 'bold',
                        marginBottom: 10,
                    }}>C???P NH???T ?????A CH???</Text>
                    <View style={styles.DangNhap_Input_lable}>
                        <TextInput style={styles.DangNhap_Input_item} secureTextEntry={true} value={diaChi} />
                    </View>
                    <TouchableOpacity
                        onPress={() => {
                            setMess('')
                            setModalVisible(false)
                        }}
                        style={{
                            borderRadius: 2,

                            position: 'relative',
                            backgroundColor: '#fff',
                            width: 200,
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
                            fontSize: 16,
                        }}>X??c nh???n</Text>
                    </TouchableOpacity>
                </ModalC>}
                {modalVisible == 'NgaySinh' && <ModalC>
                    <TouchableOpacity
                        onPress={() => {
                            setMess('')
                            setModalVisible(false)
                        }}
                        style={{
                            position: 'absolute',
                            top: 10,
                            right: 10,
                            width: 30,
                            height: 30,
                        }}
                    >
                        <Text style={{
                            fontWeight: '700',
                            color: '#777',
                            fontSize: 20,
                        }}>X</Text>
                    </TouchableOpacity>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 'bold',
                        marginBottom: 10,
                    }}>C???P NH???T NG??Y SINH</Text>
                    <View style={
                        {
                            flexDirection: 'row',
                        }
                    }>
                        <Picker
                            selectedValue={Number(date.day)}
                            style={{
                                height: 10,
                                width: 128,
                            }}
                            onValueChange={(itemValue) => setdate({ ...date, day: itemValue })}
                        >

                            {((e) => {
                                for (let i = 1; i <= days[Number(date.month) - 1]; i++) {
                                    e.push(<Picker.Item key={`Thang${i}`} label={`Ng??y ${i}`} value={i} />)
                                }
                                return e
                            })([])}
                        </Picker>
                        <Picker
                            selectedValue={Number(date.month)}
                            style={{
                                height: 10,
                                width: 136,
                            }}
                            onValueChange={(itemValue) => setdate({ ...date, month: itemValue })}
                        >
                            {((e) => {
                                for (let i = 1; i < 13; i++) {
                                    e.push(<Picker.Item key={`Nam${i}`} label={`Th??ng ${i}`} value={i} />)
                                }
                                return e
                            })([])}
                        </Picker>
                        <Picker
                            selectedValue={Number(date.year)}
                            style={{
                                height: 10,
                                width: 104,
                            }}
                            onValueChange={(itemValue) => setdate({ ...date, year: itemValue })}
                        >
                            {((e) => {
                                for (let i = 1960; i < 2014; i++) {
                                    e.push(<Picker.Item key={i} label={`${i}`} value={i} />)
                                }
                                return e
                            })([])}
                        </Picker>
                    </View>
                    <TouchableOpacity
                        onPress={async () => {
                            console.log(authState.user.token)
                            setLoad(true)
                            const month1 = (Number(date.month) < 10) ? '0' + Number(date.month) : date.month
                            await axios.patch(`${url}/users/changebirthday`, {
                                Text: [date.day, month1, date.year].join('/')
                            }, { headers: { Authorization: `Bearer ${authState.user.token}` } })
                            setModalVisible('')
                            setNgaySinh([date.day, month1, date.year].join('/'))
                            setLoad(false)
                        }}
                        style={{
                            borderRadius: 2,

                            position: 'relative',
                            backgroundColor: '#fff',
                            width: 200,
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
                            fontSize: 16,
                        }}>X??c nh???n</Text>
                    </TouchableOpacity>
                </ModalC>}
                {modalVisible == 'AddSDT' && <ModalC>
                    <TouchableOpacity
                        onPress={() => {
                            setMess('')
                            setModalVisible(false)
                        }}
                        style={{
                            position: 'absolute',
                            top: 10,
                            right: 10,
                            width: 30,
                            height: 30,
                        }}
                    >
                        <Text style={{
                            fontWeight: '700',
                            color: '#777',
                            fontSize: 20,
                        }}>X</Text>
                    </TouchableOpacity>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 'bold',
                        marginBottom: 10,
                    }}>TH??M S??? ??I???N THO???I</Text>
                    <View style={styles.DangNhap_Input_lable}>
                        <TextInput style={styles.DangNhap_Input_item} onChangeText={(e) => {
                            setSDT(e)
                        }} value={SDT} />
                    </View>
                    <Text style={{
                        color: 'red'
                    }}>{mess}</Text>
                    <TouchableOpacity
                        onPress={async () => {
                            setLoad(true)
                            await axios.post(`${url}/users/addphonenumber`, {
                                Text: SDT
                            }, { headers: { Authorization: `Bearer ${authState.user.token}` } })
                            setModalVisible('')
                            setLoad(false)
                        }}
                        style={{
                            borderRadius: 2,
                            position: 'relative',
                            backgroundColor: '#fff',
                            width: 200,
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
                            fontSize: 16,
                        }}>X??c nh???n</Text>
                    </TouchableOpacity>
                </ModalC>}
            </View>
        </View >
    ) :
        (<View style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
        }}>
            <Text style={{
                fontSize: 18,
            }}>??ang t???i...</Text>
        </View>)
}
const styles = StyleSheet.create({
    container: {
        paddingTop: 18,
        display: 'flex',
        alignItems: 'center',
        width: '100%',

    },
    row: {
        marginBottom: 1,
        display: 'flex',
        flexDirection: 'row',
        height: 50,
        width: '100%',
        backgroundColor: '#fff',
        justifyContent: 'space-between',
    },
    rowNgaySinh: {
        marginBottom: 16,
        display: 'flex',
        flexDirection: 'row',
        height: 50,
        width: '100%',
        backgroundColor: '#fff',
        justifyContent: 'space-between',
    },
    label: {
        paddingLeft: 18,
        display: 'flex',
        justifyContent: 'center',
        flex: 3,
    },
    text: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        flex: 5,
        padding: 18,
        backgroundColor: '#fff',
    },
    textlabel: {
        width: 200,
        fontSize: 14,
        fontWeight: '700'
    },
    textT: {
        height: '150%',
        color: 'rgba(0,0,0,0.8)',
        fontSize: 14,
        fontWeight: '100',
        fontStyle: 'italic'
    },
    centeredView: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 5,
        padding: 30,
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
    },
    DangNhap_Input_lable: {
        height: 44,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#bbb',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 8,
    },
    DangNhap_CII: {
        borderColor: '#bbb',
        width: '15%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 1,
        height: '100%',
    },
    DangNhap_InputIcon: {
        width: 20,
        height: 20,
    },
    DangNhap_Input_item: {
        fontSize: 15,
        paddingLeft: 10,
        borderRadius: 5,
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
    },
});
export default ThongTinCaNhan