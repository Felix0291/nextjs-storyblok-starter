import { getStoryblokApi } from "@/lib/storyblok";
import { notFound } from "next/navigation";
import { StoryblokStory } from '@storyblok/react/rsc';

export default async function Page({ params }) {
  try {
    const { slug } = await params;
  } catch (error) {
    console.log("Error:", error);
  }
}
