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
import { AuthScreenList } from '../../App';
import SmallText from '../components/SmallText';

type Props = {};

export default function GetStarted(props: Props) {
	const { navigation } = props;

	const passwordRef = React.useRef<TextInput>(null);
	return (
		<ImageBackground source={require('../../assets/get-started-background.png')} style={styles.parentView}>
			<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} style={styles.parentView}>
				<View style={styles.secondaryView}>
					<Text style={styles.logo}>Orbi</Text>

					<ScrollView style={styles.mainView}>
						<PrimaryText style={styles.mainText}>Reach dream destinations</PrimaryText>

						<SmallText>
							InterGalactic is a inter-planetary agency. Dolorum voluptatibus quasi aut sunt repudiandae sequi
							aspernatur perferendis. Consequatur quas ut. Dolores incidunt aut.
						</SmallText>

						<PrimaryButton
							style={styles.primaryButton}
							onPress={() => navigation.navigate('BiometricLogin')}
							title="Get Started"
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
	mainText: { marginTop: 80 },
	loginText: {
		fontFamily: 'Poppins_600SemiBold',
		fontSize: 53,
		color: '#fff',
	},
	primaryButton: {
		marginTop: 80,
	},
	secondaryButton: { justifyContent: 'center', alignItems: 'center', marginTop: 24 },
});
