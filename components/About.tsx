
'use client';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Passionate Software Engineer with 1+ years of experience in full-stack development, 
            specializing in building scalable and maintainable software solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                I&pos;m a dedicated Software Engineer with expertise in full-stack development using Java, 
                Spring Boot, SQL, and Angular. My passion lies in crafting efficient, scalable solutions 
                that solve real-world problems.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Currently, I&pos;m expanding my knowledge in cutting-edge technologies including Microservices 
                architecture, Docker, Kubernetes, CI/CD pipelines, and Machine Learning. I believe in 
                continuous learning and staying updated with the latest industry trends.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                When I&pos;m not coding, you can find me exploring new technologies, contributing to open-source 
                projects, or sharing knowledge with the developer community.
              </p>
            </div>

            <div className="mt-8">
              <a
                href="https://drive.google.com/file/d/1ngkbCdTVjlfMJpzLjjMKFxYm99jbvgKx/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors cursor-pointer whitespace-nowrap"
              >
                <i className="ri-download-line mr-2"></i>
                Download Resume
              </a>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <i className="ri-graduation-cap-line text-blue-600 dark:text-blue-400 mr-3"></i>
                Post Graduate Education
              </h3>
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white">Post Graduate Diploma in Advanced Computing (PG-DAC)</h4>
                <p className="text-gray-600 dark:text-gray-400">Institute for Advanced Computing in Software Development</p>
                <p className="text-gray-500 dark:text-gray-500 text-sm">Sept 2023 – Feb 2024 • 78.1%</p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <i className="ri-graduation-cap-line text-blue-600 dark:text-blue-400 mr-3"></i>
                Undergraduate Education
              </h3>
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white">Bachelor of Technology (B.Tech)</h4>
                <p className="text-gray-600 dark:text-gray-400">Electronics and Telecommunication Engineering</p>
                <p className="text-gray-500 dark:text-gray-500 text-sm">JSPM&pos;s Rajarshi Shahu College of Engineering</p>
                <p className="text-gray-500 dark:text-gray-500 text-sm">June 2019 – July 2023 • 80.1%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
