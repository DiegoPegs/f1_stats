import React, { PureComponent } from 'react'

import { Text, CardItem } from 'native-base';



class Constructor extends PureComponent {

    constructor(props) {
        super(props)

    }


    render() {
        const constructor = this.props.constructor

        return (
            <CardItem bordered button onPress={() => this.props.handleClick(constructor.id)}>
                <Text>{constructor.name}</Text>
            </CardItem>
        )
    }
}

export default Constructor;