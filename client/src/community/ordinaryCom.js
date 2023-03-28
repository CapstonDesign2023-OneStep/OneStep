import React, { Component } from 'react';
<<<<<<< HEAD
import { View,Text,ScrollView,Image,FlatList } from 'react-native';

import { PureComponent } from 'react/cjs/react.production.min';

import { template } from "../styles/template/page";
import {styles} from "../styles/screens/community/community";
=======
import { View,Text,ScrollView, TouchableOpacity,Image } from 'react-native';

import { template } from "../styles/template/page";
import {styles} from "../styles/screens/community/community";
import { FlatList } from 'react-native-gesture-handler';
import { PureComponent } from 'react/cjs/react.production.min';
import { BLACK_COLOR, Dark_Gary,BLUE_COLOR} from '../utils/color';

import IconButton from 'react-native-vector-icons/AntDesign';
>>>>>>> bfb0bc5ccd90478f096d807b116092978049aed6
import ListItem from './listItem';
class OrdinaryCommunity extends Component {
    constructor(props) {
        super(props);
<<<<<<< HEAD
        this.state={
            
            ordinalCom:[{user:"삶은계란", title:"오늘 날씨 최고",kind:1,heart:23, comments:3},
            {user:"포피맘", title:"산책로 추천",kind:2,heart:20, comments:10},
            {user:"만두", title:"오늘 산책 인증",kind:2,heart:15, comments:5},
            {user:"귀요미", title:"포피랑 산책",kind:2,heart:10, comments:5},
            {user:"산책킬러", title:"풍경좋은 산책로 추천",kind:1,heart:5, comments:15}]
=======

        this.state={
           

            ord_community:[{number:1, title:"오늘 날씨 최고",kind:1,heart:23, comments:3},
            {number:2, title:"반려견 산책로 추천",kind:2,heart:20, comments:10},
            {number:3, title:"오늘 산책 인증",kind:2,heart:15, comments:5},
            {number:4, title:"초코랑 산책",kind:2,heart:10, comments:5},
            {number:5, title:"풍경좋은 산책로 추천",kind:1,heart:5, comments:15}]
>>>>>>> bfb0bc5ccd90478f096d807b116092978049aed6
        }
    }
  
    render() {
        return (
<<<<<<< HEAD
       <View style={styles.listView}>
            <FlatList
                data={this.state.ordinalCom}
                renderItem={({item,index})=><ListItem index={index} item={item}
                />}/>
=======
        <View style={template.total_container}>
                <View style={styles.containerView}>
                    <TouchableOpacity style={styles.writeButton}>
                        <IconButton name="pluscircle" color={BLUE_COLOR} size={35} />
                    </TouchableOpacity>
                    <FlatList
                        data={this.state.ord_community}
                        renderItem={({item,index})=><ListItem index={index} item={item}/>}
                    />
                   
                </View>
>>>>>>> bfb0bc5ccd90478f096d807b116092978049aed6
       </View>
        );
    }
}
<<<<<<< HEAD
export default OrdinaryCommunity;
=======
export default OrdinaryCommunity

>>>>>>> bfb0bc5ccd90478f096d807b116092978049aed6

