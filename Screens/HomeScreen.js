import React, { useLayoutEffect, useEffect, useState } from 'react';
import { ScrollView, SafeAreaView, View, TouchableOpacity} from 'react-native';
import { Avatar, SpeedDial } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';
import { auth, db } from '../firebase';
import ChatList from '../components/ChatList';

const HomeScreen = ({ navigation }) => {
    const [chats, setChats] = useState([]);
    const [open, setOpen] = useState(false);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: "WhatsappClone",
            headerTitleAlign: "left",
            headerRight: () => (
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    {/* <TouchableOpacity onPress={() => navigation.navigate("AddChat") }>
                        <FontAwesome name="pencil" size={24} color="black" />
                    </TouchableOpacity> */}

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

    const goToChat = (id, chatName) => {
        navigation.navigate("Chat", {
            id: id,
        });
     };

    useEffect(() => {
        const unsubscribe = db.collection("chats").onSnapshot(snapshot => {
            setChats(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })));
        });
    },[])

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView style={{ flexGrow: 1 }}>
                {chats.map((chat) => (
                    <TouchableOpacity key={chat.id} activeOpacity={0.8}>
                        <ChatList id={chat.id} data={chat.data} goToChat={goToChat}/>
                    </TouchableOpacity>    
                )
                )}
            </ScrollView>

            <SpeedDial
                size="large"
                isOpen={open}
                icon={{ name: 'add', color: '#fff' }}
                buttonStyle={{backgroundColor: "#00bfa5"}}
                openIcon={{ name: 'close', color: '#fff' }}
                onOpen={() => setOpen(!open)}
                onClose={() => setOpen(!open)}
            >
                <SpeedDial.Action
                    icon={{ name: 'chat', color: '#fff' }}
                    buttonStyle={{backgroundColor: "#00bfa5"}}
                    title="Start Personal Chat"
                    onPress={() => console.log('Personal Chat')}
                />
                <SpeedDial.Action
                    icon={{ name: 'group', color: '#fff' }}
                    buttonStyle={{backgroundColor: "#00bfa5"}}
                    title="Make A Group"
                    onPress={() => navigation.navigate("AddChat")}
                />
            </SpeedDial>
        </SafeAreaView>
    )
}

export default HomeScreen

