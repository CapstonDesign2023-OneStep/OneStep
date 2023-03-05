import { StyleSheet } from 'react-native';
import { Light_Gray,BLACK_COLOR,GREEN_COLOR, Dark_Gary } from '../../../utils/color';
export const styles = StyleSheet.create({

    profileView:{
        //borderWidth:1,
        flexDirection:'row',
        alignItems:'center',
        marginBottom:'10%',
        backgroundColor:'#EBEBEB',
        paddingLeft:'5%',
        paddingVertical:'2%',
        borderRadius:10,
        //justifyContent:'center'
    },
    profileImageView:{
        borderColor:Dark_Gary,
        //backgroundColor:Light_Gray,
        borderWidth:1,
        borderRadius:30,
        paddingHorizontal:5,
        paddingVertical:5,
        alignItems:'center',
        justifyContent:'center',
    },
    menuView:{
        borderWidth:1,
        borderRadius:10,
        borderColor:Light_Gray,
        paddingHorizontal:'5%',
        paddingLeft:'5%',
        paddingVertical:'2%',
        marginBottom:'5%',
        
    },
    menuView2:{
       
        justifyContent:'center',
        paddingVertical:'2%',
        marginBottom:'5%',
        flexDirection:'row',
    },
    menuTextView:{
        borderBottomColor:Light_Gray,
        borderBottomWidth:1, 
        width:'80%'
    },
    buttonStyle2:{
        borderWidth:1,
        borderColor:Light_Gray,
        borderRadius:10,
        paddingVertical:'2%',
        width:'25%',
        alignItems:'center',
        marginHorizontal:'2%'
    },
    buttonStyle:{
        //borderWidth:1,
        paddingVertical:'2%',
        flexDirection:'row',
        alignItems:'center',
    },
   
    IconStyle:{
        marginRight:'5%',
        marginBottom:'2%',
        alignItems:'center',
        justifyContent:'center',
        
    }
});