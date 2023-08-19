import React from 'react';
import { StyleProp, StyleSheet, Text, TextStyle } from 'react-native';

type Props = {
	style?: StyleProp<TextStyle>;
	// text: string;
	children: React.ReactNode;
};

function SmallText(props: Props) {
	const { style: customTextStyles, children } = props;

	const textStyle = StyleSheet.compose(
		{
			fontFamily: 'Poppins_400Regular',
			fontSize: 16,
			color: 'hsla(0,0%,100%,0.5)',
			lineHeight: 24,
		},
		customTextStyles
	);

	return <Text style={textStyle}>{children}</Text>;
}

export default SmallText;
