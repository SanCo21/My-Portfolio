const getImagePath = (imagePath) => {
  const prefix = process.env.NODE_ENV === "production" ? "/Portfolio" : "";
  return `${prefix}${imagePath}`;
};

export default getImagePath;
