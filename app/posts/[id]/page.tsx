import { notFound } from "next/navigation";

export default async function Page({
    params,
} : {
    params: Promise<{ id: string }>;
}) {
    const id = (await params).id;
    const post = await fetch(`https://dummyjson.com/posts/${id}`);

    if (!post.ok) {
        return notFound();
    }

    const data = await post.json();

    return (
        <div className="text-center pt-12">
            <h1 className="text-3xl capitalize font-bold">{data.title}</h1>

            <p className="whitespace-pre-wrap mt-4">{data.body}</p>
        </div>
    )
};
