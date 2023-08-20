import { View, Text, Image, SafeAreaView, FlatList, ScrollView } from 'react-native';
import React from 'react';
import SecondaryText from '../components/SecondaryText';
import SmallText from '../components/SmallText';
import SecondaryButton from '../components/SecondaryButton';
import DestinationsCard from '../components/DestinationCard';
import { data, user } from './Home';

import { REACT_NATIVE_APP_API_URL } from "@env"

type Props = {};


const Profile = (props: Props) => {
	const [profileData, setProfileData] = React.useState<ProfileData>();

	React.useEffect(() => {
		fetch(`${REACT_NATIVE_APP_API_URL}/user/${user}`)
			.then(res => res.json())
			.then(async res => {
				let trending = await (await fetch(`${REACT_NATIVE_APP_API_URL}/destinations/trending`)).json()
				trending = trending.map(dest => {
					let image;
					try {
					  image = require(`../../assets/${dest.id}.png`);
					} catch (error) {
					  image = require('../../assets/discover.png');
					}
					return {
						destination: dest.name,
						planet: dest.planet.name,
						image,
						isAFavourite: false
					}
				})
				setProfileData({
					name: res.name,
					image: require('../../assets/avatar.jpg'),
					galacticId: res.galacticId,
					planet: res.planet.name,
					recommendedDestinations: data,
					trendingDestinations: trending
				});
			})
	}, []);

	return (
		<SafeAreaView style={{ backgroundColor: '#0F1423', flex: 1 }}>
			{profileData && (
				<ScrollView>
					<View style={{ alignItems: 'center', justifyContent: 'center', paddingVertical: 10 }}>
						<View
							style={{
								borderColor: '#F2994A',
								borderWidth: 5,
								width: 168,
								height: 168,
								borderRadius: 168,
								alignItems: 'center',
								justifyContent: 'center',
								borderStyle: 'dashed',
							}}>
							<Image source={profileData?.image} style={{ width: 150, height: 150, borderRadius: 150 }} />
						</View>

						<SecondaryText>{profileData.name}</SecondaryText>
						<View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center' }}>
							<SmallText>{profileData.galacticId}</SmallText>
							<SmallText style={{ color: 'rgba(255,255,255,0.5)', marginHorizontal: 12 }}>•</SmallText>
							<SmallText>{profileData.planet}</SmallText>
						</View>
					</View>

					<View>
						<SecondaryText style={{ paddingLeft: 20, marginTop: 50 }}>Trending</SecondaryText>
						<FlatList
							data={profileData.trendingDestinations}
							renderItem={(item) => (
								<DestinationsCard
									planet={item.item.planet}
									destination={item.item.destination}
									isAFavorite={item.item.isAFavorite}
									image={item.item.image}
								/>
							)}
							keyExtractor={(item) => item.destination}
							style={{ marginTop: 10 }}
							contentContainerStyle={{ paddingHorizontal: 10 }}
							horizontal
						/>
					</View>

					<View>
						<SecondaryText style={{ paddingLeft: 20, marginTop: 50 }}>Recommandations</SecondaryText>
						<FlatList
							data={profileData.recommendedDestinations}
							renderItem={(item) => (
								<DestinationsCard
									planet={item.item.planet}
									destination={item.item.destination}
									isAFavorite={item.item.isAFavorite}
									image={item.item.image}
								/>
							)}
							keyExtractor={(item) => item.destination}
							style={{ marginTop: 10 }}
							contentContainerStyle={{ paddingHorizontal: 10 }}
							horizontal
						/>
					</View>

					<View
						style={{
							position: 'relative',
							bottom: 0,
							// paddingVertical: 20,
							left: 0,
							right: 0,
							height: 100,
							justifyContent: 'center',
							alignItems: 'center',
							flexDirection: 'row',
						}}>
						<SecondaryButton onPress={() => navigation.navigate('ManualLogin')} title="Settings" />
						<Text style={{ color: 'rgba(255,255,255,0.5)', marginHorizontal: 12 }}>•</Text>
						<SecondaryButton onPress={() => navigation.navigate('BiometricRegister')} title="Logout" />
					</View>
				</ScrollView>
			)}
		</SafeAreaView>
	);
};

export default Profile;
