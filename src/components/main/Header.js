import React from 'react';
import {Text,View} from 'react-native';

const Hearder = (parametter) => {
    const {textStyle, viewStyle }= styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{parametter.nametoview }</Text>
        </View>
    );
};

//style css
const styles = {
    textStyle:{
        fontSize:20,
        marginLeft:20,
        color:'#000000',
        textAlign:'center',
        // backgroundColor:'#3adcff',
        position:'relative',
        elevation:1
    },
    viewStyle:{
        height:70,
        padding:15,
        alignItems:'center',
        backgroundColor:'#ffffff',
        justifyContent:'center',
        shadowOffset:{width:0,height:2},
        shadowColor:'#000',
        shadowOpacity:0.2,
        elevation: 1


    }
}
export default Hearder;