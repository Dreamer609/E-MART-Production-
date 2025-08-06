import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

// Layouts
const HomeLayout = lazy(() => import("./layouts/HomeLayout"));
const SignUpLayout = lazy(() => import("./layouts/SignUpLayout"));
const SignInLayout = lazy(() => import("./layouts/SignInLayout"));

// Pages
const HomePage = lazy(() => import("./views/Home"));
const SignUpPage = lazy(() => import("./views/SignUp"));
const SignInPage = lazy(() => import("./views/SignIn"));

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
      {/*Home Page Loader*/}
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

      {/*SignUp Page Loader*/}
      <Route
        element={
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Suspense fallback={<LayoutSkeleton />}>
              <SignUpLayout />
            </Suspense>
          </ErrorBoundary>
        }
      >
        <Route
          path="/signup"
          element={
            <Suspense fallback={<PageSkeleton />}>
              <SignUpPage />
            </Suspense>
          }
        />
      </Route>

      {/*SignIn Page Loader*/}
      <Route
        element={
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Suspense fallback={<LayoutSkeleton />}>
              <SignInLayout />
            </Suspense>
          </ErrorBoundary>
        }
      >
        <Route
          path="/signin"
          element={
            <Suspense fallback={<PageSkeleton />}>
              <SignInPage />
            </Suspense>
          }
        />
      </Route>

      {/* 404 Not Found Route */}
      <Route
        path="*"
        element={
          <div className="flex items-center justify-center h-screen">
            <h1 className="text-2xl font-bold">404 - Page Not Found</h1>
          </div>
        }
      />
    </Routes>
  );
}

export default App;
