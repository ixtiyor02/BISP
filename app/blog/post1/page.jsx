import React from "react";
import Image from "next/image";
import { Clock, User, Tag } from "lucide-react";
import ProfileBlog from "@/public/profileblog.png";
import Post1 from "@/public/blog11.png";
import Post2 from "@/public/blog12.png";
import NewsletterComponent from "@/components/HomepageComponents/NewsletterComponent";

const BlogPostPage = () => {
  const post = {
    title: "Top 10 Excellent Smartwatches to Buy in 2025",
    date: "April 9, 2025",
    author: "Vertu England",
    category: "Watch Education",
    readTime: "5 min read",
    content: [
      {
        type: "paragraph",
        text: "Smartwatches are now a big part of daily life in 2025. Over 454 million people use them worldwide. They are not just cool; they are useful too. You can track fitness, stay connected, or check your health. About 92% of users say excellent smart watches help them feel better. The smartwatch market is huge, worth over $50 billion this year. This shows how much people love the ease and new features of these smartwatches.",
      },
      {
        type: "subheading",
        text: "Key Takeaways",
      },
      {
        type: "paragraph",
        text: "Smartwatches are very popular in 2025. Over 454 million people use them for fitness and health tracking. Pick a smartwatch that works with your phone. This helps you get notifications and use apps easily. Find smartwatches with good battery life. Some, like the Google Pixel Watch 3, last more than 52 hours on one charge. Think about your budget and what you need. Cheaper options like the Apple Watch SE have great features and save money. Smartwatches help track your health. Use tools like stress tracking to feel better and stay healthy.",
      },
      {
        type: "image",
        src: Post1,
        alt: "How We Picked the Best Smartwatches",
        caption: "Works with your devices",
      },
      {
        type: "subheading",
        text: "How We Picked the Best Smartwatches",
      },
      {
        type: "paragraph",
        text: "A good smartwatch should work well with your phone. Whether you use an iPhone or Android, it must match. For example, the Apple Watch Series 10 works great with iPhones. The Samsung Galaxy Watch 7 is perfect for Android users. Some, like the Google Pixel Watch 3, work with both. Always check if the watch fits your device before buying.",
      },
      {
        type: "subheading",
        text: "Cool features and new ideas",
      },
      {
        type: "paragraph",
        text: "Smartwatches in 2025 have amazing tools. They can track stress, emotions, and heart health. These tools help you understand your body and mind better. Here are some of the coolest features: Feature. What It Does? Stress Tracking. Checks stress levels and gives updates. Emotion Tracking. Tracks mood changes and feelings. Heart Rate Variability. Measures heartbeat changes to check stress and emotions.",
      },
      {
        type: "image",
        src: Post2,
        alt: "Battery life and how they work",
        caption: "Battery life and how they work",
      },
      {
        type: "subheading",
        text: "Battery life and how they work",
      },
      {
        type: "paragraph",
        text: "Battery life matters a lot for smartwatches. Nobody wants to charge their watch all the time. The best watches in 2025 last long on one charge. For example, the Google Pixel Watch 3 lasts 52 hours and 30 minutes. Here's how others compare: Smartwatch. Battery Life. Apple Watch Series 10 - 38 hours 30 minutes. Samsung Galaxy Watch 7 - 43 hours. Google Pixel Watch 3 - 52 hours 30 minutes",
      },
      {
        type: "subheading",
        text: "Price and value for money",
      },
      {
        type: "paragraph",
        text: "When buying a smartwatch, price and value are important. You want a watch that’s worth the money and makes life easier. The good news is, in 2025, smartwatches are better and cheaper because of competition.",
      },
      {
        type: "paragraph",
        text: "A beautifully decorated watch movement showcasing the artistry of horology",
      },
      {
        type: "paragraph",
        text: "For example, the Samsung Galaxy Watch 7 costs $239.00 and is great for Android users. Fitness lovers might like the Garmin Venu 3 at $349.99. If you use an iPhone, the Apple Watch Series 10 at $349.00 is a great choice. These watches show you can get quality without spending too much.",
      },
    ],
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <header className="bg-blue-600 text-white">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{post.title}</h1>
          <div className="flex justify-center items-center text-sm">
            <Clock className="w-4 h-4 mr-2" />
            <span>{post.date}</span>
            <User className="w-4 h-4 ml-4 mr-2" />
            <span>{post.author}</span>
            <Tag className="w-4 h-4 ml-4 mr-2" />
            <span>{post.category}</span>
          </div>
        </div>
      </header>

      {/* Blog Post Content */}
      <article className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6 md:p-8">
              {post.content.map((item, index) => {
                switch (item.type) {
                  case "paragraph":
                    return (
                      <p key={index} className="text-gray-700 mb-6">
                        {item.text}
                      </p>
                    );
                  case "subheading":
                    return (
                      <h2 key={index} className="text-2xl font-bold mb-4">
                        {item.text}
                      </h2>
                    );
                  case "image":
                    return (
                      <figure key={index} className="mb-6">
                        <Image
                          src={item.src}
                          alt={item.alt}
                          width={800}
                          height={600}
                          className="w-full h-auto rounded-lg"
                        />
                        <figcaption className="text-sm text-gray-500 mt-2">
                          {item.caption}
                        </figcaption>
                      </figure>
                    );
                  default:
                    return null;
                }
              })}
            </div>
          </div>
        </div>
      </article>

      {/* Author Bio */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="flex items-center">
            <Image
              src={ProfileBlog}
              alt={post.author}
              width={100}
              height={100}
              className="rounded-xl mr-4"
            />
            <div>
              <h3 className="text-xl font-bold">{post.author}</h3>
              <p className="text-gray-600">Horologist and Watch Enthusiast</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <NewsletterComponent />
    </div>
  );
};

export default BlogPostPage;
