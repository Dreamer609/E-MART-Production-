import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

// Layouts
const HomeLayout = lazy(() => import("./views_layouts/HomeLayout"));

// Pages
const HomePage = lazy(() => import("./views/Home"));

// Error fallback component
const ErrorFallback = ({ error }: { error: Error }) => (
  <div role="alert" className="p-4 text-red-500">
    <h2 className="text-lg font-medium">Something went wrong</h2>
    <pre className="mt-2 text-sm">{error.message}</pre>
  </div>
);

// Skeleton loaders
const LayoutSkeleton = () => (
  <div className="min-h-screen flex flex-col">
    <header className="h-16 bg-gray-100 animate-pulse" />
    <main className="flex-1 bg-gray-50" />
    <footer className="h-16 bg-gray-100" />
  </div>
);

const PageSkeleton = () => (
  <div className="p-4 space-y-4">
    <div className="h-8 bg-gray-200 rounded w-1/2 animate-pulse" />
    <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse" />
    <div className="h-40 bg-gray-200 rounded animate-pulse" />
  </div>
);

function App() {
  return (
    <Routes>
      <Route
        element={
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Suspense fallback={<LayoutSkeleton />}>
              <HomeLayout />
            </Suspense>
          </ErrorBoundary>
        }
      >
        <Route
          path="/"
          element={
            <Suspense fallback={<PageSkeleton />}>
              <HomePage />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
