import { Flex } from '@chakra-ui/react';
import Header from './components/Header';
import Main from './Main';
import About from './Main/About';
import Services from './Main/Services';
import Porposal from './Main/Proposal';



function App() {
    

  return (
    <Flex h={20} justify="center">
      <Flex direction="column" w="100%" maxW={'1440px'}>
        <Header />
        <Main />
        <About />
        <Services />
        <Porposal />
      </Flex>
    </Flex>

  );
}

export default App;
