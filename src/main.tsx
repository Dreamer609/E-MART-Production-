import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { ErrorBoundary } from "react-error-boundary";
import "./styles/global.css";
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
            <div className=" w-screen h-screen flex flex-col items-center justify-center">
              Loading App ......
            </div>
          }
        >
          <LazyApp />
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  </StrictMode>
);
