import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
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
export default function App() {
  return (

    <View style={styles.container}>
      <AuthContextProvider>
        <NavigationContainer>
          <NavContextProvider>
            <NativeRouter>
              <SelectProductContextProvider>
                <HinhThucContextProvider>
                  <NameContextProvider>
                    <Routes>
                      <Route path='*' element={<Auth />} />
                      <Route path='/Home/*' element={<Home_Main />} />
                    </Routes>
                  </NameContextProvider>
                </HinhThucContextProvider>
              </SelectProductContextProvider>
            </NativeRouter>
          </NavContextProvider>
        </NavigationContainer>
      </AuthContextProvider>
    </View >
    // <View>
    //   <Test />
    // </View>

  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#fff',
  },
});
