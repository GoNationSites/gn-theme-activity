import React from 'react';

export default function SpecialRequestForm() {
  // A function that dangerously renders HTML code

  return (
    <div
      style={{
        maxWidth: 400,
        margin: '0 auto',
      }}
    >
      <form
        className="special-request-form"
        name="special-request"
        method="post"
        data-netlify="true"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
        }}
      >
        <h2>Special Request Form</h2>
        <label style={{ width: '100%' }}>
          Date of Event:
          <input
            style={{ width: '100%' }}
            type="date"
            name="date-of-event"
            required
          />
        </label>
        <label style={{ width: '100%' }}>
          First Name:
          <input
            style={{ width: '100%' }}
            type="text"
            name="first-name"
            required
          />
        </label>
        <label style={{ width: '100%' }}>
          Last Name:
          <input
            style={{ width: '100%' }}
            type="text"
            name="last-name"
            required
          />
        </label>
        <label style={{ width: '100%' }}>
          Fiance Name:
          <input style={{ width: '100%' }} type="text" name="fiance-name" />
        </label>
        <label style={{ width: '100%' }}>
          Email Address:
          <input style={{ width: '100%' }} type="email" name="email" required />
        </label>
        <label style={{ width: '100%' }}>
          Telephone:
          <input
            style={{ width: '100%' }}
            type="tel"
            name="telephone"
            required
          />
        </label>
        <label style={{ width: '100%' }}>
          Event Location:
          <input
            style={{ width: '100%' }}
            type="text"
            name="event-location"
            required
          />
        </label>
        <label style={{ width: '100%' }}>
          Referred:
          <input style={{ width: '100%' }} type="text" name="referred" />
        </label>
        <label style={{ width: '100%' }}>
          Additional Comments:
          <textarea style={{ width: '100%' }} name="comments"></textarea>
        </label>
        <label style={{ width: '100%' }}>
          Type of Event:
          <select name="event-type" required>
            <option value="">Select an option</option>
            <option value="wedding">Wedding</option>
            <option value="birthday-party">Birthday Party</option>
            <option value="class-reunion">Class Reunion</option>
          </select>
        </label>
        <label style={{ width: '100%' }}>
          How did you hear about us?
          <div>
            <input
              style={{ width: '100%' }}
              type="radio"
              name="hear-about-us"
              value="venue"
              required
            />
            <label style={{ width: '100%' }}>Venue</label>
          </div>
          <div>
            <input
              style={{ width: '100%' }}
              type="radio"
              name="hear-about-us"
              value="wedding-wire"
              required
            />
            <label style={{ width: '100%' }}>Wedding Wire</label>
          </div>
          <div>
            <input
              style={{ width: '100%' }}
              type="radio"
              name="hear-about-us"
              value="facebook"
              required
            />
            <label style={{ width: '100%' }}>Facebook</label>
          </div>
          <div>
            <input
              style={{ width: '100%' }}
              type="radio"
              name="hear-about-us"
              value="radio"
              required
            />
            <label style={{ width: '100%' }}>Radio</label>
          </div>
          <div>
            <input
              style={{ width: '100%' }}
              type="radio"
              name="hear-about-us"
              value="bridal-show"
              required
            />
            <label style={{ width: '100%' }}>Bridal Show</label>
          </div>
          <div>
            <input
              style={{ width: '100%' }}
              type="radio"
              name="hear-about-us"
              value="instagram"
              required
            />
            <label style={{ width: '100%' }}>Instagram</label>
          </div>
          <div>
            <input
              style={{ width: '100%' }}
              type="radio"
              name="hear-about-us"
              value="a-friend"
              required
            />
            <label style={{ width: '100%' }}>A Friend</label>
          </div>
        </label>
      </form>
    </div>
  );
}
