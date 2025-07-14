import { imgArray } from "../src/assets/imgDataBase"
import "../src/css/side-banners.css"
import { useEffect } from "react"

export default function SideBanners() {
    
    useEffect(() => {
        fetch(
            "https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&count=5"
        )
            .then((res) => res.json())
            .then((data) => {
                const imgEls = document.querySelectorAll("img")
                imgEls.forEach((imgEl, index) => {
                    imgEl.src = data[index].urls.regular
                })
            })
    }, [])
    
    return (
        <div className="img-container">
            {imgArray.map((img) => (
                <img 
                    className={img.bigSize ?
                        "big-img" :
                        ""
                    } 
                    src={img.src} 
                    alt={img.alt} />
            ))}
        </div>
    )
}
