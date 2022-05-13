import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Button } from 'react-native';
import { Link, Routes, Route, NativeRouter } from 'react-router-native';
import { useState } from 'react'
import { Dimensions } from 'react-native';
const QuenMatKhau = () => {
    const maxWidth = Dimensions.get('window').height - 250

    const [mess, setMess] = useState('')
    const [Email, setEmail] = useState('')

    const handleChangeEmail = (e) => {
        setMess('')
        setEmail(e)
    }

    const handleSubmit = () => {
        if (!Email) {
            setMess('Email không được để trống.')
        }
    }



    return (
        <View style={{
            width: '100%',
            height: maxWidth,
        }}>
            <View style={styles.DangNhap_Input}>
                <Text style={styles.DangNhap_header}>Quên Mật Khẩu</Text>
                <Text style={styles.DangNhap_thongbao}>Chúng tôi sẽ gửi một mã xác nhận về email của bạn, vui lòng nhập Email để xác nhận.</Text>
                <View style={styles.DangNhap_Input_lable}>
                    <View style={styles.DangNhap_CII}>
                        <Image
                            style={styles.DangNhap_InputIcon}
                            source={{
                                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9HeM0md2QEO5qOwpBYTFUEjCCJPxTSy8hbQ&usqp=CAU'
                            }}
                        />
                    </View>
                    <TextInput value={Email} onChangeText={(e) => handleChangeEmail(e)} style={styles.DangNhap_Input_item} placeholder='Email' />
                </View>
            </View>
            <View style={styles.containerMess}>
                <Text style={styles.mess}>{mess}</Text>
            </View>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                width: '100%',
            }}>
                <TouchableOpacity
                    style={styles.DangNhap_btn}
                    onPress={() => { handleSubmit() }}
                >
                    <Text style={styles.DangNhap_btntext}>GỬI</Text>
                </TouchableOpacity >
            </View>
            <View style={{
                width: '100%',
                position: 'absolute',
                bottom: 100,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',

            }}>
                <Text style={styles.textdk} >Bạn muốn quay lại đăng nhập?</Text>
                <Link to='/' underlayColor={'#'}><Text style={styles.link_dkqmk}>Đăng Nhập</Text></Link>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    DangNhap_Input_item: {
        fontSize: 20,
        paddingLeft: 10,
        borderRadius: 10,
        width: '85%',
        height: '100%',
        backgroundColor: '#fff',
        fontSize: 15,
    },
    DangNhap_InputIcon: {
        width: 20,
        height: 20,
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
    DangNhap_Input: {
        width: '100%',
        display: 'flex',
    },
    DangNhap_Input_lable: {
        height: 45,
        backgroundColor: '#fff',
        borderWidth: 1,
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
        backgroundColor: '#207CF1',
        fontSize: 20,
        width: 100,
        height: 40,
    },
    DangNhap_btntext: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 16,
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
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    DangNhap_DangKyNgay: {
        marginTop: '90%',
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
    },
    DangNhap_thongbao: {
        color: '#aaa',
        marginTop: 10,
    }
});
export default QuenMatKhau