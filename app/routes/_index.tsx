import type { MetaFunction, LinksFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { getAllFiles } from "~/utils/fs";
import * as path from 'path';

import "~/css/style.css"

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
    <div className="container-project pacifico-regular" style={{ fontSize: "1.3em" }}>
      <Link to={"/" + route}>{name}</Link>
    </div>
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
    <div className="david">
      <div className="container-title pacifico-regular" >
        <h1 >50 Project with React</h1>
      </div>
      <div className="container-logo">
        WTF
      </div>
      <div className="container-gallery">
        {gallery}
      </div>
    </div>
  );
}
