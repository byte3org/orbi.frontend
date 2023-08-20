import { View, Text, ImageBackground, TouchableOpacity, ImageSourcePropType, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import SmallText from './SmallText';
import SecondaryText from './SecondaryText';
import TertiaryText from './TertiaryText';
import { Pressable } from 'react-native';

type Props = UpcomingFlightData & { onPress: () => void };

const UpcomingFlightCard = (props: Props) => {
	const { destination, planet, timeRemaining, image, onPress } = props;

	return (
		<ImageBackground style={styles.backgroundImageContainer} source={image} resizeMode="cover">
			<Pressable onPress={onPress} style={styles.flexed}>
				<LinearGradient
					colors={['rgba(0,0,0,0.75)', 'rgba(0,0,0,0.4)', 'transparent']}
					start={{ x: 0, y: 0.5 }}
					locations={[0.25, 0.5, 1]}
					end={{ x: 1, y: 0.5 }}
					style={styles.gradientContainer}>
					<View>
						<SmallText style={styles.smallText}>Upcoming Flight In</SmallText>
						<SecondaryText>{timeRemaining}</SecondaryText>
					</View>
					<View>
						<SmallText>{planet}</SmallText>
						<SecondaryText>{destination}</SecondaryText>
					</View>
				</LinearGradient>
			</Pressable>
		</ImageBackground>
	);
};

const styles = StyleSheet.create({
	backgroundImageContainer: {
		width: '95%',
		backgroundColor: '#000',
		marginLeft: 10,
		overflow: 'hidden',
		height: 180,
		borderRadius: 20,
		marginBottom: 20,
	},
	flexed: { flex: 1 },
	gradientContainer: {
		// padding: 20,
		paddingHorizontal: 20,
		paddingVertical: 10,
		flex: 1,
		justifyContent: 'space-between',
	},
	smallText: {
		textTransform: 'uppercase',
	},
});

export default UpcomingFlightCard;
