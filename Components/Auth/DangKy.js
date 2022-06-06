import { StyleSheet, Modal, Text, View, Image, ActivityIndicator, TouchableOpacity, TextInput, Button } from 'react-native';
import { Link, Routes, Route, useNavigate, NativeRouter } from 'react-router-native';
import { useState, useContext } from 'react'
import { Dimensions } from 'react-native';
import { AuthContext } from '../../Context/Auth';
import axios from 'axios';
import ModalC from '../ComponentPublic/ModalC';
import { url } from '../../Context/container';

const DangKy = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const { authState, setAuth } = useContext(AuthContext)
    const his = useNavigate()
    const maxWidth = Dimensions.get('window').height - 250
    const [mess, setMess] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repassword, setRepassword] = useState('')

    const handleChangeRepassword = (e) => {
        setMess('')
        setRepassword(e)
    }
    const handleChangeEmail = (e) => {
        setMess('')
        setEmail(e)
    }
    const handleChangePassword = (e) => {
        setMess('')
        setPassword(e)
    }
    const handleChangeUsername = (e) => {
        setMess('')
        setUsername(e)
    }
    const handleSubmit = async () => {

        if (!username || !password || !email || !repassword) {
            setMess('Khong duoc de trong')
        } else {
            if (repassword != password) {
                setMess('Mat khau nhap lai khong dung')
            } else {
                setModalVisible(true)
                const user = {
                    username, password, email
                }
                const res = await axios.post(`${url}/auth/signup`, user)
                setModalVisible(false)
                if (res.data.success) {
                    setAuth({ token: res.data.token })
                    his('/Home')
                }
                else {
                    setMess(res.data.mess)
                }
            }
        }
    }
    return (
        <View style={{
            width: '100%',
            height: maxWidth,
        }}>
            {modalVisible && <ModalC>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <ActivityIndicator size="large" color="#0000ff" />
                    </View>
                </View>
            </ModalC>}
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
                    <TextInput value={password} onChangeText={(e) => handleChangePassword(e)} secureTextEntry={true} style={styles.DangNhap_Input_item} placeholder='Mật khẩu' />
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
                    <TextInput value={repassword} onChangeText={(e) => handleChangeRepassword(e)} secureTextEntry={true} style={styles.DangNhap_Input_item} placeholder='Nhập lại mật khẩu' />
                </View>
                <View style={styles.DangNhap_Input_lable}>
                    <View style={styles.DangNhap_CII}>
                        <Image
                            style={styles.DangNhap_InputIcon}
                            source={{
                                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9HeM0md2QEO5qOwpBYTFUEjCCJPxTSy8hbQ&usqp=CAU'
                            }}
                        />
                    </View>
                    <TextInput value={email} onChangeText={(e) => handleChangeEmail(e)} style={styles.DangNhap_Input_item} placeholder='Email' />
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
                    <Text style={styles.DangNhap_btntext}> ĐĂNG KÝ</Text>
                </TouchableOpacity >
            </View>
            <View style={{
                width: '100%',
                position: 'absolute',
                bottom: '20%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',

            }}>
                <Text style={styles.textdk} >Bạn đã có tài khoản?</Text>
                <Link to='/' underlayColor={'#'}><Text style={styles.link_dkqmk}>Đăng Nhập</Text></Link>
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
        fontSize: 15,
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
        color: '#fff',
        fontSize: 16,
        fontWeight: '700',
    },
    DangNhap_dkyqmk: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    link_dkqmk: {
        fontWeight: '700',
        fontSize: 16,
        color: '#fff',
        textDecorationLine: 'underline',
    },
    DangNhap_TKK: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    DangNhap_btntkk: {
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#bbb',
        fontSize: 20,
        width: '45%',
        height: 50,
    },
    DangNhap_btntkktext: {
        width: 40,
        height: 40
    },
    textttk: {
        marginTop: 5,
        color: '#5D5F62',
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
        marginTop: '30%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textdk: {
        fontSize: 16,
        color: '#aaa',
    },
    containerMess: {
        margin: 5,
    },
    mess: {
        fontSize: 15,
        color: 'red'
    }
});
export default DangKy