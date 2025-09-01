import { storyblokEditable } from "@storyblok/react/rsc";
import ServerComponent from "./ServerComponent";

export default function Feature({ blok }) {
  return (
    <div
      {...storyblokEditable(blok)}
      className="feature shadow-md p-4 rounded-md w-75"
    >
<p>{blok.name}</p>


    </div>
  );
}
