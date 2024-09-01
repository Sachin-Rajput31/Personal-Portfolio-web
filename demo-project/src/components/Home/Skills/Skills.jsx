import React from 'react';

const SkillsSection = () => {
  const technicalSkills = [
    'Java',
    'Python',
    'JavaScript',];
    const frontend=['HTML',
    'CSS',
    'Bootstrap',
    'React',
    'Tailwind CSS',];
    const backend=[
    'Node.js',
    'Express',
    'MySQL',
    'MongoDB',
    ];
    
    const versioncontrol=[
    
    'Git',
    'VSCode',
  ];

  const softSkills = [
    'Problem Solving',
    'Negotiation',
    'Adaptation',
    'AI Prompting (ChatGPT)',
    'Gmini',
  
  ];

  return (
    <section className="py-10 bg-gradient-to-r from-pink-200 to-transparent">
      <div className="container mx-auto">
        <h2 className="text-3xl text-red-500 
       underline underline-offset-4  shadow-indigo-300 shadow-lg  font-extrabold -inset-2 tracking-tighter text-center mb-6">-Skills-</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold tracking-wider mb-4">Programming Languages :</h3>
            <ul className="list-disc  list-inside">
              {technicalSkills.map((skill, index) => (
                <li key={index} className="text-xl px-7 hover:scale-110  hover:font-semibold hover:text-cyan-500 ring-indigo-300 mb-2">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold tracking-wider mb-4"> Frontend :</h3>
            <ul className="list-disc  list-inside">
              {frontend.map((skill, index) => (
                <li key={index} className="text-xl px-7 hover:scale-110  hover:font-semibold hover:text-cyan-500 ring-indigo-300 mb-2">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold tracking-wider mb-4">Backend :</h3>
            <ul className="list-disc  list-inside">
              {backend.map((skill, index) => (
                <li key={index} className="text-xl px-7 hover:scale-110  hover:font-semibold hover:text-cyan-500 ring-indigo-300 mb-2">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold tracking-wider mb-4">Version Control/Tools :</h3>
            <ul className="list-disc  list-inside">
              {versioncontrol.map((skill, index) => (
                <li key={index} className="text-xl px-7 hover:scale-110  hover:font-semibold hover:text-cyan-500 ring-indigo-300 mb-2">
                  {skill}
                </li>
              ))}
            </ul>
          </div>




          <div>
            <h3 className="text-2xl font-semibold tracking-wider mb-4">Soft Skills :</h3>
            <ul className="list-disc  list-inside">
              {softSkills.map((skill, index) => (
                <li key={index} className="text-xl px-7  hover:scale-110  hover:font-semibold hover:text-cyan-500 ring-indigo-300 mb-2">
                  {skill}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SkillsSection;