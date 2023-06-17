import { Flex, Center, Link, Box, Image, useMediaQuery } from "@chakra-ui/react";
import appStore from '../../images/AppStore.svg'
import GooglePlayStore from '../../images/GooglePlayStore.svg'

import mumulogo from '../../images/mumu3 1.svg'

export default function Footer() {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <Flex flex={1} direction={"row"} justify={"space-between"} bg={"#E5E5E587"}>
      <Center
        w={"100%"}
        justifyContent={"space-between"}
        p={4}
        alignItems={"center"}
        m={isMobile ? "0" : "0 1rem"}
      >
        <Flex alignItems={"center"}>
          <Link top={"/"} mr={5}>
            <Image src={mumulogo} alt="logo" />
          </Link>
          <Box display={isMobile ? "flex" : "flex"} direction={isMobile ? "column" : "row"} gap={isMobile ? "5rem" : "1em"}>
            
              <Box fontSize={isMobile ? "10px" : ""} _hover={{ color: "#000" }} color={"#f00"} >Sobre o Mumu Delivery</Box>

            
              <Box fontSize={isMobile ? "10px" : ""} _hover={{ color: "#000000" }} color={"#f00"}>Termos e políticas</Box>
            
            
              <Flex direction={"column"}>
                <Box fontSize={isMobile ? "10px" : ""} _hover={{ color: "#000" }} color={"#f00"}>Já baixou nossos aplicativos?
                </Box>

                <Link>
                    <Image src={appStore} alt="Link aplicativo appStore" />
                </Link>

                <Link>
                    <Image src={GooglePlayStore} alt="Link aplicativo GooglePlayStore" />
                </Link>

              </Flex>  
    
          </Box>
        </Flex>
      
      </Center>
    </Flex>
  );
}
