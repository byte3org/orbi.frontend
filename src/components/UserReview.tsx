import { Image, ImageSourcePropType, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import TertiaryText from './TertiaryText';
import SmallText from './SmallText';
import ParagraphText from './ParagraphText';
import Icon from './Icon';

type Props = {
	id: number;
	/** No of stars should be in the range 0-5 */
	noOfStars: number;
	userData: {
		name: string;
		image: ImageSourcePropType;
		planet: string;
		noOfReviews: number;
	};
	review: string;
};

const UserReview = (props: Props) => {
	const {
		noOfStars,
		review,
		userData: { image, name, noOfReviews, planet },
	} = props;

	const stars = React.useMemo(() => {
		const starComponents = [];

		for (let i = 0; i < 5; i++) {
			const isStarHighlighted = i < noOfStars;
			starComponents.push(
				<Icon
					name={isStarHighlighted ? 'star' : 'star-outline'}
					style={{
						fontSize: 24,
						color: isStarHighlighted ? '#F2994A' : 'hsla(0,0%,100%,0.5)',
					}}
				/>
			);
		}
		return starComponents;
	}, [noOfReviews]);

	return (
		<View style={styles.parent}>
			<View style={styles.userInfoContainer}>
				<View style={styles.userImageContainer}>
					<Image source={require('../../assets/avatar.jpg')} style={styles.userImage} />
				</View>

				<View>
					<TertiaryText>{name}</TertiaryText>
					<View style={styles.userOtherInfoContainer}>
						<SmallText>{planet}</SmallText>
						<SmallText style={{ marginHorizontal: 6 }}>•</SmallText>
						<SmallText>{noOfReviews} reviews</SmallText>
					</View>
				</View>
			</View>
			<SmallText style={styles.review}>{review}</SmallText>

			<View style={styles.starRow}>{stars}</View>
		</View>
	);
};

export default UserReview;

const styles = StyleSheet.create({
	parent: {
		flex: 1,
		padding: 10,
		marginTop: 10,
	},
	userInfoContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},

	userOtherInfoContainer: {
		flexDirection: 'row',
	},

	userImage: {
		width: 40,
		height: 40,
		borderRadius: 40,
	},
	userImageContainer: {
		borderColor: '#F2994A',
		borderWidth: 2,
		width: 50,
		height: 50,
		borderRadius: 50,
		alignItems: 'center',
		justifyContent: 'center',
		marginRight: 10,
	},
	review: {
		marginTop: 10,
		color: '#fff',
	},
	starRow: {
		flexDirection: 'row',
	},
});
