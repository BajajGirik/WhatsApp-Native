import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Input } from 'react-native-elements';
import { MaterialIcons } from '@expo/vector-icons';

const AddContactScreen = () => {
    const [email, setEmail] = useState('');

    return (
        <View>
            <Input
                placeholder='Email Id Of User'
                leftIcon={
                    <MaterialIcons name="email" size={24} color="black" />
                }
                inputStyle={{marginLeft: 7, color: "black"}}
                containerStyle={{marginTop: 10}}
                value={email}
                onChangeText={text => setEmail(text)}
            />
        </View>
    )
}

export default AddContactScreen

const styles = StyleSheet.create({})
