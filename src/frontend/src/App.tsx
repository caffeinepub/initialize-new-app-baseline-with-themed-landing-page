import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b border-border/40 backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <img 
                src="/assets/generated/app-mark.dim_512x512.png" 
                alt="App Mark" 
                className="w-10 h-10 rounded-lg"
              />
              <span className="font-display text-xl font-semibold tracking-tight">
                Caffeine
              </span>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Features
              </a>
              <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                About
              </a>
              <Button variant="outline" size="sm">
                Get Started
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          {/* Hero Background */}
          <div className="absolute inset-0 z-0">
            <img 
              src="/assets/generated/hero-bg.dim_1600x900.png" 
              alt="" 
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
          </div>

          {/* Hero Content */}
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/50 border border-border/40 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-accent-foreground" />
                <span className="text-sm font-medium text-accent-foreground">
                  Ready for your next big idea
                </span>
              </div>

              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
                Your App Starts
                <span className="block text-primary mt-2">Here</span>
              </h1>

              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                A beautifully crafted foundation ready to bring your vision to life. 
                Built with modern tools and designed for seamless development.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto text-base px-8 shadow-lg hover:shadow-xl transition-shadow"
                  disabled
                >
                  Get Started
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full sm:w-auto text-base px-8"
                  disabled
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 sm:py-32 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                Built for Excellence
              </h2>
              <p className="text-lg text-muted-foreground">
                Everything you need to create something amazing
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-card border border-border rounded-2xl p-8 space-y-4 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <div className="w-6 h-6 rounded-md bg-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold">Modern Stack</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Built with React, TypeScript, and Tailwind CSS for a robust foundation.
                </p>
              </div>

              <div className="bg-card border border-border rounded-2xl p-8 space-y-4 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <div className="w-6 h-6 rounded-md bg-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold">Responsive Design</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Looks beautiful on every device, from mobile to desktop.
                </p>
              </div>

              <div className="bg-card border border-border rounded-2xl p-8 space-y-4 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <div className="w-6 h-6 rounded-md bg-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold">Ready to Scale</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Architected for growth with best practices baked in.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© {new Date().getFullYear()}</span>
              <span>•</span>
              <span>Built with ❤️ using</span>
              <a 
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== 'undefined' ? window.location.hostname : 'unknown-app')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-foreground hover:text-primary transition-colors"
              >
                caffeine.ai
              </a>
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Terms
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
