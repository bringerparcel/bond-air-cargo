import Link from "next/link";
import Image from "next/image";
import type { FleetAircraft } from "@/data/fleet";

export default function FleetCard({ aircraft }: { aircraft: FleetAircraft }) {
  return (
    <Link href={`/fleet/${aircraft.slug}`} className="fleet-card">
      <div className="fleet-card-img">
        <Image
          src={aircraft.image}
          alt={aircraft.name}
          fill
          sizes="(max-width: 768px) 100vw, 25vw"
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="fleet-card-body">
        <span className="fleet-card-type">{aircraft.type}</span>
        <h3>{aircraft.name}</h3>
        <div className="fleet-highlights">
          {aircraft.highlights.map((h) => (
            <div className="fleet-highlight" key={h.label}>
              <span className="label">{h.label}</span>
              <span className="value">{h.value}</span>
            </div>
          ))}
        </div>
        <div className="fleet-card-link">
          <span>View Full Specs</span>
          <span className="arrow">&rarr;</span>
        </div>
      </div>
    </Link>
  );
}
