import {
  AiFillLike,
  AiOutlinePicture,
  AiOutlinePlusCircle
} from "react-icons/ai";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { CiGift } from "react-icons/ci";

const Message = () => {
  const message = [
    { id: 1, message: "Hi", status: true },
    { id: 2, message: "Kmon achos?", status: false },
    { id: 3, message: "Alhamdullah Valo", status: true },
    { id: 4, message: "Toy", status: false },
    {
      id: 5,
      message:
        "Ami asole ata babinay je toi ata korte parbi jodi babtam tor kace r jibone o astam na.",
      status: true
    },
    { id: 1, message: "Hi", status: true },
    { id: 2, message: "Kmon achos?", status: false },
    { id: 3, message: "Alhamdullah Valo", status: true },
    { id: 4, message: "Toy", status: false },
    {
      id: 5,
      message:
        "Ami asole ata babinay je toi ata korte parbi jodi babtam tor kace r jibone o astam na.",
      status: true
    },
    { id: 1, message: "Hi", status: true },
    { id: 2, message: "Kmon achos?", status: false },
    { id: 3, message: "Alhamdullah Valo", status: true },
    { id: 4, message: "Toy", status: false },
    {
      id: 5,
      message:
        "Ami asole ata babinay je toi ata korte parbi jodi babtam tor kace r jibone o astam na.",
      status: true
    },
    { id: 1, message: "Hi", status: true },
    { id: 2, message: "Kmon achos?", status: false },
    { id: 3, message: "Alhamdullah Valo", status: true },
    { id: 4, message: "Toy", status: false },
    {
      id: 5,
      message:
        "Ami asole ata babinay je toi ata korte parbi jodi babtam tor kace r jibone o astam na.",
      status: true
    }
  ];
  return (
    <div className=" ">
      <div className="nav-message-header bg-[#white] py-3 shadow-md">
        <div className="nav-profile">
          <div className=" flex cursor-pointer items-center justify-between  py-1 px-2 hover:bg-[#f0f2f5] md:mr-3">
            <div className="flex items-center justify-between gap-x-3 ">
              <img
                src="https://i.ibb.co/jLk5rtx/jpg.jpg"
                alt=""
                className="h-12 w-12 rounded-full"
              />
              <div className="con-list-content text-left">
                <p className=" text-lg font-semibold tracking-normal">
                  Abdullah Al Noman
                </p>
                <p className=" text-gray-400">Active Now</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="message-content ">
        <div className="content relative max-h-[420px] overflow-auto">
          {message.map(({ message, status }) => (
            <>
              {status && (
                <p className="my-3 mx-2  max-w-xs rounded-2xl bg-[#f0f2f5] py-2 px-3 text-black">
                  {message}
                </p>
              )}
              {!status && (
                <p className=" my-3 mx-2 ml-auto   max-w-xs rounded-2xl bg-blue-600 py-2 px-3 text-white">
                  {message}
                </p>
              )}
            </>
          ))}
        </div>
      </div>
      <div className="bottom-message  bottom-0  ">
        <div className="send flex items-center justify-start ">
          <div className="icons mx-3 flex items-center justify-start gap-4 text-2xl font-bold">
            <AiOutlinePlusCircle />
            <AiOutlinePicture />
            <CiGift />
          </div>
          <div className=" mt-2 flex  w-10/12  items-center justify-between rounded-full border border-gray-500 pr-2 ">
            <input
              type="text"
              name=""
              id=""
              placeholder="Aa"
              className="w-full  py-2 px-2 outline-none  "
            />
            <BsFillArrowRightCircleFill
              className=" cursor-pointer
             text-2xl font-light  text-blue-600"
            />
          </div>
          <div
            className="like ml-2
             cursor-pointer text-2xl font-light  text-blue-600"
          >
            <AiFillLike />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
