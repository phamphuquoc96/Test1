import React, {Component} from 'react';
import {StyleSheet, Text, Image, TextInput, View, Alert, FlatList, TouchableOpacity, ScrollView} from 'react-native';
import NumberFormat from 'react-number-format';
import {connect} from 'react-redux';

class ItemDonHangDaGui extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View
                style={{
                    flexDirection: 'column',
                    alignItems: 'stretch',
                    marginTop: 8,
                    marginBottom: 2,
                    marginRight: 8,
                    marginLeft: 8,
                    backgroundColor: '#ffffff',
                    shadowOffset: {width: 0, height: 2},
                    shadowRadius: 2,
                    borderTopRightRadius: 5,
                    borderBottomEndRadius: 5,
                    borderBottomLeftRadius: 5,
                    borderTopLeftRadius: 5,
                    shadowColor: '#000',
                    shadowOpacity: 0.2,
                    elevation: 1
                }}>
                <View style={{flexDirection: 'row', marginTop: 5, marginLeft: 5}}>
                    <Text style={{fontSize: 16, fontWeight: 'bold'}}>Mã đơn hàng:</Text>
                    <Text style={{fontSize: 16}}>{this.props.item.madh}</Text>
                </View>
                <View style={{flexDirection: 'row', marginTop: 5, marginLeft: 5}}>
                    <Text style={{fontSize: 16, fontWeight: 'bold'}}>Ngày đặt hàng:</Text>
                    <Text style={{fontSize: 16}}>{this.props.item.ngaydathang}</Text>
                </View>
                <View style={{flexDirection: 'row', marginTop: 5, marginLeft: 5}}>
                    <Text style={{fontSize: 16, fontWeight: 'bold'}}>Thành tiền:</Text>
                    <Text style={{fontSize: 16}}>{this.props.item.thanhtien}</Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    marginTop: 5,
                    marginLeft: 5,
                    marginRight: 5,
                    backgroundColor: '#e6e6e6',
                    height: 40,
                }}>
                    <View style={{
                        flex: 2,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Text>Mặt hàng</Text>
                    </View>
                    <View style={{
                        flex: 6,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderLeftWidth: 0.4,
                        borderRightWidth: 0.4
                    }}>
                        <Text>Tên hàng hóa</Text>
                    </View>
                    <View style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Text>Sl</Text>
                    </View>
                </View>
                <View>
                    <FlatList
                        data={this.props.item.donhang}
                        renderItem={({item, index}) => {
                            return (
                               <View/>
                            )
                        }}
                    >

                    </FlatList>
                </View>
            </View>
        )
    }
}

export default connect()(ItemDonHangDaGui)