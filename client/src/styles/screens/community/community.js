<<<<<<< HEAD
import { StyleSheet,Dimensions } from 'react-native';
import { Light_Gray,BLACK_COLOR,GREEN_COLOR,Line_COLOR } from '../../../utils/color';
const ScreenHeight=Dimensions.get('window').height;
const ScreenWidth=Dimensions.get('window').width;
export const styles = StyleSheet.create({
    writeButton:{
        top:'88%',
        left:'83%',
        position:'absolute'
    },
    listView:{
        //borderWidth:1,
        flex:1,
        paddingHorizontal:'2%',
        paddingVertical:'3%'
    },
    itemView:{
        borderColor:Line_COLOR,
        borderBottomWidth:1,
        height:ScreenHeight/8,
        flexDirection:'row',
        marginBottom:'3%',
        
    },
    imageView:{
        flex:1,
        //borderWidth:1,
    },
    contentView:{
        flex:4,
        //borderWidth:1,
        paddingHorizontal:'2%'
    },
    topView:{
        flex:1,
        //borderWidth:1,
        flexDirection:'row',
    },
    titleView:{
        flex:1,
        //borderWidth:1,
    },
    bottomView:{
        flex:1,
        //borderWidth:1,
        flexDirection:'row',
=======
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
>>>>>>> bfb0bc5ccd90478f096d807b116092978049aed6
    }
});