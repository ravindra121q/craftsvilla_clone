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
const AdminPage = () => {
  const [count, setCount] = useState(0);
  const [newdata, setNewdata] = useState([]);
  const { cartpagedata } = useContext(AuthContext);
  console.log(cartpagedata);
  const getDATA = () => {
    axios
      .get(`https://json-server-craftsvilla.vercel.app/UserData`)
      .then((res) => {
        setNewdata(res.data);
        setCount(newdata.reduce((acc, item) => acc + item.price, 0));
      });
  };
  const Deletehandler = (id) => {
    // console.log(id);
    axios.delete(`https://json-server-craftsvilla.vercel.app/UserData/${id}`);
    axios
      .get(`https://json-server-craftsvilla.vercel.app/UserData`)
      .then((res) => setNewdata(res.data));
    setCount(newdata.reduce((acc, item) => acc + item.price, 0));
  };
  useEffect(() => {
    getDATA();
    // console.log(newdata);
  }, []);
  return (
    <Box>
      <Box mt={5} textDecoration="underline" fontSize={"3xl"}>
        Admin Page
      </Box>
      <Box mt={"20px"}>
        <Box w="1170px" margin={"auto"} pb={"21px"} pl={"15px"}>
          <Text textAlign={"center"}>
            ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
          </Text>
          <SimpleGrid color={"tomato.500"} columns={3} spacing={10}>
            <Box color={"#tomato"} opacity="500%">
              <Text>Name</Text>
            </Box>
            <Box color={"#brown"} opacity="500%">
              <Text>Email</Text>
            </Box>
            <Box color={"#tomato"} opacity="500%">
              <Text>Password</Text>
            </Box>
          </SimpleGrid>
          <Text textAlign={"center"}>
            ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
          </Text>
          <Box mt={4}>
            {newdata.length <= 0 ? (
              <Box>
                <Box ml={353}></Box>
                <Box>
                  <Text fontSize={55} color="black">
                    No Users
                  </Text>
                  <RouterLink to="/">
                    <Button>Add Users</Button>
                  </RouterLink>
                </Box>
              </Box>
            ) : (
              <Box>
                {newdata.map((e) => {
                  return (
                    <Box key={e.id}>
                      <SimpleGrid columns={3} spacing={10}>
                        <Box
                          onClick={() => Deletehandler(e.id)}
                          w={"120%"}
                          mb={3}
                        >
                          {e.name}
                        </Box>
                        <Box>{e.email}</Box>
                        <Box>{e.password}</Box>
                      </SimpleGrid>
                    </Box>
                  );
                })}
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

export default AdminPage;
