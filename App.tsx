import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
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
		<View style={styles.container}>
			{/* <ManualLogin /> */}
			{/* <ManualRegister /> */}
			{/* <ResetPassword /> */}
			{/* <ResetPasswordEmailVerification /> */}
			<RegisterOtherUserInfo />
			{/* <RegisterEmailVerification /> */}
			{/* <BiometricRegister /> */}
			{/* <BiometricLogin /> */}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#0F1423',
	},
});
