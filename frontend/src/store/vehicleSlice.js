import { createSlice } from '@reduxjs/toolkit';

const item = JSON.parse(sessionStorage.getItem('vehicle'));

export const vehicleSlice = createSlice({
  name: 'vehicle',
  initialState: {
    brand: item?.brand ||null,
    model: item?.model || null,
    fuel: item?.fuel || null
  },
  reducers: {
    updateBrand: (state, action) => {
      state.brand = action.payload;
      sessionStorage.setItem('vehicle', JSON.stringify(state));
    },
    updateModel: (state, action) => {
      state.model = action.payload;
      sessionStorage.setItem('vehicle', JSON.stringify(state));
    },
    updateFuel: (state, action) => {
      state.fuel = action.payload;
      sessionStorage.setItem('vehicle', JSON.stringify(state));
    }
  },
});

export const { updateBrand,updateModel,updateFuel} = vehicleSlice.actions;

export default vehicleSlice.reducer;
