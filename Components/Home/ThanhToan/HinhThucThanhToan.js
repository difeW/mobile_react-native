import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, Image, Modal } from 'react-native';
import { Link, Routes, Route, NativeRouter, useNavigate } from 'react-router-native';
import { useState, useContext } from 'react';
import { Picker } from '@react-native-picker/picker'
import { HinhThucContext } from '../../../Context/HinhThucThanhToan';


const HinhThucThanhToan = () => {
    const { hinhThucThanhToan, setValue } = useContext(HinhThucContext)
    const [selectedValue, setSelectedValue] = useState("Thanh toán bằng tiền mặt");
    const [check, setCheck] = useState('')
    return (
        <View style={{
            marginTop: 10,
            paddingTop: 10, paddingBottom: 10,
            backgroundColor: '#fff',
            width: '100%',
            paddingLeft: '3%',
            minHeight: 180,
        }}>
            <Text style={{
                fontSize: 16,
                fontWeight: '700',
                color: '#000',
                marginBottom: 6,
            }}>HÌNH THỨC THANH TOÁN</Text>
            <View style={{
                borderColor: '#bbb',
                borderRadius: 5,
                borderWidth: 1,
                height: 40,
                justifyContent: 'center',
                alignItems: 'center',
                width: 280,
            }}>
                <Picker
                    selectedValue={selectedValue}
                    style={{

                        height: '100%',
                        width: 280,
                    }}
                    onValueChange={(itemValue) => {
                        setSelectedValue(itemValue)
                        setValue(itemValue)
                    }}
                >
                    <Picker.Item label="Thanh toán bằng tiền mặt" value="Thanh toán bằng tiền mặt" />
                    <Picker.Item label="Thanh toán qua ngân hàng" value="Thanh toán qua ngân hàng" />
                </Picker>
            </View>
            {Boolean(selectedValue == 'Thanh toán qua ngân hàng') &&
                <View>
                    <Text style={{
                        fontSize: 15,
                        margin: 5,
                        fontWeight: '500'
                    }}>(Thanh toán trước)</Text>
                    <Text
                        style={{
                            fontSize: 15,
                            fontWeight: '500',
                            marginBottom: 10,

                        }}>Chọn ngân hàng: </Text>
                    <View style={styles.NganHang}>
                        <TouchableOpacity
                            key='BIDV'
                            onPress={() => {
                                setCheck('BIDV')
                            }}
                            style={Boolean(check == 'BIDV') ? styles.NganHang_itemSelect : styles.NganHang_item}>
                            <Image
                                style={{
                                    borderRadius: 10,
                                    width: '100%',
                                    height: '100%',
                                }}
                                source={{
                                    uri: 'data:image/png;base64,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'
                                }} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            key='ABC'
                            onPress={() => {
                                setCheck('ABC')
                            }}
                            style={Boolean(check == 'ABC') ? styles.NganHang_itemSelect : styles.NganHang_item}>
                            <Image
                                style={{
                                    borderRadius: 10,
                                    width: '100%',
                                    height: '100%',
                                }}
                                source={{
                                    uri: 'https://static.topcv.vn/company_logos/70tKOreReGQnao1cfqWVDy5SXgRGziml_1636538221____ba33d89a94c153e9a0f327e4ff385f13.png'
                                }} />
                        </TouchableOpacity>
                    </View>

                </View>

            }
            {Boolean(selectedValue == 'Thanh toán bằng tiền mặt') &&
                <View style={{
                    padding: 10,
                }}>
                    <Text>Thanh toán khi nhận hàng</Text></View>}
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#fff',
    },
    NganHang: {
        flexDirection: 'row',

    },
    NganHang_item: {
        borderColor: '#bbb',
        borderWidth: 1,
        borderRadius: 10,
        width: 70,
        height: 70,
        marginRight: 10,
    },
    NganHang_itemSelect: {
        borderWidth: 1,
        borderRadius: 10,
        width: 70,
        height: 70,
        marginRight: 10,
        borderColor: 'red',
    }
});
export default HinhThucThanhToan 