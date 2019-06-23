import React from 'react';
import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation'

import HomeScreen from './screen/Home'
import RaceScreen from './screen/Races'
import OptinosScreen from './screen/Options'
import DetailScreen from './screen/Details'
import PilotScreen from './screen/Pilots'
import ConstructorScreen from './screen/Constructors'

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Races: {
      screen: RaceScreen
    },
    Pilots: {
      screen: PilotScreen
    },
    Constructors: {
      screen: ConstructorScreen
    },
    Options: {
      screen: OptinosScreen
    },
    Details: {
      screen: DetailScreen
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