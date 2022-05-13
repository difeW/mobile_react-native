import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View } from 'react-native';
import ChiTietSP2 from './ChiTietSP/ChiTietSP2';
import TaiKhoan from './TaiKhoan';

const Stack = createNativeStackNavigator();

function TaiKhoan_Main() {
    return (
        <View style={{
            height: '100%'
        }}>
            <Stack.Navigator>

                <Stack.Screen name="TaiKhoan" options={{
                    headerShown: false
                }} component={TaiKhoan} />
                <Stack.Screen name="ChiTietSPDG" component={ChiTietSP2} options={{
                    headerShown: false,
                }} />
            </Stack.Navigator>
        </View>

    );
}
export default TaiKhoan_Main