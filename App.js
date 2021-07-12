import 'react-native-gesture-handler';
import React, { useLayoutEffect } from 'react';
import { View } from 'react-native';
import { Avatar } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import LoginScreen from './Screens/LoginScreen';
import RegisterScreen from './Screens/RegisterScreen';
import HomeScreen from './Screens/HomeScreen';
import AddChatScreen from './Screens/AddChatScreen';
import AddGroupScreen from './Screens/AddGroupScreen';
import ChatScreen from './Screens/ChatScreen';
import ContactsScreen from './Screens/ContactsScreen';
import { auth } from './firebase';

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

function Initial({ navigation }) {
  
   useLayoutEffect(() => {
        navigation.setOptions({
            title: "WhatsappClone",
            headerTitleAlign: "left",
            headerRight: () => (
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Avatar
                        rounded
                        title={auth.currentUser.displayName[0]}
                        onPress={() => {
                            auth.signOut();
                            navigation.replace("Login");
                        }}
                        containerStyle={{marginRight: 15, marginLeft: 15}}
                        overlayContainerStyle={{ backgroundColor: 'gray' }}
                        source={{
                            uri: auth.currentUser.photoURL
                        }}
                    />
                </View>
            )
        })
    }, [navigation])

  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarPosition="top"
    >
      <Tab.Screen name="Home" component={HomeScreen}  />
      <Tab.Screen name="Contacts" component={ContactsScreen} />
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
        <Stack.Screen name="Initial" component={Initial} />
        <Stack.Screen name="AddChat" component={AddChatScreen} />
        <Stack.Screen name="AddGroup" component={AddGroupScreen} /> 
        <Stack.Screen name="Chat" component={ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
