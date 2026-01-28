import ThemeContext from "./Themecontext";

const ThemeProvider = ({ children }) => {
  return (
    <ThemeContext.Provider value="dark">
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
