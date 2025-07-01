import {
  BarChart3,
  CheckCircle,
  ChevronRight,
  Circle,
  CircleCheckBig,
  Cloud,
  Github,
  Globe,
  HelpCircle,
  Linkedin,
  MessageCircle,
  Palette,
  PenTool,
  Share2,
  Smartphone,
  SquarePen,
  Twitter,
  Zap,
} from 'lucide-react';
import { Header } from '@/components/header';
import { JoinBanner } from '@/components/join-banner';
import { Button } from '@workspace/ui/components/button';
import { Card, CardContent } from '@workspace/ui/components/card';

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <JoinBanner />
      <Header />
      <main className="flex-1">
        {/* hero section */}
        <section
          id="#hero"
          className="text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-28 space-y-4"
        >
          <h1 className="text-6xl font-bold leading-16">
            Make Every Voice Count <br></br>
            <span className="inline-block px-4 text-primary font-semibold">
              In Every Single Session
            </span>
          </h1>
          <p className="text-xl max-w-2xl mx-auto text-foreground/70">
            Make your sessions more human. With real-time questions, reactions,
            and polls, Interactly gives everyone a way to be seen, heard, and
            involved — instantly.
          </p>
          <div className="flex items-center gap-6 justify-center mt-6">
            <Button className="h-11 px-12 text-sm">
              <span>Start Creating</span>
              <span>
                <ChevronRight strokeWidth={2} />
              </span>
            </Button>
            <Button variant="outline" className="h-11 px-12 text-sm">
              Explore Features
            </Button>
          </div>
          <div className="text-foreground/70 text-sm">
            <p>No sign-up needed for your audience. Just create and go live.</p>
          </div>
        </section>
        {/* how it works section */}
        <section id="how-it-works" className="py-20 pb-32">
          <div className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">🛠️ How It Works</h2>
              <p className="text-xl text-foreground/70">
                Get started in three simple steps
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="group text-center p-8 border-2 shadow-md hover:-translate-y-1.5 transition-transform duration-300">
                <CardContent className="pt-6">
                  <div className="group-hover:bg-primary/30 transition-colors duration-300 w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <SquarePen
                      className="w-5 h-5 text-primary"
                      strokeWidth={2}
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">
                    Create New Interactly
                  </h3>
                  <p className="text-foreground/70">
                    Choose from quizzes, polls, Q&A, or yes/no questions.
                    Customize with ease.
                  </p>
                </CardContent>
              </Card>
              <Card className="group text-center p-8 border-2 shadow-md hover:-translate-y-1.5 transition-transform duration-300">
                <CardContent className="pt-6">
                  <div className="group-hover:bg-primary/30 transition-colors duration-300 w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Share2 className="w-5 h-5 text-primary" strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">
                    Share With Your Audience
                  </h3>
                  <p className="text-foreground/70">
                    Participants join instantly from any device — no app or
                    sign-in needed.
                  </p>
                </CardContent>
              </Card>
              <Card className="group text-center p-8 border-2 shadow-md hover:-translate-y-1.5 transition-transform duration-300">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-primary/20 group-hover:bg-primary/30 transition-colors duration-300 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CircleCheckBig
                      className="w-5 h-5 text-primary"
                      strokeWidth={2}
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">
                    Get Real-Time Results
                  </h3>
                  <p className="text-foreground/70">
                    Watch answers roll in live, visualize results instantly, and
                    keep your audience engaged.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        {/* use cases section */}
        <section id="use-cases" className="py-28 relative bg-muted/30">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(from_var(--muted-foreground)_r_g_b_/_0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(from_var(--muted-foreground)_r_g_b_/_0.05)_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
          <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">🧩 Use Cases</h2>
              <p className="text-xl text-foreground/70">
                Perfect for every scenario and audience
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="p-6 bg-background z-10 shadow-lg transition-transform hover:-translate-y-1.5">
                <CardContent className="pt-0">
                  <div className="text-3xl mb-4">👨‍🏫</div>
                  <h3 className="font-semibold mb-2">Teachers & Educators</h3>
                  <p className="text-foreground/70 text-sm">
                    Make learning fun and interactive
                  </p>
                </CardContent>
              </Card>
              <Card className="p-6 bg-background z-10 shadow-lg transition-transform hover:-translate-y-1.5">
                <CardContent className="pt-0">
                  <div className="text-3xl mb-4">💼</div>
                  <h3 className="font-semibold mb-2">Team Meetings</h3>
                  <p className="text-foreground/70 text-sm">
                    Collect feedback, run icebreakers, or vote on decisions
                  </p>
                </CardContent>
              </Card>
              <Card className="p-6 bg-background z-10 shadow-lg transition-transform hover:-translate-y-1.5">
                <CardContent className="pt-0">
                  <div className="text-3xl mb-4">🎤</div>
                  <h3 className="font-semibold mb-2">Events & Webinars</h3>
                  <p className="text-foreground/70 text-sm">
                    Boost engagement with real-time polls and Q&A
                  </p>
                </CardContent>
              </Card>
              <Card className="p-6 bg-background z-10 shadow-lg transition-transform hover:-translate-y-1.5">
                <CardContent className="pt-0">
                  <div className="text-3xl mb-4">🎉</div>
                  <h3 className="font-semibold mb-2">Game Nights</h3>
                  <p className="text-foreground/70 text-sm">
                    Run fun quizzes with friends
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        {/* why interactly section */}
        <section id="features" className="py-24">
          <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">🚀 Why Interactly?</h2>
              <p className="text-xl text-foreground/70">
                Everything you need to create engaging experiences
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/70 shadow-lg rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-background" />
                </div>
                <h3 className="font-semibold mb-2">No Installs. No Hassle.</h3>
                <p className="text-foreground/70 text-sm">
                  Participants join with just a code — no app required.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/70 shadow-lg rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-8 h-8 text-background" />
                </div>
                <h3 className="font-semibold mb-2">Real-Time Analytics</h3>
                <p className="text-foreground/70 text-sm">
                  See who&apos;s engaged and how well they&apos;re doing
                  instantly.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/70 shadow-lg rounded-full flex items-center justify-center mx-auto mb-4">
                  <Palette className="w-8 h-8 text-background" />
                </div>
                <h3 className="font-semibold mb-2">Customizable Formats</h3>
                <p className="text-foreground/70 text-sm">
                  Multiple-choice, word clouds, true/false, open-ended
                  questions, and more.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/70 shadow-lg rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-background" />
                </div>
                <h3 className="font-semibold mb-2">Interactive Q&A</h3>
                <p className="text-foreground/70 text-sm">
                  Let your audience ask questions live and vote on others&apos;
                  queries.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* What You Can Create */}
        <section className="py-24 pb-32">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                🧠 What You Can Create
              </h2>
              <p className="text-xl text-foreground/70">
                Endless possibilities for engagement and interaction
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="p-6 shadow-lg transition-transform hover:-translate-y-1.5">
                <CardContent className="pt-0">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="w-6 h-6 text-primary mr-3" />
                    <span className="font-semibold">MCQs</span>
                  </div>
                  <p className="text-foreground/70 text-sm">
                    &quot;What&apos;s the capital of France?&quot;
                  </p>
                </CardContent>
              </Card>
              <Card className="p-6 shadow-lg transition-transform hover:-translate-y-1.5">
                <CardContent className="pt-0">
                  <div className="flex items-center mb-4">
                    <Circle className="w-6 h-6 text-primary mr-3" />
                    <span className="font-semibold">Yes/No</span>
                  </div>
                  <p className="text-foreground/70 text-sm">
                    &quot;Was this presentation helpful?&quot;
                  </p>
                </CardContent>
              </Card>
              <Card className="p-6 shadow-lg transition-transform hover:-translate-y-1.5">
                <CardContent className="pt-0">
                  <div className="flex items-center mb-4">
                    <HelpCircle className="w-6 h-6 text-primary mr-3" />
                    <span className="font-semibold">Polls</span>
                  </div>
                  <p className="text-foreground/70 text-sm">
                    &quot;Which feature should we build?&quot;
                  </p>
                </CardContent>
              </Card>
              <Card className="p-6 shadow-lg transition-transform hover:-translate-y-1.5">
                <CardContent className="pt-0">
                  <div className="flex items-center mb-4">
                    <PenTool className="w-6 h-6 text-primary mr-3" />
                    <span className="font-semibold">Open-Ended</span>
                  </div>
                  <p className="text-foreground/70 text-sm">
                    &quot;One word to describe today?&quot;
                  </p>
                </CardContent>
              </Card>
              <Card className="p-6 shadow-lg transition-transform hover:-translate-y-1.5">
                <CardContent className="pt-0">
                  <div className="flex items-center mb-4">
                    <Cloud className="w-6 h-6 text-primary mr-3" />
                    <span className="font-semibold">Word Clouds</span>
                  </div>
                  <p className="text-foreground/70 text-sm">
                    &quot;Your mood in one word?&quot;
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-28 px-4 bg-gradient-to-br from-primary to-primary/80 text-background">
          <div className="max-w-[1200px] mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold mb-6">
              📬 Start Creating in Seconds
            </h2>
            <p className="text-xl mb-6 opacity-90">
              No sign-up needed for your audience. Just create and go live.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" className="h-11 px-12">
                <span>Start Creating</span>
                <span>
                  <ChevronRight strokeWidth={2} />
                </span>
              </Button>
              <Button
                variant="outline"
                className="h-11 px-12 text-sm text-foreground"
              >
                Explore Features
              </Button>
            </div>
          </div>
        </section>
        {/* Footer */}
        <footer className="bg-gray-900 text-white py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="col-span-2">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">I</span>
                  </div>
                  <span className="text-xl font-bold">Interactly</span>
                </div>
                <p className="text-gray-400 mb-6 max-w-md">
                  Transform boring presentations into engaging experiences.
                  Create interactive sessions that captivate your audience.
                </p>
                <div className="flex space-x-4">
                  <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 cursor-pointer transition-colors">
                    <Twitter className="w-5 h-5" />
                  </div>
                  <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 cursor-pointer transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 cursor-pointer transition-colors">
                    <Github className="w-5 h-5" />
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Product</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Templates
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      API
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Support</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Help Center
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Terms of Service
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © 2024 Interactly. All rights reserved.
              </p>
              <div className="flex items-center space-x-6 mt-4 md:mt-0">
                <div className="flex items-center space-x-2 text-gray-400 text-sm">
                  <Globe className="w-4 h-4" />
                  <span>Available worldwide</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400 text-sm">
                  <Smartphone className="w-4 h-4" />
                  <span>Mobile friendly</span>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
