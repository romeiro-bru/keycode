import React, { useEffect } from "react";
import { useState } from "react";
import "./style.css";

export function KeyCode() {
  const [eventCode, setEventCode] = useState("");
  const [eventKey, setEventKey] = useState("");
  const [keyCode, setKeyCode] = useState("");
  const [hide, setHide] = useState(true);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
  }, []);

  const handleKeyDown = (e) => {
    setEventCode(e.code);
    setEventKey(e.key);
    setKeyCode(e.keyCode);
    setHide(false);
  };

  return (
    <section className="inline-block">
      <section hidden={!hide} className="key-code start">
        <p>Press any key</p>
      </section>
      <section hidden={hide} className="key-code">
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
