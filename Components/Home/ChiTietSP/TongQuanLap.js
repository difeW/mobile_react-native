import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView, View, Image, TouchableOpacity, Modal, TextInput, TextAncestor, Picker } from 'react-native';
import { Link, Routes, Route, NativeRouter } from 'react-router-native';
import { useState } from 'react';
import { Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useContext } from 'react';
import { selectProductContext } from '../../../Context/selectProductContext';

const TongQuanLap = ({ Data }) => {
    const { setId } = useContext(selectProductContext)
    function formatVND(n) {
        return n.toFixed(1).replace(/(\d)(?=(\d{3})+\.)/g, '$1,') + ' đ';
    }
    const [tinhnang, settinhnang] = useState(Data.Mau.color[2][0])
    const [listMau, setListMau] = useState()
    const [mau, setMau] = useState('')
    const [Gia, setGia] = useState('')
    useEffect(() => {
        settinhnang(Data.Mau.color[2][0])
        setMau(Data ? Data.Color : '')
        setListMau(Data ? Data.Mau : null)
        setGia(Data ? Data.UnitPrice : null)
    }, [Data])
    return (
        <View>
            {
                tinhnang != '' &&
                <View style={styles.ContainnerIm}>
                    <Image
                        style={styles.ImageTNControl}
                        source={{
                            uri: tinhnang
                        }} />
                </View>
            }
            <ScrollView horizontal={true}>
                <View style={styles.Control}>
                    {Data && (Data.Mau.color[2]).map(((e, i) => {
                        if (tinhnang == e)
                            return (
                                <TouchableOpacity key={i} onPress={() => { settinhnang(e) }} style={styles.Control_ItemSelect}>
                                    <Image style={styles.ImConTrol} source={{
                                        uri: e
                                    }} />
                                </TouchableOpacity>
                            )
                        else
                            return (
                                <TouchableOpacity key={e} onPress={() => { settinhnang(e) }} style={styles.Control_Item}>
                                    <Image style={styles.ImConTrol} source={{
                                        uri: e
                                    }} />
                                </TouchableOpacity>
                            )
                    }))}


                </View>
            </ScrollView>

            <Text style={styles.TextTenSP}>{Data && Data.ProductName}</Text>
            <View style={styles.TraGop}>
                <Text style={styles.TextTraGop}>Trả góp 0%</Text>
            </View>
            <Text style={styles.TextGia}>{Gia && formatVND(Gia)}</Text>
        </View >

    )
}
const styles = StyleSheet.create({
    Containner: {
        marginTop: 10,
        backgroundColor: '#A60D0D',
        height: 190,
        borderRadius: 10,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    TextTN: {
        fontSize: 15,
        marginBottom: 10,
        color: 'white',
        fontWeight: '700',
    },
    ImageTN: {
        borderRadius: 7,
        padding: 10,
        width: 63,
        height: 80,
        backgroundColor: 'white',
        marginRight: 10,
    },
    decsTNMain: {
        width: '94%',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    decsTN: {
        width: '75%'
    },
    Control: {
        marginTop: 5,
        width: '94%',
        flexDirection: 'row',
    },
    Control_Item: {
        marginRight: 5,
        borderWidth: 1,
        borderColor: '#bbb',
        borderRadius: 5,
        height: 70,
        width: 70,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Control_ItemSelect: {
        marginRight: 5,
        borderWidth: 2,
        borderColor: '#A60D0D',
        borderRadius: 5,
        height: 70,
        width: 70,
        justifyContent: 'center',
        alignItems: 'center',
    },
    IconConTrol: {
        width: 24,
        height: 24
    },
    TextTNConTrol: {
        fontSize: 12,
        color: '#000',
        justifyContent: 'center',
        alignItems: 'center',
    },
    ImConTrol: {
        width: 60,
        height: 60,
    },
    ImageTNControl: {
        width: 200,
        height: 190,
    },
    ContainnerIm: {
        marginTop: 10,
        backgroundColor: '#fff',
        height: 190,
        borderRadius: 10,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }, TextTenSP: {
        marginBottom: 10,
        fontSize: 17,
        fontWeight: '700',
    },
    containerStar: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',

    },
    ImageStar: {
        width: 20,
        height: 20,
    },
    TextLuotDG: {
        fontSize: 12,
        fontWeight: '100',
    },
    TraGop: {
        marginTop: 10,
        width: 90,
        height: 36,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderColor: '#A60D0D',
        backgroundColor: '#E4C9C9'
    },
    TextTraGop: {
        color: '#A60D0D',
        fontSize: 14,
        fontWeight: '700',
    },
    TextGia: {
        marginTop: 10,
        fontSize: 18,
        color: '#F20505',
        fontWeight: '700',
    },
    ListLoai: {
        marginTop: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    LoaiItem: {
        width: '31%',
        height: 60,
        marginRight: '2%',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#bbb',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '2%',
    },
    LoaiItemSelect: {
        width: '31%',
        height: 60,
        marginRight: '2%',
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#A60D0D',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '2%',
    },
    LoaiItemMau: {
        width: '31%',
        height: 60,
        marginRight: '2%',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#bbb',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '2%',
        flexDirection: 'row'
    },
    LoaiItemMauSelect: {
        width: '31%',
        height: 60,
        marginRight: '2%',
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#A60D0D',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '2%',
        flexDirection: 'row'
    },
    TextLoai1: {
        color: '#000',
        fontSize: 13,
        fontWeight: '700',
    },
    TextLoai2: {
        color: '#444',
        fontSize: 12,
        fontWeight: '100',
    },
    TextChonPhienBan: {
        marginTop: 10,
        fontSize: 14,
        fontWeight: '700',
        color: '#000',
    },

});

export default TongQuanLap