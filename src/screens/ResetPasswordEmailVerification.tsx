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
import PrimaryButton from '../components/PrimaryButton';
import ParagraphText from '../components/ParagraphText';
import PrimaryText from '../components/PrimaryText';
import CharacterBox from '../components/CharacterBox';
import SecondaryText from '../components/SecondaryText';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthScreenList } from '../../App';

type Props = NativeStackScreenProps<AuthScreenList, 'ResetPasswordEmailVerification'>;

export default function ResetPasswordEmailVerification(props: Props) {
	const { navigation } = props;

	const characterBox1 = React.useRef<TextInput>(null);
	const characterBox2 = React.useRef<TextInput>(null);
	const characterBox3 = React.useRef<TextInput>(null);
	const characterBox4 = React.useRef<TextInput>(null);
	const characterBox5 = React.useRef<TextInput>(null);

	return (
		<ImageBackground
			source={require('../../assets/get-started-background.png')}
			style={styles.parentView}
			blurRadius={25}>
			<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} style={styles.parentView}>
				<View style={styles.secondaryView}>
					<SafeAreaView>{/* <Text style={styles.logo}>Orbi</Text> */}</SafeAreaView>
					<ScrollView style={styles.mainView}>
						<PrimaryText>Reset Password</PrimaryText>
						<SecondaryText style={{ marginVertical: 20 }}>Verify Your Email</SecondaryText>
						<ParagraphText>
							Magni distinctio iusto rerum fuga ut est. Quia corporis quod et ut alias ipsum vero vitae minima. Eum in
							tempora voluptate quam. Dolorem id tempora soluta incidunt quasi quod rerum.
						</ParagraphText>

						<View style={{ marginTop: 20 }}>
							<KeyboardAvoidingView
								behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
								style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-around' }}>
								<CharacterBox ref={characterBox1} nextCharacterBoxRef={characterBox2?.current} />
								<CharacterBox
									ref={characterBox2}
									prevCharacterBoxRef={characterBox1?.current}
									nextCharacterBoxRef={characterBox3?.current}
								/>
								<CharacterBox
									ref={characterBox3}
									prevCharacterBoxRef={characterBox2?.current}
									nextCharacterBoxRef={characterBox4?.current}
								/>
								<CharacterBox
									ref={characterBox4}
									prevCharacterBoxRef={characterBox3?.current}
									nextCharacterBoxRef={characterBox5?.current}
								/>
								<CharacterBox ref={characterBox5} prevCharacterBoxRef={characterBox4?.current} />
							</KeyboardAvoidingView>
							<PrimaryButton
								style={styles.primaryButton}
								onPress={() => navigation.navigate('ResetPassword')}
								title="Next"
							/>

							<SecondaryButton
								style={{
									alignItems: 'center',
									justifyContent: 'center',
									marginTop: 50,
								}}
								onPress={() => console.log('Resend Email')}
								title="Resend Email"
							/>
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
	mainView: { paddingTop: 60 },
	loginText: {
		fontFamily: 'Poppins_600SemiBold',
		fontSize: 53,
		color: '#fff',
	},
	loginTextDescription: {
		fontFamily: 'Poppins_600SemiBold',
		fontSize: 17,
		color: '#fff',
	},
	primaryButton: {
		marginTop: 50,
	},
	secondaryButton: { justifyContent: 'center', alignItems: 'center', marginTop: 24 },
});
