import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IAviaState {
  startLocation: string;
  endLocation: string;
  startDate: string;
  endDate: string;
}

interface IAviaSlice {
  aviaData: IAviaState;
  price: string;
}

const initialState: IAviaSlice = {
  aviaData: { startLocation: "", endLocation: "", startDate: "", endDate: "" },
  price: "4 150",
};

export const aviaSlice = createSlice({
  name: "avia",
  initialState,
  reducers: {
    updateAviaState: (state, action: PayloadAction<IAviaState>) => {
      state.aviaData = action.payload
      if(action.payload.endDate){
        state.price = "9 300"
      }
    },
  },
});

export const { updateAviaState } = aviaSlice.actions;
export default aviaSlice.reducer;
