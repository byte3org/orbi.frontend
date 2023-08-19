import React from 'react';
import { StyleProp, StyleSheet, Text, TextStyle } from 'react-native';

type Props = {
	style?: StyleProp<TextStyle>;
	// text: string;
	children: React.ReactNode;
};

function TertiaryText(props: Props) {
	const { style: customTextStyles, children } = props;

	const textStyle = StyleSheet.compose(
		{
			fontFamily: 'Poppins_500Medium',
			fontSize: 24,
			color: '#fff',
			lineHeight: 26,
		},
		customTextStyles
	);

	return <Text style={textStyle}>{children}</Text>;
}

export default TertiaryText;
