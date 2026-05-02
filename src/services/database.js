import { db } from './firebase';
import { collection, query, where, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';

// Certificate Verification Service
export const verifyCertificate = async (certificateNumber, candidateName) => {
  try {
    const certificatesRef = collection(db, 'certificates');
    const q = query(
      certificatesRef,
      where('certificateNumber', '==', certificateNumber),
      where('candidateName', '==', candidateName)
    );
    
    const querySnapshot = await getDocs(q);
    
    if (querySnapshot.empty) {
      return null;
    }
    
    const doc = querySnapshot.docs[0];
    return { id: doc.id, ...doc.data() };
  } catch (error) {
    console.error('Error verifying certificate:', error);
    throw error;
  }
};

// Slider Management Service
export const getSliderImages = async (sliderType) => {
  try {
    const slidersRef = collection(db, 'sliders');
    const q = query(slidersRef, where('type', '==', sliderType));
    const querySnapshot = await getDocs(q);
    
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error('Error fetching sliders:', error);
    throw error;
  }
};

// Success Stories Service
export const getSuccessStories = async () => {
  try {
    const storiesRef = collection(db, 'successStories');
    const querySnapshot = await getDocs(storiesRef);
    
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error('Error fetching success stories:', error);
    throw error;
  }
};

// Testimonials Service
export const getTestimonials = async () => {
  try {
    const testimonialsRef = collection(db, 'testimonials');
    const querySnapshot = await getDocs(testimonialsRef);
    
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    throw error;
  }
};

// News Service
export const getNews = async () => {
  try {
    const newsRef = collection(db, 'news');
    const querySnapshot = await getDocs(newsRef);
    
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error('Error fetching news:', error);
    throw error;
  }
};

// Admin - Add Slider
export const addSliderImage = async (sliderData) => {
  try {
    const slidersRef = collection(db, 'sliders');
    const docRef = await addDoc(slidersRef, {
      ...sliderData,
      createdAt: new Date(),
    });
    return docRef.id;
  } catch (error) {
    console.error('Error adding slider:', error);
    throw error;
  }
};

// Admin - Add Certificate
export const addCertificate = async (certificateData) => {
  try {
    const certificatesRef = collection(db, 'certificates');
    const docRef = await addDoc(certificatesRef, {
      ...certificateData,
      createdAt: new Date(),
    });
    return docRef.id;
  } catch (error) {
    console.error('Error adding certificate:', error);
    throw error;
  }
};

// Admin - Add Success Story
export const addSuccessStory = async (storyData) => {
  try {
    const storiesRef = collection(db, 'successStories');
    const docRef = await addDoc(storiesRef, {
      ...storyData,
      createdAt: new Date(),
    });
    return docRef.id;
  } catch (error) {
    console.error('Error adding success story:', error);
    throw error;
  }
};

// Admin - Update Document
export const updateDocument = async (collection, docId, data) => {
  try {
    const docRef = doc(db, collection, docId);
    await updateDoc(docRef, {
      ...data,
      updatedAt: new Date(),
    });
  } catch (error) {
    console.error('Error updating document:', error);
    throw error;
  }
};

// Admin - Delete Document
export const deleteDocument = async (collection, docId) => {
  try {
    await deleteDoc(doc(db, collection, docId));
  } catch (error) {
    console.error('Error deleting document:', error);
    throw error;
  }
};
