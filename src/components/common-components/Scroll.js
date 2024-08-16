import React, { useEffect } from "react";

export const Scroll = () => {
  useEffect(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, []);

  return (
    (document.body.scrollTop = 0), (document.documentElement.scrollTop = 0)
  );
};
