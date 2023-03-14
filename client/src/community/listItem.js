import React, { Component } from 'react';
import { View,Text,ScrollView, TouchableOpacity,Image } from 'react-native';

import { template } from "../styles/template/page";
import {styles} from "../styles/screens/community/community";
import { FlatList } from 'react-native-gesture-handler';
import { PureComponent } from 'react/cjs/react.production.min';
import { BLACK_COLOR, Dark_Gary,BLUE_COLOR } from '../utils/color';


class ListItem extends PureComponent{
    constructor(props){
        super(props);
        this.state={
            imageURLs:['https://picsum.photos/seed/picsum/200/300'],
        }
    }
    componentDidMount(){

    }
    kindText=(value)=>{
        let kindText=["자유게시판","산책인증"];
        return kindText[value-1];
    }
    render(){
        const item=this.props.item;
       
        return(
            <>
            <TouchableOpacity>
                <View style={styles.listItemView}>
                    
                    <View style={styles.imageView}>
                        <Image
                        source={{uri:this.state.imageURLs[0]}} style={{width:70,height:70, borderRadius:20}}/>

                    </View>
                    <View style={styles.contentView}>
                        <View style={styles.topView}>
                            <View style={{flex:1, alignItems:'flex-start'}}>
                                <Text style={{fontSize:11}}>{this.kindText(item.kind)}</Text>
                            </View>
                            <View style={{flex:1,alignItems:'flex-end'}}>
                                <Text style={{fontSize:11}}>11시간 전</Text>
                            </View>
                        </View>
                        <View style={styles.titleView}>
                            <Text style={template.titleText}>{item.title}</Text>
                        </View>
                        <View style={styles.bottomView}>
                            <View style={{flex:1, alignItems:'flex-start'}}>
                                <Text style={{color:BLACK_COLOR}}>삶은계란</Text>
                            </View>
                            <View style={{flex:1,alignItems:'flex-end'}}>
                                <Text style={{fontSize:11}}>좋아요 {item.heart}  댓글 {item.comments}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            </>
        )
    }
}
export default ListItem