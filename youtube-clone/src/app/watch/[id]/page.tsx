import { videos } from "@/data/mock";
import Image from "next/image";
import Link from "next/link";

type Params = { params: { id: string } };

export default function WatchPage({ params }: Params) {
  const video = videos.find((v) => v.id === params.id) || videos[0];
  const others = videos.filter((v) => v.id !== video.id).slice(0, 10);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 pt-4">
      <div>
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black/10">
          <Image src={video.thumbnailUrl} alt={video.title} fill className="object-cover" />
        </div>
        <h1 className="mt-4 text-xl sm:text-2xl font-semibold leading-tight">{video.title}</h1>
        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src={video.channel.avatarUrl} alt={video.channel.name} width={44} height={44} className="rounded-full" />
            <div>
              <Link href={`/channel/${video.channel.id}`} className="font-medium hover:underline">
                {video.channel.name}
              </Link>
              <div className="text-xs text-black/60 dark:text-white/60">
                {Intl.NumberFormat("en", { notation: "compact" }).format(video.channel.subscribers)} subscribers
              </div>
            </div>
            <button className="ml-2 rounded-full bg-black/90 text-white text-sm px-4 py-2 hover:bg-black">Subscribe</button>
          </div>
          <div className="flex items-center gap-2">
            <button className="rounded-full bg-black/[.06] dark:bg-white/[.08] px-4 py-2 text-sm">Like</button>
            <button className="rounded-full bg-black/[.06] dark:bg-white/[.08] px-4 py-2 text-sm">Share</button>
            <button className="rounded-full bg-black/[.06] dark:bg-white/[.08] px-4 py-2 text-sm">Save</button>
          </div>
        </div>
        <div className="mt-4 p-4 rounded-xl bg-black/[.04] dark:bg-white/[.06]">
          <div className="text-sm text-black/70 dark:text-white/70">
            {Intl.NumberFormat("en", { notation: "compact" }).format(video.views)} views • {new Date(video.publishedAt).toLocaleDateString()}
          </div>
          <p className="mt-2 text-sm leading-relaxed whitespace-pre-wrap">{video.description}</p>
        </div>
      </div>
      <div className="space-y-4">
        {others.map((v) => (
          <Link key={v.id} href={`/watch/${v.id}`} className="flex gap-3 group">
            <div className="relative w-44 h-24 rounded-lg overflow-hidden bg-black/10">
              <Image src={v.thumbnailUrl} alt={v.title} fill className="object-cover transition-transform group-hover:scale-[1.02]" />
              <span className="absolute bottom-1 right-1 text-[11px] px-1 rounded bg-black/75 text-white">{v.duration}</span>
            </div>
            <div className="min-w-0">
              <h3 className="text-sm font-semibold line-clamp-2">{v.title}</h3>
              <div className="text-xs text-black/60 dark:text-white/60 mt-1">{v.channel.name}</div>
              <div className="text-xs text-black/50 dark:text-white/50">
                {Intl.NumberFormat("en", { notation: "compact" }).format(v.views)} views • {new Date(v.publishedAt).toLocaleDateString()}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

