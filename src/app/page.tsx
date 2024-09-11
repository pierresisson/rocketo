"use client"

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { CommandDialog, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem } from "@/components/ui/command"
import { Button } from "@/components/ui/button"
import { MoonIcon, SunIcon, SearchIcon, MenuIcon } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import LandingPage from '@/components/Landing'

export default function Home({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState('dark')
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  

  return (
    <div className={`min-h-screen bg-background text-foreground ${theme}`}>
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
  )
}