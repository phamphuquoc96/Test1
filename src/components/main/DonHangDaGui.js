import React, {Component} from 'react';
import {StyleSheet, Text, Image, TextInput, View, Alert, FlatList, TouchableOpacity, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import ItemDonHangDaGui from "./ItemDonHangDaGui";

class DonHangDaGui extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View>
                <FlatList
                    data={this.props.arrData}
                    renderItem={({item, index}) => {
                        return (
                            <ItemDonHangDaGui item={item} index={index}>

                            </ItemDonHangDaGui>
                        )}}
                    keyExtractor={item => item.id}
                >
                </FlatList>
            </View>
        )
    }
}

function mapStateToProps(state) {
    return {
        // arrData: state.arrDonHangDaGui,
        arrData: state.arrHangDaGui,
    };
}

export default connect(mapStateToProps)(DonHangDaGui)