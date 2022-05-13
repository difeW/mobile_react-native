import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Button, Modal, ActivityIndicator } from 'react-native';
import { Link, Routes, Route, NativeRouter, useNavigate } from 'react-router-native';
import { useState, useContext } from 'react'
import { Dimensions } from 'react-native';
import axios from 'axios';
import { AuthContext } from '../../Context/Auth';


const DangNhap = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [secur, setSecur] = useState(true)
    const maxWidth = Dimensions.get('window').height - 250
    const { authState, setAuth } = useContext(AuthContext)
    const his = useNavigate()
    const [mess, setMess] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleChangePassword = (e) => {
        setMess('')
        setPassword(e)
    }
    const handleChangeUsername = (e) => {
        setMess('')
        setUsername(e)
    }
    const handleSubmit = async () => {
        if (!username || !password) {
            setMess('Tài khoản hoặc mật khẩu không được để trống.')
        }
        else {
            try {
                setModalVisible(true)
                const u = {
                    username,
                    password
                }
                // setAuth(user)
                const res = await axios.post('https://mobile12346.herokuapp.com/auth/signin', u)
                setModalVisible(false)
                if (res.data.success) {
                    const user = {
                        token: res.data.token
                    }
                    setAuth(user)
                    his('/Home')
                }
                else {
                    setMess(res.data.mess)
                }
            } catch (e) {
                setMess('Tài khoản hoặc mật khẩu sai.')
                setModalVisible(false)
            }
        }
    }

    return (
        <View style={{
            width: '100%',
            height: maxWidth
        }}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <ActivityIndicator size="large" color="#0000ff" />
                    </View>
                </View>
            </Modal>
            <View style={styles.DangNhap_Input}>
                <View style={styles.DangNhap_Input_lable}>
                    <View style={styles.DangNhap_CII}>
                        <Image
                            style={styles.DangNhap_InputIcon}
                            source={{
                                uri: 'https://www.nicepng.com/png/detail/136-1366211_group-of-10-guys-login-user-icon-png.png'
                            }}
                        />
                    </View>
                    <TextInput value={username} onChangeText={(e) => handleChangeUsername(e)} style={styles.DangNhap_Input_item} placeholder='Tài khoản' />
                </View>
                <View style={styles.DangNhap_Input_lable}>
                    <View style={styles.DangNhap_CII}>
                        <Image
                            style={styles.DangNhap_InputIcon}
                            source={{
                                uri: 'https://cdn1.iconfinder.com/data/icons/hawcons/32/699371-icon-24-key-512.png'
                            }}
                        />
                    </View>
                    <TextInput value={password} id='password' onChangeText={(e) => handleChangePassword(e)} secureTextEntry={secur} style={styles.DangNhap_Input_item} placeholder='Mật khẩu' />
                    {Boolean(password != '') &&
                        <TouchableOpacity
                            onPress={() => {
                                setSecur(!secur)
                            }}
                            style={{
                                position: 'absolute',
                                right: 10,
                            }}>
                            <Image
                                style={{
                                    width: 30,
                                    height: 30,
                                }}

                                source={{
                                    uri: 'https://media.istockphoto.com/vectors/eye-icon-logo-look-and-vision-icons-vector-vector-id1142767802?k=20&m=1142767802&s=170667a&w=0&h=DkbhhB5J8EpAbeWp2eAo0WQkuXqM9qqJ5cRRalG4eFo='
                                }} />
                        </TouchableOpacity>
                    }
                </View>
            </View>
            <View style={styles.containerMess}>
                <Text style={styles.mess}>{mess}</Text>
            </View>
            <View style={styles.DangNhap_Input}>
                <TouchableOpacity
                    style={styles.DangNhap_btn}
                    onPress={() => { handleSubmit() }}
                >
                    <Text style={styles.DangNhap_btntext}> ĐĂNG NHẬP</Text>
                </TouchableOpacity >
            </View>

            <View style={styles.DangNhap_dkyqmk}>
                <Link to='/DangKy' underlayColor={'#'}><Text style={styles.link_dkqmk}>Đăng ký</Text></Link>
                <Link to='/QuenMatKhau' underlayColor={'#'}><Text style={styles.link_dkqmk}>Quên mật khẩu?</Text></Link>
            </View>
            <View style={{
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                bottom: '20%',
            }}>
                <View style={{
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row'
                }}>
                    <View style={{
                        height: 1,
                        width: 100,
                        backgroundColor: '#aaa',
                        marginRight: 5,
                    }}>

                    </View>
                    <Text style={styles.textttk}>Hoặc thông qua </Text>
                    <View style={{
                        height: 1,
                        width: 100,
                        backgroundColor: '#aaa',
                    }}></View>
                </View>

                <View style={styles.DangNhap_TKK}>
                    <View
                        style={styles.DangNhap_btntkk}
                    >
                        <Image
                            style={{
                                width: 80,
                                height: 80,
                            }}
                            source={{
                                uri: 'https://brandlogos.net/wp-content/uploads/2021/04/facebook-icon-512x512.png'
                            }}
                        />
                    </View>
                    <View
                        style={styles.DangNhap_btntkk}
                    >
                        <Image
                            style={styles.DangNhap_btntkktext}
                            source={{
                                uri: 'https://logowik.com/content/uploads/images/985_google_g_icon.jpg'
                            }} />
                    </View>
                </View>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    DangNhap: {
        width: '100%',
        height: '100%'
    },
    DangNhap_Input_item: {
        fontSize: 14,
        paddingLeft: 10,
        borderRadius: 10,
        width: '85%',
        height: '100%',
        backgroundColor: '#fff',
    },
    DangNhap_InputIcon: {
        width: 20,
        height: 20,
    },
    DangNhap_CII: {
        borderColor: '#bbb',
        width: '14%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 1,
        height: '100%',
    },
    DangNhap_Input: {
        width: '100%',
        display: 'flex',
        alignItems: 'center'
    },
    DangNhap_Input_lable: {
        height: 45,
        backgroundColor: '#fff',
        borderRadius: 5,
        borderColor: '#bbb',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
    },
    DangNhap_btn: {
        borderRadius: 5,
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#F2C0A2',
        fontSize: 20,
        width: 200,
        height: 40,
    },
    DangNhap_btntext: {
        textAlign: 'center',
        color: '#444',
        fontSize: 15,
        fontWeight: '700',
    },
    DangNhap_dkyqmk: {
        marginTop: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    link_dkqmk: {
        fontWeight: '100',
        fontSize: 14,
        color: '#fff',
        textDecorationLine: 'underline'
    },
    DangNhap_TKK: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 10,
    },
    DangNhap_btntkk: {
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#bbb',
        fontSize: 20,
    },
    DangNhap_btntkktext: {
        width: 55,
        height: 55,
        borderRadius: 50,
    },
    textttk: {
        marginTop: 5,
        color: '#aaa',
        fontSize: 15,
    },
    gachngang: {
        marginTop: 20,
        width: '100%',
        height: 1,
        backgroundColor: '#bbb'
    },
    DangNhap_header: {
        color: '#000',
        fontSize: 20,
        fontWeight: 'bold',
    },
    DangNhap_DangKyNgay: {
        marginTop: '35%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textdk: {
        fontSize: 16,
        color: '#5D5F62',
    },
    containerMess: {
        margin: 5,
    },
    mess: {
        fontSize: 16,
        color: 'red'
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",

        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    modalView: {
        margin: 20,
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",

    },
});
export default DangNhap