import Container from "../../../../components/ui/Container";

export default function InternalProjectOverview() {
  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* TEXT */}
          <div>
            <span className="inline-flex px-4 py-1.5 mb-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-bold uppercase tracking-widest">
              PROJECT OVERVIEW
            </span>

            <h2 className="text-3xl! md:text-4xl font-bold1 text-slate-900 leading-tight mb-6">
              Nguyen Ha Logistics
            </h2>

            <div className="mt-8 space-y-5 text-lg text-slate-600">
              <p>
                Nguyen Ha Logistics is a comprehensive warehouse management
                system designed to streamline your entire supply chain
                operations. From declaring brands and categories to managing
                imports, exports, and real-time inventory tracking, everything
                is centralized in one intuitive platform. With powerful delivery
                statistics and live shipment tracking, Nguyen Ha Logistics
                empowers businesses to make smarter decisions and deliver
                faster.
              </p>
            </div>
          </div>

          {/* VIDEO */}
          <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-lg border border-slate-200">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/Mz-9VVseYUw"
              title="Nguyen Ha Logistics Overview"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
