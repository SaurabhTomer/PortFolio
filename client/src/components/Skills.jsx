import { 
  FaReact, FaJs, FaNodeJs, FaGitAlt, FaPython, 
  FaDatabase, FaCode, FaHtml5, FaLinux, FaWindows
} from 'react-icons/fa'

const Skills = () => {
  const skills = [
    { name: "React", icon: <FaReact className="w-8 h-8" />, color: "text-cyan-400" },
    { name: "JavaScript", icon: <FaJs className="w-8 h-8" />, color: "text-yellow-400" },
    { name: "Node.js", icon: <FaNodeJs className="w-8 h-8" />, color: "text-green-500" },
    { name: "Python", icon: <FaPython className="w-8 h-8" />, color: "text-blue-500" },
    { name: "HTML5", icon: <FaHtml5 className="w-8 h-8" />, color: "text-orange-500" },
    { name: "Git", icon: <FaGitAlt className="w-8 h-8" />, color: "text-orange-600" },
    { name: "Database", icon: <FaDatabase className="w-8 h-8" />, color: "text-green-600" },
    { name: "Linux", icon: <FaLinux className="w-8 h-8" />, color: "text-gray-300" },
    { name: "Windows", icon: <FaWindows className="w-8 h-8" />, color: "text-blue-700" },
    { name: "Code", icon: <FaCode className="w-8 h-8" />, color: "text-purple-400" }
  ]

  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          Technical <span className="text-blue-400">Skills</span>
        </h2>
        
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center p-4 bg-gray-900 rounded-lg hover:bg-gray-700 transition-all duration-300 hover:transform hover:scale-110"
            >
              <div className={`${skill.color} mb-3`}>
                {skill.icon}
              </div>
              <span className="text-gray-300 text-xs text-center font-medium">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
