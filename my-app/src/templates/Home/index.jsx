import { useCallback, useEffect, useState } from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Posts } from "../../components/Posts";
import { loadPosts } from "../../utils/load-posts";
import "./styles.css";

export const Home = () => {

  const [posts, setPosts] = useState([])
  const [page, setPages] = useState(0)
  const [postsPerPage] = useState(10)
  const [allPosts, setAllPosts] = useState([])
  const [searchInput, setSearchInput] = useState("")

  const noMorePosts = page + postsPerPage >= allPosts.length

  const handleLoadPosts = useCallback(async (page, postsPerPage) => {
    const posts = await loadPosts();
    setPosts(posts.slice(page, postsPerPage))
    setAllPosts(posts)
  })

  const loadMorePosts = () => {
    const nextPage = page + postsPerPage
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage)
    posts.push(...nextPosts)
    setPosts(posts)
    setPages(nextPage)
  }

  const handleChange = (e) => {
    const { value } = e.target
    setSearchInput(value)
  }

  const filteredPosts = !!searchInput ?
    posts.filter((post) => {
      return post.title.toLowerCase().includes(
        searchInput.toLowerCase())
    })
    : posts

  useEffect(() => {
    handleLoadPosts(0, postsPerPage)
  }, [handleLoadPosts, postsPerPage])

  return (
    <div className="container">
      <div className="search-container">
        <Input
          handleChange={handleChange}
          searchInput={searchInput}
          placeholder={"Search..."}
        />
      </div>
      {filteredPosts.length > 0 &&
        <Posts posts={filteredPosts} />
      }
      {filteredPosts.length === 0 &&
        <p>Não há postagens... :(</p>
      }

      <div className="button-container">
        <Button disabled={noMorePosts} text={"Load more"} onClick={loadMorePosts} />
      </div>

    </div>
  )
}


// export class Home extends Component {
//   state = {
//     counter: 0,
//     posts: [],
//     page: 0,
//     postsPerPage: 10,
//     allPosts: [],
//     searchInput: ""
//   };

//   componentDidMount() {
//     this.loadPosts();
//   }

//   loadPosts = async () => {
//     const { page, postsPerPage } = this.state
//     const posts = await loadPosts();
//     this.setState({
//       posts: posts.slice(page, postsPerPage),
//       allPosts: posts
//     });
//   };

//   loadMorePosts = () => {
//     const {
//       page,
//       postsPerPage,
//       allPosts,
//       posts
//     } = this.state
//     const nextPage = page + postsPerPage
//     const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage)
//     posts.push(...nextPosts)
//     this.setState({ posts, page: nextPage })
//   }

//   handleChange = (e) => {
//     const { value } = e.target
//     this.setState({ searchInput: value })
//   }

//   componentDidUpdate() { }

//   componentWillUnmount() { }

//   render() {
//     const { posts, page, postsPerPage, allPosts, searchInput } = this.state;
//     const noMorePosts = page + postsPerPage >= allPosts.length

//     const filteredPosts = !!searchInput ?
//       posts.filter((post) => {
//         return post.title.toLowerCase().includes(
//           searchInput.toLowerCase())
//       })
//       : posts
//     return (
//       <div className="container">
//         <div className="search-container">
//           <Input
//             handleChange={this.handleChange}
//             searchInput={searchInput}
//             placeholder={"Search..."}
//           />
//         </div>
//         {filteredPosts.length > 0 &&
//           <Posts posts={filteredPosts} />
//         }
//         {filteredPosts.length === 0 &&
//           <p>Não há postagens... :(</p>
//         }

//         <div className="button-container">
//           <Button disabled={noMorePosts} text={"Load more"} onClick={this.loadMorePosts} />
//         </div>

//       </div>
//     );
//   }
// }
