import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/global';
import theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <h1>Amaro</h1>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
