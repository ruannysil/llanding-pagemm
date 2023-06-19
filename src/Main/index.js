import {Flex, Text, Image, Center, Box, Button, useMediaQuery} from '@chakra-ui/react'
import Mumu from '../images/Vector.svg';

export default function Main() {
    const [isDesktop] = useMediaQuery("(max-width: 1024px)")
    const [isMobile] = useMediaQuery("(max-width: 851px)") 
    
    return (
        <Flex p={'0.2rem'}>

          <Box bg={"#950000"} w={"100%"} height={"32rem"} position="relative">

            <Flex direction={isMobile ? "column" : "row"} p={4} gap={2} maxW={isDesktop ? "59rem" : "71rem" } mx="auto" align="center" justify="center">

              <Box flex="1" mb={isMobile ? "0" : "15rem"}>
                <Text fontSize={isMobile ? "24px" : '37px'} fontFamily={"inter"} fontWeight={"700"} maxW={"36rem"}>
                  Você cuida dos <br/> <Text color={"#FED600"} as={"span"} m={0}>pedidos</Text>, deixa que o Mumu cuida do resto.
                </Text>

                <Text fontSize='18px' fontFamily={"inter"} fontWeight={"400"} maxW={"36rem"} mt={"2rem"} mb={5}>
                  Essa união vai deixar seu negócio <br/>fulminante, vamos de <Text color={"#FED600"} as={"span"} m={0}>Mumu?</Text>
                </Text>
                <Button
                  _hover={{ backgroundColor: "#fce3e3bb", color: "#fff", fontWeight: "bold" }}
                  backgroundColor="#ffffff"
                  color="#f00"
                  fontFamily="inter"
                  fontWeight="600"
                  borderRadius={15}
                  fontSize="19px"
                  boxShadow={"5px 10px 35px #00000073"}
                  p={"24px 1.3rem"}
                >
                  Vem ser nosso parceiro!
                </Button>

              </Box>

              <Center position="relative" overflow="hidden" mt={isMobile ? "0" : "5rem"}>
                <Image src={Mumu} alt='foto mumu' w={isMobile ? "80%": "100%"}  maxW="100%" h="auto" position="relative" />
              </Center>

            </Flex>

          </Box>

        </Flex>
    )
}