import React from 'react';
import { SafeAreaView } from 'react-navigation';
import { Text, Card, CardItem } from 'native-base';

import * as request from '../../resource/request';

import Race from '../../components/Races';
import { ScrollView } from 'react-native-gesture-handler';

import style from './style'


export default class Races extends React.Component {

  state = {
    season: 0,
    races: [],
    loading: true

  }
  constructor(props) {
    super(props);
    this.detail = this.detail.bind(this)
  }

  static navigationOptions = () => {
    return {
      title: 'Races'
    }
  }

  componentDidMount() {
    const season = this.props.navigation.getParam('season')

    this.setState({
      season: season
    })
    this.getData(season)

  }

  getData(season) {
    request.get(`${season}.json`)
      .then((data) => {

        // let races = data.MRData.RaceTable.Races.map(it => `${it.raceName}`);
        let races = data.MRData.RaceTable.Races.map(it => {
          return {
            name: it.raceName,
            round: it.round
          }
        });
        this.setState({
          races,
          loading: false
        })
      })
  }

  detail(round) {

    this.props.navigation.navigate('Details', { round, page: 'Race', season: this.state.season })
  }

  renderRaces() {
    const { races } = this.state

    return races.map(it => <Race key={it.round} race={it} handleClick={this.detail}></Race>)
  }

  render() {

    const { loading } = this.state;
    return loading ?
      <Text>Carregando...</Text> :
      <SafeAreaView style={style.content}>
        <ScrollView>
          <Card>
            <CardItem header bordered>
              <Text>Lista de Circuitos</Text>
            </CardItem>

            {this.renderRaces()}

            <CardItem footer bordered>
              <Text>F1 races</Text>
            </CardItem>

          </Card>
        </ScrollView>
      </SafeAreaView>
  }
}

