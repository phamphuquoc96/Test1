import React, {Component} from 'react';
import {StyleSheet, Text, Image, TextInput, View, Alert, FlatList, TouchableOpacity, ScrollView} from 'react-native';
import NumberFormat from 'react-number-format';
import {connect} from 'react-redux';

class FlatListItemDonHang extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{
                flexDirection: 'row',
                height: 175,
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
                <View style={{
                    flex: 30,
                    // backgroundColor: '#34ffd8'
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Image
                        style={{height: 270}}
                        source={require('../../../image/oliveshower1.png')}
                    />
                </View>
                <View style={{
                    flex: 70,
                    // backgroundColor: '#9eff1f'
                    flexDirection: 'column'
                }}>
                    <View style={{
                        flex: 15,
                        justifyContent: 'center',
                        // backgroundColor: '#9eff1f'
                    }}>
                        <Text style={{
                            fontWeight: 'bold',
                            color: '#000000',
                            fontSize: 16
                        }}>{this.props.item.itemdonhang.imagename}</Text>
                    </View>
                    <View style={{
                        flex: 15,
                        justifyContent: 'center'
                        // backgroundColor: '#34ffd8'
                    }}>
                        <Text style={{
                            color: '#000000',
                            fontSize: 16
                        }}>KM: {this.props.item.itemdonhang.subiamgename}</Text>
                    </View>
                    <View style={{
                        flex: 15,
                        justifyContent: 'center'
                        // backgroundColor: '#d300ff'
                    }}>
                        <Text style={{color: '#000000', fontSize: 16}}>
                            <NumberFormat
                                value={this.props.item.itemdonhang.price}
                                displayType={'text'}
                                thousandSeparator={'.'}
                                decimalSeparator={','}
                                renderText={value => <Text>{value} đ</Text>}/>
                        </Text>
                    </View>
                    <View style={{
                        flex: 30,
                        // backgroundColor: '#fffd49',
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                        <Image
                            style={{height: 15, width: 15}}
                            source={require('../../../image/down_arrow.png')}
                        />
                        <Text style={{
                            marginLeft: 30,
                            marginRight: 30,
                            fontSize: 20,
                            fontWeight: 'bold',
                        }}>{this.props.item.sl}</Text>
                        <Image
                            style={{height: 15, width: 15}}
                            source={require('../../../image/up_arrow.png')}
                        />

                    </View>
                    <View style={{
                        flex: 25,
                        // backgroundColor: '#ff6296',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <View>
                            <Text style={{color: '#000000', fontWeight: 'bold', fontSize: 16}}>Chiết khấu 40%</Text>
                        </View>
                        <View>
                            <Text style={{
                                color: '#ff0c03',
                                fontWeight: 'bold',
                                fontSize: 16,
                                marginRight: 10
                            }}>
                                <NumberFormat
                                    value= {(this.props.item.itemdonhang.price) * (this.props.item.sl) * 0.4}
                                    displayType={'text'}
                                    thousandSeparator={'.'}
                                    decimalSeparator={','}
                                    renderText={value => <Text>{value} đ</Text>}/>
                                </Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}


function mapStateToProps(state) {
    return {
        arrtong: state.arr
    };
}

export default connect(mapStateToProps)(FlatListItemDonHang);