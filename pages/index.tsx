import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React from "react"
import {useRouter} from "next/router";

export default function Home() {

  type variable =  "tall" | "wide" | "common" | "tall-wide"
  const router = useRouter()

  const images : Array<{image: string, type: variable}> = [{
    image: "/banner1.jpg",
    type: 'tall'
  }, {
    image: "https://picsum.photos/id/566/800/530",
    type: `tall`,
  },  {
    image: "https://picsum.photos/id/715/800/530",
    type: `tall`,
  }]

  const createClass = (type : string) : string => {
    let string = "card";
    switch (type) {
      case "tall":
        string += " card-tall";
        break;
      case "wide":
        string += " card-wide";
        break;
      case "tall-wide":
        string += " card-tall card-wide"
        break;
      default:
        break;
    }
    return string
  }

  const mosaicRef = React.useRef<HTMLDivElement>();

  React.useEffect(() => {
      window.addEventListener("message", (e) => {
        setTimeout(() => {
          alert(e.data)
          // @ts-ignore
          e.source.postMessage(mosaicRef.current.offsetHeight, e.origin);
        }, 3000);
      })
    })

  return (
    <div className="image-mosaic" ref={mosaicRef}>
      {
        images.map(image => (
          <div 
            key={image.image}
            className={createClass(image.type)}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={image.image} />
          </div>
        ))
      }
    </div>
  )
}
