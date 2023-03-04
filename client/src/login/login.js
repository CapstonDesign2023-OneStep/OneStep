import React, { Component } from 'react';
import { View,Text,ScrollView, TouchableOpacity } from 'react-native';

import { template } from "../styles/template/page";
import { styles } from '../styles/screens/login/login';
import { TextInput } from 'react-native-gesture-handler';

import IconCheck from 'react-native-vector-icons/AntDesign';
import { GREEN_COLOR } from '../utils/color';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state={
            id:'',
            passwd:'',
            autoLoginChecked:false,
        }
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
                            onChangeText={(value) => this.setState({ id: value })}
                        
                        />
                        <View style={{flexDirection:'row'}}>
                            <TouchableOpacity>
                            <IconCheck name={this.state.autoLoginChecked ? "checksquareo" : "checksquare"} size={25} color={GREEN_COLOR} style={{ paddingTop: 5 }} />
                            <Text>자동 로그인</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.buttonView}>

                    </View>
                </View>
            </View>
        );
    }
}
export default Login;