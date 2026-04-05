import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

const DISCORD = 'https://discord.gg/BkcnpZRZ';
const HERO_IMG = 'https://media.base44.com/images/public/69d2df5abf36cf311f3b19a7/5b227272e_generated_291da888.png';
const COMMUNITY_IMG = 'https://media.base44.com/images/public/69d2df5abf36cf311f3b19a7/d9f63c458_generated_2a05fba8.png';

const DiscordIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z"/>
  </svg>
);

// ─── Navbar ───────────────────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const links = [
    { label: 'Features', href: '#features' },
    { label: 'Our Promise', href: '#promise' },
    { label: 'Community', href: '#community' },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#080c14]/90 backdrop-blur-2xl border-b border-white/5 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 to-indigo-500 flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-shadow">
            <span className="font-bold text-white text-base leading-none">S</span>
          </div>
          <span className="font-bold text-white text-lg hidden sm:block tracking-tight">
            Skyline <span className="text-cyan-400">Legacy</span>
          </span>
        </a>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.label} href={l.href}
              className="text-white/50 hover:text-white text-sm font-medium transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a href={DISCORD} target="_blank" rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 px-4 py-2 rounded-xl bg-[#5865F2] hover:bg-[#4752C4] text-white text-sm font-semibold transition-colors shadow-lg shadow-indigo-500/20">
          <DiscordIcon className="w-4 h-4" />
          Join Discord
        </a>

        {/* Hamburger */}
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-white/70 hover:text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mx-4 mt-2 rounded-2xl bg-[#0d1220]/95 backdrop-blur-xl border border-white/10 p-5 flex flex-col gap-4"
          >
            {links.map(l => (
              <a key={l.label} href={l.href} onClick={() => setOpen(false)}
                className="text-white/70 hover:text-white font-medium py-1 transition-colors">
                {l.label}
              </a>
            ))}
            <a href={DISCORD} target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 rounded-xl bg-[#5865F2] text-white font-semibold">
              <DiscordIcon className="w-5 h-5" /> Join Discord
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const pills = ['Public Survival', 'No Unnecessary Wipes', 'Player Economy', 'Land Claims'];

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax BG */}
      <motion.div style={{ y }} className="absolute inset-0 z-0 scale-110">
        <img src={HERO_IMG} alt="Skyline Legacy World" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080c14] via-[#080c14]/50 to-[#080c14]/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080c14]/60 via-transparent to-[#080c14]/60" />
      </motion.div>

      {/* Noise texture overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.03]"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")", backgroundSize: '200px' }} />

      {/* Glow orbs */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />

      <motion.div style={{ opacity }} className="relative z-10 max-w-4xl mx-auto px-5 text-center pt-28 pb-20">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 text-yellow-300 text-sm font-medium mb-8 backdrop-blur-sm"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
          Coming Soon — Currently in Development
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter leading-none mb-6"
        >
          <span className="text-white">Skyline</span>
          <br />
          <span
            className="text-transparent bg-clip-text"
            style={{ backgroundImage: 'linear-gradient(135deg, #22d3ee 0%, #6366f1 50%, #22d3ee 100%)', backgroundSize: '200% auto', animation: 'shimmer 4s linear infinite' }}
          >
            Legacy SMP
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }}
          className="text-white/60 text-lg sm:text-xl max-w-xl mx-auto mb-10 leading-relaxed"
        >
          A permanent survival server where your builds, your progress, and your story matter — forever.
        </motion.p>

        {/* Pills */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {pills.map((p, i) => (
            <span key={p}
              className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm font-medium backdrop-blur-sm">
              {p}
            </span>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.55 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href={DISCORD} target="_blank" rel="noopener noreferrer"
            className="group flex items-center gap-3 px-8 py-4 rounded-2xl bg-[#5865F2] hover:bg-[#4752C4] text-white font-bold text-lg transition-all shadow-2xl shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:-translate-y-0.5">
            <DiscordIcon className="w-6 h-6" />
            Join Discord for Updates
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
          className="mt-5 text-white/30 text-sm font-mono">
          Java Edition • 1.21.1 • Release date TBA
        </motion.p>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.6 }}
          className="w-5 h-8 rounded-full border-2 border-white/20 flex items-start justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-white/40" />
        </motion.div>
      </motion.div>

      <style>{`
        @keyframes shimmer { 0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%} }
      `}</style>
    </section>
  );
}

// ─── Feature Card ─────────────────────────────────────────────────────────────
function FeatureCard({ icon, title, description, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -4 }}
      className="group relative rounded-2xl border border-white/8 bg-white/[0.03] p-6 overflow-hidden hover:border-cyan-500/30 transition-colors"
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-cyan-500/5 to-indigo-500/5" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
      <div className="w-12 h-12 rounded-xl mb-5 flex items-center justify-center bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 text-2xl">
        {icon}
      </div>
      <h3 className="font-bold text-white text-base mb-2">{title}</h3>
      <p className="text-white/45 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
}

// ─── Features Section ─────────────────────────────────────────────────────────
function Features() {
  const items = [
    { icon: '🛡️', title: 'No Unnecessary Wipes', description: 'We learned the hard way. Your progress is sacred — we only wipe as an absolute last resort.' },
    { icon: '🏰', title: 'Land Claiming', description: 'Protect everything you build with our advanced grief-proof claim system.' },
    { icon: '⚖️', title: 'Active Moderation', description: 'Dedicated staff and anti-cheat keeping the playing field fair around the clock.' },
    { icon: '🏪', title: 'Player Economy', description: 'Open your own shop, trade with others, and build a real economic legacy.' },
    { icon: '🎉', title: 'Events & Content', description: 'Regular in-game events and seasonal content — no progress ever wiped to make room.' },
    { icon: '⚔️', title: 'Teams & PvP Zones', description: 'Form alliances, dominate in designated PvP zones, or farm in complete peace.' },
  ];

  return (
    <section id="features" className="relative py-32">
      {/* Separator line glow */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-4">Server Features</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-5">
            Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">Long-Term</span> Play
          </h2>
          <p className="text-white/45 text-lg max-w-xl mx-auto">
            Every system is designed around one idea: your time is valuable, and it should count.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item, i) => (
            <FeatureCard key={item.title} {...item} delay={i * 0.06} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Promise Section ──────────────────────────────────────────────────────────
function Promise() {
  const cards = [
    { icon: '∞', title: 'Your Legacy, Preserved', text: 'Every block placed is permanent. We protect your progress as a core server principle.' },
    { icon: '⏱', title: 'Time Well Invested', text: "We've felt the pain of losing progress to a wipe. That experience built this server." },
    { icon: '🏆', title: 'Real Achievements', text: 'Build empires, trade routes, landmarks. Your wins become part of server history.' },
    { icon: '🤝', title: 'Genuine Community', text: 'Long-term players build real bonds. Here, alliances last years — not just one season.' },
  ];

  return (
    <section id="promise" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/30 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-4">The Legacy Promise</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-5">
            Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">Skyline Legacy</span>?
          </h2>
          <p className="text-white/45 text-lg max-w-xl mx-auto">
            We built this server because we believe your time should never go to waste.
          </p>
        </motion.div>

        {/* Big manifesto card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
          className="relative rounded-3xl border border-white/8 bg-white/[0.03] p-10 sm:p-14 mb-10 overflow-hidden"
        >
          {/* Corner glow */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl" />

          <div className="relative grid md:grid-cols-2 gap-12 items-center">
            {/* Visual side */}
            <div className="flex items-center justify-center">
              <div className="relative w-56 h-56">
                {[0, 1, 2].map(i => (
                  <div key={i}
                    className="absolute inset-0 rounded-full border border-cyan-400/20 animate-ping"
                    style={{ animationDelay: `${i * 0.8}s`, animationDuration: '3s', inset: `${i * 16}px` }} />
                ))}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-cyan-400 to-indigo-500 flex items-center justify-center shadow-2xl shadow-cyan-500/30 rotate-12">
                    <span className="text-4xl -rotate-12">∞</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Text side */}
            <div>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-5">
                We Learned.<br />
                <span className="text-cyan-400">We Won't Repeat It.</span>
              </h3>
              <p className="text-white/55 text-base leading-relaxed mb-4">
                We've made the mistake of wiping player progress before — and we know exactly how devastating that feels. Skyline Legacy was built <em>because</em> of that experience.
              </p>
              <p className="text-white/55 text-base leading-relaxed mb-8">
                Your castle, your farm, your underground base — they stay. We will only ever consider a wipe as an absolute last resort, and we'd always give you fair warning first.
              </p>
              <div className="flex items-center gap-3">
                <div className="h-px w-12 bg-gradient-to-r from-cyan-400 to-indigo-400" />
                <span className="text-white/40 text-sm">A promise built from real experience</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Reason cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map((c, i) => (
            <motion.div key={c.title}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group rounded-2xl border border-white/8 bg-white/[0.03] p-6 hover:border-indigo-400/30 transition-colors"
            >
              <div className="text-3xl mb-4">{c.icon}</div>
              <h4 className="font-bold text-white text-sm mb-2">{c.title}</h4>
              <p className="text-white/40 text-sm leading-relaxed">{c.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Discord / Community ──────────────────────────────────────────────────────
function Community() {
  const channels = ['# announcements', '# general-chat', '# looking-for-team', '# build-showcase', '# support'];

  return (
    <section id="community" className="relative py-32">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-5">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-4">Community Hub</p>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
              Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">Discord</span>
            </h2>
            <p className="text-white/50 text-lg leading-relaxed mb-10">
              Get server updates the moment they drop, find teammates, share your builds, 
              and become part of the community before we even launch.
            </p>

            <div className="space-y-5 mb-10">
              {[
                { icon: '💬', label: 'Active Chat', sub: '24/7 community discussions' },
                { icon: '👥', label: 'Find Teams', sub: 'Connect with other players' },
                { icon: '🔔', label: 'Get Updates', sub: 'Server news & launch announcements' },
              ].map(f => (
                <div key={f.label} className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center text-xl flex-shrink-0">
                    {f.icon}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{f.label}</p>
                    <p className="text-white/40 text-sm">{f.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            <a href={DISCORD} target="_blank" rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-7 py-4 rounded-2xl bg-[#5865F2] hover:bg-[#4752C4] text-white font-bold text-base transition-all shadow-xl shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5">
              <DiscordIcon className="w-5 h-5" />
              Join the Discord
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </motion.div>

          {/* Right */}
          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}>
            {/* Discord preview card */}
            <div className="rounded-3xl border border-white/8 bg-[#0d1117] overflow-hidden shadow-2xl">
              {/* Header */}
              <div className="p-6 border-b border-white/5 flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400 to-indigo-500 flex items-center justify-center font-bold text-xl text-white shadow-lg shadow-cyan-500/20">
                  S
                </div>
                <div>
                  <p className="font-bold text-white">Skyline Legacy SMP</p>
                  <p className="text-white/40 text-sm flex items-center gap-1.5 mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
                    Growing community
                  </p>
                </div>
              </div>

              {/* Channels */}
              <div className="p-4 space-y-1">
                <p className="text-white/25 text-xs font-semibold uppercase tracking-wider px-2 mb-2">Text Channels</p>
                {channels.map((ch, i) => (
                  <div key={ch}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      i === 0 ? 'bg-white/10 text-white' : 'text-white/40 hover:bg-white/5 hover:text-white/70'
                    }`}>
                    {ch}
                  </div>
                ))}
              </div>

              {/* Community image */}
              <div className="mx-4 mb-4 rounded-xl overflow-hidden">
                <img src={COMMUNITY_IMG} alt="Community" className="w-full h-40 object-cover opacity-80" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  const links = [
    { label: 'Discord', href: DISCORD },
    { label: 'Rules', href: 'https://play.skylinesmp.net/rules.html' },
    { label: 'Wiki', href: '#' },
  ];

  return (
    <footer className="border-t border-white/8 py-14">
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 to-indigo-500 flex items-center justify-center font-bold text-white">S</div>
            <span className="font-bold text-white tracking-tight">Skyline <span className="text-cyan-400">Legacy</span></span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-7">
            {links.map(l => (
              <a key={l.label} href={l.href}
                target={l.href.startsWith('http') ? '_blank' : undefined}
                rel={l.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="text-white/40 hover:text-white text-sm transition-colors">
                {l.label}
              </a>
            ))}
          </div>

          {/* Version */}
          <p className="text-white/25 text-sm font-mono">Java 1.21.1 • play.skylinesmp.net</p>
        </div>

        <div className="mt-10 pt-8 border-t border-white/5 text-center text-white/20 text-sm">
          © {new Date().getFullYear()} Skyline Legacy SMP. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div className="min-h-screen bg-[#080c14] text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <Promise />
      <Community />
      <Footer />
    </div>
  );
}
