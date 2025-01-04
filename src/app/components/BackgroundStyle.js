"use client";

import { useEffect } from "react";
import getImagePath from "./getImagePath";

const BackgroundStyle = () => {
  useEffect(() => {
    const root = document.documentElement;
    const imagePath = getImagePath("/images/connected.png");
    root.style.setProperty("--background-image", `url(${imagePath})`);
  }, []);

  return null;
};

export default BackgroundStyle;
