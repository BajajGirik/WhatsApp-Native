import React, { useLayoutEffect, useState } from 'react'
import { View, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, ScrollView } from 'react-native'
import { Avatar, Text, Input } from 'react-native-elements';
import { Entypo, Ionicons, AntDesign } from '@expo/vector-icons';
import anonymous from '../assets/anonymous.png';
import { auth, db } from '../firebase';
import firebase from 'firebase'; 

const ChatScreen = ({ navigation, route }) => {
    const [chatData, setChatData] = useState({});
    const [msg, setMsg] = useState('');

    const sendMsg = () => {
        if (!msg)
            return false;
        
        db.collection("chats").doc(route.params.id).collection("messages").add({
            sentBy: auth.currentUser.email,
            message: msg,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
    };

    useLayoutEffect(() => {
        const unsubscribe = db.collection("chats").doc(route.params.id).onSnapshot(doc =>
            setChatData(doc.data())
        );

        navigation.setOptions({
            title: chatData?.chatName,
            headerTitle: () => (
                <View style={{flexDirection: "row", alignItems: "center"}}>
                    <Avatar
                        rounded
                        containerStyle={{marginRight: 8}}
                        source={chatData?.chatPic ? ({
                            uri: chatData.chatPic
                        }) : (
                            anonymous
                        )}
                    />
                    <Text
                        style={{
                            color: "white",
                            fontWeight: "600",
                            fontSize: 17
                        }}
                    >
                        {chatData?.chatName}
                    </Text>
                </View>    
            ),
            headerTitleAlign: "left",
            headerLeft: () => (
                <TouchableOpacity activeOpacity={0.6} onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back-outline" size={24} color="white"
                        style={{marginLeft: 8}}
                    />
                </TouchableOpacity>
            ),
            headerRight: () => (
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <TouchableOpacity activeOpacity={0.6}>
                        <Ionicons name="md-call-outline" size={24} color="white"
                            style={{ marginRight: 10 }}
                        />
                    </TouchableOpacity>
                    {chatData?.chatType === "G" && (
                        <TouchableOpacity activeOpacity={0.6}>
                            <AntDesign name="addusergroup" size={24} color="white"
                                style={{ marginRight: 10 }}            
                            />
                        </TouchableOpacity>
                    )}  
                    <TouchableOpacity activeOpacity={0.6}>
                        <Entypo name="dots-three-vertical" size={24} color="white"
                            style={{ marginRight: 10 }}
                        />
                    </TouchableOpacity>                       
                </View>
            )
        })
        
        return unsubscribe;
    }, [navigation, chatData])

    return (
        <SafeAreaView style={{flex: 1}}>
            <KeyboardAvoidingView style={{flex: 1}}>
                <ScrollView style={{ flexGrow: 1}}>
                    <Text>Hello</Text>
                    {/* messages  */}
                </ScrollView>
                <Input
                    placeholder="Message"
                    rightIcon={
                        <TouchableOpacity activeOpacity={0.6} onPress={sendMsg}>
                            <Ionicons name="send-sharp" size={24} color="darkgreen"/>
                        </TouchableOpacity>
                    }
                    inputStyle={{ paddingLeft: 5 }}
                    rightIconContainerStyle={{ marginLeft: 10 }}
                    value={msg}
                    onChangeText={value => setMsg(value)}
                />
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default ChatScreen
