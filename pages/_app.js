import '../styles/globals.css'
import '../styles/menu/menu_bar.css'
import '../styles/home/home.css'
import '../styles/categoryPage/category.css'
import '../styles/articlePage/article.css'
import '../styles/articlePage/cardRecomended.css'

import { useEffect } from "react";
import { useRouter } from "next/router";
import CookieConsent from "react-cookie-consent";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
      const handleRouteChange = (url) => {
          window.gtag("config", process.env.GOOGLE_ANALYTICS, {
              page_path: url,
          });
      };
      router.events.on("routeChangeComplete", handleRouteChange);
      return () => {
          router.events.off("routeChangeComplete", handleRouteChange);
      };
  }, [router.events]);


  return (
    <>
      <Component {...pageProps} />
      <CookieConsent
        location="bottom"
        buttonText="Sí, utilizar cookies."
        onAccept={() => location.reload()}
        cookieName="CookieConsent"
        expires={150}
        enableDeclineButton="true"
        declineButtonText="No, no utilizar cookies"
      >
        Esta página web utiliza cookies para analizar de forma anónima y estadística el uso que haces de la web, mejorar los contenidos y tu experiencia de navegación.
      {/* <a href="#enlace_hacia_politica_de_cookies">Política de Cookies</a>. */}
      </CookieConsent>
    </>
    )
}

export default MyApp
