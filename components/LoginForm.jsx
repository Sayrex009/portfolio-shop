"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function LoginForm() {
  const container = {
    hidden: { opacity: 0, x: 80 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* LEFT IMAGE */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="relative hidden lg:block"
      >
        <Image
          src="/login_page.png"
          alt="Login background"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute top-6 left-6 z-20 flex items-center gap-2">
          <div className=" rounded-full flex items-center justify-center font-bold">
          <Image
                src="/logo.png"
                alt="Krist logo"    
                width={100}
                height={100}
                priority
              />
          </div>
        </div>
      </motion.div>

      {/* RIGHT FORM */}
      <div className="flex items-center justify-center bg-gray-100 px-6 py-12">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="w-full max-w-md"
        >
          <h1 className="text-3xl font-extrabold text-gray-900">
            Welcome 👋
          </h1>
          <p className="mt-2 text-sm text-gray-500">Please login here</p>

          <form className="mt-8 space-y-5">
            <div>
              <label className="text-xs text-gray-500">Email Address</label>
              <input
                type="email"
                className="mt-2 w-full rounded-xl border  border-gray-700 px-4 py-3"
                placeholder="EvaElfi@example.com"
              />
            </div>

            <div>
              <label className="text-xs text-gray-500">Password</label>
              <input
                type="password"
                className="mt-2 w-full rounded-xl border border-gray-700 px-4 py-3"
                placeholder="********"
              />
            </div>

            <div className="flex justify-between text-sm">
              <label className="flex gap-2 items-center">
                <input type="checkbox" />
                Remember me
              </label>

              <Link href="#" className="text-gray-600">
                Forgot password?
              </Link>
            </div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gray-900 text-white py-3 rounded-xl"
            >
              Login
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
