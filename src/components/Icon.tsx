import { StyleProp, StyleSheet, Text, TextStyle, View } from 'react-native';
import React from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

type Props = { name: string; style?: StyleProp<TextStyle> };

const Icon = (props: Props) => {
	const { name, style } = props;
	const styles = StyleSheet.compose(
		{
			fontSize: 28,
			color: 'hsla(0,0%,100%,1)',
			paddingVertical: 10,
		},
		style
	);

	return <MaterialIcon name={name} style={styles} />;
};

export default Icon;
