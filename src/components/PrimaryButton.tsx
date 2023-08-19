import React from 'react';
import { ActivityIndicator, Animated, Platform, Pressable, StyleProp, StyleSheet, Text, ViewStyle } from 'react-native';

export type ButtonProps = {
	title: string;
	style?: StyleProp<ViewStyle>;
	textStyle?: StyleProp<ViewStyle>;
	onPress: (setIsPending: React.Dispatch<React.SetStateAction<boolean>>) => void;
};

const PrimaryButton = (props: ButtonProps) => {
	const { title, onPress, style: customStyles, textStyle: customTextStyles } = props;
	const [isPressed, setIsPressed] = React.useState(false);
	const [isPending, setIsPending] = React.useState(false);

	const buttonBrightness = React.useRef(new Animated.Value(1)).current; // Initial value for opacity: 0

	React.useEffect(() => {
		Animated.timing(buttonBrightness, {
			toValue: isPressed ? 0.6 : 1,
			duration: 200,
			useNativeDriver: true,
		}).start();
	}, [isPressed]);

	const pressableStyle = StyleSheet.compose(
		{
			color: '#fff',
			backgroundColor: 'hsla(28, 87%, 62%, 1)',
			minWidth: 200,
			justifyContent: 'center',
			alignItems: 'center',
			paddingHorizontal: 30,
			paddingVertical: 16,
			borderRadius: 50,
		},
		customStyles
	);

	const textStyle = StyleSheet.compose(
		{
			fontFamily: 'Poppins_500Medium',
			fontSize: 24,
			opacity: isPending ? 0 : 1,
		},
		customTextStyles
	);

	return (
		<Animated.View
			style={{
				justifyContent: 'center', // Center vertically
				alignItems: 'center',
				opacity: buttonBrightness,
			}}>
			<Pressable
				onPress={() => onPress(setIsPending)}
				style={pressableStyle}
				onPressIn={() => setIsPressed(true)}
				onPressOut={() => setTimeout(() => setIsPressed(false), 100)}>
				<Text style={textStyle}>{title}</Text>
				{isPending && (
					<ActivityIndicator
						color={'#0F1423'}
						style={{ position: 'absolute' }}
						size={Platform.OS === 'android' ? 'large' : 'small'}
					/>
				)}
			</Pressable>
		</Animated.View>
	);
};

export default PrimaryButton;
