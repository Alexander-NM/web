import FlipCard from "./FlipCard"
import "../styling/contact-information.css"
import image from "../assets/placeholderImg.svg"
import { useEffect } from "react"
import { FaFacebook, FaXTwitter, FaLinkedin } from "react-icons/fa6"

export default function ContactInformation() {
    useEffect(() => {
        fetch(
            "https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&count=5"
        )
            .then((res) => res.json())
            .then((data) => {
                document.getElementById("big-img").src = data[0].urls.regular
            })
    }, [])

    return (
        <div className="contact-info-container">
            <FlipCard />
            <article>
                <p>
                    Lorem ipsum dolor sit amet, tempor prodesset eos no. Lorem
                    ipsum dolor sit amet, tempor prodesset eos no. Lorem ipsum
                    dolor sit amet, tempor prodesset eos no. Lorem ipsum dolor
                    sit amet, tempor prodesset eos no. Lorem ipsum dolor sit
                    amet, tempor prodesset eos no. Lorem ipsum dolor sit amet,
                    tempor prodesset eos no. Lorem ipsum dolor sit amet, tempor
                    prodesset eos no. Lorem ipsum dolor sit amet, tempor
                    prodesset eos no. Lorem ipsum dolor sit amet, tempor
                    prodesset eos no. Lorem ipsum dolor sit amet, tempor
                    prodesset eos no.
                </p>
            </article>
            <img id="big-img" src={image} alt="some image" />
            <FaFacebook size={20} />
            <FaXTwitter size={20} />
            <FaLinkedin size={20} />
        </div>
    )
}
