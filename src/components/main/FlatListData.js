import React, {Component} from 'react';
import {StyleSheet, Text, Image, TextInput, View, Alert, FlatList, TouchableOpacity, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import FlatListItem from './FlatListItem';

class FlatListData extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tukhoa: '',
        };
    }

    tikiem(tukhoa) {
        this.props.dispatch({
            type: 'TIM_KIEM',
            tukhoa: tukhoa
        })
    }

    render() {
        return (
            <ScrollView style={{
                marginTop: 5,
                backgroundColor: '#efefef',
            }}>
                <View style={{
                    height: 50,
                    marginTop: 10,
                    marginRight: 8,
                    marginLeft: 8,
                    backgroundColor: '#b9b9b9',
                    borderTopLeftRadius: 5,
                    borderTopRightRadius: 5,
                    borderBottomRightRadius: 5,
                    borderBottomLeftRadius: 5,
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                    <Image
                        style={{
                            flex: 1,
                            marginLeft: 10,
                            height: 15,
                            width: 15,
                            resizeMode: 'contain'
                        }}
                        source={require('../../../image/magnifying-glass.png')}
                    />
                    <TextInput style={{
                        marginLeft: 5,
                        flex: 8
                    }}
                               keyboardType='default'
                               placeholder='Tìm kiếm'
                               onChangeText={(text) => this.tikiem(text)}

                    />
                    <TouchableOpacity onPress={() => {
                        this.setState({tukhoa: ''})
                        alert(this.state.tukhoa)
                    }}>
                        <Image
                            style={{
                                flex: 1,
                                marginRight: 10,
                                height: 15,
                                width: 15,
                                resizeMode: 'contain'
                            }}
                            source={require('../../../image/cancel.png')}
                        />
                    </TouchableOpacity>
                </View>
                <FlatList
                    data={this.props.arrData}
                    renderItem={({item, index}) => {
                        return (
                            <FlatListItem item={item} index={index}>

                            </FlatListItem>
                        );
                    }}
                >

                </FlatList>
            </ScrollView>
        )
    }
}

function mapStateToProps(state) {
    return {
        arrData: state.arrayData,
    };
}

export default connect(mapStateToProps)(FlatListData);
