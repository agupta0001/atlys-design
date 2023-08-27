import { ReactElement } from "react";
import PrivateLayout from "@/components/PrivateLayout";
import CreatePost from "@/components/CreatePost";
import Post from "@/components/Post";
import { IPost } from "@/types/post";
import useAuth from "@/hooks/useAuth";

const posts: IPost[] = [
  {
    id: 1,
    name: "Theresa Webb",
    time: "5mins ago",
    content:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    comments: 24,
    avatar: "/avatar_2.png",
    emoji: "👋",
    isEdited: false,
  },
  {
    id: 2,
    name: "Marvin McKinney",
    time: "8mins ago",
    emoji: "😞",
    content:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    comments: 24,
    avatar: "/avatar_1.png",
    isEdited: true,
  },
  {
    id: 3,
    name: "Theresa Webb",
    time: "5mins ago",
    content:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    comments: 24,
    avatar: "/avatar_2.png",
    emoji: "😂",
    isEdited: true,
  },
  {
    id: 4,
    name: "Marvin McKinney",
    time: "8mins ago",
    emoji: "😇",
    content:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    comments: 24,
    avatar: "/avatar_1.png",
    isEdited: false,
  },
];

const Dashboard = () => {
  const { user } = useAuth();
  return (
    <div className="h-full w-full flex justify-center pt-14">
      <div className="w-2/4">
        <h3 className="text-2xl">Hello {user?.userName || "User"}</h3>
        <p className="mt-3 text-gray-4">
          How are you doing today? Would you like to share something with the
          community 🤗
        </p>

        <div className="mt-10 posts flex flex-col gap-3">
          <CreatePost />
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

Dashboard.getLayout = function getLayout(page: ReactElement) {
  return <PrivateLayout>{page}</PrivateLayout>;
};

export default Dashboard;
