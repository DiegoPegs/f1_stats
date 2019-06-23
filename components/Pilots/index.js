import React, { PureComponent } from 'react'

import { CardItem, Text } from 'native-base';

class Pilot extends PureComponent {

    constructor(props) {
        super(props)

    }


    render() {
        const pilot = this.props.pilot
        
        return (
            <CardItem bordered button onPress={() => this.props.handleClick(pilot.id)}>
                <Text>{pilot.name}</Text>
            </CardItem>
           
        )
    }
}

export default Pilot;