
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView, View, Image, TouchableOpacity, Modal, TextInput, TextAncestor, Picker } from 'react-native';
import { Link, Routes, Route, NativeRouter } from 'react-router-native';
import { useState } from 'react';
import { Dimensions } from 'react-native';
import { useEffect } from 'react';
import axios from 'axios';
import StarList from '../StarList';
import { LinearGradient } from 'expo-linear-gradient';


const Laptop = ({ navigation }) => {
    const maxH = Dimensions.get('window').height
    function formatVND(n) {
        return n.toFixed(1).replace(/(\d)(?=(\d{3})+\.)/g, '$1,') + 'đ';
    }
    const [ListLaptop, setListLaptop] = useState([])
    useEffect(async () => {
        try {
            const Res = await axios.get('https://mobile12346.herokuapp.com/product/laptop')
            setListLaptop(Res.data)
            // const Res2 = await axios.get('https://mobile12346.herokuapp.com/home/phonehot')
            // setListDTNB(Res2.data)
            // const Res3 = await axios.get('https://mobile12346.herokuapp.com/home/laphot')
            // setListLTNB(Res3.data)
        } catch (e) {
            console.log(e)
        }

    }, [])
    return (
        <View style={{
            marginTop: 10,
            position: 'relative',
            backgroundColor: '#f1f1f1',
            width: '100%',
        }}>
            <View style={{
                backgroundColor: '#000',
                height: maxH * 10 / 100,
                justifyContent: 'center',
                alignItems: 'center',
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
            <View >
                <ScrollView nestedScrollEnabled={true} style={{
                    width: '100%',
                    height: maxH * 67 / 100,
                    backgroundColor: '#f1f1f1',
                    borderRadius: 5,
                }}>
                    <LinearGradient colors={['#025159', '#fff',]} style={{
                        paddingTop: 40,
                        paddingLeft: 10,
                    }}>
                        <View
                            style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                            < View style={styles.LaptopNoiBat} >
                                <View style={styles.ListDTNB}>
                                    {ListLaptop.map((e, i) => {
                                        if (e != null && i < 6)
                                            return (
                                                <TouchableOpacity onPress={() => {
                                                    navigation.navigate('ChiTietSP', { id: e.id })
                                                }} underlayColor="#eee" key={e.id} style={{
                                                    width: '47.7%',
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
                            <TouchableOpacity onPress={() => {
                                navigation.navigate('XemTatCa', { string: 'laptop' })
                            }} style={styles.btnxXemTatCa}>
                                <Text style={styles.TextXemTatCa}>
                                    XEM TẤT CẢ
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </LinearGradient>


                </ScrollView >
                <View style={
                    {
                        height: 30,
                        paddingRight: 0,
                        position: 'absolute',
                        top: 10,
                        flexDirection: 'row',
                        left: 2,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }
                }>
                    <View style={{
                        backgroundColor: '#A60D0D',
                        height: 30,
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingLeft: 20,
                        paddingRight: 20,
                    }}>
                        <Text
                            style={{
                                fontSize: 15,
                                fontWeight: '700',
                                color: '#fff',
                            }}
                        >TẤT CẢ LAPTOP</Text>
                    </View>

                    <View style={{
                        width: 0,
                        height: 0,
                        borderLeftColor: '#A60D0D',
                        borderRightColor: 'rgba(0,0,0,0)',
                        borderTopColor: 'rgba(0,0,0,0)',
                        borderBottomColor: 'rgba(0,0,0,0)',
                        borderWidth: 15,
                    }}>

                    </View>
                </View>
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
    LaptopNoiBat: {
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
        width: 120, height: 120,
    },
    btnxXemTatCa: {
        marginBottom: 5,
        marginTop: 10,
        marginRight: '3%',
        width: '96%',
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
        color: '#A60D0D',
        fontWeight: '700',
    },
    GiaSP: {
        fontWeight: '700',
        color: '#A60D0D',
        fontSize: 11
    },
});

export default Laptop