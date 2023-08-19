import { Keyboard, StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import Icon from './Icon';

type Props = { value: string; placeholder?: string; onTextChange: (text: string) => void };

const SearchBox = (props: Props) => {
	const { value, placeholder, onTextChange } = props;
	const [text, setText] = React.useState(value);

	return (
		<View style={styles.view}>
			<Icon name="search" style={styles.searchIcon} />
			<TextInput
				style={styles.input}
				placeholder={placeholder}
				returnKeyLabel="Search"
				returnKeyType="search"
				value={text}
				onChangeText={(value) => {
					setText(value);
					onTextChange(value);
				}}
			/>
		</View>
	);
};

export default SearchBox;

const styles = StyleSheet.create({
	searchIcon: {
		color: 'hsla(0,0%,100%,0.5)',
		paddingHorizontal: 10,
	},
	view: {
		borderColor: 'hsla(0,0%,100%,0.5)',
		borderWidth: 2,
		flexDirection: 'row',
		borderRadius: 50,
		paddingHorizontal: 10,
	},
	input: {
		color: '#fff',
		// paddingVertical: 30,
		fontFamily: 'Poppins_600SemiBold',
		fontSize: 18,
		lineHeight: 27,
		flexGrow: 1,
	},
});
