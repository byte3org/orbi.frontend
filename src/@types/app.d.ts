type Destination = {
	planet: string;
	destination: string;
	isAFavorite: boolean;
	image: ImageSourcePropType;
};

type Review = {
	id: number;
	noOfStars: number;
	userData: {
		name: string;
		image: ImageSourcePropType;
		planet: string;
		noOfReviews: number;
	};
	review: string;
};

type DestinationData = {
	name: string;
	positiveRating: number;
	destinationDescription: string;
	otherDestinationInfo: {
		temperature: number;
		oxygenLevel: number;
		population: number;
	};
	image: ImageSourcePropType;
	reviews: Review[];
};

type TransportationMode = { name: string; cost: string; image: ImageSourcePropType };

type TransportationModeData = {
	name: string;
	description: string;
	cost: string;
	mode: string;
	departure: string;
	arrival: string;
	image: ImageSourcePropType;
};

type ConfirmationData = {
	destination: string;
	pickup: string;
	mode: string;
	departure: string;
	arrival: string;
	transportation: string;
	passengers: string[];
	image: ImageSourcePropType;
	transportClass?: string;
	cart: {
		item: string;
		quantity: number;
		unitPrice: number;
	}[];
};

type FlightInfo = {
	timeRemaining: string;
	destination: string;
	pickup: string;
	departure: string;
	arrival: string;
	transportation: string;
	passengers: string[];
	image: ImageSourcePropType;
};

type ProfileData = {
	name: string;
	image: ImageSourcePropType;
	galacticId: string;
	planet: string;
	trendingDestinations: Destination[];
	recommendedDestinations: Destination[];
};

type UpcomingFlightData = {
	timeRemaining: string;
	planet: string;
	destination: string;
	image: ImageSourcePropType;
};
