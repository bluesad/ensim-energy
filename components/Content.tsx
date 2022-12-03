import { Box } from "./Box";
import styles from "../styles/Home.module.css";
import {
  Text,
  Spacer,
  Grid,
  Button,
  Card,
  Row,
  Link,
  Dropdown,
  Navbar,
  Image,
  Input,
  Avatar,
} from "@nextui-org/react";
import { Banner } from "./Banner";
import { Profile } from "./Profile";
import { Product } from "./Product";
import Contact from "./Contact";
import { SearchIcon } from "./SearchIcon";
import { EmailIcon } from "./EmailIcon";
import { Ref, RefObject, useContext, useEffect, useRef, useState } from "react";
import { FacebookIcon } from "./FacebookIcon";
import { TwitterIcon } from "./TwitterIcon";
import { InstaIcon } from "./InstaIcon";
import { PinterestIcon } from "./PinterestIcon";
import { YoutubeIcon } from "./YoutubeIcon";
import { TiktokIcon } from "./TiktokIcon";
import { useAppContext } from "./AppContext";

export const Content = () => {
  const { introRef, productRef } = useAppContext() as {
    introRef: Ref<HTMLElement>;
    productRef: Ref<HTMLElement>;
  };
  return (
    <>
      <Box
        css={{
          px: "$20",
          pt: "$8",
          pb: "$8",
          "@xsMax": { px: "$10" },
          background: "$blue800",
        }}
      >
        <Banner />
      </Box>
      <Grid.Container
        // gap={2}
        justify="center"
        css={{
          px: "6%",
          pt: "$8",
          pb: "$8",
          "@xsMax": { px: "$10" },
        }}
      >
        <Grid xs={12} md={4} sm={5}>
          <Text
            ref={introRef}
            h1
            css={{
              textGradient: "45deg, $blue800 20%, $green600 80%",
            }}
            weight="bold"
          >
            Company Introduction
          </Text>
        </Grid>
        <Grid xs={12} md={8} sm={7}>
          <Grid.Container gap={2} justify="center">
            <Grid xs={12}>
              <Text h5>
                The founders of EnSim Energy are from key players of new energy
                industry such as CATL, Gotion, Risen Energy, Sungrow Power, BYD,
                Geely etc. With the accumulation of industrial experiences and
                judgement of market trends, we formed this new company to focus
                on the development of residential energy storage market for
                Europe and North America market.
              </Text>
            </Grid>
            <Grid xs={12}>
              <Text h5>
                With a full year preparation, we finally formed the core team
                and decided the product development plan. Now the EnSim Energy
                has been founded with the great support from our investors and
                PE funds.
              </Text>
            </Grid>
            <Grid xs={12}>
              <Text h5>
                EnSim is the combination of Energy Simplified. The core value of
                EnSim is to develop a simplified product with easy-to-use
                interface for our customers with no worries of after-sale
                service. We will stick to this vision and deliver the best
                quality products to the market.
              </Text>
            </Grid>
          </Grid.Container>
        </Grid>
        <Grid xs={12} sm={4}>
          <Profile imgSrc="/profile1.png" />
        </Grid>
        <Grid xs={12} sm={4}>
          <Profile imgSrc="/profile2.png" />
        </Grid>
        <Grid xs={12} sm={4}>
          <Profile imgSrc="/profile3.png" />
        </Grid>
      </Grid.Container>
      <Box
        css={{
          px: "$20",
          pt: "$8",
          pb: "$8",
          "@xsMax": { px: "$10" },
          background: "$blue800",
        }}
      >
        <Grid.Container>
          <Grid xs={12} sm={4}>
            <Text
              ref={productRef}
              h1
              css={{
                textGradient: "45deg, $green50 20%, $green600 80%",
              }}
              weight="bold"
            >
              Product
            </Text>
          </Grid>
        </Grid.Container>
        <Grid.Container gap={2} justify="center">
          <Grid xs={4} md={3}>
            <Product imgSrc="/product1.png" />
          </Grid>
          <Grid xs={4} md={3}>
            <Product imgSrc="/product2.png" />
          </Grid>
          <Grid xs={4} md={3}>
            <Product imgSrc="/product3.png" />
          </Grid>
        </Grid.Container>
      </Box>
      <Box
        css={{
          px: "$20",
          pt: "$8",
          pb: "$8",
        }}
      >
        <Grid.Container gap={2} justify="center">
          <Grid sm={12} md={6}>
            <Card css={{ my: "6%" }}>
              <Card.Body css={{ py: "$10" }}>
                <Image src="/image1.png" alt="Default Image" objectFit="fill" />
              </Card.Body>
            </Card>
          </Grid>
          <Grid sm={12} md={6}>
            <Card css={{ my: "6%" }}>
              {/* <Card.Header>
              <Text b>Card Title</Text>
            </Card.Header>
            <Card.Divider /> */}
              <Card.Body css={{ py: "$10" }}>
                <Image src="/image2.png" alt="Default Image" objectFit="fill" />
              </Card.Body>
              {/* <Card.Divider />
            <Card.Footer>
              <Row justify="flex-end">
                <Button size="sm" light>
                  Cancel
                </Button>
                <Button size="sm">Agree</Button>
              </Row>
            </Card.Footer> */}
            </Card>
          </Grid>
        </Grid.Container>
      </Box>
      <Navbar
        isCompact
        disableBlur
        css={{
          background: "$green800", // colors.pink800
          boxShadow: "$lg", // shadows.md
          color: "#ffffff",
        }}
        containerCss={{
          background: "transparent !important", // colors.pink800
        }}
      >
        <Navbar.Brand css={{ mr: "$4" }}>
          <Image
            src="/logo.png"
            objectFit="cover"
            alt="Default Image"
            height={43}
            width="100%"
            css={{ paddingRight: 24 }}
          />
          <Navbar.Content>
            {/* <Navbar.Link href="#">Features</Navbar.Link>
              <Navbar.Link isActive href="#">
                Customers
              </Navbar.Link>
              <Navbar.Link href="#">Pricing</Navbar.Link>
              <Navbar.Link href="#">Company</Navbar.Link> */}
          </Navbar.Content>
          {/* <Navbar.Content
          enableCursorHighlight
          activeColor="primary"
          hideIn="xs"
          variant="highlight-rounded"
        >
          <Navbar.Link href="#">About Ensim Energy</Navbar.Link>
          <Navbar.Link href="#">Energy</Navbar.Link>
          <Navbar.Link href="#">Contact Us</Navbar.Link>
          <Navbar.Link href="#">Social Media</Navbar.Link>
        </Navbar.Content> */}
        </Navbar.Brand>
        <Navbar.Content>
          {/* <Navbar.Link color="inherit" href="#" isExternal>
          enquries@ensim-energy.com
        </Navbar.Link> */}
          <Button
            light
            icon={<EmailIcon fill="#008800" />}
            color="success"
            css={{ width: 280 }}
            onClick={() => {
              window.open(
                "mailto:enquries@ensim-energy.com?subject=Enquery%20on%20EnSim&body="
              );
            }}
          >
            enquries@ensim-energy.com
          </Button>
        </Navbar.Content>
        <Navbar.Content
          css={{
            "@xsMax": {
              w: "100%",
              jc: "space-between",
            },
          }}
        >
          <Navbar.Item
            css={{
              "@xsMax": {
                w: "100%",
                jc: "center",
              },
            }}
          >
            <Input
              clearable
              rounded
              contentLeft={
                <SearchIcon fill="var(--nextui-colors-accents6)" size={16} />
              }
              contentLeftStyling={false}
              css={{
                w: "100%",
                "@xsMax": {
                  mw: "300px",
                },
                "& .nextui-input-content--left": {
                  h: "100%",
                  ml: "$4",
                  dflex: "center",
                },
              }}
              placeholder="Search..."
            />
          </Navbar.Item>
        </Navbar.Content>
        <Navbar.Content hideIn="xs">
          <div className="flex justify-center space-x-2 text-gray-700">
            <Button
              auto
              light
              icon={<FacebookIcon fill="currentColor" stroke="white" />}
            />
            <Button
              auto
              light
              icon={<TwitterIcon fill="currentColor" stroke="white" />}
            />
            <Button
              auto
              light
              icon={<InstaIcon fill="currentColor" stroke="white" />}
            />
            <Button
              auto
              light
              icon={<PinterestIcon fill="currentColor" stroke="white" />}
            />
            <Button
              auto
              light
              icon={<YoutubeIcon fill="currentColor" stroke="white" />}
            />
            <Button
              auto
              light
              icon={<TiktokIcon fill="currentColor" stroke="white" />}
            />
          </div>
        </Navbar.Content>
      </Navbar>
      <Box
        css={{
          px: "$20",
          pt: "$8",
          pb: "$8",
          "@xsMax": { px: "$10" },
          background: "$blue800",
        }}
      >
        <Contact />
      </Box>
      <Grid.Container>
        <Card.Divider />
        <Card.Footer
          css={{
            bg: "$blue800",
            px: "$20",
            pt: "$8",
            pb: "$8",
            "@xsMax": { px: "$10" },
          }}
        >
          <Row justify="flex-end">
            <Link href="#" css={{ mx: "1%", color: "$blue500" }}>
              Sitemap
            </Link>{" "}
            |
            <Link href="#" css={{ mx: "1%", color: "$blue500" }}>
              Privacy Policy
            </Link>
          </Row>
        </Card.Footer>
      </Grid.Container>
    </>
  );
};
