import { MDXProvider } from '@mdx-js/react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from "prism-react-renderer/themes/github";

import { Meta } from 'types/blog'
import MainLayout from 'layouts/main'
import '../styles/index.css'

interface BlogWrapperProps {
  meta: Meta
}

const BlogWrapper: React.FunctionComponent<BlogWrapperProps> = ({ children, meta }) => <MainLayout title={meta.title} description={meta.description}>
  <header className="px-3">
    <div className="flex flex-col items-center py-4">
      <span className="font-bold text-gray-800 hover:text-gray-700 text-4xl">
        {meta.title}
      </span>
      <p className="text-lg text-gray-600">
        {meta.description}
      </p>
    </div>
  </header>
  {children}
</MainLayout>

const CustomLink: React.FunctionComponent = ({ ...props }) => <a {...props} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer" />

const CodeBlock: React.FunctionComponent = ({ children }) => {
  return (
    <Highlight {...defaultProps} code={(children as string).trim()} language="javascript" theme={theme}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style, padding: '20px', overflowX: "auto" }}>
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

const components = {
  wrapper: BlogWrapper,
  a: CustomLink,
  p: ({ ...props }) => <p className="my-3" {...props} />,
  ul: ({ ...props }) => <ul className="list-disc ml-5" {...props} />,
  code: CodeBlock
}

const MyApp = ({ Component, pageProps }) => <MDXProvider components={components}>
  <Component {...pageProps} />
</MDXProvider>


export default MyApp
