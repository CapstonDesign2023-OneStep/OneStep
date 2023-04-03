import React, { Component } from 'react';
import { View,Text,ScrollView,TouchableOpacity,Image ,BackHandler,Alert} from 'react-native';

import { template } from "../styles/template/page";
import {styles} from "../styles/screens/home/home";
import { GREEN_COLOR } from '../utils/color';
import { FlatList } from 'react-native-gesture-handler';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state={
            imageURLs:['https://picsum.photos/seed/picsum/200/300','https://picsum.photos/id/237/200/300','https://picsum.photos/200/300/?blur',
            'https://picsum.photos/id/870/200/300?grayscale&blur=2','https://picsum.photos/200/300?grayscale'],
            topTrail:[{name:'해피산책로'},{name:'오솔길산책로'},
            {name:'인제공원'},{name:'보라매공원'},{name:'멍멍산책로'}],
            topCommunity:[{number:1, title:"오늘 날씨 최고",kind:1,heart:23, comments:3},
                        {number:2, title:"반려견 산책로 추천",kind:2,heart:20, comments:10},
                        {number:3, title:"오늘 산책 인증",kind:2,heart:15, comments:5},
                        {number:4, title:"초코랑 산책",kind:2,heart:10, comments:5},
                        {number:5, title:"풍경좋은 산책로 추천",kind:1,heart:5, comments:15}]
        }
    }
    componentDidMount() {
        BackHandler.addEventListener("hardwareBackPress", this.backPressed); //뒤로가기 이벤트
    }

    componentWillUnmount() {
        BackHandler.removeEventListener("hardwareBackPress", this.backPressed);
    }
    goTrailScreen=()=>{
        this.props.navigation.navigate('GetTrails');
    }
    goCommunityScreen=()=>{
        this.props.navigation.navigate('Community');
    }
    kindText=(value)=>{
        let kindText=["일반인 게시판","반려인 게시판"];
        return kindText[value-1];
    }
    backPressed = () => {
        Alert.alert(
            '',
            '앱을 종료하시겠습니까?',
            [
                { text: '취소', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                { text: '확인', onPress: () => BackHandler.exitApp() },
            ],
            { cancelable: false });
        return true;
    }

    render() {
        return (
        <View style={styles.total_container}>
            <View style={styles.headerView}>
                <Image
                    source={require('../images/logo_korean2.png')} style={{width:100,height:60}}/>
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
                        <TouchableOpacity activeOpacity={0.8} onPress={this.goTrailScreen}><Text>전체보기</Text></TouchableOpacity>
                    </View>
                </View>
                
                <View style={styles.trailContentView}>
                    <View style={styles.trailContentItemView}>  
                            <Image 
                            source={{uri:this.state.imageURLs[0]}} style={{width:90,height:90, borderRadius:10,marginBottom:'5%'}}/>
                            
                            
                      
                            <Text  style={[template.titleText,{fontSize:13}]}>해피 산책로</Text>
                
                    </View>  
                </View>
            </View>
            <View style={styles.communityTopView}>
                <View style={styles.titleView}>
                    <View style={{flex:4}}>
                        <Text style={template.titleText}>인기글 Top5</Text>
                    </View>
                    <View style={{flex:1,}}>
                        <TouchableOpacity activeOpacity={0.8} onPress={this.goCommunityScreen}><Text>전체보기</Text></TouchableOpacity>
                    </View>
                </View>
                <View style={styles.communityContentView}>

                 {this.state.topCommunity.map((item,index)=>(
                    <View style={styles.coummunityContentItemView} key={index}>
                        <View style={{flex:1,ustifyContent:'center'}}>
                            <Text style={[template.titleText,{color:GREEN_COLOR,fontSize:20,}]}>{item.number}.</Text>
                        </View>
                        <View style={{flex:8}}>
                            <Text style={{fontSize:11}}>{this.kindText(item.kind)}</Text>
                            <View style={{flexDirection:'row'}}>
                                <View style={{flex:1,}}>
                                    <Text style={template.titleText}>{item.title}</Text>
                                </View>
                                <View style={{flex:1, alignItems:'flex-end'}}>
                                    <Text style={{fontSize:11}}>좋아요 {item.heart}  댓글 {item.comments}</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                 ))}
                  
                </View>
                
            </View>
            </ScrollView>
       </View>
        );
    }
}
export default Home;
