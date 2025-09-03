"use client";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

export function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      name="action"
      value="login"
      disabled={pending}
      className="flex-1"
    >
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ...
        </>
      ) : (
        "Sign in"
      )}
    </Button>
  );
}

export function SignupButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      name="action"
      value="signup"
      variant="secondary"
      disabled={pending}
      className="flex-1"
    >
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ...
        </>
      ) : (
        "Sign up"
      )}
    </Button>
  );
}

export function LogoutButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      name="action"
      value="logout"
      variant="secondary"
      disabled={pending}
      className="flex-1"
    >
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Signing out...
        </>
      ) : (
        "Sign Out"
      )}
    </Button>
  );
}
