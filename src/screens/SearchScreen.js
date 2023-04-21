import { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";

const SearchScreen = () => {
    const [term, setTerm] = useState("");

    const search = () => {
        setTerm("");
    };

    return (
        <View>
            <View style={styles.searchBarContainer}>
                <Icon name="search" size={30} style={styles.searchBarIcon} />
                <TextInput
                    placeholder="enter search..."
                    style={styles.searchBarTextInput}
                    value={term}
                    onChangeText={setTerm}
                />
                <TouchableOpacity
                    style={styles.searchBarButton}
                    onPress={search}
                >
                    <Text style={styles.searchBarTextInput}>Submit</Text>
                </TouchableOpacity>
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
        justifyContent: "space-between",
    },
    searchBarIcon: {
        marginRight: 10,
    },
    searchBarTextInput: {
        fontSize: 18,
    },
    searchBarButton: {},
});

export default SearchScreen;
