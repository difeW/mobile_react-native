
import { View } from 'react-native';
import { ScrollView } from 'react-native';
import DienThoai from './DienThoai';
import Laptop from './Laptop';


function DanhMucSP({ navigation }) {
    return (
        <ScrollView nestedScrollEnabled={true} style={{
        }}>
            <DienThoai navigation={navigation} />
            <Laptop navigation={navigation} />
            <View style={{
                height: 140,
                backgroundColor: '#f1f1f1',
            }}>
            </View>
        </ScrollView>
    );
}
export default DanhMucSP