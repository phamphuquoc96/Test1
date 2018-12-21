import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import LoginForm from './LoginForm';

//crate components
const Login = () => {
    return (
        <View>
            <View
                style={styles.container}>
                <Image
                    style={styles.imagestyle}
                    source={require('../../image/logo.png')}/>
            </View>
            <LoginForm/>
        </View>

    )
};
const styles = StyleSheet.create({
        container: {
            alignItems: 'center',
            height: 200,
        },
        imagestyle: {
            marginTop: 80,
            justifyContent: 'center',
        }
    }
)
export default Login;
