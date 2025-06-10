const Hero = () => {
  return (
    <div className="px-8">
      <div
        className="w-full h-screen flex flex-row justify-between bg-cover bg-center bg-no-repeat 
         overflow-hidden"
      >
        {/* Animated gradient overlay */}

        <div
          className="flex flex-col w-1/2 rounded-2xl p-8 
          backdrop-blur-xl   shadow-2xl
          font-[family-name:var(--font-geist-sans)]
          items-start justify-center 
          hover:bg-white/15 transition-all duration-300
          hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]
          ">

          <span className="text-8xl bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">Welcome</span>
          <span className="text-8xl bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">to </span>
          <span className="text-8xl bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">ORAI.</span>
        </div>

        {/* <div className="w-1/2 rounded-2xl flex flex-col justify-between ">
          <div
            className="h-1/2 rounded-2xl 
            backdrop-blur-xl   shadow-2xl
            p-8 flex flex-col justify-center
            hover:bg-white/15 transition-all duration-300
            hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]
             "
          >
            <h2 className="text-4xl mb-4 font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Your AI Assistant
            </h2>
            <p className="text-lg text-white/80 leading-relaxed">
              Experience the power of artificial intelligence with ORAI. Get instant answers, creative solutions, and intelligent assistance for all your needs.
            </p>
          </div>

          <div
            className="h-1/2 rounded-2xl 
            backdrop-blur-xl   shadow-2xl
            p-8 flex flex-col justify-center
            hover:bg-white/15 transition-all duration-300
            hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]
             "
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Smart & Efficient
            </h2>
            <p className="text-lg  text-white/80 leading-relaxed">
              Powered by cutting-edge technology, ORAI delivers fast, accurate, and context-aware responses to help you achieve more.
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
