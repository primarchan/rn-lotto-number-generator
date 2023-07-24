import { View } from "react-native";
import { Header } from "../components/Header/Header";

export const HomeScreen = () => {
  return (
    <View>
      <Header>
        <Header.Title title={"HOME"}></Header.Title>
      </Header>
    </View>
  );
};
