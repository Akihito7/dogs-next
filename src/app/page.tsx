import { photosGet } from "../actions/photos-get";
import { FeedPhotos } from "../components/feed/feed-photos";

export default async function Home() {
  const photos = await photosGet();
  return (
    <section className="container mainContainer">
      <FeedPhotos photos={photos} />
    </section>
  );
}
