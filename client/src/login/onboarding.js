import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ImageBackground} from 'react-native';

import { template } from "../styles/template/page";
import {styles} from "../styles/screens/login/onboarding";

import { BLUE_COLOR, GREEN_COLOR } from '../utils/color';
import Swiper from 'react-native-web-swiper';
import { color } from 'react-native-reanimated';
import { ScrollView } from 'react-native-gesture-handler';

class OnBoarding extends Component {
    constructor(props) {
        super(props);
    }
  
    goMemberRegisterScreen=()=>{
        this.props.navigation.navigate("MemberRegister");
    }
    goLoginScreen=()=>{
        this.props.navigation.navigate("Login");
    }
    render() {
        return (
           
        <View style={template.total_container}>
          
            <View style={styles.onboardingView}>
                <Swiper
                    controlsProps={{prevPos:false,nextPos:false,dotsWrapperStyle:{color:GREEN_COLOR}, dotActiveStyle:{backgroundColor:BLUE_COLOR,width:15,}}}>
                    <View>
                        <ImageBackground source={require('../images/logo.png')} style={{width:'100%',height:'65%'}} ></ImageBackground>
                        <Text style={[styles.titleText,{color:GREEN_COLOR}]}>한걸음</Text>
                        <Text style={[styles.titleText,{marginBottom:'3%',fontSize:25}]}>내딛어볼까요?</Text>
                        <Text style={{ marginHorizontal:'10%',fontSize:15}}>우리 동네 산책로 한눈에 보자 </Text>
                    </View>
                    <View>
                        <Text>산책코스 추천</Text>
                    </View>
                    <View>
                        <Text>커뮤니티, 걷기 기록</Text>
                    </View>
                </Swiper>

            </View>
            <View style={styles.buttonView}>
                <TouchableOpacity style={[styles.button,{backgroundColor:GREEN_COLOR}]} activeOpacity={0.8} onPress={this.goMemberRegisterScreen}>
                    <Text style={[styles.buttonText,{color:'white'}]}>회원가입</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={this.goLoginScreen}>
                    <Text style={styles.buttonText} >로그인</Text>
                </TouchableOpacity>
            </View>
            
       </View>
     
        );
    }
}
export default OnBoarding;