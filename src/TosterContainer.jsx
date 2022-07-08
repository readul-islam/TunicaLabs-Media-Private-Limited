import React from 'react';
import { Toaster } from 'react-hot-toast';

const TosterContainer = () => {
    return (
        <Toaster
  position="top-right"
  reverseOrder={false}
  gutter={8}

  containerStyle={{
    top: 80,
    
  }}
  toastOptions={{
   
    className: '',
    duration: 3000,
    style: {
      background: '#363636',
      color: '#fff',
      padding: '16px',
    },
    
    success: {
      duration: 4000,
      theme: {
        primary: 'green',
        secondary: 'black',
      },
    },
  }}
/>
    );
};

export default TosterContainer;