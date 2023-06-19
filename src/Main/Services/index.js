import { Flex, Box, Text, Center, Image, useBreakpointValue } from '@chakra-ui/react';
import People from '../../images/mumu_foto2 2 (1).svg';

export default function Services() {
  const isMobile = useBreakpointValue({ base: true, md: false, sm: true });
  const isDesktop = useBreakpointValue({ base: false, md: true });

  return (
    <Flex p="0.2rem" mt={isMobile ? "18rem" : "13rem"} id='services'>
      <Box w="100%" position="relative" bg="#950000">
        <Flex
          className='mobile'
          direction={isMobile ? "column" : "row"}
          p={"0 1rem"}
          maxW={isDesktop ? "74rem" : ""}
          mx="auto"
          align="center"
          justify="center"
          mt={isMobile ? "9rem" : "0.3rem"}
          flexWrap={isDesktop ? "wrap" : "nowrap"}
          position="relative"
        >
          <Box
            flex="1"
            textAlign={isDesktop ? "start":  (isMobile ? "center" : "center")}
            alignItems={isDesktop ? "flex-start" : (isMobile ? "center" : "center" )}
            justifyContent="flex-end"
            display="flex"
            gap={"1rem"}
            flexDirection="column"
            width={isMobile ? "100%" : "auto"}
            // style={{ alignItems: "center", textAlign: "center" }}
          >
            <Text
              fontSize={isMobile ? "21px" : "38px"}
              fontFamily="inter"
              fontWeight="700"
              maxW="36rem"
              color="#fff"
            >
              O carisma do Mumuzinho do lado do seu <Text color="#FED600" as="span" m={0}>negócio.</Text>
            </Text>

            <Text
              fontSize={isMobile ? "15px" : "20px"}
              fontFamily="inter"
              fontWeight="400"
              maxW="36rem"
              color="#fff"
              w={isMobile ? "100%" : "83%"}
            >
              Além de artista, agora o Mumuzinho pode ser o seu parceiro. Aumente o alcance da sua empresa no ritmo do samba!
            </Text>
          </Box>

          <Center
            position="relative"
            overflow="hidden"
            mt={isDesktop ? "3.2rem" : (isMobile ? "12.6%" : "11rem")}
            flex={isMobile ? "auto" : (isDesktop ? "none" : "auto")}
            width={isMobile ? "100%" : "auto"}
          >
            <Box
              position="relative"
              width={isMobile ? "100%" : (isDesktop ? "80%" : "30%")}
              maxW="100%"
              h="auto"
            >
              <Image
                src={People}
                alt="foto mumu"
                w="100%"
                h="auto"
                position="relative"
                zIndex={'999'}
              />
              <Box
                position="absolute"
                width={isMobile ? "0" : "34rem"}
                height={isMobile ?  "0" : "11rem"}
                background="#FF1200"
                filter="blur(60px)"
                borderRadius="50%"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
              ></Box>
            </Box>
          </Center>
        </Flex>
      </Box>
    </Flex>
  );
}
