import React from 'react'
import { Label, Input, Textarea, Button } from 'theme-ui'

export default function ContactForm() {
  return (
    <form
      name='contact'
      method='POST'
      data-netlify='true'
      data-netlify-honeypot='bot-field'>
      <input type='hidden' name='form-name' value='contact' />
      <Label htmlFor='name'>Name</Label>
      <Input name='name' id='name' mb={3} />
      <Label htmlFor='email'>Email</Label>
      <Input type='email' name='email' id='email' mb={3} />
      <Label htmlFor='message'>Message</Label>
      <Textarea name='message' id='message' rows='6' mb={3} />
      <Button
        sx={{ width: '100%', fontWeight: 'bolder', textTransform: 'uppercase' }}
        variant='secondary'>
        Submit
      </Button>
    </form>
  )
}
