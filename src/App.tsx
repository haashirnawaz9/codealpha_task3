import { useEffect, ReactNode } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, Phone, ExternalLink, Code2, Boxes, Database, Wrench } from "lucide-react";
import hasbotImage from './images/hasbot.jpeg';
import imageGen from './images/image.jpeg';
import masjidImage from './images/masjid.jpeg';

interface FadeInWhenVisibleProps {
  children: ReactNode;
  delay?: number;
}

function FadeInWhenVisible({ children, delay = 0 }: FadeInWhenVisibleProps) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    document.title = "Haashir Nawaz's Profolio"
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Gradient Background */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background pointer-events-none" />
        <header className="container mx-auto px-4 pt-32 pb-48 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <h1 className="text-6xl md:text-7xl font-bold tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                Haashir Nawaz
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                Crafting Digital Experiences with Code
              </p>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
            >
              Front-End Software Engineer passionate about building innovative web experiences
              that combine beautiful design with powerful functionality.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Button size="lg" className="group" asChild>
                <a href="mailto:haashirn007@gmail.com">
                  <Mail className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                  Get in Touch
                </a>
              </Button>
              <Button size="lg" variant="outline" className="group" asChild>
                <a href="https://github.com/haashirnawaz9" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                  View GitHub
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </header>
      </div>

      <main className="relative -mt-24">
        <div className="container mx-auto px-4 space-y-24 pb-24">
          {/* Featured Projects */}
          <section>
            <FadeInWhenVisible>
              <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="overflow-hidden h-full bg-card/50 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-xl">HashChat AI</CardTitle>
                      <CardDescription>AI-Powered Chat Platform</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="aspect-video rounded-lg bg-muted/50 overflow-hidden">
                        <img 
                          src={hasbotImage}
                          alt="AI Chat Interface"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="text-muted-foreground">
                        A sophisticated chat application leveraging advanced AI for natural conversations and instant responses.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">Next.js</Badge>
                        <Badge variant="secondary">OpenAI</Badge>
                        <Badge variant="secondary">TailwindCSS</Badge>
                      </div>
                      <Button variant="outline" className="w-full group" asChild>
                        <a href="https://hashchat-ai.vercel.app/" target="_blank" rel="noopener noreferrer">
                          View Project
                          <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="overflow-hidden h-full bg-card/50 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-xl">ImageGen AI</CardTitle>
                      <CardDescription>AI Image Generation Platform</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="aspect-video rounded-lg bg-muted/50 overflow-hidden">
                        <img 
                          src={imageGen}
                          alt="AI Image Generator"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="text-muted-foreground">
                        Transform text prompts into stunning AI-generated artwork with this innovative platform.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">Next.js</Badge>
                        <Badge variant="secondary">Clerk</Badge>
                        <Badge variant="secondary">Prisma</Badge>
                      </div>
                      <Button variant="outline" className="w-full group" asChild>
                        <a href="https://imagegenaii.netlify.app/" target="_blank" rel="noopener noreferrer">
                          View Project
                          <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="md:col-span-2"
                >
                  <Card className="overflow-hidden bg-card/50 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-xl">Masjid-e-Khazra</CardTitle>
                      <CardDescription>Community Platform</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="aspect-video rounded-lg bg-muted/50 overflow-hidden">
                        <img 
                          src={masjidImage}
                          alt="Masjid Platform"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="text-muted-foreground">
                        A comprehensive community platform featuring event management, seating arrangements, 
                        and organizational tools built with modern web technologies.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">Next.js</Badge>
                        <Badge variant="secondary">TailwindCSS</Badge>
                        <Badge variant="secondary">MongoDB</Badge>
                      </div>
                      <Button variant="outline" className="w-full group" asChild>
                        <a href="https://masjid-e-khazra.netlify.app/" target="_blank" rel="noopener noreferrer">
                          View Project
                          <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </FadeInWhenVisible>
          </section>

          {/* Skills & Technologies */}
          <section>
            <FadeInWhenVisible>
              <h2 className="text-3xl font-bold mb-12 text-center">Skills & Technologies</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="bg-card/50 backdrop-blur-sm">
                  <CardHeader>
                    <Code2 className="h-8 w-8 text-primary mb-2" />
                    <CardTitle>Frontend</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {["React", "Next.js", "TypeScript", "TailwindCSS", "React Native"].map((skill) => (
                        <Badge key={skill} variant="secondary">{skill}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card/50 backdrop-blur-sm">
                  <CardHeader>
                    <Boxes className="h-8 w-8 text-primary mb-2" />
                    <CardTitle>Backend</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {["Node.js", "Express", "REST APIs", "GraphQL"].map((skill) => (
                        <Badge key={skill} variant="secondary">{skill}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card/50 backdrop-blur-sm">
                  <CardHeader>
                    <Database className="h-8 w-8 text-primary mb-2" />
                    <CardTitle>Database</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {["MongoDB", "Prisma", "Supabase", "PostgreSQL"].map((skill) => (
                        <Badge key={skill} variant="secondary">{skill}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card/50 backdrop-blur-sm">
                  <CardHeader>
                    <Wrench className="h-8 w-8 text-primary mb-2" />
                    <CardTitle>Tools</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {["Git", "VS Code", "Vercel", "Netlify"].map((skill) => (
                        <Badge key={skill} variant="secondary">{skill}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </FadeInWhenVisible>
          </section>

          {/* Contact Section */}
          <section>
            <FadeInWhenVisible>
              <Card className="bg-card/50 backdrop-blur-sm">
                <CardHeader className="text-center">
                  <CardTitle className="text-3xl font-bold">Let's Connect</CardTitle>
                  <CardDescription>Available for freelance projects and full-time opportunities</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col items-center space-y-4">
                  <div className="flex flex-wrap justify-center gap-4">
                    <Button variant="outline" className="group" asChild>
                      <a href="mailto:haashirn007@gmail.com">
                        <Mail className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                        haashirn007@gmail.com
                      </a>
                    </Button>
                    <Button variant="outline" className="group" asChild>
                      <a href="https://www.linkedin.com/in/haashir-nawaz-4aa006241/" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                        LinkedIn
                      </a>
                    </Button>
                    <Button variant="outline" className="group" asChild>
                      <a href="tel:+15165476312">
                        <Phone className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                        (516) 547-6312
                      </a>
                    </Button>
                  </div>
                  <p className="text-muted-foreground text-center mt-4">
                    Based in West Babylon, NY • Available Worldwide
                  </p>
                </CardContent>
              </Card>
            </FadeInWhenVisible>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;