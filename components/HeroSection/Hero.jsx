const Hero = () => {
  return (
    <div className="px-8">
      <div
        className="w-full h-screen flex flex-row justify-between bg-cover bg-center bg-no-repeat 
    bg-[url('/bg3.jpg')] "
      >
        <div
          className="flex flex-col w-1/2 rounded-md p-4 bg-white/10
          backdrop-blur-md border border-white/5 shadow-lg
          font-[family-name:var(--font-geist-sans)]
          items-start justify-center"
        >
          <span className="text-8xl">Welcome</span>
          <span className="text-8xl">to </span>
          <span className="text-8xl">ORAI.</span>
        </div>
        <div className="w-1/2 rounded-md flex flex-col justify-between ">
          <div
            className="h-1/2 rounded-md bg-white/10
            backdrop-blur-md border border-white/5 shadow-md"
          ></div>
          <div
            className="h-1/2 rounded-md bg-white/10
            backdrop-blur-md border border-white/5 shadow-md"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
