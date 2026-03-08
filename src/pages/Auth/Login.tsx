'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, EyeOff } from 'lucide-react';
import { Input } from '../../components/ui/input';
import { Button } from '../../components/ui/button';
import GoogleIcon from '../../assets/icons/google-icon.png'
import { Link } from 'react-router-dom';


const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  const buttonHoverVariants = {
    hover: { scale: 1.02 },
    tap: { scale: 0.98 },
  };

  return (
    <div className="min-h-screen w-full bg-white flex items-center justify-center px-4 py-8">
      <motion.div
        className="w-full max-w-sm"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <motion.div className="mb-8 text-center" variants={itemVariants}>
          <div className="flex justify-center mb-4">
            <motion.div 
              className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-zinc-100"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="text-zinc-900 font-bold text-lg">?</div>
            </motion.div>
          </div>
          <h1 className="text-2xl font-bold text-zinc-900 mb-2">Login to WorkTribe</h1>
          <p className="text-zinc-500 text-sm">
            Work With the smartest Talents in mins, let's help you scout
          </p>
        </motion.div>

        {/* Form */}
        <motion.div className="space-y-6 mb-6" variants={itemVariants}>
          {/* Email Input */}
          <motion.div
            whileHover={{ y: -2 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <Input
              type="email"
              placeholder="Email or username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white border-zinc-300 text-zinc-900 placeholder:text-zinc-500 focus:border-zinc-900 focus:ring-0 h-12"
            />
          </motion.div>

          {/* Password Input */}
          <motion.div
            className="relative"
            whileHover={{ y: -2 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <Input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-white border-zinc-300 text-zinc-900 placeholder:text-zinc-500 focus:border-zinc-900 focus:ring-0 h-12 pr-10"
            />
            <motion.button
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Login Button */}
        <motion.div variants={itemVariants} className="mb-6">
          <motion.div
            variants={buttonHoverVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <Button className="w-full h-12 font-semibold text-base rounded-lg transition-colors">
              Log in
            </Button>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="flex items-center gap-3 mb-6"
          variants={itemVariants}
        >
          <div className="flex-1 h-px bg-neutral-800" />
          <span className="text-neutral-400 text-sm">Or authorize with</span>
          <div className="flex-1 h-px bg-neutral-800" />
        </motion.div>

        {/* Social Buttons */}
        <motion.div
          className="gap-3 mb-6"
          variants={itemVariants}
        >
          <motion.div variants={buttonHoverVariants} whileHover="hover" whileTap="tap">
            <Button
              variant="outline"
              className="w-full h-11 border-neutral-700 text-black hover:bg-zinc-100/90 hover:border-neutral-600 rounded-3xl"
            >
              <img src={GoogleIcon} alt="google login" draggable="false" className="w-5 h-5" />
              Continue With Google
            </Button>
          </motion.div>
        </motion.div>

        {/* Footer Links */}
        <motion.div
          className="text-center text-sm text-neutral-400"
          variants={itemVariants}
        >
          <div className="mb-2">
            <motion.button 
              className="text-neutral-400 hover:text-black transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              Forgot password?
            </motion.button>
          </div>
          <div>
            <span>Don't have an account? </span>
            <motion.button 
              className="text-black transition-colors font-medium"
              whileHover={{ scale: 1.05 }}
            >
             <Link to="/signup">
                 Sign up
             </Link>
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Login;

