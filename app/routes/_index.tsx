import type { MetaFunction, LinksFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { getAllFiles } from "~/utils/fs";
import * as path from 'path';
import FullPageCanvas from '../utils/components/bkground'

import "~/css/style.css"
import react_kawaii from '../img/react_kawaii.png';

export const meta: MetaFunction = () => {
  return [
    { title: "50 project in React" },
    { name: "description", content: "In the way of David" },
  ];
};

export async function loader() {
  const files: string[] = await getAllFiles(path.join(process.cwd(), "app", "routes"));
  return files.map(f => path.parse(f).name).filter(f => f !== "_index")
}

function Project({ name, route }: { name: string, route: string }) {
  return (
    <Link to={"/" + route}>
      <div className="container-project poetsen-one-regular  box-shadow-tight" style={{ fontSize: "1.3em" }}>
        {name}
      </div >
    </Link>
  )
}

export default function Index() {
  const routes = useLoaderData<typeof loader>();

  const gallery = routes.map((r, idx) => {
    return (
      <Project key={idx} name={r} route={r}></Project>
    )
  })

  return (

    <div className="saul">
      <FullPageCanvas />
      <div className="david">
        <div className="container-title pacifico-regular" >
          <h1 >50 Project with</h1>
        </div>
        <div className="container-logo">
          <img src={react_kawaii} alt="react-kawaii" />
        </div>
        <div className="container-gallery">
          {gallery}
        </div>
      </div>
    </div>
  );
}
