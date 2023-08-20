import {
	FlatList,
	Image,
	ImageSourcePropType,
	Keyboard,
	Pressable,
	ScrollView,
	StyleSheet,
	Text,
	TouchableWithoutFeedback,
	View,
} from 'react-native';
import React from 'react';
import SearchBox from '../components/SearchBox';
import { SafeAreaView } from 'react-native-safe-area-context';
import SecondaryText from '../components/SecondaryText';
import ParagraphText from '../components/ParagraphText';
import SmallText from '../components/SmallText';
import DestinationsCard from '../components/DestinationCard';
import TertiaryText from '../components/TertiaryText';
import { data } from './Home';
import PrimaryButton from '../components/PrimaryButton';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { BookingScreenList } from '../../App';

type Props = NativeStackScreenProps<BookingScreenList, 'Discover'>;

type DiscoverData = {
	planet: {
		name: string;
		description: string;
		noOfDestinations: number;
		positiveRating: number;
		trendingDestinations: Destination[];
		image: ImageSourcePropType;
	};
	altPlanet: {
		name: string;
		image: ImageSourcePropType;
	};
};

const mars = {
	planet: {
		name: 'Mars',
		description:
			'Mars, with its Valles Marineris canyons, Olympus Mons volcano, and ancient riverbeds, offers a unique experience for explorers. A celestial frontier filled with intrigue and cosmic beauty.',
		noOfDestinations: 47,
		positiveRating: 98,
		trendingDestinations: data,
		image: require('../../assets/mars.png'),
	},
	altPlanet: {
		name: 'Saturn',
		image: require('../../assets/saturn.png'),
	},
};

const saturn = {
	planet: {
		name: 'Saturn',
		description:
			'Saturn, with its Valles Marineris canyons, Olympus Mons volcano, and ancient riverbeds, offers a unique experience for explorers. A celestial frontier filled with intrigue and cosmic beauty.',
		noOfDestinations: 25,
		positiveRating: 93,
		trendingDestinations: [...data].reverse(),
		image: require('../../assets/saturn.png'),
	},
	altPlanet: {
		name: 'Mars',
		image: require('../../assets/mars.png'),
	},
};

const Discover = (props: Props) => {
	const [search, setSearch] = React.useState('');
	const [discoverData, setDiscoverData] = React.useState<DiscoverData>();

	React.useEffect(() => {
		setDiscoverData(mars);
	}, []);

	return (
		<View style={styles.parent}>
			{/* <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}> */}
			<SearchBox value={search} onTextChange={setSearch} placeholder="Search Here" />

			{discoverData && (
				<ScrollView>
					<View style={styles.planetsContainer}>
						<Image source={discoverData.planet.image} style={styles.image} />
						<Pressable
							style={styles.planetAlt}
							onPress={() => {
								console.log(`Go to ${discoverData.altPlanet.name}`);
								// setDiscoverData((prevData) => (prevData.planet.name === 'Mars' ? saturn : mars));
							}}>
							<Image source={discoverData.altPlanet.image} style={styles.planetAltImage} />
							<SmallText>{discoverData.altPlanet.name}</SmallText>
						</Pressable>
					</View>

					<SecondaryText style={styles.planetName}>{discoverData.planet.name}</SecondaryText>
					<ParagraphText style={styles.planetDescription}>{discoverData.planet.description}</ParagraphText>
					<View>
						<SmallText>
							<SmallText style={styles.highlightedSmallText}>{discoverData.planet.noOfDestinations}</SmallText>{' '}
							Destinations
						</SmallText>
						<SmallText>
							<SmallText style={styles.highlightedSmallText}>{discoverData.planet.positiveRating}%</SmallText> Positive
							Rating
						</SmallText>

						<PrimaryButton
							title="Check Destinations"
							style={{ marginTop: 40 }}
							onPress={() => props.navigation.navigate('Destinations')}
						/>
					</View>
					{discoverData.planet.trendingDestinations && (
						<View>
							<TertiaryText style={styles.trendingText}>Trending</TertiaryText>
							<FlatList
								data={discoverData.planet.trendingDestinations}
								renderItem={(item) => (
									<DestinationsCard
										planet={item.item.planet}
										destination={item.item.destination}
										isAFavorite={item.item.isAFavorite}
										image={item.item.image}
									/>
								)}
								keyExtractor={(item) => item.planet}
								style={{ marginTop: 10 }}
								contentContainerStyle={{ paddingHorizontal: 10 }}
								horizontal
							/>
						</View>
					)}
				</ScrollView>
			)}
			{/* </TouchableWithoutFeedback> */}
		</View>
	);
};

export default Discover;

const styles = StyleSheet.create({
	parent: { backgroundColor: '#0F1423', flex: 1 },
	image: {
		marginTop: 40,
		width: 200,
		height: 200,
	},
	planetsContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	planetAlt: {
		alignItems: 'center',
	},
	planetAltImage: {
		marginTop: 40,
		width: 80,
		height: 80,
		opacity: 0.5,
	},
	planetDescription: {
		marginBottom: 20,
	},
	planetName: {
		color: 'hsla(28, 87%, 62%, 1)',
	},
	highlightedSmallText: {
		color: 'hsla(28, 87%, 62%, 1)',
	},
	trendingText: { marginTop: 40 },
});
