import { View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useState } from "react";

import { Button } from "../components/Button";
import { Spacer } from "../components/Spacer";
import { getRandomSixNumber } from "../utils/Utils";
import { Header } from "../components/Header/Header";
import { Typography } from "../components/Typography";
import { LottoNumberView } from "../components/LottoNumberView";
import { createNewNumbers } from "../actions/lottoNumbers";

export const HomeScreen = (props) => {
  const numbers = useSelector((state) => state.numbers.currentNumber);
  // const [numbers, setNumbers] = useState([]);

  const dispatch = useDispatch();

  const onPressGetNumber = useCallback(() => {
    // const randomNumbers = getRandomSixNumber();
    // setNumbers(randomNumbers);
    dispatch(createNewNumbers());
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
            {numbers.length === 6 && <LottoNumberView numbers={numbers} />}
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
