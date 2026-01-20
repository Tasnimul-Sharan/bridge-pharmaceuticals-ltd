// import Breadcrumbs from "@/components/Breadcrumbs";
// import MedicalDisclaimer from "@/components/MedicalDisclaimer";
// import ProductDescription from "@/components/ProductDescription";
// import ProductGallery from "@/components/ProductGallery";
// import ProductInfo from "@/components/ProductInfo";
// import { productData } from "@/data/productDetailsData";
// import Head from "next/head";
// // import { productData } from "@/data/productData";

// // import Breadcrumbs from "@/components/Breadcrumbs";
// // import ProductGallery from "@/components/ProductGallery";
// // import ProductInfo from "@/components/ProductInfo";
// // import ProductDescription from "@/components/ProductDescription";
// // import MedicalDisclaimer from "@/components/MedicalDisclaimer";

// export async function getStaticPaths() {
//   return {
//     paths: productData.map((p) => ({
//       params: { slug: p.slug },
//     })),
//     fallback: false,
//   };
// }

// export async function getStaticProps({ params }) {
//   const product = productData.find((p) => p.slug === params.slug);

//   return {
//     props: { product },
//   };
// }

// export default function ProductDetails({ product }) {
//   return (
//     <>
//       <Head>
//         <title>{product.name} | Products</title>

//         {/* Schema.org */}
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify({
//               "@context": "https://schema.org",
//               "@type": "Drug",
//               name: product.name,
//               activeIngredient: product.generic,
//               therapeuticClass: product.therapeuticClass,
//             }),
//           }}
//         />
//       </Head>

//       <section className="bg-gray-50">
//         <div className="container mx-auto px-4 py-10">
//           <Breadcrumbs product={product} />

//           <div className="grid lg:grid-cols-3 gap-8">
//             <div className="lg:col-span-2">
//               <ProductGallery images={product.images} />
//             </div>

//             <ProductInfo product={product} />
//           </div>

//           <ProductDescription product={product} />
//           <MedicalDisclaimer />
//         </div>
//       </section>
//     </>
//   );
// }

import { productDetailsData } from "@/data/productDetailsData";
import ProductGallery from "@/components/ProductGallery";
import ProductInfo from "@/components/ProductInfo";
import ProductDescription from "@/components/ProductDescription";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";
import { notFound } from "next/navigation";
import { products } from "@/data/products";
import HeroSection from "@/components/HeroSection";
import Breadcrumbs from "@/components/Breadcrumbs";

export async function getStaticPaths() {
  const paths = productDetailsData.map((product) => ({
    params: { slug: product.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const baseProduct = products.find((p) => p.slug === params.slug);

  const details = productDetailsData.find((p) => p.slug === params.slug);

  if (!baseProduct || !details) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      product: {
        ...baseProduct,
        ...details,
      },
    },
  };
}

// const baseProduct = products.find((p) => p.slug === params.slug);
// const details = productDetailsData.find((p) => p.slug === params.slug);

// if (!baseProduct || !details) {
//   return { notFound: true };
// }

// return {
//   props: {
//     product: { ...baseProduct, ...details },
//   },
// };

export default function ProductDetailsPage({ product }) {
  return (
    <section>
      <HeroSection
        hero={{
          title: product.name,
          subtitle: product.generic,
          backgroundImage: product.images?.[0] || "/default-hero.jpg",
        }}
      />

      <div className="container mx-auto px-4 py-10">
        <Breadcrumbs product={product} />
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ProductGallery images={product.images} />
          </div>

          <ProductInfo product={product} />
        </div>

        <ProductDescription product={product} />
        <MedicalDisclaimer />
      </div>
    </section>
  );
}
