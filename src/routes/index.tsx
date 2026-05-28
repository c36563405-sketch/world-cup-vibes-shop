import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fanáticos Copa | Loja Oficial do Torcedor 2026" },
      {
        name: "description",
        content:
          "Bandeiras, kits torcedor, copos CBF, álbuns Panini, projetor e acessórios oficiais para a Copa do Mundo 2026. Entrega para todo o Brasil.",
      },
    ],
  }),
  component: Index,
});

type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  link: string;
  badge?: string;
  desc: string;
};

const PRODUCTS: Product[] = [
  {
    id: "projetor",
    name: "Mini Projetor Portátil LED 1080p HDMI - 600 Lumens",
    price: 297.0,
    image: "/products/projetor.png",
    link: "https://pay.kaiross.com.br/mhfD7gQvpjLe",
    badge: "TELÃO DA COPA",
    desc: "Transforme sua sala no maior estádio da vizinhança. Tela de até 60 polegadas, HDMI, USB e som embutido. Testado antes do envio.",
  },
  {
    id: "kit-torcedor",
    name: "Kit Torcedor Brasil Copa 2026 - 12 Peças",
    price: 89.0,
    image: "/products/kit-torcedor.png",
    link: "https://pay.kaiross.com.br/IWFJeZhVIJ8C",
    badge: "MAIS VENDIDO",
    desc: "Kit completo com 12 itens: bandeira 90x150, corneta, óculos, pulseira, lenço, bastões infláveis, fogos, pintura facial e mais.",
  },
  {
    id: "bandeira-grande",
    name: "Bandeira do Brasil Gigante 1,50m x 0,90m",
    price: 49.9,
    image: "/products/bandeira-grande.png",
    link: "https://pay.kaiross.com.br/M26EORs0nd8p",
    desc: "100% poliéster, cores vibrantes, costura reforçada. Perfeita para mastros, fachadas e dias de jogo.",
  },
  {
    id: "varal",
    name: "Varal de 20 Bandeirinhas Brasil 6 Metros",
    price: 29.9,
    image: "/products/varal-bandeirinhas.png",
    link: "https://pay.kaiross.com.br/N5wrgJ7A9wtL",
    badge: "CLÁSSICO",
    desc: "6 metros, 20 bandeiras impressas frente e verso. Decoração instantânea para sua casa, rua ou comércio.",
  },
  {
    id: "bandeira-carro",
    name: "Bandeira do Brasil para Vidro de Carro",
    price: 27.9,
    image: "/products/bandeira-carro.png",
    link: "https://pay.kaiross.com.br/W1ktRRKnNK9Z",
    desc: "Poliéster resistente, haste reforçada, estampa dupla face. Leve o Brasil para a rua nos dias de jogo.",
  },
  {
    id: "corneta",
    name: "Corneta Brasil Barulhenta - Torcedor",
    price: 24.9,
    image: "/products/corneta.png",
    link: "https://pay.kaiross.com.br/G3uCUl71Mg94",
    desc: "Som potente, plástico rígido nas cores oficiais. Cores sortidas (verde e amarelo).",
  },
  {
    id: "copo-verde",
    name: "Copo Térmico CBF Verde - Aço Inox 473ml",
    price: 69.9,
    image: "/products/copo-verde.png",
    link: "https://pay.kaiross.com.br/wJPz0UCAErbA",
    desc: "Parede dupla com isolamento a vácuo. Mantém quente ou gelado por horas. Estampa CBF + BRASIL.",
  },
  {
    id: "copo-azul",
    name: "Copo Térmico CBF Azul Marinho - Aço Inox 473ml",
    price: 69.9,
    image: "/products/copo-azul.png",
    link: "https://pay.kaiross.com.br/Fq2oIsQQ7qnx",
    desc: "Parede dupla com isolamento a vácuo. Mantém quente ou gelado por horas. Estampa CBF + BRASIL.",
  },
  {
    id: "copo-amarelo",
    name: "Copo Térmico CBF Amarelo - Aço Inox 473ml",
    price: 69.9,
    image: "/products/copo-amarelo.png",
    link: "https://pay.kaiross.com.br/S6mychWCAsFx",
    desc: "Parede dupla com isolamento a vácuo. Mantém quente ou gelado por horas. Estampa CBF + BRASIL.",
  },
  {
    id: "album",
    name: "Álbum Copa do Mundo FIFA 2026 - Panini",
    price: 79.9,
    image: "/products/album.png",
    link: "https://pay.kaiross.com.br/O5j1Q6dp7M9B",
    desc: "Livro ilustrado oficial Panini. 112 páginas + capa, formato 232x270mm. (Figurinhas não inclusas)",
  },
  {
    id: "album-10",
    name: "Álbum FIFA 2026 + 10 Envelopes de Figurinhas",
    price: 159.9,
    image: "/products/album-10.png",
    link: "https://pay.kaiross.com.br/lNk0pSpCI46Q",
    badge: "COMBO",
    desc: "Álbum oficial Panini + 10 envelopes (70 figurinhas). Comece sua coleção da Copa agora.",
  },
  {
    id: "album-20",
    name: "Álbum FIFA 2026 + 20 Envelopes de Figurinhas",
    price: 249.9,
    image: "/products/album-20.png",
    link: "https://pay.kaiross.com.br/bp70EH62udNe",
    badge: "COMBO TOP",
    desc: "Álbum oficial Panini + 20 envelopes (140 figurinhas). O combo definitivo do colecionador.",
  },
  {
    id: "envelope",
    name: "Envelope de Figurinhas FIFA 2026 - 1 Unidade",
    price: 15.98,
    image: "/products/envelope.png",
    link: "https://pay.kaiross.com.br/0yv5wWjL3SVr",
    desc: "1 envelope oficial Panini com 7 cromos para colar no seu álbum da Copa 2026.",
  },
  {
    id: "pisca",
    name: "Pisca Pisca 100 LEDs Branco Quente 10m - 110V",
    price: 34.9,
    image: "/products/pisca-pisca.png",
    link: "https://pay.kaiross.com.br/JP1IArQbrySJ",
    desc: "Cordão LED branco quente, 10 metros, múltiplos efeitos. Decoração aconchegante para festas.",
  },
  {
    id: "cortina-led",
    name: "Cortina de LED RGB Multicolor 300 Luzes 3x3m - USB",
    price: 79.9,
    image: "/products/cortina-led.png",
    link: "https://pay.kaiross.com.br/iQ5EfVNU1uIM",
    badge: "NOVO",
    desc: "300 LEDs multicoloridos, 3x3 metros, alimentação USB/bivolt. Transforme qualquer ambiente.",
  },
];

const BANNERS = [
  {
    image: "/banners/banner-projetor.jpg",
    eyebrow: "NOVIDADE • TELÃO EM CASA",
    title: "ASSISTA À COPA EM TELÃO DE 60\"",
    sub: "Mini Projetor 1080p HDMI por apenas R$297 — chame a galera e viva cada gol como se fosse no estádio.",
    cta: "Quero meu telão",
    target: "projetor",
  },
  {
    image: "/banners/banner-torcida.jpg",
    eyebrow: "FALTAM POUCOS DIAS",
    title: "VISTA O VERDE E AMARELO",
    sub: "Kit torcedor, bandeiras e copos CBF com envio para todo o Brasil. Garanta antes que esgote.",
    cta: "Ver produtos",
    target: "produtos",
  },
  {
    image: "/banners/banner-rua.jpg",
    eyebrow: "DECORE SUA RUA",
    title: "VARAL DE BANDEIRAS 6 METROS",
    sub: "Transforme sua casa, rua ou comércio em um reduto da Seleção a partir de R$29,90.",
    cta: "Comprar agora",
    target: "produtos",
  },
];

function Index() {
  const [bannerIdx, setBannerIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setBannerIdx((i) => (i + 1) % BANNERS.length), 4500);
    return () => clearInterval(t);
  }, []);

  const scrollToProducts = () => {
    document.getElementById("produtos")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-[#fffdf5] text-neutral-900">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b-4 border-[#FFDF00] bg-[#009C3B] text-white shadow-lg">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFDF00] text-xl">
              🇧🇷
            </div>
            <div>
              <h1 className="text-lg font-black leading-tight">FANÁTICOS COPA</h1>
              <p className="text-[10px] font-semibold uppercase tracking-wider text-[#FFDF00]">
                Loja do Torcedor 2026
              </p>
            </div>
          </div>
          <button
            onClick={scrollToProducts}
            className="rounded-full bg-[#FFDF00] px-4 py-2 text-sm font-bold text-[#002776] transition hover:scale-105 hover:bg-yellow-300"
          >
            Ver Produtos
          </button>
        </div>
      </header>

      {/* Banner rotativo */}
      <section className="relative overflow-hidden bg-black">
        <div className="relative mx-auto h-[420px] max-w-7xl md:h-[520px]">
          {BANNERS.map((b, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                i === bannerIdx ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              <img
                src={b.image}
                alt={b.title}
                className="absolute inset-0 h-full w-full object-cover"
                loading={i === 0 ? "eager" : "lazy"}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20" />
              <div className="absolute inset-0 flex items-center">
                <div className="max-w-2xl px-6 md:px-12">
                  <span className="inline-block rounded-full bg-[#FFDF00] px-3 py-1 text-[10px] font-black uppercase tracking-wider text-[#002776] shadow-lg md:text-xs">
                    {b.eyebrow}
                  </span>
                  <h2 className="mt-4 text-3xl font-black leading-tight text-white drop-shadow-2xl md:text-5xl lg:text-6xl">
                    {b.title}
                  </h2>
                  <p className="mt-3 max-w-xl text-sm font-medium text-white/90 drop-shadow md:text-lg">
                    {b.sub}
                  </p>
                  <button
                    onClick={() => scrollTo(b.target)}
                    className="mt-6 rounded-full bg-[#FFDF00] px-8 py-3 text-sm font-black uppercase text-[#002776] shadow-xl transition hover:scale-105 hover:bg-yellow-300 md:text-base"
                  >
                    {b.cta} →
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 gap-2">
            {BANNERS.map((_, i) => (
              <button
                key={i}
                onClick={() => setBannerIdx(i)}
                className={`h-2 rounded-full transition-all ${
                  i === bannerIdx ? "w-10 bg-[#FFDF00]" : "w-2 bg-white/60"
                }`}
                aria-label={`Banner ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Faixa de benefícios */}
      <section className="border-y-2 border-[#FFDF00] bg-[#002776] text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-2 px-4 py-3 text-center text-xs font-semibold md:grid-cols-4 md:text-sm">
          <div>🇧🇷 Produtos Oficiais</div>
          <div>📦 Enviamos para todo Brasil</div>
          <div>🔒 Compra 100% Segura</div>
          <div>⚡ Envio Rápido</div>
        </div>
      </section>

      {/* Storytelling — Projetor */}
      <section id="projetor" className="relative overflow-hidden bg-gradient-to-br from-[#001a4d] via-[#002776] to-[#001033] py-14 text-white md:py-20">
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: "radial-gradient(circle at 80% 20%, #FFDF00 0%, transparent 35%), radial-gradient(circle at 10% 90%, #009C3B 0%, transparent 40%)",
        }} />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 md:grid-cols-2">
          <div>
            <span className="inline-block rounded-full bg-[#FFDF00] px-3 py-1 text-[10px] font-black uppercase tracking-wider text-[#002776]">
              O telão oficial da sua casa
            </span>
            <h2 className="mt-4 text-3xl font-black leading-tight md:text-5xl">
              IMAGINA O <span className="text-[#FFDF00]">GOL DO BRASIL</span><br/>
              EM UMA TELA DE <span className="text-[#00E676]">60 POLEGADAS</span>
            </h2>
            <p className="mt-4 text-base text-white/90 md:text-lg">
              Esquece a TV pequena da sala. Com o <strong>Mini Projetor Portátil 1080p</strong>,
              você transforma qualquer parede branca no maior telão da vizinhança.
              Chama os amigos, abre a cerveja gelada, joga a bandeira na parede — e
              vive cada lance da Copa como se estivesse dentro do Maracanã.
            </p>
            <ul className="mt-6 space-y-2 text-sm md:text-base">
              <li className="flex items-start gap-2"><span className="text-[#FFDF00]">⚡</span> HDMI, USB, AV e cartão SD — conecta TV Box, PS, notebook e celular</li>
              <li className="flex items-start gap-2"><span className="text-[#FFDF00]">🔊</span> Alto-falante embutido — som potente sem precisar de caixa extra</li>
              <li className="flex items-start gap-2"><span className="text-[#FFDF00]">📺</span> Projeção de 24" até 60" — escolhe o tamanho do seu estádio</li>
              <li className="flex items-start gap-2"><span className="text-[#FFDF00]">💡</span> 30.000 horas de LED — vai durar muito além de 2026</li>
              <li className="flex items-start gap-2"><span className="text-[#FFDF00]">✅</span> Testado antes do envio + controle remoto incluso</li>
            </ul>
            <div className="mt-6 flex flex-wrap items-end gap-4">
              <div>
                <p className="text-xs uppercase tracking-wider text-white/60">Por apenas</p>
                <p className="text-4xl font-black text-[#FFDF00] md:text-5xl">R$ 297<span className="text-2xl">,00</span></p>
                <p className="text-xs text-white/80">ou 3x de R$ 99,00 sem juros</p>
              </div>
              <a
                href="https://pay.kaiross.com.br/mhfD7gQvpjLe"
                onClick={(e) => {
                  e.preventDefault();
                  const search = typeof window !== "undefined" ? window.location.search : "";
                  window.location.href = "https://pay.kaiross.com.br/mhfD7gQvpjLe" + search;
                }}
                className="rounded-full bg-gradient-to-r from-[#FFDF00] to-[#FFB800] px-8 py-4 text-sm font-black uppercase text-[#002776] shadow-xl transition hover:scale-105 md:text-base"
              >
                Quero meu telão da Copa →
              </a>
            </div>
          </div>
          <div className="relative">
            <img
              src="/banners/banner-projetor.jpg"
              alt="Família assistindo à Copa do Mundo em um telão projetado na parede"
              width={1920}
              height={1080}
              loading="lazy"
              className="aspect-video w-full rounded-3xl object-cover shadow-2xl ring-4 ring-[#FFDF00]/40"
            />
            <div className="absolute -bottom-4 -right-4 rounded-2xl bg-[#FFDF00] px-4 py-2 text-xs font-black uppercase text-[#002776] shadow-xl md:text-sm">
              Tela até 60"
            </div>
          </div>
        </div>
      </section>

      {/* Produtos */}
      <main id="produtos" className="mx-auto max-w-7xl px-4 py-12">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-black text-[#002776] md:text-4xl">
            VISTA O <span className="text-[#009C3B]">VERDE</span> E{" "}
            <span className="text-[#FFB800]">AMARELO</span>
          </h2>
          <p className="mt-2 text-sm text-neutral-600 md:text-base">
            Tudo para você torcer pela Seleção na Copa do Mundo 2026
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {PRODUCTS.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-12 border-t-4 border-[#FFDF00] bg-[#002776] py-8 text-center text-white">
        <div className="mx-auto max-w-7xl px-4">
          <h3 className="text-lg font-black">FANÁTICOS COPA 2026</h3>
          <p className="mt-1 text-xs text-[#FFDF00]">Loja oficial do torcedor brasileiro</p>
          <a
            href="https://www.instagram.com/fanaticoscopa/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#FFDF00] px-4 py-2 text-sm font-black text-[#002776] transition hover:scale-105 hover:bg-yellow-300"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            @fanaticoscopa
          </a>
          <p className="mt-4 text-[11px] text-white/70">
            Compra processada de forma segura via Kaiross Pay. Frete calculado no checkout.
          </p>
        </div>
      </footer>
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  const handleBuy = () => {
    // Preserve UTM parameters when going to checkout
    const search = typeof window !== "undefined" ? window.location.search : "";
    window.location.href = product.link + search;
  };
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border-2 border-neutral-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-[#009C3B] hover:shadow-xl">
      <div className="relative aspect-square overflow-hidden bg-neutral-50">
        {product.badge && (
          <span className="absolute left-3 top-3 z-10 rounded-full bg-[#FFDF00] px-3 py-1 text-[10px] font-black uppercase text-[#002776] shadow">
            {product.badge}
          </span>
        )}
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-contain p-4 transition group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-sm font-bold leading-snug text-neutral-900 line-clamp-2">
          {product.name}
        </h3>
        <p className="mt-2 line-clamp-3 text-xs text-neutral-600">{product.desc}</p>
        <div className="mt-3 flex items-baseline gap-1">
          <span className="text-[11px] text-neutral-500">R$</span>
          <span className="text-2xl font-black text-[#009C3B]">
            {product.price.toFixed(2).replace(".", ",")}
          </span>
        </div>
        <p className="text-[11px] text-neutral-500">
          ou 3x de R$ {(product.price / 3).toFixed(2).replace(".", ",")} sem juros
        </p>
        <button
          onClick={handleBuy}
          className="mt-3 w-full rounded-xl bg-gradient-to-r from-[#009C3B] to-[#007a2e] py-3 text-sm font-black uppercase text-white shadow transition hover:from-[#FFDF00] hover:to-[#FFB800] hover:text-[#002776]"
        >
          Comprar Agora
        </button>
      </div>
    </div>
  );
}
