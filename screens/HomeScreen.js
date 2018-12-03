/*  -- HomePage.js --
    Home page of Thundr. Allows user to browse previous brainstorms
    and has a FAB that allows creation of new brainstorms.
*/

import React from 'react'
import { 
    View, 
    StatusBar, 
    SafeAreaView,
    FlatList,
    TouchableOpacity,
    Image,
} from 'react-native'
import FontStyles from '../components/FontStyles'
import ActionButton from 'react-native-action-button'
import HomeScreenItem from '../components/HomeScreenItem'
import brainstormData from '../data/BrainstormData'

export default class HomeScreen extends React.Component {
    render() {
        return (
            <SafeAreaView style={{flex: 1}}> 
                <StatusBar barStyle='light-content'/>
                <FlatList
                    data={brainstormData}
                    renderItem={this._renderItem}
                    ItemSeparatorComponent={this._renderSeparator}
                />
                <ActionButton
                    buttonColor='#FAD15F' 
                    onPress={ () => {this.props.navigation.push('NewBrainstorm')}}
                />
            </SafeAreaView>
        )
    }

    /* renderItem function for Flatlist. */
    _renderItem = ({item}) => (
        <HomeScreenItem
            title={item.title}
            date={item.date}
            description={item.description}
            ideas={item.ideas}
            collaborators={item.collaborators}
        />
    )

    /* renderSeparator function for Flatlist. */
    _renderSeparator = () => (
        <View 
            style = {{
                height: 0.5,
                width: '100%',
                backgroundColor: '#cccccc',
            }}
        />
    )

    /* Header styling. */
    static navigationOptions = {
        title: 'Brainstorms', 
        headerStyle: {
            borderBottomWidth: 0,
            height: FontStyles.headerHeight,
            backgroundColor: '#FAD15F',
        },
        headerTintColor: '#FFFFFF',
        headerTitleStyle: {
            fontFamily: 'HiraginoSans-W6',
            fontSize: FontStyles.header - 5,
        },
        headerBackTitle: null,
        headerRight: (
            <TouchableOpacity style={ {paddingRight: 25, paddingBottom: 8} }
                onPress={ () => {} }
            >
                <Image
                    source={require('../images/search.png')}
                    resizeMode='contain'
                    style={ {width: 20, height: 20} }
                />
            </TouchableOpacity>
        ),
    }
}