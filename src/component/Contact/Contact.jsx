import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-form row" id="Contact">
      <div className="c-left col-lg-3 col-sm-12">
        <div className="awesome">
          <span>Get in touch</span>
          <span>Contact me</span>
        </div>
      </div>
      <div className="c-right col-lg-3 col-sm-12">
        <form action="">
          <input
            type="text"
            name="user_name"
            className="user"
            placeholder="name"
          />
          <input
            type="email"
            name="user_email"
            className="user"
            placeholder="Email"
          />
          <textarea
            name="message"
            className="user"
            placeholder="Message"
            id=""
          />
          <input
            type="submit"
            value="Send"
            className="button Con-button"
            name=""
            id=""
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
