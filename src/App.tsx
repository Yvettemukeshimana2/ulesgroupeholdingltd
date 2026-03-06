 // App.tsx
import "./index.css";
import { RouterProvider } from 'react-router-dom';
import { ParallaxProvider } from "react-scroll-parallax";
import routes from './routes/Routes';

const App = () => {
  return (
    <ParallaxProvider>
      <RouterProvider router={routes} />
    </ParallaxProvider>
  );
};

export default App;
