import { Card } from "antd";
const Post = () => {
  const { Meta } = Card;

  const posts = [
    {
      id: 1,
      description: "This is Post Title",
      img: "https://img.freepik.com/free-photo/purple-osteospermum-daisy-flower_1373-16.jpg?w=2000",
      created: "1h ago"
    },
    {
      id: 2,
      description: "This is Post Title",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0LEnPPnRPZM5je6fX-24YUyG77TZE6E7gtA&usqp=CAU",
      created: "Few second  ago"
    },
    {
      id: 3,
      description: "This is Post Title",
      img: "https://burst.shopifycdn.com/photos/pink-rose-on-pink.jpg?width=1200&format=pjpg&exif=1&iptc=1",
      created: "1h ago"
    },
    {
      id: 4,
      description: "This is Post Title",
      img: "https://cdn.britannica.com/84/73184-004-E5A450B5/Sunflower-field-Fargo-North-Dakota.jpg",
      created: " 1 month ago"
    }
  ];

  return (
    <div>
      <h1>ALL POST</h1>

      <div className="grid grid-cols-12 ">
        {posts.map(({ id, description, img, created }) => (
          <div
            className="col-span-12 m-4 sm:col-span-6 md:col-span-4 lg:col-span-3"
            key={id}
          >
            <div className=" rounded-lg border border-gray-200 bg-white shadow-md  ">
              <div className="profile ">
                <div className="flex items-center justify-start">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                    alt=""
                    className="my-4 ml-3 h-10 w-10 "
                  />
                  <div>
                    <h3 className="ml-2 pb-4 text-lg text-gray-700">
                      Abdullah Al Noman
                    </h3>
                    <p className="-mt-5 ml-2 text-gray-500">{created}</p>
                  </div>
                </div>
              </div>
              <div className="overflow-auto p-5">
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {/* {description} */}
                  This is post description
                </p>
              </div>
              <a href="#">
                <img className=" h-64 w-full object-cover" src={img} alt="" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Post;
