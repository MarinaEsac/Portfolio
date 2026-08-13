import React from "react";

const sitemap = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Work", link: "#work" },
  { name: "Skills", link: "#skills" },
  { name: "Contact me", link: "#contact" },
];

const socials = [
  { label: "LinkedIn", link: "https://www.linkedin.com/in/marina-esac/" },
  { label: "GitHub", link: "https://github.com/MarinaEsac" },
  { label: "Whatsapp", link: "https://wa.me/01284947722" },
  {
    label: "Gmail",
    link: "https://mail.google.com/mail/?view=cm&fs=1&to=marina.hany.esac@gmail.com",
  },
];

const Footer = () => {
  return (
    <footer className="bg-zinc-950 py-16">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12">
          <div>
            <h2 className="text-white text-3xl lg:text-3xl font-bold mb-6 reveal-up">
              Let&apos;s work together today!
            </h2>
            <button
              type="button"
              onClick={() =>
                window.open(
                  "https://mail.google.com/mail/?view=cm&fs=1&to=marina.hany.esac@gmail.com",
                  "_blank"
                )
              }
              className="reveal-up bg-cyan-600 text-white px-6 py-3 rounded-lg flex items-center gap-3 hover:bg-cyan-700 transition-all"
            >
              Start Project
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4 lg:pl-20 text-gray-300">
            <div>
              <p className="reveal-up text-white text-lg font-semibold mb-2">
                Sitemap
              </p>
              <ul className="space-y-2">
                {sitemap.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.link}
                      className="block text-sm
                     text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="reveal-up text-white text-lg font-semibold mb-2">
                Socials
              </p>
              <ul className="space-y-2">
                {socials.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="reveal-up block text-sm
                     text-zinc-400 py-1 transition-colors hover:text-zinc-200"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="reveal-up text-zinc-500 text-sm">
            &copy; {new Date().getFullYear()} Marina Esac. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
