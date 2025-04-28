import { PageHeader } from "@/components/page-header"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Quote, Building } from "lucide-react"
import Image from "next/image"

// Sample review data
const reviews = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    company: "PharmaTech Industries",
    position: "Head of R&D",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
    review:
      "The quality and consistency of ORC's ethanolamine products have been exceptional. Their technical support team provided valuable guidance for our specific application needs.",
    date: "March 15, 2023",
    category: "Ethanolamines",
    verified: true,
  },
  {
    id: 2,
    name: "Michael Chen",
    company: "CleanTech Solutions",
    position: "Production Manager",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 4,
    review:
      "We've been using ORC's surfactants in our cleaning product line for over two years. The performance is reliable and their customer service is responsive.",
    date: "April 22, 2023",
    category: "Surfactants",
    verified: true,
  },
  {
    id: 3,
    name: "Dr. Robert Williams",
    company: "Advanced Materials Research",
    position: "Senior Scientist",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
    review:
      "The high purity acids from ORC have been critical for our sensitive analytical procedures. Documentation and certificates of analysis are always thorough and accurate.",
    date: "February 8, 2023",
    category: "Acids",
    verified: true,
  },
  {
    id: 4,
    name: "Jennifer Lopez",
    company: "AquaPure Systems",
    position: "Water Treatment Specialist",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
    review:
      "ORC's alkali products have consistently met our stringent requirements for water treatment applications. Their technical team has been invaluable in optimizing our processes.",
    date: "May 3, 2023",
    category: "Alkalis",
    verified: true,
  },
  {
    id: 5,
    name: "David Thompson",
    company: "Automotive Innovations",
    position: "Chief Engineer",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 4,
    review:
      "The glycol products we've purchased from ORC have performed excellently in our heat transfer systems. Their delivery is always on time, which is crucial for our production schedule.",
    date: "January 19, 2023",
    category: "Glycols",
    verified: true,
  },
  {
    id: 6,
    name: "Dr. Emily Rodriguez",
    company: "Polymer Solutions Inc.",
    position: "Product Development Director",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
    review:
      "ORC's polymer range has exceptional quality and consistency. Their technical documentation and support have helped us develop several new products successfully.",
    date: "June 11, 2023",
    category: "Polymers",
    verified: true,
  },
]

export default function ReviewsPage() {
  // Calculate average rating
  const averageRating = reviews.reduce((total, review) => total + review.rating, 0) / reviews.length

  // Count reviews by rating
  const ratingCounts = [5, 4, 3, 2, 1].map((rating) => reviews.filter((review) => review.rating === rating).length)

  // Calculate rating percentages
  const ratingPercentages = ratingCounts.map((count) => (count / reviews.length) * 100)

  return (
    <main className="flex-1">
      <PageHeader
        title="Customer Reviews"
        description="See what our customers are saying about our products and services."
      />

      {/* Reviews Grid */}
      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <Card key={review.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      <div className="relative h-12 w-12 rounded-full overflow-hidden">
                        <Image
                          src={review.avatar || "/placeholder.svg"}
                          alt={review.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold">{review.name}</h3>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Building className="h-3 w-3 mr-1" />
                          {review.company}
                        </div>
                      </div>
                    </div>
                    {review.verified && (
                      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                        Verified
                      </Badge>
                    )}
                  </div>

                  <div className="flex mb-3">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`h-4 w-4 ${
                          star <= review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>

                  <div className="relative">
                    <Quote className="absolute top-0 left-0 h-6 w-6 text-orc-bg opacity-50 -translate-x-1 -translate-y-1" />
                    <p className="text-muted-foreground text-sm pl-4">{review.review}</p>
                  </div>

                  <div className="mt-4 flex justify-between items-center text-xs text-muted-foreground">
                    <span>{review.date}</span>
                    <Badge variant="outline" className="bg-orc-bg/50">
                      {review.category}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-white border-t">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-2xl font-bold mb-6">Share Your Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            We value your feedback. If you've used our products, please consider leaving a review to help other
            customers make informed decisions.
          </p>
          <div className="flex justify-center">
            <a
              href="#write-review"
              className="inline-flex items-center justify-center rounded-md bg-orc-medium px-6 py-3 text-white hover:bg-orc-dark transition-colors"
            >
              Write a Review
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
