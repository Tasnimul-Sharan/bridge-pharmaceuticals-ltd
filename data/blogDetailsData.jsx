import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const blogDetailsData = {
  meta: {
    title: "Blogs | Bridge Pharma",
    description:
      "Explore expert insights from Bridge Pharma on pharmaceutical manufacturing, animal health, research, quality assurance, logistics, and digital transformation.",
    keywords:
      "Bridge Pharma blog, pharmaceutical manufacturing, GMP compliance, animal health medicines, pharma research, cold chain logistics, quality assurance pharma, digital pharma transformation",
    author: "Bridge Pharma Insights",
    url: "https://www.bridgepharma.com/blogs",
    image: "https://www.bridgepharma.com/blogs/blogs-og.jpg",
  },

  blogDetails: [
    {
      slug: "gmp-compliance-pharma-manufacturing",
      blogPost: {
        title: "Ensuring GMP Compliance in Modern Pharmaceutical Manufacturing",
        image: "/blogs/pharma/pharma-1.jpg",
        author: "Bridge Pharma Insights",
        date: "18 AUGUST, 2025",
        description:
          "Good Manufacturing Practices (GMP) ensure consistent product quality, safety, and compliance in pharmaceutical production. Modern facilities integrate automation, validation systems, and strict quality controls to meet global regulatory standards.",
        checklist: [
          "Validated production environments.",
          "Strict documentation and batch traceability.",
          "Regular audits and quality inspections.",
          "Employee training on GMP standards.",
          "Automated quality control systems.",
        ],
        highlights: [
          "Ensures global regulatory compliance across markets.",
          "Reduces production risks and contamination chances.",
          "Improves brand credibility and trust.",
          "Maintains consistent medicine quality.",
        ],
        subImages: ["/blogs/pharma/pharma-2.jpg", "/blogs/pharma/pharma-3.jpg"],
        quote:
          "Quality is not inspected into a product — it is built into every process.",
        postTags: ["GMP", "Manufacturing", "Compliance"],
      },
      socialIcons: [
        {
          icon: FaFacebookF,
          link: (url) =>
            `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
              url,
            )}`,
        },
        {
          icon: FaXTwitter,
          link: (url, title) =>
            `https://twitter.com/intent/tweet?url=${encodeURIComponent(
              url,
            )}&text=${encodeURIComponent(title)}`,
        },
        {
          icon: FaLinkedinIn,
          link: (url, title) =>
            `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
              url,
            )}&title=${encodeURIComponent(title)}`,
        },
      ],
    },
    {
      slug: "advancing-animal-health",
      blogPost: {
        title: "Advancing Animal Health Through Quality Veterinary Medicines",
        image: "/blogs/animal-health/animal-health-1.jpg",
        author: "Bridge Pharma Insights",
        date: "10 AUGUST, 2025",
        description:
          "Veterinary pharmaceuticals play a crucial role in livestock productivity and animal well-being. Advanced formulations and strict safety standards help ensure effective disease prevention and treatment.",
        checklist: [
          "Safe and tested veterinary formulations.",
          "Improved livestock productivity.",
          "Preventive healthcare solutions.",
          "Disease monitoring and vaccination programs.",
          "Nutritional supplements for animal growth.",
        ],

        highlights: [
          "Supports sustainable agriculture and farming.",
          "Enhances animal immunity and lifespan.",
          "Improves food chain safety.",
          "Boosts rural economic stability.",
        ],

        subImages: [
          "/blogs/animal-health/animal-health-2.jpg",
          "/blogs/animal-health/animal-health-3.jpg",
        ],
        quote: "Healthy animals build a stronger agricultural future.",
        postTags: ["Animal Health", "Veterinary", "Medicine"],
      },
      socialIcons: [
        {
          icon: FaFacebookF,
          link: (url) =>
            `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
              url,
            )}`,
        },
        {
          icon: FaXTwitter,
          link: (url, title) =>
            `https://twitter.com/intent/tweet?url=${encodeURIComponent(
              url,
            )}&text=${encodeURIComponent(title)}`,
        },
        {
          icon: FaLinkedinIn,
          link: (url, title) =>
            `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
              url,
            )}&title=${encodeURIComponent(title)}`,
        },
      ],
    },

    {
      slug: "innovation-research-pharma",
      blogPost: {
        title: "Innovation & Research: Driving the Future of Pharmaceuticals",
        image: "/blogs/research/research-1.jpg",
        author: "Bridge Pharma R&D",
        date: "02 AUGUST, 2025",
        description:
          "Research and innovation are the foundation of pharmaceutical advancement. Continuous clinical studies, technology adoption, and product development enable safer and more effective treatments.",
        checklist: [
          "Continuous R&D investment.",
          "Technology-driven drug development.",
          "Collaborative research ecosystems.",
          "Clinical trial advancements.",
          "Data-driven decision making.",
        ],

        highlights: [
          "Accelerates discovery of new treatments.",
          "Improves patient safety and outcomes.",
          "Encourages global scientific collaboration.",
          "Enhances pharmaceutical competitiveness.",
        ],

        subImages: [
          "/blogs/research/research-2.jpg",
          "/blogs/research/research-3.jpg",
        ],
        quote: "Innovation today shapes the medicine of tomorrow.",
        postTags: ["Research", "Innovation", "Pharma"],
      },
      socialIcons: [
        {
          icon: FaFacebookF,
          link: (url) =>
            `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
              url,
            )}`,
        },
        {
          icon: FaXTwitter,
          link: (url, title) =>
            `https://twitter.com/intent/tweet?url=${encodeURIComponent(
              url,
            )}&text=${encodeURIComponent(title)}`,
        },
        {
          icon: FaLinkedinIn,
          link: (url, title) =>
            `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
              url,
            )}&title=${encodeURIComponent(title)}`,
        },
        {
          icon: FaInstagram,
          link: () => `https://www.instagram.com/bridgepharma/`,
        },
      ],
    },
    {
      slug: "pharma-quality-assurance-protocols",
      blogPost: {
        title: "Quality Assurance Protocols in Pharmaceutical Distribution",
        image: "/blogs/quality/quality-1.jpg",
        author: "Bridge Quality Team",
        date: "22 JULY, 2025",
        description:
          "Quality assurance in pharmaceutical distribution ensures that medicines reach patients in optimal condition. From storage standards to transportation monitoring, every step must comply with strict regulatory frameworks to protect public health.",
        checklist: [
          "Temperature-controlled storage facilities.",
          "Batch tracking and product traceability.",
          "Routine compliance audits and documentation.",
          "Secure packaging and tamper checks.",
          "Real-time shipment monitoring.",
        ],

        highlights: [
          "Prevents medicine degradation during transport.",
          "Ensures patient safety at delivery stage.",
          "Maintains legal and regulatory compliance.",
          "Builds long-term customer confidence.",
        ],

        subImages: [
          "/blogs/quality/quality-2.jpg",
          "/blogs/quality/quality-3.jpg",
        ],
        quote:
          "Distribution quality is the final gatekeeper of patient safety.",
        postTags: ["Quality Assurance", "Distribution", "Compliance"],
      },
      socialIcons: [
        {
          icon: FaFacebookF,
          link: (url) =>
            `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
        },
        {
          icon: FaXTwitter,
          link: (url, title) =>
            `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
        },
        {
          icon: FaLinkedinIn,
          link: (url, title) =>
            `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`,
        },
      ],
    },
    {
      slug: "cold-chain-medicine-safety",
      blogPost: {
        title: "Strengthening Cold Chain Logistics for Medicine Safety",
        image: "/blogs/supply-chain/supply-1.jpg",
        author: "Bridge Supply Chain",
        date: "14 JULY, 2025",
        description:
          "Cold chain logistics are critical for vaccines and temperature-sensitive medicines. Advanced monitoring systems, insulated transport, and real-time tracking ensure product efficacy from warehouse to patient.",
        checklist: [
          "Real-time temperature monitoring systems.",
          "Validated insulated transportation.",
          "Emergency response protocols for temperature deviation.",
          "Cold storage backup power systems.",
          "Route optimization for faster delivery.",
        ],

        highlights: [
          "Protects vaccine potency and effectiveness.",
          "Minimizes financial losses from spoilage.",
          "Improves supply chain transparency.",
          "Strengthens public healthcare reliability.",
        ],

        subImages: [
          "/blogs/supply-chain/supply-2.jpg",
          "/blogs/supply-chain/supply-3.jpg",
        ],
        quote:
          "A broken cold chain can break patient trust — precision matters.",
        postTags: ["Cold Chain", "Logistics", "Medicine Safety"],
      },
      socialIcons: [
        {
          icon: FaFacebookF,
          link: (url) =>
            `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
        },
        {
          icon: FaXTwitter,
          link: (url, title) =>
            `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
        },
        {
          icon: FaLinkedinIn,
          link: (url, title) =>
            `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`,
        },
      ],
    },
    {
      slug: "digital-transformation-pharma-operations",
      blogPost: {
        title: "Digital Transformation in Pharmaceutical Operations",
        image: "/blogs/technology/tech-1.jpg",
        author: "Bridge Pharma Tech",
        date: "05 JULY, 2025",
        description:
          "Digital transformation is redefining pharmaceutical operations through automation, AI-driven analytics, and smart supply chain systems. These technologies enhance efficiency, reduce human error, and accelerate innovation.",
        checklist: [
          "Automated production and packaging systems.",
          "AI-powered demand forecasting.",
          "Cloud-based inventory and compliance tracking.",
          "Digital documentation and reporting.",
          "Smart analytics for performance monitoring.",
        ],

        highlights: [
          "Boosts operational efficiency and speed.",
          "Reduces manual errors and paperwork.",
          "Enables real-time decision making.",
          "Future-proofs pharmaceutical businesses.",
        ],

        subImages: [
          "/blogs/technology/tech-2.jpg",
          "/blogs/technology/tech-3.jpg",
        ],
        quote:
          "Technology is no longer optional — it is the backbone of modern pharma.",
        postTags: ["Digital Transformation", "Pharma Tech", "Automation"],
      },
      socialIcons: [
        {
          icon: FaFacebookF,
          link: (url) =>
            `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
        },
        {
          icon: FaXTwitter,
          link: (url, title) =>
            `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
        },
        {
          icon: FaLinkedinIn,
          link: (url, title) =>
            `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`,
        },
        {
          icon: FaInstagram,
          link: () => `https://www.instagram.com/bridgepharma/`,
        },
      ],
    },
  ],
};
