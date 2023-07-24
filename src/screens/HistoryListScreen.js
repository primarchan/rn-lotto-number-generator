import { useState, useCallback } from "react";
import { Header } from "../components/Header/Header";
import { View, FlatList } from "react-native";
import { Typography } from "../components/Typography";
import { LottoNumberView } from "../components/LottoNumberView";

export const HistoryListScreen = () => {
  const getNumberBackgroudColor = useCallback(() => {
    const randomNumber = Math.floor(Math.random() * 10) % 6;
    if (randomNumber === 0) return "red";
    if (randomNumber === 1) return "blue";
    if (randomNumber === 2) return "gray";
    if (randomNumber === 3) return "green";
    if (randomNumber === 4) return "purple";
    return "black";
  }, []);

  const [history] = useState([
    { date: new Date(), numbers: [1, 2, 3, 4, 5, 6] },
    { date: new Date(), numbers: [1, 2, 3, 4, 5, 6] },
    { date: new Date(), numbers: [1, 2, 3, 4, 5, 6] },
    { date: new Date(), numbers: [1, 2, 3, 4, 5, 6] },
  ]);

  return (
    <View style={{ flex: 1 }}>
      <Header>
        <Header.Title title={"HISTORY"}></Header.Title>
      </Header>
      <FlatList
        style={{ flex: 1 }}
        data={history}
        contentContainerStyle={{ paddingTop: 24, paddingBottom: 24 }}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                paddingHorizontal: 20,
                paddingVertical: 12,
                marginHorizontal: 24,
                height: 120,
                backgroundColor: "white",
              }}
            >
              <Typography fontSize={16}>
                {item.date.getFullYear()}. {item.date.getMonth() + 1}.
                {item.date.getDate()}
              </Typography>
              <LottoNumberView numbers={item.numbers} />
            </View>
          );
        }}
      />
    </View>
  );
};
