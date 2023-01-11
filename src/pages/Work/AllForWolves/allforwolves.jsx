// React import
import React from 'react'

// Asset imports
import { AllForWolvesCover, AllForWolvesWebsite } from '../../../assets'

function AllForWolves() {
  return (
    <>
      <section
        className="py-28 bg-center bg-cover"
        style={{ backgroundImage: 'url(' + AllForWolvesCover + ')' }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-lg text-white font-bold uppercase">Customer</h2>
          <h1 className="text-4xl lg:text-5xl xl:text-7xl font-bold mb-6">
            AllForWolves
          </h1>
          <div className="text-lg md:flex gap-12">
            <div className="mb-4 md:mb-0">
              <span className="text-white font-bold block mb-4">Role</span>
              Web Development, Web Design, Branding
            </div>
            <div>
              <span className="font-bold text-white block mb-4">
                Visit Website
              </span>
              {/* ---- Activate once website is ready ---- */}
              {/* <a
                target="_blank"
                href="https://www.allforwolves.com"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                www.allforwolves.com
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
            AllForWolves is a German initiative founded and managed by a group
            of private volunteers, with the aim to protect the rights of wild
            wolves. Meerkat Development takes care of the development process as
            well as the overall branding and design for AllForWolves. The
            website is a hub for the people involved and offers a variety of
            information around the topic.
            <br />
            <br />
            This project is currently still in progress and will be shared on
            this page as soon as possible.
          </p>
          <img
            src={AllForWolvesWebsite}
            alt="Confido Website Image"
            width="5626"
            height="3393"
            loading="lazy"
            className="mx-auto mb-16"
          />
          <h1 className="text-3xl font-bold mb-4">Built with:</h1>
          <p className="text-lg max-w-xl mb-16">
            An overview of the technologies used in this project.
          </p>
          <ul className="text-lg flex flex-wrap gap-8">
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

export default AllForWolves
