import { Flex, Text, Box, Stack, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { DarkModeSwitch } from "./DarkModeSwitch";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";

const MenuItem = ({ children, onClick, to = "/" }) => {
  return (
    <Text
      ms={{ base: 2, sm: 2, md: 2, xl: 2 }}
      mr={{ base: 2, sm: 2, md: 2, xl: 2 }}
      display="block"
      onClick={onClick}
    >
      <Link to={to}>
        {children}
      </Link>
    </Text>
  );
};

const Header = () => {
  const [show, setShow] = useState(false);
  const toggleMenu = () => setShow(!show);

  return (
    <Flex
      p={2}
      as="nav"
      align="center"
      alignItems="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
    >
      <Box w="200px">
        <Heading>
          <Link to="/">
            Home
          </Link>
        </Heading>
      </Box>

      <Box display={{ base: "block", md: "none" }} onClick={toggleMenu}>
        {show ? <CloseIcon /> : <HamburgerIcon />}
      </Box>

      <Box
        display={{ base: show ? "block" : "none", md: "block" }}
        flexBasis={{ base: "100%", md: "auto" }}
      >
        <Stack
          spacing={8}
          align="center"
          justify={["center", "space-between", "flex-end", "flex-end"]}
          direction={["column", "row", "row", "row"]}
          pt={[4, 4, 0, 0]}
        >
          <MenuItem onClick={toggleMenu} to={"/search"}>
            Search
          </MenuItem>

          <MenuItem onClick={toggleMenu} to={"/latest"}>
            Latest
          </MenuItem>

          <MenuItem onClick={toggleMenu} to={"/ratings"}>
            Ratings
          </MenuItem>

          <DarkModeSwitch />
        </Stack>
      </Box>
    </Flex>
  );
};

export default Header;
