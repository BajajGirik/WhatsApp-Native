import React, { useLayoutEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';

const AddChatScreen = ({ navigation }) => {
    
    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Add a new chat",
            headerTitleAlign: "center",
        })
    }, [navigation])

    return (
        <View style={styles.container}>
            <Input
                leftIcon={<FontAwesome name="wechat" size={24} color="black" /> }
                inputStyle={styles.input}
                containerStyle={styles.inputcontainer}
            />
            <Button title="ADD CHAT" containerStyle={styles.button}/>
        </View>
    )
}

export default AddChatScreen

const styles = StyleSheet.create({
    container: {},
    input: {},
    inputcontainer: {},
    button: {}
});
