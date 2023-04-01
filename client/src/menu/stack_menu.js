import React, { Component } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


//Login
import OnBoarding from "../login/onboarding";
import MemberRegister from "../login/member_register";
import Login from "../login/login";
import FindPW from "../login/find_pw";

//Community
import WriteCommunity from "../community/write_community";
//User
import EditProfile from "../user/edit_profile";
import PickTrails from "../user/pick_trails";
import TrailNote from "../user/trail_note";
import TabHome from "../menu/tab_menu";
const NativeStack = createNativeStackNavigator();
class Stack extends Component{

    render(){
        return(

            <NativeStack.Navigator initialRouteName="OnBoarding"
            screenOptions={{
                headerTitleAlign: 'center',
            }}>
                {/*로그인*/}
                <NativeStack.Screen name="TabHome" component={TabHome}
                options={{ headerShown:false}} />
                <NativeStack.Screen name="OnBoarding" component={OnBoarding}
                options={{ headerShown: false }} />
                <NativeStack.Screen name="MemberRegister" component={MemberRegister}
                options={{ title:'회원가입' }} />
                 <NativeStack.Screen name="Login" component={Login}
                options={{ title:'로그인' }} />
                <NativeStack.Screen name="FindPW" component={FindPW}
                options={{ title:'비밀번호 찾기' }} />

                {/*홈*/}

                {/*산책로*/}

                {/*커뮤니티*/}
                <NativeStack.Screen name="WriteCommunity" component={WriteCommunity}
                options={{ title:'글 작성하기' }} />
                {/*내정보*/}
                <NativeStack.Screen name="PickTrails" component={PickTrails}
                options={{ title:'내 산책로' }} />
                <NativeStack.Screen name="TrailNote" component={TrailNote}
                options={{ title:'산책기록' }} />
                <NativeStack.Screen name="EditProfile" component={EditProfile}
                options={{ title:'내정보 수정' }} />
            </NativeStack.Navigator>
            
        );
    }
}
export default Stack;