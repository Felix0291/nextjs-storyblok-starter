
import { storyblokEditable } from "@storyblok/react";

export default function ProductCard({ blok }) {



    return (
        <div {...storyblokEditable(blok)} className={heroClasses} style={{
            backgroundImage: `url(${blok?.background_image?.filename})`
        }}>
            
        </div>
    )
}