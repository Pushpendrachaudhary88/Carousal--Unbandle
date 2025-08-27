import { videos } from "@/data/mock";
import VideoCard from "./VideoCard";

export default function VideoGrid() {
  return (
    <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {videos.map((v) => (
        <VideoCard key={v.id} video={v} />)
      )}
    </div>
  );
}

