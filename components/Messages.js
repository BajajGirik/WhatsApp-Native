import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { auth, db } from '../firebase';

const Messages = ({ id }) => {
    
    const [messages, setMessages] = useState([]);
        
    useEffect(() => {
        const unsubscribe = db.collection("chats").doc(id).collection("messages")
        .orderBy('timestamp', 'asc').onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })
            ));
        });

        return unsubscribe;
    }, [])

    return (
    <ScrollView style={{ flexGrow: 1}}>
        {messages.map(message => (
            message.data.sentBy === auth.currentUser.email ? (
                <View key={message.id} style={styles.sent}>
                    <Text style={styles.sentby}>{message.data.sentBy}</Text>
                    <Text style={styles.sentmes}>{message.data.message}</Text>
                    {/* <Text>{message.data.timestamp}</Text> */}
                </View>    
            ) : (
                <View key={message.id} style={styles.receive}>
                    <Text style={styles.sentby}>{message.data.sentBy}</Text>
                    <Text style={styles.receivemes}>{message.data.message}</Text>
                </View>    
            )
        ))}
    </ScrollView>
    )
}

export default Messages

const styles = StyleSheet.create({
    sent: {
        marginTop: 30,
        marginRight: 12,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
    },

    receive: {
        marginTop: 30,
        marginLeft: 12,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",     
    },

    sentmes: {
        position: "relative",
        fontSize: 16,
        padding: 12,
        backgroundColor: "lightgreen",
        color: "black",
        maxWidth: "80%",
    },

    receivemes: {
        position: "relative",
        fontSize: 16,
        padding: 12,
        backgroundColor: "#eee",
        color: "black",
        maxWidth: "80%",
    },

    sentby: {
        position: "absolute",
        fontSize: 12,
        top: -15,
    }
});
