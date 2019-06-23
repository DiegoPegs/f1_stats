import React from 'react';
import { SafeAreaView } from 'react-navigation'
import Seasons from '../../components/Seasons'


export default class Options extends React.Component {

    state = {
        page: ""
    }

    constructor(props) {
        super(props);
        this.getData = this.getData.bind(this)
    }

    static navigationOptions = () => {
        return {
            title: 'Temporadas'
        }
    }

    
    componentDidMount() {
        this.setState({
            page: this.props.navigation.getParam('page')
        })
        
    }

    getData(season) {
        const page = this.state.page
        console.log(`page: ${page}`)
        this.props.navigation.navigate(page, { season })
    }

    render() {
        
        return (
            <SafeAreaView>
                <Seasons handleClick={this.getData}></Seasons>
            </SafeAreaView>
        )

    }
}

