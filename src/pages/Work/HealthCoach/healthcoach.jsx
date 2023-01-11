// React import
import React from 'react'

// Asset imports
import { HealthCoachCover, HealthCoachWebsite } from '../../../assets'

function HealthCoach() {
  return (
    <>
      <section
        className="py-28 bg-center bg-cover"
        style={{ backgroundImage: 'url(' + HealthCoachCover + ')' }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-lg text-white font-bold uppercase">Customer</h2>
          <h1 className="text-4xl lg:text-5xl xl:text-7xl font-bold mb-6">
            Cara - Health Coach
          </h1>
          <div className="text-lg md:flex gap-12">
            <div className="mb-4 md:mb-0">
              <span className="text-white font-bold block mb-4">Role</span>
              Web Development, Web Design, Photography
            </div>
            <div>
              <span className="font-bold text-white block mb-4">
                Visit Website
              </span>
              {/* Activate once website is live */}
              {/* <a
                target="_blank"
                href="https://www.caralemmer.com"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                www.caralemmer.com
              </a> */}
              <p>Coming soon</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-black border-t-2 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-4">Involvememnt</h1>
          <p className="text-lg max-w-xl mb-16">
            Health Coach Cara approached Meerkat Development in need of a
            business website and a new set of images for her personal brand. We
            are currently building a website, that allows Cara to share her
            expert knowledge and grow her brand.
            <br />
            <br />
            This project is currently still in progress and will be shared on
            this page as soon as possible.
          </p>
          <img
            src={HealthCoachWebsite}
            alt="Health Coach Website Image"
            width="5626"
            height="3393"
            loading="lazy"
            className="mx-auto mb-16 rounded"
          />
          <h1 className="text-3xl font-bold mb-4">Built with:</h1>
          <p className="text-lg max-w-xl mb-16">
            An overview of the technologies used in this project.
          </p>
          <ul className="text-lg flex gap-8">
            <li className="flex flex-col text-center bg-white border-black border-2 rounded-lg p-2">
              <span className="font-bold text-xl">ReactJS</span>
            </li>
            <li className="flex flex-col text-center bg-white border-black border-2 rounded-lg p-2">
              <span className="font-bold text-xl">TailwindCSS</span>
            </li>
            <li className="flex flex-col text-center bg-white border-black border-2 rounded-lg p-2">
              <span className="font-bold text-xl">Netlify</span>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default HealthCoach
