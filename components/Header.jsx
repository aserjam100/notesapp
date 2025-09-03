import { createClient } from "@/utils/supabase/server";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { logout } from "@/app/login/actions";
import { handleAuth } from "@/app/login/actions";
import { LogoutButton } from "@/components/LoginButtons";

export default async function Header() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();

  const isLoggedIn = !error && data?.user;

  return (
    <header className="border-b border-border bg-background">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left side - Logo/Title */}
        <div className="flex items-center">
          <Link
            href="/"
            className="text-xl font-semibold text-foreground hover:text-foreground/80 transition-colors"
          >
            My Notes
          </Link>
        </div>

        {/* Right side - Action buttons */}
        <div className="flex items-center gap-2">
          {isLoggedIn ? (
            <>
              <Button variant="default" asChild>
                <Link href="/add-note">Add</Link>
              </Button>
              <form action={handleAuth}>
                <LogoutButton />
              </form>
            </>
          ) : (
            <Button variant="default" asChild>
              <Link href="/login">Login</Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
