import React from "react";

const Contact = () => {
  return (
    <div id="contact">
      <h2>Contact me</h2>
      <form action="https://formspree.io/austinbooth78@gmail.com" method="POST">
        <div class="form-row">
          <label for="name">Name:</label>
          <input type="text" name="name" id="name" />
        </div>

        <div class="form-row">
          <label for="email">Email:</label>
          <input type="text" name="email" id="email" />
        </div>

        <div class="form-row">
          <label for="message">Message:</label>
          <textarea name="message" id="message"></textarea>
        </div>

        <div class="form-submit-row">
          <label></label>
          <input type="submit" value="Send" />
        </div>
      </form>
    </div>
  );
};

export default Contact;
