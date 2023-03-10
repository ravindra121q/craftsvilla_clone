import React from "react";
import axios from "axios";
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
  Alert,
  AlertIcon,
  Stack,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { useState } from "react";
const SignUpPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState([]);
  const [displayalert, setDisplayalert] = useState(null);
  const [acc, setAcc] = useState(false);
  const Submithandler = () => {
    // console.log(name, email, password);
    if (name === "" || email === "" || password === "") {
      setDisplayalert("1");
    } else {
      const newitem = {
        name,
        email,
        password,
      };
      axios
        .get(`https://json-server-craftsvilla.vercel.app/UserData`)
        .then((res) => {
          setData(res.data);
        });

      axios
        .post(` https://json-server-craftsvilla.vercel.app/UserData`, newitem)
        .then((res) => {
          console.log(acc);
          setDisplayalert("");
        });
    }
  };
  return (
    <Box w={"50%"} bg="light-50" margin="auto" mt="3%">
      <Box>
        {displayalert === "" ? (
          <Alert status="success">
            <AlertIcon />
            <AlertTitle>Your Account is Successfully Created!</AlertTitle>
          </Alert>
        ) : displayalert === "1" ? (
          <Alert status="error">
            <AlertIcon />
            <AlertTitle>Please Fill All The Details!</AlertTitle>
          </Alert>
        ) : displayalert === "3" ? (
          <Alert status="error">
            <AlertIcon />
            <AlertTitle>Already Registered!</AlertTitle>
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
        <Box textAlign={"center"} p={3}>
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
              Register
            </Text>
            <br />{" "}
            <Box textAlign={"left "}>
              <label>
                Please Enter Your Name
                <Input
                  type={"name"}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Please Enter Your Name"
                />
              </label>{" "}
              <br></br>
              <br></br>
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
                  If Already Registered?{" "}
                  <RouterLink to="/login">Login</RouterLink>
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
