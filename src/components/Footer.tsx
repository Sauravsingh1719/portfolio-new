import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      name: "GitHub",
      image: "/images/github.png",
      url: "https://github.com/yourusername",
    },
    {
      name: "LinkedIn",
      image: "/images/linkedin.png",
      url: "https://linkedin.com/in/yourusername",
    },
    {
      name: "Instagram",
      image: "/images/instagram.jpg",
      url: "https://instagram.com/yourusername",
    },
  ];

  const quickLinks = [
    { name: "Projects", href: "#projects" },
    { name: "Writings", href: "#writings" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-black  border-t border-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and copyright */}
          <div className="mb-6 md:mb-0">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-white">
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Saurav</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm mt-2">
              © {currentYear}  All rights reserved.
            </p>
          </div>

          {/* Quick links */}
          <div className="mb-6 md:mb-0">
            <div className="flex flex-wrap justify-center gap-6">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Social links */}
          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors"
                aria-label={social.name}
              >
                <img 
                  src={social.image} 
                  alt={social.name} 
                  className="h-5 w-5" 
                />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom text with acknowledgments */}
        <div className="text-center mt-8 pt-6 border-t border-gray-800">
          <p className="text-gray-500 text-xs mb-2">
            Designed and built with ❤️ using Next.js and Tailwind CSS
          </p>
          <p className="text-gray-600 text-xs">
            Special thanks to <a href="https://ui.aceternity.com" target="_blank" rel="noopener" className="hover:text-gray-400">Aceternity UI</a> and 
            {' '}<a href="https://reactbits.dev" target="_blank" rel="noopener" className="hover:text-gray-400">React Bits</a> for inspiration and components
          </p>
        </div>
      </div>
    </footer>
  );
}