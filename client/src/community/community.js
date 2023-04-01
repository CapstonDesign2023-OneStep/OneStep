import React, { Component } from 'react';
import { View,Text,ScrollView,TextInput,TouchableOpacity, TouchableNativeFeedback } from 'react-native';
import {w_styles} from "../styles/screens/trails/tab_bar";
import {styles} from "../styles/screens/community/community";
import { template } from '../styles/template/page';
import IconFontAwe from "react-native-vector-icons/FontAwesome";

import { GREEN_COLOR, Light_GREEN,Dark_Gary } from '../utils/color';

import CompanionCommunity from './companionCom';
import OrdinaryCommunity from './ordinaryCom';
class Community extends Component {
    constructor(props) {
        super(props);
        this.state={visible:1}
    }
   ordinatyClicked=()=>{
        this.setState({visible:1})
   }
   companionClicked=()=>{
        this.setState({visible:2})
   }
   search=(value)=>{
    console.log('selected data:', value);

   }
   goWriteCommunityScreen=()=>{
    this.props.navigation.navigate('WriteCommunity');
   }
    render() {
        return (
          <>
          <View style={{flex:1}}>
         

            <TouchableOpacity style={styles.writeButton} activeOpacity={0.8} onPress={this.goWriteCommunityScreen}>
                <IconFontAwe name="plus-circle" color={GREEN_COLOR} size={50} />
            </TouchableOpacity>
          
           
            <View style={w_styles.searchBarView}>
                <IconFontAwe name="search" color={Dark_Gary} size={20} />
                <TextInput style={w_styles.searchTextInput}
                    onChange={(value)=>this.search(value.nativeEvent.text)}
                    placeholder="검색어를 입력해주세요"
                    value={this.state.title}/>
            </View>
            <View style={w_styles.tabBarView}>
                <TouchableOpacity activeOpacity={0.8} style={w_styles.tabBatButton} onPress={this.ordinatyClicked}>
                    <Text style={this.state.visible==1 ? [template.titleText,{color:GREEN_COLOR}]:template.titleText}>일반인</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} style={w_styles.tabBatButton} onPress={this.companionClicked}>
                    <Text style={this.state.visible==2 ? [template.titleText,{color:GREEN_COLOR}]:template.titleText}>반려인</Text>
                </TouchableOpacity>
            </View>
          {/*   {this.state.visible==1 && <OrdinaryCommunity/>}
            {this.state.visible==2 && <CompanionCommunity/>} */}
            </View>
            </>
        );
    }
}
export default Community;
