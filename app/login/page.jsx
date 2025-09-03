import { handleAuth } from "./actions";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import { LoginButton, SignupButton } from "@/components/LoginButtons";

export default async function LoginPage({ searchParams }) {
  const params = await searchParams;
  const error = await params?.error;

  return (
    <div className="h-[calc(100vh-73px)] flex flex-col justify-center items-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Sign in</h2>
          <p className="mt-2 text-sm text-gray-600">
            Welcome back to your account
          </p>
        </div>

        <form action={handleAuth} className="mt-8 space-y-6">
          {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <div className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
                placeholder="Enter your email"
                autoComplete="on"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
                placeholder="Enter your password"
                autoComplete="current-password"
              />
            </div>
          </div>

          <div className="flex space-x-3">
            <LoginButton />
            <SignupButton />
          </div>
        </form>
      </div>
    </div>
  );
}
