import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import BodyText from "../components/BodyText";
import MainButton from "../components/MainButton";
import TitleText from "../components/TitleText";
import colors from "../constants/colors";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <TitleText>The Game is Over!</TitleText>
      <View style={styles.imageContainer}>
        <Image
            fadeDuration= {1000}
          resizeMode="cover"
          style={styles.image}
          source={require("../assets/success.png")}
        //   source={{uri: 'https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}}
        />
      </View>
      <View style={styles.resultContainer}>
      <BodyText style={styles.resultText}>Your phone needed <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to guess the <Text style={styles.highlight}>{props.userNumber}</Text></BodyText>
      </View>
      <MainButton onPress={props.onRestart} >NEW GAME</MainButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderRadius: 200,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: 30
  },
  highlight: {
      color: colors.primary,
      fontFamily: 'open-sans-bold'
  },
  resultContainer: {
      marginHorizontal: 30,
      marginVertical: 15
  },
  resultText: {
        textAlign: 'center',
        fontSize: 20
  }
});

export default GameOverScreen;
