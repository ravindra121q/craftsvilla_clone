import React from "react";
import { useEffect } from "react";
import axios from "axios";
import App23 from "../Crosal/first";
import { Box, Img, SimpleGrid, Text, HStack } from "@chakra-ui/react";
import "../Crosal/home.module.css";
import SimpleSlider2 from "../Crosal/second";

import SimpleSlider3 from "../Crosal/third";
const HomePage = () => {
  const getData = () => {
    axios
      .get(`https://json-server-craftsvilla.vercel.app/crousal`)
      .then((res) => console.log(res.data));
  };

  return (
    <Box>
      <div id="crousal">
        <App23 />
      </div>
      <Box mt={13}>
        <hr />
      </Box>
      <Box>
        <SimpleSlider2 />
      </Box>
      <Box>
        <SimpleSlider3 />
      </Box>
      <Box mt={0} overflow="auto">
        <Img src={require(`../Images/pr.jpg`)} alt="img" />
      </Box>
      <Box maxW={"85%"} margin="auto" mt={12}>
        <SimpleGrid columns={2} spacing={7}>
          <Box>
            <Img src="https://cdn.plotch.io/image/upload/C/V/1671110234_SG9tZWRlY29yLnBuZw==.png" />
          </Box>
          <Box>
            <Img src="https://cdn.plotch.io/image/upload/C/V/1671110241_NS5wbmc=.png" />
          </Box>
          <Box>
            <Img src="https://cdn.plotch.io/image/upload/C/V/1671110248_Ni5wbmc=.png" />
          </Box>
          <Box>
            <Img src="https://cdn.plotch.io/image/upload/C/V/1671110264_My5wbmc=.png" />
          </Box>
        </SimpleGrid>
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
              <Text onClick={<searchbar />}>OUR COMPANY</Text>
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

export default HomePage;
