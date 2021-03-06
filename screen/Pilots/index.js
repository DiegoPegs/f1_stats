import React from 'react';
import { SafeAreaView } from 'react-navigation';
import { Text, Card, CardItem } from 'native-base';

import * as request from '../../resource/request';

import { ScrollView } from 'react-native-gesture-handler';
import Pilot from '../../components/Pilots';

import style from './style'


export default class Pilots extends React.Component {

    state = {
        season: 0,
        pilots: [],
        loading: true

    }
    constructor(props) {
        super(props);
        this.detail = this.detail.bind(this)
    }

    static navigationOptions = () => {
        return {
            title: 'Pilotos'
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
        request.get(`${season}/drivers.json`)
            .then((data) => {

                let pilots = data.MRData.DriverTable.Drivers.map(it => {
                    return {
                        name: `${it.givenName} ${it.familyName}`,
                        id: it.driverId
                    }
                });
                this.setState({
                    pilots,
                    loading: false
                })
            })

    }



    detail(pilot) {
        this.props.navigation.navigate('Details', { pilot, page: 'Pilot', season: this.state.season })
    }

    renderPilots() {
        return this.state.pilots.map(it => <Pilot key={it.id} pilot={it} handleClick={this.detail}></Pilot>)
    }

    render() {

        const { loading } = this.state;
        return loading ?
            <Text>Carregando...</Text> :
            <SafeAreaView style={style.content}>
                <ScrollView>
                    <Card>
                        <CardItem header bordered>
                            <Text>Lista de Pilotos</Text>
                        </CardItem>

                        {this.renderPilots()}

                        <CardItem footer bordered>
                            <Text>F1 Pilots</Text>
                        </CardItem>
                    </Card>
                </ScrollView>
            </SafeAreaView>
    }
}

