import { render } from "$gfm/mod.ts";
import { extract } from "$std/encoding/front_matter/any.ts";
import type { Post } from "../types.d.ts";

export async function loadPosts(id: string): Promise<Post | null> {
  let raw: string;

  try {
    raw = await Deno.readTextFile(`./content/posts/${id}.md`);
  } catch {
    return null;
  }

  if (!raw) return null;

  const { attrs, body } = extract(raw);
  const params = attrs as Record<string, string>;

  const post: Post = {
    id,
    title: params.title,
    body: render(body),
    date: new Date(params.date),
    excerpt: params.excerpt,
  };

  return post;
}

export async function listPosts(): Promise<Post[]> {
  const promises: any[] = [];

  for await (const file of Deno.readDir("./content/posts")) {
    const { name } = file;
    const [id] = name.split(".");

    promises.push(loadPosts(id));
  }

  const res = await Promise.all(promises) as Post[];
  const posts = res.sort((a, b) => new Date(b.date) - new Date(a.date));

  return posts;
}

export async function listPostsSequencially(): Promise<Post[]> {
  const posts: any[] = [];

  for await (const file of Deno.readDir("./content/posts")) {
    const { name } = file;
    const [id] = name.split(".");
    const post: Post | null = await loadPosts(id);

    if (!post) continue;
    posts.push(post);
  }

  return posts;
}

await listPosts();
