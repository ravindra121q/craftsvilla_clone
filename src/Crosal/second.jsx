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
export default class SimpleSlider2 extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
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
      <Box mt={10} ml={12} mb={5}>
        <Slider {...settings}>
          {" "}
          <Box
            borderRadius={"8px"}
            boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px 0px"
          >
            <Img src="https://cdn.plotch.io/image/upload/C/V/1676285382_MS5wbmc=.png" />
          </Box>
          <Box
            borderRadius={"8px"}
            boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px 0px"
          >
            <Img src="https://cdn.plotch.io/image/upload/C/V/1676285387_Mi5wbmc=.png" />
          </Box>{" "}
          <Box
            borderRadius={"8px"}
            boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px 0px"
          >
            <Img src="https://cdn.plotch.io/image/upload/C/V/1676285392_My5wbmc=.png" />
          </Box>{" "}
          <Box
            borderRadius={"8px"}
            boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px 0px"
          >
            <Img src="https://cdn.plotch.io/image/upload/C/V/1676285398_NC5wbmc=.png" />
          </Box>{" "}
          <Box
            borderRadius={"8px"}
            boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px 0px"
          >
            <Img src="https://cdn.plotch.io/image/upload/C/V/1676285404_NS5wbmc=.png" />
          </Box>{" "}
          <Box
            borderRadius={"8px"}
            boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px 0px"
          >
            <Img src="https://cdn.plotch.io/image/upload/C/V/1676285409_Ni5wbmc=.png" />
          </Box>{" "}
          <Box
            borderRadius={"8px"}
            boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px 0px"
          >
            <Img src="https://cdn.plotch.io/image/upload/C/V/1676285414_Ny5wbmc=.png" />
          </Box>{" "}
          <Box
            borderRadius={"8px"}
            boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px 0px"
          >
            <Img src="https://cdn.plotch.io/image/upload/C/V/1676285421_OC5wbmc=.png" />
          </Box>
        </Slider>
      </Box>
    );
  }
}
