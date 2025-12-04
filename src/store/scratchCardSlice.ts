import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ScratchCardState {
  isOpen: boolean;
  isRevealed: boolean;
  couponCode: string;
  discount: string;
  freeGift: string;
  brandName: string;
}

const initialState: ScratchCardState = {
  isOpen: true,
  isRevealed: false,
  couponCode: 'CCBB20',
  discount: 'Flat 20% Off',
  freeGift: '& Get Free Moisturiser worth ₹399',
  brandName: 'CLAY',
};

const scratchCardSlice = createSlice({
  name: 'scratchCard',
  initialState,
  reducers: {
    openModal: (state) => {
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
    revealCard: (state) => {
      state.isRevealed = true;
    },
    resetCard: (state) => {
      state.isRevealed = false;
      state.isOpen = true;
    },
    setCouponCode: (state, action: PayloadAction<string>) => {
      state.couponCode = action.payload;
    },
  },
});

export const { openModal, closeModal, revealCard, resetCard, setCouponCode } = scratchCardSlice.actions;
export default scratchCardSlice.reducer;
