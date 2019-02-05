import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import PropTypes from "prop-types";

const weatherCases = {
    Rain: {
        colors: ["#00C6FB", "#005BEA"],
        title: "Raining!",
        subtitle: "For more info look outside",
        icon: "weather-pouring"
    },
    Clear: {
        colors: ["#FEF253", "#FF7300"],
        title: "Sunny!",
        subtitle: "Go outside!",
        icon: "weather-sunny"
    },
    Thunderstorm: {
        colors: ["#00ECBC", "#007ADF"],
        title: "Thunderstorm in the house!",
        subtitle: "Actually, outside of the hause",
        icon: "weather-lightning"
    },
    Clouds: {
        colors: ["#D7D2CC", "#304352"],
        title: "Clouds!",
        subtitle: "The best weather....?",
        icon: "weather-cloudy"
    },
    Snow: {
        colors: ["#7DE2FC", "#B9B6E5"],
        title: "Let it snow!",
        subtitle: "Elsa? - - ·· -",
        icon: "weather-snowy"
    },
    Drizzle: {
        colors: ["#89F7FE", "#66A6FF"],
        title: "Drizzle!",
        subtitle: "Take your umbrella with you",
        icon: "weather-hail"
    },
    Atmosphere: {
      colors: ["#232020", "#8c8383"],
      title: "Foggy!",
      subtitle: "Be careful",
      icon: "weather-fog"
  }
}

function Weather( { temp, weatherName } ) {
  return (
    <LinearGradient colors={weatherCases[weatherName].colors} style={styles.container}>
      <View style={styles.upper}>
        <MaterialCommunityIcons name={weatherCases[weatherName].icon} size={144} color="white" />
        <Text style={styles.temp}>{temp}°C</Text>
      </View>
      <View style={styles.lower}>
        <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
        <Text style={styles.subtitle}>{weatherCases[weatherName].subtitle}</Text>
      </View>
    </LinearGradient>
  );
}

export default Weather;

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    weatherName: PropTypes.string.isRequired
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  upper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  temp: {
    fontSize: 38,
    // backgroundColor: "transparent"
    color: "white",
    marginTop: 10
  },
  lower: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-end",
    paddingLeft: 25
  },
  title: {
    fontSize: 38,
    // backgroundColor: "transparent" // 디폴트값임
    color: "white",
    marginBottom: 10,
    fontWeight: "300"
  },
  subtitle: {
    fontSize: 24,
    // backgroundColor: "transparent"
    color: "white",
    marginBottom: 24
  }
});
