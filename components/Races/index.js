import React, { PureComponent } from 'react'

import { Text, CardItem } from 'native-base';


class Race extends PureComponent {

    constructor(props) {
        super(props)

    }


    render() {
        const race = this.props.race
        return (
            <CardItem bordered button onPress={() => this.props.handleClick(race.round)}>
                <Text>{race.name}</Text>
            </CardItem>
        )
    }
}

export default Race;