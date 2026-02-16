import { productDetailsData } from "@/data/productDetailsData";
import ProductGallery from "@/components/ProductGallery";
import ProductInfo from "@/components/ProductInfo";
import ProductDescription from "@/components/ProductDescription";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";
import { products } from "@/data/products";
import HeroSection from "@/components/HeroSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import { supabaseServer } from "@/lib/supabaseServer";

// export async function getStaticPaths() {
//   const paths = productDetailsData.map((product) => ({
//     params: { slug: product.slug },
//   }));

//   return {
//     paths,
//     fallback: false,
//   };
// }

export async function getStaticPaths() {
  const { data, error } = await supabaseServer.from("products").select("slug");

  if (error) {
    return { paths: [], fallback: "blocking" };
  }

  const paths = data.map((item) => ({
    params: { slug: item.slug },
  }));

  return {
    paths,
    fallback: "blocking", // important
  };
}

// export async function getStaticProps({ params }) {
//   const baseProduct = products.find((p) => p.slug === params.slug);

//   const details = productDetailsData.find((p) => p.slug === params.slug);

//   if (!baseProduct || !details) {
//     return {
//       notFound: true,
//     };
//   }

//   return {
//     props: {
//       product: {
//         ...baseProduct,
//         ...details,
//       },
//     },
//   };
// }

export async function getStaticProps({ params }) {
  const { data, error } = await supabaseServer
    .from("products")
    .select("*")
    .eq("slug", params.slug)
    .single();

  if (error || !data) {
    return { notFound: true };
  }

  return {
    props: {
      product: data,
    },
    revalidate: 60, // 1 minute ISR
  };
}

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
