import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "../subpages/Home";

// Components for the tabs
function ProfileScreen() {
  return (
    <View style={styles.screen}>
      <Text>Profile Screen</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={styles.screen}>
      <Text>Settings Screen</Text>
    </View>
  );
}

// Create the Bottom Tab Navigator
const Tab = createBottomTabNavigator();

export default function SinglePageApplication() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: '#fff' },
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: '#8e8e8e',
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
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
