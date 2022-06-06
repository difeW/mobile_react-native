
import { View, Text, StyleSheet, Image, Modal, TouchableOpacity, SafeAreaView, ScrollView, TextInput } from "react-native"
import StarList from "../StarList";
import { useEffect, useState } from "react";
import axios from "axios";
import { url } from "../../../Context/container";

const SPGoiY = ({ navigation, Data }) => {
    const [ListLTNB, setListLTNB] = useState([])
    useEffect(async () => {
        console.log(Data)
        try {
            const Res3 = await axios.get(`${url}/recommend/cb/${Data}`)
            setListLTNB(Res3.data)

        } catch (e) {
            console.log(e)
        }
    }, [Data])
    function formatVND(n) {
        return n.toFixed(1).replace(/(\d)(?=(\d{3})+\.)/g, '$1,') + ' đ';
    }
    return (
        <View>
            <Text style={{
                fontSize: 16,
                fontWeight: '700',
                marginTop: 10,
                marginBottom: 10.
            }}>SẢN PHẨM GỢI Ý</Text>
            <ScrollView horizontal={true} style={{
            }} >
                {
                    ListLTNB.map((e, i) => {
                        if (e != null && i < 9)
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
                    })
                }
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#fff',
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
    TenSP: {
        fontSize: 12,
        fontWeight: '700',
        color: '#222'

    },
});
export default SPGoiY