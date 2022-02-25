import Button from "../Buttons/Button";
import "./Form.css";
import emailjs from "emailjs-com";

const Form = () => {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_1x8fth7",
        "template_7m4r7qb",
        e.target,
        "user_ib5mhMDisTjI5jMhKIa2V"
      )
      .then((res) => {
        console.log(res);
        alert("You have sent a message");
        window.location.reload(false);
      })
      .catch((err) => console.err(err));
  };

  return (
    <div className="form-container">
      <div>
        <h2>we are happy to here from you</h2>
      </div>
      <form method="post" className="contact-form" onSubmit={sendEmail}>
        <div className="form-elements">
          <label className="form-label">Name:</label>
          <div className="form-inputs">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your Name"
              required
            />
          </div>
        </div>

        <div className="form-elements">
          <label className="form-label">Email:</label>
          <div className="form-inputs">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your Email"
              required
            ></input>
          </div>
        </div>

        <div className="form-elements">
          <label className="form-label">How did you find us?</label>
          <div className="form-inputs">
            <select name="find-us" id="find-us">
              <option value="friends" defaultChecked>
                Friends
              </option>
              <option value="search">Search engine</option>
              <option value="ad">Advertisement</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        <div className="form-elements">
          <label className="form-label">Newsletter</label>
          <div className="form-inputs">
            <input type="checkbox" name="news" id="news" defaultChecked />
            Yes please
          </div>
        </div>

        <div className="form-elements">
          <label className="form-label">Drop us a line</label>
          <div className="form-inputs">
            <textarea name="message" placeholder="Your message"></textarea>
          </div>
        </div>
        <Button type="submit">Send!</Button>
      </form>
    </div>
  );
};

export default Form;
