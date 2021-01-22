import React from 'react'
import { Flex, Input, Text, Textarea, Button } from 'theme-ui'

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

      <Input
        variant='contactForm.input'
        name='name'
        id='name'
        mb={3}
        placeholder='Name'
      />

      <Input
        placeholder='Email'
        variant='contactForm.input'
        type='email'
        name='email'
        id='email'
        mb={3}
      />

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
