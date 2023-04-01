import React, { Component } from 'react';
import { View,Text,ScrollView } from 'react-native';

import { template } from "../styles/template/page";

class EditProfile extends Component {
    constructor(props) {
        super(props);
    }
  
    render() {
        return (
        <View style={template.total_container}>
            <ScrollView>
            <Text>내정보 수정</Text>
            </ScrollView>
       </View>
        );
    }
}
export default EditProfile;