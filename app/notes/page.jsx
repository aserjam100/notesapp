import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function AllNotes() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();
  const isLoggedIn = !error && data?.user;

  if (isLoggedIn) {
    return (
      <main className="h-[calc(100vh-73px)] p-8 flex flex-col items-center">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-foreground">
            Hello {data.user.email}
          </h1>
          <p className="text-lg text-muted-foreground">
            Welcome back to your notes!
          </p>
        </div>
      </main>
    );
  } else {
    revalidatePath("/", "layout");
    redirect("/");
  }
}
