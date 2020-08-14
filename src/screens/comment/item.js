import React from 'react';
import Color from '../../theme/color';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';


export default function Item ({item}){
    return(
        <View style={styleItem.container}>
            <Text>{item.comment}</Text>
        </View>
    );
}
const styleItem = StyleSheet.create({
    container:{
        height:40,
        borderRadius:20,
       backgroundColor:Color.Gray,
       margin:8,
       justifyContent:'center',
       paddingLeft:20
    },
})
