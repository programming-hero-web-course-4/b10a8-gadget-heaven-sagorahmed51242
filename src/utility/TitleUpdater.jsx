import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function TitleUpdater() {
  const location = useLocation();

  useEffect(() => {
    const titles = {
      '/': 'Gadget Heaven',
      '/statistics': 'Statistics Page',
      '/dashboard': 'Dashboard Page',
      '/products': 'Products Page',
    };

    document.title = titles[location.pathname] || 'My React App';
  }, [location]);

  return null; // This component doesn’t render anything on screen
}
export default TitleUpdater