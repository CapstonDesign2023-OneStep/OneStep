
import { StyleSheet,Dimensions } from 'react-native';
import { Light_Gray,BLACK_COLOR,GREEN_COLOR,Line_COLOR,Dark_Gary } from '../../../utils/color';
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

    },

    //글작성 디자인
    writeView:{
        //borderWidth:1,
        flex:9,
        paddingHorizontal:'5%',
        paddingVertical:'5%'
    },
    buttonView:{
        //borderWidth:1,
        flex:1,
        paddingHorizontal:'5%'
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
});