import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ParagraphText from './ParagraphText';
import Icon from './Icon';

type Props = { name: string; onRemove?: (name: string) => void };

const Passenger = (props: Props) => {
	const { name, onRemove } = props;
	return (
		<View style={styles.passengerContainer}>
			<ParagraphText style={styles.passengerText}>{name}</ParagraphText>
			{onRemove && (
				<Pressable onPress={() => onRemove(name)} style={styles.passengerTextButton}>
					<Icon name="close" style={styles.removePassengerButtonIcon} />
				</Pressable>
			)}
		</View>
	);
};

export default Passenger;

const styles = StyleSheet.create({
	passengerContainer: {
		backgroundColor: 'hsla(0, 0%, 100%, 0.5)',
		borderRadius: 100,
		paddingHorizontal: 14,
		marginRight: 10,
		marginTop: 10,
		flexDirection: 'row',
		alignItems: 'center',
	},
	passengerText: {
		color: 'hsla(225, 40%, 10%, 1)',
	},
	passengerTextButton: {
		// padding: 4,
		// paddingHorizontal: 10,
		paddingLeft: 8,
	},
	removePassengerButtonIcon: {
		fontSize: 18,
		color: 'hsla(225, 40%, 10%, 1)',
	},
});
