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

// import "../styles/index.css";
// import { useLenis } from "../Hooks/useLenis";
// import { Analytics } from "@vercel/analytics/react";

// function MyApp({ Component, pageProps }) {
//   useLenis();

//   // Allow per-page layouts
//   const getLayout = Component.getLayout || ((page) => page);

//   return (
//     <>
//       {getLayout(<Component {...pageProps} />)}
//       <Analytics />
//     </>
//   );
// }

// export default MyApp;

// // pages/_app.js
// import "../styles/index.css";
// import { useLenis } from "../Hooks/useLenis";
// import { Analytics } from "@vercel/analytics/react";
// import Layout from "@/components/Layout"; // ✅ Default layout

// function MyApp({ Component, pageProps }) {
//   useLenis();

//   // ✅ If page has getLayout → use it
//   // ❌ else → wrap with default Layout
//   const getLayout =
//     Component.getLayout ||
//     ((page) => <Layout>{page}</Layout>);

//   return (
//     <>
//       {getLayout(<Component {...pageProps} />)}
//       <Analytics />
//     </>
//   );
// }

// export default MyApp;

// pages/_app.js
import "../styles/index.css";
import { useLenis } from "../Hooks/useLenis";
import { Analytics } from "@vercel/analytics/react";
import Layout from "@/components/Layout"; // default layout

function MyApp({ Component, pageProps }) {
  useLenis();

  // 🔑 If page defines getLayout → use it
  // 🔑 Else → wrap with default Layout (Navbar + Footer)
  const getLayout = Component.getLayout ?? ((page) => <Layout>{page}</Layout>);

  return (
    <>
      {getLayout(<Component {...pageProps} />)}
      <Analytics />
    </>
  );
}

export default MyApp;
