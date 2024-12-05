const SweetLine = () => {
  return (
    <div className="absolute top-6 left-3 w-2 h-[75%]">
      <div className="relative z-20 bg-gradient-to-b from-cyan-500 via-blue-500 dark:from-grape dark:via-indigo-800 to-transparent h-full w-full">
        <span className="h-4 w-4 bg-cyan-500 dark:bg-grape z-10 rounded-full absolute right-0 -left-[50%] mx-auto -top-1 hover:bg-indigo-400 dark:hover:bg-indigo-500"></span>
      </div>
    </div>
  );
};

export default SweetLine;
