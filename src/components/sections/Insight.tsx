import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Send } from "lucide-react";

const Insight = () => {
  const [chat, setChat] = useState("");

  const handleSend = () => {
    if (!chat) return;
    console.log("User message:", chat);
    setChat("");
  };

  return (
    <section className="py-6 sm:py-10 flex justify-center">
      <div className="w-full md:container relative rounded-[3rem] overflow-hidden shadow-2xl min-h-[400px] md:min-h-[500px] bg-black p-8 flex flex-col md:flex-row gap-12">
        {/* Left Section */}
        <div className="flex-1 flex flex-col gap-6 px-4 md:px-12 py:10 md:py-20">
          {/* Write-up / Headlines */}
          <div className="space-y-3">
            <h2 className="text-3xl md:text-6xl font-medium text-white Poppins">
              Need Help? Got Questions?
            </h2>
            <p className="text-gray-300 text-base md:text-lg max-w-md Poppins">
              Our Personal AI Personal Assistant Got you covered
            </p>
          </div>

          {/* Chat Input */}
          <div className="mt-6 w-full max-w-md relative">
            <Input
              placeholder="Chat with WorkTribe AI..."
              value={chat}
              onChange={(e) => setChat(e.target.value)}
              className="w-full h-24 pr-20 rounded-xl bg-white text-black placeholder-gray-500 pt-4"
            />
            <Button
              onClick={handleSend}
              className="absolute bottom-2 right-2 text-white px-4 py-2 h-12 rounded-full"
            >
              <Send />
            </Button>
          </div>
        </div>

        {/* Right Section - Centered Glowing AI Button */}
        <div className="flex-1 flex items-center justify-center relative">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <div className="w-28 h-28 rounded-full bg-green-400/20 shadow-[0_0_30px_rgba(16,185,129,0.5)] 
                            border border-green-400/50 flex items-center justify-center
                            animate-pulse">
              <div className="w-14 h-14 rounded-full bg-green-400 shadow-[0_0_20px_rgba(16,185,129,0.8)]" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Insight;