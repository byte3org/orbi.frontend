import React from 'react';
import { Image, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';
import SecondaryButton from '../components/SecondaryButton';
import PrimaryText from '../components/PrimaryText';

export default function BiometricLogin() {
	return (
		<ImageBackground source={require('../../assets/get-started-background.png')} style={styles.parentView}>
			<View style={styles.secondaryView}>
				<Text style={styles.logo}>Orbi</Text>

				<ScrollView style={styles.mainView}>
					<PrimaryText>Login</PrimaryText>

					<View style={{ alignItems: 'center', paddingVertical: 76, marginBottom: 32 }}>
						<Image
							style={{ opacity: 0.5, marginVertical: 30, transform: [{ scale: 1.5 }] }}
							source={require('../../assets/fingerprint.png')}
						/>
						<Text style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'Poppins_600SemiBold', fontSize: 18 }}>
							Verify your biometrics
						</Text>
					</View>

					<View style={{ flex: 1, alignItems: 'center', flexDirection: 'row', justifyContent: 'center' }}>
						<SecondaryButton onPress={() => console.log('pressed')} title="Login Manually" />
						<Text style={{ color: 'rgba(255,255,255,0.5)', marginHorizontal: 12 }}>•</Text>
						<SecondaryButton onPress={() => console.log('pressed')} title="Register Instead" />
					</View>
				</ScrollView>
			</View>
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	parentView: { flex: 1 },
	secondaryView: { flex: 1, paddingHorizontal: 20 },

	logo: { fontFamily: 'Poppins_600SemiBold', color: '#fff', fontSize: 36 },
	mainView: { paddingTop: 250 },
	primaryButton: {
		marginTop: 26,
	},
	secondaryButton: { justifyContent: 'center', alignItems: 'center', marginTop: 24 },
});
