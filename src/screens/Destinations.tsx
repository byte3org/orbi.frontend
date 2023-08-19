import React from 'react';
import { FlatList, Keyboard, SafeAreaView, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { data } from './Home';

import SearchBox from '../components/SearchBox';
import DestinationFullCard from '../components/DestinationFullCard';

type Props = {};

const Destinations = (props: Props) => {
	const [destinations, setDestinations] = React.useState<Destination[]>([]);
	const [filterDestinationName, setFilterDestinationName] = React.useState('');
	const safeAreaInsets = useSafeAreaInsets();

	React.useEffect(() => {
		setDestinations(data);
	}, []);

	return (
		<View style={{ backgroundColor: 'hsla(225,40%,10%,1)', flex: 1 }}>
			<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} style={{ flex: 1 }}>
				<View
					style={{
						flex: 1,
						paddingHorizontal: 10,
						paddingTop: safeAreaInsets.top,
					}}>
					<Text>Destinations</Text>
					<SearchBox
						value={filterDestinationName}
						onTextChange={setFilterDestinationName}
						placeholder="Search for Destinations"
					/>

					<FlatList
						data={destinations}
						renderItem={(item) => (
							<DestinationFullCard
								planet={item.item.planet}
								destination={item.item.destination}
								isAFavorite={item.item.isAFavorite}
								image={item.item.image}
							/>
						)}
						keyExtractor={(item) => item.planet}
						style={{ marginTop: 10 }}
						contentContainerStyle={{ paddingVertical: safeAreaInsets.bottom }}
					/>
				</View>
			</TouchableWithoutFeedback>
		</View>
	);
};

export default Destinations;

const styles = StyleSheet.create({});
