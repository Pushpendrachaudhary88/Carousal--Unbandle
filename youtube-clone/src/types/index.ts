export type Channel = {
  id: string;
  name: string;
  avatarUrl: string;
  subscribers: number;
};

export type Video = {
  id: string;
  title: string;
  thumbnailUrl: string;
  duration: string;
  views: number;
  publishedAt: string; // ISO string
  channel: Channel;
  description?: string;
};

