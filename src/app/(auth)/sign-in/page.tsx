import { SignInView } from "@/modules/auth/ui/views/sign-in-view";
import { Logo } from "@/components/logo";

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <Logo size="md" />
      </header>

      {/* Sign In Form */}
      <div className="flex items-center justify-center px-4 pb-16">
        <SignInView />
      </div>
    </div>
  );
}