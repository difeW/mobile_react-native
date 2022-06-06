import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView, View, Image, TouchableOpacity, Modal, TextInput, TextAncestor, Picker } from 'react-native';
import { Link, Routes, Route, NativeRouter } from 'react-router-native';
import { useState } from 'react';
import { Dimensions } from 'react-native';
import TongQuan from './TongQuan';
import DacDiemSP from './DacDiemSP'
import ThongSo from './ThongSo';
import DanhGia from './DanhGia';
import { useEffect } from 'react';
import axios from 'axios';
import { version } from 'react-dom';
import { useContext, useRef } from 'react';
import { selectProductContext } from '../../../Context/selectProductContext';
import TongQuanLap from './TongQuanLap';
import ThongSoLaptop from './ThongSoLaptop';
import SPGoiY from './SPGoiY';
import { url } from '../../../Context/container';


const ChiTietSP2 = ({ navigation, route }) => {
    const [selectS, setselectS] = useState(0)
    const [listSearch, setListSearch] = useState()
    const [tabsearch, setTabsearch] = useState(false)
    const refContainer3 = useRef(null)
    const [Focus, setfocus] = useState(false)
    const [ID, setID] = useState('')
    const [search, setSearch] = useState('')
    const { id, setId } = useContext(selectProductContext)
    const [tongQuanData, setTongQuanData] = useState()
    const [ThongSoData, setThongSoData] = useState()
    const [Type, setType] = useState('')
    useEffect(async () => {
        if (search == '') {

        }
        else {
            try {
                const Res = await axios.get(`${url}/home/search/${search}`)
                setListSearch(Res.data)
            } catch (e) {
                console.log([e])
            }

        }
    }, [search])
    function formatVND(n) {
        return n.toFixed(1).replace(/(\d)(?=(\d{3})+\.)/g, '$1,') + ' đ';
    }

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
    }, [route.params.id])
    useEffect(async () => {
        if (selectS == 0) { }
        else {
            const res = await axios.get(`${url}/product/${id}`)
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
        }
    }, [selectS])
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
            {function () {
                return tabsearch
            }() &&
                <Modal
                    transparent={true}
                    visible={true}
                >
                    {function () {
                        refContainer3.current && refContainer3.current.focus()
                    }()}
                    <View style={styles.listSearch2}>
                        <View style={{
                            width: '100%',
                            backgroundColor: '#fff',
                            height: 40,
                            borderWidth: 1,
                            borderColor: '#bbb',
                            borderRadius: 10,
                            display: 'flex',
                            justifyContent: "center",
                            alignItems: 'center',
                            flexDirection: 'row'
                        }}>
                            <View style={styles.headerIconSearch}>
                                <Image
                                    style={styles.iconSearch}
                                    source={{
                                        uri: 'https://toppng.com/uploads/preview/free-icons-png-instagram-search-icon-white-11562954322qzcobg6iwo.png'
                                    }}
                                />
                            </View>
                            <TextInput autoFocus={true} value={search} onFocus={() => {
                                setTabsearch(true)
                            }} ref={refContainer3}
                                onChangeText={(e) => setSearch(e)}
                                style={styles.TextInputSearch}
                                placeholder="Bạn cần tìm gì?" />
                        </View>
                        <ScrollView style={{
                            maxHeight: 200,
                            minHeight: 50,
                        }}>
                            {search == '' &&
                                <View style={{
                                    justifyContent: "center",
                                    alignItems: "center",
                                    height: 50,
                                }}>
                                    <Text style={{
                                        color: '#777',
                                        fontStyle: 'italic',
                                    }}>Nhập từ khóa để tìm kiếm</Text>
                                </View>}

                            {listSearch && listSearch.length == 0 &&
                                <View style={{
                                    justifyContent: "center",
                                    alignItems: "center",
                                    height: 50,
                                }}>
                                    <Text style={{
                                        color: '#777',
                                        fontStyle: 'italic',
                                    }}>Không tìm ra sản phẩm nào</Text>
                                </View>}

                            {search != '' && listSearch && listSearch.map((e) => {

                                return (
                                    <TouchableOpacity key={e.id} onPress={() => {
                                        setTabsearch(false)
                                        setId(e.id)
                                        setselectS(selectS + 1)
                                    }} style={{
                                        margin: 6,
                                        flexDirection: "row",
                                        alignItems: "center"
                                    }}>
                                        <Image style={{
                                            height: 50,
                                            width: 50,
                                        }}
                                            source={{
                                                uri: e.Picture
                                            }} />
                                        <View>
                                            <Text style={styles.TenSP}>{e.ProductName}</Text>
                                            <View>
                                                <Text style={styles.GiaSP}>{e.UnitPrice && formatVND(e.UnitPrice)}</Text>
                                                <Text style={styles.GiaSPGach}>{e.MSRP && formatVND(e.MSRP)}</Text>
                                            </View>
                                        </View>

                                    </TouchableOpacity>
                                )
                            })}
                        </ScrollView>
                    </View>
                    <TouchableOpacity onPress={() => {
                        setTabsearch(false)
                    }} style={{
                        top: 300,
                        height: '100%',
                        width: '100%',
                        position: 'absolute',
                    }}>
                    </TouchableOpacity>
                </Modal>
            }
            <View style={{
                paddingTop: 28,
                // paddingTop: 34,
                width: '100%',
                height: 78,
                // height: 84,
                backgroundColor: 'white',
            }} >
                <View style={{
                    width: '100%',
                    height: 50,
                    backgroundColor: '#A60D0D',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <View style={{
                        width: '94%',
                        height: 50,
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>
                        <TouchableOpacity onPress={() => {
                            navigation.goBack()
                        }} style={{
                            width: 40,
                            height: 40,
                            marginRight: 20
                        }}>

                            <Image
                                style={{
                                    width: '100%',
                                    height: '100%',
                                }}
                                source={{
                                    uri: 'https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.15752-9/277958787_553616632733910_7327313314397054135_n.png?stp=dst-png_p206x206&_nc_cat=102&ccb=1-5&_nc_sid=aee45a&_nc_ohc=MeGjXysz2_cAX_9boYU&_nc_ht=scontent.fsgn2-5.fna&oh=03_AVJEoJIudyzdIbQtpRm9ExfSUI-rPa4dIkFCWvo0EygDKw&oe=62804646'
                                }} />
                        </TouchableOpacity>
                        <View style={{
                            width: '80%',
                            backgroundColor: '#fff',
                            height: 33,
                            borderWidth: 1,
                            borderColor: '#bbb',
                            borderRadius: 10,
                            display: 'flex',
                            justifyContent: "center",
                            alignItems: 'center',
                            flexDirection: 'row'
                        }}>
                            <View style={styles.headerIconSearch}>
                                <Image
                                    style={styles.iconSearch}
                                    source={{
                                        uri: 'https://toppng.com/uploads/preview/free-icons-png-instagram-search-icon-white-11562954322qzcobg6iwo.png'
                                    }}
                                />
                            </View>
                            <TouchableOpacity style={{
                                width: '88%',
                                height: '100%',
                                borderTopRightRadius: 10,
                                borderBottomRightRadius: 10,
                                justifyContent: "center",
                            }}
                                onPress={() => {
                                    setfocus(true)
                                    setTabsearch(true)
                                    refContainer3.current && refContainer3.current.focus()

                                }}>
                                <Text style={styles.TextInputSearch}>{search == '' ? 'Bạn cần tìm gì?' : search}</Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                </View>
            </View>
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
                            <DanhGia Data={tongQuanData ? tongQuanData.ProductName : ''} />
                        </View>}
                    {Type == 'Laptop' &&
                        <View style={{
                            width: '94%'
                        }}>
                            <TongQuanLap Data={tongQuanData} />
                            <ThongSoLaptop Data={ThongSoData} />
                            <SPGoiY navigation={navigation} Data={ID} />
                            <DanhGia Data={tongQuanData ? tongQuanData.ProductName : ''} />
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
            <View style={{
                //Sua 
                paddingTop: 28,
                width: '100%',
                //Sua
                height: 78,
                backgroundColor: 'white',
            }} >
                <View style={{
                    width: '100%',
                    height: 50,
                    backgroundColor: '#A60D0D',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <View style={{
                        width: '94%',
                        height: 50,
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>
                        <TouchableOpacity onPress={() => {
                            navigation.goBack()
                        }} style={{
                            width: 40,
                            height: 40,
                            marginRight: 20
                        }}>

                            <Image
                                style={{
                                    width: '100%',
                                    height: '100%',
                                }}
                                source={{
                                    uri: 'https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.15752-9/277958787_553616632733910_7327313314397054135_n.png?stp=dst-png_p206x206&_nc_cat=102&ccb=1-5&_nc_sid=aee45a&_nc_ohc=MeGjXysz2_cAX_9boYU&_nc_ht=scontent.fsgn2-5.fna&oh=03_AVJEoJIudyzdIbQtpRm9ExfSUI-rPa4dIkFCWvo0EygDKw&oe=62804646'
                                }} />
                        </TouchableOpacity>
                        <View style={{
                            width: '80%',
                            backgroundColor: '#fff',
                            height: 33,
                            borderWidth: 1,
                            borderColor: '#bbb',
                            borderRadius: 10,
                            display: 'flex',
                            justifyContent: "center",
                            alignItems: 'center',
                            flexDirection: 'row'
                        }}>
                            <View style={styles.headerIconSearch}>
                                <Image
                                    style={styles.iconSearch}
                                    source={{
                                        uri: 'https://toppng.com/uploads/preview/free-icons-png-instagram-search-icon-white-11562954322qzcobg6iwo.png'
                                    }}
                                />
                            </View>
                            <TextInput
                                style={styles.TextInputSearch}
                                placeholder="Bạn cần tìm gì?" />
                        </View>
                    </View>
                </View>
            </View>
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
        fontSize: 15,
        width: '88%'
    },
    listSearch2: {
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        flex: 1,
        justifyContent: "center",
        position: "absolute",
        width: '76%',
        top: 5,
        right: '6%',
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.26,
        backgroundColor: 'white',
    },
    GiaSPGach: {
        color: '#666',
        marginLeft: 5,
        fontSize: 9,
        textDecorationLine: "line-through"
    },
    GiaSP: {
        fontWeight: '700',
        color: '#DD1C1C',
        fontSize: 10
    },

});

export default ChiTietSP2