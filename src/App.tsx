import React from 'react';
import {Text} from 'react-native';
import iTunes from 'react-native-itunes';

interface Props {}
interface State {}

export default class extends React.Component<Props, State>{

  componentDidMount(){
    iTunes.getTracks({fields: ['title', 'artwork'], query: {title: 'AC35'}}).then(tracks => console.log(tracks)).catch(e => console.log(e));
  }

  render(){
    return(
      <Text>Bla bla bla bla bla bla bla bla</Text>
    );
  }
}