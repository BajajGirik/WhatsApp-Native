import React, { useLayoutEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';

const AddChatScreen = ({ navigation }) => {
    const [chatName, setChatName] = useState('');
    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Add a new chat",
            headerTitleAlign: "center",
        })
    }, [navigation])

    return (
        <View style={styles.container}>
            <Input
                leftIcon={<FontAwesome name="wechat" size={24} color="black" />}
                inputStyle={styles.input}
                placeholder="New Chat Name"
                value={chatName}
                onChangeText={text => setChatName(text)}
            />
            <Button
                title="ADD CHAT"
                containerStyle={styles.button}
            />
        </View>
    )
}

export default AddChatScreen

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center"
    },

    input: {
        marginLeft: 7,
        color: "black",
    },

    button: {
        width: 250,
    }
});
