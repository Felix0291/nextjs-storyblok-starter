import { storyblokEditable } from "@storyblok/react";


export default function Header({ blok }) {
console.log("header::::",blok)
  return (
    <div
      {...storyblokEditable(blok)} className="w-250 bg-fixed h-37.5" style={{backgroundImage: `url(${blok?.logo.filename})`}}
    >
        <p>HEJ FRÅN HEADER!!!</p>
    </div>
  );
}
