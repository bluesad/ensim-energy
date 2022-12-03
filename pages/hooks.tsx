import React, { useState } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Head from 'next/head';
import { Navbar, Text, Avatar, Dropdown, Input, Image } from "@nextui-org/react";
// import { AcmeLogo } from "components/AcmeLogo";
import { SearchIcon } from "../components/SearchIcon";


// NOTE: if using fullpage extensions/plugins put them here and pass it as props.
const pluginWrapper = () => {
    /*
    * require('../static/fullpage.scrollHorizontally.min.js'); // Optional. Required when using the "scrollHorizontally" extension.
    */
};

const originalColors = [
    "#ff5f45",
    "#0798ec",
    "#fc6c7c",
    "#435b71",
    "orange",
    "blue",
    "purple",
    "yellow",
  ],
  originalPages: Array<{ text: string; id?: number }> = [
    { text: "Section 1" },
    { text: "Section 2" },
    { text: "Section 3" },
  ];

const Hooks = () => {
    const
        [sectionsColor, setsectionsColor] = useState([...originalColors]),
        [fullpages, setfullpages] = useState([...originalPages]);

    const onLeave = (origin: any, destination: any, direction: any) => {
        console.log("onLeave", { origin, destination, direction });
        // arguments are mapped in order of fullpage.js callback arguments do something
        // with the event
      },
      handleChangeColors = () => {
        const newColors =
          sectionsColor[0] === "yellow"
            ? [...originalColors]
            : ["yellow", "blue", "white"];
        return setsectionsColor(newColors);
      },
      handleAddSection = () => {
        const { length } = fullpages;
        fullpages.push({
          text: `section ${length + 1}`,
          id: Math.random(),
        });
        return setfullpages([...fullpages]);
      },
      handleRemoveSection = () => {
        const newPages = [...fullpages];
        newPages.pop();
        return setfullpages(newPages);
      },
      moveSectionDown = () => {
        return (window as any).fullpage_api.moveSectionDown();
      };

    // const Menu = () => (
    //     <div
    //         className="menu"
    //         style={{
    //             position: "fixed",
    //             top: 0,
    //             zIndex: 100
    //         }}
    //     >
    //         <ul className="actions">
    //             <li>
    //                 <button onClick={handleAddSection}> Add Section </button>
    //                 <button onClick={handleRemoveSection}> Remove Section </button>
    //                 <button onClick={handleChangeColors}> Change background colors </button>
    //                 <button onClick={moveSectionDown}> Move Section Down </button>
    //             </li>
    //         </ul>
    //     </div>
    // );

    const Menu = () => {
      return (
        <Navbar isBordered variant="sticky">
          <Navbar.Brand css={{ mr: "$4" }}>
            {/* <AcmeLogo /> */}
            <Image
              src="/logo.png"
              objectFit="cover"
              alt="Default Image"
              height={76}
            />
            {/* <Text b color="inherit" css={{ mr: "$11" }} hideIn="xs">
              ACME
            </Text> */}
            <Navbar.Content hideIn="xs" variant="highlight">
              <Navbar.Link isActive href="#">
                Dashboard
              </Navbar.Link>
              <Navbar.Link href="#" onClick={handleAddSection}>
                Add Section
              </Navbar.Link>
              <Navbar.Link href="#" onClick={handleRemoveSection}>
                Remove Section
              </Navbar.Link>
              <Navbar.Link href="#" onClick={handleChangeColors}>
                Change background colors
              </Navbar.Link>
              <Navbar.Link href="#" onClick={moveSectionDown}>
                Move Section Down
              </Navbar.Link>
            </Navbar.Content>
          </Navbar.Brand>
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
      );
    }

    return (
      <div className="App">
        <Head>
          <title>My styled page</title>
          <link href="/static/styles.css" rel="stylesheet" />
        </Head>
        <Menu />
        <ReactFullpage
          navigation
          pluginWrapper={pluginWrapper}
          onLeave={onLeave}
          scrollHorizontally={true}
          sectionsColor={sectionsColor}
          render={() => (
            <ReactFullpage.Wrapper>
              {fullpages.map(({ text }) => (
                <div key={text} className="section">
                  <h1>{text}</h1>
                </div>
              ))}
            </ReactFullpage.Wrapper>
          )}
        />
      </div>
    );
}

export default Hooks;