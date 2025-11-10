import denpasaLogo from '@/assets/clients/denpasa-logo.png';
import oleoplanLogo from '@/assets/clients/oleoplan-logo.png';

const clients = [
  { name: 'Denpasa', logo: denpasaLogo },
  { name: 'Oleo Plan', logo: oleoplanLogo },
  { name: 'Vila Nova Agroindustrial', logo: null },
];

const Clients = () => {
  return (
    <section id="clients" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 slide-in-bottom">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Nossos <span className="text-primary">Clientes</span>
          </h2>
          <div className="h-1 w-24 mx-auto bg-accent mb-6" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Confiança e parceria que impulsionam o sucesso de grandes empresas.
          </p>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6 bg-secondary/50 border border-border rounded-lg transition-all duration-300 hover:border-primary hover:bg-secondary h-40"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {client.logo ? (
                <img src={client.logo} alt={client.name} className="max-h-24 w-auto" />
              ) : (
                <h3 className="text-xl font-semibold text-center text-muted-foreground group-hover:text-foreground transition-colors">
                  <span translate="no">{client.name}</span>
                </h3>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;