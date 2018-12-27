/** @format */

import {AppRegistry, View} from 'react-native';
// import App from './App';
import React from 'react';
import {name as appName} from './app.json';
// import Login from './src/components/Login';
import MainActivity from './src/components/main/MainActivity';
import LoginForm from "./src/components/LoginForm";
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import arrayListData from "./src/data";
import FlatListData from './src/components/main/FlatListData';
import FlatListDonHang from './src/components/main/FlatListDonHang';
import MainLogin from './mainlogin';

const AppComponent = () => (
    <Provider store={store}>
       <MainLogin/>
    </Provider>
)
const defaultState = {
    arrayData: arrayListData,
    arr: [],
    filternavigation: 'SAN_PHAM',
    titleheader: 'Sản phẩm',
    filterFlatlist: FlatListData,
    islogin: false
}
const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'DAT_HANG':
            return {
                ...state,
                arr: state.arr.concat({
                    id: state.arr.length + '',
                    itemdonhang: arrayListData[action.key - 1],
                    sl: action.sl
                }),
                filterFlatlist: FlatListData
            };
        case 'FILTER_SAN_PHAM':
            return {
                ...state,
                filternavigation: 'SAN_PHAM',
                titleheader: 'Sản phẩm',
                filterFlatlist: FlatListDonHang
            };
        case 'FILTER_CHUA_GUI':
            return {
                ...state,
                filternavigation: 'CHUA_GUI',
                titleheader: 'Đ.Hàng chưa gửi',
            };
        case 'FILTER_DA_GUI':
            return {
                ...state,
                filternavigation: 'DA_GUI',
                titleheader: 'Đ.Hàng đã gữi'
            };
        case 'FILTER_THONG_TIN':
            return {
                ...state,
                filternavigation: 'THONG_TIN',
                titleheader: 'Thông tin'
            };
        case 'LOGIN':
            return{
                ...state,
                islogin:true
            }

        default:
            break;
    }
    return state
}
const store = createStore(reducer)
AppRegistry.registerComponent(appName, () => AppComponent);
