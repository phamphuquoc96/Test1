/** @format */
import React from 'react';
import {createStore} from 'redux';
import {arrayListData, arrDonHang} from "../../src/data";
import DonHangDaGui from '../components/main/DonHangDaGui';

const defaultState = {
    arrayData: arrayListData,
    arrayDataServer: [],
    arr: [],
    arrHangDaGui: [],
    filternavigation: 'SAN_PHAM',
    titleheader: 'Sản phẩm',
    islogin: false,
    arrDonHangDaGui: arrDonHang
}
const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'DAT_HANG':
            return {
                ...state,
                arr: state.arr.concat({
                    id: state.arr.length + '',
                    itemdonhang: arrayListData[action.key - 1],
                    sl: action.sl
                }),
            };
        case 'GUI_HANG':
            return {
                ...state,
                arrHangDaGui: state.arrHangDaGui.concat({
                    id: state.arrHangDaGui.length + '',
                    madh: 'M004-' + action.mdate,
                    ngaydathang: action.mdate,
                    thanhtien: action.mtien,
                    donhang: action.arrdonhang
                }),
                arr: []
            };
        case 'FILTER_SAN_PHAM':
            return {
                ...state,
                filternavigation: 'SAN_PHAM',
                titleheader: 'Sản phẩm',
            };
        case 'FILTER_CHUA_GUI':
            return {
                ...state,
                filternavigation: 'CHUA_GUI',
                titleheader: 'Đ.Hàng chưa gửi',
            };
        case 'FILTER_DA_GUI':
            return {
                ...state,
                filternavigation: 'DA_GUI',
                titleheader: 'Đ.Hàng đã gữi',
                filterFlatlist: DonHangDaGui
            };
        case 'FILTER_THONG_TIN':
            return {
                ...state,
                filternavigation: 'THONG_TIN',
                titleheader: 'Thông tin'
            };
        case 'LOGIN':
            return {
                ...state,
                islogin: true
            };
        case 'TIM_KIEM':
            if (action.tukhoa.length < 1) {
                return {
                    ...state,
                    arrayData: arrayListData,
                }
            } else {
                return {
                    ...state,
                    arrayData: state.arrayData.filter(item => item.imagename.includes(action.tukhoa))
                }
            };
        case 'LOAD_DATA_FROM_SERVER':
            return{
                ...state,
                arrayDataServer: action.arrdataserver
            };
        default:
            break;
    }
    return state
}
const store = createStore(reducer)
export default store;