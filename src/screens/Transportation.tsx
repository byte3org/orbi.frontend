import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import SmallText from '../components/SmallText';
import TransportationModeCard from '../components/TransportationModeCard';

type Props = {};

const modes: TransportationMode[] = [
	{
		name: 'ER6-Teleport',
		cost: '1200',
		image: require('../../assets/er6_teleport.png'),
	},
	{
		name: 'V2 SpacePod',
		cost: '900',
		image: require('../../assets/v2_spacepod.png'),
	},
	{
		name: 'Shuttle 125B',
		cost: '500',
		image: require('../../assets/shuttle_125b.png'),
	},
	{
		name: 'ER6-Teleport',
		cost: '1200',
		image: require('../../assets/er6_teleport.png'),
	},
	{
		name: 'V2 SpacePod',
		cost: '900',
		image: require('../../assets/v2_spacepod.png'),
	},
	{
		name: 'Shuttle 125B',
		cost: '500',
		image: require('../../assets/shuttle_125b.png'),
	},
];

const Transportation = (props: Props) => {
	const [transportationModes, setTransportationModes] = React.useState<TransportationMode[]>([]);

	React.useEffect(() => {
		setTransportationModes(modes);
	}, []);

	return (
		<View style={styles.parent}>
			<SafeAreaView>
				<SmallText>Select a transportation mode that suites your budget and needs.</SmallText>

				<FlatList
					data={transportationModes}
					renderItem={(item) => <TransportationModeCard {...item.item} />}
					contentContainerStyle={{ paddingVertical: 20 }}
				/>
			</SafeAreaView>
		</View>
	);
};

export default Transportation;

const styles = StyleSheet.create({ parent: { backgroundColor: '#0F1423', flex: 1 } });
