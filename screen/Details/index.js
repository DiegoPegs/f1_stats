import React from 'react'
import { Text } from 'native-base';

export default class Detail extends React.Component {

    componentDidMount() {
        console.log('didmount')
        const season = this.props.navigation.getParam('season')
        this.getData(season)
    
      }
      
    render() {
        return (
            <Text>
                Detalhes
            </Text>
        )
    }
}