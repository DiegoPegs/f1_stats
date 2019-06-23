import React, { PureComponent } from 'react'
import { Card, Text, CardItem, Left } from 'native-base'

class PilotDetail extends PureComponent {

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
                        <Text>Circuito: {result.circuit}</Text>
                    </Left>
                </CardItem>
            </Card>


        )

    }
}

export default PilotDetail;