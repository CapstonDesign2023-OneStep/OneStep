import React, { Component } from 'react';
import { View,Text,ScrollView,StyleSheet} from 'react-native';

import { Calendar } from 'react-native-calendars';
import { template } from "../styles/template/page";

class TrailNote extends Component {
    constructor(props) {
        super(props);
    }
  
    render() {
        return (
        <View style={template.total_container}>
            <Calendar style={styles.calendar} />
            
       </View>
        );
    }
}
export default TrailNote;

const styles = StyleSheet.create({
    calendar: {
      borderBottomWidth: 1,
      borderBottomColor: '#e0e0e0',
    }
  });
  