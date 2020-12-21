import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import AppColors from "./app/config/colors";
import Deck from "./app/components/Deck";

const App = () => {

  const title = () => {
    return (
      <View style={styles.componentContainer}>
        <Text style={styles.title}>
          {"NoSync"}
        </Text>
      </View>
    )
  }

  const crossFade = () => {
    return (
      <View style={styles.componentContainer}>

      </View>
    )
  }

  return (
    <>
      <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={AppColors.backgroundGrey} />
        {title()}
        <View style={styles.deck}>
          <Deck />
        </View>
        <View style={styles.deck}>
          <Deck />
        </View>
        {crossFade()}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.backgroundGrey,
    flex: 1
  },
  componentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    color: AppColors.turquoise,
    fontSize: 50
  },
  deck: {
    flex: 4
  }

});

export default App;
