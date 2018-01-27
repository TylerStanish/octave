import { AppRegistry } from 'react-native';
import React from 'react';
import App from './App';
import reducers from './reducers';
import {Provider} from "react-redux";
import {createStore} from "redux";

interface Props {}
interface State {}
class RootComponent extends React.Component<Props, State>{
  render(){
    return(
      <Provider store={createStore(reducers)}>
        <App/>
      </Provider>
    );
  }
}

AppRegistry.registerComponent('bla', () => RootComponent);
