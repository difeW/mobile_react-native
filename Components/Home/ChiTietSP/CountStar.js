
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView, View, Image, TouchableOpacity, Modal, TextAncestor, Picker } from 'react-native';


const CountStar = ({ count, size }) => {
    let i = 0
    let e = []
    return (
        <View style={{
            flexDirection: 'row',

        }}>
            {
                function (count) {
                    for (i = 0; i < parseInt(count); i++) {
                        e.push(<Image key={i}
                            style={{
                                marginLeft: 5,
                                width: size,
                                height: size,
                            }}
                            source={
                                { uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Star_icon_stylized.svg/2153px-Star_icon_stylized.svg.png' }
                            } />)
                    }
                    if (count - parseInt(count) > 0) {
                        e.push(<Image key={i++}
                            style={{
                                marginLeft: 5,
                                width: size,
                                height: size,
                            }}
                            source={
                                { uri: 'http://www.clker.com/cliparts/l/q/x/5/0/1/half-star-2.svg.med.png' }
                            } />)
                    }
                    for (let i = 0; i <= 5 - count - 1; i++) {
                        e.push(<Image key={5 + i}
                            style={{
                                marginLeft: 5,
                                width: size,
                                height: size,
                            }}
                            source={
                                { uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/OOjs_UI_icon_unStar.svg/800px-OOjs_UI_icon_unStar.svg.png' }
                            } />)
                    }
                    return e
                }(count)
            }
            {/* <Image
                style={styles.Image}
                source={
                    { uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Star_icon_stylized.svg/2153px-Star_icon_stylized.svg.png' }
                } />
            <Image
                style={styles.Image}
                source={
                    { uri: 'http://www.clker.com/cliparts/l/q/x/5/0/1/half-star-2.svg.med.png' }
                } />
            <Image
                style={styles.Image}
                source={
                    { uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/OOjs_UI_icon_unStar.svg/800px-OOjs_UI_icon_unStar.svg.png' }
                } /> */}
        </View>

    )
}
const styles = StyleSheet.create({
    Image: {
        marginLeft: 5,
        width: 20,
        height: 20,
    }
});
export default CountStar