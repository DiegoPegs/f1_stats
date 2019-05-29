import React, { PureComponent } from 'react'

import { Button, Text } from 'native-base';
import { SafeAreaView} from 'react-navigation'
import style from './style'

class Seasons extends PureComponent {

    renderSeasons() {
        let items = []

        for (let i = 2000; i < 2021; i++) {

            items.push(
                <Button onPress={() => this.props.handleClick(i)}
                    rounded small key={`BSeason-${i}`}
                    style={style.button} >
                    <Text key={`season-${i}`}>
                        {i}
                    </Text>
                </Button>
            )
        }
        return items
    }

    render() {
        return (
            <SafeAreaView style={style.container}>
                {this.renderSeasons()}
            </SafeAreaView>

        )
    }
}

export default Seasons;