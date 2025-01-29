import { useEffect } from "react";

export function useShowDisabledButtonTooltip(buttonId: string) {
  useEffect(() => {
    const button = document.getElementById(buttonId);

    const showTooltip = (event: TouchEvent) => {
      event.stopPropagation(); // Prevent closing immediately
      button!.classList.toggle("active");
    };

    const hideTooltip = () => {
      button!.classList.remove("active");
    };

    button!.addEventListener("touchstart", showTooltip);
    document.addEventListener("touchstart", hideTooltip);

    return () => {
      button!.removeEventListener("touchstart", showTooltip);
      document.removeEventListener("touchstart", hideTooltip);
    };
  }, [buttonId]);
}
