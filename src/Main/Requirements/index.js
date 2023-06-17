import { Flex, Box, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, useBreakpointValue } from '@chakra-ui/react';

export default function Requirements() {
  const isMobile = useBreakpointValue({ base: true, md: false, sm: true });
  const isDesktop = useBreakpointValue({ base: false, md: true, lg: true });

  const getFlexWrap = () => {
    return isMobile && !isDesktop ? "wrap" : "nowrap";
  };

  return (
    <Flex p={isMobile ? "1rem" : "0.2rem"} mb={"3rem"}  mt={isMobile ? "7rem" : "7rem"} justify="center">
      <Box w="100%" position="relative">
        <Flex
          p={{ base: "0", md: "0 1rem" }}
          align="center"
          justify="center"
          mt={isMobile ? "9rem" : "0.3rem"}
        >
          <Flex
            border="3px solid #FED600"
            borderRadius="15px"
            w={isMobile ? "100%" : "70%"}
            mt={{ base: "-12rem", md: "0" }}
            direction="column"
            gap="1rem"
            p={{ base: "0", md: "0 1rem" }}
          >
            <Flex
              direction="column"
              w="100%"
              align="center"
              justify="center"
              mt="0.3rem"
              flexWrap={getFlexWrap()}
              position="relative"
              gap="4rem"
              textAlign="center"
              justifyContent="center"
            >
              <Accordion allowToggle w="100%">
                <AccordionItem>
                  <h2>
                    <AccordionButton color="#000" _hover={{ backgroundColor: "none" }}>
                      <Box as="span" flex="1" textAlign="left" color="#000">
                        Quais taxas são cobradas?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} color="#000">
                    Em nossa empresa, aplicamos uma taxa fixa de 6% em todos os produtos disponíveis. Essa taxa é incorporada ao preço final para garantir uma operação eficiente e sustentável. Estamos comprometidos em fornecer um serviço de qualidade a todos os nossos clientes e garantir transparência em relação às taxas aplicadas. Se você tiver alguma dúvida adicional sobre as taxas ou qualquer outro aspecto dos nossos serviços, estamos à disposição para ajudar.
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton color="#000" _hover={{ backgroundColor: "none" }}>
                      <Box as="span" flex="1" textAlign="left" color="#000">
                        O Mumu Delivery pode cancelar minha conta a qualquer momento?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} color="#000">
                    Sim, o Mumu Delivery reserva-se o direito de cancelar uma conta caso haja violação grave das políticas ou se as ações do usuário forem prejudiciais à plataforma ou a outros usuários. No entanto, priorizamos a resolução de problemas e a comunicação aberta, buscando encontrar soluções em conjunto. Nosso objetivo é oferecer um serviço de qualidade e um ambiente seguro para todos os usuários.
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton color="#000" _hover={{ backgroundColor: "none" }}>
                      <Box as="span" flex="1" textAlign="left" color="#000">
                        Quais documentos preciso para me cadastrar?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} color="#000">
                    Para se cadastrar no Mumu Delivery, você precisará informar seu CPF, nome completo, logradouro e CEP. Essas informações são necessárias para criar sua conta e garantir uma entrega eficiente dos pedidos.
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton color="#000" _hover={{ backgroundColor: "none" }}>
                      <Box as="span" flex="1" textAlign="left" color="#000">
                        Em quais cidades tem Mumu Delivery?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} color="#000">
                    O Mumu Delivery está disponível em diversas cidades, incluindo grandes capitais como São Paulo e Rio de Janeiro. Além dessas, o serviço também está presente em outras capitais e regiões metropolitanas do Brasil. A expansão do Mumu Delivery tem buscado atender cada vez mais clientes em diferentes localidades, proporcionando conveniência e facilidade na entrega de produtos.
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton color="#000" _hover={{ backgroundColor: "none" }}>
                      <Box as="span" flex="1" textAlign="left" color="#000">
                        Quanto tempo leva para meu cadastro ter aceito no aplicativo?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} color="#000">
                    O processo de aprovação do cadastro no aplicativo do Mumu Delivery é rápido e geralmente leva apenas alguns minutos. Após preencher corretamente todas as informações necessárias, como CPF, nome completo, endereço e CEP, o sistema realiza uma verificação e, se todos os dados estiverem corretos, seu cadastro será aprovado quase instantaneamente. Assim, você poderá começar a usar o Mumu Delivery e desfrutar dos seus serviços de entrega de forma ágil e eficiente.
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
}
