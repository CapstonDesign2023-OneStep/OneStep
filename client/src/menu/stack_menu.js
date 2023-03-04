import React, { Component } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Login
import OnBoarding from "../login/onboarding";
import MemberRegister from "../login/member_register";
import Login from "../login/login";
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
                <NativeStack.Screen name="MemberRegister" component={MemberRegister}
                options={{ title:'회원가입' }} />
                 <NativeStack.Screen name="Login" component={Login}
                options={{ title:'로그인' }} />
            </NativeStack.Navigator>
        );
    }
}
export default Stack;