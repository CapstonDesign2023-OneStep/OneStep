import React, { Component } from 'react';
import { View,Text,ScrollView,TouchableOpacity } from 'react-native';

import { template } from "../styles/template/page";
import {styles} from "../styles/screens/home/home";


class Home extends Component {
    constructor(props) {
        super(props);
    }
    goTrailScreen=()=>{
        this.props.navigation.navigate('GetTrails');
    }
    goCommunityScreen=()=>{
        this.props.navigation.navigate('Community');
    }
    render() {
        return (
        <View style={template.total_container}>
            <View style={styles.headerView}><Text>OneStep</Text></View>
            <ScrollView>
            <View style={styles.profileView}>

            </View>
            <View style={styles.trailTopView}>
                <View style={styles.titleView}>
                    <View style={{flex:4}}>
                    <Text style={template.titleText}>추천 산책로</Text>
                    </View>
                    <View style={{flex:1}}>
                        <TouchableOpacity onPress={this.goTrailScreen}><Text>전체보기</Text></TouchableOpacity>
                    </View>
                </View>
                
            </View>
            <View style={styles.communityTopView}>
                <View style={styles.titleView}>
                    <View style={{flex:4}}>
                        <Text style={template.titleText}>인기글 Top5</Text>
                    </View>
                    <View style={{flex:1}}>
                        <TouchableOpacity onPress={this.goCommunityScreen}><Text>전체보기</Text></TouchableOpacity>
                    </View>
                </View>
                
            </View>
            </ScrollView>
       </View>
        );
    }
}
export default Home;