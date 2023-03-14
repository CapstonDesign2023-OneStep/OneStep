import React, { Component } from 'react';
import { View,Text,ScrollView,FlatList } from 'react-native';

import { template } from "../styles/template/page";
import {styles} from "../styles/screens/community/community";
import ListItem from './listItem';
class CompanionTrails extends Component {
    constructor(props) {
        super(props);
        this.state={
           

            com_community:[{number:1, title:"포피와 함께 산책 인증",kind:1,heart:23, comments:3},
            {number:2, title:"반려견 산책로 추천",kind:2,heart:20, comments:10},
            {number:3, title:"오늘 산책 인증",kind:2,heart:15, comments:5},
            {number:4, title:"초코랑 산책",kind:2,heart:10, comments:5},
            {number:5, title:"풍경좋은 산책로 추천",kind:1,heart:5, comments:15}]
        }
    }
  
    render() {
        return (
        <View style={template.total_container}>
             <View style={styles.containerView}>
                    <FlatList
                        data={this.state.com_community}
                        renderItem={({item,index})=><ListItem index={index} item={item}/>}
                    />
                   
                </View>
       </View>
        );
    }
}
export default CompanionTrails;