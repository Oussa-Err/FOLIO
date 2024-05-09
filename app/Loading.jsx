const Loading = () => {

  return (
    <div className="flex justify-center ">
      <div className="bg-slate-700 h-[7rem] w-72 rounded-lg flex flex-col items-center justify-center">
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="rounded-lg flex justify-center items-center">
          <div className="text-white">Working on it ....</div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
