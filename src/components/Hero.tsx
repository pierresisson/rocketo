"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket } from "lucide-react";

export default function Hero() {
	return (
		<div className="flex flex-col p-8 items-start justify-center">
			<h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
				Track SAAS Launches,
				<br />
				Earn Rewards
			</h1>
			<p className="text-xl text-muted-foreground mb-8">
				Discover upcoming SAAS projects, follow their journey,
				<br />
				and get rewarded for your support.
			</p>

			<Button
				size="lg"
				className="bg-yellow-300 text-background hover:bg-yellow-400"
			>
				Explore Projects <ArrowRight className="ml-2 h-4 w-4" />
			</Button>
		</div>
	);
}
