// utils/validation.js
export const validateContact = (contact) => {
  const errors = {};
  if (!contact.name) {
    errors.name = 'Name is required';
  }
  if (!contact.email) {
    errors.email = 'Email is required';
  }
  if (!contact.phone) {
    errors.phone = 'Phone is required';
  }
  return errors;
};
