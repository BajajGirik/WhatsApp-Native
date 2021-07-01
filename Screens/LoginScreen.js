import React from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native'
import { Input, Image, Button } from 'react-native-elements';
import Logo from '../assets/Logo.png'
const LoginScreen = () => {
    return (
        <KeyboardAvoidingView style={styles.container}>
            <Image
                source={{ uri: Logo }}
                style={{ width: 200, height: 200 }}
            />
            <Input
                placeholder="Email"
                onChangeText={value => this.setState({ comment: value })}
            />
            <View style={{ height: 100 }}></View>
        </KeyboardAvoidingView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }
})
