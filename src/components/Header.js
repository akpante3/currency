import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const Header = () => {
    return (
        <View style={headerContainer}>
            <Text style={header}>Crytocurency app</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        display: "flex",
        marginTop: 55,
        alignItems: "center",
    },
    header: {
        fontWeight: "bold",
        fontSize: 40,
    }
});

const { headerContainer, header } = styles

export default Header;