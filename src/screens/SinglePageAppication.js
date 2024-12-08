import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from "../subpages/Home"
import BoardingPass from './BoardingPass';
import Booking from '../subpages/Booking';
import { AppContext } from '../context/AppContext';



function SettingsScreen() {
  return (
    <View style={styles.screen}>
      <Text>Settings Screen</Text>
    </View>
  );
}

// Create the Stack Navigator for the Home tab
const HomeStack = createStackNavigator();

function HomeStackNavigator() {
  return (
    <HomeStack.Navigator>
      {/* Hide header for the Home screen */}
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      {/* Show header for the HomeDetails screen */}
      <HomeStack.Screen
        name="BoardingPass"
        component={BoardingPass}
        options={{
          headerShown: true,
          title: 'Boarding Pass',
          headerStyle: { backgroundColor: '#b5d3f5', padding:10 }, // Optional: customize header background
          headerTintColor: 'white', // Optional: customize header text color
          headerTitleStyle: { fontWeight: 'bold', color:"white" },
        }}
      />
    </HomeStack.Navigator>
  );
}

// Create the Bottom Tab Navigator
const Tab = createBottomTabNavigator();

export default function SinglePageApplication() { 
  const {setViewBoardingPass} = useContext(AppContext)
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: { backgroundColor: '#fff' },
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: '#8e8e8e',
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Booking') {
            iconName = focused ? 'person' : 'person-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          }

          // Return the icon component
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeStackNavigator} />
      <Tab.Screen name="Booking" component={Booking} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
