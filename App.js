/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { Provider } from 'react-redux';
import Store from './src/Store'

import { Header, CrytoContainer } from './src/components/index';

import {
  // Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


const App = () => {
  return (
    <Provider store={Store}>
      <View>
        <Header />
        <CrytoContainer />
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({

});



export default App;
