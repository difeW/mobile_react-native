
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView, View, Image, TouchableOpacity, Modal, TextInput, TextAncestor, Picker } from 'react-native';
import { Link, Routes, Route, NativeRouter } from 'react-router-native';
import { useState } from 'react';
import { Dimensions } from 'react-native';
import { useEffect } from 'react';
import axios from 'axios';
import StarList from '../StarList';


const XemTatCa = ({ navigation, route }) => {
    const [select, setSelect] = useState('')
    const [category, setCategory] = useState([])
    const type = route.params.string;
    const string = `https://mobile12346.herokuapp.com/product/${type}`
    const [api, setApi] = useState(string)
    const maxH = Dimensions.get('window').height
    function formatVND(n) {
        return n.toFixed(1).replace(/(\d)(?=(\d{3})+\.)/g, '$1,') + 'đ';
    }
    const [ListDienThoai, setListDienThoai] = useState([])
    useEffect(async () => {
        try {
            const Res = await axios.get(api)
            setListDienThoai(Res.data)
        } catch (e) {
            console.log(e)
        }

    }, [api])
    useEffect(async () => {
        try {
            const Res2 = await axios.get('https://mobile12346.herokuapp.com/category')
            if (type == 'phone') {
                setCategory(Res2.data.phone)
            }
            else
                setCategory(Res2.data.laptop)
        } catch (e) {
            console.log(e)
        }
    }, [])
    return (
        <View style={{
            position: 'relative',
            backgroundColor: '#f1f1f1',
            width: '100%',
        }}>
            <View style={{
                backgroundColor: '#000',
                height: maxH * 10 / 100,
                justifyContent: 'center', alignItems: 'center'
            }}>
                <Image
                    style={
                        {
                            height: '90%',
                            width: 390,
                        }
                    }
                    source={{
                        uri: 'https://scontent.fsgn5-5.fna.fbcdn.net/v/t1.15752-9/278126484_1444295142693723_5158536624419318398_n.png?_nc_cat=100&ccb=1-5&_nc_sid=ae9488&_nc_ohc=Y6WxUmTw3dYAX8rdJ2X&_nc_oc=AQn7FlVkV7dej0uCvoAVmYIgFYlZ0yyN9cxHvlihSBganGwetcVqAZ1_d0xtQFYsusk&_nc_ht=scontent.fsgn5-5.fna&oh=03_AVJiF16ISvC3JRwm32gQT_K8PuJQYbdW6jkvfvxo3PeYUg&oe=62858D37'
                    }} />
            </View>
            <View style={{
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <ScrollView style={styles.DanhMucspItemScroll} horizontal={true}>
                    <View style={styles.DanhMucspItem}>
                        {category.map((e) => {
                            if (e.CategoryName == select)
                                return (
                                    <TouchableOpacity key={e.Picture} onPress={() => {
                                        setApi(string + `/${e.CategoryName}`)
                                    }} style={
                                        styles.containerImageSelect
                                    }>
                                        <Image
                                            style={styles.DanhMucImage}
                                            source={{
                                                uri: e.Picture
                                            }}
                                        />
                                    </TouchableOpacity>
                                )
                            else
                                return (
                                    <TouchableOpacity key={e.Picture} onPress={() => {
                                        setSelect(e.CategoryName)
                                        setApi(string + `/${e.CategoryName}`)
                                    }} style={
                                        styles.containerImage
                                    }>
                                        <Image
                                            style={styles.DanhMucImage}
                                            source={{
                                                uri: e.Picture
                                            }}
                                        />
                                    </TouchableOpacity>
                                )
                        })}
                    </View>
                </ScrollView >
            </View>
            <View >
                <ScrollView nestedScrollEnabled={true} style={{
                    width: '100%',
                    backgroundColor: '#f1f1f1',
                    borderRadius: 5,
                }}>
                    <View style={{
                        paddingTop: 10,
                        paddingLeft: 10,
                        paddingBottom: 470,
                    }}>
                        <View
                            style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                            < View style={styles.DienThoaiNoiBat} >
                                <View style={styles.ListDTNB}>
                                    {ListDienThoai.map((e, i) => {
                                        if (e != null)
                                            return (
                                                <TouchableOpacity onPress={() => {
                                                    navigation.navigate('ChiTietSP', { id: e.id })
                                                }} key={e.id} style={{
                                                    width: '47.7%',
                                                    position: 'relative',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    backgroundColor: '#000',
                                                    height: 300,
                                                    marginRight: 8,
                                                    marginTop: 8,
                                                    borderRadius: 10,
                                                    elevation: 3,
                                                    shadowColor: '#000',
                                                    shadowOffset: { width: 5, height: 5 },
                                                    shadowOpacity: 0.26,
                                                    backgroundColor: 'white',

                                                }}>
                                                    <View style={styles.SPNB}>
                                                        <View style={styles.SPNB_item} >
                                                            <Image
                                                                style={styles.ImageSPNBDT}
                                                                source={{
                                                                    uri: e.Picture
                                                                }}
                                                            />
                                                        </View>

                                                        <View style={styles.SPNB_item}>
                                                            <Text
                                                                style={styles.TenSP}>
                                                                {e.ProductName}
                                                            </Text>
                                                        </View>
                                                        <View style={styles.SPNB_item}>
                                                            <Text
                                                                style={styles.GiaSP}>
                                                                {formatVND(e.UnitPrice)}
                                                            </Text>
                                                            <Text
                                                                style={styles.GiaSPGach}>
                                                                {formatVND(e.MSRP)}
                                                            </Text>
                                                        </View>
                                                        <StarList />

                                                    </View>
                                                    <View style={{
                                                        top: -1,
                                                        left: -3,
                                                        position: 'absolute',
                                                        flexDirection: 'row',
                                                        alignItems: "center",
                                                        height: 15,
                                                    }}>
                                                        <View style={{
                                                            position: 'relative',
                                                            borderTopLeftRadius: 3,
                                                            backgroundColor: '#DD1C1C',
                                                            paddingLeft: 10,
                                                            paddingRight: 10,
                                                            flexDirection: 'row',
                                                            alignItems: "center",
                                                            height: 15,
                                                            borderTopRightRadius: 10,
                                                            borderBottomRightRadius: 10,
                                                        }}>
                                                            <Text style={
                                                                {
                                                                    fontSize: 9,
                                                                    color: '#fff',
                                                                    fontWeight: '700',
                                                                }
                                                            }>Giảm {100 - (Number(e.UnitPrice) / Number(e.MSRP)).toFixed(2) * 100}%</Text>
                                                            <View style={{
                                                                top: 15,
                                                                position: 'absolute',
                                                                width: 3,
                                                                height: 5,
                                                                backgroundColor: '#57687D',
                                                                borderBottomLeftRadius: 3,

                                                            }}></View>
                                                        </View>
                                                    </View>
                                                </TouchableOpacity>
                                            )
                                    })}
                                </View>
                            </View >
                        </View>
                    </View>


                </ScrollView >
            </View>


        </View >


    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#fff',
    },
    TenSP: {
        fontWeight: '700',
        fontSize: 12,
    },
    GiaSPGach: {
        color: '#666',
        marginLeft: 5,
        fontSize: 11,
        textDecorationLine: "line-through"
    },
    DienThoaiNoiBat: {
        width: '100%',
    },
    ListDTNB: {
        display: "flex",
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignContent: 'flex-end'
    },
    SPNB: {

        padding: 2,
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
        justifyContent: "center",
        alignItems: "center",
        flexDirection: 'row',
        marginTop: 8,
    },
    ImageSPNBDT: {
        width: 100, height: 100,
    },
    btnxXemTatCa: {
        marginBottom: 5,
        marginTop: 10,
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: '#A60D0D',
        borderRadius: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    TextXemTatCa: {
        fontSize: 13,
        fontWeight: '700',
        color: '#A60D0D',
    },
    GiaSP: {
        fontWeight: '700',
        color: '#A60D0D',
        fontSize: 11
    },
    DanhMucSP: {
        paddingTop: 10,
        marginTop: 12,
        width: '94%',
    },
    DanhMucspItem: {
        padding: 5,
        height: 60,
        justifyContent: "center",
        alignItems: "center",
        display: 'flex',
        flexDirection: 'row',
    },
    DanhMucspItemScroll: {
        width: '100%',
    },
    containerImage: {
        borderRadius: 5,
        height: 40,
        marginRight: 8,
        borderColor: '#bbb',
        justifyContent: "center",
        alignItems: "center",
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.26,
        backgroundColor: 'white',
    },
    containerImageSelect: {
        borderWidth: 2,
        borderColor: 'red',
        borderRadius: 5,
        height: 40,
        marginRight: 8,
        justifyContent: "center",
        alignItems: "center",
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.26,
        backgroundColor: 'white',
    },
    DanhMucImage: {
        marginRight: 10,
        width: 120,
        height: 30,
        borderRadius: 8,

    },
});

export default XemTatCa