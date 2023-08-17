import React from 'react';
import {
	Image,
	ImageBackground,
	Keyboard,
	KeyboardAvoidingView,
	Platform,
	SafeAreaView,
	ScrollView,
	StyleSheet,
	Text,
	TextInput,
	TouchableWithoutFeedback,
	View,
} from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import TextBox from '../components/TextBox';
import SecondaryButton from '../components/SecondaryButton';
import PrimaryText from '../components/PrimaryText';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

type Props = NativeStackScreenProps<RootStackParamList, 'ManualLogin'>;

export default function ManualLogin(props: Props) {
	const { navigation } = props;

	const passwordRef = React.useRef<TextInput>(null);
	return (
		<ImageBackground source={require('../../assets/get-started-background.png')} style={styles.parentView}>
			<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} style={styles.parentView}>
				<View style={styles.secondaryView}>
					<Text style={styles.logo}>Orbi</Text>

					<ScrollView style={styles.mainView}>
						<PrimaryText>Login</PrimaryText>

						<KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
							<TextBox
								placeholderText="Galactic ID"
								textContentType="username"
								onSubmit={() => {
									console.log('submitted');
									if (passwordRef?.current) passwordRef.current.focus();
								}}
							/>
							<TextBox placeholderText="Password" textContentType="password" ref={passwordRef} />
						</KeyboardAvoidingView>

						<SecondaryButton
							onPress={() => navigation.navigate('ResetPasswordEmailVerification')}
							title="Forgot Password ?"
						/>

						<PrimaryButton
							style={styles.primaryButton}
							onPress={() => navigation.navigate('BiometricLogin')}
							title="Login"
						/>

						<SecondaryButton
							onPress={() => navigation.navigate('BiometricRegister')}
							title="Register Instead"
							style={styles.secondaryButton}
						/>
					</ScrollView>
				</View>
			</TouchableWithoutFeedback>
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	parentView: { flex: 1 },
	secondaryView: { flex: 1, paddingHorizontal: 20 },

	logo: { fontFamily: 'Poppins_600SemiBold', color: '#fff', fontSize: 36 },
	mainView: { paddingTop: 250 },
	loginText: {
		fontFamily: 'Poppins_600SemiBold',
		fontSize: 53,
		color: '#fff',
	},
	primaryButton: {
		marginTop: 26,
	},
	secondaryButton: { justifyContent: 'center', alignItems: 'center', marginTop: 24 },
});
