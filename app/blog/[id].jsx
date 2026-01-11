import { useRouter } from 'next/router';

const BlogPost = () => {
    const router = useRouter();
    const { id } = router.query;  // Access dynamic route parameter

    return <h1>Blog Post ID: {id}</h1>;
};

export default BlogPost;