import { Flex } from '@chakra-ui/react';
import Header from './components/Header';
import Main from './Main';
import About from './Main/About';
import Services from './Main/Services';
import Porposal from './Main/Proposal';
import Partnership from './Main/Partnership';
import Requirements from './Main/Requirements';

import Footer from './components/Footer';

function App() {
  



  return (
    <Flex h="100vh" justify="center">
      <Flex direction="column" w="100%" maxW="1440px">
        <Header />
        <Main />
        <About />
        <Services />
        <Porposal />  
        <Partnership id="partnership" />
        <Requirements id="requirements" />
        <Footer id="footer" />
      </Flex>
    </Flex>
  );
}

export default App;
