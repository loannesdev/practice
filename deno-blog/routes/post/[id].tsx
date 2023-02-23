import { Handlers, PageProps } from "$fresh/server.ts";
import { CSS } from "$gfm/mod.ts";
import { loadPosts } from "../../utils/posts.ts";

export const handler: Handlers = {
  async GET(request, context) {
    const { id } = context.params;
    const post = await loadPosts(id);

    return context.render({ post });
  },
};

export default function Posts(props: PageProps) {
  const { post } = props?.data || {};

  return (
    <main class="p-5">
      <h1>{post.title}</h1>
      {post?.excerpt ? <h4>{post.excerpt}</h4> : null}

      <small>
        <time>{Intl.DateTimeFormat("es").format(post.date)}</time>
      </small>

      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div
        class="markdown-body"
        dangerouslySetInnerHTML={{ __html: post.body }}
      />
    </main>
  );
}
