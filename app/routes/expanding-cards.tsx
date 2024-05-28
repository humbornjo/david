import { useState } from "react";
import "../css/expanding-cards.css"

function Panel({ data, active, onShow }: { data: Data, active: boolean, onShow: () => void }) {
  const tags = "panel " + (active ? "active" : "")
  return (
    <div className={tags} style={{ backgroundImage: "url(" + data.url + ")" }} onClick={onShow} >
      < h3 > {data.title}</h3 >
    </div >
  )
}

export default function App() {
  const [active, setActive] = useState(0)

  const panels = sources.map((src, index) => {
    return (
      < Panel key={index} data={src}
        active={index === active}
        onShow={() => { setActive(index) }}
      />)
  })

  return (
    <div className="container">
      {panels}
    </div >
  )
}

interface Data {
  title: string
  url: string
}

const sources: Data[] = [
  { title: "Explore The World", url: "https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" },
  { title: "Wild Forest", url: "https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" },
  { title: "Sunny Beach", url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80" },
  { title: "City on Winter", url: "https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80" },
  { title: "Mountains - Clouds", url: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" },
]
