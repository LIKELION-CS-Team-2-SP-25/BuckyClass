import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "./types/navigation";
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";
import HomeScreen from "./screens/HomeScreen";
import ChatScreen from "./screens/ChatScreen";
import CoursesScreen from "./screens/CoursesScreen";
import CourseDetailsScreen from "./screens/CourseDetailsScreen";
import CourseChatScreen from "./screens/CourseChatScreen";
import ChatListScreen from "./screens/ChatListScreen";
import PrivateChatScreen from "./screens/PrivateChatScreen";

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="SignIn">
                <Stack.Screen name="SignIn" component={SignIn} />
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="ChatScreen" component={ChatScreen} />
                <Stack.Screen name="Courses" component={CoursesScreen} />
                <Stack.Screen
                    name="CourseDetails"
                    component={CourseDetailsScreen}
                />
                <Stack.Screen name="CourseChat" component={CourseChatScreen} />
                <Stack.Screen name="ChatList" component={ChatListScreen} />
                <Stack.Screen
                    name="PrivateChat"
                    component={PrivateChatScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
