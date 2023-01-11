// React imports
import React from 'react'

// Component imports
import Contact from '../../components/contact'

// Data imports
import { socials } from '../../data'

// Asset imports
import { AboutImg } from '../../assets'

function About() {
  return (
    <>
      <section className="py-12 border-x-2 border-black">
        <div className="container mx-auto px-4 grid gap-10 xl:grid-cols-2">
          <div>
            <h1 className="text-4xl lg:text-5xl xl:text-7xl font-bold mb-20">
              About Meerkat Development
            </h1>
            <p className="mb-12 text-lg text-center">
              <i>"I love to create."</i> <br /> Patrick Lemmer
            </p>
            <p className="mb-6 text-lg">
              Hello! I'm Patrick, from the quote above. Fullstack Developer and
              Photographer. I started Meerkat Development as a creative agency
              combining my profession as developer with over a decade of
              experience as photographer. Web/Mobile Development and Photography
              have a lot in common, as they both require thorough planning
              processes to ensure that the end product comes as close as
              possible to the desired outcome. My skills in both fields allow me
              to craft solutions that reflect your brand and resonate with your
              clients.
              <br />
              Additionally, I have a huge passion for aesthetics and elegant yet
              simple designs that speak a powerful and strong language
              themselves.
            </p>
            <p className="mb-6 text-lg">
              <span className="font-bold">
                Wonder what it's like working with Meerkat Development?
              </span>{' '}
              <br />I find it extremely important to really understand what you
              as a client need. My goal is not to just sell my services, I
              rather aim to provide you with the satisfaction of you being happy
              with the final product. For that reason, I'll be very transparent
              and proactive throught the time we work together. And most
              importantly, you are always welcome to get in touch if you have
              questions.
            </p>
            <div className="text-lg font-bold">Socials:</div>
            <div className="mb-8">
              <ul className="flex gap-6">
                {socials.map((item, index) => (
                  <li key={index}>
                    <a
                      target="_blank"
                      href={item.link}
                      rel="noopener noreferrer"
                      className="py-2 flex flex-col md:flex-row gap-2 items-center justify-center"
                    >
                      <img
                        src={item.icon}
                        alt={item.alt}
                        width="30px"
                        height="30px"
                      />
                      {item.name}
                    </a>
                  </li>
                ))}
                <li></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col">
            <img
              src={AboutImg}
              alt="Office"
              className="border-black border-2 rounded-xl mb-8 md:mx-auto lg:my-auto"
            />
          </div>
        </div>
      </section>
      {/* <Scroller
        text={
          "🚀 In need of some help? Get in touch and let's make it happen 🚀 In need of some help? Get in touch and let's make it happen 🚀 In need of some help? Get in touch and let's make it happen "
        }
        link="/contact"
      /> */}
      <Contact />
    </>
  )
}

export default About
