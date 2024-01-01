import { create } from 'zustand';
import axios from 'axios'; // Importar axios

const useStore = create((set) => ({
  products: [],
  categories: [],
  currentPage: 1,
  totalPages: 1,

  // eslint-disable-next-line space-before-function-paren
  fetchProducts: async () => {
    try {
      const response = await axios.get(
        'https://test-api-nefw.onrender.com/products'
      ); // Usar axios para la petición GET

      console.log(response.data); // Acceder a los datos directamente desde response.data
      set({ products: response.data });

      // Filtrar categorías únicas y actualizar el estado
      const uniqueCategories = [
        ...new Set(response.data.map((product) => product.category)),
      ];
      set({ categories: uniqueCategories });

      // Actualizar totalPages si la respuesta incluye la información
      if (response.headers['x-total-pages']) {
        set({ totalPages: parseInt(response.headers['x-total-pages']) });
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  },

  setCurrentPage: (page) => set({ currentPage: page }),

  nextPage: () => set((state) => ({ currentPage: state.currentPage + 1 })),

  prevPage: () => set((state) => ({ currentPage: state.currentPage - 1 })),
}));

export default useStore;
