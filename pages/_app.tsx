import { MDXProvider } from '@mdx-js/react'

import MainLayout from 'layouts/main'
import '../styles/index.css'

const BlogWrapper = ({ children, meta }) => <MainLayout>
  <header className="px-3">
    <div className="flex flex-col items-center py-4">
      <span className="font-bold text-gray-800 hover:text-gray-700 text-5xl">
        {meta.title}
      </span>
      <p className="text-lg text-gray-600">
        {meta.description}
      </p>
    </div>
  </header>
  {children}
</MainLayout>

const CustomLink = ({ ...props }) => <a {...props} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer" />

const components = {
  wrapper: BlogWrapper,
  a: CustomLink,
  p: ({ ...props }) => <p className="my-3" {...props} />,
  ul: ({ ...props }) => <ul className="list-disc ml-5" {...props} />,
}

const MyApp = ({ Component, pageProps }) => <MDXProvider components={components}>
  <Component {...pageProps} />
</MDXProvider>


export default MyApp
