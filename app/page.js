import { createClient } from "@/utils/supabase/server";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function HomePage() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();

  const isLoggedIn = !error && data?.user;

  // Redirect to /allnotes if user is logged in
  if (isLoggedIn) {
    redirect("/notes");
  }

  return (
    <main className="h-[calc(100vh-73px)] p-8 flex flex-col items-center">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold text-foreground">
          Join to take down your notes
        </h1>
        <p className="text-lg text-muted-foreground">
          Start organizing your thoughts and ideas today
        </p>
        <div className="flex gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/login">Get Started</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
