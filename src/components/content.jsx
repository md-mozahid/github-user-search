const Content = ({ avatar, username, url }) => {
  return (
    <>
      <div className="mt-5 border border-[#475569] rounded-md px-5 flex items-center space-x-20 p-2 text-center">
        <img
          src={avatar}
          alt=""
          rel="noopener noreferrer"
          className="w-16 h-16 rounded-full"
        />
        <a href={url} target="_blank" className="">
          {username}
        </a>
      </div>
    </>
  );
};

export default Content;
