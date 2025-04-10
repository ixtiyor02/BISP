import React from "react";
import Image from "next/image";
import { Clock, User, Tag, Facebook, Twitter, Linkedin } from "lucide-react";
import ProfileBlog from "@/public/profileblog.png";
import Watch1 from "@/public/blog21.png";
import Watch2 from "@/public/blog22.png";
import NewsletterComponent from "@/components/HomepageComponents/NewsletterComponent";

const BlogPostPage = () => {
  const post = {
    title: "Best Smartwatch for Designers & Creatives in 2025",
    date: "September 13, 2024",
    author: "PilotCow",
    category: "Luxury Timepieces",
    readTime: "8 min read",
    content: [
      {
        type: "paragraph",
        text: "In this fast environment of the design and creativity industries, collaborations and proper coordination are crucial. Wearing a smartwatch can be an amazing innovation for designers and creative personalities as it can be a time-measuring device and, simultaneously, a small companion that will assist with its smart options and help to keep all the notices on track. ",
      },
      {
        type: "subheading",
        text: "List of Best Smartwatch for Designers & Creatives in 2025",
      },
      {
        type: "paragraph",
        text: "The Samsung Galaxy Watch FE is an excellent choice for graphic designers and creatives due to its combination of advanced features and intuitive design. First, its seamless integration with Samsung’s ecosystem and Android apps provides easy access to productivity tools and notifications. With customizable widgets and notifications on the watch face, designers can receive updates on project deadlines, emails, and messages without constantly checking their phones or computers. This feature helps maintain focus and efficiency, which is crucial when working on detailed design tasks.",
      },
      {
        type: "image",
        src: Watch1,
        alt: "Samsung Galaxy Watch FE",
        caption: "Samsung Galaxy Watch FE",
      },
      {
        type: "subheading",
        text: "Apple Watch Series 9",
      },
      {
        type: "paragraph",
        text: "The Apple Watch Series 9 is a fantastic tool for graphic designers and creatives due to its advanced features and seamless integration with Apple’s ecosystem. One of its standout features is the powerful Apple S9 chip, which delivers fast performance and smooth interaction with various apps. This allows creatives to manage notifications, calendar events, and reminders directly from their wrist, reducing the need to constantly check their phone or computer. With access to apps like Notion, Trello, or reminders, designers can stay organized and on top of their tasks, helping to streamline their workflow and increase productivity.",
      },
      {
        type: "subheading",
        text: "Fitbit Versa 4",
      },
      {
        type: "paragraph",
        text: "The Fitbit Versa 4 is a strong choice for graphic designers and creatives due to its balance of fitness tracking and productivity features. One of its key advantages is its comprehensive health and wellness monitoring. The Versa 4 tracks heart rate, sleep patterns, and physical activity, providing insights that can help designers manage their well-being during long hours of work. Regular movement reminders and stress management features encourage a healthier work-life balance, which is crucial for avoiding issues like back pain and mental fatigue.",
      },
      {
        type: "image",
        src: Watch2,
        alt: "Fitbit Versa 4",
        caption: "The innovative Fitbit Versa 4",
      },
      {
        type: "subheading",
        text: "Google Pixel Watch 2",
      },
      {
        type: "paragraph",
        text: "The Google Pixel Watch 2 is an excellent option for graphic designers and creatives due to its integration with Google’s ecosystem and advanced smart features. One of its standout aspects is its seamless connectivity with Google services, including Google Calendar, Gmail, and Google Keep. This integration allows designers to manage their schedules, track deadlines, and stay updated with important notifications directly from their wrist, streamlining their workflow and improving productivity. The watch’s ability to sync with Google apps ensures that designers can access their most critical information quickly and efficiently.",
      },
      {
        type: "subheading",
        text: "OnePlus Watch 2",
      },
      {
        type: "paragraph",
        text: "The OnePlus Watch 2 is a compelling choice for graphic designers and creatives due to its combination of advanced features and affordability. One of its key strengths is its great health and fitness tracking capabilities. The watch provides detailed insights into heart rate, sleep quality, and physical activity, helping designers maintain their well-being during long periods of sedentary work. Regular movement reminders and stress monitoring features encourage a balanced lifestyle, which can improve overall comfort and productivity.",
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
              <p className="text-gray-600">Luxury Watch Expert and Collector</p>
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
