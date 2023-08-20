import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import React from 'react';
import DatePicker from 'react-native-modern-datepicker';
import Checkbox from 'expo-checkbox';

import SearchBox from '../components/SearchBox';
import SmallText from '../components/SmallText';
import ParagraphText from '../components/ParagraphText';
import Icon from '../components/Icon';
import Passenger from '../components/Passenger';
import TertiaryText from '../components/TertiaryText';
import PrimaryButton from '../components/PrimaryButton';

type Props = {};

const Booking = (props: Props) => {
	const navigator = useNavigation()
	const route = useRoute();
	let dest = route.params.destination

	const [searchingGalacticID, setSearchingGalacticID] = React.useState('');
	const [passengerGalacticIDs, setPassengerGalacticIDs] = React.useState(['Luke SkyWalker', 'Leila SkyWalker']);

	const [departureDate, setDepartureDate] = React.useState<string | undefined>(undefined);

	const [isScheduleFlexible, setIsScheduleFlexible] = React.useState(false);

	const [pickupLocation, setPickupLocation] = React.useState('');

	const passengers = React.useMemo(
		() =>
			passengerGalacticIDs.map((id) => (
				<Passenger key={id} name={id} onRemove={(name) => console.log(`passenger ${name} removed.`)} />
			)),
		[passengerGalacticIDs]
	);

	return (
		<SafeAreaView style={styles.parent}>
			<ScrollView style={styles.parent}>
				<View style={styles.view}>
					<SmallText style={styles.smallText}>PASSENGERS</SmallText>
					<SearchBox
						value={searchingGalacticID}
						onTextChange={setSearchingGalacticID}
						placeholder="Search for Galactic IDs"
					/>
					<View style={styles.passengersContainer}>{passengers}</View>
				</View>
				<View style={styles.view}>
					<SmallText style={styles.smallText}>DEPARTURE</SmallText>
					<TertiaryText>{departureDate ? departureDate : 'No Departure Date Selected'}</TertiaryText>
					<DatePicker
						options={{
							backgroundColor: 'hsla(225, 40%, 7%,1)',
							textHeaderColor: '#F2994A',
							textDefaultColor: '#F6E7C1',
							selectedTextColor: '#fff',
							mainColor: '#F4722B',
							textSecondaryColor: '#D6C7A1',
							// borderColor: 'hsla(0, 0%, 100%, 0.25)',
						}}
						mode="calendar"
						selected={departureDate}
						onSelectedChange={(date) => setDepartureDate(date)}
						minuteInterval={30}
						style={{ borderRadius: 20, marginTop: 10 }}
					/>
				</View>

				<View style={styles.checkboxContainer}>
					<Checkbox
						style={styles.checkbox}
						value={isScheduleFlexible}
						onValueChange={setIsScheduleFlexible}
						color={isScheduleFlexible ? '#F4722B' : undefined}
					/>
					<Pressable onPress={() => setIsScheduleFlexible((prevState) => !prevState)}>
						<SmallText>My schedule is flexible</SmallText>
					</Pressable>
				</View>

				<View style={styles.view}>
					<SmallText style={styles.smallText}>PICKUP LOCATION</SmallText>
					<SearchBox value={pickupLocation} onTextChange={setPickupLocation} placeholder="Search for Pickup Location" />
				</View>

				<PrimaryButton
					style={styles.primaryButton}
					onPress={() => navigator.navigate('Transportation', { destination: dest })}
					title="Next"
				/>
			</ScrollView>
		</SafeAreaView>
	);
};

export default Booking;

const styles = StyleSheet.create({
	parent: { backgroundColor: '#0F1423', flex: 1, paddingHorizontal: 10 },
	smallText: {
		marginBottom: 10,
	},
	view: { marginTop: 20 },
	checkboxContainer: {
		marginTop: 20,
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 20,
	},
	checkbox: {
		marginRight: 10,
		color: '#0F1423',
	},
	passengersContainer: {
		flexDirection: 'row',
		flexWrap: 'wrap',
	},
	primaryButton: {
		marginTop: 26,
	},
});
