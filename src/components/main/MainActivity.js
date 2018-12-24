import React from 'react';
import {View, Text} from 'react-native';
import Hearder from './Header';
import FlatListData from './FlatListData';


//create componets
const MainActivity = () => {
    return (
        <View style={{flex: 1, flexDirection: 'column'}}>
            <View style={{flex: 10}}>
                <Hearder
                    nametoview={'Sản phẩm'}/>
            </View>
            <View style={{flex: 90}}>
                <FlatListData/>
            </View>

        </View>
    )
}
export default MainActivity;