import React, { useLayoutEffect } from 'react';
import { ScrollView, SafeAreaView, View, TouchableOpacity} from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';
import { auth } from '../firebase';

const HomeScreen = ({ navigation }) => {

    useLayoutEffect(() => {
        navigation.setOptions({
            title: "WhatsappClone",
            headerTitleAlign: "left",
            headerRight: () => (
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <TouchableOpacity onPress={() => navigation.navigate("AddChat") }>
                        <FontAwesome name="pencil" size={24} color="black" />
                    </TouchableOpacity>
                    <Avatar
                        rounded
                        title={auth.currentUser.displayName[0]}
                        onPress={() => {
                            auth.signOut();
                            navigation.replace("Login");
                        }}
                        containerStyle={{marginRight: 15, marginLeft: 15}}
                        overlayContainerStyle={{ backgroundColor: 'gray' }}
                        source={{
                            uri: auth.currentUser.photoURL
                        }}
                    />
                </View>
            )
        })
    }, [navigation])

    return (
        <SafeAreaView>
            <ScrollView>
                 <ListItem bottomDivider>
                    <Avatar
                        size="medium"
                        rounded
                        title="US"
                        overlayContainerStyle={{ backgroundColor: 'lightgray' }}
                        // source={{ uri: item.avatar_url }}
                    />
                    <ListItem.Content>
                    <ListItem.Title style={{fontWeight: "700"}}>Group1</ListItem.Title>
                    <ListItem.Subtitle
                        numberOfLines={1}
                        ellipsizeMode="tail"
                        style={{ color: "#999", fontWeight: "400" }}
                    >
                        Last Message Last MessageLast MessageLast Message
                    </ListItem.Subtitle>
                    </ListItem.Content>
                    <ListItem.Chevron />
                </ListItem>
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen

