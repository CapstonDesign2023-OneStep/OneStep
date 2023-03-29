import React, { Component } from 'react';
import { View,Text,ScrollView, TouchableOpacity } from 'react-native';

import { template } from "../styles/template/page";
import {styles} from "../styles/screens/community/community";
class WriteCommunity extends Component {
    constructor(props) {
        super(props);
    }
  
    render() {
        return (
        <View style={template.total_container}>
           <View style={styles.writeView}>
          
           </View>
           <View style={styles.buttonView}>
                <TouchableOpacity style={template.button}><Text style={template.buttonText}>등록하기</Text></TouchableOpacity>
           </View>
       </View>
        );
    }
}
export default WriteCommunity;