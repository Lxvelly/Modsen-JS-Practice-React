import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Text } from './components/Text';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <div>
        <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget velit nec ex viverra dictum. Morbi ultricies est eu massa congue, quis convallis eros rhoncus. Integer rutrum quam lectus, eget tristique ligula scelerisque vel. Integer imperdiet dui non luctus gravida. Mauris felis metus, lacinia egestas nisl ac, imperdiet facilisis leo. Sed porttitor finibus nibh, tempus dictum velit. Donec id volutpat purus. Mauris eros purus, eleifend eu tempor quis, varius id mauris. Phasellus luctus lobortis magna in efficitur. Nulla commodo at est sit amet pulvinar. Sed quis ligula vel mauris facilisis mattis at in turpis. Maecenas luctus tincidunt sollicitudin. Praesent in urna ipsum."/> 
    </div>
  </React.StrictMode>
);

