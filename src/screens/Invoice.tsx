import { ImageSourcePropType, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import SecondaryText from '../components/SecondaryText';
import ParagraphText from '../components/ParagraphText';
import InfoCard from '../components/InfoCard';
import PrimaryButton from '../components/PrimaryButton';
import SmallText from '../components/SmallText';
import Passenger from '../components/Passenger';
import TertiaryText from '../components/TertiaryText';
import PrimaryText from '../components/PrimaryText';
import SecondaryButton from '../components/SecondaryButton';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { BookingScreenList } from '../../App';

type Props = NativeStackScreenProps<BookingScreenList, 'Invoice'>;

const invoiceData = {
	cart: [
		{ item: 'ER6-Transport', quantity: 2, unitPrice: 1200 },
		{ item: 'Refreshing Drinks', quantity: 4, unitPrice: 50 },
	],
	transactionId: 'FAJIO48YTF09XGAY7',
	passengers: ['Luke SkyWalker', 'Leila SkyWalker', 'Darth Wader', 'Master Yoda'],
	image: require('../../assets/curima.png'),
};

const Invoice = (props: Props) => {
	const [data, setData] = React.useState(invoiceData);
	const { passengers, transactionId, cart = [] } = data;

	const passengerComponents = React.useMemo(() => passengers.map((name) => <Passenger name={name} key={name} />), []);

	const { components: cartItems, total: totalPrice } = React.useMemo(() => {
		let total = 0;
		const components = cart.map((cartItem) => {
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
		});

		return { total, components };
	}, [cart]);

	return (
		<View style={{ backgroundColor: '#0F1423', flex: 1 }}>
			<ScrollView style={{ flex: 1, paddingHorizontal: 10 }}>
				{/* <LinearGradient
					colors={['rgba(0,0,0,0.75)', 'rgba(0,0,0,0.4)', 'transparent']}
					start={{ x: 0, y: 0.5 }}
					locations={[0.25, 0.5, 1]}
					end={{ x: 1, y: 0.5 }}
					style={styles.imageContainer}>
					<Image source={image} style={{ width: '100%', height: '100%' }} />
				</LinearGradient> */}

				<Text style={styles.logo}>Orbi</Text>

				<PrimaryText style={styles.primaryText}>Payment Completed</PrimaryText>

				<SmallText style={{ marginBottom: 20 }}>
					You have successfully reserved a position in your selected options. We hope that you enjoy this journey very
					much.
				</SmallText>

				<View style={styles.infoContainer}>
					<SmallText style={styles.smallText}>Passengers</SmallText>
					<View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>{passengerComponents}</View>
				</View>

				<View style={{ marginTop: 20 }}>
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

				<SmallText style={{ marginBottom: 10 }}>Transaction ID : {transactionId}</SmallText>

				<SmallText>
					All the information related to this transaction will be processed and shared with your Galactic ID Account.
				</SmallText>
				<SmallText>Necessary details about this transaction will be shared with other passengers.</SmallText>

				<PrimaryButton
					style={styles.primaryButton}
					title="Go to Home"
					onPress={(setIsPending) => {
						console.log(`Proceed to payment`);
						setIsPending(true);
						setTimeout(() => setIsPending(false), 2500);
					}}
				/>

				<View style={{ flex: 1, alignItems: 'center', flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
					<SecondaryButton onPress={() => props.navigation.navigate('Home')} title="Contact Support" />
				</View>
			</ScrollView>
		</View>
	);
};

export default Invoice;

const styles = StyleSheet.create({
	logo: { fontFamily: 'Poppins_600SemiBold', color: '#fff', fontSize: 36 },
	primaryText: {
		marginTop: 80,
	},
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
