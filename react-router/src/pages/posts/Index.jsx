import { useEffect, useState } from "react";
import axios from 'axios';
import { BASE_URI } from '../config';
import CardBlog from "../../components/CardBlog";

export default function PostsIndex() {
    const [posts, setPosts] = useState([]);

    function fetchPosts() {
        axios.get(`${BASE_URI}/posts`)
            .then(res => {
                setPosts(res.data);
                console.log(res.data)
            })
            .catch(err => {
                console.error(err);
            });
    }

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <main>
            <section>
                <ul className="card-container">
                    {posts.map(post => (
                        <li key={post.id}>
                            <CardBlog onDelete={() => fetchPosts()} post={post} />
                        </li>
                    ))}
                </ul>
            </section>
        </main>
    );
}