import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView, View, Image, TouchableOpacity, Modal, TextInput, TextAncestor } from 'react-native';
import { Link, Routes, Route, NativeRouter } from 'react-router-native';
import { useState } from 'react';
import StarReview from 'react-native-stars';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import DoiXacNhan from './MuaHang/DoiXacNhan';
import DangGiao from './MuaHang/DangGiao';
import ThongTinCaNhan from './ThongTinCaNhan';
import DaMua from './MuaHang/DaMua';


const MuaHang = ({ navigation }) => {
    const Tab1 = createMaterialTopTabNavigator();
    return (
        <View
            style={{
                width: '100%',
                display: 'flex',
                backgroundColor: 'red',
                height: '100%'
            }}>
            <Tab1.Navigator
                initialRouteName="DoiXacNhan"
                screenOptions={{
                    tabBarIndicatorStyle: {
                        backgroundColor: '#A60D0D',

                    },
                    tabBarActiveTintColor: '#A60D0D',
                    tabBarInactiveTintColor: '#444',
                    tabBarLabelStyle: { fontSize: 12, fontWeight: '700' },
                    tabBarStyle: { backgroundColor: '#fff', color: '#A60D0D' },
                }}
            >
                <Tab1.Screen
                    name="DoiXacNhan"
                    component={DoiXacNhan}
                    options={{ tabBarLabel: 'ĐỢI XÁC NHẬN' }}
                />
                <Tab1.Screen
                    name="DangGiao"
                    component={DangGiao}
                    options={{ tabBarLabel: 'ĐANG GIAO' }}
                />
                <Tab1.Screen
                    name="DaMua"
                    component={DaMua}
                    options={{ tabBarLabel: 'ĐÃ MUA' }}
                />
            </Tab1.Navigator>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#fff',
    },
    SPNB: {
        paddingLeft: 15,
        width: '100%',
        height: 145,
        borderWidth: 1,
        borderColor: '#bbb',
        paddingTop: 0,
        display: "flex",
        alignItems: "center",
        flexDirection: 'row',
        borderRadius: 10,
        marginBottom: 8,
    },
    SPNB_item: {
        marginRight: 20,
        display: 'flex',
        flexDirection: 'row',
        marginTop: 8,

    },
    ImageSPNB: {
        width: 70,
        height: 90,
    },
    ImageSP: {
        width: 64,
        height: 90,
        borderRadius: 5,
    },
    TenSP: {
        fontWeight: '700',

    },
    GiaSP: {
        marginRight: 20,
        color: 'red'
    },
    centeredView: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalView: {
        width: '100%',
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    Comment_Input_item: {
        padding: 10,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#bbb',
        width: '100%'
    },
    Comment_Input_lable: {
        width: '90%',
    },
    myStarStyle: {
        color: 'yellow',
        backgroundColor: 'transparent',
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
    },
    myEmptyStarStyle: {
        color: 'white',
    }
});
export default MuaHang