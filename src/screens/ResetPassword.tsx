import React from 'react';
import {
	TextInput,
	ImageBackground,
	ScrollView,
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	KeyboardAvoidingView,
	TouchableWithoutFeedback,
	Keyboard,
	Platform,
} from 'react-native';
import SecondaryButton from '../components/SecondaryButton';
import TextBox from '../components/TextBox';
import PrimaryButton from '../components/PrimaryButton';
import PrimaryText from '../components/PrimaryText';

export default function ResetPassword() {
	const fullNameRef = React.useRef<TextInput>(null);
	const emailRef = React.useRef<TextInput>(null);
	const passwordRef = React.useRef<TextInput>(null);
	const retypePasswordRef = React.useRef<TextInput>(null);

	return (
		<ImageBackground
			source={require('../../assets/get-started-background.png')}
			style={styles.parentView}
			blurRadius={25}>
			<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} style={styles.parentView}>
				<View style={styles.secondaryView}>
					<SafeAreaView>
						<Text style={styles.logo}>Orbi</Text>
					</SafeAreaView>
					<ScrollView style={styles.mainView}>
						<PrimaryText>Reset Password</PrimaryText>
						<View style={{ marginTop: 20 }}>
							<KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
								<TextBox
									ref={passwordRef}
									placeholderText="New Password"
									textContentType="password"
									onSubmit={() => retypePasswordRef.current?.focus()}
								/>
								<TextBox ref={retypePasswordRef} placeholderText="Confirm New Password" textContentType="password" />
							</KeyboardAvoidingView>
							<PrimaryButton style={styles.primaryButton} onPress={() => console.log('Register')} title="Register" />
						</View>
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
	mainView: { paddingTop: 100 },
	loginText: {
		fontFamily: 'Poppins_600SemiBold',
		fontSize: 53,
		color: '#fff',
	},
	primaryButton: {
		marginTop: 50,
	},
	secondaryButton: { justifyContent: 'center', alignItems: 'center', marginTop: 24 },
});
