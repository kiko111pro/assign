import React from 'react';
import {Text} from 'react-native';
import Today from './src/screens/Home.js';
import Medication from './src/screens/Medications.js';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import {colors} from './src/utils/colors.js';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';

const STACK = createStackNavigator();

function TabNavigator() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Today') {
            iconName = 'today';
            color = focused ? colors.primary : '#ccc';
          } else if (route.name === 'Medication') {
            iconName = 'medical-services';
            color = focused ? colors.primary : '#ccc';
          }

          // You can return any component that you like here!
          return <MIcon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: '#bdbdbd',

        tabBarStyle: [
          {
            display: 'flex',
          },
          null,
        ],
      })}>
      <Tab.Screen
        name="Today"
        component={Today}
        options={{header: () => null}}
      />
      <Tab.Screen
        name="Medication"
        component={Medication}
        options={{header: () => null}}
      />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <STACK.Navigator screenOptions={{header: () => null}}>
        <STACK.Screen name="tab" component={TabNavigator} />
        {/* <STACK.Screen name="tab" component={Today} /> */}
      </STACK.Navigator>
    </NavigationContainer>
  );
}

export default App;
