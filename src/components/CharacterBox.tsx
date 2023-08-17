import React from 'react';
import { Keyboard, StyleSheet, TextInput, TextInputIOSProps } from 'react-native';

type Props = {
	placeholderText?: string;
	textContentType?: TextInputIOSProps['textContentType'];
	onSubmit?: () => void;
	onTextChange?: (text: string) => void;
	prevCharacterBoxRef?: TextInput | null;
	nextCharacterBoxRef?: TextInput | null;
};

const dismissKeyboard = () => Keyboard.dismiss();

export default React.forwardRef(function CharacterBox(props: Props, ref: React.ForwardedRef<TextInput>) {
	const {
		placeholderText = '_',
		textContentType = 'username',
		onSubmit,
		onTextChange,
		prevCharacterBoxRef,
		nextCharacterBoxRef,
	} = props;

	const [text, setText] = React.useState('');

	return (
		<TextInput
			style={style.input}
			value={text}
			onChangeText={(text) => {
				const isTextEmpty = text !== '';

				if (isTextEmpty) {
					if (nextCharacterBoxRef) nextCharacterBoxRef.focus();
					else dismissKeyboard();
				}

				if (onTextChange) onTextChange(text);

				setText(text);
			}}
			onKeyPress={(e) => {
				const backspaceClicked = e.nativeEvent.key === 'Backspace';
				const isInputEmpty = text.length === 0;

				if (backspaceClicked && isInputEmpty) {
					if (prevCharacterBoxRef) prevCharacterBoxRef.focus();
					else dismissKeyboard();
				}
			}}
			placeholder={placeholderText}
			textContentType={textContentType}
			secureTextEntry={textContentType.includes('password')}
			placeholderTextColor="hsla(0, 0%, 100%, 0.5)"
			onSubmitEditing={onSubmit}
			maxLength={1}
			ref={ref}
		/>
	);
});

const style = StyleSheet.create({
	input: {
		color: '#fff',
		borderColor: 'hsla(0, 0%, 100%, 0.25)',
		width: 60,
		height: 70,
		marginVertical: 12,
		borderRadius: 10,
		paddingHorizontal: 16,
		fontFamily: 'Poppins_600SemiBold',
		fontSize: 32,
		textAlign: 'center',
		borderWidth: 3,
	},
});
