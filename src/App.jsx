import { useState } from 'react';
import { Stack } from '@chakra-ui/react';
import { TopSection } from "./components/top-section.jsx";
import { AboutSection } from './components/about-section.jsx';

function App() {

  return (
    <Stack>
      <TopSection />
      <AboutSection />
    </Stack>
  )
}

export default App
