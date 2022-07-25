import Document, { Html, Head, Main, NextScript } from 'next/document'
import FooterPage from '../components/layout/FooterPage'


class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initalProps = await Document.getInitialProps(ctx)

        return initalProps
    }

    render() {
        return (
            <Html lang='es'>
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,800;0,900;1,300&display=swap" rel="stylesheet"/>
                    <script src="https://kit.fontawesome.com/50b2cf911e.js" crossOrigin="anonymous" async></script>
                    <link rel='shortcut icon' href='/favicon.ico'/>
                    <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS}`} />
                    <script dangerouslySetInnerHTML={{
                        __html:`
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}

                            gtag('consent', 'update', {
                                'analytics_storage': 'granted'
                            });

                            gtag('js', new Date());

                            gtag('config', '${process.env.GOOGLE_ANALYTICS}', {
                                page_path: window.location.pathname,
                            });
                            `,
                            }} />

                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            //this defaults to denying
                            gtag('consent', 'default', {
                                'analytics_storage': 'denied'
                            });

                            gtag('js', new Date());

                            //este función es la que nos devuelve el valor de la cookie de preferencias
                            function getCookie() {
                                const value = "; " + document.cookie;
                                const parts = value.split("; CookieConsent=");
                                if (parts.length === 2) return parts.pop().split(';').shift();
                            }

                            //únicamente si el valor es true, se cargan los scripts de Google Analytics.
                            if(getCookie() === "true"){
                                gtag('consent', 'update', {
                                    'analytics_storage': 'granted'
                                });
                            }

                            gtag('config', '${process.env.GOOGLE_ANALYTICS}', {
                                page_path: window.location.pathname,
                            });
                            `,
                        }}
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
                <footer>
                    <FooterPage />
                </footer>
            </Html>
        )
    }
}

export default MyDocument