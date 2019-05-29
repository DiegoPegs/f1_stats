import React from 'react';
import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation'

import HomeScreen from './screen/Home'
import RaceScreen from './screen/Races'
import OptinosScreen from './screen/Options'

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Races: {
      screen: RaceScreen
    },
    Options: {
      screen: OptinosScreen
    }
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#333'
      },
      headerTintColor: '#fff',
      headerTintColor: {
        fontWeigth: 'bold'
      }
    }
  }
);

export default createAppContainer(AppNavigator)