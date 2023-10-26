import React, { useEffect, useState, useRef } from 'react';
import { Box, Image, Flex, Text, Link } from 'theme-ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import checkIfExternalLink from '../helpers/checkIfExternalLink';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
let axios = require('axios');
let jsonpAdapter = require('axios-jsonp');

const Shout = ({ gonationID, poweredID }) => {
  const [shout, setShout] = useState({
    shoutData: null,
    isLoading: true,
  });
  const [scrolled, SetScrolled] = useState(false);

  //  === State ===
  const [lightBox, setLightbox] = useState({
    isOpen: false,
    mainSrc: '',
  });

  const scrollRef = useRef();
  scrollRef.current = scrolled;

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 70;
      if (scrollRef.current !== show) {
        SetScrolled(show);
      }
    };

    document.addEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    axios({
      url: `https://data.prod.gonation.com/profile/shoutsnew/${poweredID}`,
      adapter: jsonpAdapter,
    })
      .then((res) => {
        setShout({ ...shout, shoutData: res.data, isLoading: false });
      })
      .catch((e) => {
        console.log('error : ', console.e);
        setShout({ ...shout, isLoading: false });
      });
  }, []);

  return (
    <>
      {!shout.isLoading && shout.shoutData ? (
        <Box variant={`shout.${!scrolled ? 'container' : 'containerScrolled'}`}>
          <Flex variant='shout.innerContainer' className='shoutInnerContainer'>
            {console.log(shout.shoutData.shout.image)}
            {!shout.shoutData.shout.image.isDefault ? (
              <Box
                variant='shout.imageContainer'
                className='shoutImageContainer'
              >
                <Image
                  src={`${shout.shoutData.imageBaseUrl}/${shout.shoutData.shout.image.image.cloudinaryId}`}
                  variant='shout.shoutImage'
                  className='shoutShoutImage'
                  alt='branding'
                  onClick={
                    shout?.shoutData?.shout?.image?.image?.cloudinaryId
                      ? () => {
                          setLightbox({
                            isOpen: true,
                            mainSrc: `${shout.shoutData.imageBaseUrl}/${shout.shoutData.shout.image.image.cloudinaryId}`,
                          });
                        }
                      : () => {}
                  }
                />
              </Box>
            ) : (
              ''
            )}

            <Box variant='shout.content' className='shoutContent'>
              <Text variant='shout.title' className='shoutTitle'>
                <FontAwesomeIcon icon={faComment} /> Recent Shout
              </Text>
              <Text
                variant='shout.text'
                sx={{ fontSize: 2, margin: 0 }}
                className='shoutText'
              >
                {shout?.shoutData?.shout?.text}
              </Text>

              {shout?.shoutData?.shout?.ctas &&
                Object.keys(shout?.shoutData?.shout?.ctas).map(
                  (ctaName, index) => {
                    if (ctaName === 'cta1' || ctaName === 'cta2') {
                      return '';
                    } else {
                      return (
                        <Link
                          key={ctaName + index}
                          variant={`shout.cta`}
                          className='shoutCTA'
                          href={shout?.shoutData?.shout?.ctas[ctaName]}
                          target={
                            checkIfExternalLink(
                              shout?.shoutData?.shout?.ctas[ctaName]
                            )
                              ? '_blank'
                              : ''
                          }
                        >
                          {ctaName}
                        </Link>
                      );
                    }
                  }
                )}
            </Box>
          </Flex>
        </Box>
      ) : (
        ''
      )}

      {lightBox.isOpen && (
        <Lightbox
          mainSrc={lightBox.mainSrc}
          onCloseRequest={() => setLightbox({ isOpen: false })}
        />
      )}
    </>
  );
};

export default Shout;
