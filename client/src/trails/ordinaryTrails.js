import React, { Component } from 'react';
import { View,Text,ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import {styles} from "../styles/screens/trails/ordinaryTrails"
import { template } from "../styles/template/page";
import IconButton from 'react-native-vector-icons/AntDesign';
import { BLACK_COLOR, Dark_Gary, GREEN_COLOR, Light_Gray } from '../utils/color';

class OrdinaryTrails extends Component {
    constructor(props) {
        super(props);
    }
  
    render() {
        return (
        <View style={template.total_container}>
            <ScrollView>
            <Text>일반인 산책로</Text>

            <TouchableOpacity style={styles.floatingButton}>
                <IconButton name={"pluscircle"} size={40} color={GREEN_COLOR}/>
            </TouchableOpacity>
            </ScrollView>
       </View>
        );
    }
}
export default OrdinaryTrails;