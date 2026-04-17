import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Clock3,
  MapPin,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Trophy,
  Users,
} from "lucide-react";

const venues = [
  {
    id: 1,
    name: "Casa Verdi Sports",
    neighborhood: "Moinhos de Vento",
    sport: "Futebol 7",
    distance: "1,2 km",
    price: "R$ 120/h",
    rating: 4.9,
    accent: "Destaque",
    surface: "Gramado sintético",
    description: "Estrutura premium com iluminação LED, lounge e reserva instantânea.",
    availability: ["Hoje 19:00", "Hoje 20:30", "Amanhã 18:00"],
  },
  {
    id: 2,
    name: "Orla Padel Club",
    neighborhood: "Praia de Belas",
    sport: "Padel",
    distance: "2,4 km",
    price: "R$ 95/h",
    rating: 4.8,
    accent: "Novo",
    surface: "Quadra panorâmica",
    description: "Quadras cobertas com clima de clube e check-in 100% digital.",
    availability: ["Hoje 17:30", "Hoje 21:00", "Sáb 09:00"],
  },
  {
    id: 3,
    name: "Nave Arena",
    neighborhood: "Petrópolis",
    sport: "Tênis",
    distance: "3,1 km",
    price: "R$ 88/h",
    rating: 4.7,
    accent: "Popular",
    surface: "Saibro rápido",
    description: "Reservas simples, aulas e quadras impecáveis no coração da zona leste.",
    availability: ["Hoje 18:00", "Amanhã 07:00", "Amanhã 20:00"],
  },
  {
    id: 4,
    name: "4º Distrito Court House",
    neighborhood: "Floresta",
    sport: "Basquete",
    distance: "3,8 km",
    price: "R$ 140/h",
    rating: 4.9,
    accent: "Premium",
    surface: "Madeira indoor",
    description: "Experiência boutique para rachões, treinos e eventos com amigos.",
    availability: ["Hoje 19:30", "Sex 20:00", "Dom 10:30"],
  },
];

const neighborhoods = [
  { name: "Moinhos", active: true },
  { name: "Bela Vista", active: false },
  { name: "Petrópolis", active: true },
  { name: "Menino Deus", active: false },
  { name: "Floresta", active: true },
  { name: "Zona Sul", active: false },
];

const filters = ["Todos", "Futebol 7", "Padel", "Tênis", "Basquete"];

function App() {
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("Todos");

  const filteredVenues = useMemo(() => {
    return venues.filter((venue) => {
      const matchesFilter =
        activeFilter === "Todos" || venue.sport === activeFilter;
      const normalized = `${venue.name} ${venue.neighborhood} ${venue.sport}`.toLowerCase();
      const matchesQuery = normalized.includes(query.trim().toLowerCase());

      return matchesFilter && matchesQuery;
    });
  }, [activeFilter, query]);

  return (
    <div className="page-shell">
      <div className="ambient ambient-left" />
      <div className="ambient ambient-right" />

      <header className="topbar">
        <div className="brand">
          <div className="brand-mark">A</div>
          <div>
            <p>Arena POA</p>
            <span>Quadras em um só lugar</span>
          </div>
        </div>

        <nav className="nav">
          <a href="#descobrir">Descobrir</a>
          <a href="#agenda">Agenda</a>
          <a href="#gestores">Para gestores</a>
        </nav>

        <button className="ghost-button">Entrar</button>
      </header>

      <main className="content">
        <section className="hero">
          <motion.div
            className="hero-copy"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="eyebrow">
              <Sparkles size={16} />
              Porto Alegre, sem burocracia
            </div>

            <h1>
              Reserve quadras esportivas em Porto Alegre com uma experiência
              clean e premium.
            </h1>

            <p>
              Encontre quadras próximas, visualize horários disponíveis em
              segundos e confirme a reserva sem precisar ligar para ninguém.
            </p>

            <div className="search-panel" id="descobrir">
              <label className="search-input">
                <Search size={18} />
                <input
                  type="text"
                  placeholder="Busque por bairro, esporte ou nome da arena"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                />
              </label>

              <button className="primary-button">
                Encontrar quadras
                <ArrowRight size={18} />
              </button>
            </div>

            <div className="stats-row">
              <div>
                <strong>+120</strong>
                <span>horários livres por dia</span>
              </div>
              <div>
                <strong>18 bairros</strong>
                <span>mapeados em POA</span>
              </div>
              <div>
                <strong>Reserva em 40s</strong>
                <span>do clique ao pagamento</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="hero-card"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <div className="hero-card-top">
              <span>Disponibilidade ao vivo</span>
              <strong>Agora em Porto Alegre</strong>
            </div>

            <div className="mini-map">
              {neighborhoods.map((item) => (
                <div
                  key={item.name}
                  className={`map-pill ${item.active ? "active" : ""}`}
                >
                  {item.name}
                </div>
              ))}
            </div>

            <div className="live-slot">
              <div>
                <p>Casa Verdi Sports</p>
                <span>Moinhos de Vento • Futebol 7</span>
              </div>
              <strong>19:00</strong>
            </div>

            <div className="live-slot soft">
              <div>
                <p>Orla Padel Club</p>
                <span>Praia de Belas • Padel</span>
              </div>
              <strong>21:00</strong>
            </div>
          </motion.div>
        </section>

        <section className="feature-strip">
          <article>
            <ShieldCheck size={18} />
            <div>
              <strong>Reserva confiável</strong>
              <span>Confirmação imediata e política transparente.</span>
            </div>
          </article>
          <article>
            <Clock3 size={18} />
            <div>
              <strong>Agenda em tempo real</strong>
              <span>Horários atualizados sem depender de atendimento.</span>
            </div>
          </article>
          <article>
            <Users size={18} />
            <div>
              <strong>Perfeito para grupos</strong>
              <span>Convide amigos e centralize os detalhes da partida.</span>
            </div>
          </article>
        </section>

        <section className="listing-section" id="agenda">
          <div className="section-heading">
            <div>
              <span className="section-kicker">Curadoria local</span>
              <h2>Quadras prontas para reservar</h2>
            </div>

            <div className="filter-row">
              {filters.map((filter) => (
                <button
                  key={filter}
                  className={filter === activeFilter ? "filter active" : "filter"}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="cards-grid">
            {filteredVenues.map((venue, index) => (
              <motion.article
                key={venue.id}
                className="venue-card"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <div className="card-glow" />
                <div className="card-header">
                  <span className="badge">{venue.accent}</span>
                  <span className="price">{venue.price}</span>
                </div>

                <div className="venue-main">
                  <h3>{venue.name}</h3>
                  <p>{venue.description}</p>
                </div>

                <div className="meta-row">
                  <span>
                    <MapPin size={15} />
                    {venue.neighborhood}
                  </span>
                  <span>
                    <Trophy size={15} />
                    {venue.sport}
                  </span>
                </div>

                <div className="meta-row compact">
                  <span>{venue.surface}</span>
                  <span>{venue.distance}</span>
                </div>

                <div className="rating-row">
                  <Star size={15} fill="currentColor" />
                  {venue.rating}
                </div>

                <div className="slot-list">
                  {venue.availability.map((slot) => (
                    <button key={slot} className="slot-pill">
                      {slot}
                    </button>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="bottom-panels" id="gestores">
          <article className="panel panel-dark">
            <span className="section-kicker">Para jogadores</span>
            <h2>Da descoberta à reserva em uma única jornada.</h2>
            <p>
              Escolha o esporte, veja o que está perto de você e reserve sem
              ligações, sem espera e sem atrito.
            </p>
          </article>

          <article className="panel">
            <span className="section-kicker">Para gestores de quadra</span>
            <h2>Transforme atendimento manual em ocupação inteligente.</h2>
            <p>
              Centralize agenda, disponibilidade, preços e pagamentos em uma
              vitrine digital com cara de clube premium.
            </p>
          </article>
        </section>
      </main>
    </div>
  );
}

export default App;
