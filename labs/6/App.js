import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import homeScreen from "./components/homeScreen";
import Play from "./components/playGame";

const MainNavigator = createStackNavigator({
  Home: {screen: homeScreen},
  Play: {screen: Play}
});

const App = createAppContainer(MainNavigator);

export default App;

