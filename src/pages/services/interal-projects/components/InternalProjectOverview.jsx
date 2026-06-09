import Container from "../../../../components/ui/Container";
import LogisticsVideo from "../../../../assets/Logistics_Media.mp4";

export default function InternalProjectOverview() {
  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* TEXT */}
          <div>
            <span className="text-xs font-bold tracking-widest text-blue-600 uppercase bg-blue-50 px-4 py-1.5 mb-2 rounded-full inline-block">
              PROJECT OVERVIEW
            </span>

            <h2 className="text-3xl! md:text-4xl! font-bold text-slate-900 leading-tight mb-6">
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
          <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-black">
            <video
              className="w-full h-full object-cover"
              controls
              preload="metadata"
              playsInline
            >
              <source
                src={LogisticsVideo}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </Container>
    </section>
  );
}