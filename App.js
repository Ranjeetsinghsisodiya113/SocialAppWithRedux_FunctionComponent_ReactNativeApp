// App.js

import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/Home';
import HomePostViewAll from './src/HomePostViewAll';
import PostDetails from './src/PostDetails';
import StoryDetails from './src/StoryDetails';
import AddPost from './src/AddPost';
import EditPost from './src/EditPost';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='QuestionList'>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false,}}/>
        <Stack.Screen name="HomePostViewAll" component={HomePostViewAll} options={{ headerShown: false,}}/>
        <Stack.Screen name="PostDetails" component={PostDetails} options={{ headerShown: false,}}/>
        <Stack.Screen name="StoryDetails" component={StoryDetails} options={{ headerShown: false,}}/>
        <Stack.Screen name="AddPost" component={AddPost} options={{ headerShown: false,}}/>
        <Stack.Screen name="EditPost" component={EditPost} options={{ headerShown: false,}}/>
      
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

