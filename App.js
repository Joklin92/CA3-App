import React from 'react';
import { Text, View, Platform, TouchableOpacity, StyleSheet, Button, WebView } from 'react-native';
import { Constants, WebBrowser } from "expo";
import { createStackNavigator  } from 'react-navigation';
import facade from "./apiFacade";


const Touchable = (props) => (
  <TouchableOpacity style={styles.button} onPress={props.onPress}>
    <Text style={styles.buttonText}>{props.title}</Text>
  </TouchableOpacity>)

class people extends React.Component {
  static navigationOptions = { title: "Star Wars people data" }
  constructor(props) {
    super(props);
    this.state= {dataFromServer: "Fetching!!"};
  }
  
  componentDidMount(){
    facade.fetchData("people")
    .then(res=> {
      return res.json()})
    .then(d=> {
      this.setState({dataFromServer: d})})
    .catch(e => console.log("ups"))
  };  
  render() {
    return (      
      <View style={{ flex: 1 }}>
      <Text >{JSON.stringify(this.state.dataFromServer)}</Text>
    {console.log(this.state.dataFromServer)}        
      </View>      
    );
  }
}

class planets extends React.Component {
  static navigationOptions = { title: "Star Wars planets data" }
  constructor(props) {
    super(props);
    this.state= {dataFromServer: "Fetching!!"};
  }
  
  componentDidMount(){
    facade.fetchData("planets")
    .then(res=> {
      return res.json()})
    .then(d=> {
      this.setState({dataFromServer: d})})
    .catch(e => console.log("ups"))
  };  
  render() {
    return (      
      <View style={{ flex: 1 }}>
      <Text >{JSON.stringify(this.state.dataFromServer)}</Text>
    {console.log(this.state.dataFromServer)}        
      </View>      
    );
  }
}

class films extends React.Component {
  static navigationOptions = { title: "Star Wars films data" }
  constructor(props) {
    super(props);
    this.state= {dataFromServer: "Fetching!!"};
  }
  
  componentDidMount(){
    facade.fetchData("films")
    .then(res=> {
      return res.json()})
    .then(d=> {
      this.setState({dataFromServer: d})})
    .catch(e => console.log("ups"))
  };  
  render() {
    return (      
      <View style={{ flex: 1 }}>
      <Text >{JSON.stringify(this.state.dataFromServer)}</Text>
    {console.log(this.state.dataFromServer)}        
      </View>      
    );
  }
}

class species extends React.Component {
  static navigationOptions = { title: "Star Wars species data" }
  constructor(props) {
    super(props);
    this.state= {dataFromServer: "Fetching!!"};
  }
  
  componentDidMount(){
    facade.fetchData("species")
    .then(res=> {
      return res.json()})
    .then(d=> {
      this.setState({dataFromServer: d})})
    .catch(e => console.log("ups"))
  };  
  render() {
    return (      
      <View style={{ flex: 1 }}>
      <Text >{JSON.stringify(this.state.dataFromServer)}</Text>
    {console.log(this.state.dataFromServer)}        
      </View>      
    );
  }
}

class vehicles extends React.Component {
  static navigationOptions = { title: "Star Wars vehicles data" }
  constructor(props) {
    super(props);
    this.state= {dataFromServer: "Fetching!!"};
  }
  
  componentDidMount(){
    facade.fetchData("vehicles")
    .then(res=> {
      return res.json()})
    .then(d=> {
      this.setState({dataFromServer: d})})
    .catch(e => console.log("ups"))
  };  
  render() {
    return (      
      <View style={{ flex: 1 }}>
      <Text >{JSON.stringify(this.state.dataFromServer)}</Text>
    {console.log(this.state.dataFromServer)}        
      </View>      
    );
  }
}

class starships extends React.Component {
  static navigationOptions = { title: "Star Wars starships data" }
  constructor(props) {
    super(props);
    this.state= {dataFromServer: "Fetching!!"};
  }
  
  componentDidMount(){
    facade.fetchData("starships")
    .then(res=> {
      console.log(res.status)
      return res.json()})
    .then(d=> {
      this.setState({dataFromServer: d})})
    .catch(e => console.log("ups"))
  };  
  render() {
    return (      
      <View style={{ flex: 1 }}>
      <Text >{JSON.stringify(this.state.dataFromServer)}</Text>
    {console.log(this.state.dataFromServer)}        
      </View>      
    );
  }
}

class UNLIMITEDPOWER extends React.Component {
  static navigationOptions = { title: "Star Wars UNLIMITED data" }
  constructor(props) {
    super(props);
    this.state= {dataFromServer: "Fetching!!"};
  }  
  componentDidMount(){
    facade.fetchData("")
   //fetch("http://10.50.137.251:8084/CA3/api/starships") //backup local ip
    .then(res=> {
      console.log(res.status)
      return res.json()})
    .then(d=> {
      this.setState({dataFromServer: d})})
    .catch(e => console.log("ups"))
  };  
  render() {
    return (      
      <View style={{ flex: 1 }}>
      <Text >{JSON.stringify(this.state.dataFromServer)}</Text>
    {console.log(this.state.dataFromServer)}        
      </View>      
    );
  }
}
class HomeScreen extends React.Component {
  static navigationOptions = { title: 'Welcome to Ca3' };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View >
        <Touchable onPress={() => navigate('people')} title="Star Wars people data" />
    {/* <Touchable onPress={() => navigate('planets')} title="Star Wars planets data" />*/ }
       {/* <Touchable onPress={() => navigate('films')} title="Star Wars films data" />*/ }
        {/*<Touchable onPress={() => navigate('species')} title="Star Wars species data" />*/ }
        {/*<Touchable onPress={() => navigate('vehicles')} title="Star Wars vehicles data" />*/ }
        {/*<Touchable onPress={() => navigate('starships')} title="Star Wars starships data" />*/ }
        {/*<Touchable onPress={() => navigate('UNLIMITEDPOWER')} title="Star Wars UNLIMITED data" />*/ }
      </View>
    )
  }
}

export default App = () => <RouteStack style={{ marginTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight / 2 }} />

const RouteStack = createStackNavigator({
  Home: { screen: HomeScreen },
  people: { screen: people },
  planets: { screen: planets },
  films: { screen: films },
  species: { screen: species },
  vehicles: { screen: vehicles },
  starships: { screen: starships },
  UNLIMITEDPOWER: { screen: UNLIMITEDPOWER },

});

const styles = StyleSheet.create({
  button: {
    margin: 3,
    alignItems: 'center',
    backgroundColor: '#F916FF'
  },
  buttonText: {
    padding: 7,
    fontSize: 18,
    fontWeight: "bold",
    color: 'white'
  }
})