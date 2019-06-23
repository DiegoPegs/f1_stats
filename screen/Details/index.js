import React from 'react'
import { Text, Card } from 'native-base';
import RaceDetail from '../../components/RaceDetail'
import { SafeAreaView, ScrollView } from 'react-navigation';

import * as request from '../../resource/request'
import PilotDetail from '../../components/PilotDetail';
import ConstructorDetail from '../../components/ConstructorDetail';

import style from './style'


export default class Details extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            season: props.navigation.getParam('season'),
            round: props.navigation.getParam('round'),
            page: props.navigation.getParam('page'),
            pilotid: props.navigation.getParam('pilot'),
            constructorId: props.navigation.getParam('constructor'),
            result: [],
            loading: true

        }
    }

    static navigationOptions = () => {
        return {
            title: 'Detalhes'
        }
    }

    componentDidMount() {
        this.getData()
    }

    getData() {
        let endPoint = this.getEndPonit()
        request.get(endPoint)
            .then((data) => {
                let result = []
                switch (this.state.page) {
                    case 'Race':
                        result = data.MRData.RaceTable.Races[0].Results.map(it => {
                            return {
                                pos: it.position,
                                pilot: `${it.Driver.givenName} ${it.Driver.familyName}`
                            }
                        });
                        break;
                    case 'Pilot':
                        result = data.MRData.RaceTable.Races.map(it => {
                            return {
                                circuit: it.raceName,
                                pos: it.Results[0].position
                            }
                        });
                        break
                    case 'Constructor':
                        result = data.MRData.RaceTable.Races.map(it => {
                            return {
                                circuit: it.raceName,
                                drivers: [{
                                    pos: it.Results[0].position,
                                    name: `${it.Results[0].Driver.givenName} ${it.Results[0].Driver.familyName}`
                                }, {
                                    pos: it.Results[1].position,
                                    name: `${it.Results[1].Driver.givenName} ${it.Results[1].Driver.familyName}`
                                }
                                ]
                            }

                        })
                        break
                    default:
                        break;
                }

                this.setState({
                    result,
                    loading: false
                })

            })

    }

    getEndPonit() {
        let endPoint = '';
        switch (this.state.page) {
            case 'Race':
                endPoint = `${this.state.season}/${this.state.round}/results.json`;
                break
            case 'Pilot':
                endPoint = `${this.state.season}/drivers/${this.state.pilotid}/results.json`;
                break
            case 'Constructor':
                endPoint = `${this.state.season}/constructors/${this.state.constructorId}/results.json`
                break
            default:
                break;
        }

        return endPoint
    }

    renderResults() {
        switch (this.state.page) {
            case 'Race':
                return this.state.result.map(it => <RaceDetail key={it.pos} results={it}></RaceDetail>)
            case 'Pilot':
                return this.state.result.map(it => <PilotDetail key={`${it.pos}-${it.circuit}`} results={it}></PilotDetail>)
            case 'Constructor':
                return this.state.result.map(it => <ConstructorDetail key={`${it.circuit}`} results={it}></ConstructorDetail>)
            default:
                break;
        }

    }

    render() {

        const { loading } = this.state;
        return loading ?
            <Text>Carregando...</Text> :
            <SafeAreaView style={style.content}>
                <ScrollView>
                    {this.renderResults()}
                </ScrollView>

            </SafeAreaView>



    }

}