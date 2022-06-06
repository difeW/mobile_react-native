import { StyleSheet, Text, View, Image } from 'react-native';
import { Link, Routes, Route, NativeRouter } from 'react-router-native';
import DangNhap from './DangNhap';
import DangKy from './DangKy';
import QuenMatKhau from './QuenMatKhau';
import { LinearGradient } from 'expo-linear-gradient';

const Auth = () => {
    return (
        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} colors={['#025159', '#A60D0D']} style={styles.Auth}>
            < View style={styles.container} >
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Image
                        style={styles.Auth_logo}
                        source={{
                            uri: 'https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.15752-9/277958787_553616632733910_7327313314397054135_n.png?_nc_cat=102&ccb=1-5&_nc_sid=ae9488&_nc_ohc=U3NXc59DsF4AX8OGSBe&_nc_ht=scontent.fsgn2-5.fna&oh=03_AVJUlgq2SHWIRn-uupX1Du_mVhn6nNV2z6p9QWrY-4fPNA&oe=62843AC6',
                        }}
                    />
                    <Text style={{
                        fontSize: 30,
                        fontWeight: '700',
                        color: '#fff',
                    }}>GoTech</Text>
                </View>
                <View style={styles.Auth_footer}>
                    <View style={styles.Auth_container}>
                        <Routes>
                            <Route index path='/' element={<DangNhap />} />
                            <Route path='DangKy' element={<DangKy />} />
                            <Route path='QuenMatKhau' element={<QuenMatKhau />} />
                        </Routes>
                    </View>
                </View>
            </View >
        </LinearGradient >
    )
}

const styles = StyleSheet.create({
    Auth: {
        backgroundColor: '#3E84DC',
        marginTop: 28,
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center'
    },
    container: {
        width: '100%',
        marginTop: '35%',
    },
    Auth_logo: {
        width: 80,
        height: 80
    },
    container_logo: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        width: '100%',
        height: 180,
    },
    Auth_footer: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    Auth_container: {

        paddingTop: 20,
        width: '90%',
    }
});
export default Auth