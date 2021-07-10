import React from 'react';
import { Avatar, ListItem } from 'react-native-elements';
import anonymous from '../assets/anonymous.png';

const ChatList = ({id, data, goToChat}) => {
    return (
        <ListItem onPress={() => goToChat(id) } bottomDivider>
            <Avatar
                size="medium"
                rounded
                title={data.chatName[0]}
                overlayContainerStyle={{ backgroundColor: 'lightgray' }}
                source={data?.chatPic ? ({
                            uri: data.chatPic
                        }) : (
                            anonymous
                        )}
            />
            <ListItem.Content>
                <ListItem.Title style={{ fontWeight: "700" }}>{data.chatName}</ListItem.Title>
                {data?.lastMsg && (
                    <ListItem.Subtitle
                    numberOfLines={1}
                    ellipsizeMode="tail"
                    style={{ color: "#999", fontWeight: "400" }}
                >
                    {data.chatType === "G"  ? (`${data?.lastMsg?.[0]}: ${data?.lastMsg?.[1]}`) : 
                            (`${data?.lastMsg?.[0]}`)
                    }
                    </ListItem.Subtitle>)}
            </ListItem.Content>
            <ListItem.Chevron />
        </ListItem>
    )
}

export default ChatList
