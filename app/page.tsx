'use client';

import { EducationForm } from '@/components/forms/education-form';
import { PersonalInfoForm } from '@/components/forms/personal-info-form';
import { SkillsForm } from '@/components/forms/skills-form';
import { WorkExperienceForm } from '@/components/forms/work-experience-form';
import { ResumePreview } from '@/components/resume-preview';
import { Card } from '@/components/ui/card';
import { FileText } from 'lucide-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const sections = [
  { id: 'personal', label: 'Personal Info' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills & More' },
];

export default function Home() {
  const searchParams = useSearchParams();
  const currentSection = searchParams.get('section') || sections[0].id;

  const renderForm = () => {
    switch (currentSection) {
      case 'personal':
        return <PersonalInfoForm />;
      case 'experience':
        return <WorkExperienceForm />;
      case 'education':
        return <EducationForm />;
      case 'skills':
        return <SkillsForm />;
      default:
        return <PersonalInfoForm />;
    }
  };

  return (
    <main className="min-h-screen bg-background">
      <div className="flex items-center justify-center py-4 border-b">
        <FileText className="h-8 w-8 text-primary mr-2" />
        <h1 className="text-3xl font-bold text-primary">Resume Builder</h1>
      </div>

      <div className="container mx-auto py-6">
        <div className="flex gap-4">
          <div className="w-1/2">
            <div className="flex gap-2 mb-4">
              {sections.map((section) => (
                <Link
                  key={section.id}
                  href={`?section=${section.id}`}
                  className={`px-4 py-2  ${
                    currentSection === section.id
                      ? 'text-white'
                      : 'text-gray-500'
                  }`}
                >
                  {section.label}
                </Link>
              ))}
            </div>

            <Card className="p-6">{renderForm()}</Card>
          </div>

          <div className="w-1/2 bg-white rounded-lg shadow-lg">
            <ResumePreview />
          </div>
        </div>
      </div>
    </main>
  );
}
