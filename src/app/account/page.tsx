import { photosGet } from "@/src/actions/photos-get"
import { getUser } from "@/src/actions/user-get"
import { FeedPhotos } from "@/src/components/feed/feed-photos"

export default async function AccountPage() {
  const { data: user } = await getUser()
  if (!user) return <div><p>Nenhuma foto encontrada</p></div>
  const data = await photosGet({ user: user.username })
  return (
    <div>
      <FeedPhotos photos={data} />
    </div>
  )
}