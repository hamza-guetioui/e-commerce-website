import React, { useState, useEffect } from "react";

function useEventListener(id: string) {
  const [isOpened, setIsOpen] = useState(false);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (!id) return;
      const optionsElement = document.getElementById(id);
      if (!(optionsElement && optionsElement.contains(e.target as Node))) {
        setIsOpen(false);
      }
    };

    if (isOpened) {
      document.body.addEventListener("click", handleClick);
    }

    return () => {
      document.body.removeEventListener("click", handleClick);
    };
  }, [isOpened, id]);

  function toggleIsOpened() {
    setIsOpen((isOpened) => !isOpened);
  }

  return [isOpened, toggleIsOpened] as const;
}

export default useEventListener;
