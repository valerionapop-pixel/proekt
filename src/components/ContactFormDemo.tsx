"use client";

import { FormEvent, useState } from "react";

type ContactFormDemoProps = {
  messageLabel: string;
  messagePlaceholder: string;
  submitLabel: string;
  note: string;
};

export function ContactFormDemo({
  messageLabel,
  messagePlaceholder,
  submitLabel,
  note
}: ContactFormDemoProps) {
  const [message, setMessage] = useState("");

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.alert(`Demo submit:\n\n${message}`);
  };

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <label className="field">
        <span>{messageLabel}</span>
        <textarea
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder={messagePlaceholder}
          rows={6}
          required
        />
      </label>

      <button className="btn btn-primary full" type="submit">
        {submitLabel}
      </button>

      <small className="contact-note">{note}</small>
    </form>
  );
}
