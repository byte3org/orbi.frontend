import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
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

export type RootStackParamList = {
	ManualLogin: undefined;
	ManualRegister: undefined;
	ResetPassword: undefined;
	ResetPasswordEmailVerification: undefined;
	RegisterOtherUserInfo: undefined;
	RegisterEmailVerification: undefined;
	BiometricRegister: undefined;
	BiometricLogin: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

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
		<NavigationContainer>
			<Stack.Navigator initialRouteName="BiometricLogin">
				<Stack.Screen name="ManualLogin" component={ManualLogin} />
				<Stack.Screen name="ManualRegister" component={ManualRegister} />
				<Stack.Screen name="ResetPassword" component={ResetPassword} />
				<Stack.Screen name="ResetPasswordEmailVerification" component={ResetPasswordEmailVerification} />
				<Stack.Screen name="RegisterOtherUserInfo" component={RegisterOtherUserInfo} />
				<Stack.Screen name="RegisterEmailVerification" component={RegisterEmailVerification} />
				<Stack.Screen name="BiometricRegister" component={BiometricRegister} />
				<Stack.Screen name="BiometricLogin" component={BiometricLogin} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#0F1423',
	},
});
