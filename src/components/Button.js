import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

//create componenet

const Button = ({onPress, children}) => {
    const {buttonStyle, textStyle, viewstyle} = styles;
    return (
        <TouchableOpacity
            onPress={onPress}
            style={buttonStyle}>
            <View style={viewstyle}>
                <Text
                    style={textStyle}>
                    {children}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = {
    textStyle: {
        alignSelf: 'center',
        color: '#ffffff',
        fontSize: 18,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10

    },
    buttonStyle: {
        height: 70,
        marginTop: 80,
        alignSelf: 'stretch',
        backgroundColor: '#ffa600',
        borderColor: '#ffb200',
        borderRadius: 5,
        borderWidth: 1,
        marginRight: 5,
        marginLeft: 5
    },
    viewstyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    }
}

//export
export {Button};