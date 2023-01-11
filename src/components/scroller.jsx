import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

function Scroller({ text, link }) {
  return (
    <section>
      <Link to={link}>
        <Marquee
          pauseOnHover
          gradient={false}
          className="bg-amber-400 border-t-2 border-black py-2 font-bold text-3xl"
        >
          {text}
        </Marquee>
      </Link>
    </section>
  );
}

export default Scroller;
