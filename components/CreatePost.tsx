import Button from "./Button";

const CreatePost = () => {
  return (
    <div className="w-full bg-gray-6 rounded-lg px-4 py-5 border-2 border-gray-5">
      <p className="text-lg text-gray-3">Create Post</p>

      <div className="mt-5 bg-gray-7 p-4 rounded-lg flex items-center gap-4">
        <div>
          <div className="flex justify-center items-center text-lg w-11 h-11 bg-gray-6 rounded-full">
            💬
          </div>
        </div>
        <textarea
          placeholder="How are you feeling today?"
          className="bg-transparent w-full"
          rows={1}
        />
      </div>

      <div className="mt-4 flex justify-end">
        <Button text="Post" className="w-28" />
      </div>
    </div>
  );
};

export default CreatePost;
