import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {

  type variable =  "tall" | "wide" | "common" | "tall-wide"

  const images : Array<{image: string, type: variable}> = [{
    image: "https://picsum.photos/id/564/800/530",
    type: 'tall-wide'
  }, {
    image: "https://picsum.photos/id/566/800/530",
    type: `tall-wide`,
  },  {
    image: "https://picsum.photos/id/715/800/530",
    type: `tall-wide`,
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

  return (
    <div className="image-mosaic">
      {
        images.map(image => (
          <div className={createClass(image.type)} style={{backgroundImage: "url('"+image.image+"')"}}/>
        ))
      }
    </div>
  )
}
