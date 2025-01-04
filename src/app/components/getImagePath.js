const getImagePath = (imagePath) => {
  const prefix = process.env.NODE_ENV === "production" ? "/MyPortfolio" : "";
  return `${prefix}${imagePath}`;
};

export default getImagePath;
