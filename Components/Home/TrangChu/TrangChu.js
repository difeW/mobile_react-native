
import { View, Text, StyleSheet, Image, Modal, TouchableOpacity, SafeAreaView, ScrollView, TextInput } from "react-native"
import { SliderBox } from 'react-native-image-slider-box'
import InsetShadow from 'react-native-inset-shadow'
import { Dimensions } from 'react-native';
import { Link, Routes, Route, NativeRouter, useNavigate } from 'react-router-native';
import { useState, useEffect, useContext, useRef } from "react";
import axios from "axios";
import StarList from "../StarList";
import { AuthContext } from "../../../Context/Auth";
import { LinearGradient } from 'expo-linear-gradient';



const TrangChu = ({ navigation }) => {
    const [tabsearch, setTabsearch] = useState(false)
    const refContainer1 = useRef(null);
    const refContainer2 = useRef(null);
    const refContainer3 = useRef(null)
    const [Focus, setfocus] = useState(false)
    const [search, setSearch] = useState('')
    const [listSearch, setListSearch] = useState()
    const [ListHotSale, setListHotSale] = useState([])
    const [ListDTNB, setListDTNB] = useState([])
    const [ListLTNB, setListLTNB] = useState([])
    const [category, setCategory] = useState({
        phone: [],
        laptop: []
    })
    const { authState } = useContext(AuthContext)
    useEffect(async () => {
        if (search == '') {

        }
        else {
            try {
                const Res = await axios.get(`https://mobile12346.herokuapp.com/home/search/${search}`)
                setListSearch(Res.data)
            } catch (e) {
                console.log([e])
            }

        }
    }, [search])
    useEffect(async () => {
        try {
            const Res1 = await axios.get('https://mobile12346.herokuapp.com/home/hotsale')
            setListHotSale(Res1.data)

        } catch (e) {
            console.log(e)
        }

    }, [])
    useEffect(async () => {
        try {
            const Res3 = await axios.get('https://mobile12346.herokuapp.com/home/laphot')
            setListLTNB(Res3.data)

        } catch (e) {
            console.log(e)
        }
    }, [])
    useEffect(async () => {
        try {
            const Res2 = await axios.get('https://mobile12346.herokuapp.com/home/phonehot')
            setListDTNB(Res2.data)

        } catch (e) {
            console.log(e)
        }

    }, [])
    useEffect(async () => {
        try {
            const Res2 = await axios.get('https://mobile12346.herokuapp.com/category')
            setCategory(Res2.data)
        } catch (e) {
            console.log(e)
        }
    }, [])

    function formatVND(n) {
        return n.toFixed(1).replace(/(\d)(?=(\d{3})+\.)/g, '$1,') + ' đ';
    }
    const [nav, setnav] = useState(false)
    const slide = {
        images: [
            "https://lh3.googleusercontent.com/pw/AM-JKLVv4QzQECR14T9bzSg4kGqcU-xURAL4hU8E1JFdizEBh6k1hmHUOp-7PQpw3kkDzJLknPtPzC5wb6KClXqaH0LXaluh3dSK1vQVh6P67BQb6RGvc04d4UB8lRhvRikdM6tgJ_djWDAb-rat2Ht1LOwy=w1200-h382-no?authuser=1",

            "https://lh3.googleusercontent.com/lGfcqDi7r3sNG28Ko56lJA16kMqwaurs8YGg6bxxes2tvRLR-9X0pHL1K-WiownXmgLCVxhbd0C7Emb4XqvJCaDBgg8oMw_DPIpbtSM4AZWdZ_fx7ZlFlwRVM1hNXRekW_uBPoJusRg4ej5rJZDeKy9k-NyVp1vDp5QIg8dA_0SMKCCe5OjRAb08LhGtZCoBpzTHUCeGYFLxUvKlUqcGSnWRAXFWd6tGTb03naDhAxYIEwy-TNncTbzUMVDlXV1tqY1-bh3hDS73s9j-rBPStkYRE21N5CjS4hvD5kYzXChcQVIg_DgHgKSQNdtFnz4sUzTqMtbv9u4gyMXOEn8ZhmTxas13FcvlUFMmaSdv7I8uTN28Cd3I4hp7AJ34yCqkwwqjjc06SuUgWuvzDmjG1-DFry4gcBDHPbnGWrfOmiVdaO8MWPQ5jdNnUlwJ263ZBJykCzUBRE38g-1HMo1TccBcPGjGsYS2zHJfqHxMATdct-brLLW3I9k8zxJDLFZfk5B8Q-7RShezJbmkI6CjkmyxsSTxOqUVlRmVyZgl5R6RuCFPBfjg1wf-w7CzUymEeoBuL0zDPuBptTHrYT9OIwYwgZKjhjcRX1TJgQlCEJcfhPz0EIzbi8WRk7lP5QvT4_XVNnV9JIpPfciGNuXfkLkkhXoVmlJeMNbVvnfMhmm37ssu6LTv8WpJEklYiUL9YrphmLPwY0c8lTjGbWfWesxp=w1200-h382-no?authuser=1",
            // Local image
        ]
    };
    return (
        <View style={{
            position: 'relative',
        }}>
            <ScrollView
                onScroll={(e) => {
                    if (e.nativeEvent.contentOffset.y > 0) {
                        setnav(true)

                        styles.listSearch2 = {
                            ...styles.listSearch2,
                            width: '76%',
                            top: 5,
                            right: '6%',
                        }

                    }
                    if (e.nativeEvent.contentOffset.y < 100) {
                        setnav(false)

                        styles.listSearch2 = {
                            ...styles.listSearch2,
                            width: '94%',
                            top: 57,
                            right: '3%',
                        }
                    }
                }}
            >
                <View style={styles.container2}>
                    <LinearGradient colors={['#A60D0D', '#F2C0A2']} style={styles.header}>
                        <View style={styles.headerImageLogo}>
                            <Image
                                style={styles.ImageLogo}
                                source={{
                                    uri: 'https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.15752-9/276994574_4794407470687807_2574892749594505090_n.png?_nc_cat=109&ccb=1-5&_nc_sid=ae9488&_nc_ohc=fh0023-eVkwAX-YUPk7&_nc_ht=scontent.fsgn2-4.fna&oh=03_AVKpiZZ0azoKYDC8D-mBrePctRQr-I-_nabF__RHvvXYYA&oe=6276D440'
                                }}
                            />
                        </View>
                        <View style={styles.headerSearch}>
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
                        <View
                            style={styles.quangcao}
                        >
                            <SliderBox
                                images={slide.images}
                                sliderBoxHeight={160}
                                parentWidth={Dimensions.get('window').width * 94 / 100}
                                onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
                                dotColor="#FFEE58"
                                inactiveDotColor="#90A4AE"
                                paginationBoxVerticalPadding={20}
                                autoplay
                                circleLoop
                                ImageComponentStyle={{ borderRadius: 15, borderColor: '#000', borderWidth: 1 }}
                            />
                        </View>
                    </LinearGradient>


                    {/* HOTSALE */}
                    <LinearGradient colors={['#025159', '#A60D0D']} style={styles.HotSale}>
                        <View style={styles.HotSaleTT}>
                            <View>
                                <Text
                                    style={styles.ttHotSale1}>
                                    HOTSALE
                                </Text>
                                <Text style={styles.ttHotSale2}>
                                    Cuối tuần
                                </Text>
                            </View>
                            <Image
                                style={styles.ImageHotSale}
                                source={{
                                    uri: 'https://cdn-icons-png.flaticon.com/512/1685/1685230.png'
                                }}
                            />
                        </View>
                        <ScrollView style={styles.HotSaleListSP} horizontal={true} >
                            {ListHotSale.map((e) => {
                                if (e != null)
                                    return (
                                        <TouchableOpacity onPress={() => {
                                            navigation.navigate('ChiTietSP2', {
                                                id: e.id
                                            })
                                        }} style={styles.HotSaleSP} key={e.id}>
                                            <View style={styles.HotSaleSP_item} >
                                                <Image
                                                    style={styles.ImageSP}
                                                    source={{
                                                        uri: e.Picture
                                                    }}
                                                />
                                            </View>
                                            <View style={styles.HotSaleSP_item}>
                                                <Text
                                                    style={styles.TenSP}>
                                                    {e.ProductName}
                                                </Text>
                                            </View>
                                            <View style={styles.HotSaleSP_item}>
                                                <Text
                                                    style={styles.GiaSP}>
                                                    {formatVND(e.UnitPrice)}
                                                </Text>
                                                <Text
                                                    style={styles.GiaSPGach}>
                                                    {formatVND(e.MSRP)}
                                                </Text>
                                            </View>
                                        </TouchableOpacity>
                                    )
                            })}
                        </ScrollView>
                    </LinearGradient>

                    {/* DANH MUC SAN PHAM  */}
                    <View style={styles.DanhMucSP}>
                        <Text style={{
                            fontSize: 16,
                            fontWeight: '700',
                            marginBottom: 16,
                        }}>DANH MỤC SẢN PHẨM</Text>
                        <Text style={{
                            fontSize: 14,
                            fontWeight: '700',
                        }}>ĐIỆN THOẠI</Text>
                        <ScrollView style={styles.DanhMucspItemScroll} horizontal={true}>
                            <View style={styles.DanhMucspItem}>
                                {category.phone.map((e) => {

                                    return (
                                        <TouchableOpacity key={e.Picture} onPress={() => {
                                            navigation.navigate('DanhMuc', {
                                                string: 'phone',
                                                category: e.CategoryName
                                            })
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
                        <Text style={{
                            fontSize: 14,
                            fontWeight: '700',
                            marginBottom: 8,
                        }}>
                            LAPTOP
                        </Text>
                        <ScrollView style={styles.DanhMucspItemScroll} horizontal={true}>
                            <View style={styles.DanhMucspItem}>
                                {category.laptop.map((e) => {
                                    return (
                                        <TouchableOpacity key={e.Picture} onPress={() => {
                                            navigation.navigate('DanhMuc', {
                                                string: 'laptop',
                                                category: e.CategoryName
                                            })
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


                    {/* DIEN THOAI NOI BAT */}
                    <View style={styles.DienThoaiNoiBat}>
                        <Text
                            style={{
                                fontSize: 16,
                                fontWeight: '700',
                                marginBottom: 0,
                                marginTop: 8,
                            }}
                        >ĐIỆN THOẠI NỔI BẬT NHẤT</Text>
                        <ScrollView style={styles.scrollViewDienThoai} horizontal={true} >
                            <View style={styles.ListDTNB}>
                                <View style={styles.ListDTNBSI}>
                                    {ListDTNB.map((e, i) => {
                                        if (e != null && i < 5)
                                            return (
                                                <TouchableOpacity onPress={() => {
                                                    navigation.navigate('ChiTietSP2', {
                                                        id: e.id
                                                    })
                                                }} key={e.id} style={{
                                                    position: 'relative',
                                                    width: 155,
                                                    height: 300,
                                                    marginRight: 8,
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
                                                                        color: '#fff'
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
                                                    </View>
                                                </TouchableOpacity>
                                            )
                                    })}
                                </View>
                                <View style={styles.ListDTNBSI}>
                                    {ListDTNB.map((e, i) => {
                                        if (e != null && i >= 5)
                                            return (
                                                <TouchableOpacity onPress={() => {
                                                    navigation.navigate('ChiTietSP2', {
                                                        id: e.id
                                                    })
                                                }} key={e.id} style={{
                                                    position: 'relative',
                                                    width: 155,
                                                    height: 300,
                                                    marginRight: 8,
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
                                                                        color: '#fff'
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
                                                    </View>
                                                </TouchableOpacity>
                                            )
                                    })}
                                </View>
                            </View>
                        </ScrollView>
                    </View>

                    <View style={styles.DienThoaiNoiBat}>
                        <Text
                            style={{
                                fontSize: 16,
                                fontWeight: '700',
                                marginBottom: 0,
                                marginTop: 8,
                            }}
                        >LAPTOP NỔI BẬT NHẤT</Text>
                        <ScrollView style={styles.scrollViewDienThoai} horizontal={true} >
                            <View style={styles.ListDTNB}>
                                <View style={styles.ListDTNBSI}>
                                    {ListLTNB.map((e, i) => {
                                        if (e != null && i < 5)
                                            return (
                                                <TouchableOpacity onPress={() => {
                                                    navigation.navigate('ChiTietSP2', {
                                                        id: e.id
                                                    })
                                                }} key={e.id} style={{
                                                    position: 'relative',
                                                    width: 155,
                                                    height: 300,
                                                    marginRight: 8,
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
                                                                style={styles.ImageSPNB}
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
                                                                        color: '#fff'
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

                                                    </View>
                                                </TouchableOpacity>
                                            )
                                    })}
                                </View>
                                <View style={styles.ListDTNBSI}>
                                    {ListLTNB.map((e, i) => {
                                        if (e != null && i >= 5)
                                            return (
                                                <TouchableOpacity onPress={() => {
                                                    navigation.navigate('ChiTietSP2', {
                                                        id: e.id
                                                    })
                                                }} key={e.id} style={{
                                                    position: 'relative',
                                                    width: 155,
                                                    height: 300,
                                                    marginRight: 8,
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
                                                                style={styles.ImageSPNB}
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
                                                                        color: '#fff'
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

                                                    </View>
                                                </TouchableOpacity>
                                            )
                                    })}
                                </View>
                            </View>
                        </ScrollView>
                    </View>

                </View>

                <View style={{
                    height: 70,
                    width: '100%'
                }}></View>
            </ScrollView >
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
                                    }}>Không tìm ra sản phảm nào</Text>
                                </View>}

                            {search != '' && listSearch && listSearch.map((e) => {

                                return (
                                    <TouchableOpacity key={e.id} onPress={() => {
                                        setTabsearch(false)
                                        navigation.navigate('ChiTietSP2', {
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
                </Modal >
            }
            {
                nav &&
                <View style={{
                    paddingTop: 30,
                    width: '100%',
                    height: 70,
                    backgroundColor: 'white',
                    position: 'absolute',
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
                            <Link to='/Home' underlayColor={'#'} style={{
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
            }

        </View >

    )
}

const styles = StyleSheet.create({
    container2: {
        display: "flex",
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: '#f1f1f1',
        zIndex: 3,
    },
    container: {
        marginTop: 34,
        backgroundColor: '#fff',
    },
    scrollView: {
        alignContent: 'center',
        width: '100%',
    },
    header: {
        paddingTop: 30,
        width: '100%',
        height: 230,
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
        width: 150,
        height: 50,
        marginBottom: 5,
        marginTop: 5,
    },
    headerSearch: {
        position: 'relative',
        width: '94%',
        backgroundColor: '#fff',
        height: 40,
        borderWidth: 1,
        borderColor: '#bbb',
        borderRadius: 10,
        display: 'flex',
        justifyContent: "center",
        alignItems: 'center',
        flexDirection: 'row',
        zIndex: 2,
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
    quangcao: {
        width: '94%',
        height: 200,
        marginTop: 10,
        zIndex: 1
    },
    HotSale: {
        zIndex: 1,
        marginTop: 110,
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
        fontSize: 20,
        fontWeight: '500',
        color: '#EFE71B',
    },
    ttHotSale2: {
        fontSize: 16,
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
        backgroundColor: '#F2C0A2',
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',
    },
    HotSaleSP_item: {
        flexDirection: 'row',
        margin: 2
    },
    GiaSPGach: {
        color: '#666',
        marginLeft: 5,
        fontSize: 9,
        textDecorationLine: "line-through"
    },
    ImageSP: {
        width: 76,
        height: 100,
        borderRadius: 8,
    },
    TenSP: {
        fontSize: 12,
        fontWeight: '700',
        color: '#222'

    },
    GiaSP: {
        fontWeight: '700',
        color: '#DD1C1C',
        fontSize: 10
    },
    DanhMucSP: {
        paddingTop: 10,
        marginTop: 12,
        width: '94%',
    },
    DanhMucspItem: {
        padding: 2,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        display: 'flex',
        flexDirection: 'row',
    },
    DanhMucspItemScroll: {
        marginBottom: 16,
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
    DanhMucImage: {
        marginRight: 10,
        width: 120,
        height: 30,
        borderRadius: 8,
    },
    DienThoaiNoiBat: {
        width: '100%',
        padding: 10,

    },
    ListDTNB: {
        display: "flex",
        paddingBottom: 5,
        paddingLeft: 3,
    },
    ListDTNBSI: {
        display: "flex",
        flexDirection: 'row',
        marginTop: 8,
    },
    SPNB: {
        padding: 5,
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
    ImageSPNB: {
        width: 120,
        height: 120,
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
    scrollViewDienThoai: {
        paddingBottom: 5,
        paddingTop: 5,
    },
    ImageSPNBDT: {
        width: 100, height: 100,
    },
    listSearch1: {
        justifyContent: "center",
        position: "absolute",
        width: '76%',
        top: 35,
        right: '6%',
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.26,
        backgroundColor: 'white',
    },
    listSearch2: {
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        flex: 1,
        justifyContent: "center",
        position: "absolute",
        width: '94%',
        top: 57,
        right: '3%',
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.26,
        backgroundColor: 'white',
    }
});
export default TrangChu