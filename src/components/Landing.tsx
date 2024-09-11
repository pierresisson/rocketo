"use client"

import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { ArrowRight, Rocket } from 'lucide-react'

export default function Landing() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-3.5rem)]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 260, damping: 20 }}
          className="mb-6"
        >
          <Rocket className="w-16 h-16 mx-auto text-yellow-300" />
        </motion.div>
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
          Track SAAS Launches,<br />Earn Rewards
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Discover upcoming SAAS projects, follow their journey,<br />and get rewarded for your support.
        </p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Button size="lg" className="bg-yellow-300 text-background hover:bg-yellow-400">
            Explore Projects <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </motion.div>
    </div>
  )
}