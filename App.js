import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingScreen from './src/screens/LandingScreen';
import EnterNumberScreen from './src/screens/EnterNumberScreen';
import OtpVerificationScreen from './src/screens/OtpVerificationScreen';
import SinglePageAppication from './src/screens/SinglePageAppication';
import PassengerSelector from "./src/screens/PassengerSelector";
import ChooseDateScreen from "./src/screens/ChooseDateScreen"
import { AppProvider } from './src/context/AppContext'; // Import AppProvider
import BoatListScreen from './src/screens/BoatListScree';
import CustomHeader from './src/components/CustomHeader';
import BoatDetailsScreen from './src/components/BoatDetailsScreen';
import TicketScreen from './src/screens/TicketScreen';
import AddOns from './src/screens/AddOns';
import BillBreakDown from './src/screens/BillBreakdown';
import ItineraryOwnRide from './src/screens/ItineraryOwnRide';



const Stack = createStackNavigator();

export default function App() {
  return (
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Landing">
          <Stack.Screen name="Landing" component={LandingScreen} options={{ headerShown: false }} />
          <Stack.Screen name="EnterNumber" component={EnterNumberScreen} options={{ headerShown: false }} />
          <Stack.Screen name="OtpVerification" component={OtpVerificationScreen} options={{ headerShown: false }} />
          <Stack.Screen name="SinglePageAppication" component={SinglePageAppication} options={{ headerShown: false }} />
          <Stack.Screen
            name="PassengerSelector"
            component={PassengerSelector}
            options={{
              headerShown: true,
              title: 'Select Passengers', // Set the title of the header
              headerStyle: { backgroundColor: '#f8f8f8' }, // Optional: customize header background
              headerTintColor: '#333', // Optional: customize header text color
              headerTitleStyle: { fontWeight: 'bold' }, // Optional: customize header title style
            }}
          />
          <Stack.Screen
            name="ChooseDateScreen"
            component={ChooseDateScreen}
            options={{
              headerShown: true,
              title: 'Choose date', // Set the title of the header
              headerStyle: { backgroundColor: '#f8f8f8' }, // Optional: customize header background
              headerTintColor: '#333', // Optional: customize header text color
              headerTitleStyle: { fontWeight: 'bold' }, // Optional: customize header title style
            }}
          />
          <Stack.Screen
            name="BoatListScreen"
            component={BoatListScreen}
            options={{
              headerShown: true,
              header: () => (
                <CustomHeader />
              ),
            }}
          />
          <Stack.Screen
            name="BoatDetailsScreen"
            component={BoatDetailsScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="TicketScreen"
            component={TicketScreen}
            options={{
              headerShown: true,
              title: 'Passenger Information', // Set the title of the header
              headerStyle: { backgroundColor: '#f8f8f8' }, // Optional: customize header background
              headerTintColor: '#333', // Optional: customize header text color
              headerTitleStyle: { fontWeight: 'bold' }, // Optional: customize header title style
            }}
          />
          <Stack.Screen
            name="AddOns"
            component={AddOns}
            options={{
              headerShown: true,
              title: 'Add-Ons', // Set the title of the header
              headerStyle: { backgroundColor: '#f8f8f8' }, // Optional: customize header background
              headerTintColor: '#333', // Optional: customize header text color
              headerTitleStyle: { fontWeight: 'bold' }, // Optional: customize header title style
            }}
          />
          <Stack.Screen
            name="BillBreakdown"
            component={BillBreakDown}
            options={{
              headerShown: true,
              title: 'Bill Breakdown', // Set the title of the header
              headerStyle: { backgroundColor: '#f8f8f8' }, // Optional: customize header background
              headerTintColor: '#333', // Optional: customize header text color
              headerTitleStyle: { fontWeight: 'bold' }, // Optional: customize header title style
            }}
          />
          <Stack.Screen
            name="ItineraryOwnRide"
            component={ItineraryOwnRide}
            options={{
              headerShown: true,
              title: 'Itinerary', // Set the title of the header
              headerStyle: { backgroundColor: '#f8f8f8' }, // Optional: customize header background
              headerTintColor: '#333', // Optional: customize header text color
              headerTitleStyle: { fontWeight: 'bold' }, // Optional: customize header title style
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
}











