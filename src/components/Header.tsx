import { SafeAreaView, View, Image, Text, StyleSheet, Pressable } from 'react-native';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import SecondaryText from './SecondaryText';

export default function Header(props: NativeStackHeaderProps) {
	const { navigation } = props;

	const screenName = navigation.getId();
	const canGoBack = navigation.canGoBack();
	const isLogoVisible = true;

	return (
		<SafeAreaView
			style={{
				// flex: 1,
				backgroundColor: '#0F1423',
			}}>
			<View
				style={{
					justifyContent: 'space-between',
					alignItems: 'center',
					// paddingHorizontal: 20,
					paddingVertical: 10,
					flexDirection: 'row',
				}}>
				<View style={{ flexDirection: 'row', alignItems: 'center' }}>
					{canGoBack && (
						<Pressable style={{ padding: 10 }} onPress={() => navigation.goBack()}>
							<Image
								source={require('../../assets/arrow-back.png')}
								style={{ width: 20, height: 20, borderRadius: 10 }}
							/>
						</Pressable>
					)}
					{screenName && <SecondaryText>{screenName}</SecondaryText>}
					{isLogoVisible && (
						<Text
							style={{
								fontFamily: 'Poppins_600SemiBold',
								color: '#fff',
								fontSize: 36,
								paddingLeft: screenName ? 0 : 20,
							}}>
							Orbi
						</Text>
					)}
				</View>

				{/* <Image
					source={require('../../assets/avatar.jpg')}
					style={{ width: 40, height: 40, borderRadius: 40, marginRight: 20 }}
				/> */}
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	logo: { fontFamily: 'Poppins_600SemiBold', color: '#fff', fontSize: 36, paddingLeft: 20 },
});
