import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View } from 'react-native';
import ChiTietSP1 from '../ChiTietSP/ChiTietSP1';
import ChiTietSP2 from '../ChiTietSP/ChiTietSP2';
import GioHang_Main from './GioHang_Main';


const Stack = createNativeStackNavigator();

function GioHang() {
    return (
        <View style={{
            height: '100%'
        }}>
            <Stack.Navigator>
                <Stack.Screen name="GioHang" component={GioHang_Main} options={{
                    headerShown: false
                }} />
                <Stack.Screen name="ChiTiet" options={{
                    headerShown: false
                }} component={ChiTietSP2} />
            </Stack.Navigator>
        </View>

    );
}
export default GioHang