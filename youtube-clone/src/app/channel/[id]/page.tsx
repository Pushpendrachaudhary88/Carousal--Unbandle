import { channels, videos } from "@/data/mock";
import Image from "next/image";

type Params = { params: { id: string } };

export default function ChannelPage({ params }: Params) {
  const channel = channels.find((c) => c.id === params.id) || channels[0];
  const uploads = videos.filter((v) => v.channel.id === channel.id);

  return (
    <div className="pt-4">
      <div className="relative h-40 sm:h-56 rounded-2xl overflow-hidden bg-gradient-to-r from-red-400/60 to-orange-400/60" />
      <div className="flex items-end gap-4 -mt-10 px-1">
        <Image src={channel.avatarUrl} alt={channel.name} width={88} height={88} className="rounded-full ring-4 ring-background" />
        <div>
          <h1 className="text-2xl font-semibold">{channel.name}</h1>
          <div className="text-sm text-black/60 dark:text-white/60">
            {Intl.NumberFormat("en", { notation: "compact" }).format(channel.subscribers)} subscribers • {uploads.length} videos
          </div>
        </div>
        <div className="ml-auto">
          <button className="rounded-full bg-black/90 text-white text-sm px-5 py-2.5 hover:bg-black">Subscribe</button>
        </div>
      </div>

      <h2 className="mt-8 mb-4 text-lg font-semibold">Uploads</h2>
      <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {uploads.map((v) => (
          <div key={v.id}>
            <div className="relative aspect-video rounded-xl overflow-hidden bg-black/10">
              <Image src={v.thumbnailUrl} alt={v.title} fill className="object-cover" />
            </div>
            <div className="mt-3">
              <div className="font-semibold line-clamp-2">{v.title}</div>
              <div className="text-xs text-black/50 dark:text-white/50">
                {Intl.NumberFormat("en", { notation: "compact" }).format(v.views)} views • {new Date(v.publishedAt).toLocaleDateString()}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

