import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AuthStateType =  {
  isAuthState: boolean;
}

const initialState: AuthStateType = {
  isAuthState: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthState: (state) => {
      state.isAuthState = !state.isAuthState;
    },
  },
});

export const { setAuthState } = authSlice.actions;
export const authReducer = authSlice.reducer;

//В коде выше мы определяем начальное состояние initialState,
// в котором authState указывает на статус аутентификации пользователя. 
// С помощью функции createSlice мы создаем срез с именем auth, 
// включающий в себя редьюсеры для обработки действий, таких как setAuthState, 
// позволяющий обновлять состояние аутентификации.