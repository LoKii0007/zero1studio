import ContactForm from "@/components/contact-form";

export default function ContactPage() {
  return (
    <main className="relative z-10 bg-background min-h-screen pt-32 pb-20 px-4 md:px-6">
      <div className="max-w-[90rem] mx-auto">
        <div className="flex flex-col items-center justify-center">
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
