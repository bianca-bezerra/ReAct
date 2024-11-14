import './styles.css'

export const PostCard = ({ title, body, cover, id, alt }) => {
  return (
    <div className="post" key={id}>
      <div key={id} className="post-content">
        <img src={cover} alt={alt} />
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    </div>
  )
}
