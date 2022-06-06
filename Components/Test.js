
// PaymentScreen.ts
import { CardField, useStripe } from '@stripe/stripe-react-native';
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
export default function PaymentScreen() {
    const { confirmPayment } = useStripe();
    const [card, setCard] = useState()
    const handlePayment = async () => {
        const res = await confirmPayment('123', {
            type: 'Card',
            billingDetails: {
                email: 'trai@gmail.com'
            }
        })
        console.log(res)
    }
    return (
        <View>
            <CardField
                postalCodeEnabled={true}
                placeholders={{
                    number: '4242 4242 4242 4242',
                }}
                cardStyle={{
                    backgroundColor: '#FFFFFF',
                    textColor: '#000000',
                }}
                style={{
                    width: '100%',
                    height: 50,
                    marginVertical: 30,
                }}
                onCardChange={(cardDetails) => {
                    setCard(cardDetails);
                }}
                onFocus={(focusedField) => {
                    console.log('focusField', focusedField);
                }}
            />
            <TouchableOpacity style={{
                backgroundColor: 'blue',
                width: 80,
                height: 40,
                justifyContent: 'center',
                alignItems: 'center',
                margin: 40,
                borderRadius: 6,
            }} onPress={() => {
                handlePayment()
            }}>
                <Text style={{
                    color: 'white'
                }}>Pay</Text>
            </TouchableOpacity>
        </View>


    );
}