import React, { Component } from 'react';
import { View,Text,ScrollView,TextInput,TouchableOpacity,BackHandler } from 'react-native';
import {w_styles} from "../styles/screens/trails/tab_bar";
import { template } from '../styles/template/page';
import IconFontAwe from "react-native-vector-icons/FontAwesome";

import { GREEN_COLOR, Light_GREEN,Dark_Gary } from '../utils/color';

import OrdinaryTrails from './ordinaryTrails';
import CompanionTrails from './companionTrails';
class GetTrails extends Component {
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
    render() {
        return (
          <>
            <View style={w_styles.searchBarView}>
                <IconFontAwe name="search" color={Dark_Gary} size={20} />
                <TextInput style={w_styles.searchTextInput}
                                    placeholder="검색어를 입력해주세요"/>
            </View>
            <View style={w_styles.tabBarView}>
                <TouchableOpacity activeOpacity={0.8} style={w_styles.tabBatButton} onPress={this.ordinatyClicked}>
                    <Text style={this.state.visible==1 ? [template.titleText,{color:GREEN_COLOR}]:template.titleText}>일반인</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} style={w_styles.tabBatButton} onPress={this.companionClicked}>
                    <Text style={this.state.visible==2 ? [template.titleText,{color:GREEN_COLOR}]:template.titleText}>반려인</Text>
                </TouchableOpacity>
            </View>
            {this.state.visible==1 && <OrdinaryTrails/>}
            {this.state.visible==2 && <CompanionTrails/>}
            </>
        );
    }
}
export default GetTrails;
