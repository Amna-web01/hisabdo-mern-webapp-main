import React from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, Receipt, ShieldCheck } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between p-4 sm:p-12">
      {/* Header Navigation (Fixed for Mobile Screens) */}
      <header className="max-w-6xl w-full mx-auto flex items-center justify-between py-4 flex-nowrap gap-2">
        <div className="flex items-center gap-1.5 shrink-0 min-w-0">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-emerald-500 flex items-center justify-center text-slate-950 font-bold text-base sm:text-lg shrink-0">
            H
          </div>
          <span className="font-bold text-base sm:text-xl tracking-tight text-white whitespace-nowrap truncate">
            HisabDo App
          </span>
        </div>

        <div className="flex items-center gap-1 sm:gap-3 shrink-0">
          <Link
            href="/login"
            className="px-2.5 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-slate-300 hover:text-white transition-colors whitespace-nowrap"
          >
            Log In
          </Link>
          <Link
            href="/register"
            className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold bg-emerald-500 hover:bg-emerald-400 text-slate-950 rounded-lg transition-colors whitespace-nowrap"
          >
            Get Started
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-4xl mx-auto text-center space-y-8 my-auto py-12">
        <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold px-3 py-1 rounded-full">
          <ShieldCheck className="w-3.5 h-3.5" />
          Smart Local-First Khata
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
          Manage Your <span className="text-emerald-400">Ledger & Expenses</span> Effortlessly
        </h1>

        <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
          HisabDo helps shopkeepers, freelancers, and small businesses log balances, track payments, and manage daily expenses offline and securely.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            href="/register"
            className="w-full sm:w-auto px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/10"
          >
            Create Free Account
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href="/login"
            className="w-full sm:w-auto px-6 py-3 bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-200 font-semibold rounded-lg transition-colors flex items-center justify-center"
          >
            Sign In to Dashboard
          </Link>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12 text-left">
          <div className="bg-slate-900/60 border border-slate-800/80 p-6 rounded-2xl backdrop-blur-sm">
            <BookOpen className="w-6 h-6 text-emerald-400 mb-3" />
            <h3 className="font-bold text-white text-base mb-1">Digital Khata</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              Keep clear track of "Gave Money" (Udhar) and "Got Money" with exact dates, categories, and payment notes.
            </p>
          </div>

          <div className="bg-slate-900/60 border border-slate-800/80 p-6 rounded-2xl backdrop-blur-sm">
            <Receipt className="w-6 h-6 text-emerald-400 mb-3" />
            <h3 className="font-bold text-white text-base mb-1">Daily Expense Tracker</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              Categorize daily business overheads like rent, utilities, and stock inventory to stay on top of daily cash flow.
            </p>
          </div>

          <div className="bg-slate-900/60 border border-slate-800/80 p-6 rounded-2xl backdrop-blur-sm">
            <ShieldCheck className="w-6 h-6 text-emerald-400 mb-3" />
            <h3 className="font-bold text-white text-base mb-1">Offline-First Architecture</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              Your data is stored locally on your device for lightning-fast loading and full control over your private records.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-6xl w-full mx-auto text-center text-xs text-slate-500 py-4 border-t border-slate-900">
        &copy; {new Date().getFullYear()} HisabDo App. Built for seamless business accounting.
      </footer>
    </div>
  );
}