import { Flex, Text, Box, Image, Link, useMediaQuery } from "@chakra-ui/react";
import mumulogo from '../../images/mumu3 1.svg'
import facebookImg from '../../images/facebook_svgrepo.com.svg'
import instagramImg from '../../images/instagram-1_svgrepo.com.svg'
import appStore from '../../images/AppStore.svg'
import GooglePlayStore from '../../images/GooglePlayStore.svg'

export default function Footer() {

  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <Box bg="#E5E5E587">
      <Flex
        direction={isMobile ? "column" : "row"}
        justify="center"
        align="center"
        p="1rem"
        mx="auto"
        mt="2rem"
        flexWrap={isMobile ? "none" : "wrap"}
        gap={isMobile ? "0" : "2rem"}
        alignItems={isMobile ? "center" : "baseline"}
      >
        <Flex
          direction="column"
          align="center"
          mb={{ base: "2rem", md: "0" }}
          w={isMobile ? "100%" : "21%"}
        >
          <Link>
            <Image src={mumulogo} alt="logo" /> 
          </Link>
          <Box fontSize={5}  alignSelf={isMobile ? "none" : "flex-end"}>
            <Text fontSize={13} color="#000">
              contato@mumudelivery.com
            </Text>
            <Text fontSize={13} color="#000">
              +55 (21) 99999-9999
            </Text>
          </Box>
          <Flex mt="1rem">
            <Link mr="0.5rem">
              <Image src={facebookImg} alt="imagem Facebook" />
            </Link>
            <Link>
              <Image src={instagramImg} alt="imagem Instagram" />
            </Link>
          </Flex>
        </Flex>

        <Flex
          direction="column"
          align={isMobile ? "center" : "flex-start"}
          mb={{ base: "2rem", md: "0" }}
        >
          <Text fontWeight={700} mb="0.5rem" color={"#f00"}>
            Sobre o Mumu Delivery
          </Text>
          <Link color="#000">Me ajuda, Mumu</Link>
          <Link color="#000">Cidades que atendemos</Link>
          <Link color="#000">Trabalhe conosco</Link>
          <Link color="#000">Quero ser parceiro</Link>
          <Link color="#000">Comprar cartão presente</Link>
        </Flex>

        <Flex
          direction="column"
          align={isMobile ? "center" : "flex-start"}
          mb={{ base: "0rem", md: "0" }}
        >
          <Text fontWeight={700} mb="0.5rem" color={"#f00"} >
            Termos e Política
          </Text>
          <Link color="#000">Termos de Uso</Link>
          <Link color="#000">Política de Privacidade</Link>
        </Flex>


        <Flex
          direction="column"
          align={isMobile ? "center" : "flex-start"}
          mb={{ base: "2rem", md: "0" }}
        >
          <Text fontWeight={700} mb="0.5rem" color={"#f00"} >
            Termos e Política
          </Text>
          <Link>
            <Image src={appStore} alt="Download on the App Store" />
          </Link>
          <Link>
            <Image src={GooglePlayStore} alt="Get it on Google Play" />
          </Link>
        </Flex>
     
      </Flex>
        <Flex
          direction={{ base: "column", md: "row" }}
          align={isMobile ?  "center" :  "flex-end"}
          justify="center"
          p="2rem"
          // bg="#f9f9f9"
          borderTop="1px solid rgba(0,0,0,0.1)"
          borderWidth={"1%"}
        >
          <Text fontSize={12} color="#000" textAlign="center" mb={{ base: "1rem", md: "0" }}>
            © 2023 Mumu Delivery. Todos os direitos reservados.
          </Text>

        </Flex>

    </Box>
  );
}
