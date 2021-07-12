import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import LoginScreen from './Screens/LoginScreen';
import RegisterScreen from './Screens/RegisterScreen';
import HomeScreen from './Screens/HomeScreen';
import AddChatScreen from './Screens/AddChatScreen';
import AddGroupScreen from './Screens/AddGroupScreen';
import ChatScreen from './Screens/ChatScreen';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

const globalOp = {
  headerStyle: { backgroundColor: "#00bfa5" },
  headerTitleStyle: {
    color: "#fff",
    fontWeight: "600"
  },
  headerTitleAlign: "center",
  headerTintColor: "#fff"
}

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
    >
      <Tab.Screen name="Home" component={HomeScreen} />
    </Tab.Navigator>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={globalOp}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Initial" component={MyTabs} />
        <Stack.Screen name="AddChat" component={AddChatScreen} />
        <Stack.Screen name="AddGroup" component={AddGroupScreen} /> 
        <Stack.Screen name="Chat" component={ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


