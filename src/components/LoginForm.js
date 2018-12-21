import React, {Component} from 'react';
import {Text, View, StyleSheet, TextInput, Keyboard} from 'react-native';
import Button from './Button';

export default class LoginForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View
                style={style.container}>
                <Text>Mã khách hàng</Text>
                <TextInput
                    style={style.inputstyle}
                    keyboardType = 'default'
                    placeholder='Nhap ma'
                    onSubmitEditing={Keyboard.dismiss()}
                />
                <View>
                    <Button>dang nhap</Button>
                </View>
            </View>
        )
    }
}

const style = StyleSheet.create({
    inputstyle: {
        height: 40,
        padding: 5,
        borderColor: '#3adcff',
        borderBottomWidth: 1,
        color: '#ffb200'

    },
    container: {
        marginLeft: 20,
        marginRight: 20,
        marginTop: 150,
    }
})