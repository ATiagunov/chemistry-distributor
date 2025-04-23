import Image from "next/image"
import { PageHeader } from "@/components/page-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, Award, Globe, Leaf } from "lucide-react"

// Sample team members data
const teamMembers = [
  {
    id: 1,
    name: "Dr. Alexander Mitchell",
    position: "Chief Executive Officer",
    bio: "With over 25 years of experience in the chemical industry, Dr. Mitchell leads our company with a focus on innovation and sustainability.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 2,
    name: "Dr. Sarah Johnson",
    position: "Chief Scientific Officer",
    bio: "Dr. Johnson oversees our R&D department, bringing her expertise in organic chemistry and material science to develop cutting-edge solutions.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 3,
    name: "Michael Zhang",
    position: "Operations Director",
    bio: "Michael ensures the efficiency and safety of our production facilities while maintaining the highest quality standards for all our products.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 4,
    name: "Emily Rodriguez",
    position: "Sales & Marketing Director",
    bio: "Emily leads our global sales team, developing strategic partnerships and ensuring our products meet the evolving needs of our customers.",
    image: "/placeholder.svg?height=300&width=300",
  },
]

// Company milestones
const milestones = [
  {
    year: "1995",
    title: "Company Founded",
    description: "ORC Chemicals was established with a focus on providing high-quality laboratory chemicals.",
  },
  {
    year: "2002",
    title: "Expansion into Industrial Chemicals",
    description: "Expanded product range to include industrial-grade chemicals for manufacturing applications.",
  },
  {
    year: "2008",
    title: "ISO Certification",
    description: "Achieved ISO 9001 certification, demonstrating our commitment to quality management.",
  },
  {
    year: "2012",
    title: "New Production Facility",
    description: "Opened state-of-the-art production facility to increase capacity and enhance quality control.",
  },
  {
    year: "2015",
    title: "International Expansion",
    description: "Established distribution networks in Europe and Asia to serve global customers.",
  },
  {
    year: "2020",
    title: "Sustainability Initiative",
    description: "Launched comprehensive sustainability program to reduce environmental impact of operations.",
  },
]

export default function AboutPage() {
  return (
    <main className="flex-1">
      <PageHeader
        title="About ORC Chemicals"
        description="Your trusted partner for high-quality chemical products since 1995."
      />

      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="company" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="company">Our Company</TabsTrigger>
              <TabsTrigger value="history">History & Milestones</TabsTrigger>
              <TabsTrigger value="team">Leadership Team</TabsTrigger>
            </TabsList>

            <TabsContent value="company" className="mt-6">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                  <p className="text-muted-foreground mb-6">
                    At ORC Chemicals, our mission is to provide high-quality chemical products and solutions that enable
                    our customers to innovate and succeed in their respective industries. We are committed to
                    operational excellence, environmental responsibility, and continuous improvement in everything we
                    do.
                  </p>

                  <h2 className="text-2xl font-bold mb-4">Our Values</h2>
                  <div className="grid grid-cols-2 gap-4">
                    <Card>
                      <CardHeader className="flex flex-row items-center gap-2 pb-2">
                        <Award className="h-5 w-5 text-orc-medium" />
                        <CardTitle className="text-lg">Quality</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          We maintain the highest standards in our products and services.
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="flex flex-row items-center gap-2 pb-2">
                        <Leaf className="h-5 w-5 text-orc-medium" />
                        <CardTitle className="text-lg">Sustainability</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          We are committed to environmentally responsible operations.
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="flex flex-row items-center gap-2 pb-2">
                        <Globe className="h-5 w-5 text-orc-medium" />
                        <CardTitle className="text-lg">Innovation</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          We continuously improve our products and processes.
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="flex flex-row items-center gap-2 pb-2">
                        <Users className="h-5 w-5 text-orc-medium" />
                        <CardTitle className="text-lg">Partnership</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          We build long-term relationships with our customers and suppliers.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                <div className="flex justify-center">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    width={400}
                    height={400}
                    alt="ORC Chemicals facility"
                    className="rounded-lg"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="history" className="mt-6">
              <div className="space-y-8">
                <div className="flex justify-center mb-8">
                  <Image
                    src="/placeholder.svg?height=300&width=800"
                    width={800}
                    height={300}
                    alt="Company timeline"
                    className="rounded-lg"
                  />
                </div>

                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-center mb-6">Our Journey</h2>
                  <div className="relative border-l-2 border-orc-medium pl-8 ml-4 space-y-10">
                    {milestones.map((milestone, index) => (
                      <div key={index} className="relative">
                        <div className="absolute -left-10 top-1 w-6 h-6 rounded-full bg-orc-medium flex items-center justify-center">
                          <div className="w-3 h-3 rounded-full bg-white"></div>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                          <h3 className="text-xl font-bold text-orc-dark">{milestone.year}</h3>
                          <h4 className="text-lg font-medium mb-2">{milestone.title}</h4>
                          <p className="text-muted-foreground">{milestone.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="team" className="mt-6">
              <h2 className="text-2xl font-bold text-center mb-8">Our Leadership Team</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {teamMembers.map((member) => (
                  <Card key={member.id} className="overflow-hidden">
                    <div className="relative h-64 w-full">
                      <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                    </div>
                    <CardHeader>
                      <CardTitle>{member.name}</CardTitle>
                      <p className="text-sm text-orc-medium font-medium">{member.position}</p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{member.bio}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </main>
  )
}
