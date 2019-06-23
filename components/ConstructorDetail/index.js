import React, { PureComponent } from 'react'
import { Card, Text, CardItem, Left } from 'native-base'

class ConstructorDetail extends PureComponent {

    constructor(props) {
        super(props)

    }


    render() {
        const result = this.props.results
        console.log(`resultado: ${JSON.stringify(result)}`)
        return (
            <Card>
                <CardItem>
                    <Left>
                        <Text>Circuito: {result.circuit}</Text>
                    </Left>
                </CardItem>
                <CardItem>
                    <Left>
                        <Text>Piloto: {result.drivers[0].name}</Text>
                        <Text>Posição: {result.drivers[0].pos}</Text>
                    </Left>
                </CardItem>
                <CardItem>
                    <Left>
                        <Text>Piloto{result.drivers[1].name}</Text>
                        <Text>Posição:{result.drivers[1].pos}</Text>
                    </Left>
                </CardItem>
            </Card>
            
        )

    }
}

export default ConstructorDetail;