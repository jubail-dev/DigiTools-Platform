import Banner from "../../assets/banner.png";
const Hero = () => {
  return (
    <div className="container mx-auto flex justify-center gap-10 items-center py-[8%]" >
      <div>
        
        <p className="inline-block bg-[#E1E7FF] py-4 px-10 text-center font-bold text-[#4F39F6] rounded-full mb-3"> <span className="inline-block bg-blue-500 w-4 h-4 rounded-full mr-1"></span>New: AI-Powered Tools Available</p>
            

        <h1 className="text-[72px] font-bold text-[#101727] leading-20 max-w-158.5 mb-4">Supercharge Your Digital Workflow</h1>
        <p className="max-w-158.5">
          Access premium AI tools, design assets, templates, and productivity
          software—all in one place. Start creating faster today. Explore
          Products
        </p>

        <div className="flex justify-start items-center gap-4 pt-6">
            <button className="py-4 px-5 bg-[#4F39F6] text-white font-bold rounded-full">Explore Products</button>
            <button className="py-4 px-5 border border-[#4F39F6] bg-white text-[#4F39F6] font-bold rounded-full">Watch Demo</button>
            
        </div>
      </div>
      <div>
        
        <img src={Banner} alt="" />

      </div>
    </div>
  );
};

export default Hero;
