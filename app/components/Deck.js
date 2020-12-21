import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

class Deck extends Component {
    state = {  }

    render() { 
        return ( 
            <View style={styles.container}>  
                <View style={styles.quarter}>

                </View>
                <View style={styles.quarter}>

                </View>
                <View style={styles.quarter}>

                </View>
                <View style={styles.quarter}>

                </View>
            </View>
         );
    }
}
 
export default Deck;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    quarter: {
        borderWidth: 1,
        flex: 1
    }
})