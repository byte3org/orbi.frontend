import React from 'react';
import { StyleSheet, TextInput, TextInputIOSProps } from 'react-native';

type Props = {
	placeholderText?: string;
	textContentType?: TextInputIOSProps['textContentType'];
	onSubmit?: () => void;
};

export default React.forwardRef(function TextBox(props: Props, ref: React.ForwardedRef<TextInput>) {
	const { placeholderText = 'Placeholder', textContentType = 'username', onSubmit } = props;

	const [text, setText] = React.useState('');

	return (
		<TextInput
			style={style.input}
			value={text}
			onChangeText={setText}
			placeholder={placeholderText}
			textContentType={textContentType}
			secureTextEntry={textContentType.includes('password')}
			placeholderTextColor="hsla(0, 0%, 100%, 0.5)"
			onSubmitEditing={onSubmit}
			ref={ref}
		/>
	);
});

const style = StyleSheet.create({
	input: {
		color: '#fff',
		borderColor: 'hsla(0, 0%, 100%, 0.5)',
		width: '100%',
		marginVertical: 12,
		height: 60,
		// paddingVertical: 30,
		borderRadius: 50,
		paddingHorizontal: 16,
		fontFamily: 'Poppins_600SemiBold',
		fontSize: 18,
		borderWidth: 1,
	},
});
