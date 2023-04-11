import { StyleSheet } from 'react-native';
import { Light_Gray,BLACK_COLOR,GREEN_COLOR, Dark_Gary,Light_BLUE,BLUE_COLOR } from '../../../utils/color';
export const styles = StyleSheet.create({
   
   titleText:{
     color:'black',
     marginBottom:'2%',
     fontWeight:"bold",
   },

   buttonSelectView:{
    //borderWidth:1,
    height:'8%',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    marginBottom:'15%'
   },

   typeButton:{
    width:'30%',
    height:'90%',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:10,
    borderColor:GREEN_COLOR,
    borderWidth:1,
    marginHorizontal:'3%'
   },

   typeButtonText:{
        color:GREEN_COLOR,
        marginBottom:'2%',
        fontWeight:"bold",
        fontSize:17,
   },
   errorMessageText:{
    
    fontSize: 13,
    color: "#FD9C91",
   },
});