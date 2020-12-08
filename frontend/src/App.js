import React from "react";
import "./App.css";
import { extendTheme, ChakraProvider, CSSReset } from "@chakra-ui/react";
import Container from "./components/Container";
import PlayerEmbed from "./components/PlayerEmbed";
import Calendar from "@ericz1803/react-google-calendar";

const config = {
  useSystemColorMode: true,
  initialColorMode: "dark",
};

const customTheme = extendTheme({ config });

const CALENDAR_ID = "simplybusiness.co.uk_sc96d773ilr7t1sepq5lotsmo0@group.calendar.google.com";
const API_KEY = "algo";

function App() {
  const path = window.location.pathname;
  return (
    <div className="App">
      {path === "/embed" ? (
        <PlayerEmbed />
      ) : (
        <ChakraProvider theme={customTheme}>
          <CSSReset />
          <Container />
        </ChakraProvider>
      )}
    </div>
  );
}

function Schedule() {
    return (
      <div>
        <Calendar apiKey={API_KEY} calendarId={CALENDAR_ID} />
      </div>
    )
}

export default App;
