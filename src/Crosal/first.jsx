import React, { Component } from "react";
import Slider from "react-slick";
import { Box, Heading, Img, SimpleGrid } from "@chakra-ui/react";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "black",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "black",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}
export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 4000,
      cssEase: "linear",
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <Box m={14} mb={8}>
        <Slider {...settings}>
          {" "}
          <Box
            maxW={"335px"}
            h="131px"
            borderRadius={"8px"}
            display={"flex"}
            p={"20px 5px 20px 5px"}
            boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px 0px"
          >
            <SimpleGrid columns={2}>
              <Box maxW={"100px"}>
                <Img
                  borderRadius={"8px"}
                  display={"flex"}
                  src="https://d2pyicwmjx3wii.cloudfront.net/s/62ea2c599d1398fa16dbae0a/63d0dc3e42bc03b2bd212f59/udan-mahila-manch-logo.jpg"
                  maxW={24}
                  bg="#902735"
                />
              </Box>
              <Box maxW={"316px"} h="125px">
                <Heading fontSize={"13px"}>UDDAN MAHILA MANCH </Heading>
                <p fontSize="14px">184.5Km</p>{" "}
                <p fontSize="14px">Home & Decor</p>{" "}
              </Box>
            </SimpleGrid>
          </Box>
          <Box
            maxW={"335px"}
            h="131px"
            borderRadius={"8px"}
            display={"flex"}
            p={"20px 5px 20px 5px"}
            boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px 0px"
          >
            <SimpleGrid columns={2}>
              <Box maxW={"100px"}>
                <Img
                  borderRadius={"8px"}
                  display={"flex"}
                  src="https://cdn.sellerapp.in/Logos/slrp-1326627.png"
                  maxW={24}
                  bg="#902735"
                />
              </Box>
              <Box maxW={"316px"} h="125px">
                <Heading fontSize={"13px"}>NUTRIOG</Heading>
                <p fontSize="14px">188Km</p> <p fontSize="14px">Home & Decor</p>{" "}
              </Box>
            </SimpleGrid>
          </Box>
          <Box
            maxW={"335px"}
            h="131px"
            borderRadius={"8px"}
            display={"flex"}
            p={"20px 5px 20px 5px"}
            boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px 0px"
          >
            <SimpleGrid columns={2}>
              <Box maxW={"100px"}>
                <Img
                  borderRadius={"8px"}
                  display={"flex"}
                  src="https://d2pyicwmjx3wii.cloudfront.net/s/62ea2c599d1398fa16dbae0a/63e2000c230fa587de3bc421/viren-bhai-logo.jpg"
                  maxW={24}
                  bg="#902735"
                />
              </Box>
              <Box maxW={"316px"} h="125px">
                <Heading fontSize={"13px"}>CCKDE-SPECES</Heading>
                <p fontSize="14px">112Km</p> <p fontSize="14px">FOOD ITEM</p>{" "}
              </Box>
            </SimpleGrid>
          </Box>
          <Box
            maxW={"335px"}
            h="131px"
            borderRadius={"8px"}
            display={"flex"}
            textAlign="left"
            p={"20px 5px 20px 5px"}
            boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px 0px"
          >
            <SimpleGrid columns={2}>
              <Box maxW={"100px"}>
                <Img
                  borderRadius={"8px"}
                  display={"flex"}
                  src="https://cdn.sellerapp.in/Logos/slrp-1386607.jpg"
                  maxW={24}
                  bg="#902735"
                />
              </Box>
              <Box maxW={"316px"} h="125px">
                <Heading fontSize={"13px"}>TRNNER</Heading>
                <p fontSize="14px">134.5Km</p>{" "}
                <p fontSize="14px">Home & Decor</p>{" "}
              </Box>
            </SimpleGrid>
          </Box>
          <Box
            maxW={"335px"}
            h="131px"
            borderRadius={"8px"}
            display={"flex"}
            p={"20px 5px 20px 5px"}
            boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px 0px"
          >
            <SimpleGrid columns={2}>
              <Box maxW={"100px"}>
                <Img
                  borderRadius={"8px"}
                  display={"flex"}
                  src="https://d2pyicwmjx3wii.cloudfront.net/s/62ea2c599d1398fa16dbae0a/63c7b8cf935a58d023a0edb6/ecraftindia-logo_updated-01-1-.png"
                  maxW={24}
                  bg="#902735"
                />
              </Box>
              <Box maxW={"316px"} h="125px">
                <Heading fontSize={"13px"}>INTELLIZONE</Heading>
                <p fontSize="14px">384.5Km</p>{" "}
                <p fontSize="14px">Home & Decor</p>{" "}
              </Box>
            </SimpleGrid>
          </Box>
          <Box
            maxW={"335px"}
            h="131px"
            borderRadius={"8px"}
            display={"flex"}
            p={"20px 5px 20px 5px"}
            boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px 0px"
          >
            <SimpleGrid columns={2}>
              <Box maxW={"100px"}>
                <Img
                  borderRadius={"8px"}
                  display={"flex"}
                  src="https://cdn.sellerapp.in/Logos/slrp-1429283.png"
                  maxW={24}
                  bg="#902735"
                />
              </Box>
              <Box maxW={"316px"} h="125px">
                <Heading fontSize={"13px"}>INBI.DENT</Heading>
                <p fontSize="14px">134.5Km</p>{" "}
                <p fontSize="14px">Home & Decor</p>{" "}
              </Box>
            </SimpleGrid>
          </Box>
        </Slider>
      </Box>
    );
  }
}
