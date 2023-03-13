import { StyleSheet,Dimensions } from 'react-native';
import { Light_Gray,BLACK_COLOR,GREEN_COLOR, Light_GREEN,Dark_Gary } from '../../../utils/color';
const ScreenHeight=Dimensions.get('window').height;
const ScreenWidth=Dimensions.get('window').width;
export const styles = StyleSheet.create({
    total_container:{
        flex:1,
        backgroundColor:GREEN_COLOR
    },
    headerView:{
        paddingLeft:'3%',
        height:'10%',
    },
    profileView:{
        //borderWidth:1,
        paddingHorizontal:'5%',
        paddingVertical:'5%',
        flexDirection:'row',
        height:ScreenHeight/4,
    },
    profileImageView:{
        borderColor:Light_Gray,
        backgroundColor:Light_Gray,
        borderWidth:1,
        borderRadius:30,
        paddingHorizontal:5,
        paddingVertical:15,
        height:'50%',
        alignItems:'center',
        justifyContent:'center',
    },
    profileTextView:{
        width:'70%',
        paddingLeft:'10%', 
        flexDirection:'row',
        //borderWidth:1,
    },
    titleView:{
        flexDirection:'row',
        
    },
    communityContentView:{
        marginRight:'5%',
     
    },
    coummunityContentItemView:{
        paddingVertical:'2%',
        flexDirection:'row',
        borderBottomColor:Light_Gray,
        borderBottomWidth:1,

    },
    trailContentView:{
        //borderWidth:1,
        flexDirection:'row',
        borderBottomColor:Light_Gray,
        //borderBottomWidth:1,
    },
    trailContentItemView:{
        //borderWidth:1,
        marginRight:'2%',
        alignItems:'center'
    },
    trailTopView:{
        
        backgroundColor:'white',
        height:ScreenHeight/3,
        paddingLeft:'5%',
        paddingVertical:'5%',
        borderTopRightRadius:20,
        borderTopLeftRadius:20,
    },
    communityTopView:{
        backgroundColor:'white',
        paddingVertical:'5%',
        paddingLeft:'5%',
        height:ScreenHeight/2.5,
    },
});