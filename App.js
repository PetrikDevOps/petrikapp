import * as React from 'react';
/*import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

import NewsScreen from './pages/NewsScreen';
import HelyettesitesScreen from './pages/HelyettesitesScreen';
import BusScreen from './pages/BusScreen';
import ProfileScreen from './pages/ProfileScreen';
import FullArticle from './pages/FullArticle';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function NewsStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="News" component={NewsScreen} />
      <Stack.Screen name="FullArticle" component={FullArticle} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarStyle: [
            {
              backgroundColor: '#252525',
              display: 'flex',
            },
            null,
          ],
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Hírek') {
              iconName = focused ? 'newspaper' : 'newspaper-outline';
            } else if (route.name === 'Helyettesítés') {
              iconName = focused ? 'person' : 'person-outline';
            } else if (route.name === 'Buszok') {
              iconName = focused ? 'bus' : 'bus-outline';
            } else if (route.name === 'Profil') {
              iconName = focused ? 'person-circle' : 'person-circle-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#2AB4AB',
          tabBarInactiveTintColor: '#D9D9D9',
          headerShown: false, // Remove the top bar from all screens
        })}
        tabBarOptions={{
          style: { backgroundColor: '#252525' },
        }}
      >
        <Tab.Screen name="Hírek" component={NewsStack} />
        <Tab.Screen name="Helyettesítés" component={HelyettesitesScreen} />
        <Tab.Screen name="Buszok" component={BusScreen} />
        <Tab.Screen name="Profil" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}*/

export default function App() {
  return (
    <View>
      <Text>Test</Text>
    </View>
  );
}