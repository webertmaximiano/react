import React from "react"

export default function Contact(props) {
    return (
      <div className="contact-card">
        <img src={props.item.img} alt={props.item.alt} />
        <h3>{props.item.name}</h3>
        <div className="info-group">
          <img src={props.item.phoneIcon} alt="Phone" />
          <p>{props.item.phone}</p>
        </div>
        <div className="info-group">
          <img src={props.item.emailIcon} alt="Email" />
          <p>{props.item.email}</p>
        </div>
      </div>
    );
  }