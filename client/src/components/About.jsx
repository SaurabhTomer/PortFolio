const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          About Saurabh <span className="text-blue-400">Me</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a passionate full-stack developer with a keen eye for design and a love for creating 
              seamless user experiences. With expertise in modern web technologies, I bring ideas to life 
              through clean, efficient code.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              My journey in web development started 3 years ago, and since then, I've worked on various 
              projects ranging from e-commerce platforms to real-time applications. I believe in writing 
              maintainable code and staying updated with the latest industry trends.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
              projects, or sharing knowledge through technical writing and mentoring.
            </p>
          </div>
          
          <div className="bg-gray-900 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-white mb-6">Quick Facts</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-gray-700">
                <span className="text-gray-400">Experience</span>
                <span className="text-white font-medium">3+ Years</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-700">
                <span className="text-gray-400">Projects Completed</span>
                <span className="text-white font-medium">50+</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-700">
                <span className="text-gray-400">Happy Clients</span>
                <span className="text-white font-medium">30+</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-700">
                <span className="text-gray-400">Technologies</span>
                <span className="text-white font-medium">15+</span>
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="text-lg font-semibold text-white mb-3">Education</h4>
              <div className="text-gray-300">
                <p className="font-medium">Bachelor of Computer Science</p>
                <p className="text-sm text-gray-400">University Name • 2018 - 2022</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
