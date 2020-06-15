import MainLayout from '../layouts/main'
import { Meta } from 'types/blog'
import Link from 'next/link'
import type { NextPage } from 'next';
import PlaywrightIcon from 'components/PlaywrightIcon';

interface IndexProps {
  posts: (Meta & {
    slug: string
  })[]
}

const Index: NextPage<IndexProps> = ({
  posts
}) => {
  return (
    <MainLayout title="Everything about the Playwright framework" description="A central home for tutorials, tooling, and showcases of the Playwright ecosystem.">
      <>
        <header>
          <div className="flex flex-col items-center py-12">
            <h1 className="font-bold text-gray-800 hover:text-gray-700 text-4xl">
              <PlaywrightIcon />
               Playwright Community
            </h1>
            <p className="text-lg text-gray-600 text-center">
              A central home for tutorials, tooling, and showcases of the Playwright ecosystem.
            </p>
          </div>
        </header>

        <div className="container mx-auto flex flex-wrap py-2">
          <section className="w-full flex flex-col">
            {posts.map(post => <article key={post.slug} className="flex shadow my-4">
              <Link href={`blog/${post.slug}`}>
                <a>
                  <div className="bg-white flex flex-col justify-start p-6">
                    <span className="text-blue-700 text-sm font-bold uppercase pb-4">{post.tags.join(", ")}</span>
                    <span className="text-3xl font-bold hover:text-gray-700 pb-4">{post.title}</span>
                    <span className="text-sm pb-3">
                      By <span className="font-semibold hover:text-gray-800">{post.author}</span>, Published on {new Date(post.date).toLocaleDateString("en-US")}
                    </span>
                    <span className="pb-6">{post.description}</span>
                    <span className="uppercase text-gray-800 hover:text-black">Continue Reading <i className="fas fa-arrow-right"></i></span>
                  </div>
                </a>
              </Link>
            </article>)}

          </section>
        </div>
      </>
    </MainLayout>
  )
}


Index.getInitialProps = async () => {
  const posts = (context => {
    const keys = context.keys();
    const values = keys.map(context);
    return keys.map((key, index) => {
      // Create slug from filename
      const slug = key.match(/([\w-]+)(?:\/index|)\.mdx$/)[1]
      const { meta }: any = values[index]
      return {
        ...meta,
        slug,
        date: new Date(meta.date)
      };
    });
  })(require.context("./blog", true, /\.mdx$/));
  return {
    posts: posts.sort((a, b) => b.date - a.date).filter(post => !post.hidden)
  }
}

export default Index
