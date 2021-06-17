import React, { Component } from "react"
import { View, Text, StyleSheet } from "react-native"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Messages = (props) => {
    return (
        <View style={styles.mainView}>
            <Text style={styles.textStyle}>
                Message
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyle: {
        alignSelf: 'center',
        fontSize: wp(5),
        fontWeight: '600'
    }
});
export default Messages;

