import React from 'react'
import { Flex, Label, Input, Text, Textarea, Button, Box } from 'theme-ui'

export default function ContactForm() {
  return (
    <Flex
      as='form'
      variant='contactForm'
      name='contactform'
      method='POST'
      data-netlify='true'
      data-netlify-honeypot='bot-field'>
      <Text variant='contactForm.title' as='h3'>
        Reach Out
      </Text>

      <Input type='hidden' name='form-name' value='contactform' />

      {/* <Label variant='contactForm.label' htmlFor='name'     placeholder="Name">
        Name
      </Label> */}
      <Input
        variant='contactForm.input'
        name='name'
        id='name'
        mb={3}
        placeholder='Name'
      />
      {/* <Label variant='contactForm.label' htmlFor='email'>
        Email
      </Label> */}
      <Input
        placeholder='Email'
        variant='contactForm.input'
        type='email'
        name='email'
        id='email'
        mb={3}
      />
      {/* <Label variant='contactForm.label' htmlFor='message'>
        Message
      </Label> */}
      <Textarea
        variant='contactForm.textArea'
        placeholder='Message'
        name='message'
        id='message'
        rows='4'
        mb={3}
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
        type='submit'>
        Submit
      </Button>
    </Flex>
  )
}
