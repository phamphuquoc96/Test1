import React, {Component} from 'react';
import {StyleSheet, Text, Image, TextInput, View, Alert, FlatList, TouchableOpacity, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import NumberFormat from 'react-number-format';
import FlatListItemDonHang from './FlatListItemDonHang';

class FlatListDonHang extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tong: this.tinhtong(),
        };
    }

    GuiDonHang = () => {
        this.setState({tong: 0})
        var date = new Date().getDate();
        var month = new Date().getMonth() + 1;
        var year = new Date().getFullYear();
        var s = (date + '-' + month + '-' + year);
        this.props.dispatch({
            type: 'GUI_HANG',
            mdate: s,
            mtien: this.state.tong,
            arrdonhang: this.props.arrData
        })
    }

    tinhtong() {
        let tong = 0;
        for (let dataObject of this.props.arrData) {
            tong = tong + (dataObject.itemdonhang.price) * (dataObject.sl) * 0.4;
        }
        return tong;
    }

    render() {
        return (
            <View style={{
                flex: 1,
                backgroundColor: '#d2d2d2',
                flexDirection: 'column',
            }}>
                <View style={{flex: 70}}>
                    <FlatList
                        data={this.props.arrData}
                        renderItem={({item, index}) => {
                            return (
                                <FlatListItemDonHang item={item} index={index}>
                                </FlatListItemDonHang>
                            )
                        }}
                        keyExtractor={item => item.id}
                    >
                    </FlatList>
                </View>
                <View style={{
                    flex: 30,
                    backgroundColor: '#ffffff',
                    flexDirection: 'column',
                    marginRight: 10,
                    marginLeft: 10,
                    borderTopLeftRadius: 5,
                    borderTopRightRadius: 5

                }}>
                    <View style={{
                        flex: 20,
                        // backgroundColor: '#45ffa0',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginTop: 15,
                        marginRight: 5,
                        marginLeft: 5
                    }}>
                        <View style={{flexDirection: 'row',}}>
                            <Text style={{color: '#000000', fontSize: 16, fontWeight: 'bold'}}>Tổng cộng: </Text>
                            <Text style={{color: '#000000', fontSize: 16}}>{this.props.arrData.length} sản phẩm</Text>
                        </View>
                        <View>
                            <Text style={{
                                color: '#000000',
                                fontSize: 16,
                                fontWeight: 'bold'
                            }}><NumberFormat
                                value={this.state.tong}
                                displayType={'text'}
                                thousandSeparator={'.'}
                                decimalSeparator={','}
                                renderText={value => <Text>{value} đ</Text>}/></Text>

                        </View>

                    </View>
                    <View style={{
                        flex: 80,
                        // backgroundColor: '#cb43ff'
                    }}>
                        <TouchableOpacity
                            onPress={this.GuiDonHang}
                            style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexDirection: 'row'
                            }}
                        >
                            <View style={{
                                marginRight: 5,
                                marginLeft: 5,
                                flex: 1,
                                marginBottom: 25,
                                flexDirection: 'row',
                                height: 50,
                                backgroundColor: '#1279ff',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderTopLeftRadius: 5,
                                borderTopRightRadius: 5,
                                borderBottomRightRadius: 5,
                                borderBottomLeftRadius: 5,
                            }}>
                                <Image
                                    style={{
                                        marginRight: 10,
                                        height: 20,
                                        width: 20
                                    }}
                                    source={require('../../../image/shopping_cart.png')}
                                />
                                <Text style={{
                                    color: 'white',
                                    marginLeft: 5,
                                    fontSize: 18,
                                }}>
                                    Gữi đơn hàng
                                </Text>
                            </View>

                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

function mapStateToProps(state) {
    return {
        arrData: state.arr,
    };
}

export default connect(mapStateToProps)(FlatListDonHang);