import { FaInstagram } from "react-icons/fa";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const blogDetailsData = {
  meta: {
    title: "Blogs | Anondo Baari - Senior Care & Wellness",
    description:
      "Explore insightful blogs from Anondo Baari on senior care, wellness, fitness, mental health, community living, and healthy aging in Bangladesh.",
    keywords:
      "Anondo Baari blog, senior care Bangladesh, elderly wellness, yoga meditation, nutrition after 60, community living, mental health seniors, art therapy, fitness after 60, healthy aging tips",
    author: "Anondo Baari",
    url: "https://www.anondobari.com/blogs",
    image: "https://www.anondobari.com/blogs/blogs-og.jpg",
  },
  blogDetails: [
    {
      slug: "healing-power-of-yoga",
      blogPost: {
        title: "The Healing Power of Yoga and Meditation for Seniors",
        image: "/blogs/wellness/wellness-1.jpg",
        author: "Anondo Baari Team",
        date: "05 AUGUST, 2025",
        description:
          "Yoga and meditation are more than just exercises; they are practices that bring balance, peace, and health. At Anondo Baari, we encourage seniors to embrace these routines for a happier and healthier lifestyle.",
        checklist: [
          "Gentle yoga improves flexibility and reduces joint pain.",
          "Meditation helps reduce stress and improve memory.",
          "Breathing exercises promote calmness and better sleep.",
        ],
        subImages: [
          "/blogs/wellness/wellness-2.jpg",
          "/blogs/wellness/wellness-3.jpg",
        ],
        quote:
          "At any age, inner peace is the greatest form of wealth you can achieve.",
        postTags: ["Yoga", "Meditation", "Wellness"],
      },
      socialIcons: [
        {
          icon: FaFacebookF,
          link: (url) =>
            `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
              url
            )}`,
        },
        {
          icon: FaXTwitter,
          link: (url, title) =>
            `https://twitter.com/intent/tweet?url=${encodeURIComponent(
              url
            )}&text=${encodeURIComponent(title)}`,
        },
        {
          icon: FaLinkedinIn,
          link: (url, title) =>
            `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
              url
            )}&title=${encodeURIComponent(title)}`,
        },
      ],
    },
    {
      slug: "nutrition-after-60",
      blogPost: {
        title: "Nutrition After 60: Building Strength Through Food",
        image: "/blogs/nutrition/nutrition-1.jpg",
        author: "Dr. Sharmeen Rahman",
        date: "10 AUGUST, 2025",
        description:
          "As we age, nutrition becomes a cornerstone of good health. Balanced diets rich in proteins, vitamins, and minerals ensure vitality and energy for senior citizens.",
        checklist: [
          "Protein helps maintain muscle strength.",
          "Omega-3s support brain and heart health.",
          "Hydration is key for overall well-being.",
        ],
        subImages: [
          "/blogs/nutrition/nutrition-2.jpg",
          "/blogs/nutrition/nutrition-3.jpg",
        ],
        quote: "Food is not just fuel—it’s medicine for body and soul.",
        postTags: ["Nutrition", "Healthy Aging", "Lifestyle"],
      },
      socialIcons: [
        {
          icon: FaFacebookF,
          link: (url) =>
            `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
              url
            )}`,
        },
        {
          icon: FaXTwitter,
          link: (url, title) =>
            `https://twitter.com/intent/tweet?url=${encodeURIComponent(
              url
            )}&text=${encodeURIComponent(title)}`,
        },
        {
          icon: FaLinkedinIn,
          link: (url, title) =>
            `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
              url
            )}&title=${encodeURIComponent(title)}`,
        },
      ],
    },
    {
      slug: "community-living-happiness",
      blogPost: {
        title: "Why Community Living Enhances Happiness in Aging",
        image: "/blogs/community/community-1.jpg",
        author: "Anondo Baari Team",
        date: "15 AUGUST, 2025",
        description:
          "Living in a supportive community fosters joy, reduces loneliness, and encourages active participation. At Anondo Baari, we create spaces where seniors thrive together.",
        checklist: [
          "Shared activities strengthen social bonds.",
          "Supportive neighbors reduce feelings of isolation.",
          "Collective celebrations enhance overall happiness.",
        ],
        subImages: [
          "/blogs/community/community-2.jpg",
          "/blogs/community/community-3.jpg",
        ],
        quote:
          "Happiness is multiplied when it is shared with others in a community.",
        postTags: ["Community", "Happiness", "Wellbeing"],
      },
      socialIcons: [
        {
          icon: FaFacebookF,
          link: (url) =>
            `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
              url
            )}`,
        },
        {
          icon: FaXTwitter,
          link: (url, title) =>
            `https://twitter.com/intent/tweet?url=${encodeURIComponent(
              url
            )}&text=${encodeURIComponent(title)}`,
        },
        {
          icon: FaLinkedinIn,
          link: (url, title) =>
            `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
              url
            )}&title=${encodeURIComponent(title)}`,
        },
      ],
    },
    {
      slug: "mental-health-seniors",
      blogPost: {
        title: "Mental Health Awareness for Seniors: Breaking the Silence",
        image: "/blogs/mentalhealth/mentalhealth-1.jpg",
        author: "Dr. Tanvir Alam",
        date: "20 AUGUST, 2025",
        description:
          "Mental health is as important as physical health, yet it often goes unnoticed in seniors. At Anondo Baari, we focus on emotional well-being with therapy, counseling, and social interaction.",
        checklist: [
          "Regular counseling sessions improve outlook.",
          "Group activities reduce depression and anxiety.",
          "Mind games help sharpen memory.",
        ],
        subImages: [
          "/blogs/mentalhealth/mentalhealth-2.jpg",
          "/blogs/mentalhealth/mentalhealth-3.jpg",
        ],
        quote: "There is no health without mental health.",
        postTags: ["Mental Health", "Awareness", "Support"],
      },
      socialIcons: [
        {
          icon: FaFacebookF,
          link: (url) =>
            `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
              url
            )}`,
        },
        {
          icon: FaXTwitter,
          link: (url, title) =>
            `https://twitter.com/intent/tweet?url=${encodeURIComponent(
              url
            )}&text=${encodeURIComponent(title)}`,
        },
        {
          icon: FaLinkedinIn,
          link: (url, title) =>
            `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
              url
            )}&title=${encodeURIComponent(title)}`,
        },
      ],
    },
    {
      slug: "art-music-therapy",
      blogPost: {
        title: "Healing Through Art and Music Therapy",
        image: "/blogs/artmusic/artmusic-1.jpg",
        author: "Anondo Baari Cultural Team",
        date: "25 AUGUST, 2025",
        description:
          "Creative expression through art and music plays a vital role in healing. Seniors at Anondo Baari engage in painting, singing, and music sessions that bring joy and peace.",
        checklist: [
          "Art improves cognitive functions and motor skills.",
          "Music reduces stress and uplifts mood.",
          "Creative therapy boosts confidence and memory.",
        ],
        subImages: [
          "/blogs/artmusic/artmusic-2.jpg",
          "/blogs/artmusic/artmusic-3.jpg",
        ],
        quote:
          "Art and music speak the language of the soul when words fall short.",
        postTags: ["Art Therapy", "Music", "Healing"],
      },
      socialIcons: [
        {
          icon: FaFacebookF,
          link: (url) =>
            `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
              url
            )}`,
        },
        {
          icon: FaXTwitter,
          link: (url, title) =>
            `https://twitter.com/intent/tweet?url=${encodeURIComponent(
              url
            )}&text=${encodeURIComponent(title)}`,
        },
        {
          icon: FaLinkedinIn,
          link: (url, title) =>
            `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
              url
            )}&title=${encodeURIComponent(title)}`,
        },
      ],
    },
    {
      slug: "staying-fit-after-60",
      blogPost: {
        title: "Staying Fit After 60: Gentle Exercises That Work",
        image: "/blogs/fitness/fitness-1.jpg",
        author: "BY ANONDO BAARI",
        date: "20 AUGUST, 2025",
        description:
          "Fitness after 60 doesn’t mean high intensity—it’s about consistency and safety. At Anondo Baari, we provide seniors with gentle but effective exercise routines that enhance flexibility, improve balance, and boost overall energy.",
        checklist: [
          "Morning stretches keep joints flexible.",
          "Light yoga improves posture and breathing.",
          "Gentle strength training helps maintain mobility.",
        ],
        subImages: [
          "/blogs/fitness/fitness-2.jpg",
          "/blogs/fitness/fitness-3.jpg",
        ],
        quote: "Movement is the best medicine for graceful aging.",
        postTags: ["Fitness", "Wellness", "Healthy Aging"],
      },
      socialIcons: [
        {
          icon: FaFacebookF,
          link: (url) =>
            `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
              url
            )}`,
        },
        {
          icon: FaXTwitter,
          link: (url, title) =>
            `https://twitter.com/intent/tweet?url=${encodeURIComponent(
              url
            )}&text=${encodeURIComponent(title)}`,
        },
        {
          icon: FaLinkedinIn,
          link: (url, title) =>
            `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
              url
            )}&title=${encodeURIComponent(title)}`,
        },
        {
          icon: FaInstagram,
          link: () => `https://www.instagram.com/anondobaari/`,
        },
      ],
    },
  ],
};
