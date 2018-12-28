/** @format */

import {AppRegistry, View} from 'react-native';
// import App from './App';
import React, {Component} from 'react';
import {name as appName} from './app.json';
import Login from './src/components/Login';
import MainActivity from './src/components/main/MainActivity';
import LoginForm from "./src/components/LoginForm";
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import arrayListData from "./src/data";
import FlatListData from './src/components/main/FlatListData';
import FlatListDonHang from './src/components/main/FlatListDonHang';
import {connect} from 'react-redux';

class mainlogin extends Component {
    checkislogin() {
        if (this.props.myislogin) {
            return <MainActivity/>
        } else {

            return <Login/>
        }
    }

    render() {
        return (
            // this.checkislogin()
            <MainActivity/>
        // <Login/>
        )
    }
}

function mapStateToProps(state) {
    return {
        myislogin: state.islogin,
    };
}

export default connect(mapStateToProps)(mainlogin)