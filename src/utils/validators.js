// Form validation utilities
export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

export const validatePhone = (phone) => {
  const re = /^[0-9]{10}$/;
  return re.test(phone.replace(/[^\d]/g, ''));
};

export const validateName = (name) => {
  return name.trim().length >= 3;
};

export const validateForm = (formData, requiredFields) => {
  const errors = {};
  
  requiredFields.forEach(field => {
    if (!formData[field] || formData[field].trim() === '') {
      errors[field] = 'This field is required';
    }
  });

  if (formData.email && !validateEmail(formData.email)) {
    errors.email = 'Invalid email address';
  }

  if (formData.phone && !validatePhone(formData.phone)) {
    errors.phone = 'Invalid phone number';
  }

  return Object.keys(errors).length === 0 ? null : errors;
};

// Format date
export const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

// Format currency
export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR'
  }).format(amount);
};

// Truncate text
export const truncateText = (text, length) => {
  if (text.length <= length) return text;
  return text.slice(0, length) + '...';
};

// Generate certificate number
export const generateCertificateNumber = () => {
  const prefix = 'UUS';
  const year = new Date().getFullYear();
  const randomNumber = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
  return `${prefix}-${year}-${randomNumber}`;
};

// Convert file to base64
export const fileToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
};

// Check if file is allowed
export const isAllowedFile = (file, allowedTypes) => {
  return allowedTypes.includes(file.type);
};

// Get file size in MB
export const getFileSizeMB = (file) => {
  return (file.size / (1024 * 1024)).toFixed(2);
};
