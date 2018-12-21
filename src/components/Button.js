import React from 'react';
import {Text, Button} from 'react-native';

//create componenet

const Button = ( {children}) => {
    const {buttonStyle,textStyle} = styles;
    return(
        <Button
            style={buttonStyle}>
            <Text
                style={textStyle}>
                {children}
            </Text>
        </Button>
    );
};

const styles={
    textStyle:{
        color:'#feffdd',
        fontSize:16,
        fontWeight:'600',
        paddingTop:10,
        paddingBottom:10

    },
    buttonStyle:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        height:60,
        alignItems:'center',
        alignSelf:'stretch',
        backgroundColor:'#ffa600',
        borderColor:'#ffffff',
        borderRadius:5,
        borderWidth:1,
        marginRight:5,
        marginLeft:5,
        marginTop:80
    }
}

//export
export  default Button;