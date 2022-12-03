import { Card, Col, Row, Button, Text } from "@nextui-org/react";
import { useState } from "react";

export const Banner = ({ className }: { className?: string }) => {
  const [isHovered, setHovered] = useState(false);
  
  const onMouseOver = () => {
    setHovered(true);
  };
  const onMouseOut = () => {
    setHovered(false);
  };
  return (
    <Card className={className} css={{ w: "100%", h: "400px" }}>
      <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
        <Col>
          <Text size={12} weight="bold" transform="uppercase" color="#9E9E9E">
            Your day your way
          </Text>
          <Text h3 color="white">
            Your checklist for better sleep
          </Text>
        </Col>
      </Card.Header>
      <Card.Body css={{ p: 0 }}>
        <Card.Image
          src="/content.png"
          objectFit="cover"
          width="100%"
          height="100%"
          alt="Relaxing app background"
        />
      </Card.Body>
      <Card.Footer
        isBlurred
        css={{
          position: "absolute",
          bgBlur: "#0f111466",
          borderTop: "$borderWeights$light solid $gray800",
          bottom: 0,
          zIndex: 1,
        }}
      >
        <Row>
          {/* <Col>
          <Row>
            <Col span={3}>
              <Card.Image
                src="https://nextui.org/images/breathing-app-icon.jpeg"
                css={{ bg: "black", br: "50%" }}
                height={40}
                width={40}
                alt="Breathing app icon"
              />
            </Col>
            <Col>
              <Text color="#d1d1d1" size={12}>
                Breathing App
              </Text>
              <Text color="#d1d1d1" size={12}>
                Get a good night's sleep.
              </Text>
            </Col>
          </Row>
        </Col> */}
          <Col>
            <Row justify="flex-start" css={{ mx: "6%" }}>
              <Button
                onMouseOver={onMouseOver}
                onMouseOut={onMouseOut}
                // flat
                auto
                rounded
                shadow={isHovered}
                ghost
                color="success"
                // css={{ color: "#ffffff", bg: "#0F9549" }}
              >
                <Text
                  css={{ color: "inherit" }}
                  size={12}
                  weight="bold"
                  transform="uppercase"
                >
                  Explore More +
                </Text>
              </Button>
            </Row>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
};
