import React from 'react';
import { SafeAreaView } from 'react-navigation';
import { Card, CardItem, Text } from 'native-base';

import * as request from '../../resource/request';

import { ScrollView } from 'react-native-gesture-handler';
import Constructor from '../../components/Constructor';

import style from './style'


export default class Constructors extends React.Component {

    state = {
        season: 0,
        constructors: [],
        loading: true

    }
    constructor(props) {
        super(props);
        this.detail = this.detail.bind(this)
    }

    static navigationOptions = () => {
        return {
            title: 'Construtores'
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
        request.get(`${season}/constructors.json`)
            .then((data) => {

                let constructors = data.MRData.ConstructorTable.Constructors.map(it => {
                    return {
                        name: it.name,
                        id: it.constructorId
                    }
                });
                this.setState({
                    constructors,
                    loading: false
                })
            })

    }



    detail(constructor) {
        this.props.navigation.navigate('Details', { constructor, page: 'Constructor', season: this.state.season })
    }

    renderContructors() {
        return this.state.constructors.map(it => <Constructor key={it.id} constructor={it} handleClick={this.detail}></Constructor>)
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

                        {this.renderContructors()}

                        <CardItem footer bordered>
                            <Text>F1 Pilots</Text>
                        </CardItem>
                    </Card>


                </ScrollView>

            </SafeAreaView>



    }
}

