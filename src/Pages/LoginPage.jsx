import React, { useState } from "react";

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Center,
  Text,
  Button,
  Portal,
  Input,
  Box,
  Img,
} from "@chakra-ui/react";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import axios from "axios";
import { useContext } from "react";
import { Link as RouterLink } from "react-router-dom";
import { AuthContext } from "../Authentation/AuthContext";
import { useNavigate } from "react-router-dom";
import HomePage from "../Pages/HomePage";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState([]);
  const { isAuth, loginfn } = useContext(AuthContext);
  const [displayalert, setDisplayalert] = useState(null);
  const navigate = useNavigate();
  const Submithandler = () => {
    axios
      .get(`https://json-server-craftsvilla.vercel.app/UserData`)
      .then((res) => {
        setData(res.data);
      });
    if (email === "ravindrakumartilotia4@gmail.com" && password === "12345") {
      console.log("s");
      return navigate(`/adminpage`);
    } else {
      data.map((e) => {
        if (e.email === email && e.password === password) {
          setDisplayalert("");
          return loginfn([]);
        }
      });
    }
  };

  return (
    <Box w={"50%"} bg="light-50" border="1px solid red" margin="auto" mt="3%">
      <Box>
        {displayalert == "" ? (
          <Alert
            status="success"
            variant="subtle"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            height="200px"
          >
            <AlertIcon boxSize="40px" mr={0} />
            <AlertTitle mt={4} mb={1} fontSize="lg">
              Application submitted!
            </AlertTitle>
            <AlertDescription maxWidth="sm">
              Thanks for submitting your application. Our team will get back to
              you soon.
            </AlertDescription>
          </Alert>
        ) : null}
      </Box>
      <Box
        fontFamily={"Montserrat Regular"}
        pt={"36px"}
        display="flex"
        alignItems={"center"}
        margin="auto"
        boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
      >
        <Box p={3} textAlign={"center"}>
          <Text fontSize={"18px"}>BENEFITS</Text>
          <Box fontSize={"14px"} justifyItems={"center"} margin="auto">
            <br />

            <Img
              h={"35px"}
              margin={"auto"}
              src="https://cdn-icons-png.flaticon.com/512/3502/3502601.png"
              alt="img"
            />
            <Text fontWeight={"700"} fontSize={"14px"}>
              Manage Orders
            </Text>
            <Text>Track Return & Cancel your orders</Text>
            <Box>
              <br />
              <br />
              <Img
                h={"35px"}
                margin={"auto"}
                src="https://cdn-icons-png.flaticon.com/512/679/679922.png"
              />
              <Text fontWeight={"700"}>Access Products That You Love</Text>
              <Text>Seamless access To Wishlist & Carts items </Text>
            </Box>
            <Box>
              <br />
              <br />
              <Img
                h={"35px"}
                margin={"auto"}
                src="https://cdn-icons-png.flaticon.com/512/891/891419.png"
              />
              <Text fontWeight={"700"}>Quicker Checkout</Text>
              <Text>Saved Address & bank details for 3 step checkout</Text>
            </Box>
          </Box>
        </Box>
        <Box>
          <Box p="3px" pl={"36px"} h={"450px"} w="468px">
            <Img
              h={"40px"}
              w="230px"
              margin={"auto"}
              src={require(`../Images/logo.jpg`)}
            />
            <br />
            <Text
              textAlign={"left "}
              decoration={"underline"}
              fontSize={"20px"}
            >
              Login/SignUp
            </Text>
            <br />{" "}
            <Box textAlign={"left "}>
              <label>
                Please Provide Your Email
                <Input
                  type={"email"}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Please Enter Your Email"
                />
              </label>{" "}
              <br></br>
              <br></br>
              <label>
                Please Provide Your Password
                <Input
                  type={"password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Please Enter Your Password"
                />
              </label>{" "}
              <br />
              <br />
              <Center>
                <Button
                  onClick={Submithandler}
                  bg={"tomato"}
                  color={"white"}
                  colorScheme="blackAlpha"
                >
                  Continue
                </Button>
                <br />
              </Center>
              <Center>
                <Text>
                  New User? <RouterLink to="/signup">SignUp</RouterLink>
                </Text>
              </Center>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SignUpPage;
