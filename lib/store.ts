import { create } from 'zustand';

interface PersonalInfo {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  summary: string;
}

interface Experience {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
}

interface Education {
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  grade?: string;
}

interface Skill {
  name: string;
  level: string;
}

interface Language {
  language: string;
  proficiency: string;
}

interface Achievement {
  title: string;
  description: string;
}

interface ResumeStore {
  personalInfo: PersonalInfo | null;
  experiences: Experience[];
  education: Education[];
  skills: Skill[];
  languages: Language[];
  hobbies: string;
  achievements: Achievement[];
  setPersonalInfo: (info: PersonalInfo) => void;
  setExperiences: (experiences: Experience[]) => void;
  setEducation: (education: Education[]) => void;
  setSkills: (skills: Skill[]) => void;
  setLanguages: (languages: Language[]) => void;
  setHobbies: (hobbies: string) => void;
  setAchievements: (achievements: Achievement[]) => void;
}

export const useResumeStore = create<ResumeStore>((set) => ({
  personalInfo: null,
  experiences: [],
  education: [],
  skills: [],
  languages: [],
  hobbies: '',
  achievements: [],
  setPersonalInfo: (info) => set({ personalInfo: info }),
  setExperiences: (experiences) => set({ experiences }),
  setEducation: (education) => set({ education }),
  setSkills: (skills) => set({ skills }),
  setLanguages: (languages) => set({ languages }),
  setHobbies: (hobbies) => set({ hobbies }),
  setAchievements: (achievements) => set({ achievements }),
}));
