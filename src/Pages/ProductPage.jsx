import React, { useEffect, useState } from "react";
import {
  Box,
  SimpleGrid,
  Text,
  Spinner,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Divider,
  HStack,
  Img,
  ButtonGroup,
  MenuItem,
  Button,
  Menu,
  MenuButton,
  MenuList,
  Input,
  Checkbox,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import axios from "axios";
import { calcLength } from "framer-motion";
import CartPage from "./CartPage";
import { useContext } from "react";
import { AuthContext } from "../Authentation/AuthContext";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
const ProductPage = () => {
  const [data, setData] = useState([]);
  const [displayalert, setDisplayalert] = useState(null);
  const [isloading, setIsloading] = useState(false);
  const [sort, setSort] = useState("asc");
  const [page, setPage] = useState(1);
  const [isConditionTrue, setIsConditionTrue] = useState(true);
  const [todos, setTodos] = useState([]);
  const { loginfn, isAuth, datafn } = useContext(AuthContext);
  const { userId } = useParams();
  const getData = (page, sort) => {
    setIsloading(true);
    axios
      .get(
        `https://json-server-craftsvilla.vercel.app/productpage?_limit=12&_page=${page}&_sort=price&_order=${sort}`
      )
      .then((res) => setData(res.data));
    setIsloading(false);
  };
  const pricehandler = (minPrice, maxPrice) => {
    axios
      .get("https://json-server-craftsvilla.vercel.app/productpage", {
        params: {
          _limit: 12,
          _minprice: minPrice,
          _maxprice: maxPrice,
        },
      })
      .then((response) => {
        console.log(response.data);
        setData(response.data);
        // process the data as needed
      });
  };
  // console.log(data);
  const Carthandler = (e) => {
    const { title, image, price } = e;
    const AddnewItem = {
      title,
      image,
      price,
    };
    const newTodo = [...todos, e];
    setTodos(newTodo);
    setDisplayalert("");
    axios
      .post(
        `https://json-server-craftsvilla.vercel.app/Cartproducts`,
        AddnewItem
      )
      .then(e);
    alert("Item added");

    const timeoutId = setTimeout(() => {
      setIsConditionTrue(false);
    }, 2000);

    return () => clearTimeout(timeoutId);
    setIsConditionTrue(false);
  };

  useEffect(() => {
    getData(page, sort);
  }, [page, sort]);
  // console.log(todos);
  return (
    <Box>
      <Box display={"flex"} p={10}>
        <Box w="10%" borderRight="1px solid blue">
          <Text textAlign={"left"} color="red">
            Home
          </Text>
          <Text textAlign={"left"} fontSize={"2xl"} textDecoration="underline">
            Filter by
          </Text>
          <Text textAlign={"left"} mb={41} fontSize={"xl"}></Text>
          <br />
          <Menu mb={10} mt={41}>
            <MenuButton
              w="120px"
              h="30px"
              as={Button}
              rightIcon={<ChevronDownIcon />}
            >
              Price
            </MenuButton>
            <MenuList maxW={"20px"}>
              <MenuItem onClick={() => pricehandler(0, 1000)}>
                0 to 1000
              </MenuItem>
              <MenuItem onClick={() => pricehandler(1000, 2000)}>
                1000 to 2000
              </MenuItem>
              <MenuItem onClick={() => pricehandler(2000, 20000)}>
                2000 to 20000
              </MenuItem>
            </MenuList>
          </Menu>
          <br />
          <br />
          <Menu mt={41}>
            <MenuButton
              w="120px"
              h="30px"
              as={Button}
              rightIcon={<ChevronDownIcon />}
            >
              Category
            </MenuButton>
            <MenuList w={"5px"}>
              <MenuItem>Fashion</MenuItem>
              <MenuItem>Grocery</MenuItem>
              <MenuItem>Packed Commodities</MenuItem>
            </MenuList>
          </Menu>
          <br />
          <br />
          <Menu mt={41}>
            <MenuButton
              w="120px"
              h="30px"
              as={Button}
              rightIcon={<ChevronDownIcon />}
            >
              Time to ship
            </MenuButton>
            <MenuList w={"5px"}>
              <MenuItem>30 minute</MenuItem>
              <MenuItem>1 day</MenuItem>
              <MenuItem>3 day</MenuItem>
            </MenuList>
          </Menu>
        </Box>

        <Box p="5" textAlign={"left"} w="80%">
          <Box>
            <Text style={{ cursor: "pointer" }} fontSize={"21px"}>
              Sort By: Popular | Price :{" "}
              <span onClick={() => setSort("asc")}>Low to High</span> | Price :
              <span
                onClick={() => {
                  setSort("desc");
                }}
              >
                High to Low
              </span>{" "}
              | Discount | New Arrivals
            </Text>
          </Box>
          <Box alignItems={"center"} text="center">
            <SimpleGrid columns={[1, 2, 3, 4]}>
              {isloading ? (
                <Spinner
                  thickness="4px"
                  speed="0.65s"
                  emptyColor="gray.200"
                  color="blue.500"
                  size="2xl"
                />
              ) : (
                data.map((e) => {
                  return (
                    <Box key={e.id}>
                      <Card maxW="sm" key={e.id}>
                        <CardBody alignContent={"center"} textAlign="center">
                          <Image
                            src={e.image}
                            alt="Green double couch with wooden legs"
                            borderRadius="lg"
                          />
                          <Stack mt="6" spacing="3">
                            <Heading size="md">{e.title}</Heading>

                            <Text color="blue.600" fontSize="2xl">
                              ${e.price}
                            </Text>
                          </Stack>
                        </CardBody>

                        <CardFooter>
                          <ButtonGroup
                            justifyContent={"center"}
                            alignItems={"center"}
                            spacing="10"
                          >
                            <Button
                              onClick={() => Carthandler(e)}
                              ml={4}
                              variant="solid"
                              color={"white"}
                              bg="#902735"
                              w={"210px"}
                            >
                              Add to cart
                            </Button>
                          </ButtonGroup>
                        </CardFooter>
                      </Card>
                    </Box>
                  );
                })
              )}
            </SimpleGrid>
          </Box>
        </Box>
      </Box>
      <Box>
        <Button disabled={page == 1} onClick={() => setPage(page - 1)}>
          Prev
        </Button>
        <Button onClick={() => setPage(1)}>1</Button>
        <Button onClick={() => setPage(2)}>2</Button>
        <Button onClick={() => setPage(3)}>3</Button>
        <Button onClick={() => setPage(4)}>4</Button>
        <Button onClick={() => setPage(5)}>5</Button>
        <Button onClick={() => setPage(6)}>6</Button>
        <Button onClick={() => setPage(7)}>7</Button>
        <Button
          disabled={page == 7}
          onClick={() => {
            setPage(page + 1);
          }}
        >
          Next
        </Button>
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

export default ProductPage;
