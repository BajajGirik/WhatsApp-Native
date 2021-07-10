import React, { useLayoutEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { FontAwesome, AntDesign} from '@expo/vector-icons';
import EmailValidator from 'email-validator';
import { auth, db } from '../firebase';

const AddGroupScreen = ({ navigation }) => {
    const [chatName, setChatName] = useState('');
    const [groupPic, setGroupPic] = useState('');
    const [newUser, setNewUser] = useState('');

    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Start a new group chat",
            headerTitleAlign: "center",
        })
    }, [navigation])

    const addGroup = () => {
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

        db.collection("chats").add({
            chatName: chatName,
            chatPic: groupPic,
            chatType: "G",
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
                leftIcon={<FontAwesome name="wechat" size={24} color="black" />}
                inputStyle={styles.input}
                containerStyle={{marginTop: 10}}
                placeholder="Group Name"
                value={chatName}
                onChangeText={text => setChatName(text)}
            />
            <Input
                leftIcon={<FontAwesome name="picture-o" size={24} color="black" />}
                inputStyle={styles.input}
                containerStyle={{marginTop: 10}}
                placeholder="Group PhotoURL (Optional)"
                value={groupPic}
                onChangeText={text => setGroupPic(text)}
            />
            <Input
                leftIcon={<AntDesign name="adduser" size={24} color="black" />}
                inputStyle={styles.input}
                containerStyle={{marginTop: 10}}
                placeholder="User email you want to chat with"
                value={newUser}
                onChangeText={text => setNewUser(text)}
            />
            <Button
                title="ADD User To Group"
                containerStyle={styles.button}
                onPress={addGroup}
                raised
            />
        </View>
    )
}

export default AddGroupScreen

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
