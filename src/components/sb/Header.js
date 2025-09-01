import { storyblokEditable } from "@storyblok/react";


export default function Header({ blok }) {

  return (
    <div
      {...storyblokEditable(blok)}
    >
        <p>HEJ FRÅN HEADER!!!</p>
    </div>
  );
}
