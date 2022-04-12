import React from 'react';
import { Flex } from 'theme-ui';
export default function Cover({ coverImageId }) {
  return (
    <Flex sx={styles.container}>
      <video
        autoPlay={true}
        muted={true}
        playsInline={true}
        webkitPlaysInline={true}
        controls={false}
        loop={true}
        poster={'https://res.cloudinary.com/gonation/' + coverImageId}
        alt='coverposter'
      >
        <source
          src={
            'https://res.cloudinary.com/gonation/video/upload/v1649775086/sites/esh/esh_banner_web_cut_out_1.mp4'
          }
          type='video/mp4'
        />

        <track kind='captions' />
      </video>
    </Flex>
  );
  // return (
  //   // <Flex
  //   //   variant='cover'
  //   //   title='main cover'
  //   //   ariaLabel='main cover'
  //   //   sx={{
  //   //     backgroundImage: `linear-gradient(45deg, rgb(0 0 0 / 10%), rgb(0 0 0 / 10%)), url('https://res.cloudinary.com/gonation/${coverImageId}')`,
  //   //   }}></Flex>
  // )
}

const styles = {
  container: {
    position: 'relative',
    video: {
      width: '100%',
      height: ['35vh', '', '', 'auto'],
      objectFit: ['cover', '', '', 'contain'],
      marginTop: ['150px', '', '', '0px'],
    },
    width: '100%',
  },
};
