const STORAGE_KEY = "toggled";

const listeners = new Set<() => void>();

export function readStoredTheme(): "dark" | "light" {
  return localStorage.getItem(STORAGE_KEY) === "light" ? "light" : "dark";
}

export function applyTheme(theme: "dark" | "light") {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem(STORAGE_KEY, theme);
  listeners.forEach((listener) => listener());
}

export function isLightTheme(): boolean {
  return readStoredTheme() === "light";
}

export function subscribeTheme(onStoreChange: () => void) {
  listeners.add(onStoreChange);
  window.addEventListener("storage", onStoreChange);
  return () => {
    listeners.delete(onStoreChange);
    window.removeEventListener("storage", onStoreChange);
  };
}

export function getThemeSnapshot(): boolean {
  return isLightTheme();
}

export function getThemeServerSnapshot(): boolean {
  return false;
}
