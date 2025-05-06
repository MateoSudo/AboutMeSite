import Image from "next/image";

export default function Projects() {
    const projects = [
      {
        id: 1,
        title: "AI Trading Application",
        description: "Developed a machine learning-based trading platform that analyzes market patterns and historical data to make predictive trade recommendations. The system uses natural language processing to interpret financial news and sentiment analysis to gauge market trends.",
        technologies: ["Python", "TensorFlow", "PyTorch", "React", "Node.js", "MongoDB"],
        image: "/images/trading-app.png",
        isEnterprise: false
      },
      {
        id: 2,
        title: "Android Job Offer Application",
        description: "Built a mobile application that streamlines the job application process. The app features personalized job recommendations, application tracking, and interview scheduling capabilities, resulting in a 40% increase in user engagement.",
        technologies: ["Kotlin", "Java", "Firebase", "RESTful APIs", "Android SDK", "Android Studio"],
        image: "/images/job-app.png",
        isEnterprise: false
      },
      {
        id: 3,
        title: "AI Inventory Optimization Application",
        description: "Created an inventory management system that uses predictive analytics to optimize stock levels. The system reduced inventory costs by 25% while maintaining service levels by accurately forecasting demand patterns and supply chain disruptions.",
        technologies: ["Python", "scikit-learn", "React", "PostgreSQL", "Docker"],
        image: "/images/inventory.jpg",
        isEnterprise: false
      },
      {
        id: 4,
        title: "AI Open Source Data Extraction",
        description: "Created an application to extract structured and unstructured data from open data sources",
        technologies: ["Python", "scikit-learn", "React", "PostgreSQL","MongoDB", "Redis", "Docker", "PyTorch", "Next.js"],
        image: "/images/OSINT.png",
        isEnterprise: false
      },
      {
        id: 5,
        title: "AI Predictive Maintenance",
        description: "Created application in React, Node, and Next.js leveraging AI that predicts when a manufacturing robot will break with 85% accuracey",
        technologies: ["Python", "scikit-learn", "React", "PostgreSQL","MongoDB", "Redis", "Docker", "PyTorch", "React", "Node.js", "Next.js"],
        image: "/images/robot.jpg",
        isEnterprise: false
      }
    ];
  
    return (
      <main className="flex min-h-screen flex-col items-center bg-gray-900 text-white">
        <div className="container flex flex-col items-center gap-12 px-4 py-16">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
            My <span className="text-purple-300">Projects</span>
          </h1>
          <p className="text-lg text-center max-w-2xl mb-8">
            Here are some of the projects I&apos;ve worked on. Please note I am unable to share code for Enterprise projects that I worked on for previous companies.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
            {projects.map((project) => (
              <div 
                key={project.id}
                className="flex flex-col bg-gray-800 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-purple-500/20 transition-all"
              >
                <div className="h-48 bg-gray-700 flex items-center justify-center relative">
                  {project.isEnterprise ? (
                    <div className="flex flex-col items-center justify-center">
                      <div className="text-4xl text-purple-300 mb-2">Enterprise</div>
                      <div className="text-sm text-gray-300">Confidential Project</div>
                    </div>
                  ) : (
                    project.image && (
                      <div className="w-full h-full relative">
                        <Image 
                          src={project.image}
                          alt={project.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 400px"
                          className="object-cover"
                          priority
                        />
                      </div>
                    )
                  )}
                  <div className="absolute top-2 right-2 bg-gray-900/70 px-3 py-1 rounded-full">
                    <span className="text-purple-300 font-bold">#{project.id}</span>
                  </div>
                </div>
                
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-bold text-purple-300 mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="mb-4">
                    <h4 className="text-white font-bold mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span 
                          key={index} 
                          className="bg-purple-900/30 text-purple-300 px-2 py-1 rounded text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    );
  }