import Container from "../../../../../components/ui/Container";
import dhl from "../../../../../assets/dhl_icon.jpg";
import aeon from "../../../../../assets/aeon_icon.png";
import hisense from "../../../../../assets/hisense_icon.jpg";
import toshiba from "../../../../../assets/toshiba_icon.jpg";

const partners = [
  { name: "DHL", logo: dhl },
  { name: "Aeon", logo: aeon },
  { name: "Hisense", logo: hisense },
  { name: "Toshiba", logo: toshiba },
];

export default function Partner() {
  return (
    <section className="py-16 bg-gray-100 overflow-hidden">
      <Container>
        <div className="grid md:grid-cols-4 items-center gap-8">
          
          <div className="md:col-span-1 border-l-4 border-blue-500 pl-6">
            <p className="text-black font-semibold text-sm uppercase tracking-widest mb-1">
              We've worked with
            </p>
            <h2 className="text-2xl font-extrabold tracking-tight">
              <span className="text-blue-600">Global Partners</span>
            </h2>
          </div>

          <div className="md:col-span-3 relative overflow-hidden">

            <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-linear-to-r from-gray-50 to-transparent z-10"></div>
            <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-linear-to-l from-gray-50 to-transparent z-10"></div>

            <div className="flex gap-6 animate-scroll whitespace-nowrap w-max py-4">
              {[...partners, ...partners, ...partners].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center w-36 h-20 
                             bg-white rounded-xl shadow-sm border border-gray-100 
                             overflow-hidden shrink-0"
                >
                  <img
                    src={item.logo}
                    alt={item.name}
                    className="w-full h-full object-cover" 
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}