
'use client';

import Image from 'next/image';

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Removed unused downloadResume function to fix compile error.

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden"
      style={{
        backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20abstract%20geometric%20patterns%20with%20subtle%20gradients%20in%20blue%20and%20purple%20tones%2C%20minimal%20clean%20design%2C%20professional%20technology%20background%2C%20soft%20lighting%20effects%2C%20contemporary%20digital%20workspace%20atmosphere%2C%20sleek%20minimalist%20aesthetic&width=1920&height=1080&seq=hero-bg&orientation=landscape')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-white/90 dark:bg-gray-900/90"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">Hello, I&pos;m</p>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                Abhishek Mahajan
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-6">
                Software Engineer
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
                Crafting scalable and efficient software solutions with a passion for innovation
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => scrollToSection('portfolio')}
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors cursor-pointer whitespace-nowrap"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-gray-900 rounded-lg font-medium transition-colors cursor-pointer whitespace-nowrap"
              >
                Get In Touch
              </button>
            </div>

            <div className="flex justify-center lg:justify-start space-x-6 mt-8">
              <a
                href="https://github.com/Venom0011"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
              >
                <i className="ri-github-fill text-xl"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/abhishek-mahajan-403886212/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
              >
                <i className="ri-linkedin-fill text-xl"></i>
              </a>
              <a
                href="https://leetcode.com/u/am_2001/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
              >
                <Image
                  src="https://static.readdy.ai/image/dbcfefec4a3cfeb8cf71832156f1f84c/5871f48262e01f2325b178001adf5dba.png"
                  alt="LeetCode"
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
              </a>
              <a
                href="https://www.geeksforgeeks.org/user/abhishekmahajan255/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
              >
                <Image
                  src="https://static.readdy.ai/image/dbcfefec4a3cfeb8cf71832156f1f84c/f76d1c13726133b6f2e4b426422e2bb4.png"
                  alt="GeeksforGeeks"
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-2xl">
                <Image
                  src="https://static.readdy.ai/image/dbcfefec4a3cfeb8cf71832156f1f84c/ba12912f86dd1a25675a2a02e10522be.jfif"
                  alt="Abhishek Mahajan"
                  width={384}
                  height={384}
                  className="w-full h-full object-cover object-top"
                  priority
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-100 dark:bg-blue-900 rounded-full opacity-70"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-100 dark:bg-purple-900 rounded-full opacity-50"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection('about')}
          className="w-10 h-10 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
        >
          <i className="ri-arrow-down-line text-2xl"></i>
        </button>
      </div>
    </section>
  );
}
