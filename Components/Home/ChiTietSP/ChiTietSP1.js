import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView, View, Image, TouchableOpacity, Modal, TextInput, TextAncestor, Picker } from 'react-native';
import { Link, Routes, Route, NativeRouter } from 'react-router-native';
import { useState } from 'react';
import { Dimensions } from 'react-native';
import TongQuan from './TongQuan';
import DacDiemSP from './DacDiemSP'
import ThongSo from './ThongSo';
import DanhGia from './DanhGia';
import { useContext, useEffect } from 'react';
import { selectProductContext } from '../../../Context/selectProductContext';
import TongQuanLap from './TongQuanLap';
import ThongSoLaptop from './ThongSoLaptop';
import axios from 'axios';
import SPGoiY from './SPGoiY';
import { url } from '../../../Context/container';

const ChiTietSP1 = ({ navigation, route }) => {
    const { id, setId } = useContext(selectProductContext)
    const [tongQuanData, setTongQuanData] = useState()
    const [ID, setID] = useState('')
    const [ThongSoData, setThongSoData] = useState()
    const [Type, setType] = useState('')
    useEffect(async () => {
        const res = await axios.get(`${url}/product/${route.params.id}`)
        setId(route.params.id)
        setID(route.params.id)
        setType(res.data[0].prod.Type)
        setThongSoData(
            [

                {
                    id: 1,
                    Name: 'Kích thước màn hình',
                    Value: res.data[0].prod.Screen.Size + ' inches',
                },
                {
                    id: 2,
                    Name: 'Công nghệ màn hình',
                    Value: res.data[0].prod.Screen.Technology,
                },
                {
                    id: 3,
                    Name: res.data[0].prod.Type == 'Laptop' ? 'Card màn hình' : 'Sim',
                    Value: res.data[0].prod.Type == 'Laptop' ? "Core " + res.data[0].prod.Graphic.Core + ", " + res.data[0].prod.Graphic.GPUType : res.data[0].prod.Conn.Sim,
                },

                {
                    id: 4,
                    Name: 'Camera trước',
                    Value: res.data[0].prod.Cam.FCamRes,
                },
                {
                    id: 5,
                    Name: 'Ram',
                    Value: res.data[0].prod.Ram.Capacity + ' GB',
                },
                {
                    id: 6,
                    Name: 'Rom',
                    Value: res.data[0].prod.Rom.Capacity + ' GB',
                },
                {
                    id: 7,
                    Name: 'Pin',
                    Value: res.data[0].prod.Battery.Capacity + ' mWh',
                },
                {
                    id: 8,
                    Name: 'Hệ điều hành',
                    Value: res.data[0].prod.OS.Name,
                },
                {
                    id: 9,
                    Name: 'Độ phân giải',
                    Value: res.data[0].prod.Screen.Resolution,
                },
                {
                    id: 10,
                    Name: 'Trọng lượng',
                    Value: res.data[0].prod.Struct.Weight + ' g',
                },
                {
                    id: 11,
                    Name: 'Tần số',
                    Value: res.data[0].prod.Screen.HZ + ' Hz',
                }
            ]
        )
        for (let i = 0; i < res.data[1].version.length; i++) {
            if (res.data[1].version[i].version[0] == res.data[0].prod.Version) {
                setTongQuanData(
                    {
                        Color: res.data[0].prod.Color,
                        ProductName: res.data[0].prod.ProductName,
                        UnitPrice: res.data[0].prod.UnitPrice,
                        Version: res.data[0].prod.Version,
                        MSRP: res.data[0].prod.MSRP,
                        Mau: res.data[1].version[i],
                        PhienBan: res.data[1].version,
                    }
                )
                break;
            }
        }
    }, [])
    return tongQuanData ? (
        < View style={
            {
                position: 'relative',
                width: '100%',
                height: '100%',
                justifyContent: 'center',
                alignContent: 'center',
            }
        }>
            <ScrollView>
                <View style={{
                    width: '100%',
                    alignItems: 'center',
                }}>
                    {Type == 'Điện thoại' &&
                        <View style={{
                            width: '94%'
                        }}>
                            <TongQuan Data={tongQuanData} />
                            <ThongSo Data={ThongSoData} />
                            <SPGoiY navigation={navigation} Data={ID} />
                            <DanhGia />
                        </View>}
                    {Type == 'Laptop' &&
                        <View style={{
                            width: '94%'
                        }}>
                            <TongQuanLap Data={tongQuanData} />
                            <ThongSoLaptop Data={ThongSoData} />
                            <SPGoiY navigation={navigation} Data={ID} />
                            <DanhGia />

                        </View>}
                </View>
                <View style={
                    { height: 100, }
                }>
                </View>
            </ScrollView>
        </View >
    ) : (
        < View style={
            {
                position: 'relative',
                width: '100%',
                height: '100%',
                justifyContent: 'center',
                alignContent: 'center',
            }
        }>
            <ScrollView>
                <View style={{
                    width: '100%',
                    alignItems: 'center',
                }}>
                    <View style={{
                        width: '94%',
                        height: 1000,
                    }}>

                    </View>
                </View>
                <View style={
                    { height: 100, }
                }>
                </View>
            </ScrollView>
        </View >
    )
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#fff',
    },
    header: {
        width: '100%',
        height: 76,
        backgroundColor: '#023E8A',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerImageLogo: {
        width: '15%',
        marginRight: 10, backgroundColor: '#000',
        height: 50,

    },
    ImageLogo: {
        marginLeft: 8,
        width: '100%',
        height: 50,
        marginBottom: 5,
        marginTop: 5,
    },
    headerSearch: {
        width: '70%',
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

});

export default ChiTietSP1