import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, TouchableHighlight, Dimensions, Image } from 'react-native';
import Constants from 'expo-constants';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default class App extends Component {
    
    state = {
        familyPageDisplay: 'block',
        workPageDisplay: 'none',
        hobbiesPageDisplay: 'none',
    }
    
    handleFamilyPagePress = () => this.setState(state => ({
        familyPageDisplay: 'block',
        workPageDisplay: 'none',
        hobbiesPageDisplay: 'none',
    }));
    
    handleWorkPagePress = () => this.setState(state => ({
        familyPageDisplay: 'none',
        workPageDisplay: 'block',
        hobbiesPageDisplay: 'none',
    }));
    
    handleHobbiesPagePress = () => this.setState(state => ({
        familyPageDisplay: 'none',
        workPageDisplay: 'none',
        hobbiesPageDisplay: 'block',
    }));
    
    render() {
        return (
            <View style={styles.container}>
            
                <View style={styles.navbarContainer}>
                
                  <Text style={styles.titleText}>
                    Shannon Denna
                  </Text>
              
                    <View style={styles.navbarButtonRow}>
                        <TouchableHighlight style = {styles.navButton}
                            underlayColor = "transparent"
                            onPress={this.handleFamilyPagePress}>
                            <Text style={styles.navButtonText}>
                                Family
                            </Text>
                        </TouchableHighlight>
                        
                        <TouchableHighlight style = {styles.navButton}
                            underlayColor = "transparent"
                            onPress={this.handleWorkPagePress}>
                            <Text style={styles.navButtonText}>
                                Work 
                            </Text>
                        </TouchableHighlight>
                        
                        <TouchableHighlight style = {styles.navButton}
                            underlayColor = "transparent"
                            onPress={this.handleHobbiesPagePress}>
                            <Text style={styles.navButtonText}>
                                Hobbies
                            </Text>
                        </TouchableHighlight>
                     </View>   
                </View>
                
               
                
                
                <View style={{display: this.state.familyPageDisplay }}>
                     <View style={styles.contentContainer}>
                        <Image
                            source={{ uri: 'https://codehs.com/uploads/3b056ba1ecc6e4534b08e181519baa88' }}
                            style={{ height: 2*deviceWidth/3, width: 9*deviceWidth/10 }}
                        />
                    </View>
                </View>
                
                
                <View style={{display: this.state.workPageDisplay }}>
                     <View style={styles.contentContainer}>
                        <Text style={styles.containerText}>
                            Fremd High School
                        </Text>
                    </View>
                </View>
                
                <View style={{display: this.state.hobbiesPageDisplay }}>     
                    <View style={styles.contentContainer}>
                        <Text style={styles.containerText}>
                            Traveling, Exercise, and being with my Family and Friends
                        </Text>
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
        backgroundColor: '#EEEEEE'
    },

    contentContainer: {
        height: 3*(deviceHeight/4),
        width: deviceWidth,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#EEEEEE',
    },
    navbarContainer: {
        height: deviceHeight/4,
        width: deviceWidth,
        backgroundColor: '#29A8AB',
        
        borderColor: '#BBBBBB',
    },
    navbarButtonRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    navButton: {
        height: deviceHeight/14,
        width: deviceWidth/4,
        backgroundColor: '#EEEEEE',
        borderColor: '#BBBBBB',
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
    },
    navButtonText: {
        fontSize: deviceHeight/40,
        textAlign: 'center',
        color: '#29A8AB',
        fontWeight: 'bold',
    },
    titleText: {
        color: '#EEEEEE',
        fontSize: deviceWidth/8,
        fontWeight: 'bold',
    },
    containerText: {
        color: 'black',
        fontSize: deviceWidth/8,
        fontWeight: 'bold',
        textAlign: 'center'
    }

});