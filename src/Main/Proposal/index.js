import { Flex, Box, Text, Center, Image, useBreakpointValue, Grid } from '@chakra-ui/react';
import Intelligence from '../../images/inteligencia-articial.svg';
import MoreClient from '../../images/mais-clientes.svg';
import Varieties from '../../images/varieadades.svg';
import Accessibility from '../../images/acessibilidade.svg';
import OfflineSupport from '../../images/suporte.svg';

export default function Proposal() {
  const isMobile = useBreakpointValue({ base: true, md: false, sm: true });
  const isDesktop = useBreakpointValue({ base: false, md: true, lg: true });

  const getColumnTemplate = () => {
    if (isMobile) {
      return "repeat(1, 1fr)";
    } else if (isDesktop) {
      return "repeat(5, 1fr)";
    } else {
      return "repeat(3, 1fr)";
    }
  };

  const getFlexWrap = () => {
    return isMobile && !isDesktop ? "wrap" : "nowrap";
  };

  return (
    <Flex p="0.2rem" mt={isMobile ? "2rem" : "5rem"}>
      <Box w="100%" position="relative">
        <Flex
          direction="column"
          p="0 1rem"
          w={isDesktop ? "100%" : "100%"}
          align="center"
          justify="center"
          mt={isMobile ? "4rem" : "0.3rem"}
          flexWrap={getFlexWrap()}
          position="relative"
          gap="4rem"
          textAlign="center"
          justifyContent="center"
        >
          <Box
            flex="1"
            textAlign="start"
            alignItems="flex-start"
            justifyContent="flex-end"
            display="flex"
            gap="1rem"
            flexDirection="column"
            width={isMobile ? "100%" : "auto"}
          >
            <Text
              fontSize={isMobile ? "20px" : "38px"}
              fontFamily="inter"
              textAlign="center"
              align="center"
              justifyContent="center"
              fontWeight="700"
              maxW={isMobile ? "" : "36rem"}
              w="100%"
              color="#f00"
            >
              Nosso diferencial <Text color="#000000" as="span" m={0}>é ter você!</Text>
            </Text>
          </Box>

          <Grid
            templateColumns={getColumnTemplate()}
            gap={4}
            mt={6}
            justifyContent="center"
          >
            <Box>
              <Center>
                <Image
                  src={Intelligence}
                  alt="Inteligência Artificial"
                  w={isMobile ? "5rem" : "35%"}
                  h="auto"
                />
              </Center>
              <Flex direction="column" alignItems="center" gap={"1rem"} mt={"1rem"}>
                <Text color="#000" fontFamily={"inter"} fontWeight={"700"} fontSize={"18px"}>Inteligência Artificial</Text>
                <Text color="#000" as="span">
                  Com uma tecnologia exclusiva para melhorar nossa logística, fidelizamos os clientes com um atendimento mais eficiente.
                </Text>
              </Flex>
            </Box>

            <Box>
              <Center>
                <Image
                  src={MoreClient}
                  alt="Mais Clientes"
                  w={isMobile ? "5rem" : "35%"}
                  h="auto"
                />
              </Center>
              <Flex direction="column" alignItems="center" gap={"1rem"} mt={"1rem"}>
                <Text color="#000" fontFamily={"inter"} fontWeight={"700"} fontSize={"18px"}>Mais Clientes</Text>
                <Text color="#000" as="span">
                  Aumentamos sua base de clientes para que você possa vender mais.
                </Text>
              </Flex>
            </Box>

            <Box>
              <Center>
                <Image
                  src={Varieties}
                  alt="Variedade"
                  w={isMobile ? "5rem" : "35%"}
                  h="auto"
                />
              </Center>
              <Flex direction="column" alignItems="center" gap={"1rem"} mt={"1rem"}>
                <Text color="#000" fontFamily={"inter"} fontWeight={"700"} fontSize={"18px"}>Variedade</Text>
                <Text color="#000" as="span">
                  Não limitamos marcas, você tem a liberdade de escolher com base na sua clientela.
                </Text>
              </Flex>
            </Box>

            <Box>
              <Center>
                <Image
                  src={Accessibility}
                  alt="Acessibilidade"
                  w={isMobile ? "5rem" : "35%"}
                  h="auto"
                />
              </Center>
              <Flex direction="column" alignItems="center" gap={"1rem"} mt={"1rem"}>
                <Text color="#000" fontFamily={"inter"} fontWeight={"700"} fontSize={"18px"}>Acessibilidade</Text>
                <Text color="#000" as="span">
                  Acesse o Mumu Delivery de qualquer lugar a qualquer hora com sistema fluido e totalmente responsivo.
                </Text>
              </Flex>
            </Box>

            <Box>
              <Center>
                <Image
                  src={OfflineSupport}
                  alt="Suporte Online"
                  w={isMobile ? "5rem" : "35%"}
                  h="auto"
                />
              </Center>
              <Flex direction="column" alignItems="center" gap={"1rem"} mt={"1rem"}>
                <Text color="#000" fontFamily={"inter"} fontWeight={"700"} fontSize={"18px"}>Suporte Online</Text>
                <Text color="#000" as="span">
                  Conte conosco para ajudar em suas vendas e alavancar seus negócios.
                </Text>
              </Flex>
            </Box>
          </Grid>
        </Flex>
      </Box>
    </Flex>
  );
}
