/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';


export default class ButtonComponent extends Component {
    render() {
        return (
            <Viewa>
                <TouchableOpacity style={styles.button} onPress={this.props.clickCallBack}>
                    <Text style={styles.buttonText}>{this.props.text}</Text>
                </TouchableOpacity>
            </Viewa>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        width: 100,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        backgroundColor: 'green'
    },
    buttonText: {
        color: 'white',
        textAlign: 'center'

    }
});
