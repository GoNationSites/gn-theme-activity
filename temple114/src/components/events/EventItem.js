/** @jsx jsx */
import React from 'react';
import { css } from '@emotion/css';

import { jsx, Box, Image, Flex, Text, Button } from 'theme-ui';
import EventsModal from './EventsModal';
import EventDate from './EventDate';

export default function EventItem({
  event,
  setEvents,
  closeModal,
  state,
  slug,
}) {
  const { _id, name, starts, ends, description, imageurl } = event;

  const containerStyles = css`
    background-color: white;
    border: 1px solid gray-200;
    border-radius: 8px;
  `;

  const imgStyles = css`
    max-height: 450px;
    width: 100%;
    object-fit: cover;
  `;
  const h5Styles = css`
    font-size: 2rem;
    font-weight: bold;
    color: black;
    &.dark {
      color: white;
    }
  `;

  const pStyles = css`
    font-size: normal;
    color: black;
  `;

  const buttonStyles = css`
    display: inline-flex;
    align-items: center;
    padding: 3px 2px;
    font-size: sm;
    font-weight: medium;
    text-align: center;
    color: white;
    background-color: blue-700;
    border-radius: lg;
    &:hover {
      background-color: blue-800;
    }
    &:focus {
      outline: none;
      ring: 4;
      ring-color: blue-300;
    }
    &.dark {
      background-color: blue-600;
      &:hover {
        background-color: blue-700;
      }
      &:focus {
        ring-color: blue-800;
      }
    }
  `;

  return (
    <>
      <div className={`${containerStyles}`}>
        <a href="#">
          <img className={`${imgStyles}`} src={imageurl} alt={name} />
        </a>
        <div className="p-5" style={{ padding: '8px' }}>
          <a href="#">
            <h5 className={`${h5Styles}`}>{name}</h5>
          </a>
          <EventDate date={starts} />
          <p className={`${pStyles}`}>{description}</p>
          {/* <a href="#" className={`${buttonStyles}`}>
            Read more
          </a> */}
        </div>
      </div>
    </>
    // <Flex key={_id} variant='event.eventItemContainer'>
    //   <Image variant='event.eventItemImage' src={imageurl} alt='event' />
    //   <Flex variant='event.eventItemContent'>
    //     <EventDate date={starts} />
    //     <Box>
    //       <Text variant='event.eventItemTitle'>{name}</Text>
    //     </Box>
    //   </Flex>
    //   <Button
    //     variant='primary'
    //     onClick={() => {
    //       setEvents({ ...state, modalShowing: _id })
    //     }}
    //     sx={{ marginTop: 3, cursor: 'pointer' }}>
    //     See More
    //   </Button>

    //   <EventsModal
    //     slug={slug}
    //     event={event}
    //     modalShowing={_id === state.modalShowing}
    //     closeModal={closeModal}
    //   />
    // </Flex>
  );
}
