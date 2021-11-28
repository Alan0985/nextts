import { StyledContact } from './Contact.style';

export const Contact = () =>
{
  const onSubmit = () =>
  {
    window.alert( 'Thanks for your message, we will get back to you soon.' )
  }
  return (
    <StyledContact>
      <h1>Contact Us</h1>
      <section>
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

        <form onSubmit={onSubmit}>
          <input type='text' placeholder='Name' name='name' required />
          <input type='email' placeholder='Email Address' name='email' required />
          <textarea name='text' placeholder='Please leave a message' required />
          <button type='submit'>Submit</button>
        </form>
      </section>
    </StyledContact>
  )
}
