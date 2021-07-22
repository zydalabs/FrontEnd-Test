export const localStorage = window.localStorage;
export const currentTheme = localStorage.getItem('theme') || 'light';

export const setThemeInLocalStorage = theme =>
  localStorage.setItem('theme', theme);
