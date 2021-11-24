import React, { useState } from "react";
import styled from "styled-components";

export default function ContactUs(props) {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  //   Form validation
  const [errors, setErrors] = useState({});

  //   Setting button text
  const [buttonText, setButtonText] = useState("Send");

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (fullname.length <= 0) {
      tempErrors["fullname"] = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
    }
    if (subject.length <= 0) {
      tempErrors["subject"] = true;
      isValid = false;
    }
    if (message.length <= 0) {
      tempErrors["message"] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    console.log("errors", errors);
    return isValid;
  };

  //   const [form, setForm] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    if (isValidForm) {
      setButtonText("Sending");
      const res = await fetch("/api/sendgrid", {
        body: JSON.stringify({
          email: email,
          fullname: fullname,
          subject: subject,
          message: message,
          shoppingCart: props.shoppingCart,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const { error } = await res.json();
      if (error) {
        console.log(error);
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText("Send");

        // Reset form fields
        setFullname("");
        setEmail("");
        setMessage("");
        setSubject("");
        return;
      }
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText("Send");
      // Reset form fields
      setFullname("");
      setEmail("");
      setMessage("");
      setSubject("");
    }
  };
  return (
    <main>
      <form onSubmit={handleSubmit}>
        <StyledLabel htmlFor="fullname">
          Vorname Name<Star>*</Star>
        </StyledLabel>
        <input
          type="text"
          value={fullname}
          onChange={(e) => {
            setFullname(e.target.value);
          }}
          name="fullname"
        />

        {errors?.fullname && (
          <StyledError>Name Feld muss befüllt sein.</StyledError>
        )}

        <StyledLabel htmlFor="email">
          E-mail Adresse<Star>*</Star>
        </StyledLabel>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        {errors?.email && (
          <StyledError>Email Feld muss befüllt sein.</StyledError>
        )}

        <StyledLabel htmlFor="subject">
          Betreff<Star>*</Star>
        </StyledLabel>
        <input
          type="text"
          name="subject"
          value={subject}
          onChange={(e) => {
            setSubject(e.target.value);
          }}
        />
        {errors?.subject && (
          <StyledError>Betreff Feld muss befüllt sein.</StyledError>
        )}

        <StyledLabel htmlFor="message">
          Nachricht<Star>*</Star>
        </StyledLabel>
        <StyledTextarea
          name="message"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        ></StyledTextarea>
        {errors?.message && (
          <StyledError>Nachricht Feld muss befüllt sein.</StyledError>
        )}
        <button type="submit">{buttonText}</button>
        {showSuccessMessage && (
          <StyledSuccess>
            Danke! Deine Nachricht wurde abgeschickt.
          </StyledSuccess>
        )}
        {showFailureMessage && (
          <StyledError>
            Oops! Da ist etwas schief gelaufen. Versuche noch mal.
          </StyledError>
        )}
      </form>
    </main>
  );
}

const Star = styled.span`
  color: red;
`;

const StyledLabel = styled.label`
  grid-column: 1/2;
  color: var(--color-text-normal);
  margin-top: 1rem;
  font-family: "Montserrat", sans-serif;
  font-size: 2vh;
`;

const StyledTextarea = styled.textarea`
  display: grid;
  grid-column: 3/4;
  font-family: "Montserrat", sans-serif;
`;

const StyledError = styled.p`
  grid-column: 1/2;
  font-size: 12px;
  color: red;
  font-family: "Montserrat", sans-serif;
`;

const StyledSuccess = styled.p`
  grid-column: 3/4;
  font-size: 16px;
  color: var(--color-text-normal);
  font-family: "Montserrat", sans-serif;
`;
