import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';
import { Link, Routes, Route, NativeRouter } from 'react-router-native';
import Auth from './Components/Auth/Auth';
import Home_Main from './Components/Home/Home_Main';
import AuthContextProvider from './Context/Auth';
import { NavigationContainer } from '@react-navigation/native';
import NavContextProvider from './Context/NavContext';
import NameContextProvider from './Context/NameContext';
import SelectProductContextProvider from './Context/selectProductContext';
import HinhThucContextProvider, { HinhThucContext } from './Context/HinhThucThanhToan';
import Test from './Components/Test';
import { StripeProvider } from '@stripe/stripe-react-native';
import PaymentScreen from './Components/Test';
import CardContextProvider, { CardContext } from './Context/CardContext';
export default function App() {
  const [publishableKey, setPublishableKey] = useState('');
  const fetchPublishableKey = async () => {
    const key = '1'; // fetch key from your server here
    setPublishableKey(key);
  };
  useEffect(() => {
    fetchPublishableKey();
  }, []);

  return (


    <View style={styles.container}>
      <StripeProvider>
        <AuthContextProvider>
          <NavigationContainer>
            <NavContextProvider>

              <NativeRouter>
                <SelectProductContextProvider>
                  <CardContextProvider>
                    <HinhThucContextProvider>
                      <NameContextProvider>
                        <Routes>
                          <Route path='*' element={<Auth />} />
                          <Route path='/Home/*' element={<Home_Main />} />
                        </Routes>
                      </NameContextProvider>
                    </HinhThucContextProvider>
                  </CardContextProvider>
                </SelectProductContextProvider>
              </NativeRouter>
            </NavContextProvider>
          </NavigationContainer>
        </AuthContextProvider>
      </StripeProvider>
    </View >

    // <StripeProvider
    //   publishableKey={publishableKey}
    //   merchantIdentifier="merchant.identifier"
    // >
    //   <PaymentScreen />
    // </StripeProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#fff',
  },
});
