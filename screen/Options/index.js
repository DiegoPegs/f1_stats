import React from 'react';
import { SafeAreaView } from 'react-navigation'
import { Button, Text } from 'native-base';
import style from './style'


export default class Options extends React.Component {

    state = {
        season: 0
    }



    componentDidMount() {
        this.setState({
            season: this.props.navigation.getParam('season')
        })
    }

    getDetail(season, tipo) {
        console.log(season, tipo)
        this.props.navigation.navigate('Detail', {season})
    }

    render() {
        const { season } = this.state
        return (
            <SafeAreaView>
                <Button
                    style={style.button}
                    block
                    onPress={() => this.getDetail(season, 'corrida')}>
                    <Text>Corridas</Text>
                </Button>
                <Button
                    style={style.button}
                    block
                    onPress={() => this.getDetail(season, 'piloto')}>
                    <Text>Pilotos</Text>
                </Button>
            </SafeAreaView>
        )

    }
}

