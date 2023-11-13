import { StatusBar } from 'expo-status-bar';
import { LoginPage } from './src/pages/LoginPage'
import { MainPage } from './src/pages/MainPage'
import { Routes } from './src/routes';
import 'react-native-gesture-handler'

export default function App() {
  
  return (
    <>
      <StatusBar style='inverted' />
      {/* <LoginPage /> */}
      {/* <MainPage /> */}
      <Routes />
    </>
  );
}


