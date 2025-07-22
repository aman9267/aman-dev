import { useEffect } from "react";
import { trailingCursor } from "cursor-effects";

const CursorTrail = () => {
  useEffect(() => {
    new trailingCursor();
  }, []);

  return null; // no visual component needed
};

export default CursorTrail;
