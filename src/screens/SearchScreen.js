import { View, Text, StyleSheet, TextInput } from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";

const SearchScreen = () => {
    return (
        <View>
            <View style={styles.searchBarContainer}>
                <Icon name="search" size={30} style={styles.searchBarIcon} />
                <TextInput
                    placeholder="enter search..."
                    style={styles.searchBarTextInput}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    searchBarContainer: {
        backgroundColor: "white",
        borderRadius: 10,
        flexDirection: "row",
        margin: 10,
        padding: 10,
        alignItems: "center",
    },
    searchBarIcon: {
        marginRight: 10,
    },
    searchBarTextInput: {
        fontSize: 18,
    },
});

export default SearchScreen;
