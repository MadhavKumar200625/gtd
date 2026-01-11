import { useRouter } from "next/router";

export default function BlogPost() {
    const router = useRouter();
    console.log("Router Query:", router.query); // Debugging ke liye

    return <h1>Blog Post ID: {router.query.id}</h1>;
}
