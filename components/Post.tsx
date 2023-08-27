import { FC } from "react";
import Image from "next/image";
import { IPost } from "@/types/post";

interface IPostProps {
  post: IPost;
}

const Post: FC<IPostProps> = ({ post }) => {
  return (
    <div className="w-full bg-gray-6 rounded-lg px-4 py-5 border-2 border-gray-5">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-5">
          <div className="flex justify-center items-center text-lg w-11 h-11 bg-gray-6 rounded-full">
            <Image src={post.avatar} width={44} height={44} alt="photo" />
          </div>
          <div>
            <p className="text-base text-gray-3">{post.name}</p>
            <span className="text-sm text-gray-4">
              {post.time} {post.isEdited && " • Edited"}
            </span>
          </div>
        </div>
        <div className="cursor-pointer">
          <Image src="/more_icon.svg" width={20} height={20} alt="more" />
        </div>
      </div>

      <div className="mt-5 bg-gray-7 p-4 rounded-lg flex gap-4">
        <div>
          <div className="flex justify-center items-center text-lg w-11 h-11 bg-gray-6 rounded-full">
            {post.emoji}
          </div>
        </div>
        <p className="text-base text-gray-4">{post.content}</p>
      </div>

      <div className="flex items-center mt-4 gap-3">
        <Image src="/chat_icon.svg" width={20} height={20} alt="chat" />
        <span className="text-sm text-gray-4">{post.comments} Comments</span>
      </div>
    </div>
  );
};

export default Post;
