"use client"

import { PageHeader } from "@/components/page-header"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, Clock, Calendar } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
// Sample video data
const videos = [
  {
    id: 1,
    title: "Introduction to Ethanolamines",
    description: "Learn about the properties and applications of our ethanolamine products.",
    thumbnail: "/placeholder.svg?height=300&width=533",
    duration: "5:24",
    date: "Mar 15, 2023",
  },
  {
    id: 2,
    title: "Surfactants in Action: Demonstration",
    description: "Watch our surfactants in action with this detailed demonstration of their effectiveness.",
    thumbnail: "/placeholder.svg?height=300&width=533",
    duration: "8:12",
    date: "Apr 22, 2023",
  },
  {
    id: 3,
    title: "Safe Handling of Industrial Acids",
    description: "Important safety guidelines for handling and storing industrial-grade acids.",
    thumbnail: "/placeholder.svg?height=300&width=533",
    duration: "12:05",
    date: "Feb 8, 2023",
  },
  {
    id: 4,
    title: "Alkalis in Water Treatment Applications",
    description: "How our alkali products are used in water treatment facilities around the world.",
    thumbnail: "/placeholder.svg?height=300&width=533",
    duration: "7:18",
    date: "May 3, 2023",
  },
  {
    id: 5,
    title: "Glycols: Properties and Uses",
    description: "An overview of glycol properties and their various industrial applications.",
    thumbnail: "/placeholder.svg?height=300&width=533",
    duration: "9:45",
    date: "Jan 19, 2023",
  },
  {
    id: 6,
    title: "Polymer Selection Guide",
    description: "How to select the right polymer for your specific application needs.",
    thumbnail: "/placeholder.svg?height=300&width=533",
    duration: "14:32",
    date: "Jun 11, 2023",
  },
  {
    id: 7,
    title: "Laboratory Tour: Quality Control",
    description: "Take a tour of our state-of-the-art quality control laboratory.",
    thumbnail: "/placeholder.svg?height=300&width=533",
    duration: "18:20",
    date: "Apr 5, 2023",
  },
  {
    id: 8,
    title: "Customer Success Story: Pharmaceutical Industry",
    description: "How our chemicals helped a pharmaceutical company improve their production process.",
    thumbnail: "/placeholder.svg?height=300&width=533",
    duration: "10:15",
    date: "May 28, 2023",
  },
  {
    id: 9,
    title: "Sustainable Chemistry Practices",
    description: "Our commitment to sustainable chemistry and environmentally responsible operations.",
    thumbnail: "/placeholder.svg?height=300&width=533",
    duration: "11:50",
    date: "Mar 30, 2023",
  },
]

export default function VideosPage() {
  // Featured video is the first one in the list
  const featuredVideo = videos[0]

  return (
    <main className="flex-1">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
      <PageHeader
        title="Video Library"
        description="Explore our collection of educational videos, product demonstrations, and technical guides."
      />
      </motion.div>


      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Featured Video - Takes up 2/3 of the width on desktop */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative aspect-video">
                  <Image
                    src={featuredVideo.thumbnail || "/placeholder.svg"}
                    alt={featuredVideo.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button
                      size="icon"
                      className="rounded-full w-20 h-20 bg-orc-medium/90 hover:bg-orc-dark hover:scale-110 transition-all duration-300"
                    >
                      <Play className="h-10 w-10 text-white" fill="white" />
                    </Button>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black/70 text-white text-sm px-3 py-1 rounded flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    {featuredVideo.duration}
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-2">{featuredVideo.title}</h2>
                  <p className="text-muted-foreground mb-4">{featuredVideo.description}</p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2" />
                    {featuredVideo.date}
                  </div>
                </div>
              </div>
            </div>

            {/* Video List - Takes up 1/3 of the width on desktop */}
            <div className="lg:col-span-1">
              <h3 className="text-xl font-bold mb-4">More Videos</h3>
              <div className="space-y-4 max-h-[800px] overflow-y-auto pr-2">
                {videos.slice(1).map((video) => (
                  <Card
                    key={video.id}
                    className="flex flex-col sm:flex-row overflow-hidden hover:shadow-md transition-shadow duration-300 cursor-pointer"
                  >
                    <div className="relative w-full sm:w-1/3 aspect-video sm:aspect-square">
                      <Image
                        src={video.thumbnail || "/placeholder.svg"}
                        alt={video.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute bottom-1 right-1 bg-black/70 text-white text-xs px-1.5 py-0.5 rounded flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {video.duration}
                      </div>
                    </div>
                    <CardContent className="p-3 flex-1">
                      <h4 className="font-bold text-sm line-clamp-2 mb-1">{video.title}</h4>
                      <p className="text-muted-foreground text-xs line-clamp-2">{video.description}</p>
                      <div className="flex items-center mt-2 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3 mr-1" />
                        {video.date}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-orc-bg">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">Subscribe to Our Channel</h2>
            <p className="text-muted-foreground">
              Stay updated with our latest videos, tutorials, and product demonstrations.
            </p>
          </div>
          <div className="flex justify-center">
            <Button className="bg-red-600 hover:bg-red-700 flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
              Subscribe on YouTube
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
