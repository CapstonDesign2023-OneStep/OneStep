import React, { Component } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import OnBoarding from "../login/onboarding";

const NativeStack = createNativeStackNavigator();
class Stack extends Component{

    render(){
        return(

            <NativeStack.Navigator initialRouteName="OnBoarding"
            screenOptions={{
                headerTitleAlign: 'center',
            }}>

                <NativeStack.Screen name="OnBoarding" component={OnBoarding}
                options={{ headerShown: false }} />
            </NativeStack.Navigator>
        );
    }
}
export default Stack;