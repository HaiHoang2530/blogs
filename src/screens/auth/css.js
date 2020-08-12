import {StyleSheet} from 'react-native';
import Colors from '../../theme/color'

const StyleWelCome = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: Colors.black,
    },
    viewImg:{
        flex:2,
        justifyContent:'flex-end',
        alignItems:'center',
    },
    viewButton:{
        flex:3,
        margin:16,
        justifyContent:'flex-end'
    },
    image:{
        height:200,
        width:200,
    },
    touchableTT :{
        backgroundColor:Colors.green,
        height:40,
        justifyContent:'center',
        alignItems:'center',
        marginTop:16,
        borderRadius:20
    }

});

export {
    StyleWelCome,
}