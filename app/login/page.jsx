"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import LoginForm from "../../components/LoginForm";

const imageVariants = {
  hidden: { opacity: 0, x: -60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const formWrap = {
  hidden: { opacity: 0, x: 60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

export default function LoginPage() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-white"
    >
      <div className="min-h-screen lg:grid lg:grid-cols-[55%_45%]">
        {/* Left: Image */}
        <motion.section
          variants={imageVariants}
          initial="hidden"
          animate="show"
          className="relative bg-white overflow-hidden flex items-start"
        >
          <div className="absolute top-6 left-6 z-20 flex items-center gap-2">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden
            >
              <path
                d="M3 12L11 3l4 4 6 5"
                stroke="#111827"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <a
              href="#"
              aria-label="Krist brand"
              className="inline-block text-2xl font-bold tracking-tight text-gray-900"
            >
              Krist
            </a>
          </div>

          <div className="w-full h-[40vh] sm:h-[45vh] md:h-[48vh] lg:h-screen relative">
            <Image
              src="https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?auto=format&fit=crop&w=1600&q=80"
              alt="Fashion model"
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover"
              priority
            />
          </div>
        </motion.section>

        {/* Right: Form */}
        <motion.section
          variants={formWrap}
          initial="hidden"
          animate="show"
          className="flex items-center justify-center px-6 py-12 lg:py-24 lg:border-l lg:border-gray-100 bg-white"
        >
          <div className="w-full max-w-lg ml-auto">
            <LoginForm />
          </div>
        </motion.section>
      </div>
    </motion.main>
  );
}
