"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LandingPage from "@/components/Landing";

export default function Home({ children }: { children: React.ReactNode }) {
	const [theme] = useState("dark");

	return (
		<div className={`bg-background text-foreground ${theme}`}>
			<main className="container py-6 md:py-10">
				<AnimatePresence mode="wait">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						transition={{ duration: 0.2 }}
					>
						{children}
					</motion.div>
				</AnimatePresence>
			</main>
			<LandingPage />
		</div>
	);
}
