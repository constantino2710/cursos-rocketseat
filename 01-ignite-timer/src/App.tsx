import { ThemeProvider } from "styled-components";
import { Button } from "./components/button/button.tsx";

import { defaultTheme } from './styles/themes/default.ts'
import { GlobalStyles } from "./styles/global.ts";
export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
    <Button variant='primary' />
    <Button variant='secondary'/>
    <Button variant='danger' />
    <Button variant='success' />
    <Button />
    <GlobalStyles />
    </ThemeProvider>
  )
}
