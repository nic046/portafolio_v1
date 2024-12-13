import { useEffect } from "react";

const useActiveMenu = (sectionsRefs, navLinksRefs) => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      sectionsRefs.current.forEach((section, index) => {
        if (
          scrollPosition >= section.offsetTop &&
          scrollPosition < section.offsetTop + section.offsetHeight
        ) {
          navLinksRefs.current.forEach((link) => link.classList.remove("active"));
          navLinksRefs.current[index].classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionsRefs, navLinksRefs]);
};

export default useActiveMenu;
