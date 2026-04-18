import denpasaLogo from '@/assets/clients/denpasa-logo.png';
import oleoplanLogo from '@/assets/clients/oleoplan-logo.png';
import vilaNovaLogo from '@/assets/clients/vila-nova-logo.png';
const awkLogo = '/awk.png';
const jbsLogo = '/jbs.png';
const masterLogo = '/master.png';

const clients = [
  { name: 'Denpasa', logo: denpasaLogo },
  { name: 'Oleo Plan', logo: oleoplanLogo },
  { name: 'Vila Nova Agroindustrial', logo: vilaNovaLogo },
  { name: 'AWK', logo: awkLogo },
  { name: 'JBS', logo: jbsLogo },
  { name: 'Master', logo: masterLogo },
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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
          {clients.map((client, index) => (
            <div
              key={index}
              className="group flex items-center justify-center p-8 bg-secondary/50 border border-border rounded-xl transition-all duration-300 hover:border-primary hover:bg-secondary hover:shadow-lg hover:-translate-y-1 h-48"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {client.logo ? (
                <img 
                  src={client.logo} 
                  alt={client.name} 
                  className="max-h-32 max-w-full w-auto object-contain transition-transform duration-300 group-hover:scale-110" 
                />
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