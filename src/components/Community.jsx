import { Users, MessageSquare, Heart, Share2, Send, TrendingUp } from 'lucide-react';

const Community = () => {
  const posts = [
    {
      id: 1,
      user: "Alex Dev",
      role: "Fullstack Developer",
      content: "Hi community! I just finished my first integration with React and Tailwind. Any tips on how to optimize the bundle size in Vite?",
      likes: 12,
      comments: 5,
      time: "2h ago"
    },
    {
      id: 2,
      user: "Maria UX",
      role: "Product Designer",
      content: "What do you think about the new micro-interaction trends for 2026? I'm putting together an article about it.",
      likes: 24,
      comments: 8,
      time: "5h ago"
    }
  ];

  return (
    <div className="min-h-screen bg-radial-[at_70%_40%] from-[#85cf6733] to-gray-50 pt-[100px]! pb-15! px-[18px]!">
      <div className="max-w-7xl mx-auto">
        
        <div className="pb-8! mb-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h1 className="text-4xl font-extrabold text-gray-900 flex items-center gap-3">
              <Users className="text-[#85cf67]" size={36} />
              Community
            </h1>
            <p className="text-gray-500 mt-2 text-lg">
              Connect, share, and grow with other creatives.
            </p>
          </div>
          <div className="hidden md:block">
             <div className="bg-[#2c9a00af] px-2! rounded-2xl border border-[#85cf6733]">
                <p className="text-[#99ff69] font-bold flex items-center gap-2 italic">
                   <TrendingUp size={18}/> 12 new topics today
                </p>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-2 space-y-6 grid gap-5">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4! mb-10">
               <div className="flex gap-4">
                  <div className="h-10 w-10 bg-gray-200 rounded-full flex-shrink-0" />
                  <textarea 
                    placeholder="What's on your mind?" 
                    className="w-full bg-gray-50 rounded-xl p-3! text-sm focus:outline-none focus:ring-2 focus:ring-[#85cf67] transition resize-none"
                    rows="2"
                  />
               </div>
               <div className="flex justify-end mt-3">
                  <button className="bg-[#85cf67] hover:bg-[#74b859] text-white px-6! py-2! rounded-full font-bold transition flex items-center gap-2">
                    <Send size={16}/>
                  </button>
               </div>
            </div>

            {posts.map((post) => (
              <div key={post.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6! hover:shadow-xl hover:translate-y-[-2px] transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 bg-gradient-to-br from-[#85cf67] to-[#5a9e43] rounded-full flex items-center justify-center text-white font-black text-lg shadow-lg shadow-[#85cf6744]">
                      {post.user[0]}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 text-lg leading-tight">{post.user}</h3>
                      <p className="text-xs text-[#85cf67] font-bold uppercase tracking-wider">{post.role}</p>
                    </div>
                  </div>
                  <span className="text-xs text-gray-400 font-medium">{post.time}</span>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed text-[15px]">
                  {post.content}
                </p>

                <div className="flex items-center gap-6 text-gray-400 border-t border-gray-50 pt-4">
                  <button className="flex items-center gap-2 hover:text-pink-500 hover:bg-pink-50 px-3 py-1.5 rounded-full transition-all">
                    <Heart size={19} /> <span className="font-semibold">{post.likes}</span>
                  </button>
                  <button className="flex items-center gap-2 hover:text-blue-500 hover:bg-blue-50 px-3 py-1.5 rounded-full transition-all">
                    <MessageSquare size={19} /> <span className="font-semibold">{post.comments}</span>
                  </button>
                  <button className="flex items-center gap-2 hover:text-[#85cf67] hover:bg-[#85cf6711] px-3 py-1.5 rounded-full transition-all ml-auto">
                    <Share2 size={19} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-3xl shadow-xl shadow-[#85cf6715] border border-gray-100 p-4! text-center sticky top-[120px]">
              <h4 className="font-black text-gray-800 mb-6 uppercase text-xs tracking-[0.2em]">Global Statistics</h4>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="p-4! bg-gray-50 rounded-2xl">
                  <p className="text-3xl font-black text-[#85cf67]">1.2k</p>
                  <p className="text-[10px] text-gray-400 font-bold uppercase">Members</p>
                </div>
                <div className="p-4! bg-gray-50 rounded-2xl">
                  <p className="text-3xl font-black text-blue-500">450</p>
                  <p className="text-[10px] text-gray-400 font-bold uppercase">Online</p>
                </div>
              </div>
              <button className="w-full bg-gray-900 text-white py-4 rounded-2xl font-bold hover:bg-black hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-gray-200">
                Join the conversation
              </button>
              <p className="text-[11px] text-gray-400 mt-4">By joining, you agree to our community guidelines.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Community;