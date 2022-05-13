import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Link, Routes, Route, NativeRouter } from 'react-router-native';
const StarList = () => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.Image}
                source={
                    { uri: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/250113620_1032195780680643_8246624318722783566_n.jpg?stp=dst-jpg_p206x206&_nc_cat=111&ccb=1-5&_nc_sid=aee45a&_nc_ohc=WGveKEZEd0cAX8Oeo1C&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVIRk_633GtG0YOqRO1Tcte2p7j8vwSpYj6Dly-aT4NV5A&oe=6283330B' }
                } />
            <Image
                style={styles.Image}
                source={
                    { uri: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/250113620_1032195780680643_8246624318722783566_n.jpg?stp=dst-jpg_p206x206&_nc_cat=111&ccb=1-5&_nc_sid=aee45a&_nc_ohc=WGveKEZEd0cAX8Oeo1C&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVIRk_633GtG0YOqRO1Tcte2p7j8vwSpYj6Dly-aT4NV5A&oe=6283330B' }
                } />
            <Image
                style={styles.Image}
                source={
                    { uri: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/250113620_1032195780680643_8246624318722783566_n.jpg?stp=dst-jpg_p206x206&_nc_cat=111&ccb=1-5&_nc_sid=aee45a&_nc_ohc=WGveKEZEd0cAX8Oeo1C&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVIRk_633GtG0YOqRO1Tcte2p7j8vwSpYj6Dly-aT4NV5A&oe=6283330B' }
                } />
            <Image
                style={styles.Image}
                source={
                    { uri: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/250113620_1032195780680643_8246624318722783566_n.jpg?stp=dst-jpg_p206x206&_nc_cat=111&ccb=1-5&_nc_sid=aee45a&_nc_ohc=WGveKEZEd0cAX8Oeo1C&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVIRk_633GtG0YOqRO1Tcte2p7j8vwSpYj6Dly-aT4NV5A&oe=6283330B' }
                } />
            <Image
                style={styles.ImageEnd}
                source={
                    { uri: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/250113620_1032195780680643_8246624318722783566_n.jpg?stp=dst-jpg_p206x206&_nc_cat=111&ccb=1-5&_nc_sid=aee45a&_nc_ohc=WGveKEZEd0cAX8Oeo1C&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVIRk_633GtG0YOqRO1Tcte2p7j8vwSpYj6Dly-aT4NV5A&oe=6283330B' }
                } />
            <Text style={{
                fontSize: 11,
                color: '#111'
            }}>12 đánh giá</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        marginTop: 8,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    Image: {
        width: 12,
        height: 12
    },
    ImageEnd: {
        width: 12,
        height: 12,
        marginRight: 3
    }
});

export default StarList