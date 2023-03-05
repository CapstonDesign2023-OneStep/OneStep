import React, { Component } from 'react';
import { View,Text,ScrollView } from 'react-native';

import { template } from "../styles/template/page";

class OrdinaryTrails extends Component {
    constructor(props) {
        super(props);
    }
  
    render() {
        return (
        <View style={template.total_container}>
            <ScrollView>
            <Text>일반인 산책로</Text>
            </ScrollView>
       </View>
        );
    }
}
export default OrdinaryTrails;