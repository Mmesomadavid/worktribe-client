'use client';

import { useEffect, useRef, useState } from 'react';
import { Mail, Lock, Eye, EyeOff, Phone, User, Globe, ChevronDown } from 'lucide-react';
import { Input } from '../../components/ui/input';
import { Button } from '../../components/ui/button';
import { Label } from '../../components/ui/label';
import { Separator } from '../../components/ui/separator';
import gsap from 'gsap';
import Logo from '../../components/Logo';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [accountType, setAccountType] = useState<'freelancer' | 'hiring' | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.fromTo(logoRef.current, { opacity: 0, y: -24 }, { opacity: 1, y: 0, duration: 0.6 })
        .fromTo(leftRef.current, { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 0.75 }, '-=0.3')
        .fromTo(rightRef.current, { opacity: 0, x: 50 }, { opacity: 1, x: 0, duration: 0.75 }, '-=0.6');
    }, containerRef);
    return () => ctx.revert();
  }, []);

  // Glassmorphic input style
  const inputClass =
    'pl-10 pr-4 h-11 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-white placeholder-gray-600 focus:border-lime-400/60 focus:bg-white/8 focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 transition-all text-sm';

  const glassWrap =
    'relative flex items-center w-full';

  return (
    <div ref={containerRef} className="min-h-screen bg-background text-white flex flex-col">

      {/* Logo */}
      <div ref={logoRef} style={{ opacity: 0 }} className="px-8 pt-8 pb-0">
        <Logo />
      </div>

      {/* Main two-col layout */}
      <div className="flex flex-1 flex-col lg:flex-row">

        {/* ── LEFT — Forms (wider) ── */}
        <div
          ref={leftRef}
          style={{ opacity: 0 }}
          className="flex-[1.4] flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-10 lg:py-12"
        >
          <h1 className="text-3xl font-bold mb-1">Create your account</h1>
          <p className="text-sm text-gray-500 mb-8">Fill in the details below to get started.</p>

          <div className="flex flex-col gap-4">

            {/* Account type toggle */}
            <div className="flex flex-col gap-1.5">
              <Label className="text-sm text-gray-400 font-normal">Account type</Label>
              <div className="flex gap-3">
                {(['freelancer', 'hiring'] as const).map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setAccountType(type)}
                    className={`flex-1 h-11 rounded-xl border text-sm font-medium transition-all capitalize ${
                      accountType === type
                        ? 'bg-lime-400 border-lime-400 text-black'
                        : 'bg-white/5 backdrop-blur-sm border-white/10 text-gray-400 hover:border-lime-400/40'
                    }`}
                  >
                    {type === 'hiring' ? 'Hiring' : 'Freelancer'}
                  </button>
                ))}
              </div>
            </div>

            {/* Row: First + Last name */}
            <div className="flex gap-3">
              <div className="flex flex-col gap-1.5 flex-1">
                <Label htmlFor="firstname" className="text-sm text-gray-400 font-normal">First name</Label>
                <div className={glassWrap}>
                  <User className="absolute left-3 w-4 h-4 text-gray-500 pointer-events-none" />
                  <Input id="firstname" type="text" placeholder="John" className={inputClass + ' w-full'} />
                </div>
              </div>
              <div className="flex flex-col gap-1.5 flex-1">
                <Label htmlFor="lastname" className="text-sm text-gray-400 font-normal">Last name</Label>
                <div className={glassWrap}>
                  <User className="absolute left-3 w-4 h-4 text-gray-500 pointer-events-none" />
                  <Input id="lastname" type="text" placeholder="Doe" className={inputClass + ' w-full'} />
                </div>
              </div>
            </div>

            {/* Row: Email + Phone */}
            <div className="flex gap-3">
              <div className="flex flex-col gap-1.5 flex-1">
                <Label htmlFor="email" className="text-sm text-gray-400 font-normal">Email address</Label>
                <div className={glassWrap}>
                  <Mail className="absolute left-3 w-4 h-4 text-gray-500 pointer-events-none" />
                  <Input id="email" type="email" placeholder="you@example.com" className={inputClass + ' w-full'} />
                </div>
              </div>
              <div className="flex flex-col gap-1.5 flex-1">
                <Label htmlFor="phone" className="text-sm text-gray-400 font-normal">Phone number</Label>
                <div className={glassWrap}>
                  <Phone className="absolute left-3 w-4 h-4 text-gray-500 pointer-events-none" />
                  <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" className={inputClass + ' w-full'} />
                </div>
              </div>
            </div>

            {/* Row: Country (full width) */}
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="country" className="text-sm text-gray-400 font-normal">Country</Label>
              <div className={glassWrap}>
                <Globe className="absolute left-3 w-4 h-4 text-gray-500 pointer-events-none z-10" />
                <ChevronDown className="absolute right-3 w-4 h-4 text-gray-500 pointer-events-none z-10" />
                <select
                  id="country"
                  className="w-full h-11 pl-10 pr-10 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-sm text-gray-300 focus:border-lime-400/60 focus:outline-none transition-all appearance-none"
                >
                  <option value="" className="bg-gray-900">Select country</option>
                  <option className="bg-gray-900">United States</option>
                  <option className="bg-gray-900">United Kingdom</option>
                  <option className="bg-gray-900">Nigeria</option>
                  <option className="bg-gray-900">Canada</option>
                  <option className="bg-gray-900">Australia</option>
                  <option className="bg-gray-900">Germany</option>
                  <option className="bg-gray-900">France</option>
                  <option className="bg-gray-900">India</option>
                  <option className="bg-gray-900">Brazil</option>
                  <option className="bg-gray-900">Other</option>
                </select>
              </div>
            </div>

            {/* Row: Password + Confirm */}
            <div className="flex gap-3">
              <div className="flex flex-col gap-1.5 flex-1">
                <Label htmlFor="password" className="text-sm text-gray-400 font-normal">Password</Label>
                <div className={glassWrap}>
                  <Lock className="absolute left-3 w-4 h-4 text-gray-500 pointer-events-none" />
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    className={inputClass + ' pr-10 w-full'}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((p) => !p)}
                    className="absolute right-3 text-gray-500 hover:text-lime-400 transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-1.5 flex-1">
                <Label htmlFor="confirm" className="text-sm text-gray-400 font-normal">Confirm password</Label>
                <div className={glassWrap}>
                  <Lock className="absolute left-3 w-4 h-4 text-gray-500 pointer-events-none" />
                  <Input
                    id="confirm"
                    type={showConfirm ? 'text' : 'password'}
                    placeholder="••••••••"
                    className={inputClass + ' pr-10 w-full'}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirm((p) => !p)}
                    className="absolute right-3 text-gray-500 hover:text-lime-400 transition-colors"
                  >
                    {showConfirm ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Submit */}
            <Button
              type="submit"
              className="w-full h-11 mt-1 bg-lime-400 hover:bg-lime-300 text-black font-semibold rounded-xl transition-colors"
            >
              Create account
            </Button>

            <p className="text-center text-sm text-gray-500">
              Already have an account?{' '}
              <a href="/login" className="text-lime-400 hover:text-lime-300 font-medium transition-colors">
                Sign in
              </a>
            </p>
          </div>
        </div>

        {/* ── Vertical separator (desktop) / Horizontal (mobile) ── */}
        <div className="hidden lg:flex flex-col items-center justify-center py-14">
          <Separator orientation="vertical" className="h-full bg-white/10 w-px" />
        </div>
        <div className="lg:hidden px-8">
          <Separator className="bg-white/10" />
        </div>

        {/* ── RIGHT — OAuth ── */}
        <div
          ref={rightRef}
          style={{ opacity: 0 }}
          className="flex flex-col justify-center items-center px-8 sm:px-12 lg:px-16 py-10 lg:py-12 lg:w-[400px] shrink-0"
        >
          <div className="w-full max-w-xs flex flex-col gap-5">
            <div className="text-center">
              <h2 className="text-xl font-semibold mb-1">Continue with</h2>
              <p className="text-sm text-gray-500">Use a social account to sign up faster.</p>
            </div>

            {/* Google */}
            <button
              type="button"
              className="flex items-center gap-4 w-full h-12 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 hover:border-white/20 rounded-xl px-5 transition-all group"
            >
              <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                Continue with Google
              </span>
            </button>

            {/* LinkedIn */}
            <button
              type="button"
              className="flex items-center gap-4 w-full h-12 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 hover:border-white/20 rounded-xl px-5 transition-all group"
            >
              <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="#0A66C2">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                Continue with LinkedIn
              </span>
            </button>

            {/* Apple */}
            <button
              type="button"
              className="flex items-center gap-4 w-full h-12 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 hover:border-white/20 rounded-xl px-5 transition-all group"
            >
              <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="white">
                <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"/>
              </svg>
              <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                Continue with Apple
              </span>
            </button>

            {/* T&C note */}
            <p className="text-center text-xs text-gray-600 leading-relaxed mt-2">
              By signing up, you agree to our{' '}
              <a href="#" className="text-gray-500 hover:text-lime-400 underline transition-colors">Terms of Service</a>
              {' '}and{' '}
              <a href="#" className="text-gray-500 hover:text-lime-400 underline transition-colors">Privacy Policy</a>.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center py-5">
        <p className="text-xs text-gray-700">
          &copy; {new Date().getFullYear()} YourBrand. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Signup;