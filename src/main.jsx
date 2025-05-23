import { ColorModeProvider } from "./components/ui/color-mode.jsx";
import { 
  ChakraProvider,
  defaultSystem,
} from '@chakra-ui/react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <ChakraProvider value={defaultSystem}>
      <ColorModeProvider>
        <App />
      </ColorModeProvider>
  </ChakraProvider>
)
