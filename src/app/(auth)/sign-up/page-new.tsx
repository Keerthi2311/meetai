import { Logo } from "@/components/logo";

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
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Join MeetAI
            </h1>
            <p className="text-muted-foreground mt-2">
              Create your account to get started
            </p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm border rounded-lg p-8 shadow-2xl">
            <p className="text-center text-muted-foreground">
              Sign-up form coming soon...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
