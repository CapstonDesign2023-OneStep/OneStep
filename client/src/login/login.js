import React, { Component } from 'react';
import { View,Text,ScrollView, TouchableOpacity,Keyboard } from 'react-native';

import { template } from "../styles/template/page";
import { styles } from '../styles/screens/login/login';
import { TextInput } from 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';
import IconCheck from 'react-native-vector-icons/MaterialIcons';
import { BLACK_COLOR, Dark_Gary, GREEN_COLOR, Light_Gray } from '../utils/color';
class Login extends Component {
    constructor(props) {
        super(props);

        this.passwordRef=React.createRef();
        this.state={
            email:'',
            passWd:'',
            autoLoginChecked:false,
            validForm:false, //유효성 검사
        }
    }
     //자동로그인
     componentDidMount() {
      
    }

    componentWillUnmount() {
      
    }

   
    //로그인 버튼 클릭
    loginButtonClicked=()=>{
        this.callAddLoginAPI().then((response)=>{
            console.log('로그인여부',response)
        })
        this.props.navigation.navigate("TabHome");
    }
    async callAddLoginAPI(){
        const logininfo={
            email:this.state.email,
            passWd:this.state.passWd
        }
        let url="http://localhost:3000/login";
        let options={
            method:'POST',
            mode:'cors',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json;charset=UTF-8'
            },
            body: JSON.stringify({
                email:this.state.email,
                passWd:this.state.passWd
            })
        }
        let response = await fetch(url, options);
        
        if (response.ok) {
            return response.json();
            // do something with data
        } 
    }
    //자동 로그인 버튼
    autoLoginRadioButtonChecked=()=>{
        this.setState({autoLoginChecked:!this.state.autoLoginChecked})
    }
    

    //회원가입으로 
    goMemberRegisterScreen=()=>{
        this.props.navigation.navigate('MemberRegister');
    }
    //비밀번호 찾기로
    goFindPWScreen=()=>{
        this.props.navigation.navigate('FindPW');
    }
     //입력값 유효성 검사
     onValueChange = (value) => {
        this.setState(value,()=>{
            let isValidForm = true;
            if (this.state.email.trim().length == 0) { // 조건 필요시 추가
                isValidForm = false;
            }
            if (this.state.passWd.trim().length == 0) {
                isValidForm = false;
            }
            console.log("isValidForm", isValidForm);
            this.setState({ validForm: isValidForm });
        })
       
    }
    render() {
        console.log('자동로그인',this.state.autoLoginChecked)
        return (
            <View style={template.total_container}>
                <View style={template.container}>
                    <View style={styles.textInputView}>
                        <TextInput style={template.textInput}
                            placeholder="이메일"
                            returnKeyType="next"
                            onSubmitEditing={()=>{this.passwordRef.focus();}}
                            onChangeText={(value) => {this.onValueChange({email:value})}} 
                        />
                        <TextInput style={template.textInput}
                            ref={(c)=>{this.passwordRef=c;}}
                            placeholder="비밀번호"
                            onChangeText={(value)=>{this.onValueChange({passWd:value})}}
                            secureTextEntry={true}
                        />
                        <TouchableOpacity activeOpacity={0.8} style={{flexDirection:'row',alignItems:'center'}} onPress={this.autoLoginRadioButtonChecked}>
                            <IconCheck name={this.state.autoLoginChecked ? "check-box" : "check-box-outline-blank"} size={25} color={GREEN_COLOR}/>
                            <Text style={{color:BLACK_COLOR}}>  자동 로그인</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttonView}>
                        {this.state.validForm ? ( <TouchableOpacity activeOpacity={0.8} style={template.button} onPress={this.loginButtonClicked}>
                            <Text style={template.buttonText}>로그인</Text>
                        </TouchableOpacity>):
                        (<TouchableOpacity activeOpacity={0.8} style={[template.button,{backgroundColor:Light_Gray}]}>
                            <Text style={template.buttonText}>로그인</Text>
                        </TouchableOpacity>)}
                       

                        <View style={{flexDirection:'row'}}>
                            <TouchableOpacity onPress={this.goFindPWScreen}>
                                <Text>비밀번호 찾기  |  </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.goMemberRegisterScreen}>
                                <Text>회원가입</Text>
                            </TouchableOpacity>
                        </View>
                        
                    </View>
                </View>
            </View>
        );
    }
}
export default Login;