import React, { Component } from 'react';

import { View,Text,ScrollView,Image,FlatList } from 'react-native';

import { PureComponent } from 'react/cjs/react.production.min';

import { template } from "../styles/template/page";
import {styles} from "../styles/screens/community/community";

import ListItem from './listItem';
class OrdinaryCommunity extends Component {
    constructor(props) {
        super(props);

        this.state={
            
            ordinalCom:[{user:"삶은계란", title:"오늘 날씨 최고",kind:1,heart:23, comments:3},
            {user:"포피맘", title:"산책로 추천",kind:2,heart:20, comments:10},
            {user:"만두", title:"오늘 산책 인증",kind:2,heart:15, comments:5},
            {user:"귀요미", title:"포피랑 산책",kind:2,heart:10, comments:5},
            {user:"산책킬러", title:"풍경좋은 산책로 추천",kind:1,heart:5, comments:15}]

        }
    }
  
    render() {
        return (

       <View style={styles.listView}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={this.state.ordinalCom}
                renderItem={({item,index})=><ListItem index={index} item={item}
                />}/>

       </View>
        );
    }
}

export default OrdinaryCommunity;


