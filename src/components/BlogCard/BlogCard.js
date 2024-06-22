
import "./BlogCard.css";
import { Link } from "react-router-dom";
function BlogCard({id,title,content,author,date,categories}) {
  return (
    
    <Link className="Blog-card" to={`/blog/${id}`}>
        <h1  className="title">{title}</h1>
        <p  className="content">{content.substring(0,100)}...</p>
        <div className="author-card">
            <img src={author.avatar}  alt="author"className="author-avtar"/>
            <span className="author"> {author.name}</span>
            <span className="date"> {date}</span>
        </div>
     {categories.map((categories,i)=>{
return<span key={i} className="btn">{categories}</span>
     })}
    </Link>
  )
}
export default BlogCard
