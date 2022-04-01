import React from 'react';
import { Flex, Input, Text, Textarea, Button, Label } from 'theme-ui';

export default function ContactForm() {
  return (
    <Flex
      as='form'
      variant='contactForm'
      name='contactform'
      method='POST'
      data-netlify='true'
      data-netlify-honeypot='bot-field'
      sx={customStyles.formContainer}
    >
      <Text variant='contactForm.title' as='h3'>
        Join Our Team
      </Text>

      <Input
        type='hidden'
        name='form-name'
        value='contactform'
        ariaLabelledBy='hidden'
      />

      <Label>Your Name</Label>
      <Input
        variant='contactForm.input'
        name='name'
        id='name'
        mb={3}
        placeholder='Name'
        ariaLabelledBy='name'
        required={true}
      />

      <Label>Your Email</Label>
      <Input
        placeholder='Email'
        variant='contactForm.input'
        type='email'
        name='email'
        id='email'
        ariaLabelledBy='email'
        mb={3}
        required={true}
      />
      {/* <Label>Date Interested In Party</Label>
      <Input
        placeholder='Date'
        variant='contactForm.input'
        type='date'
        name='date'
        id='date'
        ariaLabelledBy='date'
        mb={3}
        required={true}
      />
      <Label>Number Of People</Label>
      <Input
        placeholder='0'
        variant='contactForm.input'
        type='number'
        name='numberofpeople'
        id='numberofpeople'
        ariaLabelledBy='numberofpeople'
        mb={3}
        required={true}
      /> */}

      <Label>Message</Label>
      <Textarea
        variant='contactForm.textArea'
        placeholder='Message'
        name='message'
        id='message'
        ariaLabelledBy='Message'
        rows='4'
        mb={3}
        required={true}
      />
      <Button
        sx={{
          width: 'fit-content',
          margin: '0 auto',
          padding: '1rem 6rem',
          fontWeight: 'bolder',
          textTransform: 'uppercase',
        }}
        variant='secondary'
        type='submit'
      >
        Submit
      </Button>
    </Flex>
  );
}

const customStyles = {
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    label: {
      maxWidth: '400px',
      padding: '0.25rem',

      // backgroundColor: 'black',
      // color: 'white',
    },
  },
};
