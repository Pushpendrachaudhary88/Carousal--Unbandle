import { Channel, Video } from "@/types";

const avatar = (seed: number) => `https://i.pravatar.cc/128?img=${(seed % 70) + 1}`;
const photo = (seed: number) => `https://images.unsplash.com/photo-15${(seed % 90) + 10}0000-000000000000?q=80&w=1280&auto=format&fit=crop`;

export const channels: Channel[] = Array.from({ length: 6 }, (_, i) => ({
  id: `ch_${i + 1}`,
  name: [
    "Pixel Studio",
    "CineCraft",
    "TechFlow",
    "DesignDose",
    "CodeCanvas",
    "MotionHub",
  ][i % 6],
  avatarUrl: avatar(i + 1),
  subscribers: Math.floor(10000 + Math.random() * 900000),
}));

export const videos: Video[] = Array.from({ length: 18 }, (_, i) => {
  const channel = channels[i % channels.length];
  return {
    id: `vid_${i + 1}`,
    title: [
      "Design a Stunning Landing Page in 12 Minutes",
      "Cinematic B-Roll Tutorial: Beginner to Pro",
      "Top 10 VSCode Extensions for 2025",
      "After Effects Tips You Need to Know",
      "Build a Modern UI with Tailwind v4",
      "Creative Filmmaking with Natural Light",
    ][i % 6],
    thumbnailUrl: photo(i + 3),
    duration: ["8:24", "12:10", "4:48", "16:32", "22:01"][i % 5],
    views: Math.floor(1000 + Math.random() * 1_500_000),
    publishedAt: new Date(Date.now() - i * 86_400_000).toISOString(),
    channel,
    description:
      "Learn how to create a modern, responsive interface with clean motion and accessibility in mind.",
  };
});

export const categories: string[] = [
  "All",
  "Music",
  "Gaming",
  "Live",
  "Mixes",
  "News",
  "Sports",
  "Movies",
  "Trending",
  "Design",
  "Tech",
  "Education",
  "Podcast",
  "AI",
  "Coding",
  "Travel",
];

