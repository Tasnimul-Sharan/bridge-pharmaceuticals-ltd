// import "../styles/index.css";
// import { useLenis } from "../Hooks/useLenis";
// import Layout from "@/components/Layout";
// import { Analytics } from "@vercel/analytics/react";

// function MyApp({ Component, pageProps }) {
//   useLenis();
//   return (
//     <Layout>
//       <Component {...pageProps} />
//       <Analytics />
//     </Layout>
//   );
// }

// export default MyApp;

import "../styles/index.css";
import { useLenis } from "../Hooks/useLenis";
import { Analytics } from "@vercel/analytics/react";

function MyApp({ Component, pageProps }) {
  useLenis();

  // Allow per-page layouts
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <>
      {getLayout(<Component {...pageProps} />)}
      <Analytics />
    </>
  );
}

export default MyApp;
