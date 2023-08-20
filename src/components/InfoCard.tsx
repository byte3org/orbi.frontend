import { StyleProp, StyleSheet, TextStyle, View, ViewStyle } from 'react-native';
import React from 'react';
import SmallText from './SmallText';
import TertiaryText from './TertiaryText';

type Props = {
	title: string;
	value: string | number;
	style?: StyleProp<ViewStyle>;
	titleStyle?: StyleProp<TextStyle>;
	valueStyle?: StyleProp<TextStyle>;
};

const InfoCard = (props: Props) => {
	const { title, value, style, titleStyle, valueStyle } = props;

	const destinationInfoCardStyle = StyleSheet.compose(styles.destinationInfoCard, style);
	const titleStyleData = StyleSheet.compose(styles.title, titleStyle);
	const valueStyleData = StyleSheet.compose(styles.value, valueStyle);

	return (
		<View style={destinationInfoCardStyle}>
			<SmallText style={titleStyleData}>{title}</SmallText>
			<TertiaryText>{value}</TertiaryText>
		</View>
	);
};

export default InfoCard;

const styles = StyleSheet.create({
	destinationInfoCard: {
		marginBottom: 30,
	},
	title: { textTransform: 'uppercase' },
	value: {},
});
