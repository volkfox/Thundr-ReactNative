/*  -- CollaboratorItem.js --
    Used by NewBrainstormScreen to display the user's collaborators
    (who they've invited).
 */

 import React from 'react'
 import {
     View,
     Text,
     Image,
     StyleSheet,
 } from 'react-native'
import FontStyles from './FontStyles';
import { scale } from 'react-native-size-matters'

 export default class CollaboratorItem extends React.Component {
     render() {
        const randomHeadshots = [
            require('../images/headshot_0.jpg'),
            require('../images/headshot_1.jpg'),
            require('../images/headshot_2.jpg')
        ]

        return (
            <View style={styles.container}>
                <Image
                    source={randomHeadshots[Math.floor(Math.random() * randomHeadshots.length)]}
                    style={styles.image}
                    resizeMode='contain'
                />
                <View style={{ justifyContent: 'center', paddingTop: scale(10) }}>
                    <Text style={styles.text}>{this.props.name}</Text>
                </View>
            </View>
        )
     }
 }

 /* Style sheet. */
 const styles = StyleSheet.create ({
     container: {
        flex: 1,
        flexDirection: 'row',
        marginLeft: scale(40),
     },
     image: {
        width: scale(50),
        height: scale(50),
     },
     text: {
        marginLeft: scale(10),
        fontFamily: 'HiraginoSans-W3',
        fontSize: FontStyles.small,
     }
 })