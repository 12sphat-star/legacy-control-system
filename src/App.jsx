import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Landmark,
  FolderHeart,
  FileText,
  ArrowRight,
  CheckCircle2,
  HeartPulse,
  Home,
  Users,
  BadgeHelp,
  Phone,
  Mail,
  ScrollText,
  Wallet,
  Building2,
  Stethoscope,
  Lock,
  BookOpen,
  PiggyBank,
  CircleDollarSign,
  Menu,
  X,
} from "lucide-react";

const brand = {
  name: "Legacy Control System™",
  headerTag: "Private Trust Planning",
  tagline:
    "A guided trust-based planning system built to help everyday families create more clarity, control, and continuity.",
};

const nav = [
  { key: "home", label: "Home" },
  { key: "what-is-a-trust", label: "What Is a Trust System" },
  { key: "package", label: "What’s Included" },
  { key: "legacy-strategy", label: "Legacy Strategy" },
  { key: "review", label: "Review" },
  { key: "booking", label: "Book" },
];

const packageItems = [
  {
    slug: "summary-of-trust",
    title: "Summary of Trust",
    icon: ScrollText,
    short:
      "A plain-English overview of how your trust system is organized and how the documents work together.",
    what:
      "This is the simplified explanation of the trust package. It gives the client and family a practical overview of the major parts of the trust structure without needing to read every page of the formal documents first.",
    why:
      "Most people are overwhelmed by legal language. This summary matters because it turns complexity into clarity. It helps the client understand what they put in place, who is involved, and how the system is meant to function.",
    when:
      "It is used right away after the package is prepared and any time the client or a family member needs a clear, high-level reference point.",
    fit:
      "Think of this as the front-of-the-folder explanation. It helps the entire trust system feel more understandable and usable.",
  },
  {
    slug: "revocable-living-trust",
    title: "Revocable Living Trust",
    icon: Landmark,
    short:
      "The core document that helps organize ownership, control, and distribution of assets inside the trust system.",
    what:
      "A revocable living trust is the main legal structure in the package. It allows a person to place assets into a trust while still maintaining control during life. It can usually be updated, amended, or revoked while the creator is living and competent.",
    why:
      "This matters because many families do not only need instructions after death. They need structure during life, during incapacity, and during transition. A trust can help reduce delay, create privacy, and provide a smoother path for handling assets.",
    when:
      "It is used when a person wants a more complete system than a will alone, especially when they want to organize how property, accounts, business interests, or family distributions should be handled.",
    fit:
      "This is the center of the system. Other documents support it, protect it, or help it work more effectively.",
  },
  {
    slug: "certification-of-trust",
    title: "Certification of Trust",
    icon: FileText,
    short:
      "A shorter trust verification document used to prove the trust exists without revealing the full trust agreement.",
    what:
      "This is a condensed trust document that confirms the trust exists, identifies the trustee, and can be shown to banks, institutions, or third parties that need proof of authority.",
    why:
      "It matters because it helps preserve privacy. Instead of handing over the full trust agreement, the client can often provide this shorter certification and still show that the trust is valid and active.",
    when:
      "It is typically used when opening or retitling accounts, dealing with financial institutions, proving trustee authority, or handling certain property transactions.",
    fit:
      "It acts like the trust’s proof-of-authority document. It supports administration and funding without exposing unnecessary private details.",
  },
  {
    slug: "assignment-of-property",
    title: "Assignment of Property",
    icon: Home,
    short:
      "A document used to move certain personal property interests into the trust structure.",
    what:
      "This document is used to assign ownership interests in eligible personal property from the individual to the trust. It can help connect items that are not always transferred by title alone.",
    why:
      "A trust system only works properly when assets are actually connected to it. Many people believe they have a trust, but the trust was never properly linked to what they own. This document helps solve that problem.",
    when:
      "It is used when transferring certain personal property categories, ownership rights, or other eligible interests into the trust framework.",
    fit:
      "This is one of the funding tools. It helps move the trust from theory into actual ownership structure.",
  },
  {
    slug: "pour-over-will",
    title: "Pour-Over Will",
    icon: FolderHeart,
    short:
      "A backup will designed to direct assets left outside the trust back into the trust plan.",
    what:
      "A pour-over will is a supporting will that says if any probate assets were left outside the trust, they should be directed into the trust at death and handled according to the trust’s instructions.",
    why:
      "It matters because people do not always move every single asset into the trust perfectly. This document acts as a safety net so the larger trust plan is still reinforced.",
    when:
      "It is used as a backup protection document and is especially important if an asset was overlooked, newly acquired, or never retitled into the trust.",
    fit:
      "This document supports the trust by catching loose ends and sending them back into the main system whenever possible.",
  },
  {
    slug: "funding-guide",
    title: "Funding Guide",
    icon: BookOpen,
    short:
      "The practical guide that explains how to connect accounts, property, and beneficiary designations to the trust system.",
    what:
      "The funding guide explains the follow-through process. It shows the client how to retitle or connect assets properly so the trust is not just signed, but actually functional.",
    why:
      "This may be one of the most important pieces in the package because an unfunded or partially funded trust can leave major assets outside the plan. In plain terms, a trust cannot control what was never connected to it.",
    when:
      "It is used immediately after the trust package is completed and again later whenever the client buys new property, opens new accounts, or updates beneficiaries.",
    fit:
      "This is the how-to guide that turns the trust package into a working system.",
  },
  {
    slug: "financial-power-of-attorney",
    title: "Financial Power of Attorney",
    icon: Wallet,
    short:
      "A document that lets a trusted person step in to handle financial matters if the client becomes unable to act.",
    what:
      "This legal document authorizes a chosen person to act on the client’s behalf for financial matters according to the powers granted in the document.",
    why:
      "It matters because without this authority, even a spouse or close family member may run into barriers when trying to access accounts, pay bills, manage property, or keep daily life moving during incapacity.",
    when:
      "It is used during incapacity, emergencies, illness, absence, or any situation where the client cannot personally manage financial affairs.",
    fit:
      "This supports the trust system by covering authority issues that may arise outside direct trust administration.",
  },
  {
    slug: "hipaa-release",
    title: "HIPAA Release",
    icon: Lock,
    short:
      "A privacy authorization that allows designated people to access needed medical information.",
    what:
      "This document gives named individuals permission to receive protected health information so they can speak with providers and understand the client’s medical situation.",
    why:
      "It matters because people often assume loved ones can automatically get medical information, but privacy rules can create real barriers. This document helps remove that friction.",
    when:
      "It is used whenever a doctor, hospital, or healthcare provider needs formal permission to release medical information to someone helping the client.",
    fit:
      "It supports the healthcare side of the system by helping the right people get the right information at the right time.",
  },
  {
    slug: "medical-power-of-attorney",
    title: "Medical Power of Attorney",
    icon: Stethoscope,
    short:
      "A document that gives a trusted person authority to make healthcare decisions when the client cannot.",
    what:
      "This document names someone to speak and make medical decisions on the client’s behalf if the client becomes unable to communicate or make informed decisions.",
    why:
      "It matters because serious medical moments are not the time to leave family guessing or waiting. This document can reduce confusion, delay, and conflict when decisions need to be made.",
    when:
      "It is used during incapacity, emergencies, serious illness, hospitalization, or any situation where healthcare decisions must be made for the client.",
    fit:
      "This is one of the key incapacity documents. It gives legal decision-making authority on the healthcare side of the plan.",
  },
  {
    slug: "healthcare-directive",
    title: "Healthcare Directive",
    icon: HeartPulse,
    short:
      "A written statement of the client’s treatment wishes and end-of-life care preferences.",
    what:
      "This document records the client’s preferences regarding treatment, life support, comfort care, and other healthcare decisions.",
    why:
      "It matters because families are often forced to make emotional decisions under pressure. Written direction gives them clarity and reduces guesswork during painful moments.",
    when:
      "It is used when major treatment decisions arise and medical teams or loved ones need clear guidance on what the client wants.",
    fit:
      "It works alongside the medical power of attorney by giving direction to the person who may need to make those decisions.",
  },
  {
    slug: "remembrance-memorandum",
    title: "Remembrance & Memorandum",
    icon: Users,
    short:
      "A place for personal wishes, family notes, service preferences, and meaningful personal instructions.",
    what:
      "This document can include personal wishes, family guidance, service preferences, and instructions for meaningful personal items or remembrance details.",
    why:
      "It matters because legacy is not only financial. Families also want guidance on the personal side of life, memory, and meaning.",
    when:
      "It is used when the client wants to communicate personal intentions beyond the main legal documents.",
    fit:
      "This adds the human side to the trust system and helps complete the family experience of the plan.",
  },
];

const faqs = [
  {
    q: "What is a trust system in simple terms?",
    a: "It is a coordinated set of documents and instructions designed to help organize who is in control, how assets are handled, and what happens if life changes suddenly.",
  },
  {
    q: "Why is a will alone often not enough?",
    a: "Because a will is still a probate document. Many families want something more complete that also addresses privacy, incapacity, and the practical handling of assets.",
  },
  {
    q: "Do I need this if I am not wealthy?",
    a: "Many people use this type of planning for clarity, control, and protection, not only because of wealth level. It is often about making life easier for the people you love.",
  },
  {
    q: "Why does funding the trust matter so much?",
    a: "Because the trust system works best when assets are properly connected to it. A trust cannot fully guide what was never placed into or aligned with the plan.",
  },
];

function cls(...parts) {
  return parts.filter(Boolean).join(" ");
}

function Button({
  children,
  onClick,
  variant = "primary",
  size = "md",
  type = "button",
  className = "",
}) {
  const base =
    "inline-flex items-center justify-center rounded-full font-medium transition focus:outline-none focus:ring-2 focus:ring-amber-400";
  const variants = {
    primary: "bg-slate-950 text-white hover:bg-slate-800",
    outline: "border border-slate-300 bg-white text-slate-950 hover:bg-slate-50",
    ghostDark:
      "border border-white/30 bg-transparent text-white hover:bg-white hover:text-slate-950",
    light: "bg-white text-slate-950 hover:bg-slate-100",
  };
  const sizes = {
    md: "px-6 py-3 text-sm",
    lg: "px-7 py-4 text-base",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={cls(base, variants[variant], sizes[size], className)}
    >
      {children}
    </button>
  );
}

function Card({ children, className = "" }) {
  return (
    <div
      className={cls(
        "rounded-3xl border border-slate-200 bg-white shadow-sm",
        className
      )}
    >
      {children}
    </div>
  );
}

function CardContent({ children, className = "" }) {
  return <div className={className}>{children}</div>;
}

function Input({ ...props }) {
  return (
    <input
      {...props}
      className={cls(
        "w-full rounded-2xl border border-slate-300 px-4 py-3 text-slate-950 outline-none transition focus:border-amber-500",
        props.className
      )}
    />
  );
}

function Textarea({ ...props }) {
  return (
    <textarea
      {...props}
      className={cls(
        "w-full rounded-2xl border border-slate-300 px-4 py-3 text-slate-950 outline-none transition focus:border-amber-500",
        props.className
      )}
    />
  );
}

function SectionTitle({ eyebrow, title, body, light = false, center = false }) {
  return (
    <div className={cls("max-w-3xl space-y-3", center && "mx-auto text-center")}>
      <p
        className={cls(
          "text-sm font-semibold uppercase tracking-[0.2em]",
          light ? "text-amber-400" : "text-amber-600"
        )}
      >
        {eyebrow}
      </p>
      <h2
        className={cls(
          "text-3xl font-semibold tracking-tight md:text-4xl",
          light ? "text-white" : "text-slate-950"
        )}
      >
        {title}
      </h2>
      {body ? (
        <p
          className={cls(
            "text-base leading-7 md:text-lg",
            light ? "text-slate-300" : "text-slate-600"
          )}
        >
          {body}
        </p>
      ) : null}
    </div>
  );
}

function Header({ setPage }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const go = (key) => {
    setPage(key);
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur">
     <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 md:px-6 lg:py-5">
        <button
        className="min-w-0 flex-1 text-left md:max-w-md"
          onClick={() => go("home")}
        >
          <div className="text-xl font-semibold tracking-tight text-slate-950 md:text-2xl">
            {brand.name}
          </div>
          <div className="mt-1 text-sm text-slate-500">{brand.headerTag}</div>
        </button>

   <nav className="hidden items-center gap-5 xl:gap-6 lg:flex">
          {nav.map((item) => (
            <button
              key={item.key}
              onClick={() => go(item.key)}
              className="text-sm font-medium text-slate-600 transition hover:text-slate-950"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="hidden shrink-0 lg:block">
          <Button onClick={() => go("review")} className="whitespace-nowrap">
            Start My Review
          </Button>
        </div>

        <button
          className="rounded-full border border-slate-300 p-3 text-slate-700 lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen ? (
        <div className="border-t border-slate-200 bg-white px-4 py-4 lg:hidden">
          <div className="grid gap-3">
            {nav.map((item) => (
              <button
                key={item.key}
                onClick={() => go(item.key)}
                className="rounded-2xl border border-slate-200 px-4 py-3 text-left text-sm font-medium text-slate-700"
              >
                {item.label}
              </button>
            ))}
            <Button onClick={() => go("review")}>Start My Review</Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}

function Hero({ setPage }) {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.2),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.12),transparent_28%)]" />
<div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-2 md:px-6 md:py-20 lg:gap-14 lg:py-24">
       <div className="max-w-2xl space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">
            Trust-based estate structure
          </p>
<h1 className="max-w-2xl text-4xl font-semibold tracking-tight leading-tight md:text-6xl">  A guided trust system built to help families protect what they’ve built.
          </h1>
         <p className="max-w-2xl text-lg leading-8 text-slate-300 md:max-w-xl">
            Legacy Control System™ helps everyday families understand what a trust is,
            what belongs in a complete planning package, and how a structured estate
            plan can create more clarity, control, and continuity.
          </p>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">
              What this is
            </p>
            <p className="mt-3 text-base leading-7 text-slate-300">
              A guided document and education system for people who want more than a pile
              of paperwork. This experience is built to help clients understand the system,
              take the right next step, and move forward with more confidence.
            </p>
          </div>

         <div className="rounded-3xl bg-slate-950 p-7 text-white">
  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">
    Next step
  </p>
  <h3 className="mt-3 text-2xl font-semibold">
    See how this fits into your situation.
  </h3>
  <p className="mt-3 max-w-2xl leading-7 text-slate-300">
    Start with a private review or book a strategy call to understand which parts
    of the system matter most for your family, your assets, and your goals.
  </p>

  <div className="mt-6 flex flex-wrap gap-3">
    <Button variant="light" onClick={() => setPage("review")}>
      Start My Review
    </Button>
    <Button variant="ghostDark" onClick={() => setPage("booking")}>
      Book a Strategy Call
    </Button>
  </div>
</div>

          <div className="grid gap-3 pt-2 sm:grid-cols-2">
            {[
              "Plain-English trust education",
              "A complete planning package",
              "Designed for everyday families",
              "Guided next-step experience",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle2 className="h-4 w-4 text-amber-400" />
                {item}
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
         <Card className="border-white/10 bg-white/5 text-white shadow-2xl backdrop-blur lg:mt-4">
           <CardContent className="space-y-8 p-8 md:p-10">
              <div className="grid gap-4 sm:grid-cols-2">
          {[
  {
    label: "Trust System",
    icon: ShieldCheck,
    text: "A structured system that organizes how your assets, decisions, and responsibilities are handled.",
  },
  {
    label: "Asset Control",
    icon: Landmark,
    text: "Helps define how your assets are managed during life and directed when transitions occur.",
  },
  {
    label: "Family Clarity",
    icon: BadgeHelp,
    text: "Removes confusion by clearly outlining roles, responsibilities, and instructions for your family.",
  },
  {
    label: "Legacy Continuity",
    icon: FolderHeart,
    text: "Creates a system that can continue working for future generations instead of stopping at one transfer.",
  },
].map((item) => (
 <div
  key={item.label}
  className="rounded-2xl border border-white/10 bg-white/5 p-4 transition duration-300 hover:-translate-y-1 hover:border-amber-400/40 hover:bg-white/10 hover:shadow-[0_12px_35px_rgba(245,158,11,0.08)]"
>
    <item.icon className="mb-3 h-6 w-6 text-amber-400" />
  <p className="text-lg font-semibold tracking-tight text-white">
  {item.label}
</p>
<p className="mt-2 text-sm leading-6 text-slate-300">
  {item.text}
</p>
  </div>
))}
              </div>
             <div className="rounded-2xl border border-emerald-400/20 bg-[linear-gradient(135deg,rgba(16,185,129,0.16),rgba(6,78,59,0.35))] p-6 shadow-[0_12px_35px_rgba(16,185,129,0.08)]">
                <p className="text-sm uppercase tracking-[0.2em] text-emerald-300">
                  Inside the package
                </p>
          <p className="mt-3 text-xl font-semibold leading-8 text-white">
  Trust, backup will, powers of attorney, healthcare documents, and
  funding guidance.
</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
function HomePage({ setPage }) {
  return (
    <main>

      <Hero setPage={setPage} />

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
        <SectionTitle
          eyebrow="The question most people are really asking"
          title="What exactly is a trust system, and why should I use one instead of waiting?"
          body="Most visitors are not looking for legal jargon. They are trying to understand what this is, why it matters, and whether it can help their family avoid confusion, delay, and preventable stress."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              icon: Users,
              title: "What is a trust system?",
              text: "A trust system is a coordinated set of documents and instructions designed to help organize ownership, authority, and decision-making in a more structured way.",
            },
            {
              icon: FileText,
              title: "Why not just wait?",
              text: "Because delay is what leaves many families with unanswered questions, frozen access, and expensive clean-up when something unexpected happens.",
            },
            {
              icon: ShieldCheck,
              title: "Why this experience?",
              text: "Because most people want something understandable, guided, and more accessible than the traditional process that often feels overwhelming from the start.",
            },
          ].map((item) => (
            <Card key={item.title} className="overflow-hidden border-slate-200 shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
              <CardContent className="p-7">
                <item.icon className="mb-4 h-8 w-8 text-amber-600" />
                <h3 className="text-xl font-semibold text-slate-950">{item.title}</h3>
                <p className="mt-2 leading-7 text-slate-600">{item.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
<section className="bg-white py-16 md:py-20">
  <div className="mx-auto max-w-6xl px-4 md:px-6">
    <SectionTitle
      eyebrow="The gap most people don’t see"
      title="Most families don’t realize what’s missing… until it’s too late."
      body="It’s not about intelligence or effort. It’s about not knowing what a complete system actually looks like."
      center
    />

    <div className="mt-10 grid gap-6 md:grid-cols-3">
      {[
        {
          title: "They think a will is enough",
          text: "Many people believe a simple document solves everything, without realizing it may leave gaps during life, incapacity, or transition.",
        },
        {
          title: "They assume family can figure it out",
          text: "Without structure, loved ones are often left making decisions under pressure, without clear direction or authority.",
        },
        {
          title: "They wait too long",
          text: "Planning gets pushed off until something forces action — and that’s when options are limited and stress is highest.",
        },
      ].map((item) => (
        <Card key={item.title}>
          <CardContent className="p-7">
            <h3 className="text-xl font-semibold text-slate-950">
              {item.title}
            </h3>
            <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>
      <section className="bg-slate-950 py-16 text-white md:py-20">
  <div className="mx-auto max-w-7xl px-4 md:px-6">
    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">
      What actually goes wrong
    </p>

    <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight md:text-4xl">
      When there’s no system, things don’t break all at once.
    </h2>

    <p className="mt-4 max-w-3xl leading-8 text-slate-300">
      They break in moments — when decisions need to be made, when something
      unexpected happens, or when responsibility shifts. That’s when gaps show
      up, and small problems turn into stressful ones.
    </p>

    <div className="mt-10 grid gap-6 md:grid-cols-3">
      {[
        {
          title: "A will alone isn’t enough",
          text: "A will may help with distribution, but it does not fully address what happens during life, incapacity, or when decisions need to be made quickly.",
        },
        {
          title: "No clear authority creates delays",
          text: "Without defined roles and documents, financial and medical decisions can be delayed when timing matters most.",
        },
        {
          title: "Disconnected pieces create confusion",
          text: "When documents are not structured as a system, families are often left trying to piece things together under pressure.",
        },
      ].map((item) => (
        <div
          key={item.title}
          className="rounded-3xl border border-white/10 bg-white/5 p-6"
        >
          <p className="text-lg font-semibold text-white">{item.title}</p>
          <p className="mt-3 leading-7 text-slate-300">{item.text}</p>
        </div>
      ))}
    </div>
  </div>
</section>

      <section className="bg-slate-50 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionTitle
            eyebrow="How the system works"
            title="A trust system is more than a document. It is a coordinated structure for control, direction, and continuity."
            body="The goal is simple: help the visitor understand that this system can be used as a practical tool inside an estate plan, not just a stack of paperwork sitting in a folder."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                n: "01",
                t: "Create the structure",
                d: "Set the trust framework, name who is in charge, and define how the plan is supposed to work.",
              },
              {
                n: "02",
                t: "Connect the assets",
                d: "Use funding steps, assignments, titles, and beneficiary updates so the system is aligned with what you own.",
              },
              {
                n: "03",
                t: "Support life and legacy",
                d: "Add the supporting documents that help with healthcare, incapacity, family instruction, and long-term continuity.",
              },
            ].map((step) => (
              <Card key={step.n} className="bg-white shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
                <CardContent className="p-7">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">{step.n}</p>
                  <h3 className="mt-3 text-xl font-semibold text-slate-950">{step.t}</h3>
                  <p className="mt-2 leading-7 text-slate-600">{step.d}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8">
            <Button onClick={() => setPage("what-is-a-trust")}>Learn More About the Trust System</Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
        <SectionTitle
          eyebrow="The system"
          title="This is not just a trust. This is a complete planning system."
          body="Each part works together to help protect your family, your assets, your authority, and your wishes."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {[
            {
              title: "Revocable Living Trust",
              text: "Helps organize how assets are managed during life and distributed later through a more structured system.",
            },
            {
              title: "Backup Will",
              text: "Supports the trust plan by catching assets left outside the trust structure and pointing them back toward the overall system.",
            },
            {
              title: "Financial Authority Documents",
              text: "Help a trusted person step in for banking, bills, property, and financial decisions if needed.",
            },
            {
              title: "Healthcare and Personal Direction",
              text: "Helps clarify who can make medical decisions and what treatment preferences should guide those choices.",
            },
          ].map((item) => (
            <Card key={item.title} className="border-amber-200 bg-amber-50/50 shadow-[0_10px_30px_rgba(245,158,11,0.06)]">
              <CardContent className="p-7">
                <h3 className="text-xl font-semibold text-slate-950">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
        <SectionTitle
          eyebrow="Inside the package"
          title="Every part of the package has a job inside the trust system"
          body="This section is designed to feel guided and easy to understand. Click any item below to open a full explanation page for that part of the system."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {packageItems.map((item) => (
            <button key={item.slug} onClick={() => setPage(item.slug)} className="text-left">
              <Card className="group h-full transition hover:-translate-y-1 hover:border-amber-300 hover:shadow-xl">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-start justify-between gap-4">
                    <item.icon className="h-7 w-7 text-emerald-600" />
                    <ArrowRight className="h-5 w-5 text-slate-400 transition group-hover:text-slate-950" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-950">{item.title}</h3>
                  <p className="mt-2 leading-7 text-slate-600">{item.short}</p>
                </CardContent>
              </Card>
            </button>
          ))}
        </div>
      </section>

      <section className="bg-slate-950 py-16 text-white md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionTitle
            eyebrow="Cost clarity"
            title="Why many families choose a guided system instead of the traditional route"
            body="This is not about giving legal advice. It is about making structured planning easier to begin, easier to understand, and more accessible for the people who have put it off for too long."
            light
          />

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "The traditional assumption",
                text: "Many people believe the only option is a high-cost law firm process that feels intimidating, slow, and hard to understand from the first meeting.",
              },
              {
                title: "The result of delay",
                text: "Because people assume planning is too expensive or too confusing, they often wait until an illness, death, or emergency forces action under pressure.",
              },
              {
                title: "A guided alternative",
                text: "This system helps everyday families move toward structure with more clarity and less friction, while still understanding what each part of the package is meant to do.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <p className="text-lg font-semibold">{item.title}</p>
                <p className="mt-3 leading-7 text-slate-300">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-3xl border border-amber-400/20 bg-amber-400/10 p-7">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">Important</p>
            <p className="mt-3 max-w-4xl leading-7 text-slate-200">
              We provide structured estate planning education and guided document services.
              We do not provide legal or tax advice. For legal advice, please consult a licensed attorney.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-2 md:px-6">
          <div>
            <SectionTitle
              eyebrow="Advanced legacy education"
              title="A trust system becomes even more powerful when it is connected to a bigger legacy strategy"
              body="This introduces the higher-level conversation. The visitor begins to see that this is not only about paperwork. It is also about structure, liquidity, continuity, and the long game of family legacy."
            />
          </div>

          <div className="grid gap-4">
            {[
              {
                icon: PiggyBank,
                title: "Be your own bank",
                text: "Cash value life insurance is often taught as a way to build accessible capital that can be borrowed against while the broader strategy continues to move.",
              },
              {
                icon: CircleDollarSign,
                title: "Rockefeller-style thinking",
                text: "The bigger idea is not only to leave money. It is to leave a system that can guide, replenish, and continue through future generations.",
              },
              {
                icon: Building2,
                title: "Trust + insurance",
                text: "The trust helps direct how assets move. Insurance can help create liquidity when the next generation needs it most. Together they can support more intentional legacy flow.",
              },
            ].map((item) => (
              <Card key={item.title} className="border-slate-200 shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
                <CardContent className="p-6">
                  <item.icon className="mb-3 h-7 w-7 text-amber-600" />
                  <h3 className="text-xl font-semibold text-slate-950">{item.title}</h3>
                  <p className="mt-2 leading-7 text-slate-600">{item.text}</p>
                </CardContent>
              </Card>
            ))}
            <div>
              <Button onClick={() => setPage("legacy-strategy")}>Explore the Legacy Strategy</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-16 text-white md:py-20">
        <div className="mx-auto max-w-6xl px-4 text-center md:px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">Next step</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
            Get clarity before life forces the decision.
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-300">
            Start with a private review, understand what fits your situation, and move
            forward with more structure and less confusion.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button variant="light" size="lg" onClick={() => setPage("review")}>
              Start My Private Review
            </Button>
            <Button variant="ghostDark" size="lg" onClick={() => setPage("booking")}>
              Book a Strategy Call
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

function TrustPage({ setPage }) {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
      <SectionTitle
        eyebrow="Trust education"
        title="What is a trust system, and why do serious families use one?"
        body="A trust system is a coordinated planning structure that helps organize who is in control, how assets are handled, and what happens if life changes suddenly. It is often used by people who want more clarity, more control, and less confusion than they would have by waiting and hoping everything works out later."
      />

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <Card>
          <CardContent className="p-7">
            <h3 className="text-2xl font-semibold text-slate-950">In plain English</h3>
            <p className="mt-3 leading-7 text-slate-600">
              A trust system is not just one paper. It is a group of connected
              documents and instructions that work together. The trust helps form
              the structure, and the supporting documents help make sure decisions,
              authority, and family direction are not left to guesswork.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-7">
            <h3 className="text-2xl font-semibold text-slate-950">Why not just rely on a will?</h3>
            <p className="mt-3 leading-7 text-slate-600">
              A will can still be important, but many families want more than
              after-death instructions. They want a broader system that also helps
              with incapacity planning, authority, privacy, and keeping the larger
              plan connected.
            </p>
          </CardContent>
        </Card>
      </div>

      <section className="mt-12">
        <SectionTitle
          eyebrow="Why people get this"
          title="People do not look for a trust system because they love paperwork."
          body="They look for it because they want to avoid confusion, reduce preventable stress, and put their wishes into a structure their family can follow."
        />

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Clarity",
              text: "So the people they love know who is responsible, what the plan is, and where authority begins.",
            },
            {
              title: "Control",
              text: "So their wishes are not left floating between assumptions, family opinions, and whatever happens in the moment.",
            },
            {
              title: "Continuity",
              text: "So the plan still works when life changes, health changes, or the next generation needs guidance.",
            },
          ].map((item) => (
            <Card
              key={item.title}
              className="border-slate-200 shadow-[0_10px_30px_rgba(15,23,42,0.05)]"
            >
              <CardContent className="p-7">
                <h3 className="text-xl font-semibold text-slate-950">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-12 rounded-3xl bg-slate-950 p-8 text-white md:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">
          Why waiting becomes expensive
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight">
          Most problems do not start because people did not care.
        </h2>
        <p className="mt-4 max-w-3xl leading-8 text-slate-300">
          They start because people assumed they had more time, assumed family
          members could just “figure it out,” or assumed one basic document was
          enough. The cost of delay is often confusion, pressure, and decisions
          being made without a clear system behind them.
        </p>
      </section>

      <section className="mt-12">
        <SectionTitle
          eyebrow="What makes it a system"
          title="Each part has a different role."
          body="The trust is central, but the supporting documents are what help the whole plan hold together when real life happens."
        />

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {[
            {
              title: "The trust",
              text: "Provides the main structure for how assets and instructions are organized.",
            },
            {
              title: "The backup will",
              text: "Supports the trust plan by catching loose ends and pointing them back toward the larger system.",
            },
            {
              title: "Financial power of attorney",
              text: "Helps someone step in for financial matters if the client cannot act personally.",
            },
            {
              title: "Medical and healthcare documents",
              text: "Help support decision-making, medical direction, and family clarity during health events.",
            },
          ].map((item) => (
            <Card key={item.title}>
              <CardContent className="p-7">
                <h3 className="text-xl font-semibold text-slate-950">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <SectionTitle
          eyebrow="A better question"
          title="The real question is not, “Do I need a trust?”"
          body="The better question is: “Do I want my family to have a clearer system than they would have without one?”"
          center
        />
      </section>

      <section className="mt-12 rounded-3xl border border-amber-200 bg-amber-50 p-8 md:p-10">
        <h3 className="text-2xl font-semibold text-slate-950">
          Important note
        </h3>
        <p className="mt-3 leading-7 text-slate-700">
          This site provides structured estate planning education and guided
          document services. It is not legal or tax advice. For legal advice,
          please consult a licensed attorney.
        </p>
      </section>

      <div className="mt-12 rounded-3xl bg-slate-950 p-8 text-white md:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">
          Next step
        </p>
        <h3 className="mt-3 text-2xl font-semibold">
          See what fits your situation.
        </h3>
        <p className="mt-3 max-w-2xl leading-7 text-slate-300">
          Start with a private review or explore what is included in the package
          so you can understand how the system is designed to work.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Button variant="light" onClick={() => setPage("review")}>
            Start My Review
          </Button>
          <Button variant="ghostDark" onClick={() => setPage("package")}>
            See What’s Included
          </Button>
        </div>
      </div>
    </main>
  );
}

function PackagePage({ setPage }) {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
      <SectionTitle
        eyebrow="Trust package"
        title="Explore each part of the premium planning package"
        body="Each page below is designed to answer the visitor’s silent question: what is this, why is it here, and how does it help my family?"
      />
      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {packageItems.map((item) => (
          <button key={item.slug} onClick={() => setPage(item.slug)} className="text-left">
            <Card className="group h-full transition hover:-translate-y-1 hover:border-amber-300 hover:shadow-xl">
              <CardContent className="p-6">
                <item.icon className="mb-4 h-7 w-7 text-emerald-600" />
                <h3 className="text-xl font-semibold text-slate-950">{item.title}</h3>
                <p className="mt-2 leading-7 text-slate-600">{item.short}</p>
              </CardContent>
            </Card>
          </button>
        ))}
      </div>
    </main>
  );
}

function PackageDetail({ item, setPage }) {
  return (
    <main className="mx-auto max-w-5xl px-4 py-16 md:px-6 md:py-20">
      <button
        onClick={() => setPage("package")}
        className="mb-6 text-sm font-medium text-slate-500 hover:text-slate-950"
      >
        ← Back to trust package
      </button>

      <div className="space-y-8">
        <div className="rounded-3xl bg-slate-950 p-8 text-white md:p-10">
          <item.icon className="mb-5 h-10 w-10 text-amber-400" />
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">Package item</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">{item.title}</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">{item.short}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {[
            ["What it is", item.what],
            ["Why it matters", item.why],
            ["When it is used", item.when],
            ["How it fits into the system", item.fit],
          ].map(([title, body]) => (
            <Card key={title}>
              <CardContent className="p-7">
                <h2 className="text-2xl font-semibold text-slate-950">{title}</h2>
                <p className="mt-3 leading-7 text-slate-600">{body}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7">
          <h3 className="text-xl font-semibold text-slate-950">Why this matters to the reader</h3>
          <p className="mt-3 leading-7 text-slate-600">
            The purpose of this page is not just to define a document. It is to help the reader understand
            why this part of the system exists, how it reduces confusion, and why putting the right pieces
            in place now can make life easier for the people they care about later.
          </p>
        </div>
<div className="grid gap-6 md:grid-cols-2">
  <Card className="border-slate-200 bg-white shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
    <CardContent className="p-7">
      <h3 className="text-xl font-semibold text-slate-950">
        Why this matters in real life
      </h3>
      <p className="mt-3 leading-7 text-slate-600">
        This part of the system is not here to make the package look bigger. It is
        here because real families run into real problems when authority, ownership,
        or instructions are missing. A complete system helps reduce confusion and
        gives people a clearer path when life does not go according to plan.
      </p>
    </CardContent>
  </Card>

  <Card className="border-amber-200 bg-amber-50/70 shadow-[0_10px_30px_rgba(245,158,11,0.08)]">
    <CardContent className="p-7">
      <h3 className="text-xl font-semibold text-slate-950">
        The bigger point
      </h3>
      <p className="mt-3 leading-7 text-slate-600">
        The goal is not just to have documents. The goal is to have a system that
        helps protect your family, support your wishes, and make transitions easier
        for the people who may one day need to step in.
      </p>
    </CardContent>
  </Card>
</div>
        <div className="flex flex-wrap gap-3">
          <Button onClick={() => setPage("review")}>Start My Review</Button>
          <Button variant="outline" onClick={() => setPage("booking")}>Book a Strategy Call</Button>
        </div>
      </div>
    </main>
  );
}

function LegacyStrategyPage({ setPage }) {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
      <SectionTitle
        eyebrow="Legacy strategy"
        title="Why some families use trust structure, life insurance, and long-range planning together"
        body="This section introduces the bigger conversation in a simple way. It is designed to help the visitor understand that some families think beyond distribution and focus on liquidity, continuity, and multi-generation structure."
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        <Card>
          <CardContent className="p-7">
            <PiggyBank className="mb-4 h-8 w-8 text-amber-600" />
            <h3 className="text-2xl font-semibold text-slate-950">Be your own bank</h3>
            <p className="mt-3 leading-7 text-slate-600">
              This concept is often taught using properly structured cash value life insurance.
              The idea is that the policy can build accessible capital over time, and that capital
              may be borrowed against for opportunities, emergencies, or strategic use while the larger
              system continues to work.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-7">
            <CircleDollarSign className="mb-4 h-8 w-8 text-amber-600" />
            <h3 className="text-2xl font-semibold text-slate-950">Rockefeller-style thinking</h3>
            <p className="mt-3 leading-7 text-slate-600">
              The broader idea is not only to leave money. It is to leave a system that can be guided,
              replenished, and continued through future generations rather than disappearing after one transfer.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-7">
            <Landmark className="mb-4 h-8 w-8 text-amber-600" />
            <h3 className="text-2xl font-semibold text-slate-950">Trust + insurance together</h3>
            <p className="mt-3 leading-7 text-slate-600">
              A trust can help direct how assets move and how people receive them. Life insurance can help
              provide liquidity at the right moment. Together, they can support more intentional legacy flow.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 rounded-3xl border border-amber-200 bg-amber-50 p-7">
        <h3 className="text-2xl font-semibold text-slate-950">Important note</h3>
        <p className="mt-3 leading-7 text-slate-700">
          This page is educational. Insurance and estate strategies should be reviewed with properly
          licensed or qualified professionals so the structure fits the family, the law, and the long-term objective.
        </p>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <Button onClick={() => setPage("review")}>Request My Review</Button>
        <Button variant="outline" onClick={() => setPage("booking")}>Book a Strategy Call</Button>
      </div>
    </main>
  );
}

function ReviewPage({ setPage }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    state: "",
    homeOwner: "",
    children: "",
    business: "",
    currentPlan: "",
    concern: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const onChange = (key, value) => setForm((f) => ({ ...f, [key]: value }));

  return (
    <main className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
      <SectionTitle
        eyebrow="Private review"
        title="Tell us where you are now so we can guide your next best step"
        body="This page is designed to feel more like a premium intake than a basic lead form. It helps us understand your current situation so the next step feels more relevant, more structured, and less generic."
      />

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <Card className="border-slate-200 shadow-[0_12px_35px_rgba(15,23,42,0.06)]">
          <CardContent className="p-8 md:p-10">
            {!submitted ? (
              <form
                className="grid gap-5 md:grid-cols-2"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
              >
                <div className="md:col-span-2">
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Full name
                  </label>
                  <Input
                    value={form.name}
                    onChange={(e) => onChange("name", e.target.value)}
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Email
                  </label>
                  <Input
                    type="email"
                    value={form.email}
                    onChange={(e) => onChange("email", e.target.value)}
                    placeholder="name@email.com"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Phone
                  </label>
                  <Input
                    value={form.phone}
                    onChange={(e) => onChange("phone", e.target.value)}
                    placeholder="(000) 000-0000"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    State
                  </label>
                  <Input
                    value={form.state}
                    onChange={(e) => onChange("state", e.target.value)}
                    placeholder="State"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Do you own a home?
                  </label>
                  <select
                    value={form.homeOwner}
                    onChange={(e) => onChange("homeOwner", e.target.value)}
                    className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-slate-950 outline-none focus:border-amber-500"
                  >
                    <option value="">Choose one</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Do you have children?
                  </label>
                  <select
                    value={form.children}
                    onChange={(e) => onChange("children", e.target.value)}
                    className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-slate-950 outline-none focus:border-amber-500"
                  >
                    <option value="">Choose one</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Do you own a business?
                  </label>
                  <select
                    value={form.business}
                    onChange={(e) => onChange("business", e.target.value)}
                    className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-slate-950 outline-none focus:border-amber-500"
                  >
                    <option value="">Choose one</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Do you currently have a will or trust?
                  </label>
                  <select
                    value={form.currentPlan}
                    onChange={(e) => onChange("currentPlan", e.target.value)}
                    className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-slate-950 outline-none focus:border-amber-500"
                  >
                    <option value="">Choose one</option>
                    <option value="will">Will</option>
                    <option value="trust">Trust</option>
                    <option value="both">Both</option>
                    <option value="none">None</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Primary concern
                  </label>
                  <select
                    value={form.concern}
                    onChange={(e) => onChange("concern", e.target.value)}
                    className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-slate-950 outline-none focus:border-amber-500"
                  >
                    <option value="">Choose one</option>
                    <option value="avoid-confusion">Avoid confusion</option>
                    <option value="protect-children">Protect children</option>
                    <option value="protect-assets">Protect assets</option>
                    <option value="legacy-transfer">Legacy transfer</option>
                    <option value="not-sure">Not sure yet</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Notes
                  </label>
                  <Textarea
                    value={form.notes}
                    onChange={(e) => onChange("notes", e.target.value)}
                    placeholder="Tell us anything helpful about your current situation"
                    rows={5}
                  />
                </div>

                <div className="md:col-span-2 flex flex-wrap gap-3 pt-2">
                  <Button type="submit">See My Recommended Next Step</Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setPage("booking")}
                  >
                    Skip to Booking
                  </Button>
                </div>
              </form>
            ) : (
              <div className="space-y-5">
                <div className="flex items-center gap-3 text-emerald-700">
                  <CheckCircle2 className="h-6 w-6" />
                  <span className="text-lg font-medium">
                    Your review has been captured
                  </span>
                </div>
                <p className="leading-7 text-slate-600">
                  This is a placeholder success state. In the production version,
                  this can send the information directly into GHL or another CRM
                  and route the visitor to the next step automatically.
                </p>
                <Button onClick={() => setPage("booking")}>
                  Continue to Booking
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card className="border-slate-200 bg-slate-950 text-white shadow-[0_12px_35px_rgba(15,23,42,0.14)]">
            <CardContent className="p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">
                What happens here
              </p>
              <h3 className="mt-3 text-2xl font-semibold">
                This is a private intake, not pressure.
              </h3>
              <p className="mt-4 leading-7 text-slate-300">
                The purpose of this page is to understand what matters most in your
                situation so the next step feels more relevant and less generic.
              </p>
            </CardContent>
          </Card>

          <Card className="border-slate-200 shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-slate-950">
                Why we ask these questions
              </h3>
              <div className="mt-5 space-y-4 text-slate-600">
                {[
                  "To understand whether a trust-based system fits your situation",
                  "To identify where confusion, delay, or missing authority may exist",
                  "To guide you toward a better next step instead of a one-size-fits-all response",
                ].map((item) => (
                  <div key={item} className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald-600" />
                    <span className="leading-7">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-amber-200 bg-amber-50/80 shadow-[0_10px_30px_rgba(245,158,11,0.08)]">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-slate-950">
                Important note
              </h3>
              <p className="mt-3 leading-7 text-slate-700">
                This page collects information to help guide the next step. It is
                not legal or tax advice. Specific legal questions should be reviewed
                with a licensed attorney.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}

 
function BookingPage({ setPage }) {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
      <SectionTitle
        eyebrow="Private consultation"
        title="Schedule your trust and legacy strategy call"
        body="This is where the education turns into a guided next step."
      />

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <Card className="border-slate-200 shadow-[0_12px_35px_rgba(15,23,42,0.06)]">
          <CardContent className="p-8 md:p-10">
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
              <iframe
                src="https://api.leadconnectorhq.com/widget/booking/snkFO93S8JXSkOjUlmD3"
                title="Book a Strategy Call"
                style={{ width: "100%", border: "none", overflow: "hidden" }}
                scrolling="no"
                className="min-h-[700px] w-full"
              />
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card className="border-slate-200 bg-slate-950 text-white shadow-[0_12px_35px_rgba(15,23,42,0.14)]">
            <CardContent className="p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">
                What this call is for
              </p>
              <h3 className="mt-3 text-2xl font-semibold">
                A guided conversation focused on clarity.
              </h3>
              <p className="mt-4 leading-7 text-slate-300">
                This is not meant to feel like pressure. The goal is to help you
                better understand your current position, possible gaps, and what a
                more complete trust-based system may look like for your situation.
              </p>
            </CardContent>
          </Card>

          <Card className="border-slate-200 shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-slate-950">
                What we’ll cover
              </h3>
              <div className="mt-5 space-y-4 text-slate-600">
                {[
                  "Your current situation and what you already have in place",
                  "Possible gaps in your trust, will, authority, or healthcare planning",
                  "Whether a more complete trust-based system makes sense for you",
                  "What the best next step may be based on your goals",
                ].map((item) => (
                  <div key={item} className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald-600" />
                    <span className="leading-7">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-amber-200 bg-amber-50/80 shadow-[0_10px_30px_rgba(245,158,11,0.08)]">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-slate-950">
                Before you book
              </h3>
              <p className="mt-3 leading-7 text-slate-700">
                It helps to think through your biggest concerns before the call,
                especially around family clarity, assets, healthcare decisions,
                business interests, or what would happen if something changed
                unexpectedly.
              </p>

              <div className="mt-6">
                <Button onClick={() => setPage("thank-you")}>
                  I’ve Booked My Call
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
function ThankYouPage({ setPage }) {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16 md:px-6 md:py-20">
      <Card>
        <CardContent className="p-10">
          <CheckCircle2 className="h-10 w-10 text-emerald-600" />
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950">
            You’re booked. Here’s what happens next.
          </h1>
          <p className="mt-4 leading-7 text-slate-600">
            Check your email, gather any current will or trust documents if you have them,
            and think through your top concerns before the call.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              "Watch for confirmation details",
              "Gather existing documents",
              "Write down your top questions",
              "Be ready to discuss goals for family, assets, and legacy",
            ].map((item) => (
              <div key={item} className="rounded-2xl bg-slate-50 p-4 text-slate-700">
                {item}
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button onClick={() => setPage("home")}>Back Home</Button>
            <Button variant="outline" onClick={() => setPage("legacy-strategy")}>Read the Legacy Strategy</Button>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">
              Legacy Control System™
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">
              Structured trust planning with a modern guided experience.
            </h3>
            <p className="mt-4 max-w-xl leading-7 text-slate-300">
              Estate planning education and guided document services designed to help everyday families create more clarity, control, and continuity without the confusion that keeps most people stuck.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">Contact</p>
            <div className="mt-4 space-y-3 text-slate-300">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-amber-400" />
                <span>[Phone Placeholder]</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-amber-400" />
                <a href="mailto:info@12stoneconsulting.com" className="transition hover:text-white">
                  info@12stoneconsulting.com
                </a>
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">Presented by</p>
            <div className="mt-4 space-y-3 text-slate-300">
              <div>12 Stone Consulting</div>
              <div>MSTA</div>
              <a
                href="https://12stoneconsulting.com"
                target="_blank"
                rel="noreferrer"
                className="block transition hover:text-white"
              >
                12stoneconsulting.com
              </a>
              <a
                href="https://12stoneagency.com"
                target="_blank"
                rel="noreferrer"
                className="block transition hover:text-white"
              >
                12stoneagency.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-slate-400">
          <p>
            This material is for educational purposes and is not legal, tax, or financial advice. Specific strategies should be reviewed with qualified professionals.
          </p>
          <div className="mt-4 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <p>© 2025 12 Stone Consulting. All rights reserved.</p>
            <p>Powered by 12 Stone Smart Website Systems</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [page, setPage] = useState("home");

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [page]);

  const detailItem = useMemo(
    () => packageItems.find((item) => item.slug === page),
    [page]
  );

  let content;
  if (page === "home") content = <HomePage setPage={setPage} />;
  else if (page === "what-is-a-trust") content = <TrustPage setPage={setPage} />;
  else if (page === "package") content = <PackagePage setPage={setPage} />;
  else if (page === "legacy-strategy") content = <LegacyStrategyPage setPage={setPage} />;
  else if (page === "review") content = <ReviewPage setPage={setPage} />;
  else if (page === "booking") content = <BookingPage setPage={setPage} />;
  else if (page === "thank-you") content = <ThankYouPage setPage={setPage} />;
  else if (detailItem) content = <PackageDetail item={detailItem} setPage={setPage} />;
  else content = <HomePage setPage={setPage} />;

  return (
    <div className="min-h-screen bg-white text-slate-950">
      <Header setPage={setPage} />
      {content}

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <SectionTitle
            eyebrow="FAQ"
            title="Common questions"
            body="These can stay here globally or move to specific pages later."
          />
          <div className="mt-8 grid gap-4">
            {faqs.map((faq) => (
              <Card key={faq.q} className="rounded-2xl">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-slate-950">{faq.q}</h3>
                  <p className="mt-2 leading-7 text-slate-600">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
