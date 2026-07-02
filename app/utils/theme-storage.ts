const listeners = new Set<() => void>();

export function readStoredTheme(): "dark" | "light" {
  return document.documentElement.dataset.theme === "light" ? "light" : "dark";
}

export function applyTheme(theme: "dark" | "light") {
  document.documentElement.dataset.theme = theme;
  listeners.forEach((listener) => listener());
}

export function isLightTheme(): boolean {
  return readStoredTheme() === "light";
}

export function subscribeTheme(onStoreChange: () => void) {
  listeners.add(onStoreChange);
  return () => {
    listeners.delete(onStoreChange);
  };
}

export function getThemeSnapshot(): boolean {
  return isLightTheme();
}

export function getThemeServerSnapshot(): boolean {
  return false;
}
