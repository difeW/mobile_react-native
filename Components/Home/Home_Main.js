import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, ScrollView, TextInput } from "react-native"
import { SliderBox } from 'react-native-image-slider-box'
import InsetShadow from 'react-native-inset-shadow'
import { Dimensions } from 'react-native';
import { Link, Routes, Route, NativeRouter, useNavigate } from 'react-router-native';
import Nav from "./Nav";
import TrangChu from "./TrangChu/TrangChu";
import TaiKhoan from "./TaiKhoan";
import DangNhap from "../Auth/DangNhap";
import ThanhToan from "./ThanhToan/ThanhToan";
import CuaHang from "./CuaHang/CuaHang";
import DanhMucSanPham from "./DanhMucSanPham/DanhMucSanPham";
import ChiTietSP from "./ChiTietSP/ChiTietSP2";
import TrangChu_Main from "./TrangChu/TrangChu_Main";
import GioHang from "./GioHang/GioHang";
import DanhMucSP_Main from "./DanhMucSanPham/DanhMucSP_Main";
import TaiKhoan_Main from "./TaiKhoan_Main";
const Home_Main = () => {
    const maxWidth = Dimensions.get('window').width


    return (
        <View style={styles.container}>
            <Routes>
                <Route path="/" element={<Nav />}>
                    <Route index element={<TrangChu_Main />} />
                    <Route path="/TaiKhoan/*" element={<TaiKhoan_Main />} />
                    <Route path="/GioHang/*" element={<GioHang />} />
                    <Route path="/CuaHang/*" element={<CuaHang />} />
                    <Route path="/DanhMuc/*" element={<DanhMucSP_Main />} />
                    <Route path="/ChiTietSP/*" element={<ChiTietSP />} />
                </Route>
                <Route path='/ThanhToan' element={<ThanhToan />} />
            </Routes>
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
        borderWidth: 1,
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
        borderRightWidth: 1,
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
        borderWidth: 1,
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
        borderWidth: 1,
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
        height: 82,

        position: 'absolute',
        bottom: 0,

        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
    },
    Nav_item: {
        width: '20%',
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
    },
    Nav_Content: {
        backgroundColor: '#fff',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        height: '100%',
        display: 'flex',
        borderWidth: 1,
        borderBottomWidth: 0,
        flexDirection: 'row',
        width: '100%',
        display: "flex",
        flexDirection: 'row'
    }
});

export default Home_Main