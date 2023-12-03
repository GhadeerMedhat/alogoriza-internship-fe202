// store.js
import { createPinia } from 'pinia';

export const pinia = createPinia();

export const useStore = pinia(() => ({
  selectedHotelName: '',
  setSelectedHotelName(hotelName) {
    this.selectedHotelName = hotelName;
  },
}));
