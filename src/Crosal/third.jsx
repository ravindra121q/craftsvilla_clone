import { Img, Box } from "@chakra-ui/react";
import React, { Component } from "react";
import Slider from "react-slick";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "black",
        color: "black",
        borderRadius: "50%",
        paddingRight: "5%",
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
        color: "black",

        marginLeft: "15px",
      }}
      onClick={onClick}
    />
  );
}
export default class SimpleSlider3 extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 2000,
      cssEase: "linear",
    };
    return (
      <Box>
        <Slider {...settings}>
          <div>
            <Img src="https://cdn.plotch.io/image/upload/C/V/1671110155_NC5wbmc=.png" />
          </div>
          <div>
            <Img src="https://cdn.plotch.io/image/upload/C/V/1671110161_Mi5wbmc=.png" />
          </div>
          <div>
            <Img src="https://cdn.plotch.io/image/upload/C/V/1676286917_Q1JBRlRTVklMTEEyLU5FV0hFUk9CQU5ORVJTLnBuZw==.png" />
          </div>
          <div>
            <Img src="https://cdn.plotch.io/image/upload/C/V/1671110178_SG9tZWRlY29yLnBuZw==.png" />
          </div>
          <div>
            <Img src="https://cdn.plotch.io/image/upload/C/V/1676097252_Q1JBRlRTVklMTEEyLU5FV0hFUk9CQU5ORVJTLnBuZw==.png" />
          </div>
        </Slider>
      </Box>
    );
  }
}
