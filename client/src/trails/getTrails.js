import React, { Component } from 'react';
import { View,Text,ScrollView } from 'react-native';

import OrdinaryTrails from './ordinaryTrails';
import CompanionTrails from './companionTrails';


import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import { GREEN_COLOR, Light_GREEN } from '../utils/color';
const Tab=createMaterialTopTabNavigator();

class GetTrails extends Component {
    constructor(props) {
        super(props);
    }
  
    render() {
        return (
            <Tab.Navigator
                screenOptions={{
                    tabBarLabelStyle:{fontSize:14},
                   
                }}>
            <Tab.Screen name="OrdinaryTrails" component={OrdinaryTrails} options={{tabBarLabel:'일반인'}}/>
            <Tab.Screen name="CompanionTrails" component={CompanionTrails}  options={{tabBarLabel:'반려인'}}/>
          </Tab.Navigator>
        );
    }
}
export default GetTrails;