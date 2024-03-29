import React from 'react';
import { Flex, Input, Text, Textarea, Button } from 'theme-ui';

export default function ContactForm() {
  return (
    <Flex
      as="form"
      variant="contactForm"
      name="contactform"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <Text variant="contactForm.title" as="h3">
        Reach Out
      </Text>
      <Text
        variant="contactForm.title"
        as="h4"
        sx={{
          fontSize: '1rem',
          maxWidth: 300,
          margin: 'auto',
          marginBottom: '1.5rem',
        }}
      >
        We DO NOT accept reservations via message, please call the restaurant.
      </Text>

      <Input
        type="hidden"
        name="form-name"
        value="contactform"
        ariaLabelledBy="hidden"
      />

      <Input
        variant="contactForm.input"
        name="name"
        id="name"
        mb={3}
        placeholder="Name"
        ariaLabelledBy="name"
        required={true}
      />

      <Input
        placeholder="Email"
        variant="contactForm.input"
        type="email"
        name="email"
        id="email"
        ariaLabelledBy="email"
        mb={3}
        required={true}
      />

      <Textarea
        variant="contactForm.textArea"
        placeholder="Message"
        name="message"
        id="message"
        ariaLabelledBy="Message"
        rows="4"
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
        variant="secondary"
        type="submit"
      >
        Submit
      </Button>
    </Flex>
  );
}
