import React, {Component} from 'react';
import {StyleSheet, Text, Image, TextInput, View, Alert, FlatList, TouchableOpacity, ScrollView} from 'react-native';
import arrayListData from '../../data';
import {connect} from 'react-redux';

class FlatListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            soluong: 1,
        };
    }

    datHang() {
        this.props.dispatch({
            type: 'DAT_HANG',
        });
        // alert(this.state.soluong +'   '+ this.props.item.key);
    }

    render() {
        return (
            <View style={{
                height: 320,
                flexDirection: 'column',
                marginTop: 10,
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
                    flex: 85,
                    height: 300,
                    flexDirection: 'row'
                }}>
                    <View style={{
                        flex: 35,
                        // backgroundColor: '#94a201',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Image
                            style={{
                                flex: 1,
                                width: 290,
                                height: 290,
                            }}
                            source={require('../../../image/oliveshower1.png')}
                        />
                    </View>
                    <View style={{
                        flex: 65,
                        // backgroundColor: '#909646',
                        flexDirection: 'column'
                    }}>
                        <View style={{
                            flex: 25,
                            // backgroundColor: '#0bff00',
                            flexDirection: 'column'
                        }}>
                            <Text style={{
                                color: '#000000',
                                fontSize: 20,
                                marginRight: 15,
                            }}>
                                {this.props.item.imagename}
                            </Text>
                        </View>
                        <View style={{
                            flex: 20,
                            // backgroundColor: '#ffe1ac',
                            flexDirection: 'row',
                            justifyContent: 'flex-end',
                        }}>
                            <Text style={{
                                color: '#ff0c03',
                                fontSize: 30,
                                marginRight: 15,
                            }}>
                                {this.props.item.price}
                            </Text>
                        </View>
                        <View style={{
                            flex: 65,
                            // backgroundColor: '#d300ff',
                            flexDirection: 'column'
                        }}>
                            <View style={{
                                flex: 70,
                                // backgroundColor: '#fffd49',
                                flexDirection: 'row'
                            }}>
                                <View style={{
                                    flex: 30,
                                    // backgroundColor: '#45ffa0',
                                    flexDirection: 'row',
                                    alignItems: 'flex-end',
                                    justifyContent: 'center',

                                }}>
                                    <Image
                                        style={{
                                            width: 110,
                                            height: 110,
                                        }}
                                        source={require('../../../image/oliveshower1.png')}
                                    />
                                </View>
                                <View style={{
                                    flex: 70,
                                    justifyContent: 'center',
                                    // backgroundColor: '#9eff1f',
                                    flexDirection: 'row'
                                }}>
                                    <TouchableOpacity
                                        onPress={() => {
                                            if (this.state.soluong < 2) {

                                            } else {
                                                this.setState({soluong: this.state.soluong - 1})
                                            }
                                        }}
                                    >
                                        <View style={{
                                            height: 45,
                                            width: 50,
                                            borderBottomLeftRadius: 30,
                                            borderTopLeftRadius: 30,
                                            backgroundColor: '#1279ff',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}>
                                            <Image
                                                style={{
                                                    width: 20,
                                                    height: 20
                                                }}
                                                source={require('../../../image/substract.png')}
                                            />

                                        </View>
                                    </TouchableOpacity>
                                    <View style={{
                                        height: 45,
                                        width: 50,
                                        borderBottomWidth: 0.4,
                                        borderTopWidth: 0.4,
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <Text style={{
                                            fontSize: 22,
                                            color: '#000000'
                                        }}>
                                            {this.state.soluong}
                                        </Text>
                                    </View>
                                    <TouchableOpacity
                                        onPress={() => {
                                            this.setState({soluong: this.state.soluong + 1})
                                        }}
                                    >
                                        <View style={{
                                            height: 45,
                                            width: 50,
                                            borderBottomRightRadius: 30,
                                            borderTopRightRadius: 30,
                                            backgroundColor: '#1279ff',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}>
                                            <Image
                                                style={{
                                                    width: 20,
                                                    height: 20
                                                }}
                                                source={require('../../../image/add.png')}
                                            />

                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={{
                                flex: 30,
                                // backgroundColor: '#34ffd8',
                                flexDirection: 'row',
                            }}>
                                <View style={{
                                    flex: 15,
                                    // backgroundColor: '#cb43ff',
                                    alignItems: 'flex-end',
                                    justifyContent: 'center',
                                    marginBottom: 30
                                }}>
                                    <Text style={{color: '#ff0c03', fontSize: 18}}>KM: </Text>
                                </View>
                                <View style={{
                                    flex: 85,
                                    // backgroundColor: '#ff6296',
                                    alignItems: 'flex-start',
                                    justifyContent: 'center',
                                    marginBottom: 30
                                }}>
                                    <Text style={{color: '#000000', fontSize: 18}}>{this.props.item.subiamgename}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{
                    // backgroundColor: '#3adcff',
                    flex: 15
                }}>

                    <TouchableOpacity
                        // onPress={() => {
                        //     alert(this.props.item.price + ' so luong' + this.state.soluong)
                        // }}
                        onPress={() => this.props.dispatch({
                            type: 'DAT_HANG',
                            key: this.props.item.key,
                            sl: this.state.soluong,
                        }, alert(JSON.stringify(this.props.arrtong))
                        )}
                        style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >

                        <View style={{
                            marginBottom: 25,
                            flexDirection: 'row',
                            width: 250,
                            height: 45,
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
                                    height: 30,
                                    width: 30
                                }}
                                source={require('../../../image/shopping_cart.png')}
                            />
                            <Text style={{
                                color: 'white',
                                marginLeft: 5,
                                fontSize: 18,
                            }}>
                                Đặt hàng
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

function mapStateToProps(state) {
    return {
        arrData: state.arrayData,
        arrtong: state.arr
    };
}

export default connect(mapStateToProps)(FlatListItem);

