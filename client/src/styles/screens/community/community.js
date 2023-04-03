
import { StyleSheet,Dimensions } from 'react-native';
import { Light_Gray,BLACK_COLOR,GREEN_COLOR,Line_COLOR,Dark_Gary } from '../../../utils/color';
const ScreenHeight=Dimensions.get('window').height;
const ScreenWidth=Dimensions.get('window').width;
export const styles = StyleSheet.create({
    writeButton:{
        width:50,
        height:50,
        borderWidth:1,
        borderColor:GREEN_COLOR,
        backgroundColor:GREEN_COLOR, 
        borderRadius:20,
        top:'88%',
        left:'83%',
        position:'absolute',
        justifyContent:'center',
        alignItems:'center',
        elevation:10,
        zIndex:999,
    },
    listView:{
        //borderWidth:1,
        flex:1,
        paddingHorizontal:'2%',
        paddingVertical:'3%',
        zIndex:-1,
        backgroundColor:'transparent',
        pointerEvents:'none'
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

    },

    //글작성 디자인
    writeView:{
        //borderWidth:1,
        flex:8,
        paddingHorizontal:'5%',
        paddingVertical:'5%'
    },
    buttonView:{
        //borderWidth:1,
        flex:2,
        paddingHorizontal:'5%',
        paddingVertical:'3%'
    },
    write_textInput:{
        borderBottomWidth:1,
        borderBottomColor:Dark_Gary,
        borderRadius:5,
         
    },
    communityKind_picker:{
        backgroundColor: 'white',
        marginVertical: '3%',
        paddingVertical:'2%',
        paddingHorizontal: 20,
        height: 70,
        borderRadius: 10,
        borderColor: Light_Gray,
        borderWidth: 2,
    },
    camera_btn: {
        width: 50,
        height: 50,
        backgroundColor: "#F1F1F3",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginBottom:'2%',
      },
});