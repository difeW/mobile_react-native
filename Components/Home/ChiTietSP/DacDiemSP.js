import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView, View, Image, TouchableOpacity, Modal, TextInput, TextAncestor, Picker } from 'react-native';
import { Link, Routes, Route, NativeRouter } from 'react-router-native';
import { useState } from 'react';
import { Dimensions } from 'react-native';
const PhienBan = [
    {
        id: '0',
        Loai: '6GB - 128GB',
        Gia: '11.690.000 đ',
        Mau: [
            {
                id: '0',
                link: 'https://image.cellphones.com.vn/358x/media/catalog/product/s/m/sm-g990_s21fe_backfront_lv_5.png',
                Gia: '11.690.000 đ',
                TenMau: 'Tím'
            },
            {
                id: '1',
                link: 'https://image.cellphones.com.vn/358x/media/catalog/product/s/m/sm-g990_s21fe_backfront_zw_5.png',
                Gia: '11.690.000 đ',
                TenMau: 'Trắng'
            },
            {
                id: '2',
                link: 'https://image.cellphones.com.vn/358x/media/catalog/product/s/m/sm-g990_s21fe_backfront_za_5.png',
                Gia: '11.690.000 đ',
                TenMau: 'Xám'
            },
            {
                id: '3',
                link: 'https://image.cellphones.com.vn/358x/media/catalog/product/s/m/sm-g990_s21fe_backfront_lg_5.png',
                Gia: '11.690.000 đ',
                TenMau: 'Xanh lá'
            },
        ]
    },
    {
        id: '1',
        Loai: '8GB - 128GB',
        Gia: '12.290.000 đ',
        Mau: [
            {
                id: '0',
                link: 'https://image.cellphones.com.vn/358x/media/catalog/product/s/m/sm-g990_s21fe_backfront_lv_5.png',
                Gia: '11.690.000 đ',
                TenMau: 'Tím'
            },
            {
                id: '1',
                link: 'https://image.cellphones.com.vn/358x/media/catalog/product/s/m/sm-g990_s21fe_backfront_zw_5.png',
                Gia: '11.690.000 đ',
                TenMau: 'Trắng'
            },
            {
                id: '2',
                link: 'https://image.cellphones.com.vn/358x/media/catalog/product/s/m/sm-g990_s21fe_backfront_za_5.png',
                Gia: '11.690.000 đ',
                TenMau: 'Xám'
            },
            {
                id: '3',
                link: 'https://image.cellphones.com.vn/358x/media/catalog/product/s/m/sm-g990_s21fe_backfront_lg_5.png',
                Gia: '11.690.000 đ',
                TenMau: 'Xanh lá'
            },
        ]
    },
    {
        id: '2',
        Loai: '8GB - 256GB',
        Gia: '14.190.000 đ',
        Mau: [
            {
                id: '0',
                link: 'https://image.cellphones.com.vn/358x/media/catalog/product/s/m/sm-g990_s21fe_backfront_lv_5.png',
                Gia: '11.690.000 đ',
                TenMau: 'Tím'
            },
            {
                id: '1',
                link: 'https://image.cellphones.com.vn/358x/media/catalog/product/s/m/sm-g990_s21fe_backfront_zw_5.png',
                Gia: '11.690.000 đ',
                TenMau: 'Trắng'
            },
            {
                id: '2',
                link: 'https://image.cellphones.com.vn/358x/media/catalog/product/s/m/sm-g990_s21fe_backfront_za_5.png',
                Gia: '11.690.000 đ',
                TenMau: 'Xám'
            },
            {
                id: '3',
                link: 'https://image.cellphones.com.vn/358x/media/catalog/product/s/m/sm-g990_s21fe_backfront_lg_5.png',
                Gia: '11.690.000 đ',
                TenMau: 'Xanh lá'
            },
        ]
    },
    {
        id: '3',
        Loai: '8GB - 512GB',
        Gia: '16.590.000 đ',
        Mau: [
            {
                id: '0',
                link: 'https://image.cellphones.com.vn/358x/media/catalog/product/s/m/sm-g990_s21fe_backfront_lv_5.png',
                Gia: '11.690.000 đ',
                TenMau: 'Tím'
            },
            {
                id: '1',
                link: 'https://image.cellphones.com.vn/358x/media/catalog/product/s/m/sm-g990_s21fe_backfront_zw_5.png',
                Gia: '11.690.000 đ',
                TenMau: 'Trắng'
            },
            {
                id: '2',
                link: 'https://image.cellphones.com.vn/358x/media/catalog/product/s/m/sm-g990_s21fe_backfront_za_5.png',
                Gia: '11.690.000 đ',
                TenMau: 'Xám'
            },
            {
                id: '3',
                link: 'https://image.cellphones.com.vn/358x/media/catalog/product/s/m/sm-g990_s21fe_backfront_lg_5.png',
                Gia: '11.690.000 đ',
                TenMau: 'Xanh lá'
            },
        ]
    }
]
const DacDiemSP = () => {
    const [selectid, setselectid] = useState('0')
    return (
        <View style={styles.container}>

            <Text style={styles.TextTenSP}>Samsung Galaxy S21 FE 5G ({PhienBan[selectid].Loai})</Text>
            <View style={
                styles.containerStar
            }>
                <Image
                    style={styles.ImageStar}
                    source={{
                        uri: 'https://previews.123rf.com/images/asnia/asnia1709/asnia170900201/85984515-icona-gialla-isolata-della-stella-segno-di-classifica-moderno-semplice-segno-preferito-simbolo-della.jpg'
                    }} />
                <Image
                    style={styles.ImageStar}
                    source={{
                        uri: 'https://previews.123rf.com/images/asnia/asnia1709/asnia170900201/85984515-icona-gialla-isolata-della-stella-segno-di-classifica-moderno-semplice-segno-preferito-simbolo-della.jpg'
                    }} />
                <Image
                    style={styles.ImageStar}
                    source={{
                        uri: 'https://previews.123rf.com/images/asnia/asnia1709/asnia170900201/85984515-icona-gialla-isolata-della-stella-segno-di-classifica-moderno-semplice-segno-preferito-simbolo-della.jpg'
                    }} />
                <Image
                    style={styles.ImageStar}
                    source={{
                        uri: 'https://previews.123rf.com/images/asnia/asnia1709/asnia170900201/85984515-icona-gialla-isolata-della-stella-segno-di-classifica-moderno-semplice-segno-preferito-simbolo-della.jpg'
                    }} />
                <Image
                    style={styles.ImageStar}
                    source={{
                        uri: 'https://previews.123rf.com/images/asnia/asnia1709/asnia170900201/85984515-icona-gialla-isolata-della-stella-segno-di-classifica-moderno-semplice-segno-preferito-simbolo-della.jpg'
                    }} />
                <Text style={styles.TextLuotDG}>12 đánh giá</Text>
            </View>
            <View style={styles.TraGop}>
                <Text style={styles.TextTraGop}>Trả góp 0%</Text>
            </View>
            <Text style={styles.TextGia}>{PhienBan[selectid].Gia}</Text>

            <Text style={styles.TextChonPhienBan}>Chọn phiên bản: </Text>
            <View style={
                styles.ListLoai
            }>
                {PhienBan.map((e) => {
                    if (selectid == e.id)
                        return (
                            <TouchableOpacity onPress={() => {
                                setselectid(e.id)
                            }} key={e.id} style={styles.LoaiItemSelect}>
                                <Text style={styles.TextLoai1}>{e.Loai}</Text>
                                <Text style={styles.TextLoai2}>{e.Gia}</Text>
                            </TouchableOpacity>
                        )
                    else
                        return (
                            <TouchableOpacity onPress={() => {
                                setselectid(e.id)
                            }} key={e.id} style={styles.LoaiItem}>
                                <Text style={styles.TextLoai1}>{e.Loai}</Text>
                                <Text style={styles.TextLoai2}>{e.Gia}</Text>
                            </TouchableOpacity>
                        )
                })}
            </View>

            <Text style={styles.TextChonPhienBan}>Chọn màu: </Text>
            <View style={
                styles.ListLoai
            }>
                {(PhienBan[selectid].Mau).map((e) => {
                    // if (selectid == e.id)
                    return (
                        <TouchableOpacity onPress={() => {
                            setselectid(e.id)
                        }} key={e.id} style={styles.LoaiItemMau}>
                            <Image
                                style={
                                    {
                                        width: 20,
                                        height: 25,
                                        marginRight: 5,
                                    }
                                }
                                source={{
                                    uri: e.link
                                }} />
                            <View>
                                <Text style={styles.TextLoai1}>{e.TenMau}</Text>
                                <Text style={styles.TextLoai2}>{e.Gia}</Text>
                            </View>

                        </TouchableOpacity>
                    )
                    // else
                    //     return (
                    //         <TouchableOpacity onPress={() => {
                    //             setselectid(e.id)
                    //         }} key={e.id} style={styles.LoaiItem}>
                    //             <Text style={styles.TextLoai1}>{e.Loai}</Text>
                    //             <Text style={styles.TextLoai2}>{e.Gia}</Text>
                    //         </TouchableOpacity>
                    //     )
                })}
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        flexDirection: 'column'
    },
    TextTenSP: {
        marginBottom: 10,
        fontSize: 22,
        fontWeight: '500',
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
        borderColor: '#0096C7',
        backgroundColor: 'rgba(0,150,200,0.05)'
    },
    TextTraGop: {
        color: '#0096C7',
        fontSize: 14,
    },
    TextGia: {
        marginTop: 10,
        fontSize: 22,
        color: '#023E8A',
        fontWeight: '500',
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
        borderColor: '#0096C7',
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
        borderColor: '#0096C7',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '2%',
    },
    TextLoai1: {
        color: '#000',
        fontSize: 15,
        fontWeight: '500',
    },
    TextLoai2: {
        color: '#bbb',
        fontSize: 14,
        fontWeight: '100',
    },
    TextChonPhienBan: {
        marginTop: 10,
        fontSize: 18,
        fontWeight: '700',
    }
});

export default DacDiemSP