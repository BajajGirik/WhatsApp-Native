import { KeyboardAvoidingView, StyleSheet, Text, View, Platform } from 'react-native'
import { Input, Image, Button } from 'react-native-elements';
import Logo from '../assets/Logo.png'
import { Zocial, Entypo } from '@expo/vector-icons';
import React, { useState } from 'react';
import { nodeName } from 'min-document';


const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <Image
                source={{ uri: Logo }}
                style={{ width: 200, height: 200 }}
            />
            <Input
                inputStyle={styles.input}
                containerStyle={styles.inputcontainer}
                placeholder="Email"
                leftIcon={<Zocial name="email" size={24} color="white" /> }
                onChangeText={value => setEmail(value)}
            />
            <Input
                inputStyle={styles.input}
                containerStyle={styles.inputcontainer}
                placeholder="Password"
                secureTextEntry
                leftIcon={<Entypo name="lock" size={24} color="white" /> }
                onChangeText={value => setPass(value)}
            />
            <Button
                containerStyle={styles.buttoncontainer}
                title="Login"
                raised
            />
            <Button
                type="outlined"
                containerStyle={styles.buttoncontainer}
                title="Register"
                raised
            />

            <View style={{ height: 100 }}></View>
        </KeyboardAvoidingView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        backgroundColor: "black"
    },

    inputcontainer: {
        width: 400,
        margin: 5,
    },

    input: {
        marginLeft: 7,
        color: "white",
    },

    buttoncontainer: {
        width: 250,
        margin: 5,
    },
});
