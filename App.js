/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform} from 'react-native';
import {createAppContainer, createStackNavigator} from 'react-navigation'
import type {ColorValue} from "react-native/Libraries/StyleSheet/StyleSheetTypes";
import LoginScene from "./src/scene/LoginScene";
import HomeScreen from "./src/scene/HomeScene";

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

type Props = {};

export default class App extends Component {
    render() {
        return <AppContainer/>;
    }
}
const RootStack = createStackNavigator({
        Home: LoginScene,
        Details: HomeScreen,
    },
    {
        initialRouteName: 'Home',
    })

const AppContainer = createAppContainer(RootStack);

// class HomeScreen extends React.Component {
//     render() {
//         return (
//             <View style={styles.container}>
//                 <KeyboardAvoidingView behavior={"padding"}>
//                     <TextInput style={styles.textInput}
//                                placeholder="请输入邮箱"/>
//                     <TextInput style={styles.textInput}
//                                placeholder="请输入密码"/>
//                     <TouchableOpacity
//                         style={styles.button}
//                         onPress={() => {
//                             this.props.navigation.navigate('Details')
//                         }}>
//                         <Text style={styles.buttonText}>登陆</Text>
//                     </TouchableOpacity>
//                 </KeyboardAvoidingView>
//
//                 {/*<ProgressBarAndroid style={styles.progressBar}/>*/}
//             </View>
//         );
//     }
// }


// class DetailsScreen extends React.Component {
//     render() {
//         return (
//             <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
//                 <Text>Details Screen</Text>
//             </View>
//         );
//     }
// }


// const styles = StyleSheet.create({
//         container: {
//             flex: 1,
//             justifyContent: 'center',
//             alignItems: 'stretch',
//             marginLeft: 50,
//             marginRight: 50,
//         },
//         welcome: {
//             fontSize: 20,
//             textAlign: 'center',
//             margin: 10,
//         },
//         instructions: {
//             textAlign: 'center',
//             color: '#333333',
//             marginBottom: 5,
//         },
//         textInput: {
//             padding: 8,
//             height: 50,
//             marginBottom: 16,
//             borderRadius: 8,
//             backgroundColor: "#f2f2f2"
//         },
//         button: {
//             height: 40,
//             borderRadius: 16,
//             backgroundColor: "#23c4c1",
//             alignItems: "center",
//
//             justifyContent: 'center',
//         },
//         buttonText: {
//             color: "#ffffff",
//         },
//         progressBar: {
//             color: "#23c4c1",
//             width: 50,
//             height: 50,
//         }
//
//     })
// ;
