import { StyleSheet, SafeAreaView, Alert, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";
import { useFonts } from "expo-font";

import ManualLogin from "./src/screens/ManualLogin";
import BiometricLogin from "./src/screens/BiometricLogin";
import BiometricRegister from "./src/screens/BiometricRegister";
import ManualRegister from "./src/screens/ManualRegister";
import RegisterEmailVerification from "./src/screens/RegisterEmailVerification";
import RegisterOtherUserInfo from "./src/screens/RegisterOtherUserInfo";
import ResetPasswordEmailVerification from "./src/screens/ResetPasswordEmailVerification";
import ResetPassword from "./src/screens/ResetPassword";
import SecondaryButton from "./src/components/SecondaryButton";
import Header from "./src/components/Header";
import Home from "./src/screens/Home";
import Profile from "./src/screens/Profile";
import UpcomingFlightInfo from "./src/screens/UpcomingFlightInfo";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Destinations from "./src/screens/Destinations";
import Destination from "./src/screens/Destination";
import Booking from "./src/screens/Booking";
import Transportation from "./src/screens/Transportation";
import TransportationModeDetails from "./src/screens/TransportationModeDetails";
import Confirmation from "./src/screens/Confirmation";
import Invoice from "./src/screens/Invoice";
import Discover from "./src/screens/Discover";
import BiometricPaymentConfirmation from "./src/screens/BiometricPaymentConfirmation";
import ManualPaymentConfirmation from "./src/screens/ManualPaymentConfirmation";
import { useCallback, useEffect, useState } from "react";
import {
  authorize,
  refresh,
  revoke,
  prefetchConfiguration,
} from "react-native-app-auth";

export type AuthScreenList = {
  ManualLogin: undefined;
  ManualRegister: undefined;
  ResetPassword: undefined;
  ResetPasswordEmailVerification: undefined;
  RegisterOtherUserInfo: undefined;
  RegisterEmailVerification: undefined;
  BiometricRegister: undefined;
  BiometricLogin: undefined;

  TransportationModelDetails: undefined;
  Transportation: undefined;
  Booking: undefined;
  Destination: undefined;
  Destinations: undefined;
  Profile: undefined;
  Home: undefined;
};

export type HomeScreenList = {
  ManualLogin: undefined;
  ManualRegister: undefined;
  ResetPassword: undefined;
  ResetPasswordEmailVerification: undefined;
  RegisterOtherUserInfo: undefined;
  RegisterEmailVerification: undefined;
  BiometricRegister: undefined;
  BiometricLogin: undefined;
};

const Auth = createNativeStackNavigator<AuthScreenList>();
// const Home = createNativeStackNavigator<HomeScreenList>();

const config = {
  issuer: "http://localhost:9998/",
  clientId: "web",
  clientSecret: "name",
  redirectUrl: "com.your.app.name:/oauthredirect",
  scopes: ["openid", "profile", "offline_access"],
};

const defaultAuthState = {
  hasLoggedInOnce: false,
  accessToken: "",
  accessTokenExpirationDate: "",
  refreshToken: "",
};

export default function App() {
  const [authState, setAuthState] = useState(defaultAuthState);
  useEffect(() => {
    prefetchConfiguration({
      warmAndPrefetchChrome: true,
      connectionTimeoutSeconds: 5,
      ...config,
    });
  }, []);

  const handleAuthorize = useCallback(async () => {
    try {
      const newAuthState = await authorize({
        ...config,
        connectionTimeoutSeconds: 5,
      });

      setAuthState({
        hasLoggedInOnce: true,
        ...newAuthState,
      });
    } catch (error) {
      Alert.alert("Failed to log in");
    }
  }, [authState]);

  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  /* I think this is not the right way to do it
		But I'll do it like this for now,
		experts please do it the right way if this is wrong :)
	*/
  return (
    <SafeAreaProvider>
      {/* <Header /> */}
      {/* <TransportationModeDetails /> */}
      {/* <Transportation /> */}
      {/* <Booking /> */}
      {/* <Destination /> */}
      {/* <Destinations /> */}
      {/* <Confirmation /> */}
      {/* <Discover /> */}
      {/* <BiometricPaymentConfirmation /> */}
      {/* <ManualPaymentConfirmation /> */}
      {/* <Invoice
				cart={[
					{ item: 'ER6-Transport', quantity: 2, unitPrice: 1200 },
					{ item: 'Refreshing Drinks', quantity: 4, unitPrice: 50 },
				]}
				transactionId="FAJIO48YTF09XGAY7"
				passengers={['Luke SkyWalker', 'Leila SkyWalker', 'Darth Wader', 'Master Yoda']}
				image={require('./assets/curima.png')}
			/> */}
      {/* <UpcomingFlightInfo /> */}
      {/* <Profile /> */}
      {/* 
      <Home />
      <Button
        onPress={() => handleAuthorize()}
        color="#DA2536"
        title="Authorize IdentityServer"
      />
      */}

      <NavigationContainer>
        <Auth.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerTintColor: "#fff",
            header: Header,
            contentStyle: { backgroundColor: "#0F1423" },
          }}
        >
          <Auth.Screen name="ManualLogin" component={ManualLogin} />
          <Auth.Screen name="ManualRegister" component={ManualRegister} />
          <Auth.Screen name="ResetPassword" component={ResetPassword} />
          <Auth.Screen
            name="ResetPasswordEmailVerification"
            component={ResetPasswordEmailVerification}
          />
          <Auth.Screen
            name="RegisterOtherUserInfo"
            component={RegisterOtherUserInfo}
          />
          <Auth.Screen
            name="RegisterEmailVerification"
            component={RegisterEmailVerification}
          />
          <Auth.Screen name="BiometricRegister" component={BiometricRegister} />
          <Auth.Screen name="BiometricLogin" component={BiometricLogin} />

          <Auth.Screen
            name="TransportationModelDetails"
            component={TransportationModeDetails}
          />
          <Auth.Screen name="Transportation" component={Transportation} />
          <Auth.Screen name="Booking" component={Booking} />
          <Auth.Screen name="Destination" component={Destination} />
          <Auth.Screen name="Destinations" component={Destinations} />
          <Auth.Screen name="Profile" component={Profile} />
          <Auth.Screen name="Home" component={Home} />
          {/* <Confirmation /> */}
          {/* <Discover /> */}
          {/* <BiometricPaymentConfirmation /> */}
          {/* <ManualPaymentConfirmation /> */}
          {/* <Invoice
				cart={[
					{ item: 'ER6-Transport', quantity: 2, unitPrice: 1200 },
					{ item: 'Refreshing Drinks', quantity: 4, unitPrice: 50 },
				]}
				transactionId="FAJIO48YTF09XGAY7"
				passengers={['Luke SkyWalker', 'Leila SkyWalker', 'Darth Wader', 'Master Yoda']}
				image={require('./assets/curima.png')}
			/> */}
          {/* <UpcomingFlightInfo /> */}
        </Auth.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F1423",
  },
});
