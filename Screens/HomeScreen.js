import React, { useLayoutEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SearchBar, Avatar } from 'react-native-elements';
import { auth } from '../firebase';

const HomeScreen = ({ navigation }) => {

    useLayoutEffect(() => {
        navigation.setOptions({
            title: "WhatsappCLone",
            headerRight: () => (
                <View style={{ marginRight: 10, flexDirection: "row"}}>
                    {/* <SearchBar
                        placeholder="Type Here..."
                    /> */}
                    <Avatar
                        rounded
                        title="LG"
                        onPress={() => {
                            auth.signOut();
                            navigation.replace("Login");
                        }}
                        overlayContainerStyle={{ backgroundColor: 'gray' }}
                        // source={{
                        //     uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                        // }}
                    />
                </View>
            )
        })
    }, [navigation])

    return (
        <View>
            <Text>Home Screen</Text>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})
