const divToggle = document.querySelector(".toggle");
const counter = document.querySelector("h1");
const btnIncrease = document.querySelector("#increase");
const btnDecrease = document.querySelector("#decrease");

const TOGGLE_SWITCH = "TOGGLE_SWITCH";
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";

const toggleSwitch = () => {
  return { type: TOGGLE_SWITCH };
};
const increase = (difference) => {
  return { type: INCREASE, difference };
};
const decrease = () => {
  return { type: DECREASE };
};

const initialState = {
  toggle: false,
  counter: 0,
};

const counterReducer = (state = initialState, action) => {
  //state가 undefined 일 때는 initialState를 기본값으로 사용
  //action.type에 따라 다른 작업을 처리함
  switch (action.type) {
    case TOGGLE_SWITCH:
      return {
        ...state, //불변성 유지
        toggle: !state.toggle,
      };
    case INCREASE:
      return {
        ...state, //불변성 유지
        counter: state.counter + action.difference,
      };
    case DECREASE:
      return {
        ...state, //불변성 유지
        counter: state.counter - 1,
      };
    default:
      return state;
  }
};
