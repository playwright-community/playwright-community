import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentProps } from 'next/document'

interface MyDocumentProps extends DocumentProps {
    isProduction: boolean
}

class MyDocument extends Document<MyDocumentProps> {
    static async getInitialProps(ctx: DocumentContext) {
        const isProduction = process.env.NODE_ENV === 'production';
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps, isProduction }
    }

    getGoogleTags() {
        return {
            __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-34156117-13');`
        };
    }
    render() {
        const { isProduction } = this.props
        return (
            <Html lang="en">
                <Head />
                <body>
                    <Main />
                    <NextScript />
                    {isProduction && <>
                        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-34156117-13"></script>
                        <script dangerouslySetInnerHTML={this.getGoogleTags()} />
                    </>}
                </body>
            </Html>
        )
    }
}

export default MyDocument