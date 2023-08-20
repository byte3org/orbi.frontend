import { View, ImageBackground, StyleSheet, Platform, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import SmallText from './SmallText';
import SecondaryText from './SecondaryText';
import TertiaryText from './TertiaryText';
import Icon from './Icon';

const DestinationFullCard = (props: Destination) => {
	const { destination, planet, isAFavorite, image } = props;

	return (
		<ImageBackground
			style={{
				width: '100%',
				backgroundColor: '#000',
				marginBottom: 20,
				overflow: 'hidden',
				height: 160,
				borderRadius: 20,

				...Platform.select({
					ios: {
						shadowColor: 'black',
						shadowOffset: { width: 0, height: 2 },
						shadowOpacity: 0.5,
						shadowRadius: 5,
					},
					android: {
						elevation: 5,
					},
				}),
			}}
			source={image}>
			<TouchableOpacity onPress={() => console.log('Destination Card clicked.')} style={{ flex: 1 }}>
				<LinearGradient
					colors={['rgba(0,0,0,0.75)', 'rgba(0,0,0,0.4)', 'transparent']}
					start={{ x: 0, y: 0.5 }}
					locations={[0.25, 0.5, 1]}
					end={{ x: 1, y: 0.5 }}
					style={{
						// padding: 20,
						paddingHorizontal: 20,
						paddingVertical: 10,
						flex: 1,
					}}>
					<View style={{ flex: 1, justifyContent: 'space-between' }}>
						<View style={styles.buttonsContainer}>
							<Icon
								name={isAFavorite ? 'star' : 'star-outline'}
								style={{
									fontSize: 28,
									color: isAFavorite ? '#F2994A' : 'hsla(0,0%,100%,0.5)',
									paddingVertical: 10,
								}}
							/>
						</View>
						<View>
							<SmallText style={styles.smallText}>{planet}</SmallText>
							<SecondaryText>{destination}</SecondaryText>
						</View>
					</View>
				</LinearGradient>
			</TouchableOpacity>
		</ImageBackground>
	);
};

const styles = StyleSheet.create({
	buttonsContainer: { alignItems: 'flex-end', justifyContent: 'center' },
	smallText: {
		textTransform: 'uppercase',
	},
});

export default DestinationFullCard;
