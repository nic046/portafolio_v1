import { softSkills, softSkills_en, skills, skills_en } from "./Description";

function Skills({ language }) {
  return (
    <section
      id="skills"
      className="bg-light dark:bg-dark py-12 border-b-4 border-b-gray-200"
    >
      <h2 className="text-2xl font-semibold text-center mb-4 dark:text-gray-200 pixel">
        {language === "ES" ? "Habilidades técnicas" : "Technical skills"}
      </h2>

      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(language === "ES" ? skills : skills_en).map((skill, index) => (
            <details
              key={index}
              className="bg-white shadow-md rounded-lg py-6 px-1 hover:shadow-lg overflow-hidden hover:border-blue-500 w-full border-4 border-gray-500"
            >
              <summary className="flex items-center justify-center cursor-pointer mb-4">
                {skill.icon}
                <span className="text-lg font-bold ml-4">{skill.title}</span>
              </summary>
              <p className="text-gray-600 text-sm px-6">{skill.description}</p>
            </details>
          ))}
        </div>

        <div className="mt-12 pixel">
          <h3 className="text-2xl font-semibold text-center mb-4 dark:text-gray-200 ">
            Habilidades Blandas
          </h3>
          <div className="flex flex-wrap justify-center gap-4 ">
            {(language === "ES" ? softSkills : softSkills_en).map(
              (softSkill, index) => (
                <span
                  key={index}
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg text-lg font-medium"
                >
                  {softSkill}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
