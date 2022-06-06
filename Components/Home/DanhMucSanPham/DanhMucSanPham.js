import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, RefreshControl, ScrollView, View, Image, TouchableOpacity, Modal, TextInput, TextAncestor, Picker } from 'react-native';
import { Link, Routes, Route, NativeRouter } from 'react-router-native';
import { useState, useCallback } from 'react';
import { Dimensions } from 'react-native';
import DienThoai from './DienThoai';
import Laptop from './Laptop';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DanhMucSP from './DanhMucSP';
import ChiTietSP from '../ChiTietSP/ChiTietSP1';
import ThongTinCaNhan from '../ThongTinCaNhan';
import TrangChu from '../TrangChu/TrangChu';
import TrangChu_Main from '../TrangChu/TrangChu_Main';
import XemTatCa from './XemTatCa';
import { useContext, useRef, useEffect } from 'react';
import { NavContext } from '../../../Context/NavContext';
import axios from 'axios';
import { url } from '../../../Context/container';

const Stack = createNativeStackNavigator();

const DanhMucSanPham = ({ navigation }) => {
    const [tabsearch, setTabsearch] = useState(false)
    const refContainer1 = useRef(null);
    const refContainer2 = useRef(null);
    const [Focus, setfocus] = useState(false)
    const [search, setSearch] = useState('')
    const [listSearch, setListSearch] = useState()
    const refContainer3 = useRef(null)
    const { setNav } = useContext(NavContext)
    useEffect(async () => {
        if (search == '') {

        }
        else {
            try {
                const Res = await axios.get(`${url}/${search}`)
                setListSearch(Res.data)
            } catch (e) {
                console.log([e])
            }

        }
    }, [search])
    function formatVND(n) {
        return n.toFixed(1).replace(/(\d)(?=(\d{3})+\.)/g, '$1,') + ' đ';
    }
    return (
        <View style={
            {
                width: '100%',
                height: '100%',
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
                                        navigation.navigate('ChiTietSP1', {
                                            id: e.id
                                        })
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
                                                <Text style={styles.GiaSP}>{formatVND(e.UnitPrice)}</Text>
                                                <Text style={styles.GiaSPGach}>{formatVND(e.MSRP)}</Text>
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
                width: '100%',
                //Sua
                height: 78,
                paddingTop: 28,
                backgroundColor: '#fff',
            }}>
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
                        <Link to='/Home' onPress={() => {
                            setNav('Trang chủ')
                        }} underlayColor={'#'} style={{
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
                        </Link>
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

            <View style={{
                height: '100%',
            }}>
                <Stack.Navigator>
                    <Stack.Screen name="DanhMuc1" component={DanhMucSP} options={{
                        headerShown: false
                    }} />
                    <Stack.Screen name="ChiTietSP" options={{
                        headerShown: false
                    }} component={ChiTietSP} />
                    <Stack.Screen name="XemTatCa" options={{
                        headerShown: false
                    }} component={XemTatCa} />
                </Stack.Navigator>
            </View>


            <View style={{
                height: 70,
                backgroundColor: '#f1f1f1',
            }}>
            </View>
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
    headerContainer: {
        width: '94%',
        height: 76,
        backgroundColor: '#023E8A',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    headerImageLogo: {
        width: '15%',
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
        width: '80%',
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
        width: 15,
        height: 15,
    },
    TextInputSearch: {
        paddingLeft: 10,
        fontSize: 16,
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
    GiaSP: {
        fontWeight: '700',
        color: '#DD1C1C',
        fontSize: 10
    },
    GiaSPGach: {
        color: '#666',
        marginLeft: 5,
        fontSize: 9,
        textDecorationLine: "line-through"
    },
});

export default DanhMucSanPham