import {
  Flex,
  Center,
  Box,
  Image,
  Button,
  useMediaQuery,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../../images/logo_oficial_mumudelivery_tipografia2 1.svg";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";

export default function Header() {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const [isDesktop] = useMediaQuery("(max-width: 1440px)");
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

  function handleButton() {
    window.location.href = "https://login-register-mumu.vercel.app/";
  }

  return (
    <Flex flex={1} direction={"row"} justify={"center"}>
      <Center
        w={"100%"}
        justifyContent={isDesktop ? "space-between" : "space-around"}
        p={4}
        alignItems={"center"}
        
        maxW={isDesktop}
      >
        <Flex alignItems={"center"} gap={"1rem"}>
          <Link
            to="/"
            smooth={true}
            duration={500}
            offset={-70}
            mr={5}
            style={{ cursor: "pointer" }}
          >
            <Image src={logo} alt="logo" />
          </Link>
          <Box
            display={isMobile ? "none" : "flex"}
            direction={"row"}
            gap={"1rem"}
          >
            <Link
              to="about"
              smooth={true}
              duration={500}
              offset={-70}
              style={{
                textDecoration: "none",
                color: "#000",
                userSelect: "none",
              }}
            >
              <Box _hover={{ color: "red" }}>O que é o Mumu?</Box>
            </Link>
            <Link
              to="proposal"
              smooth={true}
              duration={500}
              offset={-70}
              style={{
                textDecoration: "none",
                color: "#000",
                userSelect: "none",
              }}
            >
              <Box _hover={{ color: "red" }}>Benefícios</Box>
            </Link>
            <Link
              to="partnership"
              smooth={true}
              duration={500}
              offset={-70}
              style={{
                textDecoration: "none",
                color: "#000",
                userSelect: "none",
              }}
            >
              <Box _hover={{ color: "red" }}>Requisitos</Box>
            </Link>
            <Link
              to="requirements"
              smooth={true}
              duration={500}
              offset={-70}
              style={{
                textDecoration: "none",
                color: "#000",
                userSelect: "none",
              }}
            >
              <Box _hover={{ color: "red" }}>F.A.Q</Box>
            </Link>
          </Box>
        </Flex>
        {isMobile ? (
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={
                <GiHamburgerMenu color="#fff" style={{ fontSize: "22px" }} />
              }
              onClick={handleMenuToggle}
              _hover={{ backgroundColor: "#ff00009e" }}
              _active={{ backgroundColor: "none" }}
              backgroundColor="#f00"
              border="none"
              variant="outline"
            />
            <MenuList bgColor={"#f00"} color={"#fff"} ref={menuRef}>
              <Link
                to="about"
                smooth={true}
                duration={500}
                offset={-70}
                style={{ textDecoration: "none" }}
              >
                <MenuItem
                  bgColor={"#f00"}
                  _hover={{ bgColor: "#fff", color: "#000000" }}
                  onClick={handleMenuItemClick}
                >
                  O que é o Mumu?
                </MenuItem>
              </Link>

              <Link
                to="proposal"
                smooth={true}
                duration={500}
                offset={-70}
                style={{ textDecoration: "none" }}
              >
                <MenuItem
                  bgColor={"#f00"}
                  _hover={{ bgColor: "#fff", color: "#000000" }}
                  onClick={handleMenuItemClick}
                >
                  Benefícios
                </MenuItem>
              </Link>

              <Link
                to="partnership"
                smooth={true}
                duration={500}
                offset={-70}
                style={{ textDecoration: "none" }}
              >
                <MenuItem
                  bgColor={"#f00"}
                  _hover={{ bgColor: "#fff", color: "#000000" }}
                  onClick={handleMenuItemClick}
                >
                  Requisitos
                </MenuItem>
              </Link>

              <Link
                to="requirements"
                smooth={true}
                duration={500}
                offset={-70}
                style={{ textDecoration: "none" }}
              >
                <MenuItem
                  bgColor={"#f00"}
                  _hover={{ bgColor: "#fff", color: "#000000" }}
                  onClick={handleMenuItemClick}
                >
                  F.A.Q
                </MenuItem>
              </Link>

              <MenuItem
                bgColor={"#f00"}
                _hover={{ bgColor: "#fff", color: "#000000" }}
                onClick={handleButton}
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
            boxShadow="0px 2px 9px #00000069"
            onClick={handleButton}
          >
            Já sou parceiro
          </Button>
        )}
      </Center>
    </Flex>
  );
}
