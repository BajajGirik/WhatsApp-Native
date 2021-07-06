import React, { useLayoutEffect } from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { Avatar, Text } from 'react-native-elements';
import { MaterialIcons, Entypo, Ionicons } from '@expo/vector-icons';
import anonymous from '../assets/anonymous.png';
import { db } from '../firebase';

const ChatScreen = ({ navigation, route }) => {
    useLayoutEffect(() => {
        navigation.setOptions({
            title: route.params.chatName,
            headerTitle: () => (
                <View style={{flexDirection: "row", alignItems: "center"}}>
                    <Avatar
                        rounded
                        title={route.params.chatName[0]}
                        containerStyle={{marginRight: 8}}
                        source={{
                             uri: anonymous
                        }}
                    />
                    <Text
                        style={{
                            color: "white",
                            fontWeight: "600",
                            fontSize: 17
                        }}
                    >
                        {route.params.chatName}
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
                        <MaterialIcons name="add-ic-call" size={24} color="white"
                            style={{ marginRight: 10 }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.6}>
                        <Entypo name="dots-three-vertical" size={24} color="white"
                            style={{ marginRight: 10 }}
                        />
                    </TouchableOpacity>                       
                </View>
            )
        })
    }, [navigation])

    return (
        <View>
            <Text>{route.params.chatName}</Text>
        </View>
    )
}

export default ChatScreen

const styles = StyleSheet.create({});
