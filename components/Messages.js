import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { auth, db } from '../firebase';

const Messages = ({ id }) => {
    
    const [messages, setMessages] = useState([]);
        
    useEffect(() => {
        const unsubscribe = db.collection("chats").doc(id).collection("messages")
        .orderBy('timestamp', 'desc').onSnapshot(snapshot => {
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
                    <Text>{message.data.message}</Text>
                </View>    
            ) : (
                <View key={message.id} style={styles.receive}>
                    <Text>{message.data.message}</Text>
                </View>    
            )
        ))}
    </ScrollView>
    )
}

export default Messages

const styles = StyleSheet.create({
    sent: {},
    receive: {}
});
