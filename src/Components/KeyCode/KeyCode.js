import React, { useEffect } from "react";
import { useState } from "react";
import "./style.css";

export function KeyCode() {
  const [keyCode, setKeyCode] = useState("");
  const [eventCode, setEventCode] = useState("");
  const [eventKey, setEventKey] = useState("");

  useEffect(() => {
    window.addEventListener("keydown", handleChange);
  }, []);

  const handleChange = (e) => {
    setKeyCode(e.keyCode);
    setEventCode(e.code);
    setEventKey(e.key);
  };

  return (
    <section className="inline-block">
      {" "}
      <section className="key-code">
        <section className="events">
          <div className="event">
            <span className="event-header">event code</span>
            <span className="event-main">{eventCode}</span>
          </div>
          <div className="event">
            <span className="event-header">event key</span>
            <span className="event-main">{eventKey}</span>
          </div>
        </section>
        <span>{keyCode}</span>
      </section>
    </section>
  );
}
