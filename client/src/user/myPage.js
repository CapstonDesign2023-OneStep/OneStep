import React, { Component } from 'react';
import { View,Text,ScrollView,Image, TouchableOpacity } from 'react-native';

import { template } from "../styles/template/page";
import {styles} from "../styles/screens/user/myPage";

import IconFontAwe from "react-native-vector-icons/FontAwesome";
import { BLUE_COLOR, Dark_Gary, GREEN_COLOR, Light_GREEN, RED_COLOR,Light_Gray } from '../utils/color';
class MyPage extends Component {
    constructor(props) {
        super(props);

        this.state={
            imageURI:null,
        };
    }
    goPickTrailsScreen=()=>{
        this.props.navigation.navigate('PickTrails');
    }
    goTrailNoteScreen=()=>{
        this.props.navigation.navigate('TrailNote');
    }
    goEditProfileScreen=()=>{
        this.props.navigation.navigate('EditProfile');
    }
    render() {
        return (
        <ScrollView>
        <View style={template.total_container}>
            <View style={template.container}>
                <View style={styles.profileView}> 
                    <View style={styles.profileImageView}>
                        <Image
                          source={require('../images/user.png')} style={{width:50,height:50}}/>
                    </View>
                    <View style={{width:'70%',paddingLeft:'10%'}}>
                    <Text style={[template.titleText,{fontSize:20}]}>지유미</Text>
                    <Text>jiyumi00@naver.com</Text>
                    </View>
                    <TouchableOpacity activeOpacity={0.7} onPress={this.goEditProfileScreen}><IconFontAwe name="angle-right" color={Dark_Gary} size={40} /></TouchableOpacity>
                    
                </View>

                <View style={styles.menuView2}>
                    <TouchableOpacity style={styles.buttonStyle2} onPress={this.goPickTrailsScreen}>
                        <View style={styles.IconStyle}>
                            <IconFontAwe name="heart" color={RED_COLOR} size={25} />
                        </View>
                        
                        <Text style={template.titleText}>내 산책로</Text>
                        
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonStyle2} onPress={this.goTrailNoteScreen}>
                        <View style={styles.IconStyle}>
                            <IconFontAwe name="calendar-check-o" color={BLUE_COLOR} size={25} />
                        </View>
                        <Text style={template.titleText}>산책 기록</Text>
                        
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonStyle2}>
                        <View style={styles.IconStyle}>
                            <IconFontAwe name="paw" color={GREEN_COLOR} size={25} />
                        </View>
                        <Text style={template.titleText}>반려견 기록</Text>
                       
                    </TouchableOpacity>
                </View>
              
                <View style={styles.menuView}>
                    <TouchableOpacity style={styles.buttonStyle}>
                        <View style={styles.IconStyle}>
                            <IconFontAwe name="bell" color={Dark_Gary} size={25} />
                        </View>
                        <View style={styles.menuTextView}>
                        <Text style={template.titleText}>공지사항</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonStyle}>
                        <View style={styles.IconStyle}>
                            <IconFontAwe name="question-circle-o" color={Dark_Gary} size={25} />
                        </View>
                        <View  style={styles.menuTextView}>
                        <Text style={template.titleText}>도움말</Text>
                        </View>
                    </TouchableOpacity>

                   
                </View>
            </View>
       </View>
       </ScrollView>
        );
    }
}
export default MyPage;