import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View } from 'react-native';
import ChiTietSP from '../ChiTietSP/ChiTietSP2';
import XemTatCa1 from './XemTatCa1';
import TrangChu from './TrangChu';

const Stack = createNativeStackNavigator();

function TrangChu_Main() {
    return (
        <View style={{
            height: '100%'
        }}>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={TrangChu} options={{
                    headerShown: false,
                }} />
                <Stack.Screen name="DanhMuc" options={{
                    headerShown: false
                }} component={XemTatCa1} />
                <Stack.Screen name="ChiTietSP2" options={{
                    headerShown: false
                }} component={ChiTietSP} />


            </Stack.Navigator>
        </View>

    );
}
export default TrangChu_Main