import React, {Component} from 'react';
import {Dimensions, Image, Platform, Pressable, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import { BLACK_COLOR,Dark_Gary,GREEN_COLOR,Light_Gray } from '../utils/color';

import Icon from "react-native-vector-icons/Foundation";

import Home from "../home/home";
import GetTrails from "../trails/getTrails";
import Community from '../community/community';
import MyPage from '../user/myPage';

const Tab = createBottomTabNavigator(); // Tab 일 경우
class Tabs extends Component{

    render(){
        return(
        <Tab.Navigator 
            sceneContainerStyle={{
                backgroundColor:"white"
            }}
            screenOptions={{
                headerTitleAlign: 'center',
                tabBarStyle:{
                    backgroundColor:"white"
                },
                tabBarActiveTintColor:GREEN_COLOR,
                tabBarInactiveTintColor:Dark_Gary,
                headerStyle:{
                    backgroundColor:"white",
                },
                headerTitleStyle:{
                    color: BLACK_COLOR,
                },
                tabBarLabelStyle:{
                    marginTop:-5,
                    fontSize:10,
                    fontWeight:"600",
                }
            }}>
                <Tab.Screen name="Home" component={Home} options={{
                    title:"홈",
                    tabBarIcon:({focused,color,size})=>{
                        return  <Icon name="foot" color={color} size={size} /> 
                    }
                }}/>
                <Tab.Screen name="GetTrails" component={GetTrails} options={{
                    title:"산책로",
                    tabBarIcon:({focused,color,size})=>{
                        return  <Icon name="map" color={color} size={size} /> 
                    }
                }}/>
                <Tab.Screen name="Community" component={Community} options={{
                    title:"커뮤니티",
                    tabBarIcon:({focused,color,size})=>{
                        return  <Icon name="page-edit" color={color} size={size} /> 
                    }
                }}/>
                <Tab.Screen name="MyPage" component={MyPage} options={{
                    title:"내정보",
                    tabBarIcon:({focused,color,size})=>{
                        return  <Icon name="torso" color={color} size={size} /> 
                    }
                }}/>
            
            </Tab.Navigator>
        );
    }
}
export default Tabs;