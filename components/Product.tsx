import { Card, Col, Row, Button, Text } from "@nextui-org/react";

export const Product = ({ imgSrc }: { imgSrc: string }) => (
  <Card css={{ w: "100%", h: "200px", bg: "transparent", mw: "300px"}}>
    {/* <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      
    </Card.Header> */}
    <Card.Body css={{ p: 0, }}>
      <Card.Image
        src={imgSrc}
        width="100%"
        height="100%"
        objectFit="scale-down"
        alt="Card example background"
      />
    </Card.Body>
    <Card.Footer css={{ justifyItems: "flex-start" }}>
      <Row wrap="wrap" justify="space-between" align="center">
        <Col>
          <Text h2 weight="bold" color="#ffffff" css={{textAlign: "center", p: 0, m: 0}}>
            EnSim{" "}
          </Text>
          <Text
            css={{ color: "$accents1", fontWeight: "$semibold", fontSize: "$lg", textAlign: "center" }}
          >
            Energy Simplified
          </Text>
        </Col>
      </Row>
    </Card.Footer>
  </Card>
);
