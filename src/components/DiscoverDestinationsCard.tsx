import { View, ImageBackground, Pressable, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import SmallText from './SmallText';
import SecondaryText from './SecondaryText';

type Props = {};

const DiscoverDestinationsCard = (props: Props) => {
	const navigator = useNavigation()
	return (
		<ImageBackground style={styles.imageBackground} source={require('../../assets/discover.png')} resizeMode="cover">
			<Pressable onPress={() => {navigator.navigate("Destinations")}} style={styles.flexed}>
				<LinearGradient
					colors={['rgba(0,0,0,0.75)', 'rgba(0,0,0,0.4)', 'transparent']}
					start={{ x: 0, y: 0.5 }}
					locations={[0.25, 0.5, 1]}
					end={{ x: 1, y: 0.5 }}
					style={styles.gradient}>
					<View>
						<SmallText>DISCOVER</SmallText>
						<SecondaryText>Destinations</SecondaryText>
					</View>
				</LinearGradient>
			</Pressable>
		</ImageBackground>
	);
};

const styles = StyleSheet.create({
	imageBackground: {
		width: '95%',
		backgroundColor: '#000',
		marginLeft: 10,
		overflow: 'hidden',
		height: 180,
		borderRadius: 20,
		shadowColor: 'black',
		shadowOffset: { width: 2, height: 2 },
		shadowOpacity: 1,
		shadowRadius: 5,
	},
	flexed: { flex: 1 },
	gradient: {
		// padding: 20,
		paddingHorizontal: 20,
		paddingVertical: 10,
		flex: 1,
		justifyContent: 'space-between',
		alignItems: 'flex-end',
		flexDirection: 'row',
	},
});

export default DiscoverDestinationsCard;
