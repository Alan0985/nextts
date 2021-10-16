import { StyledContact } from './Contact.style';
import { StyledButton } from '../Button/Button.style';

export const Contact = () => (
  <StyledContact>
    <div>
      <div>
        <p>Phone:</p>
        <p>+64 21 1234567</p>
      </div>

      <div>
        <p>Email:</p>
        <p>info@helloholiday.co.nz</p>
      </div>

      <div>
        <p>Address:</p>
        <p>Island Bay, Wellington, New Zealand</p>
      </div>

      <div>
        <p>Staffed Hours:</p>
        <p>Monday to Friday: 8am - 6pm</p>
      </div>
    </div>

    <form>
      <input type='text' placeholder='Name' name='name' />
      <input type='email' placeholder='Email Address' name='email' />
      <textarea name='text' placeholder='Please leave a message' />
      <StyledButton>Submit</StyledButton>
    </form>
  </StyledContact>
);
