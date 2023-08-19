import { View, Text, ImageBackground, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import SmallText from './SmallText';
import SecondaryText from './SecondaryText';
import TertiaryText from './TertiaryText';

type Props = {};

const DiscoverDestinationsCard = (props: Props) => {
	return (
		<ImageBackground
			style={{
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
			}}
			source={require('../../assets/discover.png')}
			resizeMode="cover">
			<Pressable onPress={() => console.log('Discover Destinations Card clicked.')} style={{ flex: 1 }}>
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
						justifyContent: 'space-between',
						alignItems: 'flex-end',
						flexDirection: 'row',
					}}>
					<View>
						<SmallText>DISCOVER</SmallText>
						<SecondaryText>Destinations</SecondaryText>
					</View>
				</LinearGradient>
			</Pressable>
		</ImageBackground>
	);
};

export default DiscoverDestinationsCard;
