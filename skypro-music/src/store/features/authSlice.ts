import { TokenType, UserType } from "@/app/api/AuthApi";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";






type UserListType = {
  isAuthState: boolean,
  userData: null | UserType,
  token: null | TokenType,
};

const initialState: UserListType = {
  isAuthState: false,
  userData: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<UserType>) => {
      state.userData = action.payload;
    },
    setToken: (state, action: PayloadAction<TokenType>) => {
      state.token = action.payload;
    },
    setAuthState: (state) => {
      state.isAuthState = !state.isAuthState;
    },
  },
});

export const {
  setAuthState,
  setUserData,
  setToken,
} = authSlice.actions;
export const authReducer = authSlice.reducer;

//В коде выше мы определяем начальное состояние initialState,
// в котором authState указывает на статус аутентификации пользователя.
// С помощью функции createSlice мы создаем срез с именем auth,
// включающий в себя редьюсеры для обработки действий, таких как setAuthState,
// позволяющий обновлять состояние аутентификации.