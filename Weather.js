import React from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const weatherOptions = {
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#373B44", "#4286f4"],
    title: "Thunderstorm",
    subtitle: "Stay safe!",
  },
  Drizzle: {
    iconName: "weather-hail",
    gradient: ["#89F7FE", "#66A6FF"],
    title: "Drizzle",
    subtitle: "Wet day, isn't it?",
  },
  Rain: {
    iconName: "weather-rainy",
    gradient: ["#00C6FB", "#005BEA"],
    title: "Rainy",
    subtitle: "Rain, rain, go away",
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#7DE2FC", "#B9B6E5"],
    title: "Snowy",
    subtitle: "Do you want to build a snowman?⛄️",
  },
  Atmosphere: {
    iconName: "weather-hail",
    gradient: ["#89F7FE", "#66A6FF"],
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#FF7300", "#FEF253"],
    title: "Clear",
    subtitle: "Let's go outsideand get some sunshine",
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#D7D2CC", "#304352"],
    title: "Cloudy",
    subtitle: "I know, it's boring",
  },
  Mist: {
    iconName: "weather-hail",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "Misty",
    subtitle: "Watch out!",
  },
  Dust: {
    iconName: "weather-hail",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "Dusty",
    subtitle: "Stay home🏡",
  },
  Haze: {
    iconName: "weather-hail",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "Hazy",
    subtitle: "I have no idea..",
  },
};

export default function Weather({ temp, condition, currentLocation }) {
  return (
    <LinearGradient
      // Background Linear Gradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}>
      <StatusBar barStyle='light-content' />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          name={weatherOptions[condition].iconName}
          size={100}
          color='white'
        />
        <Text style={styles.temp}>{temp}°C</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subtitle}>
          {weatherOptions[condition].subtitle}
        </Text>

        <Text style={styles.currentLocation}>
          <FontAwesome name='location-arrow' size={20} color='white' />
          {`  ${currentLocation}, `}
        </Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
    "Haze",
    "Mist",
    "Dust",
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  temp: {
    fontSize: 32,
    color: "white",
  },
  title: {
    color: "white",
    fontSize: 44,
    fontWeight: "300",
    marginBottom: 10,
    textAlign: "left",
  },
  subtitle: {
    fontWeight: "600",
    color: "white",
    fontSize: 24,
    textAlign: "left",
  },
  currentLocation: {
    fontWeight: "300",
    color: "white",
    fontSize: 24,
    marginTop: 30,
  },
  textContainer: {
    alignItems: "flex-start",
    paddingHorizontal: 40,
    justifyContent: "center",
    flex: 1,
  },
});
