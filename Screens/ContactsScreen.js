import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { Icon } from 'react-native-elements';

const ContactsScreen = ({ navigation }) => {

    return (
        <SafeAreaView style={{ flex: 1 }}>
            {/* show all contacts */}

            <Icon name='add'
                color='#00bfa5'
                reverse
                containerStyle={styles.icon}
                onPress={() => console.log("Hello")}
                raised
            />
        </SafeAreaView>
    )
}

export default ContactsScreen

const styles = StyleSheet.create({
    icon: {
        position: 'absolute',
        bottom: 10,
        right: 7
    }
})
