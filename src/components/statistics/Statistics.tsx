export default function Statistics() {
  return (
    <div className="mb-30 p-20 mx-auto bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
      <div className="flex justify-around items-center container max-w-200 mx-auto">
        
        <div className="pr-15 border-r border-white/30">
          <h2 className="text-5xl text-white font-bold">50K+</h2>
          <p className="text-xl text-gray-300 mt-4">Active Users</p>
        </div>

        <div className="pr-15 border-r border-white/30">
          <h2 className="text-5xl text-white font-bold">200+</h2>
          <p className="text-xl text-gray-300 mt-4">Premium Tools</p>
        </div>

        <div>
          <h2 className="text-5xl text-white font-bold">4.9</h2>
          <p className="text-xl text-gray-300 mt-4">Rating</p>
        </div>

      </div>
    </div>
  );
}