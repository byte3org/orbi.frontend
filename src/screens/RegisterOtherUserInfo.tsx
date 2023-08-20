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
const planets: DropdownOption<string>[] = [{ label: 'Mars', value: 'mars' }];
const countries: DropdownOption<string>[] = [{ label: 'Mars', value: 'mars' }];

export default function RegisterOtherUserInfo() {
	// const [geoPostalCode,setGeoPostalCode] = React.useState('')

	return (
		<ImageBackground
			source={require('../../assets/get-started-background.png')}
			style={styles.parentView}
			blurRadius={25}>
			<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} style={styles.parentView}>
				<View style={styles.secondaryView}>
					<SafeAreaView>{/* <Text style={styles.logo}>Orbi</Text> */}</SafeAreaView>
					<View style={styles.mainView}>
						<PrimaryText>Register</PrimaryText>
						<View style={{ marginTop: 20 }}>
							<KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
								<Dropdown style={styles.dropdown} options={galaxies} value="andromeda" />
								<Dropdown style={styles.dropdown} options={planets} value="mars" />
								<Dropdown style={styles.dropdown} options={countries} value="mars" />
								<TextBox placeholderText="Geo Code or Postal Code" />
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
	dropdown: {
		marginBottom: 20,
	},
	primaryButton: {
		marginTop: 50,
	},
	secondaryButton: { justifyContent: 'center', alignItems: 'center', marginTop: 24 },
});
