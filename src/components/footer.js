import React from "react"
import { HiMail } from "react-icons/hi"
import {
  AiFillPhone,
  AiFillInstagram,
  AiFillYoutube,
  AiFillFacebook,
} from "react-icons/ai"

const Footer = () => (
  <div className="footer__wrapper">
    <div className="footer-container">
      <div className="footer-column">
        <h4>Kontakt</h4>
        <p>
          <HiMail style={{ height: "1.5em", width: "1.5em" }} />
          <span>info@dietetyktrenujedorotajanur.pl</span>
        </p>
        <p>
          <AiFillPhone style={{ height: "1.5em", width: "1.5em" }} />
          <span>536 548 435</span>
        </p>
        <div className="footer-links">
          <a
            href="https://www.facebook.com/Dietetyk-Trenuje-Dorota-Janur-698367500200281"
            target="_blank"
            rel="norefferer"
          >
            <AiFillFacebook />
          </a>
          <a
            href="https://www.instagram.com/dietetyk_trenuje_dorota_janur"
            target="_blank"
            rel="norefferer"
          >
            <AiFillInstagram />
          </a>
          <a
            href="https://www.youtube.com/channel/UCfewkD1XRaMXMZi2RTEuWyQ"
            target="_blank"
            rel="norefferer"
          >
            <AiFillYoutube />
          </a>
          <a
            href="https://repspolska.pl/trener/Dorota-Janur/REPS-TR-2204"
            target="_blank"
            rel="norefferer"
            style={{ fontSize: "1.5rem" }}
          >
            REPS
          </a>
        </div>
      </div>
      <div className="footer-column">
        <h4>Adresy gabinetów</h4>
        <p>Medi Skin Clinic Legnica ul. Murarska 5c/d</p>
        <p> Astone Hotel Conference & Spa Lubin ul. Kwiatowa 11 </p>
        <p> Przychodnia Medpol Polkowice ul. Chełmońskiego 5</p>
      </div>
    </div>
  </div>
)

export default Footer
