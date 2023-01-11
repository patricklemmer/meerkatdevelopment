// React import
import React from 'react'

// Asset imports
import { PatrickLemmerDevCover, PatrickLemmerDevWebsite } from '../../../assets'

function PatrickLemmerDev() {
  return (
    <>
      <section
        className="py-28 bg-center bg-cover"
        style={{ backgroundImage: 'url(' + PatrickLemmerDevCover + ')' }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-lg text-white font-bold uppercase">Customer</h2>
          <h1 className="text-3xl lg:text-5xl xl:text-7xl font-bold mb-6">
            Patrick - Software Developer
          </h1>
          <div className="text-lg md:flex gap-12">
            <div className="mb-4 md:mb-0">
              <span className="text-white font-bold block mb-4">Role</span>
              Web Development, Web Design
            </div>
            <div>
              <span className="font-bold text-white block mb-4">
                Visit Website
              </span>
              <a
                target="_blank"
                href="https://www.patricklemmer.dev"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                www.patricklemmer.dev
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-black border-t-2 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-4">Involvememnt</h1>
          <p className="text-lg max-w-xl mb-16">
            Meerkat Development designed and created this portfolio website from
            scratch. It's a simple website, with the focus on the developer's
            portfolio projects. Who owns this site? The animation on the front
            page, might give it away.
          </p>
          <img
            src={PatrickLemmerDevWebsite}
            alt="Portfolio Website Image"
            width="5626"
            height="3393"
            loading="lazy"
            className="mx-auto mb-16 rounded"
          />
          <h1 className="text-3xl font-bold mb-4">Built with:</h1>
          <p className="text-lg max-w-xl mb-16">
            An overview of the technologies used in this project.
          </p>
          <ul className="text-lg flex flex-wrap gap-8">
            <li className="flex flex-col text-center bg-white border-black border-2 rounded-lg p-2">
              <span className="font-bold text-xl">HTML</span>
            </li>
            <li className="flex flex-col text-center bg-white border-black border-2 rounded-lg p-2">
              <span className="font-bold text-xl">CSS</span>
            </li>
            <li className="flex flex-col text-center bg-white border-black border-2 rounded-lg p-2">
              <span className="font-bold text-xl">JavaScript</span>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default PatrickLemmerDev
