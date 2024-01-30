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
        'http://ns2.dataindev.com:8080/cellphones/allCellphones'
      ); // Usar axios para la petición GET

      console.log(response.data.content); // Acceder a los datos directamente desde response.data
      set({ products: response.data.content });

      // Filtrar categorías únicas y actualizar el estado
      const uniqueCategories = [
        ...new Set(response.data.content.map((product) => product.category)),
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
  productId: [],
  // eslint-disable-next-line space-before-function-paren
  getProductById: async (id) => {
    try {
      const response = await axios.get(
        `http://ns2.dataindev.com:8080/cellphones/${id}`
      );
      console.log(response.data);
      set({ productId: response.data });
    } catch (error) {
      console.error(`Error fetching product with id ${id}:`, error);
    }
  },

  setCurrentPage: (page) => set({ currentPage: page }),

  nextPage: () => set((state) => ({ currentPage: state.currentPage + 1 })),

  prevPage: () => set((state) => ({ currentPage: state.currentPage - 1 })),
}));

export default useStore;
