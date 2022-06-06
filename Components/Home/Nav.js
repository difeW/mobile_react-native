import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, ScrollView, TextInput } from "react-native"
import { Dimensions } from 'react-native';
import { Link, Outlet } from 'react-router-native';
import { useContext, useEffect } from "react";
import { NavContext } from "../../Context/NavContext";
import { CardContext } from "../../Context/CardContext";
import axios from "axios";
import { AuthContext } from "../../Context/Auth";

const navs = [
    {
        linkto: '/Home/DanhMuc',
        icon: 'https://luxen.vn/media/images/icondm.png',
        Ten: 'Danh mục'
    },
    {
        linkto: '/Home/CuaHang',
        icon: 'https://iconarchive.com/download/i95602/iconsmind/outline/Box-Open.ico',
        Ten: 'Cửa hàng'
    },
    {
        linkto: '/Home',
        icon: 'https://cdn0.iconfinder.com/data/icons/uiux-001-line/32/UI_UX_UIUX_Home-512.png',
        Ten: 'Trang chủ'
    },
    {
        linkto: '/Home/GioHang',
        icon: 'https://icons-for-free.com/download-icon-cart-131964784999299812_512.png',
        Ten: 'Giỏ hàng'
    },
    {
        linkto: '/Home/TaiKhoan',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png',
        Ten: 'Tài khoản'
    },

]
const Nav = () => {
    const { card, setCard, count } = useContext(CardContext)

    const { nav, setNav } = useContext(NavContext)
    const maxWidth = Dimensions.get('window').width
    return (
        <View>
            <View colors={['#fff', '#337AA6']}>
                <View style={styles.container}>
                    <View contentContainerStyle={styles.scrollView} horizontal={false}>
                        <Outlet />
                    </View>
                    <View style={styles.Nav}>
                        <View
                            containerStyle={{
                                borderTopRightRadius: 20,
                                borderTopLeftRadius: 20,

                            }}>
                            <View style={
                                styles.Nav_Content
                            }>
                                {navs.map((e) => {
                                    if (e.Ten == 'Giỏ hàng') {
                                        if (nav == e.Ten)
                                            return (
                                                <Link to={e.linkto}
                                                    underlayColor="#eee"
                                                    key={e.Ten}
                                                    style={
                                                        styles.Nav_item
                                                    }>
                                                    <View style={{
                                                        backgroundColor: '#E4C9C9',
                                                        width: '100%',
                                                        height: '100%',
                                                        display: 'flex',
                                                        justifyContent: "center",
                                                        alignItems: "center",
                                                        position: 'relative',
                                                    }}>
                                                        <View style={{
                                                            width: 24,
                                                            height: 24,
                                                            backgroundColor: 'red',
                                                            position: 'absolute',
                                                            top: 0,
                                                            right: 0,
                                                            borderRadius: 50,
                                                            justifyContent: "center",
                                                            alignItems: "center",

                                                        }}>
                                                            <Text style={{
                                                                color: 'white'
                                                            }}>{count}</Text>
                                                        </View>
                                                        <Image
                                                            style={{
                                                                width: 25,
                                                                height: 25,
                                                            }}
                                                            source={{
                                                                uri: e.icon
                                                            }} />
                                                        <Text style={{
                                                            color: '#444',
                                                            fontWeight: '700',
                                                            fontSize: 13
                                                        }}>{e.Ten}</Text>
                                                    </View>
                                                </Link>
                                            )
                                        else {
                                            return (
                                                <Link to={e.linkto}
                                                    underlayColor="#eee"
                                                    key={e.Ten}
                                                    onPress={() => {

                                                        setNav(e.Ten)
                                                    }}
                                                    style={
                                                        styles.Nav_item
                                                    }>
                                                    <View style={{
                                                        width: '100%',
                                                        height: '100%',
                                                        display: 'flex',
                                                        justifyContent: "center",
                                                        alignItems: "center",
                                                    }}>
                                                        <View style={{
                                                            width: 24,
                                                            height: 24,
                                                            backgroundColor: 'red',
                                                            position: 'absolute',
                                                            top: 0,
                                                            right: 0,
                                                            borderRadius: 50,
                                                            justifyContent: "center",
                                                            alignItems: "center",

                                                        }}>
                                                            <Text style={{
                                                                color: 'white'
                                                            }}>{count}</Text>
                                                        </View>
                                                        <Image
                                                            style={{
                                                                width: 25,
                                                                height: 25,
                                                            }}
                                                            source={{
                                                                uri: e.icon
                                                            }} />
                                                        <Text style={{
                                                            color: '#444',
                                                            fontWeight: '700',
                                                            fontSize: 13
                                                        }}>{e.Ten}</Text>
                                                    </View>
                                                </Link>

                                            )
                                        }
                                    }

                                    else
                                        if (nav == e.Ten)
                                            return (
                                                <Link to={e.linkto}
                                                    underlayColor="#eee"
                                                    key={e.Ten}
                                                    style={
                                                        styles.Nav_item
                                                    }>
                                                    <View style={{
                                                        backgroundColor: '#E4C9C9',
                                                        width: '100%',
                                                        height: '100%',
                                                        display: 'flex',
                                                        justifyContent: "center",
                                                        alignItems: "center",
                                                    }}>
                                                        <Image
                                                            style={{
                                                                width: 25,
                                                                height: 25,
                                                            }}
                                                            source={{
                                                                uri: e.icon
                                                            }} />
                                                        <Text style={{
                                                            color: '#444',
                                                            fontWeight: '700',
                                                            fontSize: 13
                                                        }}>{e.Ten}</Text>
                                                    </View>
                                                </Link>
                                            )
                                        else {
                                            return (
                                                <Link to={e.linkto}
                                                    underlayColor="#eee"
                                                    key={e.Ten}
                                                    onPress={() => {

                                                        setNav(e.Ten)
                                                    }}
                                                    style={
                                                        styles.Nav_item
                                                    }>
                                                    <View style={{
                                                        width: '100%',
                                                        height: '100%',
                                                        display: 'flex',
                                                        justifyContent: "center",
                                                        alignItems: "center",
                                                    }}>
                                                        <Image
                                                            style={{
                                                                width: 25,
                                                                height: 25,
                                                            }}
                                                            source={{
                                                                uri: e.icon
                                                            }} />
                                                        <Text style={{
                                                            color: '#444',
                                                            fontWeight: '700',
                                                            fontSize: 13
                                                        }}>{e.Ten}</Text>
                                                    </View>
                                                </Link>

                                            )
                                        }

                                })}

                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    container2: {
        display: "flex",
        justifyContent: "center",
        alignItems: 'center',
    },
    container: {
    },
    scrollView: {
        alignContent: 'center',
        width: '100%',
    },
    header: {
        width: '100%',
        height: 200,
        backgroundColor: '#023E8A',
        display: 'flex',
        alignItems: 'center',
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
    },
    headerImageLogo: {
        width: '100%',
    },
    ImageLogo: {
        marginLeft: 8,
        width: 190,
        height: 70,
        marginBottom: 5,
        marginTop: 5,
    },
    headerSearch: {
        width: '94%',
        backgroundColor: '#fff',
        height: 40,
        borderColor: '#bbb',
        borderRadius: 10,
        display: 'flex',
        justifyContent: "center",
        alignItems: 'center',
        flexDirection: 'row'
    },
    headerIconSearch: {
        width: '12%',
        height: '100%',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderColor: '#bbb',
    },
    iconSearch: {
        width: 20,
        height: 20,
    },
    TextInputSearch: {
        paddingLeft: 10,
        fontSize: 20,
        width: '88%'
    },
    quangcao: {
        width: '94%',
        height: 200,
        marginTop: 21,
    },
    HotSale: {
        marginTop: 164,
        backgroundColor: '#0077B6',
        height: 320,
        width: '94%',
        display: "flex",
        flexDirection: 'column',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 30,
        borderRadius: 10,
    },
    HotSaleTT: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',

    },
    ttHotSale1: {
        fontStyle: 'italic',
        fontSize: 26,
        fontWeight: '500',
        color: '#EFE71B',
    },
    ttHotSale2: {
        fontSize: 20,
        color: '#fff',
    },
    ImageHotSale: {
        marginLeft: 10,
        width: 50,
        height: 50,
    },
    HotSaleListSP: {
        display: 'flex',
        flexDirection: 'row',
        height: 180,
        marginTop: 7,
        width: '99%',
    },
    HotSaleSP: {
        marginRight: 8,
        borderRadius: 10,
        height: 200,
        width: 160,
        backgroundColor: '#D8E9EF',
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',
    },
    HotSaleSP_item: {
        margin: 2
    },
    ImageSP: {
        width: 64,
        height: 90,
        borderRadius: 5,
    },
    TenSP: {
        fontWeight: '700',

    },
    GiaSP: {
        color: 'red'
    },
    DanhMucSP: {
        paddingTop: 10,
        marginTop: 12,
        width: '94%',
    },
    DanhMucspItem: {
        display: 'flex',
        flexDirection: 'row',
    },
    DanhMucspItemScroll: {
        marginBottom: 16,
        width: '100%',
    },
    DanhMucImage: {
        borderRadius: 5,
        borderColor: '#bbb',
        marginRight: 10,
        width: 56,
        height: 56,
    },
    DienThoaiNoiBat: {
        width: '94%',
    },
    ListDTNB: {
        display: "flex",
    },
    ListDTNBSI: {
        display: "flex",
        flexDirection: 'row',
        marginTop: 8,
    },
    SPNB: {
        width: 155,
        height: 329,
        borderColor: '#bbb',
        paddingTop: 20,
        display: "flex",
        alignItems: "center",
        borderRadius: 10,
        marginRight: 8,

    },
    SPNB_item: {
        marginTop: 8,
    },
    ImageSPNB: {
        width: 70,
        height: 90,
    },
    Nav: {

        width: '100%',
        height: 70,

        position: 'absolute',
        bottom: 0,

        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 5, height: -5 },
        shadowOpacity: 0.5,
        backgroundColor: '#fff',
    },
    Nav_item: {
        width: '20%',
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
    },
    Nav_Content: {
        backgroundColor: '#fafafa',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        display: "flex",
        flexDirection: 'row'
    }
});

export default Nav