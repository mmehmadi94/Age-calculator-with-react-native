/**
 * @format
 */

// To Create any component, we need to
// 1. Import needed library
// 2. Create component
// 3. Rendering on the device

// We can do (import ReactNative from 'react-native';)
// but insted of import the whole framework we specify what we need
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

const Sample = () => {
  return(
    <Text>HEllo World</Text>
  );
}

AppRegistry.registerComponent(appName, () => App);
