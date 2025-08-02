import { Logo } from "@/components/logo";
import { SignUpView } from "@/modules/auth/ui/views/sign-up-view";

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <Logo size="md" />
      </header>

      {/* Sign Up Form */}
      <div className="flex items-center justify-center px-4 pb-16">
        <div className="w-full max-w-md mx-auto">
          <SignUpView />
        </div>
      </div>
    </div>
  );
}
