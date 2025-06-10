import TopNav from "@/components/TopNav/TopNav";
import Hero from "@/components/HeroSection/Hero";

const Home = () => {
  return (
    <div>
      <TopNav />
      <div className="items-center p-4 ">
        <Hero />
      </div>
    </div>
  );
};

export default Home;
