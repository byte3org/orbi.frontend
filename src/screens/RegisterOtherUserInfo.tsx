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
import Dropdown, { DropdownOption } from '../components/Dropdown';

const galaxies: DropdownOption<string>[] = [{ label: 'Andromeda', value: 'andromeda' }];

export default function RegisterOtherUserInfo() {
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
					<View style={styles.mainView}>
						<PrimaryText>Register</PrimaryText>
						<View style={{ marginTop: 20 }}>
							<KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
								<Dropdown options={galaxies} value="andromeda" />
							</KeyboardAvoidingView>
							<PrimaryButton style={styles.primaryButton} onPress={() => console.log('Register')} title="Register" />
						</View>
					</View>
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
