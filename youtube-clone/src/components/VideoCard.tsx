import Image from "next/image";
import Link from "next/link";
import type { Video } from "@/types";

type Props = {
  video: Video;
};

export default function VideoCard({ video }: Props) {
  return (
    <Link href={`/watch/${video.id}`} className="group block">
      <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-black/10">
        <Image
          src={video.thumbnailUrl}
          alt={video.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
        <span className="absolute bottom-2 right-2 text-xs px-1.5 py-0.5 rounded bg-black/75 text-white">
          {video.duration}
        </span>
      </div>
      <div className="mt-3 flex gap-3">
        <Image
          src={video.channel.avatarUrl}
          alt={video.channel.name}
          width={40}
          height={40}
          className="rounded-full"
        />
        <div className="min-w-0">
          <h3 className="text-[15px] leading-snug font-semibold line-clamp-2">
            {video.title}
          </h3>
          <p className="text-sm text-black/60 dark:text-white/60 mt-1">
            {video.channel.name}
          </p>
          <p className="text-xs text-black/50 dark:text-white/50">
            {Intl.NumberFormat("en", { notation: "compact" }).format(video.views)} views • {new Date(video.publishedAt).toLocaleDateString()}
          </p>
        </div>
      </div>
    </Link>
  );
}

