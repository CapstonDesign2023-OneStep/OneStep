import { StyleSheet,Dimensions} from 'react-native';
const ScreenHeight=Dimensions.get('window').height;
const ScreenWidth=Dimensions.get('window').width;
export const template = StyleSheet.create({

    total_container:{
        flex:1,
        backgroundColor:'white',
    },
    container:{
        flex:1,
        marginTop:30,
        marginLeft:30,
        marginRight:30,
    },
    
  
});