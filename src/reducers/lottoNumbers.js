import { CREATE_NEW_NUMBERS } from "../actions/lottoNumbers";

const defaultState = {
  currentNumber: [],
  history: [],
};

export const lottoNumberReducers = (state = defaultState, action) => {
  if (action.type === CREATE_NEW_NUMBERS) {
    const date = new Date();

    return {
      ...state,
      currentNumber: action.numbers,
      history: state.history.concat([
        {
          date: `${date.getFullYear()}. ${
            date.getMonth() + 1
          }. ${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
          numbers: action.numbers,
        },
      ]),
    };
  }
  return {
    ...state,
  };
};
