import React from "react";
import {Text, View, Button} from "react-native";
import {Card} from "react-native-elements";

class HomeScreen extends React.Component {

    render() {

        const {navigate} = this.props.navigation;

        return (
            <View>
                <Card title="Home!">
                    <Text>This is the Home screen!</Text>
                    <Button title="Go to Profile" onPress={() => navigate("Profile")} />
                </Card>
            </View>
        );
    }

}

export default HomeScreen;