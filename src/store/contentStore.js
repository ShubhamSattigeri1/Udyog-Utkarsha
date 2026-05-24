import { create } from 'zustand';

const useContentStore = create((set) => ({
  // Header Content
  header: {
    marathi_image: null,
    english_image: null,
    contact: '8208305484',
    email: 'udyogutkarsh@gmail.com',
    website: 'www.udyogutkarsh.org.in',
    regNo: 'F/16709/Satara',
  },

  updateHeader: (headerData) => set((state) => ({
    header: { ...state.header, ...headerData },
  })),

  // News Ticker Items
  newsItems: [
    {
      id: 1,
      content: 'The latest news or updates related to the activities of NGO will be displayed here.',
      date: new Date().toISOString(),
    },
  ],

  addNewsItem: (content) => set((state) => ({
    newsItems: [
      ...state.newsItems,
      {
        id: Date.now(),
        content,
        date: new Date().toISOString(),
      },
    ],
  })),

  updateNewsItem: (id, content) => set((state) => ({
    newsItems: state.newsItems.map((item) =>
      item.id === id ? { ...item, content } : item
    ),
  })),

  deleteNewsItem: (id) => set((state) => ({
    newsItems: state.newsItems.filter((item) => item.id !== id),
  })),

  // Homepage Content
  homeContent: {
    video: null,
    videoStatus: 'In process — not ready yet',
    upcomingProgramsSlider: [],
  },

  updateHomeContent: (content) => set((state) => ({
    homeContent: { ...state.homeContent, ...content },
  })),

  addHomesliderImage: (image) => set((state) => ({
    homeContent: {
      ...state.homeContent,
      upcomingProgramsSlider: [
        ...state.homeContent.upcomingProgramsSlider,
        { id: Date.now(), url: image },
      ],
    },
  })),

  removeHomeSliderImage: (id) => set((state) => ({
    homeContent: {
      ...state.homeContent,
      upcomingProgramsSlider: state.homeContent.upcomingProgramsSlider.filter(
        (img) => img.id !== id
      ),
    },
  })),

  // College Training Programs Content
  collegeContent: {
    finishedProgramsSlider: [],
  },

  updateCollegeContent: (content) => set((state) => ({
    collegeContent: { ...state.collegeContent, ...content },
  })),

  addCollegeSliderImage: (image) => set((state) => ({
    collegeContent: {
      ...state.collegeContent,
      finishedProgramsSlider: [
        ...state.collegeContent.finishedProgramsSlider,
        { id: Date.now(), url: image },
      ],
    },
  })),

  removeCollegeSliderImage: (id) => set((state) => ({
    collegeContent: {
      ...state.collegeContent,
      finishedProgramsSlider: state.collegeContent.finishedProgramsSlider.filter(
        (img) => img.id !== id
      ),
    },
  })),

  // Form Submissions
  collegeTrainingRequests: [],
  studentEnrollments: [],

  addCollegeTrainingRequest: (formData) => set((state) => ({
    collegeTrainingRequests: [
      ...state.collegeTrainingRequests,
      { id: Date.now(), ...formData, submittedAt: new Date().toISOString() },
    ],
  })),

  addStudentEnrollment: (formData) => set((state) => ({
    studentEnrollments: [
      ...state.studentEnrollments,
      { id: Date.now(), ...formData, submittedAt: new Date().toISOString() },
    ],
  })),

  deleteCollegeRequest: (id) => set((state) => ({
    collegeTrainingRequests: state.collegeTrainingRequests.filter(
      (item) => item.id !== id
    ),
  })),

  deleteStudentEnrollment: (id) => set((state) => ({
    studentEnrollments: state.studentEnrollments.filter(
      (item) => item.id !== id
    ),
  })),
}));

export default useContentStore;
