import { Flex,useMediaQuery } from '@chakra-ui/react';
import Header from './components/Header';
import Main from './Main';
import About from './Main/About';
import Services from './Main/Services';
import Porposal from './Main/Proposal';
import Partnership from './Main/Partnership';
import Requirements from './Main/Requirements';
import { Link } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import  whatsappImage  from './images/whatsapp.svg'

import Footer from './components/Footer';

function App() {
  const [isDesktop] = useMediaQuery("(max-width: 1440px)");
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const [showWhatsApp, setShowWhatsApp] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      const partnershipSection = document.getElementById('partnership');
      if (partnershipSection) {
        const scrollPosition = window.scrollY + window.innerHeight;
        const partnershipPosition = partnershipSection.offsetTop;
        setShowWhatsApp(scrollPosition >= partnershipPosition);
      }
    };


    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleAlert = () => {
    alert('Você clicou no botão do WhatsApp');
  };



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
        {isDesktop && showWhatsApp && (
          <Link
            // href="https://seu-link-do-whatsapp.com"
            target="_blank"
            rel="noopener noreferrer"
            pos="fixed"
            bottom={isMobile ? "6rem" : (isDesktop ? "10rem" : "4")}
            right={isMobile ? "1rem" : (isDesktop ? "5rem" : "5rem")}
            zIndex="9999"
            alt="Botão para abrir conversa no WhatsApp"
          >
            <img src={whatsappImage} alt="WhatsApp" onClick={handleAlert} />
          </Link>
        )}
        <Footer id="footer" />
      </Flex>
    </Flex>
  );
}

export default App;
