import React from "react";
import Image from "next/image";
import { Clock, User, Tag, Facebook, Twitter, Linkedin } from "lucide-react";
import ProfileBlog from "@/public/profileblog.png";
import VintageWatch1 from "@/public/blog41.png";
import VintageWatch2 from "@/public/blog42.png";
import VintageWatch3 from "@/public/blog43.png";
import NewsletterComponent from "@/components/HomepageComponents/NewsletterComponent";

const BlogPostPage = () => {
  const post = {
    title: "The Ultimate Smartwatches for Android Users in 2025",
    date: "March 6, 2025",
    author: "Adam Brown",
    category: "Apps&Software",
    readTime: "2 min read",
    content: [
      {
        type: "paragraph",
        text: "In 2025 Android smartwatches are more than just a trendy gadget to have especially for Android users. Offering a seamless integration with different smartphones, Android smartwatches can provide improved fitness tracking and increased productivity throughout the day.",
      },
      {
        type: "subheading",
        text: "Why you should choose a smartwatch for Android?",
      },
      {
        type: "paragraph",
        text: "All users can benefit from various Android smartwatches that have the capability of syncing seamlessly with every device, offering quick access to important actions such as notifications, health tracking, or managing apps directly from the watch interface. It’s important to have a device that has no issues in connectivity in order to maximize all its functionalities to complement your daily life activities.",
      },
      {
        type: "image",
        src: VintageWatch1,
        alt: "Assortment of vintage watches",
        caption:
          "A diverse collection of vintage watches showcasing various styles and eras",
      },
      {
        type: "subheading",
        text: "The Top Smartwatches For Android In 2025 ",
      },
      {
        type: "subheading",
        text: "‍Samsung Galaxy Watch 6",
      },
      {
        type: "paragraph",
        text: "Whether you are looking for the most accurate fitness tracking, seamless connectivity along with sleek and modern design, there’s a Android smartwatch for each of these requirements. Let’s review the top smartwatches for Android users in 2025 and what makes them stand out in this big market industry. ‍Samsung Galaxy Watch 6 (from $289.99)- this Samsung smartwatch represents the perfect choice especially for Samsung users because it offers a seamless experience with all Samsung devices. Samsung Galaxy Watch 6 has become popular among users based on its accurate tracking features including heart rate monitoring and sleep tracking. With a long battery life, this Samsung smartwatch promises an all-day usage experience.",
      },
      {
        type: "subheading",
        text: "Google Pixel Watch 3",
      },
      {
        type: "paragraph",
        text: "Google Pixel Watch 3 (from $349.99) - perfect for the Goggle ecosystem users, the Google Pixel Watch 3 features a simple interface and provides a seamless integration with various Google services such as Google Assistant, Maps, or Calendar. It has fitness tracking features such as accurate sleep tracking, and heart rate monitoring along with a built-in GPS for workouts. Compared with the Samsung Galaxy Watch 6, it has a more sleek design that makes it at the same time functional and stylish. It should be mentioned this Google Pixel Watch 3 works with all Android phones that have an Android 9.0 or newer software, so all Android owners can enjoy the Pixel Watch experience.",
      },
      {
        type: "subheading",
        text: "Garmin Venu 3",
      },
      {
        type: "image",
        src: VintageWatch2,
        alt: "Vintage watch movement",
        caption:
          "A close-up of a vintage mechanical watch movement, showcasing the intricate craftsmanship",
      },
      {
        type: "paragraph",
        text: "Garmin Venu 3 (from $399.99) - this smartwatch represents the best choice for Android users who focus more on Fitness and health tracking rather than sleek and simple design. Garmin Venu 3 offers advanced health metrics such as stress tracking, Pulse OX sensors, and other features for tracking your overall well-being. With a very accurate GPS sensor, Gamrin Venu 3 is able to track your outdoor activities like a Pro with an integrated long-battery life. ",
      },
      {
        type: "subheading",
        text: "Amazfit GTR 4",
      },
      {
        type: "paragraph",
        text: "Amazfit GTR 4 (from $109.99) - this smartwatch is able to offer impressive and powerful features for an affordable price. It is maybe the best choice for Android users who are looking to have powerful capabilities at a lower price, with a large AMOLED display and longer battery life that supports over 150 sports modes for different indoor and outdoor activities. Amazfit GTR 4 also has a stylish design that is perfect for everyday use with heart rate monitoring, SpO2 measurement, and advanced sleep tracking.",
      },

      {
        type: "image",
        src: VintageWatch3,
        alt: "Authenticating a vintage watch",
        caption:
          "An expert examining a vintage watch to verify its authenticity",
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
              <p className="text-gray-600">Technology Researcher</p>
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
