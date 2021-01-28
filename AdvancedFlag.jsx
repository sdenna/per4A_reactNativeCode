import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Dimensions } from 'react-native';
import Constants from 'expo-constants';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
            
                <View style={styles.allRows}>
                    <View style={styles.topRow}>
                        <View style={styles.topLeftRedWh}>
                        </View>
                        <View style={styles.vertBlue}>
                        </View>
                        <View style={styles.topRightRedWh}>
                        </View>
                    </View>
                    
                    <View style={styles.middleRow}>
                        <View style={styles.horizBlue}>
                        </View>
                    </View>
                    
                    <View style={styles.bottomRow}>
                        <View style={styles.bottomLeftRedWh}>
                        </View>
                        <View style={styles.vertBlue}>
                        </View>
                        <View style={styles.bottomRightRedWh}>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: deviceHeight,
        width: deviceWidth,
    },
    allRows: {
        height: deviceHeight,
        width:  deviceWidth,
    },
    topRow: {
        height: 7*deviceHeight/16,
        width: deviceWidth,
        flexDirection: 'row',
    },
    topLeftRedWh: {
        backgroundColor: 'red',
        borderColor: 'white',
        borderRightWidth: 0.5*deviceWidth/16,
        borderBottomWidth: 0.5*deviceWidth/16,
        height: 7*deviceHeight/16,
        width: 7*deviceWidth/22,
    },
    topRightRedWh: {
        backgroundColor: 'red',
        borderColor: 'white',
        borderLeftWidth: 0.5*deviceWidth/16,
        borderBottomWidth: 0.5*deviceWidth/16,
        height: 7*deviceHeight/16,
        width: 13*deviceWidth/22,
    },
    middleRow: {
        height: 2*deviceHeight/16,
        width: deviceWidth,
    },
    horizBlue: {
        flex: 1,
        backgroundColor: 'darkblue',
    },
    bottomRow: {
        height: 7*deviceHeight/16,
        width: deviceWidth,
        flexDirection: 'row',
    },
    bottomLeftRedWh: {
        backgroundColor: 'red',
        borderColor: 'white',
        borderTopWidth: 0.5*deviceWidth/16,
        borderRightWidth: 0.5*deviceWidth/16,
        height: 7*deviceHeight/16,
        width: 7*deviceWidth/22,
    },
    bottomRightRedWh: {
        backgroundColor: 'red',
        borderColor: 'white',
        borderLeftWidth: 0.5*deviceWidth/16,
        borderTopWidth: 0.5*deviceWidth/16,
        height: 7*deviceHeight/16,
        width: 13*deviceWidth/22,
    },
    vertBlue: {
       
        width: 2*deviceWidth/22,
    },
});