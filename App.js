import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SearchScreen from "./src/screens/SearchScreen";

const RootStack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <RootStack.Navigator
                initialRouteName="Search"
                screenOptions={{ title: "Resto" }}
            >
                <RootStack.Screen name="Search" component={SearchScreen} />
            </RootStack.Navigator>
        </NavigationContainer>
    );
}

export default App;
