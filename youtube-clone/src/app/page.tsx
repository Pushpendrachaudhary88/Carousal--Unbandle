import CategoryPills from "@/components/CategoryPills";
import VideoGrid from "@/components/VideoGrid";

export default function Home() {
  return (
    <div className="space-y-6">
      <CategoryPills />
      <VideoGrid />
    </div>
  );
}
