import React, {Component} from 'react';
import {StyleSheet, Text, Image, View, FlatList} from 'react-native';
import arrayListData from '../../data';

class FlatListItem extends Component {
    render() {
        return (
            <View style={{
                height: 350,
                flexDirection: 'column',
                marginTop: 10,
                marginRight: 8,
                marginLeft: 8,
                backgroundColor: '#ffffff',
                shadowOffset: {width: 0, height: 2},
                shadowRadius:2,
                borderTopRightRadius: 5,
                borderBottomEndRadius: 5,
                borderBottomLeftRadius: 5,
                borderTopLeftRadius: 5,
                shadowColor: '#000',
                shadowOpacity: 0.2,
            }}>
                <View style={{
                    flex: 85,
                    height: 300,
                    flexDirection: 'row'
                }}>
                    <View style={{
                        flex: 35,
                        // backgroundColor: '#94a201'
                    }}>
                        <Image
                            style={{flex: 1.5}}
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
                                    flexDirection: 'column'
                                }}>
                                    <Image
                                        style={{
                                            flex: 1,
                                            width: null,
                                            height: null,
                                            resizeMode: 'contain'
                                        }}
                                        source={require('../../../image/oliveshower1.png')}
                                    />
                                </View>
                                <View style={{
                                    flex: 70,
                                    // backgroundColor: '#9eff1f',
                                    flexDirection: 'column'
                                }}>

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
                                    justifyContent: 'center'
                                }}>
                                    <Text style={{color: '#ff0c03'}}>KM: </Text>
                                </View>
                                <View style={{
                                    flex: 85,
                                    // backgroundColor: '#ff6296',
                                    alignItems: 'flex-start',
                                    justifyContent: 'center'
                                }}>
                                    <Text style={{color: '#000000'}}>{this.props.item.subiamgename}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{backgroundColor: '#3adcff', flex: 15}}>

                </View>
            </View>
        )
    }
}

export default class FlatListData extends Component {
    render() {
        return (
            <View style={{
                marginTop: 5,
                backgroundColor:'#efefef'
            }}>
                <FlatList
                    data={arrayListData}
                    renderItem={({item, index}) => {
                        return (
                            <FlatListItem item={item} index={index}>

                            </FlatListItem>
                        );
                    }}
                >

                </FlatList>
            </View>
        )
    }
}