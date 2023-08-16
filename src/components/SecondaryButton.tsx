import React from 'react';
import { Animated, Pressable, StyleSheet, Text, View } from 'react-native';
import { ButtonProps } from './PrimaryButton';

function SecondaryButton(props: ButtonProps) {
	const { title, onPress, style: customStyles, textStyle: customTextStyles } = props;
	const [isPressed, setIsPressed] = React.useState(false);
	// Create an animated opacity value
	const buttonBrightness = React.useRef(new Animated.Value(1)).current; // Initial value for opacity: 0

	// Update the opacity value with the animation
	React.useEffect(() => {
		Animated.timing(buttonBrightness, {
			toValue: isPressed ? 0.75 : 1,
			duration: 200, // Transition duration in milliseconds
			useNativeDriver: false, // Set to false for opacity animation
		}).start();
	}, [isPressed]);

	const pressableStyle = StyleSheet.compose(
		{
			// opacity: buttonBrightness,
		},
		customStyles
	);

	const textStyle = StyleSheet.compose(
		{
			fontFamily: 'Poppins_600SemiBold',
			color: 'hsla(0, 0%, 100%, 0.5)',
			fontSize: 18,
		},
		customTextStyles
	);

	return (
		<Animated.View
			style={{
				opacity: buttonBrightness,
			}}>
			<Pressable
				onPress={onPress}
				style={pressableStyle}
				onPressIn={() => setIsPressed(true)}
				onPressOut={() => setIsPressed(false)}>
				<Text style={textStyle}>{title}</Text>
			</Pressable>
		</Animated.View>
	);
}

export default SecondaryButton;
