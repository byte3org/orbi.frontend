import { LinearGradient } from 'expo-linear-gradient';
import { ImageBackground, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Icon from './Icon';
import SmallText from './SmallText';
import SecondaryText from './SecondaryText';
import TertiaryText from './TertiaryText';

const TransportationModeCard = (props: TransportationMode) => {
	const { cost, image, name } = props;
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
						<View>
							<SmallText style={styles.smallText}>Cost</SmallText>
							<TertiaryText>{cost} Gs</TertiaryText>
						</View>
						<View>
							<SecondaryText>{name}</SecondaryText>
						</View>
					</View>
				</LinearGradient>
			</TouchableOpacity>
		</ImageBackground>
	);
};

export default TransportationModeCard;

const styles = StyleSheet.create({
	buttonsContainer: { alignItems: 'flex-end', justifyContent: 'center' },
	smallText: {
		textTransform: 'uppercase',
	},
});
