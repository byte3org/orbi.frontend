import { Image, ImageSourcePropType, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import PrimaryButton from '../components/PrimaryButton';
import SmallText from '../components/SmallText';
import TertiaryText from '../components/TertiaryText';
import ParagraphText from '../components/ParagraphText';
import SecondaryText from '../components/SecondaryText';
import { LinearGradient } from 'expo-linear-gradient';
import InfoCard from '../components/InfoCard';

type Props = {};

const data = {
	name: 'ER6-Teleport',
	arrival: 'Immediate',
	departure: 'Anytime',
	cost: '1200',
	image: require('../../assets/er6_teleport.png'),
	description:
		'Built using latest ER6 space folding technology, this mobile device allows travelers to reach their destination within an instance',
	mode: 'Private',
};

const TransportationModeDetails = (props: Props) => {
	const [details, setDetails] = React.useState<TransportationModeData>();

	React.useEffect(() => {
		setDetails(data);
	}, []);

	return (
		<View style={{ backgroundColor: '#0F1423', flex: 1 }}>
			{details && (
				<ScrollView style={{ flex: 1, paddingHorizontal: 10 }}>
					{/* <LinearGradient
					colors={['rgba(0,0,0,0.75)', 'rgba(0,0,0,0.4)', 'transparent']}
					start={{ x: 0, y: 0.5 }}
					locations={[0.25, 0.5, 1]}
					end={{ x: 1, y: 0.5 }}
					style={styles.imageContainer}>
					<Image source={image} style={{ width: '100%', height: '100%' }} />
				</LinearGradient> */}

					<SecondaryText style={styles.destinationName}>{details.name}</SecondaryText>

					<ParagraphText style={styles.destinationDescription}>{details.description}</ParagraphText>

					<View style={styles.destinationInfoContainer}>
						<InfoCard style={styles.infoCard} title="Cost" value={`${details.cost} Gs`} />
						<InfoCard style={styles.infoCard} title="Mode" value={details.mode} />
						<InfoCard style={styles.infoCard} title="Departure" value={details.departure} />
						<InfoCard style={styles.infoCard} title="Arrival" value={details.arrival} />
					</View>

					<PrimaryButton title="Continue" onPress={() => console.log(`book ${name}`)} />
				</ScrollView>
			)}
		</View>
	);
};

export default TransportationModeDetails;

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

	infoCard: {
		width: '50%',
	},

	destinationInfoContainer: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		marginBottom: 20,
	},

	destinationInfoCard: {
		width: '50%',
		marginBottom: 30,
	},

	userReview: {
		marginTop: 10,
		textAlign: 'center',
	},
});
