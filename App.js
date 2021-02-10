import React from "react";
import { Alert } from "react-native";
import Loading from "./Loading";
import * as Location from "expo-location";
import Weather from "./Weather";

const API_KEY = "ace64d5a35d1af5e3c51f9443509bfae";

export default class extends React.Component {
  state = {
    isLoading: true,
  };
  getWeather = async (lat, lon) => {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    );
    const data = await response.json();
    // console.log(data);
    this.setState({ isLoading: false, temp: data.main.temp });
  };
  getLocation = async () => {
    try {
      // throw Error();
      await Location.requestPermissionsAsync();
      /* normal */
      // const location = await Location.getCurrentPositionAsync();
      // console.log(location.coords.latitude, location.coords.longitude);
      /* es6 -1 */
      // const { coords } = await Location.getCurrentPositionAsync();
      // console.log(coords.latitude, coords.longitude);
      /* es6 -2 */
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      // Send to API and get weather
      // https://openweathermap.org/
      this.getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert("Can't find you", "😧");
      //  console.log("hello");
    }
  };
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading, temp } = this.state;
    return isLoading ? <Loading /> : <Weather temp={temp} />;
  }
}
