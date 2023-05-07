import React, { useState } from "react";
import styled from "styled-components";
// Assets
import ContactImg3 from "../../assets/img/contact.png";
import emailjs from "emailjs-com";

export default function Contact() {
  const [loader, setLoader] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const initState = {
    to_name: "Fourat Abdellatif",
    subject: "",
    message: "",
    from_name: "",
    from_email: "",
    from_phone: ""
  };

  const [send, setSend] = useState(initState);

  const handleChange = (e) => {
    setSend({ ...send, [e.target.name]: e.target.value });
  };

  const clear = () => {
    setSend({
      to_name: "Ecodata",
      subject: "",
      message: "",
      from_name: "",
      from_email: "",
      from_phone: ""
    });
  };

  const validateForm = () => {
    if (!send.from_name) {
      return "Please enter your name.";
    }

    if (!send.from_phone) {
      return "Please enter a phone number.";
    }

    if (!send.from_email) {
      return "Please enter your email.";
    }

    if (!/\S+@\S+\.\S+/.test(send.from_email)) {
      return "Please enter a valid email address.";
    }

    if (!send.subject) {
      return "Please enter a subject.";
    }

    if (!send.message) {
      return "Please enter a message.";
    }

    return "";
  };

  const sendEmail = async (e) => {
    await e.preventDefault();
    const errorMessage = validateForm();
    setErrorMessage(errorMessage);
    if (!errorMessage) {
      await setLoader(true);
      await emailjs.send(
        "gmail",
        "template_xa9xpw5",
        {
          to_name: "Ecodata",
          subject: send.subject,
          message: send.message,
          from_name: send.from_name,
          from_email: send.from_email,
          from_phone: send.from_phone
        },
        "_7ztP9DxDh-Se0OKv"
      );
      await setLoader(false);
      await clear();
    }
  };

  return (
    <Wrapper id="contact">
      <div className="lightBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Let's get in touch</h1>
            <p className="font13">
              Don't let your data go to waste - get in touch with us to see how
              we can help.
            </p>
          </HeaderInfo>
          <div className="row" style={{ paddingBottom: "30px" }}>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <Form validate onSubmit={sendEmail}>
                <label className="font13">First name:</label>
                <input
                  type="text"
                  id="fname"
                  value={send.from_name}
                  name="from_name"
                  className="font20 extraBold"
                  onChange={handleChange}
                />
                {errorMessage === "Please enter your name." && (
                  <div className="error">{errorMessage}</div>
                )}
                <label className="font13">Phone:</label>
                <input
                  type="tel"
                  id="phone"
                  value={send.from_phone}
                  name="from_phone"
                  className="font20 extraBold"
                  onChange={handleChange}
                />
                {errorMessage === "Please enter a phone number." && (
                  <div className="error">{errorMessage}</div>
                )}
                <label className="font13">Email:</label>
                <input
                  type="text"
                  id="email"
                  value={send.from_email}
                  name="from_email"
                  className="font20 extraBold"
                  onChange={handleChange}
                />
                {(errorMessage === "Please enter your email." || errorMessage === "Please enter a valid email address.") && (
                  <div className="error">{errorMessage}</div>
                )}
                <label className="font13">Subject:</label>
                <input
                  type="text"
                  id="subject"
                  value={send.subject}
                  name="subject"
                  className="font20 extraBold"
                  onChange={handleChange}
                />
                {errorMessage === "Please enter a subject." && (
                  <div className="error">{errorMessage}</div>
                )}
                <label className="font13">Message:</label>
                <textarea
                  rows="4"
                  cols="50"
                  type="text"
                  id="message"
                  value={send.message}
                  name="message"
                  className="font20 extraBold"
                  onChange={handleChange}
                />
                {errorMessage === "Please enter a message." && (
                  <div className="error">{errorMessage}</div>
                )}
                <SumbitWrapper className="flex">
                  {loader ? (
                    <ButtonInput
                      disabled
                      value="Sending..."
                      className="pointer animate radius8"
                      style={{ maxWidth: "220px" }}
                    />
                  ) : (
                    <ButtonInput
                      type="submit"
                      value="Send Message"
                      className="pointer animate radius8"
                      style={{ maxWidth: "220px" }}
                    />
                  )}
                </SumbitWrapper>
              </Form>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 flex">
              <div style={{ display: "block" }}>
                <div style={{ width: "100%", margin: "50px" }}>
                  <img
                    style={{
                      width: "600px",
                      height: "380px",
                      objectFit: "cover"
                    }}
                    src={ContactImg3}
                    alt="office"
                    className="radius6"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  padding: 70px 0 30px 0;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Form = styled.form`
  padding: 70px 0 30px 0;
  input,
  textarea {
    width: 100%;
    background-color: transparent;
    border: 0px;
    outline: none;
    box-shadow: none;
    border-bottom: 1px solid #707070;
    height: 30px;
    margin-bottom: 30px;
  }
  textarea {
    min-height: 100px;
  }
  @media (max-width: 860px) {
    padding: 30px 0;
  }
`;
const ButtonInput = styled.input`
  border: 1px solid #336dbf !important;
  background-color: #336dbf !important;
  width: 100% !important;
  height: 100% !important;
  padding: 15px !important;
  outline: none !important;
  color: #fff !important;
  :hover {
    background-color: #28589c !important;
    border: 1px solid #336dbf !important;
    color: #fff !important;
  }
  @media (max-width: 991px) {
    margin: 0 auto !important;
  }
`;
const SumbitWrapper = styled.div`
  @media (max-width: 991px) {
    width: 100%;
    margin-bottom: 50px;
  }
`;
