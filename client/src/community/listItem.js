import React, { Component } from 'react';

import { View,Text,ScrollView,Image,FlatList, TouchableOpacity } from 'react-native';

import { PureComponent } from 'react/cjs/react.production.min';

import { template } from "../styles/template/page";
import {styles} from "../styles/screens/community/community";


class ListItem extends Component{
    constructor(props) {
        super(props);
        this.state={
            imageURI:['https://picsum.photos/seed/picsum/200/300','https://picsum.photos/id/237/200/300','https://picsum.photos/200/300/?blur',
        'https://picsum.photos/id/870/200/300?grayscale&blur=2','https://picsum.photos/200/300?grayscale']
        }
    }
  
    render() {
        const item=this.props.item;
        return (
            <TouchableOpacity activeOpacity={0.8}>
            <View style={styles.itemView}>
                <View style={styles.imageView}>
                    <Image
                        source={{uri:this.state.imageURI[this.props.index]}} style={{width:'90%',height:'90%', borderRadius:20,}}/>
                </View>
                <View style={styles.contentView}>
                    <View style={styles.topView}>
                        <View style={{flex:1,alignItems:'flex-start'}}>
                            <Text style={{fontSize:11}}>자유게시판</Text>
                        </View>
                        <View style={{flex:1,alignItems:'flex-end'}}>
                            <Text style={{fontSize:11}}>1일전</Text>
                        </View>
                    </View>
                    <View style={styles.titleView}>
                        <Text style={template.titleText}>{item.title}</Text>
                    </View>
                    <View style={styles.bottomView}>
                        <View style={{flex:1,alignItems:'flex-start'}}>
                            <Text style={{color:'black'}}>{item.user}</Text>
                        </View>
                        <View style={{flex:1,alignItems:'flex-end'}}>
                            <Text style={{fontSize:11}}>좋아요 {item.heart}  댓글 {item.comments}</Text>
                        </View>
                    </View>
                </View>
            </View>
            </TouchableOpacity>
        );
    }
}
export default ListItem;

