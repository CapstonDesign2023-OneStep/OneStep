import React, { Component } from 'react';
import { View,Text,ScrollView, TouchableOpacity } from 'react-native';

import { template } from "../styles/template/page";
import {styles} from "../styles/screens/login/member_register";

import { BLUE_COLOR, Dark_Gary, GREEN_COLOR, Light_BLUE, Light_GREEN ,Light_Gray} from '../utils/color';
import Swiper from 'react-native-swiper'
import { TextInput } from 'react-native-gesture-handler';
class MemberRegister extends Component {
    constructor(props) {
        super(props);
        this.state={
            nickName:'',
            birthDate:'',
            type:1,
            address:'',

            email:'',
            passwd:'',
            passwdok:'',

            phoneNum:'',
        
            validForm:false, //유효성 검사
        }
    }
     //입력값 유효성 검사
     onValueChange = (value) => {
        this.setState(value,()=>{
            let isValidForm=true;
            if(this.state.nickName.trim().length==0){
                isValidForm=false;
            }
            if(this.state.birthDate.trim().length==0){
                isValidForm=false;
            }
            if(this.state.email.trim().length==0){
                isValidForm=false;
            }
            if(this.state.passwd.trim().length==0){
                isValidForm=false;
            }
            if(this.state.passwdok.trim().length==0){
                isValidForm=false;
            }
            if(this.state.phoneNum.trim().length==0){
                isValidForm=false;
            }
            this.setState({validForm:isValidForm})
        })
    }

    ordinalButtonClicked=()=>{
        this.setState({type:1, })
    }
    companionButtonClicked=()=>{
        this.setState({type:2,})
    }
    renderPagination(index,total,context){
        return(
            <View style={{position:'absolute',left:'45%'}}>
                <Text style={styles.titleText}><Text style={[styles.titleText,{color:GREEN_COLOR}]}>{index+1}</Text> / {total}</Text>
            </View>
        )
    }
    render() {
        
        return (
         <View style={[template.total_container,{paddingVertical:'5%'}]}>
           
           
            <Swiper  
                loop={false}  showsButtons={true} showsPagination={true} renderPagination={this.renderPagination}>
            <View style={[template.container,{paddingTop:'5%'}]}>
                <Text style={[styles.titleText,{marginBottom:'5%',color:Dark_Gary,fontWeight:'100'}]}>정보를 입력하면 더 정확한 서비스를 제공받을 수 있어요</Text>
                <Text style={styles.titleText}>닉네임은</Text>      
                    <TextInput style={[template.textInput]}
                        placeholder="닉네임 입력 (최대 8자)"
                        returnKeyType="next"
                        onChangeText={(value) => {this.onValueChange({nickName:value})}} 
                        
                            />

                <Text style={styles.titleText}>생년월일</Text>
                    <TextInput style={template.textInput}
                                placeholder="YYYYMMDD"
                                returnKeyType="next"
                                onChangeText={(value) => {this.onValueChange({birthDate:value})}} 
                               
                            />
                <Text style={styles.titleText}>나는 ...</Text> 
                <View style={styles.buttonSelectView}>
                   
                
              
                    <TouchableOpacity activeOpacity={0.8} style={this.state.type==1 ? [styles.typeButton]:[styles.typeButton,{borderColor:Dark_Gary}]} onPress={this.ordinalButtonClicked}>
                        <Text style={this.state.type==1 ?[styles.typeButtonText]:[styles.typeButtonText,{color:Dark_Gary}]}>일반인</Text>
                    </TouchableOpacity>
              
               
                      <TouchableOpacity activeOpacity={0.8}  style={this.state.type==2 ? [styles.typeButton]:[styles.typeButton,{borderColor:Dark_Gary}]}onPress={this.companionButtonClicked}>
                      <Text style={this.state.type==2 ?[styles.typeButtonText]:[styles.typeButtonText,{color:Dark_Gary}]}>반려인</Text>
                  </TouchableOpacity>
                </View>
                
                <Text style={styles.titleText}>거주지</Text>
                
               
            </View>
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
                                placeholder="이메일 입력"
                                returnKeyType="next"
                                onChangeText={(value) => {this.onValueChange({email:value})}} 
                            />
                <Text style={styles.titleText}>비밀번호</Text>
                    <TextInput style={template.textInput}
                                placeholder="비밀번호 입력"
                                returnKeyType="next"
                                onChangeText={(value) =>{this.onValueChange({passwd:value})}} 
                                secureTextEntry={true}
                            />
                    <TextInput style={[template.textInput,{marginBottom:'15%'}]}
                                placeholder="비밀번호 재입력"
                                returnKeyType="next"
                                onChangeText={(value) =>{this.onValueChange({passwdok:value})}} 
                                secureTextEntry={true}
                            />
                <Text style={styles.titleText}>휴대폰</Text>
                        <TextInput style={[template.textInput,{marginBottom:'15%'}]}
                                    placeholder="'-'빼고 숫자만 입력"
                                    returnKeyType="next"
                                    onChangeText={(value) => {this.onValueChange({phoneNum:value})}} 
                                />

                {this.state.validForm ?  <TouchableOpacity activeOpacity={0.8} style={[template.button]} >
                <Text style={template.buttonText}>가입완료</Text>
                </TouchableOpacity> :
                <TouchableOpacity activeOpacity={0.8} style={[template.button,{backgroundColor:Light_Gray}]} >
                <Text style={template.buttonText}>가입완료</Text>
                </TouchableOpacity>    } 
            </View>
         
            </Swiper>
            
          
        </View>
        );
    }
}
export default MemberRegister;