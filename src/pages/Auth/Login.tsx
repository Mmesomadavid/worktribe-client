'use client';

import { useEffect, useRef, useState } from 'react';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { Input } from '../../components/ui/input';
import { Button } from '../../components/ui/button';
import { Label } from '../../components/ui/label';
import gsap from 'gsap';
import Logo from '../../components/Logo';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        logoRef.current,
        { opacity: 0, y: -30 },
        { opacity: 1, y: 0, duration: 0.7 }
      )
      .fromTo(
        formRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.7 },
        '-=0.3'
      )
      .fromTo(
        footerRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
        '-=0.3'
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-background flex flex-col items-center justify-between px-4 py-10 text-white"
    >
      {/* Spacer top */}
      <div />

      {/* Center content */}
      <div className="w-full max-w-sm flex flex-col items-center gap-10">

        {/* Logo */}
        <div ref={logoRef} style={{ opacity: 0 }}>
          <Logo />
        </div>

        {/* Form card */}
        <div
          ref={formRef}
          style={{ opacity: 0 }}
          className="w-full flex flex-col gap-5"
        >
          {/* Email */}
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="email" className="text-sm text-gray-400 font-normal">
              Email address
            </Label>
            <div className="relative flex items-center">
              <Mail className="absolute left-4 w-4 h-4 text-gray-500 pointer-events-none" />
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="pl-10 pr-4 py-3 h-12 bg-gray-900 border border-gray-800 rounded-xl text-white placeholder-gray-600 focus:border-lime-400 focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 transition-colors"
              />
            </div>
          </div>

          {/* Password */}
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="password" className="text-sm text-gray-400 font-normal">
              Password
            </Label>
            <div className="relative flex items-center">
              <Lock className="absolute left-4 w-4 h-4 text-gray-500 pointer-events-none" />
              <Input
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                className="pl-10 pr-12 py-3 h-12 bg-gray-900 border border-gray-800 rounded-xl text-white placeholder-gray-600 focus:border-lime-400 focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 transition-colors"
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-4 text-gray-500 hover:text-lime-400 transition-colors"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Submit */}
          <Button
            type="submit"
            className="w-full h-12 mt-1 bg-lime-400 hover:bg-lime-300 text-black font-semibold rounded-xl transition-colors"
          >
            Sign in
          </Button>

          {/* Forgot password */}
          <p className="text-center text-sm text-gray-500">
            <a href="#" className="hover:text-lime-400 transition-colors">
              Forgot password?
            </a>
          </p>

          {/* Divider */}
          <div className="flex items-center gap-3">
            <div className="flex-1 h-px bg-gray-800" />
            <span className="text-xs text-gray-600">or</span>
            <div className="flex-1 h-px bg-gray-800" />
          </div>

          {/* Create account */}
          <p className="text-center text-sm text-gray-500">
            Don&apos;t have an account?{' '}
            <a href="#" className="text-lime-400 hover:text-lime-300 font-medium transition-colors">
              Create account
            </a>
          </p>
        </div>
      </div>

      {/* Footer copyright */}
      <div ref={footerRef} style={{ opacity: 0 }}>
        <p className="text-xs text-gray-700 text-center">
          &copy; {new Date().getFullYear()} YourBrand. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Login;