import React from 'react';
import Main from './components/Main';
import logo from './Image.png';
import BackgroundAnimation from './components/BackgroundAnimation';

const App = () => (
  <>
  <BackgroundAnimation/>
  <Main
    background={{
      image: 'https://images.pexels.com/photos/3109830/pexels-photo-3109830.jpeg',
      textColor: '#fff',
      color: "black",
      overlay: {
        color: '#000',
        opacity: '.1'
      }
    }}
    logo={{
      src: logo,
      alt: 'logo',
      style: {
        width: '180px'
      }
    }}
    title={{
      text: 'Shadman Ahmed',
      style: {
        maxWidth: '440px',
      }
    }}
    description={{
      text: 'React/JS Developer',
      style: {
        maxWidth: '440px',
      }
    }}
    links={[
      {
        url: 'https://github.com/shadman-a',
        image: 'https://image.flaticon.com/icons/svg/733/733553.svg',
      },
      {
        url: 'https://twitter.com/talktoshad',
        image: 'https://image.flaticon.com/icons/svg/145/145812.svg',
      },
      {
        url: 'https://www.linkedin.com/in/ahmedshadman',
        image: 'https://image.flaticon.com/icons/svg/145/145807.svg',
      },
      {
        url: 'mailto:ahmedshadman966@gmail.com',
        image: 'https://image.flaticon.com/icons/svg/732/732200.svg',
      },
    ]}
  />
  </>
);

export default App;
