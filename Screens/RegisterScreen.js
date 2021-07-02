import { Input, Image, Button } from 'react-native-elements';
import Logo from '../assets/Logo.png'
import { StyleSheet, KeyboardAvoidingView, View, Platform } from 'react-native'
import { Ionicons, FontAwesome5 ,Zocial, Entypo } from '@expo/vector-icons';
import React, { useState } from 'react';
import { auth } from '../firebase';

const RegisterScreen = ({ navigation }) => {
    const [name, setName] = useState('');
    const [photo, setPhoto] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [repass, setRepass] = useState('');

    const register = () => {
        if (!(name && email && pass && repass)) {
            alert("Fill all the required fields!");
            return false;
        }

        if (pass !== repass) {
            alert("Passwords do not match!");
            return false;
        }
        auth.createUserWithEmailAndPassword(email, pass)
        .then(authUser => {
            authUser.user.updateProfile({
                displayName: name,
                photoURL: photo
            })
        })
        .catch (err => alert(err.message));
        
        setName('');
        setPhoto('');
        setEmail('');
        setPass('');
        setRepass('');
        navigation.goBack();
        
     };
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
                placeholder="Full Name"
                leftIcon={<FontAwesome5 name="user-tie" size={24} color="white" />}
                value={name}
                onChangeText={value => setName(value)}
            />
            <Input
                inputStyle={styles.input}
                containerStyle={styles.inputcontainer}
                placeholder="PhotoUrl (Optional)"
                leftIcon={<Ionicons name="ios-image" size={24} color="white" />}
                value={photo}
                onChangeText={value => setPhoto(value)}
            />
            <Input
                inputStyle={styles.input}
                containerStyle={styles.inputcontainer}
                placeholder="Email"
                leftIcon={<Zocial name="email" size={24} color="white" />}
                value={email}
                onChangeText={value => setEmail(value)}
            />
            <Input
                inputStyle={styles.input}
                containerStyle={styles.inputcontainer}
                placeholder="Password"
                secureTextEntry
                leftIcon={<Entypo name="lock" size={24} color="white" />}
                value={pass}
                onChangeText={value => setPass(value)}
            />
            <Input
                inputStyle={styles.input}
                containerStyle={styles.inputcontainer}
                placeholder="Re-enter Password"
                secureTextEntry
                leftIcon={<Entypo name="lock" size={24} color="white" />}
                value={repass}
                onChangeText={value => setRepass(value)}
            />
             <Button
                containerStyle={styles.buttoncontainer}
                title="Register"
                raised
                onPress={register}
            />

            <View style={{ height: 100 }}></View>
        </KeyboardAvoidingView>
    )
}

export default RegisterScreen

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
