'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Users, User } from 'lucide-react';
import type { ReactNode } from "react";

// importing role auth components
import CompanySignup from '../../components/Auth/CompanySignup';
import TalentSignup from '../../components/Auth/TalentSignup';

const Signup = () => {
  const [selectedRole, setSelectedRole] = useState<'company' | 'freelancer' | null>(null);
  const formRef = useRef<HTMLDivElement>(null); // for smooth scrolling

  const roles: {
    label: string;
    value: 'company' | 'freelancer';
    description: string;
    icon: ReactNode;
  }[] = [
    {
      label: 'Hiring Team / Company',
      value: 'company',
      description: 'Post jobs, scout top talent, and manage your hiring workflow efficiently.',
      icon: <Users size={28} />,
    },
    {
      label: 'Freelancer / Applicant',
      value: 'freelancer',
      description: 'Apply to multiple jobs, showcase your skills, and get discovered by top companies.',
      icon: <User size={28} />,
    },
  ];

  const handleSelectRole = (role: 'company' | 'freelancer') => {
    setSelectedRole(role);
    if (formRef.current) {
      // smooth scroll to the form section
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-background">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-2xl"
      >
        {/* Role Selection Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {roles.map((role) => (
            <motion.button
              key={role.value}
              layout
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleSelectRole(role.value)}
              type="button"
              aria-pressed={selectedRole === role.value}
              className={`
                cursor-pointer border rounded-xl p-6 flex flex-col items-start text-left
                transition-shadow duration-200
                ${selectedRole === role.value ? 'border-green-600 shadow-lg bg-green-50' : 'border-neutral-300 hover:shadow-md'}
              `}
            >
              <div className="mb-4 text-green-600">{role.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{role.label}</h3>
              <p className="text-sm text-muted-foreground">{role.description}</p>
            </motion.button>
          ))}
        </div>

        {/* Signup Form */}
        <motion.div
          ref={formRef}
          key={selectedRole} // triggers animation when role changes
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="w-full"
        >
          {selectedRole === 'company' && <CompanySignup />}
          {selectedRole === 'freelancer' && <TalentSignup />}
          {!selectedRole && (
            <p className="text-center text-sm text-muted-foreground mt-4">
              Please select your role to continue with signup
            </p>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Signup;
