import { ImageSourcePropType, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import SecondaryText from '../components/SecondaryText';
import ParagraphText from '../components/ParagraphText';
import InfoCard from '../components/InfoCard';
import PrimaryButton from '../components/PrimaryButton';
import SmallText from '../components/SmallText';
import Passenger from '../components/Passenger';
import TertiaryText from '../components/TertiaryText';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { BookingScreenList } from '../../App';

type Props = NativeStackScreenProps<BookingScreenList, 'Confirmation'>;

const confirmationInfo = {
	destination: 'Grime Forest - Mars',
	pickup: 'Colombo Airport - Sri Lanka',
	departure: '1261 February 29 - 9:00AM',
	arrival: '2161 February 29 - 9:01AM',
	transportation: 'ER6-Transport',
	cart: [
		{ item: 'ER6-Transport', quantity: 2, unitPrice: 1200 },
		{ item: 'Refreshing Drinks', quantity: 4, unitPrice: 50 },
	],
	mode: 'Private',
	passengers: ['Luke SkyWalker', 'Leila SkyWalker', 'Darth Wader', 'Master Yoda'],
	image: require('../../assets/curima.png'),
};

const Confirmation = (props: Props) => {
	const [confirmationData, setConfirmationData] = React.useState<ConfirmationData>();

	React.useEffect(() => {
		setConfirmationData(confirmationInfo);
	}, []);

	const passengerComponents = React.useMemo(() => {
		if (confirmationData) confirmationData.passengers.map((name) => <Passenger name={name} key={name} />);
		return [];
	}, []);

	const { components: cartItems, total: totalPrice } = React.useMemo(() => {
		let total = 0;
		const components =
			confirmationData?.cart.map((cartItem) => {
				const { item, quantity, unitPrice } = cartItem;
				const itemTotalPrice = unitPrice * quantity;
				total += itemTotalPrice;

				return (
					<View style={styles.tableRow} key={item}>
						<SmallText style={styles.cellLeft}>{item}</SmallText>
						<SmallText style={styles.cellMiddle}>{quantity}</SmallText>
						<SmallText style={styles.cellRight}>{itemTotalPrice} Gs</SmallText>
					</View>
				);
			}) || [];

		return { total, components };
	}, [confirmationData?.cart]);

	return (
		<View style={{ backgroundColor: '#0F1423', flex: 1 }}>
			{confirmationData && (
				<ScrollView style={{ flex: 1, paddingHorizontal: 10 }}>
					{/* <LinearGradient
					colors={['rgba(0,0,0,0.75)', 'rgba(0,0,0,0.4)', 'transparent']}
					start={{ x: 0, y: 0.5 }}
					locations={[0.25, 0.5, 1]}
					end={{ x: 1, y: 0.5 }}
					style={styles.imageContainer}>
					<Image source={image} style={{ width: '100%', height: '100%' }} />
				</LinearGradient> */}

					<View style={styles.infoContainer}>
						<InfoCard title="Destination" value={confirmationData.destination} />
						<InfoCard title="Pickup" value={confirmationData.pickup} />
					</View>

					<View style={styles.infoContainer}>
						<InfoCard title="Departure" value={confirmationData.departure} />
						<InfoCard title="Arrival" value={confirmationData.arrival} />
					</View>

					<View style={styles.infoContainer}>
						<InfoCard style={styles.halfWidthInfoCard} title="Transportation" value={confirmationData.transportation} />
						<InfoCard style={styles.halfWidthInfoCard} title="Mode" value={confirmationData.mode} />
						{confirmationData.transportClass && (
							<InfoCard style={styles.halfWidthInfoCard} title="Class" value={confirmationData.transportClass} />
						)}
					</View>

					<View style={styles.infoContainer}>
						<SmallText style={styles.smallText}>Passengers</SmallText>
						<View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>{passengerComponents}</View>
					</View>

					<View style={{ marginTop: 40 }}>
						<SmallText style={styles.smallText}>Payment Summary</SmallText>
						<View style={styles.container}>
							<View style={styles.tableHeader}>
								<SmallText style={styles.headerCellLeft}>Item</SmallText>
								<SmallText style={styles.headerCellMiddle}>Qty</SmallText>
								<SmallText style={styles.headerCellRight}>Price</SmallText>
							</View>
							{cartItems}
						</View>
					</View>

					<View style={styles.total}>
						<SmallText>TOTAL</SmallText>
						<TertiaryText style={{ lineHeight: 40 }}>{totalPrice} Gs</TertiaryText>
					</View>

					<SmallText>Please confirm above information before proceeding to payment.</SmallText>
					<PrimaryButton
						style={styles.primaryButton}
						title="Proceed To Payment"
						onPress={(setIsPending) => {
							console.log(`Proceed to payment`);
							setIsPending(true);
							setTimeout(() => {
								setIsPending(false);
								props.navigation.navigate('Invoice');
							}, 2500);
						}}
					/>
				</ScrollView>
			)}
		</View>
	);
};

export default Confirmation;

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

	destinationDescription: {
		marginTop: 20,
		marginBottom: 20,
	},

	halfWidthInfoCard: {
		width: '50%',
	},

	infoContainer: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		marginBottom: 20,
	},

	destinationInfoCard: {
		width: '50%',
		marginBottom: 30,
	},

	smallText: {
		textTransform: 'uppercase',
	},

	total: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		padding: 15,
		borderColor: 'hsla(0,0%,100%,0.25)',
		borderWidth: 2,
		borderRadius: 15,
		marginBottom: 10,
	},
	primaryButton: {
		marginTop: 40,
	},
	container: {
		flex: 1,
		padding: 10,
	},
	tableHeader: {
		flexDirection: 'row',
		// color: '#f2f2f2',
		padding: 10,
		borderTopWidth: 1,
		borderColor: 'hsla(0,0%,100%,0.25)',
	},
	headerCellLeft: {
		flex: 5,
	},
	headerCellMiddle: {
		flex: 2,
		textAlign: 'right',
	},
	headerCellRight: {
		flex: 3,
		textAlign: 'right',
	},
	tableRow: {
		flexDirection: 'row',
		padding: 10,
	},
	cellLeft: {
		flex: 5,
	},
	cellMiddle: {
		flex: 2,
		textAlign: 'right',
	},
	cellRight: {
		flex: 3,
		textAlign: 'right',
	},
});
