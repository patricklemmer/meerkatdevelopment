// React imports
import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

// Component imports
import Scroller from '../../components/scroller'
import Contact from '../../components/contact'

// Asset imports
import { HeroSm, HeroMd, HeroLg, Services } from '../../assets'

// Data imports
import { portfolioData } from '../../data'

function Home() {
  return (
    <div className="border-black border-x-2">
      <section className="py-10 md:py-24 lg:py-36 xl:py-48">
        <div className="container mx-auto gap-8 px-4 flex flex-col md:flex-row items-center">
          <div className="md: flex-1 md:order-2">
            <picture className="flex drop-shadow-[10px_-10px_0_rgb(0,0,0)] border-black border rounded-xl overflow-hidden">
              <source
                srcSet={HeroSm}
                width="363"
                height="222"
                media="(max-width: 400px)"
                type="image/jpg"
              />
              <source
                srcSet={HeroMd}
                width="608"
                height="372"
                media="(max-width: 400px)"
                type="image/jpg"
              />
              <img src={HeroLg} width="870" height="532" alt="" />
            </picture>
          </div>
          <div className="md: flex-1">
            <h2 className="text-lg md:text-xl font-bold uppercase">
              Welcome to Meerkat Development
            </h2>
            <h1 className="text-4xl lg:text-5xl xl:text-7xl font-bold mb-4">
              Development<span className="text-neutral-800">.</span>
              <br />
              Multimedia<span className="text-neutral-800">.</span>
              <br />
              Design<span className="text-neutral-800">.</span>
            </h1>
            <p className="text-lg max-w-xl mb-6">
              Meerkat Development{' '}
              <i>
                <u>creates</u>
              </i>{' '}
              with passion.
            </p>
            <div className="flex items-baseline gap-4">
              <HashLink
                to="#work"
                className="px-6 py-4 rounded-md bg-sky-450 hover:bg-sky-550 text-white"
              >
                Selected Work
              </HashLink>
              <Link to="/contact" className="px-6 py-4 rounded-md flex gap-2">
                Get in Touch!
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Scroller
        text={
          "👋🏼 In need of some help? Get in touch and let's have a chat 👋🏼 In need of some help? Get in touch and let's have a chat 👋🏼 In need of some help? Get in touch and let's have a chat "
        }
        link="/contact"
      />
      {/* "Selected Work" Section */}
      <section
        className="px-4 pb-12 border-black border-t-2 bg-[#6D696A] bg-fixed"
        id="work"
      >
        <div className="container mx-auto">
          <div className="text-center py-12">
            <h1 className="text-4xl lg:text-5xl xl:text-7xl font-bold mb-4">
              Selected Work
            </h1>
            <p className="max-w-xl mx-auto text-lg">
              Check out a selection of our hand-picked, standout projects and
              see how we can bring your vision to life.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-28">
            {portfolioData.map((item, index) => (
              <Link
                to={item.link}
                key={index}
                className="md:even:pt-12 ease-in-out duration-75 hover:translate-y-[-4px] hover:drop-shadow-[10px_8px_0_rgba(0,0,0,1)]"
              >
                <div className="border-2 border-black rounded-xl overflow-hidden bg-black">
                  <img src={item.thumbnail} alt={item.alt} loading="lazy" />
                </div>
                <div className="bg-white border-x-2 border-black border-b-2 rounded-b-xl mx-4 p-4 text-lg flex justify-between gap-4 items-center">
                  <div>
                    <span className="font-bold">{item.title} </span>
                    <span className="text-zinc-400">
                      &#9679; {item.category}
                    </span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
          {/* Activate if dedicated Portfolio Page exists */}
          {/* <Link
            to={"/work"}
            className="flex text-xl gap-4 font-bold text-white justify-center mb-8"
          >
            View all work
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Link> */}
        </div>
      </section>
      {/* "Services" Section */}
      <section className="border-black border-t-2 py-12 px-4">
        <div className="container mx-auto">
          <div className="text-center py-12">
            <h1 className="text-4xl lg:text-5xl xl:text-7xl font-bold mb-4">
              Services
            </h1>
            <p className="max-w-xl mx-auto text-lg">
              Need a website that stands out from the crowd? An app that's the
              bees knees? Meerkat Development is your one-stop-shop for all
              things digital. From design, development to photography, we'll
              make sure that your online presence pops. Let's get in touch and
              give your digital vision legs to stand on.
            </p>
          </div>
          <div className="py-12 grid lg:grid-cols-4 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">Web Development</h3>
              <p className="mb-4 text-lg">
                Want to expand your business? Make sure you're online. Meerkat
                Development is here to help whether you're looking to set up
                your first website or revamping your existing one.
              </p>
              <Link
                to={'/about'}
                className="flex gap-2 items-center font-bold mb-14 text-lg"
              >
                Read More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </Link>
              <h3 className="text-3xl font-bold mb-4">Mobile Development</h3>
              <p className="mb-4 text-lg">
                Do you have a business idea that requires a mobile app? Or do
                you want to add one to your digital presence? It's very likely
                that we can help!
              </p>
              <Link
                to={'/about'}
                className="flex gap-2 items-center font-bold mb-14 text-lg"
              >
                Read More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </Link>
            </div>
            <div className="flex justify-center mb-12 md:mb-12 mx-8 col-span-2">
              <img
                src={Services}
                alt="Services I offer"
                width="500"
                height="800"
                loading="lazy"
                className="flex drop-shadow-[10px_-10px_0_rgb(0,0,0)] border-black border rounded-xl overflow-hidden"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-4">Web Design</h3>
              <p className="mb-4 text-lg">
                More than 70% of people prefer browsing "beautiful and
                well-designed" websites instead of basic ones. Let's make sure
                yours is beautiful and well-designed. Get in touch, if you need
                help (re-)designing your website or mobile app.
              </p>
              <Link
                to={'/about'}
                className="flex gap-2 items-center font-bold mb-14 text-lg"
              >
                Read More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </Link>
              <h3 className="text-3xl font-bold mb-4">Multimedia</h3>
              <p className="mb-4 text-lg">
                Compelling photographs and videos can tell a story, better than
                words could ever do. Give your brand a new look and feel or get
                some (new) images of yourself, for your socials and the web.
              </p>
              <Link
                to={'/about'}
                className="flex gap-2 items-center font-bold mb-14 text-lg"
              >
                Read More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Contact />
    </div>
  )
}

export default Home
