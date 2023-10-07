import { useState } from "react";

export const Contact = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [fullNameError, setFullNameError] = useState("");
  const [subjectError, setSubjectError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");

  const validateForm = () => {
    let isValid = true;

    if (fullName.length < 3) {
      setFullNameError("Full Name must be at least 3 characters");
      isValid = false;
    } else {
      setFullNameError("");
    }

    if (subject.length < 3) {
      setSubjectError("Subject must be at least 3 characters");
      isValid = false;
    } else {
      setSubjectError("");
    }

    const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    if (!email.match(emailPattern)) {
      setEmailError("Invalid email address");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (message.length < 3) {
      setMessageError("Message must be at least 3 characters");
      isValid = false;
    } else {
      setMessageError("");
    }

    return isValid;
  };

  const onFormSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const formData = {
        fullName,
        email,
        subject,
        message,
      };
      console.log("Valid submitted Form Data:", formData);

      setFullName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } else {
      console.log("Invalid Form Data");
    }
  };

  return (
    <div className="container">
      <form
        onSubmit={onFormSubmit}
        id="contactForm"
        className="mb-5 p-4 border-primary bg-light mx-auto text-secondary"
        style={{ border: "2px dashed", maxWidth: "500px" }}
      >
        <h1 className="text-center ">Contact Us</h1>
        <div>
          <div className="mb-3">
            <label htmlFor="full-name" className="form-label">
              Full Name
            </label>
            <input
              name="full-name"
              value={fullName}
              type="text"
              className="form-control"
              id="full-name"
              onChange={(e) => setFullName(e.target.value)}
            />
            <div className="formError text-primary" id="textMessageError">
              <p>{fullNameError}</p>
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="subject" className="form-label">
              Subject
            </label>
            <input
              name="subject"
              value={subject}
              type="text"
              className="form-control"
              id="subject"
              onChange={(e) => setSubject(e.target.value)}
            />
            <div className="formError text-primary" id="textMessageError">
              <p>{subjectError}</p>
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              name="email"
              value={email}
              type="email"
              className="form-control"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="formError text-primary" id="textMessageError">
              <p>{emailError}</p>
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Message
              <textarea
                value={message}
                className="form-control"
                name="message"
                id="message"
                cols="53"
                rows="5"
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <div className="formError text-primary" id="textMessageError">
                <p>{messageError}</p>
              </div>
            </label>
          </div>

          <button type="submit" className="btn btn-primary text-light">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};
