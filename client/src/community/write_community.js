import React, { Component } from 'react';
import { View,Text,ScrollView, TouchableOpacity,TextInput } from 'react-native';

import IconCamera from 'react-native-vector-icons/SimpleLineIcons';
import { Picker } from '@react-native-picker/picker';
import { template } from "../styles/template/page";
import {styles} from "../styles/screens/community/community";
import { BLACK_COLOR, Dark_Gary, GREEN_COLOR, Light_Gray } from '../utils/color';
class WriteCommunity extends Component {
    constructor(props) {
        super(props);
        this.contentsRef=React.createRef();
        this.communityKindName=["일반인 게시판", "반려인 게시판"];
        this.state={
            communityKind:0,
            title:"",
            contents:"",
            validForm:false,
        }
    }
    cameraButtonClicked=()=>{

    }
   //입력값 유효성 검사
   onValueChange = (value) => {

    this.setState(value,()=>{
        let isValidForm = true;
        if (this.state.title.trim().length == 0) { // 조건 필요시 추가
            isValidForm = false;
        }
        if (this.state.contents.trim().length <10) {
            isValidForm = false;
        }
        console.log("isValidForm", isValidForm);
        this.setState({ validForm: isValidForm });
    })
   
}
    render() {
        return (
        <View style={template.total_container}>
           <View style={styles.writeView}>
           
            <View style={styles.communityKind_picker}>
            <Text>카테고리 선택</Text>
            <Picker
                selectedValue={this.state.communityKind}
                onValueChange={(value, index) => { this.setState({ invoiceKind: value }) }}>
                {this.communityKindName.map((item,i)=> <Picker.Item label={item} key={i} value={i}/>)}
            </Picker>
            </View>
           
           <TextInput style={[styles.write_textInput,]}
                    placeholder="제목을 입력해주세요"
                    returnKeyType="next"
                    onChangeText={(value) => {this.onValueChange({title:value})}} 
                    onSubmitEditing={()=>{this.contentsRef.focus()}}
                            />
            <TextInput 
                placeholder="내용을 입력해주세요"
                ref={(c)=>{this.contentsRef=c;}}
                returnKeyType="next"
                onChangeText={(value) => {this.onValueChange({contents:value})}} 
            
            />
           </View>
           <View style={styles.buttonView}>
                <TouchableOpacity style={styles.camera_btn} onPress={this.cameraButtonClicked}>
                    <IconCamera name="picture" size={30} color={Dark_Gary}></IconCamera>
                </TouchableOpacity>
               {this.state.validForm? <TouchableOpacity style={[template.button]}><Text style={template.buttonText}>등록하기</Text></TouchableOpacity>:
               <TouchableOpacity style={[template.button,{backgroundColor:Light_Gray}]}><Text style={template.buttonText}>등록하기</Text></TouchableOpacity>} 
           </View>
       </View>
        );
    }
}
export default WriteCommunity;