import { View } from "react-native";
import { Header } from "../components/Header/Header";
import { Spacer } from "../components/Spacer";
import { Button } from "../components/Button";
import { useCallback } from "react";
import { Typography } from "../components/Typography";
import { LottoNumberView } from "../components/LottoNumberView";

export const HomeScreen = () => {
  const onPressGetNumber = useCallback(() => {}, []);

  const getNumberBackgroudColor = useCallback(() => {
    const randomNumber = Math.floor(Math.random() * 10) % 6;
    if (randomNumber === 0) return "red";
    if (randomNumber === 1) return "blue";
    if (randomNumber === 2) return "gray";
    if (randomNumber === 3) return "green";
    if (randomNumber === 4) return "purple";
    return "black";
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Header>
        <Header.Title title="HOME"></Header.Title>
      </Header>

      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "center",
          paddingHorizontal: 12,
        }}
      >
        <View
          style={{
            height: 250,
            flexDirection: "column",
            paddingHorizontal: 24,
            backgroundColor: "white",
            borderColor: "gray",
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <LottoNumberView numbers={[1, 2, 3, 4, 5, 6]} />
          </View>
        </View>

        <Spacer space={20} />

        <Button onPress={onPressGetNumber}>
          <View
            style={{
              backgroundColor: "black",
              paddingVertical: 24,
              alignItems: "center",
            }}
          >
            <Typography color="white" fontSize={18}>
              로또 번호 추출하기
            </Typography>
          </View>
        </Button>
      </View>
    </View>
  );
};
