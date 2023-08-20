import React from 'react';
import { Image, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';
import SecondaryButton from '../components/SecondaryButton';
import PrimaryText from '../components/PrimaryText';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthScreenList } from '../../App';
import SecondaryText from '../components/SecondaryText';
import Icon from '../components/Icon';
import SmallText from '../components/SmallText';

type Props = NativeStackScreenProps<AuthScreenList, 'BiometricLogin'>;

export default function BiometricPaymentConfirmation(props: Props) {
	const { navigation } = props;
	return (
		<ImageBackground source={require('../../assets/get-started-background.png')} style={styles.parentView}>
			<View style={styles.secondaryView}>
				<Text style={styles.logo}>Orbi</Text>

				<ScrollView style={styles.mainView}>
					<SecondaryText>Confirm Payment</SecondaryText>

					<View style={styles.fingerprintIconContainer}>
						<Icon name="fingerprint" style={styles.fingerprintIcon} />
						<SmallText style={styles.verifyText}>Verify your biometrics</SmallText>
					</View>

					<View style={{ flex: 1, alignItems: 'center', flexDirection: 'row', justifyContent: 'center' }}>
						<SecondaryButton onPress={() => navigation.navigate('ManualLogin')} title="Pay with Galactic ID" />
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
	fingerprintIconContainer: { alignItems: 'center', paddingVertical: 76, marginBottom: 32 },
	fingerprintIcon: { fontSize: 62, color: 'rgba(255,255,255,0.5)', marginBottom: 20 },
	verifyText: {},
	primaryButton: {
		marginTop: 26,
	},
	secondaryButton: { justifyContent: 'center', alignItems: 'center', marginTop: 24 },
});
