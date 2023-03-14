import { StyleSheet } from 'react-native';
import { Light_Gray,BLACK_COLOR,GREEN_COLOR,Line_COLOR } from '../../../utils/color';
export const styles = StyleSheet.create({

    listItemView:{
        //borderWidth:1,
        marginHorizontal:'3%',
        paddingVertical:'2%',
        flexDirection:'row',
        marginBottom:'2%',
        borderBottomColor:Line_COLOR,
        borderBottomWidth:1,
    },
    imageView:{
        
        //borderWidth:1,
    },
    contentView:{
        flex:1,
       //borderWidth:1,
        paddingHorizontal:'3%',
    },
    topView:{
        flex:1,
        flexDirection:'row'
    },
    titleView:{
        flex:1.5,
    },
    bottomView:{
        flex:1,
        flexDirection:'row'
    },
    writeButton:{
        top:'80%',
        left:'85%'
    }
});