import { PostCard } from "../PostCard"
import './styles.css'

export const Posts = ({ posts = [] }) => {
  return (
    <div className="posts">
      {posts.map((post, index) => (
        <PostCard
          key={index}
          body={post.ody}
          cover={post.cover}
          id={post.id}
          title={post.title}
          alt={post.alt}
        />
      ))}
    </div>
  )
}
