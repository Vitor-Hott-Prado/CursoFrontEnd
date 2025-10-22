"use client";

import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.clear();
    router.push("/login");
  };

  return (
    <header className="w-full bg-gray-800 text-white flex justify-between items-center px-6 py-4 shadow-md">
      <h1 className="text-xl font-bold">Clínica Saúde & Bem-estar</h1>
      <button
        onClick={handleLogout}
        className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-md transition-colors"
      >
        Logout
      </button>
    </header>
  );
}
