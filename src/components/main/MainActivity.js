import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import Hearder from './Header';
import FlatListData from './FlatListData';
import FlatListDonHang from './FlatListDonHang';
import DonHangDaGui from './DonHangDaGui';
import {connect} from 'react-redux';


//create componets
class MainActivity extends Component {
    setcolor(statusname) {
        const {filterlist} = this.props;
        if (statusname === filterlist) {
            return {
                color: '#ff9c10',
                fontSize: 10,
                marginTop: 5
            }
        } else {
            return styles.buttonStyle;
        }
    }

    setsrcforimage(imagename, statusname) {
        const {filterlist} = this.props;
        if (statusname === filterlist) {
            switch (filterlist) {
                case 'SAN_PHAM':
                    return require('../../../image/gift_ischeck.png');
                    break;
                case 'CHUA_GUI':
                    return require('../../../image/shopping_ischeck.png');
                    break;
                case 'DA_GUI':
                    return require('../../../image/clipboard_ischeck.png');
                    break;
                case 'THONG_TIN':
                    return require('../../../image/man_ischeck.png');
                    break;
                default :
                    return imagename;
                    break;
            }
        } else {
            return imagename;
        }
    }

    setfilterData(actitonType) {
        this.props.dispatch({
            type: actitonType
        });
    }

    setFlatList() {
        const {filterlist} = this.props;
        switch (filterlist) {
            case 'SAN_PHAM':
                return <FlatListData/>;
                break;
            case 'CHUA_GUI':
                return <FlatListDonHang/>;
                break;
            case 'DA_GUI':
                return null;
                break;
            case 'THONG_TIN':
                return null;
                break;
            default :
                break;
        }
    }

    render() {
        return (
            <View style={{flex: 1, flexDirection: 'column'}}>
                <View style={{flex: 10}}>
                    <Hearder
                        nametoview={this.props.headername}/>
                </View>
                <View style={{flex: 80}}>
                    {/*{this.setFlatList()}*/}
                    <DonHangDaGui/>
                </View>
                <View style={{flex: 10, flexDirection: 'row'}}>
                    <View style={{
                        flex: 25,
                        // backgroundColor: '#34ffd8'
                    }}>
                        <TouchableOpacity
                            onPress={() => this.setfilterData('FILTER_SAN_PHAM')}
                            style={{flex: 1}}>
                            <View
                                style={{
                                    flex: 1,
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                <Image
                                    style={{
                                        width: 30,
                                        height: 30
                                    }}
                                    source={this.setsrcforimage(require('../../../image/gift.png'), 'SAN_PHAM')}/>
                                <Text style={this.setcolor('SAN_PHAM')}>Sản phẩm</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        flex: 25,
                        // backgroundColor: '#ff6296'
                    }}>
                        <TouchableOpacity
                            onPress={() => {
                                this.setfilterData('FILTER_CHUA_GUI')
                            }}
                            style={{flex: 1}}>
                            <View
                                style={{
                                    flex: 1,
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                <Image
                                    style={{
                                        width: 30,
                                        height: 30
                                    }}
                                    source={this.setsrcforimage(require('../../../image/shopping.png'), 'CHUA_GUI')}/>
                                <Text style={this.setcolor('CHUA_GUI')}>Đ.Hàng chưa gửi</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        flex: 25,
                        // backgroundColor: '#cb43ff'
                    }}>
                        <TouchableOpacity
                            onPress={() => this.setfilterData('FILTER_DA_GUI')}
                            style={{flex: 1}}>
                            <View
                                style={{
                                    flex: 1,
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                <Image
                                    style={{
                                        width: 30,
                                        height: 30
                                    }}
                                    source={this.setsrcforimage(require('../../../image/clipboard.png'), 'DA_GUI')}/>
                                <Text style={this.setcolor('DA_GUI')}>Đ.Hàng đã gửi</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        flex: 25,
                        // backgroundColor: '#e3d7ff'
                    }}>
                        <TouchableOpacity
                            onPress={() => {this.setfilterData('FILTER_THONG_TIN')}}
                            style={{flex: 1}}>
                            <View
                                style={{
                                    flex: 1,
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                <Image
                                    style={{
                                        width: 30,
                                        height: 30
                                    }}
                                    source={this.setsrcforimage(require('../../../image/man.png'), 'THONG_TIN')}/>
                                <Text style={this.setcolor('THONG_TIN')}>Thông tin</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const
    styles = StyleSheet.create
    ({
        buttonStyle: {
            color: '#000000',
            fontSize: 10,
            marginTop: 5
        },
    })

function mapStateToProps(state) {
    return {
        filterlist: state.filternavigation,
        headername: state.titleheader,
        arrtong: state.arr,
        myFlatList: state.filterFlatlist
    };
}

export default connect(mapStateToProps)

(
    MainActivity
)
;