import React, { useEffect, useState } from 'react';
import { auth, db } from '../firebase';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

const Messages = ({ id, chatType }) => {
    
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
                    <View style={styles.sentcontainer}>
                        <Text style={styles.sentmes}>{message.data.message}</Text>
                        <Text style={styles.time}>
                            {message.data.timestamp?.toDate()
                            .toLocaleString([], { hour: '2-digit', minute:'2-digit', hour12: true })}
                        </Text>
                    </View>                
                </View>
            ) : (
                <View key={message.id} style={styles.receive}>
                    <View style={styles.receivecontainer}>        
                        { chatType === "G" &&
                            <Text style={styles.sentby}>{message.data.sentBy}</Text>}
                            
                        <Text style={styles.receivemes}>{message.data.message}</Text>
                        <Text style={styles.time}>
                            {message.data.timestamp?.toDate()
                            .toLocaleString([], { hour: '2-digit', minute:'2-digit', hour12: true })}
                        </Text>
                    </View>
                </View>
            )
        ))}
    </ScrollView>
    )
}

export default Messages

const styles = StyleSheet.create({
    sent: {
        marginTop: 12,
        marginRight: 12,
        alignItems: "flex-end",
        justifyContent: "center",
    },

    receive: {
        marginTop: 12,
        marginLeft: 12,
        alignItems: "flex-start",
        justifyContent: "center",     
    },

    sentmes: {
        fontSize: 16,
        padding: 5,
        color: "black",
    },
    
    receivemes: {
        fontSize: 16,
        padding: 5,  
        color: "black",
    },

    sentcontainer: {
        backgroundColor: "lightgreen",
        maxWidth: "80%",
        padding: 5
    },

    receivecontainer: {
        backgroundColor: "white",
        maxWidth: "80%",
        padding: 5
    },

    sentby: {
        fontSize: 12,
        color: "tomato"
    },

    time: {
        fontSize: 10,
        color: "#444",
        marginLeft: "auto"
    }
});
