import { StyleSheet,Dimensions } from 'react-native';
import { Light_Gray,BLACK_COLOR,GREEN_COLOR } from '../../../utils/color';
const ScreenHeight=Dimensions.get('window').height;
const ScreenWidth=Dimensions.get('window').width;
export const styles = StyleSheet.create({
    headerView:{
        height:'10%',
    },
    profileView:{
        borderWidth:1,
        height:ScreenHeight/4,
    },
    titleView:{
        flexDirection:'row',
    },
    trailTopView:{
        borderWidth:1,
        height:ScreenHeight/3,
        paddingLeft:'5%',
        paddingVertical:'5%'
    },
    communityTopView:{
        
        paddingVertical:'5%',
        paddingLeft:'5%',
    },
});