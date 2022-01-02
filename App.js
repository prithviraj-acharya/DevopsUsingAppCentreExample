/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import Crashes from 'appcenter-crashes';
import Analytics from 'appcenter-analytics';

const App = () => {
  useEffect(() => {
    checkPreviousSession();
  }, []);

  async function checkPreviousSession() {
    try {
      const didCrash = await Crashes.hasCrashedInLastSession();

      if (didCrash) {
        alert('Sorry! we are sorry to crash your app!');
      }
    } catch (e) {
      console.log('ERROR IS: ' + e);
    }
  }

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Text>My name is Prithviraj</Text>
        <Text>This is my new App Centre CI CD change in feature.</Text>
        <Text
          style={{ padding: 100 }}
          onPress={() => {
            alert('clicked');
            Analytics.trackEvent('clicked_this', { Internet: 'wifi' });
          }}>
          This is my line.
        </Text>
        <Text>This is my new feature-1.</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
