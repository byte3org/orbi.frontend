import React from 'react';
import { StyleProp, StyleSheet, Text, TextStyle } from 'react-native';

type Props = {
	style?: StyleProp<TextStyle>;
	// text: string;
	children: string;
};

function ParagraphText(props: Props) {
	const { style: customTextStyles, children } = props;

	const textStyle = StyleSheet.compose(
		{
			fontFamily: 'Poppins_400Regular',
			fontSize: 18,
			color: '#fff',
			lineHeight: 27,
		},
		customTextStyles
	);

	return <Text style={textStyle}>{children}</Text>;
}

export default ParagraphText;
