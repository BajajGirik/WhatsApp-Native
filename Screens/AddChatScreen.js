import React, { useLayoutEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { AntDesign} from '@expo/vector-icons';
import EmailValidator from 'email-validator';
import { auth, db } from '../firebase';

const AddChatScreen = ({ navigation }) => {
    const [newUser, setNewUser] = useState('');

    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Add a new group chat",
            headerTitleAlign: "center",
        })
    }, [navigation])

    const addChat = () => {
        if (!chatName)
        {
            alert("Chat name cannot be empty");
            return false;
        }

        // validate email
        if (!EmailValidator.validate(newUser))
        {
            alert("Enter Valid Email Address");
            return false;
        } 

        // check whether chat exists or not 

        // add to db
        db.collection("chats").add({
            chatName: chatName,
            chatPic: groupPic,
            chatType: "P",
            users: [auth.currentUser.email, newUser]
        }).then(() => 
            navigation.goBack()
        ).catch( error => 
            alert(error.message)
        )
    };

    return (
        <View style={styles.container}>
            <Input
                leftIcon={<AntDesign name="adduser" size={24} color="black" />}
                inputStyle={styles.input}
                containerStyle={{marginTop: 10}}
                placeholder="User email you want to chat with"
                value={newUser}
                onChangeText={text => setNewUser(text)}
            />
            <Button
                title="START Personal Chat"
                containerStyle={styles.button}
                onPress={addChat}
                raised
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
        marginBottom: 7,
    }
});
