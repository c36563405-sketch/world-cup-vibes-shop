import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Brasil na Copa 2026 | Loja Oficial do Torcedor" },
      {
        name: "description",
        content:
          "Bandeiras, kits torcedor, copos CBF, álbuns Panini e acessórios oficiais para a Copa do Mundo 2026. Entrega para todo o Brasil.",
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
    title: "FALTAM POUCOS DIAS PARA A COPA 2026",
    sub: "Garanta seus acessórios oficiais antes que esgote",
    cta: "Ver produtos",
  },
  {
    title: "FRETE PARA TODO O BRASIL",
    sub: "Envios diários • Pague no Pix, cartão ou boleto",
    cta: "Comprar agora",
  },
  {
    title: "KIT TORCEDOR 12 PEÇAS POR R$89",
    sub: "Tudo o que você precisa para vibrar com a Seleção",
    cta: "Quero meu kit",
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

  return (
    <div className="min-h-screen bg-[#fffdf5] text-neutral-900">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b-4 border-[#FFDF00] bg-[#009C3B] text-white shadow-lg">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFDF00] text-xl">
              ⚽
            </div>
            <div>
              <h1 className="text-lg font-black leading-tight">BRASIL NA COPA</h1>
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
      <section className="relative overflow-hidden bg-gradient-to-r from-[#009C3B] via-[#00A93E] to-[#007a2e]">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: "radial-gradient(circle at 20% 50%, #FFDF00 0%, transparent 40%), radial-gradient(circle at 80% 30%, #002776 0%, transparent 40%)",
        }} />
        <div className="relative mx-auto max-w-7xl px-4 py-10 md:py-14">
          <div className="flex min-h-[140px] flex-col items-center justify-center text-center">
            {BANNERS.map((b, i) => (
              <div
                key={i}
                className={`absolute inset-0 flex flex-col items-center justify-center px-4 transition-all duration-700 ${
                  i === bannerIdx ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 pointer-events-none"
                }`}
              >
                <h2 className="text-2xl font-black text-white drop-shadow-lg md:text-4xl">
                  {b.title}
                </h2>
                <p className="mt-2 text-sm font-medium text-[#FFDF00] md:text-base">{b.sub}</p>
                <button
                  onClick={scrollToProducts}
                  className="mt-4 rounded-full bg-[#FFDF00] px-6 py-2 text-sm font-black uppercase text-[#002776] shadow-lg transition hover:scale-105"
                >
                  {b.cta}
                </button>
              </div>
            ))}
          </div>
          <div className="relative mt-4 flex justify-center gap-2">
            {BANNERS.map((_, i) => (
              <button
                key={i}
                onClick={() => setBannerIdx(i)}
                className={`h-2 rounded-full transition-all ${
                  i === bannerIdx ? "w-8 bg-[#FFDF00]" : "w-2 bg-white/50"
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
          <h3 className="text-lg font-black">BRASIL NA COPA 2026</h3>
          <p className="mt-1 text-xs text-[#FFDF00]">Loja oficial do torcedor brasileiro</p>
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
