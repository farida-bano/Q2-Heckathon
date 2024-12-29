"use client";
import Image from "next/image";

const FeaturedPosts = () => {
  const posts = [
    {
      id: 1,
      image: "/blog-1.jpg",
      title: "Blog Post Title 1",
      description: "Short description or preview of the blog post content goes here.",
      date: "22 April 2021",
      comments: 10,
      link: "/",
      newLabel: "NEW",
    },
    {
      id: 2,
      image: "/blog-2.jpg",
      title: "Blog Post Title 2",
      description: "Short description or preview of the blog post content goes here.",
      date: "22 April 2021",
      comments: 10,
      link: "/",
      newLabel: "NEW",
    },
    {
      id: 3,
      image: "/blog-3.jpg",
      title: "Blog Post Title 3",
      description: "Short description or preview of the blog post content goes here.",
      date: "22 April 2021",
      comments: 10,
      link: "/",
      newLabel: "NEW",
    },
  ];

  return (
    <section className="bg-white py-12 px-6 md:px-10 lg:px-20">
      <div className="text-center mb-10 mt-10">
        <h5 className="text-sm font-bold text-[#23A6F0] uppercase mb-2">
          Practice Advice
        </h5>
        <h2 className="text-2xl font-bold text-[#252B42] mb-4 md:text-3xl lg:text-4xl">
          Featured Posts
        </h2>
        <p className="text-[#737373] text-sm">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white border border-[#E5E5E5] overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            <div className="relative">
              <Image
                src={post.image}
                alt={post.title}
                layout="responsive"
                width={400}
                height={250}
                className="object-cover transition-transform duration-300 hover:scale-110"
              />
              <span className="absolute top-3 left-3 bg-[#E74040] text-white text-sm font-bold px-3 py-1 rounded">
                {post.newLabel}
              </span>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-[#252B42]">{post.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{post.description}</p>
              <div className="flex items-center text-xs text-[#737373] space-x-2 mb-3">
                <span className="text-[#8EC2F2]">Google</span>
                <span>Trending</span>
                <span>{post.newLabel}</span>
              </div>
              <div className="flex items-center justify-between text-xs text-[#737373]">
                <div className="flex items-center space-x-2">
                  <Image
                    src="/images/calendar.png"
                    alt="Calendar icon"
                    width={16}  // Adjust width & height as per your requirement
                    height={16}
                  />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Image
                    src="/images/comment.png"
                    alt="Comment icon"
                    width={16}
                    height={16}
                  />
                  <span>{post.comments} comments</span>
                </div>
              </div>

              <div className="mt-4">
                <a
                  href={post.link}
                  className="text-[#4C9EEF] text-sm font-bold hover:underline flex items-center"
                >
                  <p>Learn More</p>
                  <Image
                    src="/images/next.png"
                    alt="Next icon"
                    width={16}
                    height={16}
                    className="ml-4"
                  />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedPosts;
