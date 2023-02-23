import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import { listPosts } from "../utils/posts.ts";

export const handler: Handlers = {
  async GET(request, context) {
    const posts = await listPosts();

    return context.render({ posts });
  },
};

export default function Home(props: PageProps) {
  const { posts } = props?.data;

  return (
    <>
      <Head>
        <title>Deno-blog</title>
      </Head>

      <body>
        <section class="p-5 flex gap-3 flex-col">
          {posts.map((elm) => {
            return (
              <a
                href={`/post/${elm.id}`}
                class="w-full border-[1px] border-indigo-500 rounded p-2 hover:border-indigo-300 ease-linear"
              >
                <div>
                  <h2 class="text-2xl font-bold">{elm.title}</h2>
                  <h6>{elm.excerpt}</h6>
                </div>

                <small>{Intl.DateTimeFormat("es").format(elm.date)}</small>
              </a>
            );
          })}
        </section>
      </body>
    </>
  );
}
