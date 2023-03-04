import React, { Component } from 'react';
import { View,Text,ScrollView, TouchableOpacity } from 'react-native';

import { template } from "../styles/template/page";
import { styles } from '../styles/screens/login/login';
import { TextInput } from 'react-native-gesture-handler';

import IconCheck from 'react-native-vector-icons/MaterialIcons';
import { BLACK_COLOR, Dark_Gary, GREEN_COLOR } from '../utils/color';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state={
            id:'',
            passwd:'',
            autoLoginChecked:false,
        }
    }
    autoLoginRadioButtonChecked=()=>{
        this.setState({autoLoginChecked:!this.state.autoLoginChecked})
    }
    goMemberRegisterScreen=()=>{
        this.props.navigation.navigate('MemberRegister');
    }
    render() {
        return (
            <View style={template.total_container}>
                <View style={template.container}>
                    <View style={styles.textInputView}>
                        <TextInput style={template.textInput}
                            placeholder="이메일"
                            onChangeText={(value) => this.setState({ id: value })} 
                        />
                        <TextInput style={template.textInput}
                            placeholder="비밀번호"
                            onChangeText={(value) => this.setState({ passwd: value })}
                        
                        />
                        <TouchableOpacity activeOpacity={0.8} style={{flexDirection:'row',alignItems:'center'}} onPress={this.autoLoginRadioButtonChecked}>
                            <IconCheck name={this.state.autoLoginChecked ? "check-box" : "check-box-outline-blank"} size={25} color={GREEN_COLOR}/>
                            <Text style={{color:BLACK_COLOR}}>  자동 로그인</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttonView}>
                        <TouchableOpacity activeOpacity={0.8} style={template.button}>
                            <Text style={template.buttonText}>로그인</Text>
                        </TouchableOpacity>

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