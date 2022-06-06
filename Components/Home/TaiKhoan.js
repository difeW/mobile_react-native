import { View, Text, StyleSheet, Image, ActivityIndicator, TouchableOpacity, SafeAreaView, ScrollView, TextInput } from "react-native"
import { Dimensions } from 'react-native';
import { useContext, useState } from "react";
import { Link, Routes, Route, NativeRouter, useNavigate, Outlet } from 'react-router-native';
import ThongTinCaNhan from "./ThongTinCaNhan";
import MuaHang from "./MuaHang";
import { manipulateAsync, SaveFormat } from "expo-image-manipulator";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavContext } from "../../Context/NavContext";
import * as ImagePicker from 'expo-image-picker';
import axios from "axios";
import NameContextProvider, { NameContext } from "../../Context/NameContext";
import { AuthContext } from '../../Context/Auth'
import ModalC from "../ComponentPublic/ModalC";
import { url } from "../../Context/container";


const Tab = createMaterialTopTabNavigator();
const TaiKhoan = ({ navigation }) => {
    const { name1, ava, setAva } = useContext(NameContext)
    const [image, setImage] = useState(ava);
    const { setNav } = useContext(NavContext)
    const { authState } = useContext(AuthContext)
    const [Modal, setModal] = useState(false)
    const [Modal1, setModal1] = useState(false)
    const [avaLoad, setAvaLoad] = useState(false)
    const his = useNavigate()

    const handleSubmit = () => {
        his('/')
        setNav('Trang chủ')
    }
    async function UploadAvatar() {
        const image = await ImagePicker.launchCameraAsync();
        setAvaLoad(true)
        const image1 = await manipulateAsync(
            image.localUri || image.uri,
            [{ resize: { width: image.width * 0.7, height: image.height * 0.7 } }],
            {
                compress: 0.5, format: SaveFormat.PNG
            }
        )
        let uriParts = image1.uri.split('.');
        let fileType = uriParts[uriParts.length - 1];
        let bodyFormData = new FormData()
        bodyFormData.append('file', {
            uri: image1.uri,
            name: `${Math.floor(Math.random() * 1000)}.${fileType}`,
            type: `image/${fileType}`
        })
        console.log(bodyFormData)
        await axios({
            method: 'POST',
            url: `${url}/users/ava`,
            headers: {
                Authorization: `Bearer ${authState.user.token}`,
                Accept: 'application/json',
                email: 'trai@gmail.com',
                'Content-Type': 'multipart/form-data',
            },
            transformRequest: () => {
                return bodyFormData;
            }
        }).then((response) => {
            console.log("data: ", response.data)
            setImage(image1.uri)
            setAva(image1.uri)
        }).catch((error) => {
            console.log(error)
        })
        setAvaLoad(false)
    }
    return (
        <View
            style={{
                height: '100%',
                width: '100%',
            }}>
            {avaLoad && <ModalC>
                <ActivityIndicator size="large" color="red" />
                <Text style={{
                    marginTop: 16,
                    fontWeight: '700',
                }}>
                    ĐANG XỬ LÝ
                </Text>
            </ModalC>}
            {Modal && < ModalC >
                <TouchableOpacity style={{
                    width: 200,
                    fontWeight: '700',
                    justifyContent: "center",
                    alignItems: "center",
                    height: 50,
                    margin: 0,
                    backgroundColor: 'red',
                    borderBottomWidth: 1,
                    borderColor: 'blue'
                }}>
                    <Text style={{
                        fontWeight: '700',
                        fontSize: 16,
                    }}>Chọn ảnh từ thư viện</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    width: 200,
                    fontWeight: '700',
                    justifyContent: "center",
                    alignItems: "center",
                    height: 50,
                    margin: 0,
                    backgroundColor: 'red',
                    borderBottomWidth: 1,
                    borderColor: 'blue'
                }}>
                    <Text style={{
                        fontWeight: '700',
                        fontSize: 16,
                    }}>Chụp ảnh</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    width: 200,
                    fontWeight: '700',
                    justifyContent: "center",
                    alignItems: "center",
                    height: 50,
                    margin: 0,
                    backgroundColor: 'red',
                    borderBottomWidth: 1,
                    borderColor: 'blue'
                }}>
                    <Text style={{
                        fontWeight: '700',
                        fontSize: 16,
                    }}>Hủy</Text>
                </TouchableOpacity>
            </ModalC>}
            <View style={styles.Header}>
                <TouchableOpacity onPress={() => UploadAvatar()} style={styles.avt}>
                    {Boolean(image != '') && <Image source={{ uri: image }} style={{ width: 60, height: 60, borderRadius: 50 }} />}
                    {Boolean(image == '') && <Text style={styles.TenAvt}>{name1[0]}</Text>}
                </TouchableOpacity>
                <Text style={styles.HoTen}>{name1}</Text>
                <View style={{
                    position: 'absolute',
                    top: 135,
                    left: 85,
                    width: 70,
                    height: 16,
                    borderWidth: 1,
                    borderColor: '#A60D0D',
                    borderRadius: 10,
                    backgroundColor: '#fff',
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    <Text style={{
                        color: '#A60D0D',
                        fontSize: 9,
                        fontWeight: '700'
                    }}>Thành viên {'>'}</Text>
                </View>
                <TouchableOpacity style={
                    styles.DangXuat
                }
                    onPress={() => { setModal1(true) }}>
                    <Image
                        style={styles.IconDangXuat}
                        source={
                            { uri: 'data:image/webp;base64,UklGRgoDAABXRUJQVlA4WAoAAAAQAAAA4AAA4AAAQUxQSLMBAAARDzD/ERFCcm3bddtcLAwwCzoISkFpYGkoBSVwKNlcfAMG792bfzKK6P8EYG9mVsCcFu6uM2bJcxGKx4jNMRndsRjDcTLM8aKk3UXJu5tSNHVn1LY5foC+mT/A2CxZRvTypdBptjnNEF6uEZuu/p0drvaTSX8M+F/pi+Toj5s1x+NiLXu8eAnA4mUAk1cBHKzTGgDw+uOmjcdFs8eLlwAsXgEweRXAwWvwErpmaEyUNUVTNU3TNUNjSZM1RVM1TdM1I7bMnUIvXw5dvhK6fVXTQubvGhMlTdYUTdU0TdeYKGmypmiqpmm6xkRJkzVFUzVNUzVFkzVJA8nQdE3TFE3WJA0kQ9M1TVM0WZM0kIzQ7euaGrp8JfTy5dDpS6HpQ2h7Poama6qmaLImaSAZmq6pmqLJmqSBZGiapgI4Eq0AmLwMYPESgJMHAC9af9y09jDSsgrg4BUAk5cBLF4CcLKmAcCLdfTHzcLXh9G++T/T8YeB76T/QCM2HYuxXBY7fTn08o2Q2dhMo4r65vgB2gY/QN3dlLK7NC9K3p2UtFsU7CejOw5Gc+AmVM+LkD0rNuCO1Q0AVlA4IDABAABQHQCdASrhAOEAPpE6mUiloyKhLb94ALASCWlu4XSOABnZ16/oB/APwA/QD8/e/wcbPz3OnNqKgCy2ACBrh5+TynlwMf3s7YuU+zMj//yC/kh3/CT7T86J+BV47Zy0V6md4FcArm2q+k1UGvxsh+nDaarnqTjheydKxZcW8AdV8LOmboYucmFZw4+HItY3ftq5yYVnDjJdpLgVvDNKe6eHfnNIUOmU0ACR6ugvlKr8/NcZeYpX10sY7s3YUO2IM0VEgj5kZkI+Tm1utlYdj6kJsomlKeXR5US/zpkRItdfbkwGKzhztb9oZyBB8gwrDvCLkAAA/vW2f/0aH/+2H//tdj//tX5LIn1zGHQFQkx0BTpMdAHnYhcx+LsubKo4UL8kDg59U+ADA+8Zf/6G4AAA' }
                        }
                    />

                </TouchableOpacity>
            </View>
            {Modal1 && <ModalC>
                <Image style=
                    {{
                        width: 60,
                        height: 60,
                        margin: 16,
                    }} source={{
                        uri: 'https://cdn3.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-1/254000/38-256.png?fbclid=IwAR0k41NzKzdnmqJrZ-ncCy-i_fZHs3x1wUz8G069_K-S3d0EsqTDZ_nQdCk'
                    }} />
                <Text style={{
                    fontSize: 16,
                }}>Bạn chắc chắn muốn đăng xuất?</Text>
                <View style={{
                    flexDirection: "row"
                }}>
                    <TouchableOpacity
                        onPress={() => {
                            setModal1(false)
                        }}
                        style={{
                            borderRadius: 2,
                            position: 'relative',
                            marginTop: 10,
                            marginRight: 10,
                            backgroundColor: '#fff',
                            width: 100,
                            height: 40,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderWidth: 1,
                            borderColor: '#000'
                        }}
                    >
                        <Text style={{
                            color: '#000',
                            fontSize: 16,
                        }}>Hủy</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            handleSubmit()
                        }}
                        style={{
                            borderRadius: 2,
                            position: 'relative',
                            marginTop: 10,
                            backgroundColor: '#fff',
                            width: 100,
                            height: 40,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderWidth: 1,
                            borderColor: '#A60D0D'
                        }}
                    >
                        <Text style={{
                            color: '#A60D0D',
                            fontSize: 16,
                        }}>Xác Nhận</Text>
                    </TouchableOpacity>
                </View>
            </ModalC>}
            <Tab.Navigator
                initialRouteName="Feed"
                screenOptions={{
                    tabBarIndicatorStyle: {
                        backgroundColor: '#A60D0D',
                    },
                    tabBarActiveTintColor: '#A60D0D',
                    tabBarInactiveTintColor: '#444',
                    tabBarLabelStyle: { fontSize: 13, fontWeight: '700' },
                    tabBarStyle: { backgroundColor: '#fff', color: '#A60D0D' },
                }}
                style={
                    {

                    }
                }
            >
                <Tab.Screen
                    name="Feed"
                    component={ThongTinCaNhan}
                    options={{
                        tabBarLabel: 'THÔNG TIN CÁ NHÂN', activeTintColor: "#21147a",
                        inactiveTintColor: "21147a",
                        activeBackgroundColor: "#21147a",
                        inactiveBackgroundColor: "#21147a",
                        style: {
                            backgroundColor: "#21147a",
                        },
                    }}
                />
                <Tab.Screen
                    name="Notifications"
                    component={MuaHang}
                    options={{ tabBarLabel: 'MUA HÀNG' }}
                />

            </Tab.Navigator>
        </View >
    )
}
const styles = StyleSheet.create({
    Header: {
        position: 'relative',
        top: 0,
        right: 0,
        height: 170,
        backgroundColor: '#A60D0D'
    },
    avt: {
        width: 60,
        height: 60,
        backgroundColor: '#F2C0A2',
        borderRadius: 100,
        display: 'flex',
        justifyContent: "center",
        alignItems: 'center',
        position: 'absolute',
        left: 13,
        top: 100,
    },
    TenAvt: {
        color: '#fff',
        fontSize: 35,
        fontWeight: '500'
    },
    HoTen: {
        fontSize: 18,
        fontWeight: '700',
        color: '#fff',
        position: 'absolute',
        top: 105,
        left: 85,
    },
    DangXuat: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        backgroundColor: 'rgba(255,255,255,0.2)',
        borderRadius: 14,
        position: 'absolute',
        top: 50,
        right: 10,
    },
    IconDangXuat: {
        width: 25,
        height: 25,
    },
    textDangXuat: {
        fontSize: 12,
        color: '#fff'
    },
    Header_child: {
        height: 40,
    },
    Header_childitem: {
        borderBottomWidth: 3,
        borderBottomColor: '#023E8A',
        width: '50%',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
});
export default TaiKhoan