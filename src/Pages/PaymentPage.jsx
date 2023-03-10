import React from "react";
import { Box, Input, SimpleGrid, Text, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const PaymentPage = () => {
  const [cartItem, setCartItem] = useState([]);
  const Clickhandler = () => {
    axios
      .delete(`https://json-server-craftsvilla.vercel.app/Cartproducts`)
      .then((res) => setCartItem([]));
  };
  return (
    <Box p={20} w="80%">
      <Box
        m="auto"
        w="80%"
        margin="auto"
        ml={64}
        p={3}
        boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
        borderRadius={"8px"}
      >
        <Text
          textAlign={"center"}
          fontSize="2xl"
          mb={5}
          textDecoration={"underline"}
        >
          Paymet Page
        </Text>
        <SimpleGrid columns={2} spacing={10}>
          <Box w="400px">
            <Input placeholder="Name" variant="flushed" />
            <br />
            <br />
            <Input placeholder="City" variant="flushed" />
            <br />
            <br />
            <Input variant="flushed" placeholder="Address" />
            <br />
            <br />
            <Input
              variant="flushed"
              type="text"
              minLength={10}
              maxLength={10}
              placeholder="Mobile No.:-"
            />
            <br />
            <br />
            <Input variant="flushed" placeholder="Pin Code.:-" />
          </Box>
          <Box w="400px">
            <Input variant="flushed" placeholder="Account Holder's Name" />
            <br />
            <br />
            <Input
              variant="flushed"
              maxLength={11}
              type={"text"}
              placeholder=" Card Number"
            />
            <br />
            <br />
            <Input variant="flushed" type={"date"} placeholder=" Card Number" />
            <br />
            <br />
            <Input variant="flushed" maxLength={3} placeholder="Cvv" />
            <br />
            <br />
            <Input variant="flushed" maxLength={16} placeholder="Account No." />
          </Box>
        </SimpleGrid>
        <Box>
          <RouterLink to="/">
            <Button
              bg="#a52a2a"
              mt={9}
              mb={5}
              onClick={() => Clickhandler}
              color={"white"}
            >
              Click To Proceed
            </Button>
          </RouterLink>
        </Box>
      </Box>
    </Box>
  );
};

export default PaymentPage;
