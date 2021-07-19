import React from 'react';
import { compose, withProps } from 'recompose';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';

import { API_KEY } from '../config';

const ShowGoogleMap = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&v=3.exp`,
    loadingElement: <div className='rounded' style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `30vh` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap,
)((props) => (
  <GoogleMap defaultZoom={17} defaultCenter={props.coords}>
    <Marker position={props.coords} />
  </GoogleMap>
));

export default ShowGoogleMap;
