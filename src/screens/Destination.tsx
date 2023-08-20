import { FlatList, Image, ImageSourcePropType, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import SecondaryText from '../components/SecondaryText';
import SmallText from '../components/SmallText';
import ParagraphText from '../components/ParagraphText';
import PrimaryButton from '../components/PrimaryButton';
import UserReview from '../components/UserReview';
import TertiaryText from '../components/TertiaryText';
import InfoCard from '../components/InfoCard';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { BookingScreenList } from '../../App';

type Props = NativeStackScreenProps<BookingScreenList, 'Destination'>;

const reviews: Review[] = [
	{
		id: 1,
		noOfStars: 4,
		userData: {
			name: 'Susan B Anthony',
			image: require('../../assets/avatar.jpg'),
			planet: 'Pluto',
			noOfReviews: 2,
		},
		review: `I left my kids and family in the forest. Now im living my best life. I don’t know what happened to them. But if you are a working mom this is the best place to go`,
	},
	{
		id: 2,
		noOfStars: 4,
		userData: {
			name: 'Susan B Anthony',
			image: require('../../assets/avatar.jpg'),
			planet: 'Pluto',
			noOfReviews: 2,
		},
		review: `I left my kids and family in the forest. Now im living my best life. I don’t know what happened to them. But if you are a working mom this is the best place to go`,
	},
	{
		id: 3,
		noOfStars: 4,
		userData: {
			name: 'Susan B Anthony',
			image: require('../../assets/avatar.jpg'),
			planet: 'Pluto',
			noOfReviews: 2,
		},
		review: `I left my kids and family in the forest. Now im living my best life. I don’t know what happened to them. But if you are a working mom this is the best place to go`,
	},
	{
		id: 4,
		noOfStars: 4,
		userData: {
			name: 'Susan B Anthony',
			image: require('../../assets/avatar.jpg'),
			planet: 'Pluto',
			noOfReviews: 2,
		},
		review: `I left my kids and family in the forest. Now im living my best life. I don’t know what happened to them. But if you are a working mom this is the best place to go`,
	},
];

const Destination = (props: Props) => {
	const [destinationData, setDestinationData] = React.useState<DestinationData>();
	const route = useRoute();
	const navigator = useNavigation();
	const data = route.params;

	React.useEffect(() => {
		// fetch(`${REACT_NATIVE_APP_API_URL}/destinations/${dest}`)
		// 	.then((res) => res.json())
		// 	.then((res) => {
		// 		let image = require('../../assets/discover.png');
		// 		console.log(image);
		// 		setDestinationData({
		// 			name: res.name,
		// 			positiveRating: 98,
		// 			destinationDescription: res.description,
		// 			reviews, // TODO: call the endpoint to get the reviews
		// 			otherDestinationInfo: {
		// 				oxygenLevel: res.oxygenLevel,
		// 				population: res.population,
		// 				temperature: res.temperature,
		// 			},
		// 			image,
		// 		});
		// 	});
		setDestinationData({
			name: 'Grime Forest',
			positiveRating: 98,
			destinationDescription:
				'Located in the very first human settlement on Mars, with its Valles Marineris canyons, Olympus Mons volcano, . A celestial frontier filled with intrigue and cosmic beauty.',
			otherDestinationInfo: { oxygenLevel: 2, population: 505909, temperature: 5 },
			reviews,
			image: require('../../assets/grime_forest.png'),
		});
	}, []);

	const userReviews = React.useMemo(() => {
		if (destinationData?.reviews)
			return destinationData.reviews.map((review) => <UserReview key={review.id} {...review} />);
		return [];
	}, []);

	return (
		<View style={{ backgroundColor: '#0F1423', flex: 1 }}>
			{destinationData && (
				<ScrollView style={{ flex: 1, paddingHorizontal: 10 }}>
					{/* <LinearGradient
					colors={['rgba(0,0,0,0.75)', 'rgba(0,0,0,0.4)', 'transparent']}
					start={{ x: 0, y: 0.5 }}
					locations={[0.25, 0.5, 1]}
					end={{ x: 1, y: 0.5 }}
					style={styles.imageContainer}>
					<Image source={require('../../assets/grime_forest.png')} style={{ width: '100%', height: '100%' }} />
				</LinearGradient> */}

					<SecondaryText style={styles.destinationName}>{destinationData.name}</SecondaryText>
					<SmallText>
						<SmallText style={styles.highlightedSmallText}>{destinationData.positiveRating}%</SmallText> Postive Ratings
					</SmallText>

					<ParagraphText style={styles.destinationDescription}>{destinationData.destinationDescription}</ParagraphText>

					<View style={styles.destinationInfoContainer}>
						<InfoCard
							style={styles.infoCard}
							title="Temperature"
							value={`${destinationData.otherDestinationInfo.temperature} Celsius`}
						/>
						<InfoCard
							style={styles.infoCard}
							title="Oxygen Level"
							value={`${destinationData.otherDestinationInfo.oxygenLevel}%`}
						/>
						<InfoCard
							style={styles.infoCard}
							title="Population"
							value={destinationData.otherDestinationInfo.population}
						/>
					</View>

					<PrimaryButton title="Book Now" onPress={() => props.navigation.navigate('Booking')} />
					<SmallText style={styles.userReview}>Scroll to view user reviews</SmallText>

					<View style={styles.reviewsContainer}>{userReviews}</View>
				</ScrollView>
			)}
		</View>
	);
};

export default Destination;

const styles = StyleSheet.create({
	destinationName: {
		marginTop: 300,
	},
	imageContainer: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		width: '100%',
		height: '75%',
	},

	highlightedSmallText: { color: 'hsla(28, 87%, 62%, 1)' },
	destinationDescription: {
		marginTop: 20,
	},

	destinationInfoContainer: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		marginVertical: 20,
	},
	infoCard: {
		width: '50%',
	},
	destinationInfoCard: {
		width: '50%',
		marginBottom: 10,
	},
	reviewsContainer: {
		paddingVertical: 20,
	},
	userReview: {
		marginTop: 10,
		textAlign: 'center',
	},
});
