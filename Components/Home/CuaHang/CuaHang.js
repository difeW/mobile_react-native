import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView, View, Image, TouchableOpacity, Modal, TextInput, TextAncestor } from 'react-native';
import { Link, Routes, Route, NativeRouter } from 'react-router-native';
import { useState } from 'react';
import { Dimensions } from 'react-native';


const CuaHang = () => {
    const maxWidth = Dimensions.get('window').width * 94 / 100
    return (
        <View style={styles.container}>
            <View style={{
                height: 80,
                paddingTop: 30,
                backgroundColor: '#fff'
            }}>


                <View style={{
                    position: 'relative',
                    width: '100%',
                    height: 50,
                    elevation: 5,
                    shadowColor: '#000',
                    shadowOpacity: 1,
                    shadowOffset: { width: 5, height: 5 },
                    backgroundColor: '#fff',
                }}>
                    <View style={styles.header}>
                        <Text style={styles.headerText}>About Me</Text>
                    </View>
                </View>
            </View>
            <ScrollView style={styles.containerScroll}>
                <View style={styles.Content}>
                    <View style={styles.GioiThieu}>
                        <Image style={styles.ImageGioiThieu}
                            source={{
                                uri: 'https://posm.asia/wp-content/uploads/2021/01/thiet-ke-shop-dien-thoai4.jpg'
                            }} />
                        <View style={styles.TenCongTy}>
                            <Text style={styles.TextTenCongTy}>
                                GOTECH
                            </Text>
                        </View>
                        <View style={styles.MoTa}>
                            <Text style={styles.TextMoTa}>
                                {"  "}Gotech luôn nổ lực “Tận tâm với khách hàng” mang đến dịch vụ và trải nghiệm tốt nhất.
                                GoTech là hệ thống bán lẻ ủy quyền chính hãng của Apple Việt Nam.
                            </Text>
                            <Text style={{
                                fontSize: 12,
                            }}> {"  "}- Nhân viên nhiệt tình, thân thiện, gửi xe và Wifi miễn phí.</Text>
                            <Text style={{
                                fontSize: 12,
                            }}> {"  "}- Trải nghiệm trực tiếp, và dùng thử sản phẩm miễn phí.</Text>
                            <Text style={{
                                fontSize: 12,
                            }}> {"  "}- Giá bán khuyến mãi tốt nhất thị trường.</Text>
                            <Text style={{
                                fontSize: 12,
                            }}> {"  "}- Dịch vụ bán hàng doanh nghiệp: giá tốt nhất - có hoa hồng.</Text>
                        </View>
                    </View>
                    <View style={styles.GioiThieu}>
                        <Text style={styles.TextDiaChi1}>
                            HỆ THỐNG CỬA HÀNG BÁN LẺ GOTECH
                        </Text>
                        <Text style={styles.TextDiaChi2}>GIỜ MỞ CỬA: 8h00 - 22h00</Text>
                        <View style={styles.ListDiaChi}>
                            <View style={styles.DiaChi}>
                                <Image

                                    source={{
                                        uri: 'https://2.bp.blogspot.com/-sY1_96rCaOI/V72RfKZr1eI/AAAAAAAAAB0/UITcEdHS9kEPfVCm_ai2UYef9BLvYoGfQCLcB/s1600/Google%2BOverlays-01.png'
                                    }}
                                    style={{
                                        width: maxWidth * 30 / 100,
                                        height: maxWidth * 30 / 100,
                                        marginLeft: 10,
                                    }} />
                                <View style={styles.ThongTinDiaChi}>
                                    <Text style={styles.TextDiaChi}>122 Hùng vương, P.2, TP Tân An</Text>
                                    <View style={styles.SDT}>
                                        <Text style={styles.TextTTSDT}>GỌI SHOP: </Text>
                                        <Text style={styles.TextSDT}>038928745</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.DiaChi}>
                                <Image

                                    source={{
                                        uri: 'https://2.bp.blogspot.com/-sY1_96rCaOI/V72RfKZr1eI/AAAAAAAAAB0/UITcEdHS9kEPfVCm_ai2UYef9BLvYoGfQCLcB/s1600/Google%2BOverlays-01.png'
                                    }}
                                    style={{
                                        width: maxWidth * 30 / 100,
                                        height: maxWidth * 30 / 100,
                                        marginLeft: 10,
                                    }} />
                                <View style={styles.ThongTinDiaChi}>
                                    <Text style={styles.TextDiaChi}>122 Hùng vương, P.2, TP Tân An</Text>
                                    <View style={styles.SDT}>
                                        <Text style={styles.TextTTSDT}>GỌI SHOP: </Text>
                                        <Text style={styles.TextSDT}>038928745</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.DiaChi}>
                                <Image

                                    source={{
                                        uri: 'https://2.bp.blogspot.com/-sY1_96rCaOI/V72RfKZr1eI/AAAAAAAAAB0/UITcEdHS9kEPfVCm_ai2UYef9BLvYoGfQCLcB/s1600/Google%2BOverlays-01.png'
                                    }}
                                    style={{
                                        width: maxWidth * 30 / 100,
                                        height: maxWidth * 30 / 100,
                                        marginLeft: 10,
                                    }} />
                                <View style={styles.ThongTinDiaChi}>
                                    <Text style={styles.TextDiaChi}>122 Hùng vương, P.2, TP Tân An</Text>
                                    <View style={styles.SDT}>
                                        <Text style={styles.TextTTSDT}>GỌI SHOP: </Text>
                                        <Text style={styles.TextSDT}>038928745</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.DiaChi}>
                                <Image

                                    source={{
                                        uri: 'https://2.bp.blogspot.com/-sY1_96rCaOI/V72RfKZr1eI/AAAAAAAAAB0/UITcEdHS9kEPfVCm_ai2UYef9BLvYoGfQCLcB/s1600/Google%2BOverlays-01.png'
                                    }}
                                    style={{
                                        width: maxWidth * 30 / 100,
                                        height: maxWidth * 30 / 100,
                                        marginLeft: 10,
                                    }} />
                                <View style={styles.ThongTinDiaChi}>
                                    <Text style={styles.TextDiaChi}>122 Hùng vương, P.2, TP Tân An</Text>
                                    <View style={styles.SDT}>
                                        <Text style={styles.TextTTSDT}>GỌI SHOP: </Text>
                                        <Text style={styles.TextSDT}>038928745</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ height: 100, }

                }>

                </View>
            </ScrollView >
        </View >
    )

}
const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
    },
    containerScroll: {

        width: '100%',
    },
    Content: {
        width: '100%',
        alignItems: 'center',
    },
    GioiThieu: {
        borderRadius: 5,
        marginBottom: 30,
        width: '94%',
        flexDirection: 'column',
        elevation: 5,
        shadowColor: '#000',
        shadowOpacity: 1,
        shadowOffset: { width: 5, height: 5 },
        backgroundColor: '#fff'
    },
    ImageGioiThieu: {
        width: '100%',
        height: 230,
    },
    TenCongTy: {
        backgroundColor: '#A60D0D',
        width: '100%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    TextTenCongTy: {
        color: 'white',
        fontSize: 17,
        fontWeight: '700',
    },
    MoTa: {
        padding: 10,
        width: '100%',
    },
    TextMoTa: {
        width: '100%',
        fontSize: 14,
        color: '#444',
    },
    header: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#A60D0D',
        borderBottomWidth: 1,
        borderBottomColor: '#bbb',
    },
    headerText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '700',

    },
    TextDiaChi1: {
        marginTop: 8,
        width: '100%',
        paddingLeft: 10,
        fontSize: 16,
        fontWeight: '700',
        color: '#444',
    },
    TextDiaChi2: {
        width: '100%',
        padding: 10,
        fontSize: 12,
        color: '#444',
    },
    ListDiaChi: {
        width: '100%',
    },
    DiaChi: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        borderColor: '#bbb',
        borderWidth: 1,
        padding: 2,
    },
    ImageDiaChi: {
        width: '30%',
    },
    ThongTinDiaChi: {
        width: '70%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    TextDiaChi: {
        fontSize: 14,
        fontWeight: '700',
        color: '#444',
    },
    SDT: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    TextTTSDT: {
        fontSize: 12,
        color: '#444',
        fontWeight: '700'

    },
    TextSDT: {
        fontSize: 15,
        color: '#F25C05'
    },
});
export default CuaHang