import React, { Component } from 'react';
import { View,Text,ScrollView,TouchableOpacity,Image } from 'react-native';

import { template } from "../styles/template/page";
import {styles} from "../styles/screens/home/home";
import { GREEN_COLOR } from '../utils/color';
import { FlatList } from 'react-native-gesture-handler';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state={
            imageURLs:'https://picsum.photos/seed/picsum/200/300',
        }
    }
    goTrailScreen=()=>{
        this.props.navigation.navigate('GetTrails');
    }
    goCommunityScreen=()=>{
        this.props.navigation.navigate('Community');
    }
    render() {
        return (
        <View style={styles.total_container}>
            <View style={styles.headerView}>
                <Image
                    source={require('../images/logo_korean.png')} style={{width:100,height:60}}/>
            </View>
            <ScrollView>
            <View style={styles.profileView}>
                 <View style={styles.profileImageView}>
                    <Image
                          source={require('../images/user.png')} style={{width:50,height:50}}/>
                    </View>
                <View style={styles.profileTextView}>
                    <Text style={{color:'white',}}>안녕하세요 </Text><Text style={[template.titleText,{fontSize:15,color:'white'}]}> 지유미</Text><Text style={{color:'white',}}> 님 </Text>
                </View>
                
            </View>
            <View style={styles.trailTopView}>
                <View style={styles.titleView}>
                    <View style={{flex:4}}>
                    <Text style={template.titleText}>추천 산책로</Text>
                    </View>
                    <View style={{flex:1}}>
                        <TouchableOpacity onPress={this.goTrailScreen}><Text>전체보기</Text></TouchableOpacity>
                    </View>
                </View>
                
                <View style={styles.trailContentView}>
                    <View style={styles.trailContentItemView}>
                        <Image
                            source={{uri:this.state.imageURLs}} style={{width:90,height:90, borderRadius:10,marginBottom:'5%'}}/>
                            
                        <Text style={[template.titleText,{fontSize:13}]}>해피 산책로</Text>
                    </View>
                    
                </View>
             
            </View>
            <View style={styles.communityTopView}>
                <View style={styles.titleView}>
                    <View style={{flex:4}}>
                        <Text style={template.titleText}>인기글 Top5</Text>
                    </View>
                    <View style={{flex:1,}}>
                        <TouchableOpacity onPress={this.goCommunityScreen}><Text>전체보기</Text></TouchableOpacity>
                    </View>
                </View>
                <View style={styles.communityContentView}>
                    <View style={styles.coummunityContentItemView}>
                        <View style={{flex:1,ustifyContent:'center'}}>
                            <Text style={[template.titleText,{color:GREEN_COLOR,fontSize:20,}]}>1.</Text>
                        </View>
                        <View style={{flex:8}}>
                            <Text style={{fontSize:11}}>반려인 게시판</Text>
                            <View style={{flexDirection:'row'}}>
                                <View style={{flex:1,}}>
                                    <Text style={template.titleText}>오늘 산책 인증</Text>
                                </View>
                                <View style={{flex:1, alignItems:'flex-end'}}>
                                    <Text style={{fontSize:11}}>좋아요 23  댓글 3</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                  
                    
                </View>
                
            </View>
            </ScrollView>
       </View>
        );
    }
}
export default Home;