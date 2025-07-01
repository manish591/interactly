import { Header } from '@/components/header';
import { JoinBanner } from '@/components/join-banner';
import { Button } from '@workspace/ui/components/button';
import { ChevronRight } from 'lucide-react';

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <JoinBanner />
      <Header />
      <main className="flex-1">
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
          <p className="max-w-2xl mx-auto">
            Make your sessions more human. With real-time questions, reactions,
            and polls, Interactly gives everyone a way to be seen, heard, and
            involved — instantly.
          </p>
          <div className="flex items-center gap-6 justify-center mt-8">
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
          <div className="text-foreground/60 text-sm">
            <p>No sign-up needed for your audience. Just create and go live.</p>
          </div>
        </section>
      </main>
    </div>
  );
}
