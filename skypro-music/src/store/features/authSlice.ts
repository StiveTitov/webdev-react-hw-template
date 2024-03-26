import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AuthStateType =  {
  authState: boolean;
}

const initialState: AuthStateType = {
  authState: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthState: (state, action: PayloadAction<boolean>) => {
      state.authState = action.payload;
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