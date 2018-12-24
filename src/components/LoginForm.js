import React, {Component} from 'react';
import {Text, View, StyleSheet, TextInput, Keyboard} from 'react-native';
import {Button} from './Button';

export default class LoginForm extends Component {
    constructor(props) {
        super(props);
    }

    state = {email: '', status: '', colorOfTextText: '#000000'};

    onButtonPress() {
        console.log("pressed");
        console.log(this.state.email);

        const {email} = this.state;

        if (email == 'M004') {
            this.setState({status: 'Success'})
        }
        else {
            this.setState({status: 'Mã khách hàng không chính '})
        }
        ;
        this.setState({
            email: '',
        });
    }

    renderButton() {
        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Đăng Nhập
            </Button>
        );
    }

    settextcolor(email) {
        this.setState({email})
        this.setState({status: ''})
        if (email.length < 1) {
            {
                this.setState({colorOfTextText: '#000000'})
            }
        } else {
            {
                this.setState({colorOfTextText: '#1279ff'})
            }
        }
    }

    render() {
        return (
            <View
                style={style.container}>
                <Text style={{color: this.state.colorOfTextText}}>Mã khách hàng</Text>
                <TextInput
                    style={style.inputstyle}
                    keyboardType='default'
                    placeholder='Nhap ma'
                    onChangeText={email => {
                        this.settextcolor(email)
                    }}
                />
                <Text style={styles.errorStyle}>
                    {this.state.status}
                </Text>
                <View>
                    {this.renderButton()}
                </View>
            </View>
        )
    }
}
const styles = {
    errorStyle: {
        fontSize: 15,
        color: 'red'
    }
};
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
        marginTop: 200,
    }
})