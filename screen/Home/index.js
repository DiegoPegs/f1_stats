import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'native-base';
import { SafeAreaView } from 'react-navigation';
import style from './style';

export default class Home extends React.Component {

  constructor(props) {
    super(props);
    this.navigate = this.navigate.bind(this)
  }

  static navigationOptions = () => {
    return {
      title: 'Home'
    }
  }

  navigate(page) {
    this.props.navigation.navigate('Options', { page })
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text
          style={style.text}
        >Escolha qual informação deseja?</Text>
        <Button
          style={style.button}
          block
          onPress={() => this.navigate('Races')}>
          <Text>Corridas</Text>
        </Button>
        <Button
          style={style.button}
          block
          onPress={() => this.navigate('Pilots')}>
          <Text>Pilotos</Text>
        </Button>
        <Button
          style={style.button}
          block
          onPress={() => this.navigate('Constructors')}>
          <Text>Construtores</Text>
        </Button>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',

  },
});
