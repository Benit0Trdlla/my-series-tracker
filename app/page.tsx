import type { ReactNode } from "react";

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    title: "Watchlist",
    desc: "Build your personal queue of series and movies you want to watch"
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    title: "Track Progress",
    desc: "Mark episodes as watched and keep track of your viewing progress"
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    title: "Discover",
    desc: "Find new series and movies based on your viewing preferences"
  }
];

const demoItems = [
  { title: "Breaking Bad", year: "2008", rating: "9.5", genre: "Drama", color: "from-emerald-600 to-teal-800" },
  { title: "The Dark Knight", year: "2008", rating: "9.0", genre: "Action", color: "from-slate-700 to-zinc-900" },
  { title: "Severance", year: "2025", rating: "8.9", genre: "Thriller", color: "from-indigo-700 to-purple-900" }
];

function DemoCard({ item }: { item: typeof demoItems[number] }): ReactNode {
  return (
    <div className="group relative aspect-[2/3] rounded-xl overflow-hidden cursor-pointer">
      <div className={`absolute inset-0 bg-gradient-to-br ${item.color}`} />
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h3 className="text-lg font-semibold text-white">{item.title}</h3>
        <div className="flex items-center gap-3 mt-1">
          <span className="text-xs text-zinc-400">{item.year}</span>
          <span className="text-xs text-amber-400">★ {item.rating}</span>
        </div>
        <span className="inline-block mt-2 px-2 py-0.5 text-xs bg-white/10 rounded text-zinc-300">{item.genre}</span>
      </div>
    </div>
  );
}

function FeatureCard({ feature }: { feature: typeof features[number] }): ReactNode {
  return (
    <div className="group p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-amber-500/30 transition-all duration-500 hover:-translate-y-2">
      <div className="w-12 h-12 rounded-xl bg-amber-600/20 text-amber-500 flex items-center justify-center mb-6 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
        {feature.icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-zinc-100">{feature.title}</h3>
      <p className="text-zinc-400 leading-relaxed">{feature.desc}</p>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white overflow-hidden">
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(180,120,60,0.15)_0%,_transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,_transparent_0%,_rgba(10,10,10,0.8)_100%)]" />
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <header className="relative z-10 flex items-center justify-between px-8 py-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-600 to-orange-800 flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4 3h16a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1zm1 2v14h14V5H5zm2 2h10v2H7V7zm0 4h10v2H7v-2zm0 4h7v2H7v-2z"/>
            </svg>
          </div>
          <span className="text-lg font-semibold tracking-wide text-zinc-200">My Series Tracker</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm text-zinc-400 hover:text-amber-500 transition-colors duration-300">Features</a>
          <a href="#about" className="text-sm text-zinc-400 hover:text-amber-500 transition-colors duration-300">About</a>
          <button className="px-5 py-2 text-sm font-medium bg-zinc-100 text-zinc-900 rounded-full hover:bg-amber-500 hover:text-white transition-all duration-300">
            Get Started
          </button>
        </nav>
      </header>

      <section className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] px-8 text-center">
        <div className="max-w-4xl">
          <p 
            className="mb-6 text-sm font-medium tracking-[0.3em] uppercase text-amber-500/80 animate-fade-in"
            style={{ animationDelay: '0.1s' }}
          >
            Your Personal Watchlist
          </p>
          <h1 
            className="mb-8 text-6xl md:text-8xl font-bold leading-[0.95] tracking-tight animate-slide-up"
            style={{ animationDelay: '0.2s' }}
          >
            Never miss a <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600">
              great moment
            </span>
          </h1>
          <p 
            className="max-w-xl mx-auto mb-12 text-lg text-zinc-400 leading-relaxed animate-slide-up"
            style={{ animationDelay: '0.4s' }}
          >
            Track your favorite TV series and movies in one beautiful place. 
            Build your watchlist, mark what you've seen, and discover your next obsession.
          </p>
          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in"
            style={{ animationDelay: '0.6s' }}
          >
            <button className="group relative px-8 py-4 bg-amber-600 text-white font-medium rounded-full overflow-hidden transition-all duration-300 hover:bg-amber-700 hover:scale-105">
              <span className="relative z-10">Start Tracking Free</span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            <button className="group flex items-center gap-3 px-8 py-4 text-zinc-300 font-medium rounded-full border border-zinc-700 hover:border-amber-500/50 hover:text-white transition-all duration-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
              Watch Demo
            </button>
          </div>
        </div>

        <div 
          className="mt-20 w-full max-w-5xl animate-float"
          style={{ animationDelay: '0.8s' }}
        >
          <div className="relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900/50 backdrop-blur-xl shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-10" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
              {demoItems.map((item, i) => (
                <DemoCard key={i} item={item} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="relative z-10 py-32 px-8">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-medium tracking-[0.2em] text-amber-500/80 mb-4 text-center">FEATURES</p>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">Everything you need</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <FeatureCard key={i} feature={feature} />
            ))}
          </div>
        </div>
      </section>

      <footer className="relative z-10 py-12 px-8 border-t border-zinc-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-600 to-orange-800 flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4 3h16a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1zm1 2v14h14V5H5zm2 2h10v2H7V7zm0 4h10v2H7v-2zm0 4h7v2H7v-2z"/>
              </svg>
            </div>
            <span className="text-zinc-400 text-sm">My Series Tracker</span>
          </div>
          <p className="text-zinc-500 text-sm">© 2025 My Series Tracker. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
