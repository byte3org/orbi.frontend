import { ImageBackground, ImageSourcePropType, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import SmallText from '../components/SmallText';
import SecondaryText from '../components/SecondaryText';
import { LinearGradient } from 'expo-linear-gradient';
import TertiaryText from '../components/TertiaryText';
import ParagraphText from '../components/ParagraphText';
import InfoCard from '../components/InfoCard';
import Passenger from '../components/Passenger';

type Props = {};

const info = {
	timeRemaining: '5 Days 3 Hours 24 Minutes',
	destination: 'Grime Forest - Mars',
	pickup: 'Colombo Airport - Sri Lanka',
	departure: '1261 February 29 - 9:00AM',
	arrival: '2161 February 29 - 9:01AM',
	transportation: 'ER6-Transport',
	passengers: ['Luke SkyWalker', 'Leila SkyWalker', 'Darth Wader', 'Master Yoda'],
	image: require('../../assets/curima.png'),
};

const UpcomingFlightInfo = (props: Props) => {
	const [flightInfo, setFlightInfo] = React.useState<FlightInfo>();
	const safeViewInsets = useSafeAreaInsets();

	React.useEffect(() => {
		setFlightInfo(info);
	}, []);

	const passengerComponents = React.useMemo(() => {
		if (flightInfo?.passengers) return flightInfo.passengers.map((name) => <Passenger name={name} />);
		return [];
	}, [flightInfo?.passengers]);

	return (
		<View style={styles.flexed}>
			{flightInfo && (
				<ImageBackground source={flightInfo.image} style={styles.flexed}>
					<LinearGradient
						colors={['hsla(225,40%,10%,0.25)', 'hsla(225,40%,10%,1)']}
						style={{ flex: 1, paddingHorizontal: 20 }}>
						<ScrollView style={{ paddingTop: safeViewInsets.top, paddingBottom: safeViewInsets.bottom + 20 }}>
							<View style={styles.upcomingFlightView}>
								<SmallText style={styles.smallText}>Upcoming Flight In</SmallText>
								<SecondaryText>{flightInfo.timeRemaining}</SecondaryText>
							</View>
							<InfoCard title="Destination" value={flightInfo.destination} />
							<InfoCard title="Pickup" value={flightInfo.destination} />
							<InfoCard title="Departure" value={flightInfo.departure} />
							<InfoCard title="Arrival" value={flightInfo.arrival} />
							<InfoCard title="Transportation" value={flightInfo.transportation} />
							<View style={styles.view}>
								<SmallText style={styles.smallText}>Passengers</SmallText>
								<View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>{passengerComponents}</View>
							</View>
							<SmallText>You will be notified about upcoming flights when you are close to departure dates.</SmallText>
						</ScrollView>
					</LinearGradient>
				</ImageBackground>
			)}
		</View>
	);
};

export default UpcomingFlightInfo;

const styles = StyleSheet.create({
	flexed: { flex: 1 },
	view: {
		marginBottom: 30,
	},
	upcomingFlightView: {
		marginBottom: 40,
	},
	smallText: {
		textTransform: 'uppercase',
	},
	passengerContainer: {
		backgroundColor: 'hsla(0, 0%, 100%, 0.5)',
		borderRadius: 100,
		paddingHorizontal: 10,
		marginRight: 10,
		marginTop: 10,
	},
	passengerText: {
		color: 'hsla(225, 40%, 10%, 1)',
	},
});
