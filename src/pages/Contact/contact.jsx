// React imports
import React from 'react'

// Asset imports
import { MeerkatGif } from '../../assets'

// Data imports
import { socials } from '../../data'

function Contact() {
  return (
    <>
      <section className="py-12 border-x-2 border-black">
        <div className="container mx-auto px-4 grid gap-8 lg:grid-cols-2">
          <div>
            <h1 className="text-4xl lg:text-5xl xl:text-7xl font-bold mb-4">
              Contact
            </h1>
            <p className="mb-6 text-lg lg:mr-12">
              Questions? Need help? Do you already have something in mind?{' '}
              <br /> <br /> Have a look at the bottom of this page. There is a
              whole gang of Meerkats ready to help.
              <br /> <br />
              Get in touch via the social links or the contact form below and
              let's chat.
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
          <div>
            <form
              action="https://public.herotofu.com/v1/c5ff3040-7709-11ed-a126-b172cf164538"
              method="post"
            >
              <div className="w-full mb-4">
                <label htmlFor="name" className="form-label inline-block mb-2">
                  Your Name
                </label>
                <input
                  name="Name"
                  id="name"
                  type="text"
                  required
                  className="block w-full px-3 py-2 border-black border-2 rounded"
                />
              </div>
              <div className="w-full mb-4">
                <label htmlFor="name" className="form-label inline-block mb-2">
                  Your Email
                </label>
                <input
                  name="Email"
                  id="email"
                  type="email"
                  required
                  className="block w-full px-3 py-2 border-black border-2 rounded"
                />
              </div>
              <div className="w-full mb-4">
                <label htmlFor="name" className="form-label inline-block mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                  className="block w-full px-3 py-2 border-black border-2 rounded"
                ></textarea>
              </div>
              <div>
                <input
                  type="submit"
                  value="Send"
                  className="px-6 py-4 rounded-md bg-sky-450 hover:bg-sky-550 text-white cursor-pointer"
                />
              </div>
            </form>
          </div>
        </div>
        <div className="p-14 flex md:m-20">
          <img
            src={MeerkatGif}
            className="items-center justify-center h-fit w-fit mx-auto drop-shadow-[10px_-10px_0_rgb(0,0,0)] border-black border rounded-xl overflow-hidden"
          ></img>
        </div>
      </section>
    </>
  )
}

export default Contact
