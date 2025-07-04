import { Card, CardContent } from '@workspace/ui/components/card';

export function Testimonials() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">💬 What People Are Saying</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8 border-l-4 border-l-purple-500">
            <CardContent className="pt-0">
              <p className="text-lg text-gray-700 mb-4 italic">
                &quot;Interactly makes every class feel like a game show.&quot;
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-semibold">A</span>
                </div>
                <div>
                  <p className="font-semibold">Anjali</p>
                  <p className="text-gray-600 text-sm">High School Teacher</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="p-8 border-l-4 border-l-blue-500">
            <CardContent className="pt-0">
              <p className="text-lg text-gray-700 mb-4 italic">
                &quot;We replaced boring slides with interactive polls using
                Interactly — game-changer!&quot;
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-semibold">V</span>
                </div>
                <div>
                  <p className="font-semibold">Vivek</p>
                  <p className="text-gray-600 text-sm">Startup Founder</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
