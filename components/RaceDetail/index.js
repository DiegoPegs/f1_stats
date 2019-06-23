import React, { PureComponent } from 'react'
import { Card, Text, CardItem, Left } from 'native-base'

class RaceDetail extends PureComponent {

    constructor(props) {
        super(props)

    }


    render() {
        const result = this.props.results
        return (
            <Card>
                <CardItem>
                    <Left>
                        <Text>Posição: {result.pos}</Text>
                    </Left>
                </CardItem>
                <CardItem>
                    <Left>
                        <Text>Piloto: {result.pilot}</Text>
                    </Left>
                </CardItem>

            </Card>
        )

    }
}

export default RaceDetail;