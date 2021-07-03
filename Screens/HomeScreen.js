import React, { useLayoutEffect } from 'react';
import { ScrollView, SafeAreaView} from 'react-native';
import { SearchBar, Avatar, ListItem } from 'react-native-elements';
import { auth } from '../firebase';

const HomeScreen = ({ navigation }) => {

    useLayoutEffect(() => {
        navigation.setOptions({
            title: "WhatsappCLone",
            // headerTitleAlign: "left",
            headerRight: () => (
                    <Avatar
                        rounded
                        title="LG"
                        onPress={() => {
                            auth.signOut();
                            navigation.replace("Login");
                        }}
                        containerStyle={{marginRight: 10}}
                        overlayContainerStyle={{ backgroundColor: 'gray' }}
                        // source={{
                        //     uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                        // }}
                    />
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

