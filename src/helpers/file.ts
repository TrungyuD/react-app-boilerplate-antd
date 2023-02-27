export const validateFile = (extension: string) => {
  const acceptableFormats = ['jpg', 'png', 'jpeg', 'gif', 'svg+xml', 'svg'];
  if (acceptableFormats.includes(extension)) {
    return true;
  }
  return false;
};
