import { useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import profile from '../config/profile';
import { useSetState } from '@ervandra/use-setstate';
import { BlurFade } from '../components/ui/blur-fade';

export default function Home() {
  const initialState = {
    isMenuOpen: false,
    isReady: false,
  };

  const { state, setState } = useSetState(initialState);
  const { isMenuOpen, isReady } = state;

  useEffect(() => {
    setTimeout(() => {
      setState({ isReady: true });
    }, 100);
  }, []);

  const calendlyUrl = 'https://calendly.com/ervandra/free-strategy';
  const waUrl = `https://wa.me/${profile.phone.replace('+', '')}`;

  return (
    <div>
      <Head>
        <title>{profile.name} | Strategic Tech Partner</title>
        <meta name="description" content={profile.intro} key="sitedesc" />
        <meta name="author" content={profile.name} />
        <meta name="twitter:card" content="summary" key="twcard" />
        <meta name="twitter:creator" content="@ervandracom" key="twhandle" />
        <meta property="og:image" content="/images/cover.png" key="ogimage" />
        <meta property="og:site_name" content={`${profile.name} | ${profile.mission}`} key="ogsitename" />
        <meta property="og:title" content={`${profile.name} - ${profile.mission}`} key="ogtitle" />
        <meta property="og:description" content={profile.intro} key="ogdesc" />
      </Head>

      <div id="app-container" className={`${isReady ? 'is-ready' : ''} ${isMenuOpen ? 'is-menu-open' : ''}`}>

        {/* ═══════════ HEADER ═══════════ */}
        <header id="header" className={`${isMenuOpen ? '' : 'sticky top-0'} py-3 z-30`}>
          <div className="container mx-auto px-5 md:px-8 xl:px-0 max-w-6xl">
            <div className="flex items-center justify-between">
              <BlurFade delay={0.2} inView>
                <a href="/" className="block">
                  <Image src="/images/logo-5.svg" alt="Ervandra Halim" width="36" height="36" layout="intrinsic" />
                </a>
              </BlurFade>
              <nav id="mainmenu">
                <div className="hidden md:flex items-center">
                  <ul className="m-0 flex items-center">
                    <li className="block ml-8">
                      <BlurFade delay={0.1}><a href="#works">Works</a></BlurFade>
                    </li>
                    <li className="block ml-8">
                      <BlurFade delay={0.15}><a href="#about">About</a></BlurFade>
                    </li>
                    <li className="block ml-8">
                      <BlurFade delay={0.2}><a href="#contact">Contact</a></BlurFade>
                    </li>
                  </ul>
                  <BlurFade delay={0.25}>
                    <a
                      href={calendlyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-8 py-2.5 px-6 rounded-md text-sm font-semibold transition-all duration-300"
                      style={{ backgroundColor: '#1B4D4F', color: '#FAFAF8' }}
                    >
                      Book Call
                    </a>
                  </BlurFade>
                </div>
                <div className="block md:hidden">
                  <BlurFade delay={0.2}>
                    <button
                      className="bg-transparent text-2xl p-2"
                      style={{ width: '44px', height: '44px', border: 'none' }}
                      onClick={() => setState({ isMenuOpen: !isMenuOpen })}
                    >
                      {isMenuOpen ? <span>×</span> : <span className="ehicon-menu" />}
                    </button>
                  </BlurFade>
                </div>
              </nav>
            </div>
          </div>
        </header>

        <section id="content" className="relative overflow-hidden md:-mt-16">

          {/* ═══════════ 1. HERO ═══════════ */}
          <div id="hero" className="py-8 md:py-16 relative min-h-[50vw] wide:min-h-screen flex flex-col justify-center">
            <div className="container mx-auto px-5 md:px-8 xl:px-0 max-w-6xl">
              <div className="py-8 md:py-20 lg:w-7/12">
                <BlurFade delay={0.1}>
                  <p className="text-base mb-4" style={{ color: '#6B7280' }}>
                    👋 Hi, I'm Ervandra Halim.
                  </p>
                </BlurFade>
                <BlurFade delay={0.2} inView>
                  <h1 className="text-3xl md:text-5xl xl:text-6xl mb-6 leading-tight">
                    I Align Technology With<br className="hidden md:block" /> Your Business Growth.
                  </h1>
                </BlurFade>
                <BlurFade delay={0.3} inView>
                  <p className="text-lg md:text-xl mb-3" style={{ color: '#1A1A1A' }}>
                    Strategic tech architecture for founders and business owners who need a partner — not another vendor.
                  </p>
                </BlurFade>
                <BlurFade delay={0.35} inView>
                  <p className="text-base mb-10" style={{ color: '#6B7280' }}>
                    15+ years building systems that scale. From startups to Fortune 500.
                  </p>
                </BlurFade>
                <BlurFade delay={0.4}>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href={calendlyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-3.5 px-8 rounded-md font-semibold text-base text-center transition-all duration-300 hover:opacity-90"
                      style={{ backgroundColor: '#1B4D4F', color: '#FAFAF8' }}
                    >
                      Book Free Strategy Call
                    </a>
                    <a
                      href="#works"
                      className="py-3.5 px-8 rounded-md font-semibold text-base text-center transition-all duration-300 border-2 hover:opacity-80"
                      style={{ borderColor: '#1A1A1A', color: '#1A1A1A' }}
                    >
                      See My Work →
                    </a>
                  </div>
                </BlurFade>
              </div>
            </div>
          </div>

          {/* ═══════════ 2. HOW I WORK ═══════════ */}
          <div id="about" className="py-16 md:py-24">
            <div className="container mx-auto px-5 md:px-8 xl:px-0 max-w-6xl">
              <div className="flex flex-wrap md:flex-nowrap gap-12 md:gap-20 items-start">
                <div className="w-full md:w-4/12 shrink-0">
                  <BlurFade delay={0.2} inView>
                    <div className="w-48 md:w-full mx-auto md:mx-0 mb-6 md:mb-0">
                      <Image
                        src="/images/ervan.png"
                        alt="Ervandra Halim"
                        width={300}
                        height={300}
                        layout="responsive"
                        className="rounded-2xl"
                      />
                    </div>
                  </BlurFade>
                </div>
                <div className="w-full md:w-8/12">
                  <BlurFade delay={0.2} inView>
                    <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#C9973E' }}>
                      How I Work
                    </p>
                  </BlurFade>
                  <BlurFade delay={0.25} inView>
                    <h2 className="text-2xl md:text-4xl mb-6">
                      Technology projects fail not because of bad code — but because of misaligned goals.
                    </h2>
                  </BlurFade>
                  <BlurFade delay={0.3} inView>
                    <p className="text-base mb-10" style={{ color: '#6B7280' }}>
                      I've spent 15 years learning this. Every engagement starts with understanding your business — not your codebase.
                    </p>
                  </BlurFade>

                  <div className="space-y-8">
                    <BlurFade delay={0.35} inView>
                      <div className="flex gap-4">
                        <div className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold" style={{ backgroundColor: '#1B4D4F', color: '#FAFAF8' }}>1</div>
                        <div>
                          <h3 className="text-xl mb-2" style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}>Strategic Before Technical</h3>
                          <p className="text-base" style={{ color: '#6B7280' }}>
                            I start with your business goals, not technology trends. What are you trying to achieve? Where are the bottlenecks? Only then do we talk solutions.
                          </p>
                        </div>
                      </div>
                    </BlurFade>
                    <BlurFade delay={0.4} inView>
                      <div className="flex gap-4">
                        <div className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold" style={{ backgroundColor: '#1B4D4F', color: '#FAFAF8' }}>2</div>
                        <div>
                          <h3 className="text-xl mb-2" style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}>Systems That Scale Without You</h3>
                          <p className="text-base" style={{ color: '#6B7280' }}>
                            Every solution I build is designed to work independently. Documented, maintainable, and structured so your team can operate it — or hand it off entirely.
                          </p>
                        </div>
                      </div>
                    </BlurFade>
                    <BlurFade delay={0.45} inView>
                      <div className="flex gap-4">
                        <div className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold" style={{ backgroundColor: '#1B4D4F', color: '#FAFAF8' }}>3</div>
                        <div>
                          <h3 className="text-xl mb-2" style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}>Transparent Partnerships</h3>
                          <p className="text-base" style={{ color: '#6B7280' }}>
                            Fixed-scope audits, clear pricing, honest capacity communication. I'll tell you if I'm not the right fit. No surprises, no scope creep.
                          </p>
                        </div>
                      </div>
                    </BlurFade>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ═══════════ 3. SERVICES ═══════════ */}
          <div id="services" className="py-16 md:py-24" style={{ backgroundColor: '#F5F3EF' }}>
            <div className="container mx-auto px-5 md:px-8 xl:px-0 max-w-6xl">
              <BlurFade delay={0.2} inView>
                <p className="text-xs font-semibold tracking-widest uppercase mb-4 text-center" style={{ color: '#C9973E' }}>
                  Services
                </p>
              </BlurFade>
              <BlurFade delay={0.25} inView>
                <h2 className="text-2xl md:text-4xl mb-4 text-center">How I Can Help</h2>
              </BlurFade>
              <BlurFade delay={0.3} inView>
                <p className="text-base text-center mb-12 max-w-2xl mx-auto" style={{ color: '#6B7280' }}>
                  Whether you need strategic guidance, hands-on technical leadership, or a system built right — here's how we can work together.
                </p>
              </BlurFade>

              {/* Strategic Engagements */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {[
                  {
                    label: 'Strategic Engagement',
                    title: 'Tech & System Audit',
                    price: 'IDR 5M',
                    priceSuffix: '/ 2 weeks',
                    desc: 'A deep dive into your operations and technology. You get a gap analysis, risk map, and a 90-day action plan — not a generic report.',
                  },
                  {
                    label: 'Strategic Engagement',
                    title: 'Fractional CTO',
                    price: 'IDR 15M',
                    priceSuffix: '/ month',
                    desc: 'Part-time tech leadership for your business. Strategy, architecture, team oversight, vendor management — without the full-time commitment.',
                    featured: true,
                  },
                  {
                    label: 'Strategic Engagement',
                    title: 'AI Implementation',
                    price: 'IDR 10M',
                    priceSuffix: '/ project',
                    desc: 'Custom AI agents, workflow automation, and intelligent systems. Production-ready, not demo-ware.',
                  },
                ].map((service, i) => (
                  <BlurFade key={service.title} delay={0.15 * (i + 1)} inView>
                    <div
                      className="p-7 rounded-xl flex flex-col h-full transition-all duration-300 hover:shadow-lg"
                      style={{
                        backgroundColor: '#FAFAF8',
                        border: service.featured ? '2px solid #C9973E' : '1px solid #E5E2DC',
                      }}
                    >
                      <p className="text-xs font-semibold tracking-wider uppercase mb-4" style={{ color: '#6B7280' }}>
                        {service.label}
                      </p>
                      <h3 className="text-xl mb-2" style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}>
                        {service.title}
                      </h3>
                      <p className="text-sm mb-1 font-semibold" style={{ color: '#1B4D4F' }}>
                        <span className="text-xs font-normal" style={{ color: '#9CA3AF' }}>Starting from </span>
                        {service.price}
                        <span className="font-normal" style={{ color: '#9CA3AF' }}> {service.priceSuffix}</span>
                      </p>
                      <p className="text-sm mt-3 mb-6 flex-grow" style={{ color: '#6B7280' }}>
                        {service.desc}
                      </p>
                      <a
                        href={calendlyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-center py-3 rounded-md text-sm font-semibold transition-all duration-300 hover:opacity-90"
                        style={{ backgroundColor: '#1B4D4F', color: '#FAFAF8' }}
                      >
                        Book Strategy Call
                      </a>
                    </div>
                  </BlurFade>
                ))}
              </div>

              {/* Custom Development */}
              <BlurFade delay={0.5} inView>
                <div
                  className="p-7 md:p-8 rounded-xl flex flex-col md:flex-row items-center justify-between gap-6 mb-8 transition-all duration-300 hover:shadow-lg"
                  style={{ backgroundColor: '#FAFAF8', border: '1px solid #E5E2DC' }}
                >
                  <div>
                    <h3 className="text-xl mb-2" style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}>Custom Development</h3>
                    <p className="text-sm mb-0" style={{ color: '#6B7280' }}>
                      For critical systems that need to be built right. Let's scope it together to see if we're the right fit for your tech needs.
                    </p>
                  </div>
                  <a
                    href={calendlyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 py-3 px-8 rounded-md text-sm font-semibold transition-all duration-300 border-2 whitespace-nowrap hover:opacity-80"
                    style={{ borderColor: '#1A1A1A', color: '#1A1A1A' }}
                  >
                    Let's Scope It
                  </a>
                </div>
              </BlurFade>

              {/* Karya Kilat mention */}
              <BlurFade delay={0.55} inView>
                <p className="text-sm text-center" style={{ color: '#6B7280' }}>
                  Need a premium microsite fast? I also run{' '}
                  <a href="https://karyakilat.com" target="_blank" rel="noopener noreferrer" className="font-semibold underline" style={{ color: '#1A1A1A' }}>
                    KaryaKilat.com
                  </a>
                  {' — '}professionally crafted microsites delivered in 14 days.
                </p>
              </BlurFade>
            </div>
          </div>

          {/* ═══════════ 4. WORK & IMPACT ═══════════ */}
          <div id="works" className="py-16 md:py-24">
            <div className="container mx-auto px-5 md:px-8 xl:px-0 max-w-6xl">
              <BlurFade delay={0.2} inView>
                <p className="text-xs font-semibold tracking-widest uppercase mb-4 text-center" style={{ color: '#C9973E' }}>
                  Work & Impact
                </p>
              </BlurFade>
              <BlurFade delay={0.25} inView>
                <h2 className="text-2xl md:text-4xl mb-4 text-center">Problems Solved, Growth Delivered</h2>
              </BlurFade>
              <BlurFade delay={0.3} inView>
                <p className="text-base text-center mb-12 max-w-2xl mx-auto" style={{ color: '#6B7280' }}>
                  I don't just write code — I partner with businesses to solve real problems. Here's what that looks like.
                </p>
              </BlurFade>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {profile.caseStudies.map((study, i) => (
                  <BlurFade key={study.company} delay={0.15 * (i + 1)} inView>
                    <div
                      className="p-7 rounded-xl h-full transition-all duration-300 hover:shadow-lg"
                      style={{ backgroundColor: '#F5F3EF', border: '1px solid #E5E2DC' }}
                    >
                      <h3 className="text-xl mb-5" style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}>
                        {study.company}
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <p className="text-xs font-semibold tracking-wider uppercase mb-1.5" style={{ color: '#C9973E' }}>
                            The Challenge
                          </p>
                          <p className="text-sm" style={{ color: '#6B7280' }}>{study.challenge}</p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold tracking-wider uppercase mb-1.5" style={{ color: '#1B4D4F' }}>
                            The Impact
                          </p>
                          <p className="text-sm font-semibold" style={{ color: '#1A1A1A' }}>{study.impact}</p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold tracking-wider uppercase mb-1.5" style={{ color: '#6B7280' }}>
                            My Role
                          </p>
                          <p className="text-sm" style={{ color: '#6B7280' }}>{study.role}</p>
                        </div>
                      </div>
                    </div>
                  </BlurFade>
                ))}
              </div>

              {/* Logo strip */}
              <BlurFade delay={0.6} inView>
                <div className="mb-8">
                  <p className="text-center text-xs font-semibold tracking-widest uppercase mb-6" style={{ color: '#9CA3AF' }}>
                    Trusted by teams at
                  </p>
                  <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 px-4">
                    {profile.trustedBy.map((name) => (
                      <span key={name} className="text-lg font-semibold" style={{ color: '#C4C0B8' }}>{name}</span>
                    ))}
                  </div>
                </div>
              </BlurFade>

              {/* <div className="text-center">
                <BlurFade delay={0.65} inView>
                  <a href="/works" className="inline-block font-semibold text-base pb-1 transition-colors duration-300 hover:opacity-70" style={{ color: '#1A1A1A', borderBottom: '2px solid #1A1A1A' }}>
                    See All Case Studies →
                  </a>
                </BlurFade>
              </div> */}
            </div>
          </div>

          {/* ═══════════ 5. TESTIMONIALS ═══════════ */}
          <div id="testimonials" className="py-16 md:py-24" style={{ backgroundColor: '#F5F3EF' }}>
            <div className="container mx-auto px-5 md:px-8 xl:px-0 max-w-6xl">
              <BlurFade delay={0.2} inView>
                <p className="text-xs font-semibold tracking-widest uppercase mb-4 text-center" style={{ color: '#C9973E' }}>
                  Testimonials
                </p>
              </BlurFade>
              <BlurFade delay={0.25} inView>
                <h2 className="text-2xl md:text-4xl mb-12 text-center">What They Say</h2>
              </BlurFade>

              {/* Featured testimonial — Jussi */}
              {profile.testimonials.filter(t => t.featured).map((t) => (
                <BlurFade key={t.name} delay={0.3} inView>
                  <div className="max-w-3xl mx-auto mb-16 text-center">
                    <div className="text-6xl mb-4 leading-none" style={{ color: '#C9973E', fontFamily: "'Instrument Serif', Georgia, serif" }}>"</div>
                    <p className="text-lg md:text-xl mb-6 italic leading-relaxed" style={{ color: '#1A1A1A' }}>
                      {t.text.replace(/\n\n/g, ' ')}
                    </p>
                    <div className="flex items-center justify-center gap-4">
                      <div className="w-14 h-14 rounded-full overflow-hidden shadow-md">
                        <Image src={t.photo} alt={t.name} width={56} height={56} layout="responsive" className="rounded-full" />
                      </div>
                      <div className="text-left">
                        <p className="font-semibold text-base mb-0" style={{ color: '#1A1A1A' }}>{t.name}</p>
                        <p className="text-sm mb-0" style={{ color: '#6B7280' }}>{t.role}</p>
                      </div>
                    </div>
                  </div>
                </BlurFade>
              ))}

              {/* Remaining testimonials — horizontal scroll */}
              <div className="overflow-x-auto -mx-5 md:-mx-8 xl:mx-0">
                <div className="flex gap-6 px-5 md:px-8 xl:px-0" style={{ minWidth: 'min-content' }}>
                  {profile.testimonials.filter(t => !t.featured).map((t, i) => (
                    <BlurFade key={t.name} delay={0.15 * (i + 1)} inView>
                      <div
                        className="w-[320px] md:w-[380px] shrink-0 p-6 rounded-xl transition-all duration-300 hover:shadow-lg"
                        style={{ backgroundColor: '#FAFAF8', border: '1px solid #E5E2DC' }}
                      >
                        <div className="text-3xl mb-3 leading-none" style={{ color: '#C9973E', fontFamily: "'Instrument Serif', Georgia, serif" }}>"</div>
                        <p className="text-sm italic mb-5 leading-relaxed" style={{ color: '#4B5563' }}>
                          {t.text.length > 250 ? t.text.substring(0, 250).replace(/\n\n/g, ' ') + '...' : t.text.replace(/\n\n/g, ' ')}
                        </p>
                        <div className="flex items-center gap-3 pt-4" style={{ borderTop: '1px solid #E5E2DC' }}>
                          <div className="w-10 h-10 rounded-full overflow-hidden shadow-sm">
                            <Image src={t.photo} alt={t.name} width={40} height={40} layout="responsive" className="rounded-full" />
                          </div>
                          <div>
                            <p className="font-semibold text-sm mb-0" style={{ color: '#1A1A1A' }}>{t.name}</p>
                            <p className="text-xs mb-0" style={{ color: '#6B7280' }}>{t.role}</p>
                          </div>
                        </div>
                      </div>
                    </BlurFade>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ═══════════ 6. AVAILABILITY ═══════════ */}
          <div id="availability" className="py-16 md:py-24">
            <div className="container mx-auto px-5 md:px-8 xl:px-0 max-w-6xl">
              <BlurFade delay={0.2} inView>
                <p className="text-xs font-semibold tracking-widest uppercase mb-4 text-center" style={{ color: '#C9973E' }}>
                  Availability
                </p>
              </BlurFade>
              <BlurFade delay={0.25} inView>
                <h2 className="text-2xl md:text-4xl mb-12 text-center">Current Capacity</h2>
              </BlurFade>

              <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                <BlurFade delay={0.3} inView>
                  <div className="p-6 rounded-xl h-full" style={{ backgroundColor: '#F5F3EF', border: '1px solid #E5E2DC' }}>
                    <h3 className="text-lg mb-4 pb-3" style={{ fontFamily: "'Instrument Serif', Georgia, serif", borderBottom: '1px solid #E5E2DC' }}>Currently</h3>
                    <ul className="space-y-2.5 list-none p-0 m-0">
                      <li className="text-sm" style={{ color: '#6B7280' }}>• Co-founder & CTO at Syntax Solution</li>
                      <li className="text-sm" style={{ color: '#6B7280' }}>• Growing KaryaKilat premium service</li>
                      <li className="text-sm" style={{ color: '#6B7280' }}>• Select consulting engagements (NDA)</li>
                    </ul>
                  </div>
                </BlurFade>
                <BlurFade delay={0.35} inView>
                  <div className="p-6 rounded-xl h-full" style={{ backgroundColor: '#FAFAF8', border: '2px solid #1B4D4F' }}>
                    <h3 className="text-lg mb-4 pb-3" style={{ fontFamily: "'Instrument Serif', Georgia, serif", color: '#1B4D4F', borderBottom: '2px solid #1B4D4F' }}>Open For</h3>
                    <ul className="space-y-2.5 list-none p-0 m-0">
                      <li className="text-sm" style={{ color: '#1A1A1A' }}>• 1–2 fractional CTO partnerships (8–12 hrs/week)</li>
                      <li className="text-sm" style={{ color: '#1A1A1A' }}>• Systems audit projects (2-week sprints)</li>
                      <li className="text-sm" style={{ color: '#1A1A1A' }}>• AI implementation (scoped, project-based)</li>
                      <li className="text-sm" style={{ color: '#1A1A1A' }}>• Custom development for critical paths</li>
                    </ul>
                  </div>
                </BlurFade>
                <BlurFade delay={0.4} inView>
                  <div className="p-6 rounded-xl h-full" style={{ backgroundColor: '#F5F3EF', border: '1px solid #E5E2DC' }}>
                    <h3 className="text-lg mb-4 pb-3" style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}>Not the Right Fit If You Need</h3>
                    <ul className="space-y-2.5 list-none p-0 m-0">
                      <li className="text-sm" style={{ color: '#6B7280' }}>• Full-time employment</li>
                      <li className="text-sm" style={{ color: '#6B7280' }}>• 24/7 support or maintenance-only</li>
                      <li className="text-sm" style={{ color: '#6B7280' }}>• Execution without strategic input</li>
                    </ul>
                  </div>
                </BlurFade>
              </div>

              <BlurFade delay={0.5} inView>
                <p className="max-w-2xl mx-auto mt-12 text-center text-base italic" style={{ color: '#6B7280' }}>
                  "If your needs align, let's talk. If I'm not the right fit, I'll tell you upfront — and recommend someone better."
                </p>
              </BlurFade>
            </div>
          </div>

          {/* ═══════════ 7. FINAL CTA ═══════════ */}
          <div id="contact" className="py-16 md:py-24" style={{ backgroundColor: '#1A1A1A' }}>
            <div className="container mx-auto px-5 md:px-8 xl:px-0 max-w-3xl text-center">
              <BlurFade delay={0.2} inView>
                <h2 className="text-2xl md:text-4xl mb-4" style={{ color: '#FAFAF8' }}>
                  Ready to align your technology with growth?
                </h2>
              </BlurFade>
              <BlurFade delay={0.3} inView>
                <p className="text-base mb-10" style={{ color: '#9CA3AF' }}>
                  I'll tell you upfront if I'm not the right fit — and point you somewhere better if I'm not.
                </p>
              </BlurFade>
              <BlurFade delay={0.4} inView>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href={calendlyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3.5 px-8 rounded-md font-semibold text-base text-center transition-all duration-300 hover:opacity-90 w-full sm:w-auto"
                    style={{ backgroundColor: '#C9973E', color: '#FAFAF8' }}
                  >
                    Book Free 45-Min Call
                  </a>
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3.5 px-8 rounded-md font-semibold text-base text-center transition-all duration-300 border-2 w-full sm:w-auto hover:opacity-80"
                    style={{ borderColor: '#6B7280', color: '#FAFAF8' }}
                  >
                    Message on WhatsApp
                  </a>
                </div>
              </BlurFade>
            </div>
          </div>
        </section>

        {/* ═══════════ FOOTER ═══════════ */}
        <footer id="footer" className="py-6">
          <div className="container mx-auto px-5 md:px-8 xl:px-0 max-w-6xl">
            <div className="social-footer">
              <ul className="m-0 p-0 flex justify-center py-2 mb-3">
                {profile.socialLinks.map((social, index) => (
                  <li className="block px-3" key={social.icon + index}>
                    <a href={social.link} target="_blank" rel="noopener noreferrer" title={social.id}>
                      <span className={`ehicon-${social.icon}`} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center">
              <p className="mb-0 text-sm flex items-center justify-center" style={{ color: '#6B7280' }}>
                <span>©2011-{new Date().getFullYear()}</span>
                <strong className="flex items-center justify-center mx-2" style={{ color: '#9CA3AF' }}>
                  Ervandra Halim <span className="ml-1">⚡️</span>
                </strong>
              </p>
            </div>
          </div>
        </footer>

        {/* Side elements (desktop) */}
        <div className="side-elements left">
          <BlurFade delay={0.3} inView offset={20}>
            <ul className="social-list side-element-item">
              {profile.socialLinks.map((social, index) => (
                <li key={social.icon + index}>
                  <BlurFade delay={0.1 * index + 0.3} inView>
                    <a href={social.link} target="_blank" rel="noopener noreferrer" title={social.id}>
                      <span className={`ehicon-${social.icon}`} />
                    </a>
                  </BlurFade>
                </li>
              ))}
            </ul>
          </BlurFade>
        </div>

        <div className="side-elements right">
          <BlurFade delay={0.3} inView offset={20}>
            <div className="email-link side-element-item">
              <a href="mailto:hi@ervandra.com" target="_blank" rel="noopener noreferrer">
                <BlurFade delay={0.3} inView offset={-10}>
                  hi@ervandra.com
                </BlurFade>
              </a>
            </div>
          </BlurFade>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="menu-mobile-overlay" onClick={() => setState({ isMenuOpen: false })}>&nbsp;</div>
        )}

        <div id="menu-mobile" className={`${isMenuOpen ? 'active' : ''}`}>
          <div>
            <div className="flex justify-end items-center p-2 mb-4 -mr-2 -mt-2">
              <button
                aria-label="Close"
                className="bg-transparent p-0 text-center text-2xl"
                style={{ width: '40px', height: '40px', border: 'none' }}
                onClick={() => setState({ isMenuOpen: false })}
              >
                <span className="ehicon-close" />
              </button>
            </div>
            <ul className="m-0 p-0 block mb-8" onClick={() => setState({ isMenuOpen: false })}>
              {[
                { label: 'How I Work', href: '#about' },
                { label: 'Services', href: '#services' },
                { label: 'Work & Impact', href: '#works' },
                { label: 'Testimonials', href: '#testimonials' },
                { label: 'Availability', href: '#availability' },
                { label: 'Contact', href: '#contact' },
              ].map((item, i) => (
                <li className="block mb-4" key={item.href}>
                  <BlurFade delay={0.1 * (i + 1)}>
                    <a className="block text-base font-medium" style={{ textDecoration: 'none', color: '#1A1A1A' }} href={item.href}>
                      {item.label}
                    </a>
                  </BlurFade>
                </li>
              ))}
            </ul>
            <BlurFade delay={0.5}>
              <a
                href={calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3 rounded-md font-semibold text-center text-base"
                style={{ backgroundColor: '#1B4D4F', color: '#FAFAF8', textDecoration: 'none' }}
              >
                Book Call ↗
              </a>
            </BlurFade>
          </div>
        </div>
      </div>
    </div>
  );
}
