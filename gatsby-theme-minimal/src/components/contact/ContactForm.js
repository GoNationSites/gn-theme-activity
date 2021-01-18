import React from 'react'
import { Label, Input, Textarea, Button, Box } from 'theme-ui'

export default function ContactForm() {
  return (
    <Box
      as='form'
      variant='contactForm'
      name='contact'
      method='POST'
      data-netlify='true'
      data-netlify-honeypot='bot-field'>
      <Input type='hidden' name='form-name' value='contact' />

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
        variant='contactForm.textarea'
        name='message'
        id='message'
        rows='6'
        mb={3}
      />
      <Button
        sx={{ width: '100%', fontWeight: 'bolder', textTransform: 'uppercase' }}
        variant='secondary'>
        Submit
      </Button>
    </Box>
  )
}
