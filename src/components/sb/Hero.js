
import { storyblokEditable } from "@storyblok/react";

export default function Hero({ blok }) {


    let heroClasses = `h-[50vh] bg-amber-400/25`



    return (
        <div {...storyblokEditable(blok)} >
            <h1>{blok.title}</h1>
            <div>{blok.description}</div>
            {blok.links && blok.links.map(link => (
                <a
                    key={link._uid}
                    href={link.link?.url || link.link?.cached_url}
                    className="text-blue-600 hover:underline"
                >
                    {link.text}
                </a>
            ))}

        </div>
    )
}