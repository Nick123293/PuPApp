import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, Pressable, View, TextInput} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Button from './components/Button';

export default function App() {
  const [screen, showScreen] = useState(0);
  // [0 = preLogin screen, 1= loginScreen, 2 = loginVerified]
  /*Redundant code:
  const [showLoginScreen, setshowLoginScreen] = useState(0);
  const [loginVerified, setverifyLogin]= useState(0);*/
  const [text, setText]= useState('');
  return (
    <SafeAreaProvider>
      {
      screen == 1 ? //Login Screen
        <SafeAreaProvider> 
          <View style = {styles.container}>
            <Text> Login Form </Text>
            <TextInput placeholder="Enter Email" onChangeText={userName => setText(userName)}/>
            <TextInput secureTextEntry={true} placeholder="Enter Password" onChangeText={userName => setText(userName)}/>
            <Button label='Verify' onPress={() => {showScreen(2)}}/>
            <Button label="Back to Home Page" onPress={() => showScreen(0)}/>
          </View>
        </SafeAreaProvider>
      :
      screen == 0? //Pre-Login Screen
        <View style={styles.container}>
            <Text>HOME PAGE</Text>
            <Button label="Login" onPress={() => showScreen(1)}/> 
            <StatusBar style="auto"/>
        </View>
      :
      screen == 2? //Home Screen
      <View style={styles.container}>
        <View style={styles.SafeArea}>
          <View style={styles.topBorder}>
            <Text> Home Screen </Text>
          </View>
          <View style={styles.middle}>

          </View>
          <View style={styles.bottom}>

          </View>
        </View>
      </View> 
      :
      <View></View> //Empty view should never be reached, for some reason I get error where there's no else statement
    } 
    </SafeAreaProvider> 
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  loginScreen: {
    flex: .5, //What portion of the screen will this view take (based on what view it is in)
    backgroundColor: "#066",
    justifyContent: 'top', //Where all the content will be centered around (Ex. top means context starts at the top of the screen, center means it starts in the center)
    alignItems: 'center' //Similar to allignment on work documents (words start in the center, left, or right)
  },
  SafeArea: {
    justifyContent: 'flex-start',
    flex: .9255, //I just set this to be right at the point where it says "Home screen" right at the top of my IPhone
    width: 500,
    backgroundColor: '#ff0', //Yellow
    alignItems: 'center',
  },
  topBorder: {
    flex: .05, //Size of top Border
    width: 500,
    justifyContent: 'flex-start', //Puts Home Screen at the top
    alignItems: 'center', //Puts home screen at center alligned
    backgroundColor: "#f0f" //Purple
  },
  middle:{
    flex: .9,
    width: 500,
    backgroundColor: '#0ff' //Light Blue
  },
  bottom:{
    flex: .05,
    width: 500,
    backgroundColor: "#00f" //Dark Blue
  }
});
