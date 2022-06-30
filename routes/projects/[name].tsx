// routes/projects.tsx

/** @jsx h */
import { h } from "preact";
import { PageProps } from "$fresh/server.ts";

export default function ProjectPage(props: PageProps) {
  const { name } = props.params;
  return (
    <main>
      <h1>project page: {name}</h1>
    </main>
  );
}
