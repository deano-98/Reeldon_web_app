import type { Metadata } from "next";
import Image from "next/image";
import { HeartHandshake, ShieldCheck, Users } from "lucide-react";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata(
  "About Reeldon Timbers",
  "Discover Reeldon Timbers' family-business roots, vision, values and the people behind our timber products.",
  "/about",
);

const values = [
  {
    icon: Users,
    title: "People first",
    description:
      "We invest in our people, recognise their contribution and build a workplace where loyalty and strong relationships can grow.",
  },
  {
    icon: ShieldCheck,
    title: "Honesty and integrity",
    description:
      "We aim to be fair, straightforward and transparent in the way we work with customers, colleagues and partners.",
  },
  {
    icon: HeartHandshake,
    title: "Quality and care",
    description:
      "We value human life and safety, and keep improving the quality of our products and the service we provide.",
  },
];

const team: {
  name: string;
  title: string;
  image: string;
  phones: { label: string; href?: string }[];
  email: string;
}[] = [
  {
    name: "Chamunorwa Tembo",
    title: "Finance Manager",
    image: "/about/chamunorwa-tembo.jpg",
    phones: [
      { label: "+263 20 66854/71" },
      { label: "+263 772 551 196", href: "+263772551196" },
    ],
    email: "ctembo@reeldon.co.zw",
  },
  {
    name: "Keith K. Sunhwa",
    title: "Operations Manager",
    image: "/about/keith-sunhwa.jpg",
    phones: [{ label: "+263 773 770 387", href: "+263773770387" }],
    email: "kksunhwa@reeldon.co.zw",
  },
  {
    name: "Luxman Chinorwiwa",
    title: "Administrator",
    image: "/about/luxman-chinorwiwa.jpg",
    phones: [{ label: "+263 777 410 160", href: "+263777410160" }],
    email: "lchinorwiwa@reeldon.co.zw",
  },
  {
    name: "Shadreck Chitondwe",
    title: "Sales Manager",
    image: "/about/shadreck-chitondwe.jpg",
    phones: [{ label: "+263 772 416 484", href: "+263772416484" }],
    email: "schitondwe@reeldon.co.zw",
  },
  {
    name: "Lorraine Nhamburo",
    title: "Sales & Marketing Manager",
    image: "/about/lorraine-nhamburo.jpg",
    phones: [{ label: "+263 775 091 885", href: "+263775091885" }],
    email: "lnhamburo@reeldon.co.zw",
  },
  {
    name: "Rudo Mapuranga",
    title: "Sales & Admin Assistant",
    image: "/about/rudo-mapuranga.jpg",
    phones: [{ label: "+263 773 236 303", href: "+263773236303" }],
    email: "rudom@reeldon.co.zw",
  },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-[#FAFAF9] pt-28">
      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-370">
          <p className="text-xs font-bold uppercase tracking-[.2em] text-[#B45309]">
            About Reeldon
          </p>
          <h1 className="mt-5 max-w-5xl text-balance text-5xl font-black tracking-[-.055em] sm:text-6xl lg:text-8xl">
            Rooted in timber. Built around people.
          </h1>
          <p className="mt-7 max-w-3xl text-base leading-8 text-[#2C1D11]/60">
            From a one-person start, Reeldon has grown into a timber
            manufacturing business serving customers in Zimbabwe and across the
            region. We bring practical experience, close relationships with
            timber producers and a commitment to dependable products and
            service.
          </p>

          <section className="mt-16 grid items-center gap-8 overflow-hidden rounded-3xl bg-white p-5 sm:p-8 lg:grid-cols-[.8fr_1.2fr] lg:gap-12 lg:p-12">
            <div className="relative mx-auto aspect-390/475 w-full max-w-97.5 overflow-hidden rounded-2xl bg-[#F5F5F4]">
              <Image
                src="/about/william-founder.jpg"
                alt="Portrait of the Reeldon founder"
                fill
                sizes="(max-width: 1024px) min(100vw, 390px), 390px"
                className="object-contain"
                priority
              />
            </div>
            <div className="py-2">
              <p className="text-xs font-bold uppercase tracking-[.2em] text-[#B45309]">
                A few words from
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                The Founder
              </h2>
              <p className="mt-5 text-sm leading-7 text-[#2C1D11]/65">
                Reeldon began as a one-person venture. By investing in
                production equipment and building lasting relationships with
                timber producers, the business grew into a manufacturer with the
                capacity to serve customers throughout the region, including
                South Africa and Zambia.
              </p>
              <p className="mt-4 text-sm leading-7 text-[#2C1D11]/65">
                We believe good business is built over time. That means
                listening to customers, improving how we work, and giving our
                team the support and recognition they need to do their best. As
                a family business, we want to pass our identity, values and
                knowledge on to the next generation while keeping timber at the
                heart of what we do.
              </p>
            </div>
          </section>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <article className="rounded-3xl bg-[#2C1D11] p-7 text-white sm:p-9">
              <p className="text-xs font-bold uppercase tracking-[.2em] text-[#D97706]">
                Our vision
              </p>
              <h2 className="mt-4 text-2xl font-black">
                A timber heritage for generations.
              </h2>
              <p className="mt-3 text-sm leading-7 text-white/65">
                To grow a family legacy that carries our identity, values and
                ways of working into the future, with timber remaining at the
                centre of our business.
              </p>
            </article>
            <article className="rounded-3xl bg-white p-7 sm:p-9">
              <p className="text-xs font-bold uppercase tracking-[.2em] text-[#B45309]">
                Our mission
              </p>
              <h2 className="mt-4 text-2xl font-black">
                The timber supplier people choose.
              </h2>
              <p className="mt-3 text-sm leading-7 text-[#2C1D11]/60">
                We work to be a preferred supplier for our customers and a
                preferred employer in the timber industry through quality
                products, attentive service and a deliberate, people-first
                approach.
              </p>
            </article>
          </div>

          <section className="mt-20">
            <p className="text-xs font-bold uppercase tracking-[.2em] text-[#B45309]">
              What guides us
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              Our principles and values
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-[#2C1D11]/60">
              These principles shape how we serve customers, work together and
              make decisions throughout the business.
            </p>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {values.map(({ icon: Icon, title, description }) => (
                <article
                  key={title}
                  className="rounded-3xl bg-[#2C1D11] p-7 text-white"
                >
                  <Icon size={22} className="text-[#D97706]" />
                  <h3 className="mt-8 text-xl font-black">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/60">
                    {description}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-20">
            <p className="text-xs font-bold uppercase tracking-[.2em] text-[#B45309]">
              The people behind Reeldon
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              Meet our team
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-[#2C1D11]/60">
              Our team brings together the people who keep our finances,
              operations and customer relationships moving forward.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
              {team.map((person) => (
                <article
                  key={person.email}
                  className="mx-auto w-full max-w-[260px] overflow-hidden rounded-3xl border border-[#2C1D11]/8 bg-white sm:max-w-[300px] lg:max-w-none"
                >
                  <div className="flex aspect-square items-center justify-center bg-[#F5F5F4]">
                    <Image
                      src={person.image}
                      alt={person.name}
                      width={300}
                      height={300}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="h-auto w-full max-w-75 object-contain"
                    />
                  </div>
                  <div className="p-4 lg:p-6">
                    <h3 className="text-xl font-black">{person.name}</h3>
                    <p className="mt-1 text-sm font-semibold text-[#B45309]">
                      {person.title}
                    </p>
                    <div className="mt-4 space-y-2 text-sm text-[#2C1D11]/65">
                      {person.phones.map(({ label, href }) => (
                        <p key={label}>
                          {href ? (
                            <a
                              href={`tel:${href}`}
                              className="transition hover:text-[#B45309]"
                            >
                              {label}
                            </a>
                          ) : (
                            label
                          )}
                        </p>
                      ))}
                      <p>
                        <a
                          href={`mailto:${person.email}`}
                          className="break-all transition hover:text-[#B45309]"
                        >
                          {person.email}
                        </a>
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
