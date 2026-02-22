import { Grade, Stream } from '../backend';

export interface Subject {
  id: string;
  name: string;
  icon: string;
  color: string;
}

export function generateSubjects(grade: Grade, stream?: Stream | null): Subject[] {
  const gradeNum = parseInt(grade.replace('grade', ''));

  // Grades 1-5
  if (gradeNum >= 1 && gradeNum <= 5) {
    return [
      { id: 'english', name: 'English', icon: '📚', color: 'bg-blue-500' },
      { id: 'mathematics', name: 'Mathematics', icon: '🔢', color: 'bg-purple-500' },
      { id: 'evs', name: 'EVS', icon: '🌍', color: 'bg-green-500' },
      { id: 'general-knowledge', name: 'General Knowledge', icon: '🧠', color: 'bg-yellow-500' },
      { id: 'computer-basics', name: 'Computer Basics', icon: '💻', color: 'bg-cyan-500' },
    ];
  }

  // Grades 6-8
  if (gradeNum >= 6 && gradeNum <= 8) {
    return [
      { id: 'english', name: 'English', icon: '📚', color: 'bg-blue-500' },
      { id: 'mathematics', name: 'Mathematics', icon: '🔢', color: 'bg-purple-500' },
      { id: 'science', name: 'Science', icon: '🔬', color: 'bg-green-500' },
      { id: 'social-studies', name: 'Social Studies', icon: '🌏', color: 'bg-orange-500' },
      { id: 'computer-science', name: 'Computer Science', icon: '💻', color: 'bg-cyan-500' },
    ];
  }

  // Grades 9-10
  if (gradeNum >= 9 && gradeNum <= 10) {
    return [
      { id: 'english', name: 'English', icon: '📚', color: 'bg-blue-500' },
      { id: 'mathematics', name: 'Mathematics', icon: '🔢', color: 'bg-purple-500' },
      { id: 'physics', name: 'Physics', icon: '⚛️', color: 'bg-indigo-500' },
      { id: 'chemistry', name: 'Chemistry', icon: '🧪', color: 'bg-pink-500' },
      { id: 'biology', name: 'Biology', icon: '🧬', color: 'bg-green-500' },
      { id: 'social-science', name: 'Social Science', icon: '🌏', color: 'bg-orange-500' },
      { id: 'computer-science', name: 'Computer Science', icon: '💻', color: 'bg-cyan-500' },
    ];
  }

  // Grades 11-12 with streams
  if (gradeNum >= 11 && gradeNum <= 12) {
    if (stream === 'science') {
      return [
        { id: 'physics', name: 'Physics', icon: '⚛️', color: 'bg-indigo-500' },
        { id: 'chemistry', name: 'Chemistry', icon: '🧪', color: 'bg-pink-500' },
        { id: 'biology', name: 'Biology', icon: '🧬', color: 'bg-green-500' },
        { id: 'mathematics', name: 'Mathematics', icon: '🔢', color: 'bg-purple-500' },
        { id: 'computer-science', name: 'Computer Science', icon: '💻', color: 'bg-cyan-500' },
      ];
    } else if (stream === 'commerce') {
      return [
        { id: 'accounts', name: 'Accounts', icon: '💰', color: 'bg-emerald-500' },
        { id: 'business-studies', name: 'Business Studies', icon: '📊', color: 'bg-blue-500' },
        { id: 'economics', name: 'Economics', icon: '📈', color: 'bg-purple-500' },
        { id: 'mathematics', name: 'Mathematics', icon: '🔢', color: 'bg-orange-500' },
      ];
    } else if (stream === 'humanities') {
      return [
        { id: 'history', name: 'History', icon: '📜', color: 'bg-amber-500' },
        { id: 'political-science', name: 'Political Science', icon: '🏛️', color: 'bg-red-500' },
        { id: 'geography', name: 'Geography', icon: '🗺️', color: 'bg-teal-500' },
        { id: 'english', name: 'English', icon: '📚', color: 'bg-blue-500' },
      ];
    }
  }

  return [];
}
