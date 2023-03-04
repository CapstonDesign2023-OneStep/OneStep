import React, { Component } from 'react';
import { View,Text,ScrollView, TouchableOpacity } from 'react-native';

import { template } from "../styles/template/page";
import {styles} from "../styles/screens/login/member_register";

import { BLUE_COLOR, Dark_Gary, GREEN_COLOR, Light_BLUE, Light_GREEN ,Light_Gray} from '../utils/color';
import Swiper from 'react-native-web-swiper';
import { TextInput } from 'react-native-gesture-handler';
class MemberRegister extends Component {
    constructor(props) {
        super(props);
        this.state={
            name:'',
            id:'',
            passwd:'',
            passwdok:'',

            type:1,
        
          
        }
    }
    ordinalButtonClicked=()=>{
        this.setState({type:1, })
    }
    companionButtonClicked=()=>{
        this.setState({type:2,})
    }
    render() {
        console.log('type',this.state.type)
        return (
         <View style={[template.total_container,{paddingVertical:'5%'}]}>
           
            <Swiper
                controlsProps={{dotsPos:'top',prevPos:'top-left',nextPos:'top-right', prevTitle:'이전',nextTitle:'다음',prevTitleStyle:{color:GREEN_COLOR},
                nextTitleStyle:{color:GREEN_COLOR},dotActiveStyle:{backgroundColor:GREEN_COLOR,width:15,height:15,borderRadius:10,}
                }}>

            <View style={[template.container,{paddingTop:'5%'}]}>
                {/* <Text style={styles.titleText}>이름</Text>
                
                <TextInput style={template.textInput}
                    placeholder="    이름 입력"
                    returnKeyType="next"
                    onChangeText={(value) => this.setState({ name: value })} 
                    onEndEditing={(event) => this.onValueChange()}
                        /> */}

                <Text style={styles.titleText}>이메일</Text>
                    <TextInput style={template.textInput}
                                placeholder="    이메일 입력"
                                returnKeyType="next"
                                onChangeText={(value) => this.setState({ id: value })} 
                                onEndEditing={(event) => this.onValueChange()}
                            />
                <Text style={styles.titleText}>비밀번호</Text>
                    <TextInput style={template.textInput}
                                placeholder="    비밀번호 입력"
                                returnKeyType="next"
                                onChangeText={(value) => this.setState({ id: value })} 
                                onEndEditing={(event) => this.onValueChange()}
                            />
                    <TextInput style={[template.textInput,{marginBottom:'15%'}]}
                                placeholder="    비밀번호 재입력"
                                returnKeyType="next"
                                onChangeText={(value) => this.setState({ id: value })} 
                                onEndEditing={(event) => this.onValueChange()}
                            />
                <Text style={styles.titleText}>생년월일</Text>
                    <TextInput style={template.textInput}
                                placeholder="    YYYYMMDD"
                                returnKeyType="next"
                                onChangeText={(value) => this.setState({ id: value })} 
                                onEndEditing={(event) => this.onValueChange()}
                            />
                <Text style={styles.titleText}>휴대폰</Text>
                    <TextInput style={template.textInput}
                                placeholder="    '-'빼고 숫자만 입력"
                                returnKeyType="next"
                                onChangeText={(value) => this.setState({ id: value })} 
                                onEndEditing={(event) => this.onValueChange()}
                            />
                              
            </View>
            <View style={[template.container,{paddingTop:'5%'}]}>
                <Text style={[styles.titleText,{marginBottom:'5%',color:Dark_Gary,fontWeight:'100'}]}>정보를 입력하면 더 정확한 서비스를 제공받을 수 있어요</Text>
                <Text style={styles.titleText}>닉네임은</Text>      
                    <TextInput style={[template.textInput,{marginBottom:'15%'}]}
                        placeholder="    닉네임 입력 (최대 8자)"
                        returnKeyType="next"
                        onChangeText={(value) => this.setState({ name: value })} 
                        onEndEditing={(event) => this.onValueChange()}
                            />
                <Text style={styles.titleText}>나는 ...</Text> 
                <View style={styles.buttonSelectView}>
                   
                
                {this.state.type==1 && <>
                    <TouchableOpacity style={styles.typeButton} onPress={this.ordinalButtonClicked}>
                        <Text style={[styles.typeButtonText]}>일반인</Text>
                    </TouchableOpacity>
                </>}
               
                      <TouchableOpacity  style={styles.typeButton} onPress={this.companionButtonClicked}>
                      <Text style={styles.typeButtonText}>반려인</Text>
                  </TouchableOpacity>
                 
                    
                  
                </View>
                <Text style={styles.titleText}>거주지</Text>
                <TouchableOpacity activeOpacity={0.8} style={[template.button,{backgroundColor:Light_Gray}]} >
                            <Text style={template.buttonText}>가입완료</Text>
                </TouchableOpacity>
            </View>
            </Swiper>
            
          
        </View>
        );
    }
}
export default MemberRegister;