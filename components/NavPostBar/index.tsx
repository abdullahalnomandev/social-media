import { Modal } from "antd";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { BsFillCameraReelsFill, BsFillEmojiLaughingFill } from "react-icons/bs";
import { MdAddPhotoAlternate } from "react-icons/md";
import NavBar from "../Common/NavBar";
const NavPostBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState("" as String);

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  console.log(loading, imageUrl, post);

  // Upload Cover Room Image
  const handleImageUpload = async (e: any) => {
    setLoading(true);
    const imageFile = e.target.files[0];
    const data = new FormData();
    data.append("file", imageFile);
    data.append("upload_preset", "booking_hotel");

    try {
      const result = await axios.post(
        `https://api.cloudinary.com/v1_1/dzghsspe7/upload`,
        data
      );
      setImageUrl(result.data.secure_url);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const { data: session, status } = useSession();

  console.log(session, status);

  // axios.post("http://localhost:3000/api/users", session);

  return (
    <>
      <NavBar />
      <Modal
        open={isModalOpen}
        onCancel={handleCancel}
        style={{ top: "3%" }}
        footer={null}
      >
        <div className="divide-y">
          <div className="header pb-3">
            <h1 className=" -py-4  text-center text-xl font-bold text-gray-600">
              Create Post
            </h1>
          </div>
          <div className="post">
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
                <p className="-mt-5 ml-2 text-gray-500">Public</p>
              </div>
            </div>

            <textarea
              value={post as string}
              onChange={(e) => setPost(e.target.value)}
              placeholder="What's on your mind? "
              className=" w-full border-none text-2xl outline-none placeholder:font-bold"
              name="post"
              id=""
              rows={10}
            ></textarea>
            <input
              type="file"
              onChange={handleImageUpload}
              name=""
              id=""
              className="mb-3"
            />
            <button className=" w-full rounded-md bg-blue-500 py-2 font-bold text-white">
              Post
            </button>
          </div>
        </div>
      </Modal>
      <div
        className=" m-auto mt-5 cursor-pointer shadow-md md:w-4/12"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="post-card pb- divide-y divide-gray-200 rounded-lg bg-[#ffffff]">
          <div className=" flex items-center justify-start gap-3 ">
            <img
              src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
              alt=""
              className="my-4 ml-3 h-12 w-12 "
            />
            <button className=" mr-3 w-full rounded-full bg-[#f0f2f5] px-3 py-2 text-left hover:bg-slate-200 ">
              What's on your mind, Abdullah Al ?
            </button>
          </div>
          <div className="icons flex shrink-0 items-center justify-center gap-12 pb-4 pt-2">
            <div className="icons flex shrink-0 items-center justify-center">
              <BsFillCameraReelsFill className=" mr-2 text-lg text-red-600 " />{" "}
              <span className=" text-base"> Live Video</span>
            </div>
            <div className="icons flex shrink-0 items-center justify-center">
              <MdAddPhotoAlternate className="mr-2 text-3xl text-green-500" />{" "}
              <span>Photo/Video</span>
            </div>
            <div className="icons flex shrink-0 items-center justify-center">
              <BsFillEmojiLaughingFill className=" mr-2 text-xl text-yellow-300" />{" "}
              <span>Felling/activity</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavPostBar;
