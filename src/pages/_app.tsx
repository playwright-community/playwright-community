import { MDXProvider, MDXProviderComponentsProp } from '@mdx-js/react'
import Highlight, { defaultProps, Language } from 'prism-react-renderer'
import theme from "prism-react-renderer/themes/github";

import { Meta } from 'types/blog'
import MainLayout from 'layouts/main'
import '../styles/index.css'

interface BlogWrapperProps {
  meta: Meta
}

const BlogWrapper: React.FunctionComponent<BlogWrapperProps> = ({ children, meta }) => <MainLayout title={meta.title} description={meta.description} image={meta.image}>
  <header className="px-3">
    <div className="flex flex-col items-center py-4">
      <h1 className="font-bold text-gray-800 hover:text-gray-700 text-4xl text-center">
        {meta.title}
      </h1>
      <p className="text-lg text-gray-600 text-center" style={{ maxWidth: "90%" }}>
        {meta.description}
      </p>
    </div>
  </header>
  <p className="text-sm mb-2">
    By <span className="font-semibold hover:text-gray-800">
      {meta.author}
    </span>
    , Published on {new Date(meta.date).toLocaleDateString("en-US")}
  </p>
  {children}
</MainLayout>

const CustomLink: React.FunctionComponent = ({ ...props }) => <a {...props} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer" />

interface CodeBlockProps {
  className: string
}

const CodeBlock: React.FunctionComponent<CodeBlockProps> = ({ children, className }) => {
  const language = className?.replace(/language-/, '') as Language
  return (
    <Highlight {...defaultProps} code={(children as string).trim()} language={language} theme={theme}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={`${className} my-3 p-5 overflow-x-auto`} style={style}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}

const components: MDXProviderComponentsProp = {
  wrapper: BlogWrapper,
  a: CustomLink,
  p: ({ ...props }) => <p className="my-3" {...props} />,
  ul: ({ ...props }) => <ul className="list-disc ml-5" {...props} />,
  code: CodeBlock,
  inlineCode: ({ ...props }) => <code className="bg-gray-100 px-1 text-purple-600" {...props} />,
  h1: ({ ...props }) => <h1 className="text-5xl" {...props} />,
  h2: ({ ...props }) => <h2 className="text-3xl" {...props} />,
  h3: ({ ...props }) => <h3 className="text-2xl" {...props} />,
  h4: ({ ...props }) => <h4 className="text-xl" {...props} />,
  h5: ({ ...props }) => <h5 className="text-lg" {...props} />,
  h6: ({ ...props }) => <h6 className="text-base" {...props} />,
  pre: ({ children }) => children
}

const MyApp = ({ Component, pageProps }) => <MDXProvider components={components}>
  <Component {...pageProps} />
</MDXProvider>


export default MyApp
