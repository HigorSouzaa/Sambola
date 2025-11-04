import { useState } from "react";
import AuthHeader from "../../components/AuthHeader";
import AuthSideBanner from "../../components/AuthSideBanner";
import SignInForm from "../../components/SignInForm";
import RegisterForm from "../../components/RegisterForm";


function Auth() {
  const [activeTab, setActiveTab] = useState<"signin" | "register">("signin");

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center p-4 bg-[#f4f4f4] dark:bg-[#101722]">
      <AuthHeader />
      
      <main className="w-full max-w-4xl">
        <div className="grid grid-cols-1 overflow-hidden rounded-xl shadow-2xl dark:shadow-blue-900/20 lg:grid-cols-2">
          {/* Left Side - Banner (Desktop only) */}
          <AuthSideBanner />
          
          {/* Right Side - Form */}
          <div className="flex flex-col bg-white dark:bg-[#182436] p-6 sm:p-10">
            <div className="w-full">
              <h1 className="text-[#1A1A1A] dark:text-white text-3xl font-bold leading-tight tracking-tight">
                {activeTab === "signin" ? "Sign In to Your Account" : "Create Your Account"}
              </h1>
            </div>

            {/* Toggle Tabs */}
            <div className="mt-6">
              <div className="flex h-10 w-full items-center justify-center rounded-lg bg-[#f4f4f4] dark:bg-[#101722] p-1">
                <button
                  onClick={() => setActiveTab("signin")}
                  className={`flex h-full flex-1 items-center justify-center rounded-md px-2 text-sm font-medium leading-normal transition-all ${
                    activeTab === "signin"
                      ? "bg-white dark:bg-[#182436] text-[#1A1A1A] dark:text-white shadow-[0_1px_3px_rgba(0,0,0,0.1)]"
                      : "text-[#60728a] dark:text-[#94a3b8]"
                  }`}
                >
                  Sign In
                </button>
                <button
                  onClick={() => setActiveTab("register")}
                  className={`flex h-full flex-1 items-center justify-center rounded-md px-2 text-sm font-medium leading-normal transition-all ${
                    activeTab === "register"
                      ? "bg-white dark:bg-[#182436] text-[#1A1A1A] dark:text-white shadow-[0_1px_3px_rgba(0,0,0,0.1)]"
                      : "text-[#60728a] dark:text-[#94a3b8]"
                  }`}
                >
                  Register
                </button>
              </div>
            </div>

            {/* Forms */}
            {activeTab === "signin" ? <SignInForm /> : <RegisterForm />}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="absolute bottom-0 w-full p-6 text-center text-xs text-[#60728a] dark:text-[#94a3b8]">
        <p>
          © 2024 SAMBOLA. All rights reserved.{" "}
          <a className="underline hover:text-[#FFD700]" href="#">
            Terms of Service
          </a>{" "}
          &{" "}
          <a className="underline hover:text-[#FFD700]" href="#">
            Privacy Policy
          </a>
        </p>
      </footer>
    </div>
  );
}

export default Auth;
