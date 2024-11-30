"use client";

import { useResumeStore } from "@/lib/store";

export function ResumePreview() {
  const { personalInfo, experiences, education, skills, languages, hobbies, achievements } = useResumeStore();

  return (
    <div className="resume-preview">
      {personalInfo && (
        <div className="mb-6">
          <h1 className="text-2xl font-bold mb-2">{personalInfo.fullName}</h1>
          <p>{personalInfo.email} • {personalInfo.phone}</p>
          <p>{personalInfo.location}</p>
          <p className="mt-2">{personalInfo.summary}</p>
        </div>
      )}

      {experiences?.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-3 border-b border-gray-300">Work Experience</h2>
          {experiences.map((exp, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between">
                <strong>{exp.position}</strong>
                <span>{exp.startDate} - {exp.endDate || 'Present'}</span>
              </div>
              <div>{exp.company}</div>
              <p className="mt-1">{exp.description}</p>
            </div>
          ))}
        </div>
      )}

      {education?.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-3 border-b border-gray-300">Education</h2>
          {education.map((edu, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between">
                <strong>{edu.degree} in {edu.field}</strong>
                <span>{edu.startDate} - {edu.endDate || 'Present'}</span>
              </div>
              <div>{edu.institution}</div>
              {edu.grade && <div>Grade: {edu.grade}</div>}
            </div>
          ))}
        </div>
      )}

      {skills?.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-3 border-b border-gray-300">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span key={index} className="bg-gray-100 px-2 py-1 rounded">
                {skill.name} ({skill.level})
              </span>
            ))}
          </div>
        </div>
      )}

      {languages?.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-3 border-b border-gray-300">Languages</h2>
          <div className="flex flex-wrap gap-2">
            {languages.map((lang, index) => (
              <span key={index} className="bg-gray-100 px-2 py-1 rounded">
                {lang.language} ({lang.proficiency})
              </span>
            ))}
          </div>
        </div>
      )}

      {achievements?.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-3 border-b border-gray-300">Achievements</h2>
          {achievements.map((achievement, index) => (
            <div key={index} className="mb-2">
              <strong>{achievement.title}</strong>
              <p>{achievement.description}</p>
            </div>
          ))}
        </div>
      )}

      {hobbies && (
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-3 border-b border-gray-300">Hobbies & Interests</h2>
          <p>{hobbies}</p>
        </div>
      )}
    </div>
  );
}