import { Box } from "@chakra-ui/react";
import React from "react";
import GoogleMapReact from "google-map-react";

const Map = ({ cordinates, setCordinates, setBounds }) => {
  return (
    <Box className="w-full h-full">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY }}
        defaultCenter={cordinates}
        center={cordinates}
        defaultZoom={10}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={(e) => {
          setCordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={() => {}}
      ></GoogleMapReact>
    </Box>
  );
};

export default Map;
