import { StyleSheet, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import { useFonts } from 'expo-font';

import ManualLogin from './src/screens/ManualLogin';
import BiometricLogin from './src/screens/BiometricLogin';
import BiometricRegister from './src/screens/BiometricRegister';
import ManualRegister from './src/screens/ManualRegister';
import RegisterEmailVerification from './src/screens/RegisterEmailVerification';
import RegisterOtherUserInfo from './src/screens/RegisterOtherUserInfo';
import ResetPasswordEmailVerification from './src/screens/ResetPasswordEmailVerification';
import ResetPassword from './src/screens/ResetPassword';
import SecondaryButton from './src/components/SecondaryButton';
import Header from './src/components/Header';
import Home from './src/screens/Home';
import Profile from './src/screens/Profile';
import UpcomingFlightInfo from './src/screens/UpcomingFlightInfo';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Destinations from './src/screens/Destinations';
import Destination from './src/screens/Destination';
import Booking from './src/screens/Booking';
import Transportation from './src/screens/Transportation';
import TransportationModeDetails from './src/screens/TransportationModeDetails';
import Confirmation from './src/screens/Confirmation';
import Invoice from './src/screens/Invoice';
import Discover from './src/screens/Discover';
import BiometricPaymentConfirmation from './src/screens/BiometricPaymentConfirmation';
import ManualPaymentConfirmation from './src/screens/ManualPaymentConfirmation';

export type AuthScreenList = {
	ManualLogin: undefined;
	ManualRegister: undefined;
	ResetPassword: undefined;
	ResetPasswordEmailVerification: undefined;
	RegisterOtherUserInfo: undefined;
	RegisterEmailVerification: undefined;
	BiometricRegister: undefined;
	BiometricLogin: undefined;
};

export type HomeScreenList = {
	ManualLogin: undefined;
	ManualRegister: undefined;
	ResetPassword: undefined;
	ResetPasswordEmailVerification: undefined;
	RegisterOtherUserInfo: undefined;
	RegisterEmailVerification: undefined;
	BiometricRegister: undefined;
	BiometricLogin: undefined;
};

const Auth = createNativeStackNavigator<AuthScreenList>();
// const Home = createNativeStackNavigator<HomeScreenList>();

export default function App() {
	let [fontsLoaded] = useFonts({
		Poppins_400Regular,
		Poppins_500Medium,
		Poppins_600SemiBold,
	});

	if (!fontsLoaded) {
		return null;
	}

	return (
		<SafeAreaProvider>
			{/* <Header /> */}
			{/* <TransportationModeDetails /> */}
			{/* <Transportation /> */}
			<Booking />
			{/* <Destination /> */}
			{/* <Destinations /> */}
			{/* <Confirmation /> */}
			{/* <Discover /> */}
			{/* <BiometricPaymentConfirmation /> */}
			{/* <ManualPaymentConfirmation /> */}
			{/* <Invoice
				cart={[
					{ item: 'ER6-Transport', quantity: 2, unitPrice: 1200 },
					{ item: 'Refreshing Drinks', quantity: 4, unitPrice: 50 },
				]}
				transactionId="FAJIO48YTF09XGAY7"
				passengers={['Luke SkyWalker', 'Leila SkyWalker', 'Darth Wader', 'Master Yoda']}
				image={require('./assets/curima.png')}
			/> */}
			{/* <UpcomingFlightInfo /> */}
			{/* <Profile /> */}
			{/* <Home /> */}

			{/* <NavigationContainer>
				<Auth.Navigator
					initialRouteName="BiometricLogin"
					screenOptions={{ headerTintColor: '#fff', header: Header, contentStyle: { backgroundColor: '#0F1423' } }}>
					<Auth.Screen name="ManualLogin" component={ManualLogin} />
					<Auth.Screen name="ManualRegister" component={ManualRegister} />
					<Auth.Screen name="ResetPassword" component={ResetPassword} />
					<Auth.Screen name="ResetPasswordEmailVerification" component={ResetPasswordEmailVerification} />
					<Auth.Screen name="RegisterOtherUserInfo" component={RegisterOtherUserInfo} />
					<Auth.Screen name="RegisterEmailVerification" component={RegisterEmailVerification} />
					<Auth.Screen name="BiometricRegister" component={BiometricRegister} />
					<Auth.Screen name="BiometricLogin" component={BiometricLogin} />
				</Auth.Navigator>
			</NavigationContainer> */}
		</SafeAreaProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#0F1423',
	},
});
