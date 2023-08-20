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
import GetStarted from './src/screens/GetStarted';

export type AuthScreenList = {
	ManualLogin: undefined;
	ManualRegister: undefined;
	ResetPassword: undefined;
	ResetPasswordEmailVerification: undefined;
	RegisterOtherUserInfo: undefined;
	RegisterEmailVerification: undefined;
	BiometricRegister: undefined;
	BiometricLogin: undefined;

	TransportationModelDetails: undefined;
	Transportation: undefined;
	Booking: undefined;
	Destination: undefined;
	Destinations: undefined;
	Profile: undefined;
	Home: undefined;
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

export type BookingScreenList = {
	Header: undefined;
	TransportationModeDetails: undefined;
	Transportation: undefined;
	Booking: undefined;
	Destination: undefined;
	Destinations: undefined;
	Confirmation: undefined;
	Discover: undefined;
	BiometricPaymentConfirmation: undefined;
	ManualPaymentConfirmation: undefined;
	Invoice: undefined;
	UpcomingFlightInfo: undefined;
	Profile: undefined;
	Home: undefined;
};

const Auth = createNativeStackNavigator<AuthScreenList>();

const Book = createNativeStackNavigator<BookingScreenList>();

export default function App() {
	let [fontsLoaded] = useFonts({
		Poppins_400Regular,
		Poppins_500Medium,
		Poppins_600SemiBold,
	});

	if (!fontsLoaded) {
		return null;
	}

	/* I think this is not the right way to do it
		But I'll do it like this for now,
		experts please do it the right way if this is wrong :)
	*/
	return (
		<SafeAreaProvider>
			{/* <Header /> */}
			{/* <TransportationModeDetails /> */}
			{/* <Transportation /> */}
			{/* <Booking /> */}
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

			<NavigationContainer>
				<Book.Navigator
					initialRouteName="Home"
					screenOptions={{
						headerTintColor: '#fff',
						header: Header,
						contentStyle: { backgroundColor: '#0F1423', paddingHorizontal: 10 },
					}}>
					<Book.Screen name="TransportationModeDetails" component={TransportationModeDetails} />
					<Book.Screen name="Transportation" component={Transportation} />
					<Book.Screen name="Booking" component={Booking} />
					<Book.Screen name="Destination" component={Destination} />
					<Book.Screen name="Destinations" component={Destinations} />
					<Book.Screen name="Confirmation" component={Confirmation} />
					<Book.Screen name="Discover" component={Discover} />
					{/* <Book.Screen name="BiometricPaymentConfirmation" component={BiometricPaymentConfirmation} />
					<Book.Screen name="ManualPaymentConfirmation" component={ManualPaymentConfirmation} /> */}
					<Book.Screen name="Invoice" component={Invoice} />
					<Book.Screen name="UpcomingFlightInfo" component={UpcomingFlightInfo} />
					{/* <Book.Screen name="Profile" component={Profile} /> */}
					<Book.Screen name="Home" component={Home} />
				</Book.Navigator>
			</NavigationContainer>
		</SafeAreaProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#0F1423',
	},
});
