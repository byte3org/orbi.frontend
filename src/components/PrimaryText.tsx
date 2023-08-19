import React from 'react';
import { StyleProp, StyleSheet, Text, TextStyle } from 'react-native';

type Props = {
	style?: StyleProp<TextStyle>;
	// text: string;
	children: React.ReactNode;
};

function PrimaryText(props: Props) {
	const { style: customTextStyles, children } = props;

	const textStyle = StyleSheet.compose(
		{
			fontFamily: 'Poppins_600SemiBold',
			fontSize: 53,
			color: '#fff',
			lineHeight: 60,
		},
		customTextStyles
	);

	return <Text style={textStyle}>{children}</Text>;
}

export default PrimaryText;
