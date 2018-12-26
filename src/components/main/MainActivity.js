import React from 'react';
import {View, Text, Image} from 'react-native';
import Hearder from './Header';
import FlatListData from './FlatListData';
import arrayListData from '../../data';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

//create componets
const MainActivity = () => {
    return (
        <Provider store={store}>
            <View style={{flex: 1, flexDirection: 'column'}}>
                <View style={{flex: 10}}>
                    <Hearder
                        nametoview={'Sản phẩm'}/>
                </View>
                <View style={{flex: 80}}>
                    <FlatListData/>
                </View>
                <View style={{flex: 10, flexDirection: 'row'}}>
                    <View style={{
                        flex: 25,
                        // backgroundColor: '#34ffd8'
                    }}>
                        <View
                            style={{flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                            <Image
                                style={{
                                    width: 30,
                                    height: 30
                                }}
                                source={require('../../../image/gift_ischeck.png')}/>
                            <Text style={{color: '#ff9c10', fontSize: 10, marginTop: 5}}>Sản phẩm</Text>
                        </View>
                    </View>
                    <View style={{
                        flex: 25,
                        // backgroundColor: '#ff6296'
                    }}>
                        <View
                            style={{flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                            <Image
                                style={{
                                    width: 30,
                                    height: 30
                                }}
                                source={require('../../../image/shopping.png')}/>
                            <Text style={{color: '#000000', fontSize: 10, marginTop: 5}}>Đ.Hàng chưa gửi</Text>
                        </View>
                    </View>
                    <View style={{
                        flex: 25,
                        // backgroundColor: '#cb43ff'
                    }}>
                        <View
                            style={{flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                            <Image
                                style={{
                                    width: 30,
                                    height: 30
                                }}
                                source={require('../../../image/clipboard.png')}/>
                            <Text style={{color: '#000000', fontSize: 10, marginTop: 5}}>Đ.Hàng đã gửi</Text>
                        </View>
                    </View>
                    <View style={{
                        flex: 25,
                        // backgroundColor: '#e3d7ff'
                    }}>
                        <View
                            style={{flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                            <Image
                                style={{
                                    width: 30,
                                    height: 30
                                }}

                                source={require('../../../image/man.png')}/>
                            <Text style={{color: '#000000', fontSize: 10, marginTop: 5}}>Thông tin</Text>
                        </View>
                    </View>
                </View>
            </View>
        </Provider>
    )
}

const defaultState = {
    arrayData: arrayListData,
    arr: []
}
const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'DAT_HANG':
            return {
                ...state,
                arr: state.arr.concat({
                    key: action.key,
                    sl: action.sl
                })
            };
        default:
            break;
    }
    return state
}
const store = createStore(reducer)
export default MainActivity;