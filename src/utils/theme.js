// Check user's preference from localStorage or system preference
const savedTheme = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const theme = savedTheme || (prefersDark ? "dark" : "light");
document.documentElement.setAttribute("data-theme", theme);
