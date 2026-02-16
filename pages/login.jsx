import { useState } from "react";
import { useRouter } from "next/router";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { supabaseServer } from "@/lib/supabaseServer";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const { error } = await supabaseServer.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      router.push("/dashboard");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-white to-secondary/10">
      <div className="w-full max-w-md bg-white rounded-2xl border border-border_color">
        {/* Header */}
        <div className="px-8 pt-8 pb-6 text-center border-b border-border_color">
          <h1 className="text-2xl font-bold text-soft_black">Admin Panel</h1>
          <p className="text-sm text-gray-500 mt-1">Secure login to continue</p>
        </div>

        {/* Body */}
        <div className="px-8 py-6">
          {error && (
            <div className="mb-4 rounded-lg bg-red-50 border border-red-200 text-red-700 px-4 py-3 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-soft_black mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="admin@company.com"
                className="w-full rounded-lg border border-border_color px-4 py-3 text-sm focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-soft_black mb-1">
                Password
              </label>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full rounded-lg border border-border_color px-4 py-3 pr-11 text-sm focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary transition"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-primary text-white py-3 text-sm font-semibold hover:bg-Secound_primary transition disabled:opacity-60"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>
        </div>

        {/* Footer */}
        <div className="px-8 pb-6 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} Admin System
        </div>
      </div>
    </div>
  );
}
