import { Flex, Box, Text, Center, Image, useMediaQuery } from '@chakra-ui/react'
import AppMobile from '../../images/site_arte_baixeoapp 1.svg'

export default function About() {
    const [isDesktop] = useMediaQuery("(max-width: 1024px)")
    const [isMobile] = useMediaQuery("(max-width: 851px)") 

    return (
        <Flex p={'0.2rem'} mt={"5rem"}>
          <Box
            w={"100%"}
            height={"35rem"}
            position="relative"
          >

            <Flex
              direction={isMobile ? "column-reverse" : "row"}
              p={4}
              maxW={isDesktop ? "59rem" : "71rem"}
              mx="auto"
              align="center"
              justify="center"
              mt={"5rem"}
              gap={isDesktop ? "4rem" : (isMobile ? "2rem" : "5rem")}
              >

              <Center
                position="relative"
                overflow="hidden"
                mt={isMobile ? "0" : "8rem"}
              >
                <Image 
                  src={AppMobile}
                  alt='foto mumu'
                  w={isMobile ? "80%" : "100%"}
                  maxW="100%"
                  h="auto"
                  position="relative"
                />
              </Center>

              <Box
                flex="1"
                textAlign={"start"}
                alignItems={"flex-start"}
                justifyContent={"flex-end"} 
                display={"flex"}
                flexDirection={"column"}
                ml={isMobile ? "0" : "4rem"} 
                mt={isMobile ? "2rem" : "0"} 
              >
                <Text
                  fontSize={isMobile ? "24px" : '37px'}
                  fontFamily={"inter"}
                  fontWeight={"700"}
                  maxW={"36rem"}
                  color={"#000"}
                >
                  O que é o Mumu <br/> Delivery?
                </Text>
                
                <Text
                  fontSize='18px'
                  fontFamily={"inter"}
                  fontWeight={"400"}
                  maxW={"36rem"}
                  mt={"2rem"}
                  color={"#000"}
                  w={isMobile ? "100%" :"83%"}
                >
                  Somos um serviço 100% brasileiro de delivery de bebidas geladas e petiscos que se orgulha em unir seu negócio aos consumidores locais, promovendo a venda dos seus produtos de forma rápida e eficiente. Conte conosco para agregar valor ao seu negócio e encantar seus clientes com nossos serviços de qualidade.
                </Text>

              </Box>

            </Flex>

          </Box>

        </Flex>
    )
}