import React, { useLayoutEffect, useState } from 'react'
import { StyleSheet, View, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, ScrollView } from 'react-native'
import { Avatar, Text } from 'react-native-elements';
import { Entypo, Ionicons, AntDesign } from '@expo/vector-icons';
import anonymous from '../assets/anonymous.png';
import { db } from '../firebase';

const ChatScreen = ({ navigation, route }) => {
    const [chatData, setChatData] = useState({});

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
        <SafeAreaView>
            <KeyboardAvoidingView>
                <ScrollView>
                    {/* messages  */}
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default ChatScreen

const styles = StyleSheet.create({});
