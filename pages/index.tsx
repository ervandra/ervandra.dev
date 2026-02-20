import { useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import profile from '../config/profile';
import Modal from 'react-modal';
import { useSetState } from '@ervandra/use-setstate';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Pulse from 'react-reveal/Pulse';
import Flash from 'react-reveal/Flash';
import Bounce from 'react-reveal/Bounce';
import Accordion from '../components/molecules/Accordion/Accordion';

import { subscribeForm } from '../libs/apis';

export default function Home() {
  const initialState = {
    isOpen: false,
    name: '',
    email: '',
    isLoading: false,
    isError: false,
    success: false,
    workTab: 0,
    isMenuOpen: false,
    isReady: false,
  };

  const { state, setState } = useSetState(initialState);
  const { isOpen, name, email, isLoading, isMenuOpen, success, workTab, isReady } = state;
  const handleSubmit = async e => {
    e.preventDefault();
    setState({ isLoading: true, isError: false, success: false });
    const payload = {
      lists: process.env.NEXT_PUBLIC_KE_LIST_ID,
      email,
      full_name: name,
      tags: 'dev-strategy, via-api',
    };
    await subscribeForm(payload)
      .then(resp => {
        if (resp.status === 200) {
          setState({ success: true, name: '', email: '' });
        }
      })
      .catch(err => {
        console.log('errors,', err);
        setState({ isError: true });
      })
      .finally(() => setState({ isLoading: false }));
  };
  useEffect(() => {
    setTimeout(() => {
      setState({ isReady: true });
    }, 100);
  }, []);
  return (
    <div>
      <Head>
        <title>
          {profile.name} | Strategic Systems Architect & Tech Partner
        </title>
        <meta name="description" content={profile.intro} key="sitedesc" />
        <meta name="author" content={profile.name} />
        <meta name="twitter:card" content="summary" key="twcard" />
        <meta name="twitter:creator" content="@ervandracom" key="twhandle" />
        <meta property="og:image" content="/images/cover.png" key="ogimage" />
        <meta
          property="og:site_name"
          content={`${profile.name} | ${profile.mission}`}
          key="ogsitename"
        />
        <meta property="og:title" content={`${profile.name} - ${profile.mission}`} key="ogtitle" />
        <meta property="og:description" content={profile.intro} key="ogdesc" />
      </Head>
      <div
        id="app-container"
        className={`${isReady ? 'is-ready' : ''} ${isMenuOpen ? 'is-menu-open' : ''}`}>
        <Bounce top duration={100}>
          <header
            id="header"
            className={`${isMenuOpen ? '' : 'sticky top-0'} shadow py-2`}
            style={{ backdropFilter: 'blur(5px)' }}>
            <div className="container-fluid container mx-auto">
              <div className="row">
                <div className="col-12">
                  <div className="flex items-center justify-between mx-5 md:mx-0">
                    <Zoom right duration={300}>
                      <div className="logo text-black h-10 my-2">
                        <Image
                          src="/images/logo-5.svg"
                          alt="Ervandra Halim"
                          width="40"
                          height="40"
                          layout="intrinsic"
                          className="block"
                        />
                      </div>
                    </Zoom>
                    <nav id="mainmenu">
                      <div className="hidden md:flex justify-end items-center">
                        <ul className="m-0 mr-4 flex">
                          <li className="block ml-4 md:ml-10">
                            <Fade left duration={100}>
                              <a className="text-decoration-none" href="/works">
                                Works
                              </a>
                            </Fade>
                          </li>

                          <li className="block ml-4 md:ml-10">
                            <Fade left delay={100} duration={100}>
                              <a className="text-decoration-none" href="#about">
                                About
                              </a>
                            </Fade>
                          </li>
                          <li className="block ml-4 md:ml-10">
                            <Fade left delay={300} duration={100}>
                              <a className="text-decoration-none" href="#contact">
                                Contact
                              </a>
                            </Fade>
                          </li>
                        </ul>
                        <Zoom delay={300} duration={100}>
                          <a
                            href="https://calendly.com/ervandra/free-strategy"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-4 p-2 px-4 rounded bg-black text-white text-decoration-none inline-block">
                            Book Call
                            <span className="animate-pulse ml-2">📞</span>
                          </a>
                        </Zoom>
                      </div>
                      <div className="block md:hidden">
                        <Zoom delay={300}>
                          <button
                            className="btn bg-transparent text-2xl text-primary"
                            onClick={() => setState({ isMenuOpen: !isMenuOpen })}
                            style={{ width: '48px', height: '48px' }}>
                            {isMenuOpen ? <span>×</span> : <span className="ehicon-menu" />}
                          </button>
                        </Zoom>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </Bounce>

        <section id="content" className="px-5 md:px-0 relative overflow-hidden md:-mt-18">
          <div
            id="hero"
            className="py-4 md:py-10 bg-opacity-10 relative wide:min-h-screen min-h-[50vw] flex flex-col justify-center">
            <div className="container mx-auto">
              <div className="py-5 md:py-20 lg:w-1/2">
                <div className="">
                  <Fade duration={100}>
                    <h2 className="text-base text-gray-900 mb-4">
                      <span
                        className="mr-2 inline-block text-2xl animate-bounce relative"
                        role="emoji">
                        👋🏻
                      </span>{' '}
                      Hi, i am Ervandra Halim.
                    </h2>
                  </Fade>
                  <Fade duration={500}>
                    <h1 className="text-2xl xl:text-4xl font-extrabold mb-4 text-gray-900">
                      I Align Technology With Your Business Growth.
                    </h1>
                  </Fade>
                  <Fade delay={100} duration={100}>
                    <h2 className="mb-4 font-bold text-lg md:text-2xl text-gray-900 md:mb-8">
                      Strategic tech architecture for founders, operators, and business owners who want to scale without chaos.
                    </h2>
                  </Fade>
                  <Fade delay={100} duration={100}>
                    <p className="mb-8 text-base md:text-xl text-gray-900">
                      Think of me as your tech partner — not a vendor who disappears after delivery.
                    </p>
                  </Fade>

                  <div className="button-container">
                    <Zoom delay={300} duration={100}>
                      <div className="flex items-center flex-wrap">
                        <a
                          href="https://calendly.com/ervandra/free-strategy"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-outline-success p-3 px-4 md:p-4 md:px-8 font-bold text-base md:text-lg bg-black text-white rounded w-full md:w-auto text-center block md:inline-block mb-4 md:mb-0">
                          Book Free Strategy Call
                        </a>
                        <a
                          href="/works"
                          className="btn btn-outline-success p-3 px-4 md:p-4 md:px-8 font-bold text-base md:text-lg border-2 border-black text-black rounded w-full md:w-auto text-center block md:inline-block md:ml-4 bg-transparent hover:bg-black hover:text-white transition-colors duration-300">
                          See My Work →
                        </a>
                      </div>
                    </Zoom>
                  </div>
                </div>
                <Modal
                  isOpen={isOpen}
                  onRequestClose={() => setState({ success: false, isOpen: false })}
                  contentLabel="Modal"
                  className="reveal p-3 center small"
                  ariaHideApp={false}>
                  <div className="md:p-3 md:pt-4">
                    {success ? (
                      <div className="p-0 text-center">
                        <h3 className="text-xl font-bold mb-2">
                          <span
                            className="mr-2 inline-block text-2xl animate-bounce relative"
                            role="emoji">
                            👍🏻
                          </span>{' '}
                          Thank you!
                        </h3>
                        <p className="text-gray-500 mb-4">
                          I will sending you my onboarding document, so you can get the most of my
                          expertise and leveraging them to your needs
                        </p>
                        <div className="flex justify-center mt-8">
                          <button
                            className="btn bg-gray-100 text-black p-2 px-6 mb-0 border-gray-200 border"
                            onClick={() => {
                              setState({ isOpen: false, success: false });
                            }}>
                            Close
                          </button>
                        </div>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="px-0 px-md-3">
                        <Fade cascade top collapse delay={100}>
                          <div>
                            <h5 className="text-center mb-2 text-xl font-bold">
                              Let's Connect{' '}
                              <span
                                role="emoji"
                                className="animate-bounce text-xl inline-block ml-2">
                                👇🏻
                              </span>
                            </h5>
                            <p className="text-center mb-8 text-gray-500 md:px-6">
                              I wanna connect with you properly, then we can set tech call to
                              discuss some ideas.
                            </p>
                            <div className="form-group mb-4">
                              <input
                                type="text"
                                className="form-control p-2 px-4 rounded border mb-0 w-full"
                                placeholder="Your Name:"
                                value={name}
                                disabled={isLoading}
                                onChange={e => setState({ name: e.target.value })}
                              />
                            </div>
                            <div className="form-group mb-6">
                              <input
                                type="email"
                                className="form-control p-2 px-4 rounded border mb-0 w-full"
                                placeholder="Your Email:"
                                required
                                disabled={isLoading}
                                value={email}
                                onChange={e => setState({ email: e.target.value })}
                              />
                            </div>
                            {isLoading ? (
                              <button
                                type="button"
                                className="bg-gray-500 text-white cursor-not-allowed opacity-50 animate-pulse w-full rounded p-2 px-4 uppercase">
                                Submitting..
                              </button>
                            ) : (
                              <button
                                type="submit"
                                className="font-bold w-full p-2 px-4 rounded uppercase text-white bg-black">
                                Get in Touch <span role="emoji animate-pulse ml-2">⚡️</span>
                              </button>
                            )}
                            {/* <p className="text-center text-xs mt-4 text-gray-500 md:px-6">
                              You will also receive my latest <u>portfolio</u> and <u>workflow</u>{' '}
                              blueprint sent directly to your inbox.
                            </p> */}
                            <p className="mb-0 text-muted text-center mt-4 text-gray-500">
                              Your privacy is protected
                            </p>
                          </div>
                        </Fade>
                      </form>
                    )}
                  </div>

                  <button
                    className="btn btn-close close-reveal"
                    onClick={() => setState({ success: false, isOpen: false })}>
                    <span className=" text-lg ehicon-close"></span>
                  </button>
                </Modal>
              </div>
            </div>
          </div>
          <div id="about" className="py-5 md:py-20 -mt-20 md:mt-0">
            <div className="container">
              <div className="row justify-center pt-20 md:pt-0">
                <div className="col-12 col-lg-10">
                  <div className="py-3 py-md-5">
                    <div className="row md:max-w-7xl mx-auto flex flex-wrap justify-between">
                      <div className="col-12 col-md-3 order-md-2 text-end w-full md:w-3/12">
                        <div className="w-1/2 md:w-full mx-auto mb-5 md:mb-0">
                          <Zoom right fraction={0.5}>
                            <div className="rounded-full mb-3 mx-auto">
                              <Image
                                src="/images/ervan.png"
                                alt="Ervandra Halim"
                                width="300"
                                height="300"
                                layout="responsive"
                                className="rounded-full"
                              />
                            </div>
                          </Zoom>
                        </div>
                      </div>
                      <div className="col-12 col-md-7 w-full md:w-8/12">
                        <Zoom top duration={300}>
                          <h2 className="font-bold mb-4 text-2xl md:text-4xl">
                            <span role="emoji" className="animate-bounce inline-block">
                              🧑🏻‍💻
                            </span>{' '}
                            How I Work
                          </h2>
                        </Zoom>
                        <Fade delay={300}>
                          <p className="mb-8 lg:text-lg">
                            Technology is only valuable if it protects revenue, reduces costs, or unlocks growth. I start with your business goals and bottlenecks — not your codebase.
                          </p>
                          
                          <div className="mb-6">
                            <h3 className="font-bold text-xl mb-2">Strategic Before Technical</h3>
                            <p className="text-gray-700">I start with your business goals, not technology trends. What are you trying to achieve? Where are the bottlenecks? Only then do we talk solutions.</p>
                          </div>
                          
                          <div className="mb-6">
                            <h3 className="font-bold text-xl mb-2">Systems That Scale Without You</h3>
                            <p className="text-gray-700">Every solution I build is designed to work independently. Documented, maintainable, and structured so your team can operate it — or hand it off entirely.</p>
                          </div>
                          
                          <div className="mb-6">
                            <h3 className="font-bold text-xl mb-2">Transparent Partnerships</h3>
                            <p className="text-gray-700">Fixed-scope audits, clear pricing, honest capacity communication. I'll tell you if I'm not the right fit. No surprises, no scope creep.</p>
                          </div>
                        </Fade>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="services" className="py-5 md:py-20 bg-gray-50 border-y border-gray-200">
            <div className="container mx-auto px-5 md:px-0">
              <Zoom top duration={300}>
                <h2 className="font-bold mb-8 text-2xl md:text-4xl text-center">
                  <span role="emoji" className="animate-bounce inline-block mr-2">🤝</span>
                  How I Can Help
                </h2>
              </Zoom>
              <div className="max-w-5xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <Fade bottom delay={100} duration={300}>
                    <div className="bg-white p-6 rounded shadow-sm border border-gray-100 flex flex-col h-full">
                      <div className="mb-4">
                        <span className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2 block">Strategic Engagement</span>
                        <h3 className="text-xl font-bold mb-1">Fractional CTO</h3>
                        <p className="text-primary font-medium text-sm"><span className="text-gray-400 text-xs">Starting from</span> IDR 15M/month</p>
                      </div>
                      <p className="text-gray-600 mb-6 flex-grow">Part-time tech leadership. Strategy, architecture, team oversight, vendor management.</p>
                      <a href="https://calendly.com/ervandra/free-strategy" target="_blank" rel="noopener noreferrer" className="btn bg-black text-white w-full py-3 rounded font-bold text-center">Book Strategy Call</a>
                    </div>
                  </Fade>
                  <Fade bottom delay={200} duration={300}>
                    <div className="bg-white p-6 rounded shadow-sm border border-gray-100 flex flex-col h-full">
                      <div className="mb-4">
                        <span className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2 block">Strategic Engagement</span>
                        <h3 className="text-xl font-bold mb-1">Systems Audit & Design</h3>
                        <p className="text-primary font-medium text-sm">IDR 5M / 2 weeks</p>
                      </div>
                      <p className="text-gray-600 mb-6 flex-grow">Deep dive into your ops and tech bottlenecks. You get a map, gap analysis, and 90-day roadmap.</p>
                      <a href="https://calendly.com/ervandra/free-strategy" target="_blank" rel="noopener noreferrer" className="btn bg-black text-white w-full py-3 rounded font-bold text-center">Book Strategy Call</a>
                    </div>
                  </Fade>
                  <Fade bottom delay={300} duration={300}>
                    <div className="bg-white p-6 rounded shadow-sm border border-gray-100 flex flex-col h-full">
                      <div className="mb-4">
                        <span className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2 block">Strategic Engagement</span>
                        <h3 className="text-xl font-bold mb-1">Custom AI Implementation</h3>
                        <p className="text-primary font-medium text-sm"><span className="text-gray-400 text-xs">Starting from</span> IDR 10M</p>
                      </div>
                      <p className="text-gray-600 mb-6 flex-grow">Custom AI agents, workflow automation, RAG pipelines. Not demos — production systems.</p>
                      <a href="https://calendly.com/ervandra/free-strategy" target="_blank" rel="noopener noreferrer" className="btn bg-black text-white w-full py-3 rounded font-bold text-center">Book Strategy Call</a>
                    </div>
                  </Fade>
                </div>
                
                <Fade bottom delay={400} duration={300}>
                  <div className="bg-white p-6 md:p-8 rounded shadow-sm border border-gray-100 mb-8 flex flex-col md:flex-row items-center justify-between">
                    <div className="mb-6 md:mb-0 md:mr-8">
                      <h3 className="text-xl font-bold mb-2">Custom Development</h3>
                      <p className="text-gray-600 mb-0">Scoped, project-based engagements for critical systems that need to be built right.</p>
                    </div>
                    <a href="https://calendly.com/ervandra/free-strategy" target="_blank" rel="noopener noreferrer" className="btn border-2 border-black text-black py-3 px-8 rounded font-bold text-center whitespace-nowrap hover:bg-black hover:text-white transition-colors duration-300">Let's Scope It</a>
                  </div>
                </Fade>

                <Fade bottom delay={500} duration={300}>
                  <div className="text-center text-gray-600 mb-12 flex flex-col md:flex-row items-center justify-center">
                    Need something faster? I also run <a href="https://karyakilat.com" target="_blank" rel="noopener noreferrer" className="text-black font-bold underline ml-1">KaryaKilat.com</a> <span className="mx-1 hidden md:inline-block">—</span> <span className="block md:inline-block">premium microsites for SMEs, live in 24 hours.</span>
                  </div>
                </Fade>

                <Fade bottom delay={600} duration={300}>
                  <div className="bg-black text-white p-6 md:p-8 rounded shadow-sm flex flex-col md:flex-row items-center justify-between">
                    <div className="mb-6 md:mb-0 md:mr-8 text-center md:text-left">
                      <h3 className="text-xl font-bold mb-2">Mentorship</h3>
                      <p className="text-gray-300 mb-0 text-sm">1-on-1 guidance for developers, PMs, and aspiring tech leaders. Limited slots. Application required.</p>
                    </div>
                    <a href="mailto:hi@ervandra.com?subject=Mentorship Application" className="btn bg-white text-black py-3 px-8 rounded font-bold text-center whitespace-nowrap">Apply</a>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
          
          <div id="works" className="py-5 md:py-20">
            <div className="container mx-auto px-5 md:px-0">
              <Zoom top duration={300}>
                <h2 className="font-bold mb-8 text-2xl md:text-4xl text-center">
                  <span role="emoji" className="animate-bounce inline-block mr-2">🚀</span>
                  Work & Impact
                </h2>
              </Zoom>
              <div className="max-w-5xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  <Fade bottom delay={100} duration={300}>
                    <div className="bg-gray-50 border border-gray-100 p-6 rounded">
                      <h3 className="font-bold text-lg mb-2">MTF </h3>
                      <p className="text-gray-700 m-0">Leading digital transformations for several internal systems also become the business analyst for existing systems</p>
                    </div>
                  </Fade>
                  <Fade bottom delay={200} duration={300}>
                    <div className="bg-gray-50 border border-gray-100 p-6 rounded">
                      <h3 className="font-bold text-lg mb-2">R/GA</h3>
                      <p className="text-gray-700 m-0">10+ Fortune 500 campaigns delivered — inducted into R/GA Hall of Immortality</p>
                    </div>
                  </Fade>
                  <Fade bottom delay={300} duration={300}>
                    <div className="bg-gray-50 border border-gray-100 p-6 rounded">
                      <h3 className="font-bold text-lg mb-2">CIAYO</h3>
                      <p className="text-gray-700 m-0">Leading team to build web platform from scratch to 656,000 registered users</p>
                    </div>
                  </Fade>
                  <Fade bottom delay={400} duration={300}>
                    <div className="bg-gray-50 border border-gray-100 p-6 rounded">
                      <h3 className="font-bold text-lg mb-2">LifeLearn Platform</h3>
                      <p className="text-gray-700 m-0">Saved 40+ engineering hours/month, without a backend rewrite</p>
                    </div>
                  </Fade>
                </div>

                <Fade bottom delay={500} duration={300}>
                  <div className="mb-8">
                    <p className="text-center text-sm font-bold tracking-widest text-gray-400 uppercase mb-6">TRUSTED BY TEAMS AT</p>
                    <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 opacity-60 grayscale filter px-4">
                      {/* Using text for logos to avoid missing images, or standard placeholder if needed */}
                      <span className="text-xl font-bold">Syntax</span>
                      <span className="text-xl font-bold">Komunal</span>
                      <span className="text-xl font-bold">Yoona</span>
                      <span className="text-xl font-bold">R/GA</span>
                      <span className="text-xl font-bold">MTF</span>
                      <span className="text-xl font-bold">CIAYO</span>
                      <span className="text-xl font-bold">LifeLearn</span>
                      <span className="text-xl font-bold">CakraStudio</span>
                    </div>
                  </div>
                </Fade>

                <div className="text-center">
                  <a href="/works" className="inline-block border-b-2 border-black font-bold text-lg hover:text-gray-600 hover:border-gray-600 transition-colors pb-1">See All Case Studies →</a>
                </div>
              </div>
            </div>
          </div>

          <div id="availability" className="py-5 md:py-20 bg-gray-50 border-y border-gray-200">
            <div className="container mx-auto px-5 md:px-0">
              <Zoom top duration={300}>
                <h2 className="font-bold mb-8 text-2xl md:text-4xl text-center">
                  <span role="emoji" className="animate-bounce inline-block mr-4">📅</span>
                 My Availability
                </h2>
              </Zoom>
              <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                <Fade bottom duration={300}>
                  <div className="p-4 bg-white h-full rounded-lg shadow">
                    <h3 className="font-bold text-xl mb-4 text-black border-b border-gray-200 pb-2">Active Projects</h3>
                    <ul className="list-disc pl-5 text-gray-700 space-y-2">
                      <li>Co-founder, CTO & Principal Architect at Syntax Solution</li>
                      <li>Building &amp; growing KaryaKilat productized service</li>
                      <li>NDA consulting engagements with corporates &amp; startups</li>
                    </ul>
                  </div>
                </Fade>
                <Fade bottom delay={100} duration={300}>
                  <div className="p-4 bg-white h-full rounded-lg shadow">
                    <h3 className="font-bold text-xl mb-4 text-green-700 border-b border-gray-200 pb-2">Capacity</h3>
                    <ul className="list-disc pl-5 text-gray-700 space-y-2">
                      <li>1–2 fractional CTO/Tech partnerships (8–12 hrs/week each)</li>
                      <li>Systems audit projects (2-week engagements)</li>
                      <li>AI implementation projects (scoped, project-based)</li>
                      <li>Custom development for critical paths</li>
                    </ul>
                  </div>
                </Fade>
              </div>
              <Fade bottom delay={300} duration={300}>
                <div className="max-w-3xl mx-auto mt-12 text-center text-lg text-gray-600 italic">
                  "If your needs align with my availability, let's talk. If I'm not the right fit, I'll tell you — and recommend alternatives."
                </div>
              </Fade>
            </div>
          </div>

          <div id="testimonial" className="py-5 md:py-20 -mt-20">
            <div className="container">
              <div className="row justify-center">
                <div className="col">
                  <div className="py-3 pt-20 md:py-5">
                    <Fade delay={300}>
                      <h4 className="text-xl md:text-2xl mb-0 text-center relative">
                        Why'd they recommend to
                      </h4>

                      <Zoom top duration={300}>
                        <h2 className="text-2xl md:text-4xl mb-8 text-center font-bold text-warning">
                          <span
                            className="mr-2 inline-block text-2xl animate-bounce relative"
                            role="emoji">
                            👍🏻
                          </span>{' '}
                          Work With Ervan?
                        </h2>
                      </Zoom>
                      <p className="md:text-xl mb-8 text-center">
                        My partner and valuable clients will tell you their experiences to work with
                        me.
                      </p>
                    </Fade>
                  </div>
                </div>
              </div>
            </div>
            <div id="client-testimony">
              <div className="overflow-x-auto px-5 md:px-10 -mx-5 md:mx-auto">
                <div className="gap-10 flex flex-nowrap">
                  {profile.testimonials.map((testimony, index) => {
                    return (
                      <div className="min-w-[70vw] md:min-w-[33vw]" key={index}>
                        <Fade duration={300}>
                          <div className="testimony-item mb-3">
                            <div className="card rounded bg-white bg-opacity-50 filter backdrop-blur-lg shadow-lg border">
                              <div className="card-body p-5">
                                <div className="flex items-end">
                                  <div
                                    className=" shadow rounded-full mr-4"
                                    style={{ width: '72px', flexBasis: '72px', flexShrink: 0 }}>
                                    <Image
                                      src={testimony.photo}
                                      alt={testimony.name}
                                      width="72"
                                      height="72"
                                      layout="responsive"
                                      className="rounded-full"
                                    />
                                  </div>
                                  <div className="flex-auto">
                                    <h3 className="mb-0 fw-bold text-lg">{testimony.name}</h3>
                                    <h4 className="mb-0 font-normal text-sm text-gray-700">
                                      {testimony.role}
                                    </h4>
                                  </div>
                                </div>

                                <p className="font-light whitespace-pre-line italic text-base text-gray-900 mb-0 mt-4">
                                  {testimony.text}
                                </p>
                                <p className="text-sm text-gray-500 mt-2">
                                  <em>
                                    Source:{' '}
                                    <a
                                      href={testimony.source?.url}
                                      rel="noopener noreferrer"
                                      target="_blank"
                                      className="underline">
                                      {testimony.source?.text}
                                    </a>
                                  </em>
                                </p>
                              </div>
                            </div>
                          </div>
                        </Fade>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div id="contact" className="py-5 md:py-20">
            <div className="container">
              <div className="row justify-center">
                <div className="col-12 md:max-w-3xl mx-auto">
                  <div className="py-3 py-md-5">
                    <div className="text-center">
                      <h2 className="text-2xl md:text-4xl mb-4 text-center font-bold">
                        <Zoom cascade top duration={300}>
                          If your needs align, let's talk.
                        </Zoom>
                      </h2>
                      <p className="mb-8 md:text-lg text-center text-gray-700">
                        I'll tell you upfront if I'm not the right fit —<br className="hidden md:block" />
                        and point you somewhere better if I'm not.
                      </p>
                      <Zoom delay={300} duration={300}>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                          <a
                            href="https://calendly.com/ervandra/free-strategy"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline-success p-3 md:p-4 px-8 font-bold text-base md:text-lg bg-black text-white rounded uppercase w-full md:w-auto text-center mx-2 hover:bg-gray-800 transition-colors duration-300">
                            Book Free 45-Min Call
                          </a>
                          <a
                            href={`https://wa.me/${profile.phone.replace('+', '')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline-success p-3 md:p-4 px-8 font-bold text-base md:text-lg border-2 border-black text-black bg-transparent hover:bg-black hover:text-white transition-colors duration-300 rounded uppercase w-full md:w-auto text-center mx-2">
                            Message on WhatsApp
                          </a>
                        </div>
                      </Zoom>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer id="footer" className="py-3 bg-dark">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="social-footer">
                  <ul className="social-list m-0 p-0 flex justify-center py-2 mb-3">
                    {profile.socialLinks.map((social, index) => (
                      <li className="block px-3" key={social.icon + index}>
                        <Fade delay={index * 200} duration={500}>
                          <a
                            href={`${social.link}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={social.id}>
                            <span className={`ehicon-${social.icon}`} />
                          </a>
                        </Fade>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-center copyright">
                  <Fade>
                    <p className="mb-0 small flex items-center justify-center">
                      <span>&copy;2011-{new Date().getFullYear()}</span>
                      <strong className="flex items-center justify-center mx-2">
                        Ervandra Halim{' '}
                        <Flash delay={1000}>
                          <span className="ms-1">⚡️</span>
                        </Flash>
                      </strong>
                    </p>
                  </Fade>
                </div>
              </div>
            </div>
          </div>
        </footer>

        <div className="side-elements left">
          <Bounce left delay={300} duration={300}>
            <ul className="social-list side-element-item">
              {profile.socialLinks.map((social, index) => (
                <li key={social.icon + index}>
                  <Fade delay={index * 200 + 300} duration={300}>
                    <a
                      href={`${social.link}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={social.id}>
                      <span className={`ehicon-${social.icon}`} />
                    </a>
                  </Fade>
                </li>
              ))}
            </ul>
          </Bounce>
        </div>

        <div className="side-elements right">
          <Bounce right delay={300} duration={300}>
            <div className="email-link side-element-item">
              <a href="mailto:ervandra.halim@gmail.com" target="_blank" rel="noopener noreferrer">
                <Zoom top cascade delay={300} duration={300}>
                  ervandra.halim@gmail.com
                </Zoom>
              </a>
            </div>
          </Bounce>
        </div>

        {isMenuOpen && (
          <div className="menu-mobile-overlay" onClick={() => setState({ isMenuOpen: false })}>
            &nbsp;
          </div>
        )}

        <div id="menu-mobile" className={`${isMenuOpen ? 'active' : ''}`}>
          <div className="">
            <div
              className="btn-container flex justify-end items-center p-2 mb-0"
              style={{ margin: '-1em' }}>
              <button
                aria-label="Close"
                className="btn btn-transparent p-0 text-center lh-1"
                style={{ width: '40px', height: '40px' }}
                onClick={() => setState({ isMenuOpen: false })}>
                <span className="ehicon-close" />
              </button>
            </div>
            <ul
              className="m-0 p-0 block mb-5 fw-bold"
              onClick={() => setState({ isMenuOpen: false })}>
              <li className="block mb-4">
                <Fade when={isMenuOpen} bottom delay={0} duration={300}>
                  <a className="text-decoration-none block" href="#about">
                    About
                  </a>
                </Fade>
              </li>
              <li className="block mb-4">
                <Fade when={isMenuOpen} bottom delay={300} duration={300}>
                  <a className="text-decoration-none block" href="#experience">
                    Experience
                  </a>
                </Fade>
              </li>
              <li className="block mb-4">
                <Fade when={isMenuOpen} bottom delay={600} duration={300}>
                  <a className="text-decoration-none block" href="#testimonial">
                    Testimonial
                  </a>
                </Fade>
              </li>
              <li className="block mb-4">
                <Fade when={isMenuOpen} bottom delay={900} duration={300}>
                  <a className="text-decoration-none block" href="#contact">
                    Contact
                  </a>
                </Fade>
              </li>
            </ul>
            <Zoom bottom when={isMenuOpen} delay={1200} duration={500}>
              {/* <Pulse forever={true} delay={1500} duration={2000}> */}
              <button
                className="btn p-3 px-4 w-full bg-black uppercase text-white font-bold"
                onClick={() => setState({ isOpen: true })}>
                Get In Touch{' '}
                <span className="animate-pulse ml-2" role="emoji">
                  ⚡️
                </span>
              </button>
              {/* </Pulse> */}
            </Zoom>
          </div>
        </div>
      </div>
    </div>
  );
}
