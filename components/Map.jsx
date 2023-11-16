import { Box } from "@chakra-ui/react";
import React from "react";
import GoogleMapReact from "google-map-react";

const Map = ({ cordinates, setCordinates }) => {
  return (
    <Box className="w-full h-full">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={cordinates}
        center={cordinates}
        defaultZoom={10}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={() => {}}
        onChildClick={() => {}}
      ></GoogleMapReact>
    </Box>
  );
};

export default Map;
