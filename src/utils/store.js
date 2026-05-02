// Zustand store for global state management (optional)
import { create } from 'zustand';

export const useAppStore = create((set) => ({
  // Language state
  language: 'en',
  setLanguage: (language) => set({ language }),

  // Loading state
  isLoading: false,
  setIsLoading: (isLoading) => set({ isLoading }),

  // Notification state
  notification: null,
  setNotification: (notification) => set({ notification }),
  clearNotification: () => set({ notification: null }),

  // Auth state
  isAuthenticated: false,
  user: null,
  setAuth: (isAuthenticated, user) => set({ isAuthenticated, user }),
  logout: () => set({ isAuthenticated: false, user: null }),

  // Form data cache
  formCache: {},
  setCacheFormData: (formName, data) => set((state) => ({
    formCache: { ...state.formCache, [formName]: data }
  })),
  getCacheFormData: (formName) => {
    // Access via state in component
    return (state) => state.formCache[formName] || null;
  },
}));
