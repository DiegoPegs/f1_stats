import React from 'react';
import { SafeAreaView } from 'react-navigation'
import { Container, Header, Content, List, ListItem, Text } from 'native-base';


export default class Races extends React.Component {

  state = {
    races: [],
    loading: true

  }

  componentDidMount() {
    console.log('didmount')
    const season = this.props.navigation.getParam('season')
    this.getData(season)

  }

  getData(season) {
    console.log('getdata')
    fetch(`http://ergast.com/api/f1/${season}.json`)
      .then((response) => response.json())
      .then((data) => {
        let races = data.MRData.RaceTable.Races.map(it => `${it.raceName}`);
        this.setState({
          races,
          loading: false
        })
      })
    console.log(season)
  }

  static navigationOptions = () => {
    return {
      title: 'Races'
    }
  }

  renderList(race, i) {
    return (
      <ListItem key={`raceList-${i}`}>
        <Text key={`textList-${i}`}>race</Text>
      </ListItem>

    )
  }

  renderRaces() {
    const { races } = this.state
    let items = []

    return (
      <SafeAreaView>
        <Container>
          <Header />
          <Content>
            <List>
              {races.map(this.renderList)}
            </List>
          </Content>
        </Container>
      </SafeAreaView>)

    return items

  }

  render() {
    const { loading } = this.state;
    return loading ?
      <Text>Carregando...</Text> :
      this.renderRaces();


  }
}

