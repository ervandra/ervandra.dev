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
          {profile.name} | {profile.mission}
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
            className={`${isMenuOpen ? '' : 'sticky top-0'} py-2`}
            style={{}}>
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
                        <ul className="m-0 mr-4 flex text-sm md:text-base text-slate-900">
                          <li className="block ml-4 md:ml-10">
                            <Fade left duration={100}>
                              <a className="text-decoration-none" href="#about">
                                About
                              </a>
                            </Fade>
                          </li>

                          <li className="block ml-4 md:ml-10">
                            <Fade left delay={100} duration={100}>
                              <a className="text-decoration-none" href="#experience">
                                Experience
                              </a>
                            </Fade>
                          </li>
                          <li className="block ml-4 md:ml-10">
                            <Fade left delay={200} duration={100}>
                              <a className="text-decoration-none" href="#testimonial">
                                Testimonial
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
                        <button
                          className="ml-4 p-2 px-4 rounded border border-black/10 bg-black text-white hover:bg-black/90 transition-all hover:scale-105"
                          onClick={() => setState({ isOpen: true })}>
                          Let's Connect
                          <span className="animate-pulse ml-2">💡</span>
                        </button>
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
            className="py-10 md:py-24 relative wide:min-h-screen min-h-[50vw] flex flex-col justify-center">
            <div className="container mx-auto">
              <div className="py-5 md:py-16 lg:w-2/3 xl:w-1/2">
                <div className="">
                  <Fade duration={100}>
                    <h2 className="text-sm tracking-wide uppercase text-gray-600 mb-4">
                      <span
                        className="mr-2 inline-block text-2xl animate-bounce relative"
                        role="emoji">
                        👋🏻
                      </span>{' '}
                      Hi, I'm Ervandra Halim.
                    </h2>
                  </Fade>
                  <Fade duration={500}>
                    <h1 className="text-4xl md:text-6xl xl:text-7xl font-extrabold mb-4 leading-tight">
                      Technology Leader Who Delivers
                      <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">
                        Measurable Results
                      </span>
                    </h1>
                  </Fade>
                  <Fade delay={100} duration={100}>
                    <h2 className="mb-6 font-medium text-lg md:text-2xl text-gray-700 md:mb-10">
                      CPTO at Syntax Solution • 15+ Years Building Enterprise Solutions • AI Automation Expert
                    </h2>
                  </Fade>
                  <Fade delay={100} duration={100}>
                    <p className="mb-10 text-base md:text-xl text-gray-700 leading-relaxed">
                      I transform how businesses operate through strategic AI implementation and digital transformation. Whether leading enterprise initiatives or crafting custom solutions, I deliver systems that <strong className="text-gray-900">reduce operational burden by 40-70%</strong> while maintaining security, scalability, and measurable ROI.
                    </p>
                    {/* <p className="mb-3 fs-5">
                             I help people, startup/company to achieve their business goal faster
                              through technology-based solution.
                            </p>
                            <p className="mb-5 fs-5">
                              I want to add value for you, download this case study below:
                            </p> */}
                    {/* <p className="mb-5">
                              Get my thoughts twice a month in a bite size tech news called the{' '}
                              <strong className="text-warning">Tech-a-break</strong>, where i cover
                              about latest technologies, programming tips and modern business.
                            </p> */}
                  </Fade>

                  <div className="button-container">
                    <Zoom delay={300} duration={100}>
                      {/* <Pulse forever={true} delay={1500} duration={2000}> */}
                      <div className="flex items-center">
                        {/* <input
                          type="text"
                          className="p-2 px-4 rounded border mr-2 max-w-xs flex-1 border-gray-500"
                          placeholder="Enter your email"
                        /> */}
                        <button
                          className="p-3 px-5 md:p-4 md:px-8 font-bold text-base md:text-lg bg-black text-white rounded-md w-full md:w-auto hover:bg-black/90 transition-all hover:scale-105"
                          onClick={() => setState({ isOpen: true })}>
                          Start Your Transformation
                          <span className="animate-pulse ml-2">🚀</span>
                        </button>
                      </div>
                      {/* </Pulse> */}
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
                          Perfect! I'll send you my strategic consultation framework so we can maximize our discussion and identify the highest-impact opportunities for your business.
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
                              Start Your Transformation{' '}
                              <span
                                role="emoji"
                                className="animate-bounce text-xl inline-block ml-2">
                                🚀
                              </span>
                            </h5>
                            <p className="text-center mb-8 text-gray-500 md:px-6">
                              Let's connect and discuss how strategic technology solutions can accelerate your business outcomes.
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
                                className="font-bold w-full p-2 px-4 rounded text-white bg-black hover:bg-black/90 transition-colors">
                                Schedule Strategy Discussion <span role="emoji animate-pulse ml-2">🎯</span>
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
                            About Me
                          </h2>
                        </Zoom>
                        <Fade delay={300}>
                          <p className="mb-4 lg:text-lg">
                            <strong>Engineer at heart, strategist by design.</strong> Over 15 years, I've guided teams from startup chaos to enterprise scale, turning complex technical challenges into competitive advantages. My approach combines deep technical expertise with business acumen—ensuring every solution drives measurable outcomes.
                          </p>

                          <p className="mb-4 lg:text-lg">
                            As CPTO at {` `}
                            <a
                              href="https://syntax.id"
                              target="_blank"
                              className="font-bold inline-flex items-center hover:underline text-black"
                              rel="noopener noreferrer">
                              Syntax Solution
                              <span className="ml-1 text-sm">↗</span>
                            </a>, I lead digital transformation initiatives for SMEs and enterprises, specializing in AI automation that delivers immediate impact while building long-term scalability.
                          </p>

                          <p className="mb-2 lg:text-lg font-medium">
                            Current focus areas that drive client success:
                          </p>
                          <div className="flex flex-wrap mb-4">
                            {profile.recentSkills.map((skill, index) => (
                              <div key={skill + index} className="text-warning w-full md:w-1/2">
                                <Fade delay={index * 100 + 300}>
                                  <div>
                                    <span
                                      className={`mr-1 text-gray-300 animate-spin inline-block relative`}
                                      style={{
                                        animationDelay: `${index * 250}ms`,
                                        animationDuration: '3s',
                                      }}>
                                      ✦
                                    </span>{' '}
                                    {skill}
                                  </div>
                                </Fade>
                              </div>
                            ))}
                          </div>
                        </Fade>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section id="services" className="px-5 md:px-0 py-16 md:py-24">
            <div className="container">
              <div className="row justify-center">
                <div className="col-12 md:max-w-6xl mx-auto">
                  <div className="text-center mb-12">
                    <Zoom top duration={300}>
                      <h2 className="text-2xl md:text-4xl font-bold">
                        <span role="emoji" className="animate-bounce inline-block mr-2">
                          🚀
                        </span>
                        How I Drive Results
                      </h2>
                    </Zoom>
                    <p className="mt-3 text-gray-700 md:text-lg max-w-3xl mx-auto">
                      Strategic technology leadership that removes operational burden and delivers measurable outcomes—personally or through Syntax Solution
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="card group">
                      <div className="card-body p-6">
                        <div className="flex items-center mb-3">
                          <span className="text-2xl mr-3 group-hover:scale-110 transition-transform">⚡</span>
                          <h3 className="font-bold text-lg mb-0">Digital Transformation</h3>
                        </div>
                        <p className="text-gray-700 mb-4 font-medium">
                          Turn operational chaos into streamlined systems that scale with your growth
                        </p>
                        <div className="space-y-2 text-sm text-gray-600">
                          <div className="flex items-start">
                            <span className="text-green-500 mr-2 mt-0.5">✓</span>
                            <span>Process audit & bottleneck elimination</span>
                          </div>
                          <div className="flex items-start">
                            <span className="text-green-500 mr-2 mt-0.5">✓</span>
                            <span>Future-proof architecture design</span>
                          </div>
                          <div className="flex items-start">
                            <span className="text-green-500 mr-2 mt-0.5">✓</span>
                            <span>Team enablement & adoption strategy</span>
                          </div>
                        </div>
                        <div className="mt-4 pt-3 border-t border-gray-200">
                          <p className="text-xs text-gray-500 font-medium">
                            <span className="text-green-600">Outcome:</span> 40-60% reduction in manual work, faster time-to-market
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="card group">
                      <div className="card-body p-6">
                        <div className="flex items-center mb-3">
                          <span className="text-2xl mr-3 group-hover:scale-110 transition-transform">🤖</span>
                          <h3 className="font-bold text-lg mb-0">AI Automation</h3>
                        </div>
                        <p className="text-gray-700 mb-4 font-medium">
                          Intelligent workflows that handle routine tasks while maintaining human oversight
                        </p>
                        <div className="space-y-2 text-sm text-gray-600">
                          <div className="flex items-start">
                            <span className="text-green-500 mr-2 mt-0.5">✓</span>
                            <span>Smart agent workflows with approval gates</span>
                          </div>
                          <div className="flex items-start">
                            <span className="text-green-500 mr-2 mt-0.5">✓</span>
                            <span>Seamless system integrations via APIs</span>
                          </div>
                          <div className="flex items-start">
                            <span className="text-green-500 mr-2 mt-0.5">✓</span>
                            <span>Built-in safety checks & quality controls</span>
                          </div>
                        </div>
                        <div className="mt-4 pt-3 border-t border-gray-200">
                          <p className="text-xs text-gray-500 font-medium">
                            <span className="text-green-600">Outcome:</span> 70% faster processing, 95% accuracy improvement
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="card group">
                      <div className="card-body p-6">
                        <div className="flex items-center mb-3">
                          <span className="text-2xl mr-3 group-hover:scale-110 transition-transform">🎯</span>
                          <h3 className="font-bold text-lg mb-0">Strategic AI Implementation</h3>
                        </div>
                        <p className="text-gray-700 mb-4 font-medium">
                          Enterprise-grade AI integration with security-first approach and measurable ROI
                        </p>
                        <div className="space-y-2 text-sm text-gray-600">
                          <div className="flex items-start">
                            <span className="text-green-500 mr-2 mt-0.5">✓</span>
                            <span>ROI-focused use case identification</span>
                          </div>
                          <div className="flex items-start">
                            <span className="text-green-500 mr-2 mt-0.5">✓</span>
                            <span>Model evaluation & performance optimization</span>
                          </div>
                          <div className="flex items-start">
                            <span className="text-green-500 mr-2 mt-0.5">✓</span>
                            <span>Compliance, security & cost management</span>
                          </div>
                        </div>
                        <div className="mt-4 pt-3 border-t border-gray-200">
                          <p className="text-xs text-gray-500 font-medium">
                            <span className="text-green-600">Outcome:</span> 3-6x ROI within 12 months, enterprise-ready deployment
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center mt-12">
                    <Fade delay={300}>
                      <p className="text-gray-600 mb-6 md:text-lg">
                        <strong>Ready to transform your operations?</strong> Let's discuss how these solutions can drive your specific business outcomes.
                      </p>
                      <button
                        className="inline-flex items-center px-6 py-3 bg-black text-white rounded-lg font-medium hover:bg-black/90 transition-colors"
                        onClick={() => setState({ isOpen: true })}>
                        Schedule Strategic Discussion
                        <span className="ml-2 animate-pulse">💡</span>
                      </button>
                    </Fade>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div id="experience" className="py-5 md:py-20 -mt-20 md:mt-0">
            <div className="container">
              <div className="row justify-center md:max-w-7xl mx-auto pt-20 md:pt-0">
                <div className="col-12 col-lg-10">
                  <div className="py-3 py-md-5">
                    <Zoom top duration={300}>
                      <h2 className="font-bold mb-8 text-2xl md:text-4xl">
                        <span role="emoji" className="animate-bounce inline-block">
                          🌟
                        </span>{' '}
                        Where I'm Contributing
                      </h2>
                    </Zoom>
                    <Fade duration={300}>
                      <div className="row flex justify-between flex-wrap">
                        <div className="col-12 col-md-3 col-lg-2 w-full md:w-1/4 lg:w-1/6 md:pr-8">
                          <div
                            className="nav flex-md-column nav-pills me-0 md:mb-8 mb-3 experience-menu md:flex-col flex w-full"
                            role="tablist"
                            aria-orientation="vertical">
                            {profile.experiences.map((exp, index) => {
                              const active = index === workTab;
                              if (active)
                                return (
                                  <Zoom
                                    left
                                    key={exp.company + index}
                                    delay={index * 200 + 300}
                                    duration={300}>
                                    <button
                                      key={exp.company + index}
                                      className="nav-link text-center md:text-left p-2 px-4 text-nowrap whitespace-nowrap lg:text-lg active border-l-2 w-full border-l-black/70 bg-black/5"
                                      type="button"
                                      role="tab">
                                      {exp.company}
                                    </button>
                                  </Zoom>
                                );
                              return (
                                <Zoom
                                  left
                                  key={exp.company + index}
                                  delay={index * 200 + 300}
                                  duration={300}>
                                  <button
                                    key={exp.company + index}
                                    className="nav-link text-center md:text-left p-2 px-4 border-l-2 w-full whitespace-nowrap lg:text-lg border-l-black/30 hover:bg-black/5"
                                    type="button"
                                    onClick={() => setState({ workTab: index })}
                                    role="tab">
                                    {exp.company}
                                  </button>
                                </Zoom>
                              );
                            })}
                          </div>
                        </div>
                        <div className="col-12 col-md-9 col-lg-10 w-full md:w-3/4 lg:w-5/6">
                          <div className="tab-content">
                            {profile.experiences.map((exp, index) => {
                              const active = index === workTab;
                              return (
                                <div
                                  className={`tab-pane ${
                                    active ? 'block active show fade' : 'hidden'
                                  }`}
                                  role="tabpanel"
                                  key={exp.company + index}>
                                  <Accordion
                                    data={exp.promotion}
                                    company={exp.company}
                                    currentJob={index === 0}
                                  />
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </Fade>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="testimonial" className="py-5 md:py-20 -mt-20">
            <div className="container">
              <div className="row justify-center">
                <div className="col">
                  <div className="py-3 pt-20 md:py-5">
                    <Fade delay={300}>
                      <h4 className="text-xl md:text-2xl mb-0 text-center relative text-gray-600">
                        What leaders say about
                      </h4>

                      <Zoom top duration={300}>
                        <h2 className="text-2xl md:text-4xl mb-8 text-center font-bold text-black">
                          <span
                            className="mr-2 inline-block text-2xl animate-bounce relative"
                            role="emoji">
                            💼
                          </span>{' '}
                          Working With Ervandra
                        </h2>
                      </Zoom>
                      <p className="md:text-xl mb-8 text-center max-w-3xl mx-auto">
                        Technology leaders, CTOs, and business owners share their experience partnering with me to drive digital transformation and deliver measurable results.
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
                            <div className="card">
                              <div className="card-body">
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
                                    <h3 className="mb-0 font-bold text-lg">{testimony.name}</h3>
                                    <h4 className="mb-0 font-normal text-sm text-gray-700">
                                      {testimony.role}
                                    </h4>
                                  </div>
                                </div>

                                <p className="font-light whitespace-pre-line italic text-base text-gray-800 mb-0 mt-4">
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
                      <h4 className="text-xl md:text-2xl text-gray-600">Ready to accelerate your growth?</h4>
                      <h2 className="text-2xl md:text-4xl mb-8 text-center font-bold">
                        <Zoom cascade top duration={300}>
                          Let's Build Something Exceptional
                        </Zoom>
                      </h2>
                      <p className="mb-8 md:text-lg text-center max-w-2xl mx-auto">
                        Whether you're facing operational bottlenecks, considering AI implementation, or need strategic technology leadership, I'm here to help you achieve measurable results. Let's discuss your specific challenges and craft a solution that works.
                      </p>
                      <Zoom delay={300} duration={300}>
                        <button
                          className="btn btn-outline-success p-3 md:p-4 px-8 font-bold text-base md:text-lg bg-black text-white rounded transition-all hover:scale-105 hover:bg-black/90"
                          onClick={() => setState({ isOpen: true })}>
                          Schedule Your Strategy Session
                          <span className="animate-pulse ml-2">🎯</span>
                        </button>
                      </Zoom>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer id="footer" className="py-6 border-t border-black/10 bg-white/60 backdrop-blur">
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
                className="btn p-3 px-4 w-full bg-black text-white font-bold hover:bg-black/90 transition-colors"
                onClick={() => setState({ isOpen: true })}>
                Start Your Transformation{' '}
                <span className="animate-pulse ml-2" role="emoji">
                  🚀
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
