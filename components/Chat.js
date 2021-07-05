import React from 'react';
import { Avatar, ListItem } from 'react-native-elements';

const Chat = ({id, data}) => {
    return (
         <ListItem bottomDivider>
            <Avatar
                size="medium"
                rounded
                title={data.chatName[0]}
                overlayContainerStyle={{ backgroundColor: 'lightgray' }}
                source={{ uri: data?.chatPic }}
            />
            <ListItem.Content>
                <ListItem.Title style={{ fontWeight: "700" }}>{data.chatName}</ListItem.Title>
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
    )
}

export default Chat
