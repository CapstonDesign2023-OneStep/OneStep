import { StyleSheet } from 'react-native';
import { Light_Gray,BLACK_COLOR,GREEN_COLOR,Line_COLOR } from '../../../utils/color';
export const w_styles = StyleSheet.create({

    searchBarView:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:Line_COLOR,
        borderRadius:10,
        paddingHorizontal:'5%',
        marginHorizontal:'10%',
        height:'8%'
    },
    searchTextInput:{
       marginLeft:'5%',
       includeFontPadding:false,
    },
    tabBarView:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:'2%',
        marginHorizontal:'5%',
        borderBottomWidth:1,
        borderColor:Line_COLOR,
        height:'9%'
    },
    tabBatButton:{
        marginHorizontal:'2%',
    }
});