import React from 'react';

import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';

const ShowGoogleMap = (props) => (
  <APIProvider apiKey={process.env.GATSBY_GOOGLE_API_KEY}>
    <Map
      style={{ height: '100%' }}
      defaultCenter={props.coords}
      defaultZoom={17}
    >
      <Marker position={props.coords} />F
    </Map>
  </APIProvider>
);

export default ShowGoogleMap;
