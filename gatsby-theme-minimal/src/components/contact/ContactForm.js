import React from 'react'
import { Flex, Label, Input, Textarea, Button, Box } from 'theme-ui'

export default function ContactForm() {
  return (
    <Flex
      as='form'
      variant='contactForm'
      name='contactform'
      method='POST'
      data-netlify='true'
      data-netlify-honeypot='bot-field'>
      <Input type='hidden' name='form-name' value='contactform' />

      <Label variant='contactForm.label' htmlFor='name'>
        Name
      </Label>
      <Input variant='contactForm.input' name='name' id='name' mb={3} />
      <Label variant='contactForm.label' htmlFor='email'>
        Email
      </Label>
      <Input
        variant='contactForm.input'
        type='email'
        name='email'
        id='email'
        mb={3}
      />
      <Label variant='contactForm.label' htmlFor='message'>
        Message
      </Label>
      <Textarea
        variant='contactForm.textArea'
        name='message'
        id='message'
        rows='3'
        mb={3}
      />
      <Button
        sx={{ width: '100%', fontWeight: 'bolder', textTransform: 'uppercase' }}
        variant='secondary'
        type='submit'>
        Submit
      </Button>
    </Flex>
  )
}
