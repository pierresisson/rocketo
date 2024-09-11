"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Clock, Star, ArrowUpRight } from 'lucide-react'

const projects = [
  { id: 1, name: "ProjectX", description: "AI-powered project management", category: "Productivity", launchDate: "2023-12-01" },
  { id: 2, name: "DataFlow", description: "Real-time data visualization", category: "Analytics", launchDate: "2023-11-15" },
  { id: 3, name: "SecureChat", description: "End-to-end encrypted messaging", category: "Communication", launchDate: "2023-12-10" },
  // Add more projects as needed
]

export function ProjectsGrid() {
  const [filter, setFilter] = useState('')
  const [sort, setSort] = useState('date')

  const filteredProjects = projects.filter(project => 
    project.name.toLowerCase().includes(filter.toLowerCase()) ||
    project.description.toLowerCase().includes(filter.toLowerCase()) ||
    project.category.toLowerCase().includes(filter.toLowerCase())
  )

  const sortedProjects = [...filteredProjects].sort((a, b) => {
    if (sort === 'date') {
      return new Date(a.launchDate).getTime() - new Date(b.launchDate).getTime()
    } else {
      return a.name.localeCompare(b.name)
    }
  })

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4">
        <Input
          placeholder="Filter projects..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="sm:w-64"
        />
        <Select value={sort} onValueChange={setSort}>
          <SelectTrigger className="sm:w-40">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="date">Launch Date</SelectItem>
            <SelectItem value="name">Project Name</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {sortedProjects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="overflow-hidden">
              <CardHeader className="pb-4">
                <CardTitle>{project.name}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="mr-1 h-4 w-4" />
                    {new Date(project.launchDate).toLocaleDateString()}
                  </div>
                  <div className="text-sm font-medium bg-yellow-300/20 text-yellow-300 px-2 py-1 rounded">
                    {project.category}
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <Button variant="outline" size="sm">
                    <Star className="mr-1 h-4 w-4" /> Follow
                  </Button>
                  <Button variant="ghost" size="sm">
                    Learn More <ArrowUpRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}