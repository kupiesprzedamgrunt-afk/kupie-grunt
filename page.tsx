"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  Building2,
  Check,
  ChevronDown,
  FileText,
  Handshake,
  Landmark,
  Layers3,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";

const faqItems = [
  {
    question: "Czy mogę zgłosić działkę bez warunków zabudowy?",
    answer:
      "Tak. Analizujemy również grunty, które wymagają sprawdzenia potencjału, przygotowania formalnego albo uporządkowania dokumentów.",
  },
  {
    question: "Czy muszę od razu sprzedawać działkę?",
    answer:
      "Nie. Najpierw analizujemy nieruchomość, a dopiero później proponujemy najlepszy model działania: zakup, przygotowanie do sprzedaży, wsparcie sprzedaży albo wspólne przedsięwzięcie.",
  },
  {
    question: "Jakie grunty Was interesują?",
    answer:
      "Działki pod zabudowę jednorodzinną, usługową i inwestycyjną, większe tereny do podziału, grunty prywatne i firmowe oraz nieruchomości z potencjałem do dalszego rozwoju.",
  },
  {
    question: "Na czym polega bonus dla właściciela?",
    answer:
      "W wybranych przypadkach proponujemy model wspólnego przedsięwzięcia, w którym właściciel gruntu może otrzymać dodatkowe rozliczenie powiązane z realizacją inwestycji.",
  },
];

const offerItems = [
  {
    icon: Handshake,
    title: "Kupno działki",
    text: "Jeżeli zależy Ci na szybkiej i bezpiecznej sprzedaży, możemy odkupić grunt bezpośrednio od Ciebie.",
  },
  {
    icon: FileText,
    title: "Przygotowanie do inwestycji",
    text: "Analizujemy potencjał działki, sprawdzamy możliwości zabudowy i przygotowujemy grunt do dalszego procesu inwestycyjnego.",
  },
  {
    icon: Building2,
    title: "Pomoc w sprzedaży",
    text: "Jeżeli nieruchomość ma większy potencjał, pomagamy zwiększyć jej atrakcyjność i dobrać najlepszą drogę sprzedaży.",
  },
  {
    icon: Landmark,
    title: "Wspólne przedsięwzięcie",
    text: "W wybranych przypadkach proponujemy model współpracy z dodatkowym bonusem dla właściciela gruntu.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Zgłaszasz działkę",
    text: "Przekazujesz nam lokalizację, numer działki lub podstawowe informacje o nieruchomości.",
  },
  {
    number: "02",
    title: "Analizujemy potencjał",
    text: "Sprawdzamy możliwości zabudowy, otoczenie, dokumenty i najlepszy kierunek działania.",
  },
  {
    number: "03",
    title: "Dobieramy model współpracy",
    text: "Zakup, przygotowanie do sprzedaży, wsparcie sprzedaży albo wspólna realizacja projektu.",
  },
  {
    number: "04",
    title: "Formalizujemy warunki",
    text: "Ustalamy przejrzyste zasady współpracy i przechodzimy do kolejnych etapów procesu.",
  },
  {
    number: "05",
    title: "Realizujemy efekt",
    text: "Sprzedajemy, przygotowujemy lub rozwijamy nieruchomość w kierunku inwestycyjnym.",
  },
];

const strengths = [
  {
    icon: Layers3,
    title: "Gotowe projekty",
    text: "Dzięki gotowym rozwiązaniom projektowym szybciej oceniamy, co można zrealizować na danym gruncie.",
  },
  {
    icon: ShieldCheck,
    title: "Technologia prefabrykowana",
    text: "Przyspieszamy etap przygotowania inwestycji i sam proces realizacji dzięki sprawdzonym rozwiązaniom.",
  },
  {
    icon: Building2,
    title: "Podejście deweloperskie",
    text: "Nie patrzymy na działkę wyłącznie handlowo. Szukamy najlepszego sposobu, żeby wydobyć jej potencjał.",
  },
];

const terrainTypes = [
  "Działki pod zabudowę jednorodzinną",
  "Grunty pod zabudowę usługową",
  "Działki inwestycyjne",
  "Większe tereny do podziału",
  "Grunty osób prywatnych i firm",
  "Nieruchomości wymagające przygotowania formalnego",
];

function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
}) {
  return (
    <div className="max-w-3xl">
      <div className="mb-4 text-xs font-medium uppercase tracking-[0.32em] text-[#7a837c]">
        {eyebrow}
      </div>
      <h2 className="text-3xl font-light leading-tight text-[#1f2421] md:text-5xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-5 text-lg leading-relaxed text-[#55605a]">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  value,
  onChange,
  required = false,
  placeholder = "",
}: {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-[#33403a]">
        {label}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-[#d7d2c8] bg-[#faf8f3] px-4 py-3 text-[#1f2421] outline-none transition placeholder:text-[#8c958d] focus:border-[#1f2421]"
      />
    </label>
  );
}

function TextArea({
  label,
  name,
  value,
  onChange,
  placeholder = "",
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-[#33403a]">
        {label}
      </span>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={5}
        className="w-full resize-none rounded-2xl border border-[#d7d2c8] bg-[#faf8f3] px-4 py-3 text-[#1f2421] outline-none transition placeholder:text-[#8c958d] focus:border-[#1f2421]"
      />
    </label>
  );
}

function FaqItem({
  item,
  isOpen,
  onToggle,
}: {
  item: { question: string; answer: string };
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="rounded-3xl border border-black/5 bg-white/80 shadow-sm">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="text-lg font-medium text-[#1f2421]">
          {item.question}
        </span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-[#667069] transition ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen ? (
        <div className="px-6 pb-6 text-[#58605a]">{item.answer}</div>
      ) : null}
    </div>
  );
}

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number>(0);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    parcel: "",
    message: "",
    consent: false,
  });
  const [status, setStatus] = useState<"idle" | "consent" | "success">("idle");

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent("Zgłoszenie działki - Kupię Grunt");
    const body = encodeURIComponent(
      `Imię i nazwisko: ${form.name}\nTelefon: ${form.phone}\nE-mail: ${form.email}\nLokalizacja działki: ${form.location}\nNumer działki: ${form.parcel}\n\nWiadomość:\n${form.message}`
    );
    return `mailto:kupiesprzedamgrunt@gmail.com?subject=${subject}&body=${body}`;
  }, [form]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (status !== "idle") setStatus("idle");
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, consent: e.target.checked }));
    if (status !== "idle") setStatus("idle");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.consent) {
      setStatus("consent");
      return;
    }

    setStatus("success");
    window.location.href = mailtoHref;
  };

  return (
    <div className="min-h-screen bg-[#f6f3ed] text-[#1f2421] selection:bg-[#1f2421] selection:text-white">
      <header className="sticky top-0 z-50 border-b border-black/5 bg-[#f6f3ed]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#start" className="group flex items-center gap-3">
            <div className="relative h-11 w-[180px] sm:h-12 sm:w-[210px]">
              <Image
                src="/logo-black.png"
                alt="Kupię Grunt"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-[#3d433f] md:flex">
            <a href="#oferta" className="hover:opacity-70">
              Oferta
            </a>
            <a href="#jak" className="hover:opacity-70">
              Jak to działa
            </a>
            <a href="#grunty" className="hover:opacity-70">
              Jakie grunty
            </a>
            <a href="#przewagi" className="hover:opacity-70">
              Dlaczego my
            </a>
            <a href="#faq" className="hover:opacity-70">
              FAQ
            </a>
            <a href="#kontakt" className="hover:opacity-70">
              Kontakt
            </a>
          </nav>

          <a
            href="#formularz"
            className="rounded-full bg-[#1f2421] px-5 py-3 text-sm text-white shadow-sm transition hover:opacity-90"
          >
            Zgłoś działkę
          </a>
        </div>
      </header>

      <main id="start">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.95),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(170,182,166,0.30),transparent_28%)]" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 lg:grid-cols-12 lg:py-24">
            <div className="space-y-8 lg:col-span-6">
              <div className="inline-flex rounded-full border border-black/10 bg-white/80 px-4 py-2 text-xs uppercase tracking-[0.25em] text-[#707771]">
                Zgłoś grunt • Poznaj potencjał • Wybierz najlepszy model
              </div>

              <div className="space-y-5">
                <h1 className="max-w-3xl text-4xl font-light leading-tight md:text-6xl">
                  Masz działkę?{" "}
                  <span className="font-medium">
                    Sprawdź, czy możesz na niej zarobić więcej.
                  </span>
                </h1>
                <p className="max-w-2xl text-lg leading-relaxed text-[#4f5751] md:text-xl">
                  Kupimy ją, przygotujemy do sprzedaży lub inwestycji, pomożemy
                  zwiększyć jej potencjał albo zaproponujemy wspólne
                  przedsięwzięcie z dodatkowym bonusem dla właściciela.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#formularz"
                  className="inline-flex items-center gap-2 rounded-full bg-[#1f2421] px-7 py-4 text-base text-white shadow-lg shadow-black/10 transition hover:opacity-90"
                >
                  Zgłoś działkę
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#jak"
                  className="rounded-full border border-[#1f2421]/15 bg-white/80 px-7 py-4 text-base transition hover:bg-white"
                >
                  Zobacz jak działamy
                </a>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {strengths.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="rounded-3xl border border-black/5 bg-white/75 p-5 shadow-sm"
                    >
                      <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#eef1ec]">
                        <Icon className="h-5 w-5 text-[#1f2421]" />
                      </div>
                      <div className="mb-2 text-sm font-medium">
                        {item.title}
                      </div>
                      <p className="text-sm leading-relaxed text-[#5a615c]">
                        {item.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="grid gap-5 lg:grid-cols-12">
                <div className="min-h-[500px] overflow-hidden rounded-[2.2rem] border border-white/60 bg-white p-2 shadow-2xl shadow-black/10 lg:col-span-7">
                  <div className="relative h-full min-h-[484px] overflow-hidden rounded-[1.8rem]">
                    <Image
                      src="/hero-investment.jpeg"
                      alt="Nowoczesna inwestycja mieszkaniowa"
                      fill
                      priority
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/10" />
                    <div className="absolute bottom-8 left-8 rounded-full bg-white/90 px-4 py-2 text-xs uppercase tracking-[0.25em] text-[#2f3631] shadow-sm">
                      Przykładowa inwestycja
                    </div>
                  </div>
                </div>

                <div
                  id="formularz"
                  className="rounded-[2rem] border border-black/5 bg-white/90 p-6 shadow-xl lg:col-span-5"
                >
                  <div className="mb-2 text-xs uppercase tracking-[0.22em] text-[#6d746f]">
                    Szybkie zgłoszenie
                  </div>
                  <div className="mb-5 text-2xl font-medium leading-tight">
                    Wyślij działkę do analizy
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <Field
                      label="Imię i nazwisko"
                      name="name"
                      value={form.name}
                      onChange={handleInputChange}
                      required
                    />
                    <Field
                      label="Telefon"
                      name="phone"
                      value={form.phone}
                      onChange={handleInputChange}
                      required
                    />
                    <Field
                      label="E-mail"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleInputChange}
                    />
                    <Field
                      label="Lokalizacja działki"
                      name="location"
                      value={form.location}
                      onChange={handleInputChange}
                      required
                      placeholder="np. Warszawa / Wiązowna"
                    />
                    <Field
                      label="Numer działki"
                      name="parcel"
                      value={form.parcel}
                      onChange={handleInputChange}
                      placeholder="np. 123/4"
                    />
                    <TextArea
                      label="Krótka wiadomość"
                      name="message"
                      value={form.message}
                      onChange={handleInputChange}
                      placeholder="Napisz kilka słów o nieruchomości"
                    />

                    <label className="flex items-start gap-3 rounded-2xl bg-[#f7f3ec] p-4 text-sm text-[#55605a]">
                      <input
                        type="checkbox"
                        name="consent"
                        checked={form.consent}
                        onChange={handleCheckboxChange}
                        className="mt-1 h-4 w-4 rounded border-[#c9c4b8]"
                      />
                      <span>
                        Wyrażam zgodę na kontakt w sprawie analizy działki oraz
                        przedstawienia możliwych wariantów współpracy.
                      </span>
                    </label>

                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#1f2421] py-3.5 font-medium text-white transition hover:opacity-90"
                    >
                      Prześlij zgłoszenie
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </form>

                  {status === "consent" ? (
                    <p className="mt-4 text-sm text-[#9a5d38]">
                      Zaznacz zgodę na kontakt, aby wysłać zgłoszenie.
                    </p>
                  ) : null}
                  {status === "success" ? (
                    <p className="mt-4 text-sm text-[#2c6b46]">
                      Otwieramy Twoją aplikację pocztową z gotowym zgłoszeniem.
                    </p>
                  ) : null}

                  <p className="mt-4 text-sm leading-relaxed text-[#667069]">
                    Oddzwonimy i przedstawimy możliwe warianty współpracy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="oferta" className="mx-auto max-w-7xl px-6 py-20">
          <SectionHeading
            eyebrow="Oferta"
            title={
              <>
                Nie proponujemy jednego schematu.{" "}
                <span className="font-medium">
                  Dobieramy rozwiązanie do potencjału nieruchomości.
                </span>
              </>
            }
            subtitle="Każdy grunt analizujemy indywidualnie. W zależności od lokalizacji, parametrów i możliwości zabudowy proponujemy najlepszy model działania."
          />

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {offerItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="min-h-[250px] rounded-[2rem] border border-black/5 bg-white/75 p-7 shadow-sm"
                >
                  <div className="mb-8 flex items-center justify-between">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#edf0ea]">
                      <Icon className="h-5 w-5 text-[#1f2421]" />
                    </div>
                    <div className="text-sm text-[#7f867f]">0{index + 1}</div>
                  </div>
                  <div className="mb-3 text-2xl font-medium">
                    {item.title}
                  </div>
                  <p className="leading-relaxed text-[#59615b]">{item.text}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section id="jak" className="bg-[#1f2421] py-20 text-white">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <div className="mb-4 text-xs font-medium uppercase tracking-[0.32em] text-white/50">
                  Proces
                </div>
                <h2 className="text-3xl font-light leading-tight md:text-5xl">
                  Jak wygląda współpraca{" "}
                  <span className="font-medium">krok po kroku</span>
                </h2>
                <p className="mt-5 leading-relaxed text-white/70">
                  Chcemy, żeby proces był prosty: Ty zgłaszasz działkę, a my
                  przedstawiamy najlepsze możliwe rozwiązanie.
                </p>
              </div>

              <div className="grid gap-5 md:grid-cols-2 lg:col-span-8 xl:grid-cols-3">
                {processSteps.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur-sm"
                  >
                    <div className="mb-3 text-sm uppercase tracking-[0.22em] text-white/40">
                      Krok {item.number}
                    </div>
                    <div className="mb-3 text-2xl font-medium">
                      {item.title}
                    </div>
                    <p className="leading-relaxed text-white/70">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="grunty" className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Jakie grunty nas interesują"
                title={
                  <>
                    Możesz zgłosić do nas{" "}
                    <span className="font-medium">
                      różne typy nieruchomości
                    </span>
                  </>
                }
                subtitle="Interesują nas grunty z potencjałem pod zabudowę i rozwój inwestycyjny. Jeżeli nie masz pewności, czy Twoja działka pasuje do naszego profilu, po prostu wyślij zgłoszenie."
              />
            </div>
            <div className="grid gap-4 lg:col-span-7 md:grid-cols-2">
              {terrainTypes.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-3xl border border-black/5 bg-white/75 p-5 shadow-sm"
                >
                  <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#edf0ea]">
                    <Check className="h-4 w-4 text-[#1f2421]" />
                  </span>
                  <span className="text-[#36423b]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="przewagi" className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="rounded-[2.4rem] border border-black/5 bg-white/75 p-8 shadow-sm lg:col-span-5 md:p-10">
              <div className="mb-4 text-xs font-medium uppercase tracking-[0.32em] text-[#7c847e]">
                Dlaczego my
              </div>
              <h2 className="mb-5 text-3xl font-light leading-tight md:text-5xl">
                Od działki do gotowej inwestycji
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-[#4e564f]">
                Jako deweloper dysponujemy gotowymi projektami, współpracujemy z
                silnym partnerem i realizujemy budynki w technologii
                prefabrykowanej. Dzięki temu możemy szybciej przechodzić od
                analizy gruntu do realnego działania.
              </p>
              <div className="space-y-4">
                {strengths.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="rounded-3xl bg-[#f4f1ea] p-5">
                      <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white">
                        <Icon className="h-5 w-5 text-[#1f2421]" />
                      </div>
                      <div className="mb-2 font-medium">{item.title}</div>
                      <p className="text-sm leading-relaxed text-[#59615b]">
                        {item.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="overflow-hidden rounded-[2.4rem] border border-white/50 bg-gradient-to-br from-[#d8d1c4] to-[#aab3a3] p-6 shadow-2xl shadow-black/10 lg:col-span-7 md:p-8">
              <div className="mb-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-[1.8rem] bg-white/85 p-6 shadow-sm">
                  <div className="mb-2 text-xs uppercase tracking-[0.25em] text-[#6b736c]">
                    Korzyść dla właściciela
                  </div>
                  <div className="text-2xl font-medium leading-tight">
                    Nie sprzedawaj działki w ciemno
                  </div>
                  <p className="mt-3 leading-relaxed text-[#54605a]">
                    Najpierw sprawdzamy potencjał nieruchomości i dopiero potem
                    proponujemy konkretny model działania.
                  </p>
                </div>
                <div className="rounded-[1.8rem] bg-[#2b302d] p-6 text-white shadow-sm">
                  <div className="mb-2 text-xs uppercase tracking-[0.25em] text-white/45">
                    Bonus
                  </div>
                  <div className="text-2xl font-medium leading-tight">
                    Czasem możesz zyskać więcej niż tylko cenę działki
                  </div>
                  <p className="mt-3 leading-relaxed text-white/70">
                    W wybranych przypadkach proponujemy wspólne przedsięwzięcie
                    z dodatkowym rozliczeniem dla właściciela.
                  </p>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-[1.8rem] bg-white/75 p-4 shadow-sm">
                  <div className="relative mb-4 h-44 overflow-hidden rounded-[1.4rem]">
                    <Image
                      src="/premium-houses.jpeg"
                      alt="Nowoczesna zabudowa premium"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-sm font-medium text-[#2b312d]">
                    Nowoczesna zabudowa premium
                  </div>
                </div>

                <div className="rounded-[1.8rem] bg-white/75 p-4 shadow-sm">
                  <div className="relative mb-4 h-44 overflow-hidden rounded-[1.4rem]">
                    <Image
                      src="/prefab-houses.jpeg"
                      alt="Prefabrykowana zabudowa mieszkaniowa"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-sm font-medium text-[#2b312d]">
                    Prefabrykowana zabudowa mieszkaniowa
                  </div>
                </div>

                <div className="rounded-[1.8rem] bg-white/75 p-4 shadow-sm">
                  <div className="relative mb-4 h-44 overflow-hidden rounded-[1.4rem]">
                    <Image
                      src="/masterplan.jpeg"
                      alt="Układ osiedla i potencjał urbanistyczny"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-sm font-medium text-[#2b312d]">
                    Układ osiedla i potencjał urbanistyczny
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20">
          <div className="rounded-[2.6rem] bg-[#ece7de] p-8 md:p-12">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-8">
                <div className="mb-4 text-xs font-medium uppercase tracking-[0.32em] text-[#7c847e]">
                  Dodatkowa wartość
                </div>
                <h2 className="text-3xl font-light leading-tight md:text-5xl">
                  Zgłaszasz działkę.{" "}
                  <span className="font-medium">
                    My pokazujemy najlepszy kierunek działania.
                  </span>
                </h2>
                <p className="mt-5 max-w-3xl text-lg leading-relaxed text-[#56615b]">
                  Każda nieruchomość ma inny potencjał. Dlatego nie proponujemy
                  jednego scenariusza dla wszystkich. Najpierw analizujemy
                  grunt, a później przedstawiamy najlepszy wariant: zakup,
                  przygotowanie, sprzedaż albo wspólne przedsięwzięcie.
                </p>
              </div>
              <div className="lg:col-span-4">
                <a
                  href="#formularz"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#1f2421] px-7 py-4 text-base text-white shadow-lg shadow-black/10 transition hover:opacity-90"
                >
                  Zgłoś działkę do analizy
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7 rounded-[2.4rem] border border-black/5 bg-[#ece7de] p-8 md:p-10">
              <div className="mb-4 text-xs font-medium uppercase tracking-[0.32em] text-[#7c847e]">
                FAQ
              </div>
              <h2 className="mb-8 text-3xl font-light leading-tight md:text-5xl">
                Najczęściej zadawane pytania
              </h2>
              <div className="space-y-4">
                {faqItems.map((item, index) => (
                  <FaqItem
                    key={item.question}
                    item={item}
                    isOpen={openFaq === index}
                    onToggle={() => setOpenFaq(openFaq === index ? -1 : index)}
                  />
                ))}
              </div>
            </div>

            <div
              id="kontakt"
              className="lg:col-span-5 rounded-[2.4rem] bg-[#1f2421] p-8 text-white shadow-xl md:p-10"
            >
              <div className="relative mb-6 h-10 w-[170px]">
                <Image
                  src="/logo-white.png"
                  alt="Kupię Grunt"
                  fill
                  className="object-contain object-left"
                />
              </div>

              <div className="mb-4 text-xs font-medium uppercase tracking-[0.32em] text-white/45">
                Kontakt
              </div>
              <h2 className="mb-4 text-3xl font-light leading-tight md:text-5xl">
                Masz działkę? Zgłoś ją do nas.
              </h2>
              <p className="mb-8 leading-relaxed text-white/70">
                Przedstawimy możliwe warianty współpracy: zakup, przygotowanie
                do sprzedaży, wsparcie sprzedaży albo wspólne przedsięwzięcie.
              </p>

              <div className="space-y-3 text-sm">
                <a
                  href="tel:+48699589097"
                  className="flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-4 transition hover:bg-white/15"
                >
                  <Phone className="h-4 w-4" />
                  <span>699 589 097</span>
                </a>
                <a
                  href="mailto:kupiesprzedamgrunt@gmail.com"
                  className="flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-4 transition hover:bg-white/15"
                >
                  <Mail className="h-4 w-4" />
                  <span>kupiesprzedamgrunt@gmail.com</span>
                </a>
                <div className="flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-4">
                  <MapPin className="h-4 w-4" />
                  <span>Obszar działania: Polska / wybrane regiony</span>
                </div>
              </div>

              <a
                href="#formularz"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white py-3.5 font-medium text-[#1f2421] transition hover:bg-[#f0eee9]"
              >
                Wyślij zgłoszenie
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/5">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <div className="flex flex-col gap-4 text-sm text-[#69716b] md:flex-row md:items-center md:justify-between">
            <div>© kupiegrunt.pl — strona główna pod pozyskiwanie gruntów.</div>
            <div className="flex flex-wrap gap-5">
              <a href="#">Polityka prywatności</a>
              <a href="#">RODO</a>
              <a href="#kontakt">Kontakt</a>
            </div>
          </div>

          <div className="mt-4 max-w-5xl text-xs leading-relaxed text-[#8a918c]">
            Administratorem Twoich danych osobowych jest QHOME Spółka z ograniczoną
            odpowiedzialnością z siedzibą w Warszawie, ul. Poprawna 110, 03-984 Warszawa,
            KRS: 0000873977, NIP: 5213915200, REGON: 387719837. Dane podane w formularzu
            są przetwarzane w celu kontaktu, analizy nieruchomości oraz przedstawienia
            możliwych wariantów współpracy. Kontakt w sprawach danych osobowych:
            {" "}
            <a
              href="mailto:kupiesprzedamgrunt@gmail.com"
              className="underline underline-offset-2"
            >
              kupiesprzedamgrunt@gmail.com
            </a>
            .
          </div>
        </div>
      </footer>
    </div>
  );
}
