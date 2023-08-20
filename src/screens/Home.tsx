import React from 'react';
import { SafeAreaView, View, Text, ScrollView, FlatList, StyleSheet } from 'react-native';
import UpcomingFlightCard from '../components/UpcomingFlightCard';
import DiscoverDestinationsCard from '../components/DiscoverDestinationsCard';
import DestinationsCard from '../components/DestinationCard';
import SecondaryText from '../components/SecondaryText';
import SmallText from '../components/SmallText';

type Props = {};

export const data: Destination[] = [
	{
		planet: 'Mars',
		destination: 'Curima',
		isAFavorite: true,
		image: require('../../assets/curima.png'),
	},
	{
		planet: 'Mars',
		destination: 'Triagra',
		isAFavorite: false,
		image: require('../../assets/triagra.png'),
	},
	{
		planet: 'Pluto',
		destination: 'Aurora',
		isAFavorite: true,
		image: require('../../assets/aurora.png'),
	},
	{
		planet: 'AR-39',
		destination: 'Robot Forest',
		isAFavorite: true,
		image: require('../../assets/robot_forest.png'),
	},
	{
		planet: 'Mars',
		destination: 'Grime Forest',
		isAFavorite: true,
		image: require('../../assets/grime_forest.png'),
	},
	{
		planet: 'Venus',
		destination: 'Tholi',
		isAFavorite: true,
		image: require('../../assets/discover.png'),
	},
	{
		planet: 'Jupiter',
		destination: 'Europe',
		isAFavorite: true,
		image: require('../../assets/discover.png'),
	},
	{
		planet: 'Earth',
		destination: 'Spain',
		isAFavorite: true,
		image: require('../../assets/spain.png'),
	},
	{
		planet: 'AVC-CR1',
		destination: 'Planto',
		isAFavorite: true,
		image: require('../../assets/discover.png'),
	},
	{
		planet: 'Mars',
		destination: 'Olympus Mons',
		isAFavorite: true,
		image: require('../../assets/discover.png'),
	},
	{
		planet: 'Mars',
		destination: '80085 Valley',
		isAFavorite: true,
		image: require('../../assets/80085_valley.png'),
	},
	{
		planet: 'Pluto',
		destination: 'Land of the Pirates',
		isAFavorite: true,
		image: require('../../assets/land_of_the_pirates.png'),
	},
];

type UserData = { name: string };

const flightData: UpcomingFlightData = {
	destination: 'Curima',
	planet: 'Mars',
	timeRemaining: '5 Days',
	image: require('../../assets/curima.png'),
};

function Home({}: Props) {
	const [userData, setUserData] = React.useState<UserData>();
	const [upcomingFlightData, setUpcomingFlightData] = React.useState<UpcomingFlightData>();
	const [trendingDestinations, setTrendingDestinations] = React.useState<Destination[]>([]);
	const [recommendedDestinations, setRecommendedDestinations] = React.useState<Destination[]>([]);

	React.useEffect(() => {
		setUserData({ name: 'Leila SkyWalker' });
		setUpcomingFlightData(flightData);
		setRecommendedDestinations(data);
		setTrendingDestinations([...data].reverse());
	}, []);

	return (
		<SafeAreaView style={styles.parent}>
			<ScrollView>
				{userData && (
					<View style={styles.userDataContainer}>
						<SmallText>Welcome,</SmallText>
						<SecondaryText>{userData?.name}</SecondaryText>
					</View>
				)}

				<View>
					{upcomingFlightData && <UpcomingFlightCard {...upcomingFlightData} />}
					<DiscoverDestinationsCard />
				</View>

				{trendingDestinations.length > 0 && (
					<View>
						<SecondaryText style={styles.trendingText}>Trending</SecondaryText>
						<FlatList
							data={trendingDestinations}
							renderItem={(item) => (
								<DestinationsCard
									planet={item.item.planet}
									destination={item.item.destination}
									isAFavorite={item.item.isAFavorite}
									image={item.item.image}
								/>
							)}
							keyExtractor={(item) => item.destination}
							style={styles.flatList}
							contentContainerStyle={styles.flatListInner}
							horizontal
						/>
					</View>
				)}

				{recommendedDestinations.length > 0 && (
					<View>
						<SecondaryText style={styles.trendingText}>Recommandations</SecondaryText>
						<FlatList
							data={recommendedDestinations}
							renderItem={(item) => (
								<DestinationsCard
									planet={item.item.planet}
									destination={item.item.destination}
									isAFavorite={item.item.isAFavorite}
									image={item.item.image}
								/>
							)}
							keyExtractor={(item) => item.destination}
							style={styles.flatList}
							contentContainerStyle={styles.flatListInner}
							horizontal
						/>
					</View>
				)}
			</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	parent: { backgroundColor: '#0F1423', flex: 1 },
	userDataContainer: { paddingHorizontal: 10, marginBottom: 40, marginTop: 20 },
	trendingText: { paddingLeft: 20, marginTop: 50 },
	flatList: { marginTop: 10 },
	flatListInner: { paddingHorizontal: 10 },
});

export default Home;
