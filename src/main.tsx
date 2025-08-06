import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { ErrorBoundary } from "react-error-boundary";
import "./🌍_styles/global.css";
import { BrowserRouter } from "react-router-dom";

const LazyApp: React.FC = lazy(() => import("./App"));
          
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ErrorBoundary
        onError={(error) => console.error("Caught:", error.message)}
        fallback={<span>Something went wrong</span>}
      >
        <Suspense
          fallback={
            <div className=" w-screen h-screen flex flex-col items-center justify-center bg-black gap-2">
              <h2 className="text-4xl font-bold text-gray-700">E-MART</h2>
              <p className="text-white font-medium text-sm">Trade with Trust</p>
            </div>
          }
        >
          <LazyApp />
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  </StrictMode>
);
