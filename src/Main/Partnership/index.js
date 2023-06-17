import { Flex, Box, Text, Center, Image, Divider, useBreakpointValue } from '@chakra-ui/react';
import Soda from '../../images/bebidas.svg';

export default function Partnership() {
  const isMobile = useBreakpointValue({ base: true, md: false, sm: true });
  const isDesktop = useBreakpointValue({ base: false, md: true });

  return (
    <Flex p="0.2rem" mt={isMobile ? "1rem" : "0"} id='partnership' >
      <Box w="100%" position="relative">
        <Flex
          className='mobile'
          direction={isMobile ? "column" : "row"}
          p={"0 1rem"}
          maxW={isDesktop ? "74rem" : ""}
          mx="auto"
          align="center"
          justify="center"
          mt={isMobile ? "9rem" : "-10.7rem"}
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
          >
            <Text
              fontSize={isMobile ? "21px" : "35px"}
              fontFamily="inter"
              fontWeight="700"
              maxW="33rem"
              color="#000"
            >
              Posso ser um Parceiro <Text color="#CF2929" as="span" m={0}>Mumu Delivery?</Text>
            </Text>

            <Text
              fontSize={isMobile ? "15px" : "20px"}
              fontFamily="inter"
              fontWeight="400"
              maxW="28rem"
              color="#000"
              w={isMobile ? "100%" : "83%"}
            >
              Para ser nosso parceiro você precisa cumprir com alguns requisitos.
            </Text>
          </Box>

          <Center
            position="relative"
            overflow="hidden"
            mt={isDesktop ? "0.2rem" : (isMobile ? "12.6%" : "11rem")}
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
                src={Soda}
                alt="foto mumu"
                w="100%"
                h="auto"
                position="relative"
                zIndex={'999'}
                pt={isMobile ? "0" : "26rem"}
              />
            </Box>
          </Center>


        </Flex>
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
                <Flex
                    border={"2px solid #ff0000"}
                    borderRadius={"15px"}
                    w={"100%"}
                    p={"2rem"}
                    mt={"-12rem"}
                    direction={"column"}
                    gap={"1rem"}
                >

                <Box>
                    <Text color={"#000"} fontWeight={"700"}  flexDirection={"column"}>
                        Pagamento
                    </Text>
                    <Text display={"flex"} w={"50%"} color={"#000"}  as={"span"}>
                        Aceitar cartões de crédito e débito, pix e dinheiro.
                    </Text>
                    <Divider my={2} borderColor="#0000005b" />
                </Box>

                <Box>
                    <Text color={"#000"} fontWeight={"700"}  flexDirection={"column"}>
                        Entrega
                    </Text>
                    <Text display={"flex"} w={isMobile ? "100%" :  "50%"} color={"#000"}  as={"span"}>
                        Ter seus próprios meios e recursos para realizar entregas.
                    </Text>
                    <Divider my={2} borderColor="#0000005b" />
                </Box>


                <Box>
                    <Text color={"#000"} fontWeight={"700"}  flexDirection={"column"}>
                        Produto de Qualidade
                    </Text>
                    <Text display={"flex"} w={isMobile ? "100%" :  "50%"} color={"#000"}  as={"span"}>
                        Garantir a entrega das bebidas de acordo com os pedidos e ter conseguir
                        armazenar e manter geladas as bebidas ofertadas.
                    </Text>
                    <Divider my={2} borderColor="#0000005b" />
                </Box>

                <Box>
                    <Text color={"#000"} fontWeight={"700"}  flexDirection={"column"}>
                        CNAE
                    </Text>
                    <Text display={"flex"} w={isMobile ? "100%" :  "50%"} color={"#000"}  as={"span"}>
                        Ter o CNAE relativo à venda de bebidas e alimentos (CNPJ).
                    </Text>
                    <Divider my={2} borderColor="#0000005b" />
                </Box>

                <Box>
                    <Text color={"#000"} fontWeight={"700"}  flexDirection={"column"}>
                        Emissão de Nota Fiscal
                    </Text>
                    <Text display={"flex"} w={isMobile ? "100%" :  "50%"} color={"#000"}  as={"span"}>
                        Emitir as notas fiscais das vendas feitas no app.
                    </Text>
                    <Divider my={2} borderColor="#0000005b" />
                </Box>

                <Box>
                    <Text color={"#000"} fontWeight={"700"}  flexDirection={"column"}>
                        6% de comissão
                    </Text>
                    <Text display={"flex"} w={isMobile ? "100%" :  "50%"} color={"#000"}  as={"span"}>
                        o Mumu Delivery tem 6% de comissão sob pedidos realizados no app.
                    </Text>
                    <Divider my={2} borderColor="#0000005b" />
                </Box>
  
                </Flex>
        </Flex>
      </Box>
    </Flex>
  );
}
