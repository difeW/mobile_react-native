import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View } from 'react-native';
import ChiTietSP1 from '../ChiTietSP/ChiTietSP1';
import ChiTietSP2 from '../ChiTietSP/ChiTietSP2';
import DanhMucSanPham from './DanhMucSanPham';

const Stack = createNativeStackNavigator();

function DanhMucSP_Main() {
    return (
        <View style={{
            height: '100%'
        }}>
            <Stack.Navigator>
                <Stack.Screen name="DanhMucSP1" component={DanhMucSanPham} options={{
                    headerShown: false
                }} />
                <Stack.Screen name="ChiTietSP1" options={{
                    headerShown: false
                }} component={ChiTietSP2} />
            </Stack.Navigator>
            <View
                style={{
                    height: 60
                }}></View>
        </View>
    );
}
export default DanhMucSP_Main