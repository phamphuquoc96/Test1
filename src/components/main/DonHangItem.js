import React, {Component} from 'react';
import {StyleSheet, Text, Image, TextInput, View, Alert, FlatList, TouchableOpacity, ScrollView} from 'react-native';
import NumberFormat from 'react-number-format';
import {connect} from 'react-redux';

class DonHangItem extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <View style={{
                flexDirection: 'row',
                marginLeft: 5,
                marginRight: 5,
                backgroundColor: '#ffffff',
                height: 40,
                borderBottomWidth: 0.4,
            }}>
                <View style={{
                    flex: 2,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Text>{this.props.item.itemdonhang.key}</Text>
                </View>
                <View style={{
                    flex: 6,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderLeftWidth: 0.4,
                    borderRightWidth: 0.4
                }}>
                    <Text>{this.props.item.itemdonhang.imagename}</Text>
                </View>
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Text>{this.props.item.sl}</Text>
                </View>
            </View>
        )
    }
}
export default connect()(DonHangItem);