import React, { useContext } from "react";
import { Box, Text, Img, HStack, SimpleGrid, Button } from "@chakra-ui/react";
import "../Crosal/home.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { AuthContext } from "../Authentation/AuthContext";
const CartPage = () => {
  const [count, setCount] = useState(0);
  const [newdata, setNewdata] = useState([]);
  const { cartpagedata } = useContext(AuthContext);
  console.log(cartpagedata);
  const getDATA = () => {
    axios
      .get(`https://json-server-craftsvilla.vercel.app/Cartproducts`)
      .then((res) => {
        setNewdata(res.data);
        setCount(newdata.reduce((acc, item) => acc + item.price, 0));
      });
  };
  const Deletehandler = (id) => {
    // console.log(id);
    axios.delete(
      `https://json-server-craftsvilla.vercel.app/Cartproducts/${id}`
    );
    axios
      .get(`https://json-server-craftsvilla.vercel.app/Cartproducts`)
      .then((res) => setNewdata(res.data));
    setCount(newdata.reduce((acc, item) => acc + item.price, 0));
  };
  useEffect(() => {
    getDATA();
    // console.log(newdata);
  }, []);
  return (
    <Box>
      <Box mt={"20px"}>
        <Box w="1170px" margin={"auto"} pb={"21px"} pl={"15px"}>
          <Box h={"73px"} mt={"20px"} p="10px" color={"white"}>
            <Box display="flex" gap={"155px"}>
              <Box color={"black"} mr={"280px"}>
                <Text textColor={"black"} lineHeight={"7rm"}>
                  <span color="red" colorScheme={"red "}>
                    Home
                  </span>
                  /My Cart
                </Text>

                <Text>My Cart Items</Text>
              </Box>
              <Box color={"blackAlpha.900"} mr={"10px"}>
                <Text>Subtotal: ${count}</Text>
              </Box>
              <Box ml={7}>
                <RouterLink to="/payment">
                  <Button
                    disabled={() => newdata.length === 0}
                    w="300px"
                    h="40px"
                    bg="#a52a2a"
                  >
                    Place Order
                  </Button>
                </RouterLink>
              </Box>
            </Box>
          </Box>
          <Text textAlign={"center"}>
            ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
          </Text>
          <SimpleGrid color={"tomato.500"} columns={3} spacing={10}>
            <Box color={"#tomato"} opacity="500%">
              <Text>Item Details</Text>
            </Box>
            <Box color={"#brown"} opacity="500%">
              <Text>Available in Stock</Text>
            </Box>
            <Box color={"#tomato"} opacity="500%">
              <Text>Price</Text>
            </Box>
          </SimpleGrid>
          <Text textAlign={"center"}>
            ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
          </Text>
          <Box mt={4}>
            {newdata.length <= 0 ? (
              <Box>
                <Box ml={353}>
                  <Img
                    h="400px"
                    src="https://cdn-icons-png.flaticon.com/512/649/649931.png"
                  />
                </Box>
                <Box>
                  <Text fontSize={55} color="black">
                    Cart is Empty
                  </Text>
                  <RouterLink to="/">
                    <Button>CONTINUE SHOPPING</Button>
                  </RouterLink>
                </Box>
              </Box>
            ) : (
              <Box>
                {newdata.map((e) => {
                  return (
                    <Box key={e.id}>
                      <SimpleGrid columns={3} spacing={10}>
                        <Box w={"120%"} mb={3}>
                          {" "}
                          <Card
                            direction={{ base: "column", sm: "row" }}
                            overflow="hidden"
                            variant="outline"
                          >
                            <Image
                              objectFit="cover"
                              maxW={{ base: "100%", sm: "150px" }}
                              src={e.image}
                              alt="Caffe Latte"
                            />

                            <Stack>
                              <CardBody>
                                <Heading size="md">{e.title}</Heading>
                              </CardBody>

                              <CardFooter>
                                <Button
                                  onClick={() => Deletehandler(e.id)}
                                  variant="solid"
                                  colorScheme="blue"
                                >
                                  Remove
                                </Button>
                              </CardFooter>
                            </Stack>
                          </Card>
                        </Box>
                        <Box>Available</Box>
                        <Box>{e.price}</Box>
                      </SimpleGrid>
                    </Box>
                  );
                })}
              </Box>
            )}
          </Box>
          <Box>
            {newdata.length <= 0 ? null : (
              <Box textAlign={"left"} ml={"863px"} mt={"43px"}>
                <Text fontWeight={"bold"}>PRICE DETAILS</Text>
                <SimpleGrid coloumns={2}>
                  <Text color={"red.300"}>Price:- {count}</Text>
                </SimpleGrid>
                <Text fontWeight={"bold"}>Subtotal:- ${count}</Text>
                <RouterLink to="/payment">
                  <Button ml={5} mt={5} bg="#a52a2a" color={"white"} mb={5}>
                    PLACE ORDER
                  </Button>
                </RouterLink>
              </Box>
            )}
          </Box>
        </Box>
      </Box>
      <Box bg="#902735" color={"white"} mt={8} pt={8} mb={20}>
        <Box maxW={"70%"} margin="auto">
          <SimpleGrid columns={4} spacing={8}>
            <Box w={"120%"}>
              <Text>About Us</Text>
              <p>
                India's most convenient online grocery channel Buyerapp Fresh
                and Smart makes your grocery shopping even simpler. No more
                hassles of sweating it out in crowded markets, grocery shops &
                supermarkets - now shop from the comfort of your home; office,
                or on the move. We offer you the convenience of shopping for
                everything that you need for your home - be it fresh fruits &
                vegetables, rice, dals, oil, packaged food, dairy item, frozen,
                pet food, household cleaning items & personal care products from
                a single virtual store.
              </p>
              <br />
              <Text>PAYMENT OPTIONS</Text>
              <HStack spacing="24px" pl={14}>
                <Box w="40px" borderRadius={"8px"} h="40px" bg="yellow.200">
                  <Img src="https://cdn-icons-png.flaticon.com/512/1086/1086741.png" />
                </Box>
                <Box w="40px" borderRadius={"8px"} h="40px" bg="tomato">
                  <Img src="https://cdn-icons-png.flaticon.com/512/4108/4108042.png" />
                </Box>
                <Box w="40px" borderRadius={"8px"} h="40px" bg="pink.100">
                  <Img src="https://cdn-icons-png.flaticon.com/512/2058/2058414.png" />
                </Box>
              </HStack>
            </Box>
            <Box>
              <Text>OUR COMPANY</Text>
              <p>About Us</p>
              <p>Contact Us</p>
            </Box>
            <Box>
              <Text>TOP CATEGORIES</Text>
              <p>Grocery</p>
            </Box>
            <Box>
              <Text>POLICIES & INFO</Text>
              <p>Privacy Policy </p>
              <p>Terms & Condition</p>
              <p>Shipping Policy</p>
              <p>Return & Refund</p>
              <br />
              <Text>SUPPORT</Text>
              <p>For Help, send an email to customercare@dreamsvilla.com</p>
            </Box>
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  );
};

export default CartPage;
