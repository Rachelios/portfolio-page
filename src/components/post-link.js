import React from "react"
import { Link } from "gatsby"

const PostLink = ({ post }) => (
  <article className="card ">
    <a href= {`https://heyiamrachel.com${post.frontmatter.path}`} >
      {!!post.frontmatter.thumbnail && (
        <img src={post.frontmatter.thumbnail} alt={post.frontmatter.title + "- Featured Shot"} />
      )}
    </a>
    <header>
      <h2 className="post-title">
        <a href= {`https://heyiamrachel.com${post.frontmatter.path}`} className="post-link">
            {post.frontmatter.title}
           </a>
      </h2>
      <div className="post-meta">{post.frontmatter.date}</div>
    </header> 
  </article>
)
export default PostLink
