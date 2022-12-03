import Head from "next/head";
import {
  Navbar,
  Text,
  useTheme,
  Dropdown,
  Avatar,
  Input,
  Image,
} from "@nextui-org/react";
import { Layout } from "../components/Layout";
import { SearchIcon } from "../components/SearchIcon";
import { useContext, useRef } from "react";
import AppContext from "../components/Context";

export default function Home() {
  const { isDark } = useTheme();
  const context = useContext<any>(AppContext);
  const jumpToCompanyIntro = () => {
    const {session} = context;
    session.current &&
    session.current.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  return (
    <>
      <Head>
        <title>Ensim Energy</title>
        <meta name="description" content="Ensim Energy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Navbar
          isCompact
          variant="sticky"
          shouldHideOnScroll
          disableBlur
          isBordered={isDark}
          css={{
            background: "$blue800", // colors.pink800
            boxShadow: "$md", // shadows.md
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
            
            <Navbar.Content
              enableCursorHighlight
              activeColor="primary"
              hideIn="xs"
              variant="highlight-rounded"
            >
              <Navbar.Link href="#" onClick={jumpToCompanyIntro}>About Ensim Energy</Navbar.Link>
              <Navbar.Link href="#">Energy</Navbar.Link>
              <Navbar.Link href="#">Contact Us</Navbar.Link>
              <Navbar.Link href="#">Social Media</Navbar.Link>
            </Navbar.Content>
          </Navbar.Brand>
          {/* <Navbar.Content>
            <Navbar.Link color="inherit" href="#">
              Login
            </Navbar.Link>
            <Navbar.Item>
              <Button auto flat as={Link} href="#">
                Sign Up
              </Button>
            </Navbar.Item>
          </Navbar.Content> */}
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
            <Dropdown placement="bottom-right">
              <Navbar.Item>
                <Dropdown.Trigger>
                  <Avatar
                    bordered
                    as="button"
                    color="primary"
                    size="md"
                    src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                  />
                </Dropdown.Trigger>
              </Navbar.Item>
              <Dropdown.Menu
                aria-label="User menu actions"
                color="secondary"
                onAction={(actionKey) => console.log({ actionKey })}
              >
                <Dropdown.Item key="profile" css={{ height: "$18" }}>
                  <Text b color="inherit" css={{ d: "flex" }}>
                    Signed in as
                  </Text>
                  <Text b color="inherit" css={{ d: "flex" }}>
                    zoey@example.com
                  </Text>
                </Dropdown.Item>
                <Dropdown.Item key="settings" withDivider>
                  My Settings
                </Dropdown.Item>
                <Dropdown.Item key="team_settings">Team Settings</Dropdown.Item>
                <Dropdown.Item key="analytics" withDivider>
                  Analytics
                </Dropdown.Item>
                <Dropdown.Item key="system">System</Dropdown.Item>
                <Dropdown.Item key="configurations">
                  Configurations
                </Dropdown.Item>
                <Dropdown.Item key="help_and_feedback" withDivider>
                  Help & Feedback
                </Dropdown.Item>
                <Dropdown.Item key="logout" withDivider color="error">
                  Log Out
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Navbar.Content>
        </Navbar>
      </Layout>
    </>
  );
}
