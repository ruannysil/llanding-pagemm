import { Flex, Center, Link, Box, Image, Button, useMediaQuery, Menu, MenuButton, MenuList, MenuItem, IconButton } from "@chakra-ui/react";
import { GiHamburgerMenu } from 'react-icons/gi'
import logo from '../../images/logo_oficial_mumudelivery_tipografia2 1.svg';
import { useState, useEffect, useRef } from "react";

export default function Header() {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <Flex flex={1} direction={"row"} justify={"space-between"}>
      <Center
        w={"100%"}
        justifyContent={"space-between"}
        p={4}
        alignItems={"center"}
        m={isMobile ? "0" : "0 1rem"}
      >
        <Flex alignItems={"center"}>
          <Link top={"/"} mr={5}>
            <Image src={logo} alt="logo" />
          </Link>
          <Box display={isMobile ? "none" : "flex"} direction={"row"} gap={"1em"}>
            <Link style={{ textDecoration: "none", color: "#000" }}>
              <Box _hover={{ color: "red" }}>O que é o Mumu?</Box>
            </Link>
            <Link style={{ textDecoration: "none", color: "#000" }}>
              <Box _hover={{ color: "red" }}>Beneficios</Box>
            </Link>
            <Link style={{ textDecoration: "none", color: "#000" }}>
              <Box _hover={{ color: "red" }}>Requisitos</Box>
            </Link>
            <Link style={{ textDecoration: "none", color: "#000" }}>
              <Box _hover={{ color: "red" }}>F.A.Q</Box>
            </Link>
          </Box>
        </Flex>
        {isMobile ? (
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<GiHamburgerMenu color="#fff" style={{ fontSize: '22px' }} />}
              onClick={handleMenuToggle}
              _hover={{ backgroundColor: "#ff00009e" }}
              _active={{ backgroundColor: "none" }}
              backgroundColor="#f00"
              border="none"
              variant="outline"
            />
            <MenuList bgColor={"#f00"} color={"#fff"} ref={menuRef}>
              <MenuItem
                bgColor={"#f00"}
                _hover={{ bgColor: "#fff", color: "#000000" }}
                onClick={handleMenuItemClick}
              >
                O que é o Mumu?
              </MenuItem>
              <MenuItem
                bgColor={"#f00"}
                _hover={{ bgColor: "#fff", color: "#000000" }}
                onClick={handleMenuItemClick}
              >
                Beneficios
              </MenuItem>
              <MenuItem
                bgColor={"#f00"}
                _hover={{ bgColor: "#fff", color: "#000000" }}
                onClick={handleMenuItemClick}
              >
                Requisitos
              </MenuItem>
              <MenuItem
                bgColor={"#f00"}
                _hover={{ bgColor: "#fff", color: "#000000" }}
                onClick={handleMenuItemClick}
              >
                F.A.Q
              </MenuItem>
              <MenuItem
                bgColor={"#f00"}
                _hover={{ bgColor: "#fff", color: "#000000" }}
                onClick={handleMenuItemClick}
              >
                Já sou parceiro
              </MenuItem>
            </MenuList>
          </Menu> 
        ) : (
          <Button
            _hover={{ backgroundColor: "#9b3d3d" }}
            backgroundColor="#cf2929"
            color="#fff"
            fontFamily="inter"
            fontWeight="500"
            fontSize="14px"
            boxShaodow="0px 2px 9px #00000069"
            onClick={handleMenuToggle}
          >
            Já sou parceiro
          </Button>
        )}
      </Center>
    </Flex>
  );
}
