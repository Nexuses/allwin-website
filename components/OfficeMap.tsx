const MAP_QUERY = "AllWin Finances, Business Bay, Dubai, UAE";

export const OFFICE_MAP_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAP_QUERY)}`;

const embedSrc = `https://maps.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}&z=16&output=embed`;

export default function OfficeMap({ className }: { className?: string }) {
  return (
    <iframe
      title="Map showing AllWin Finances office in Business Bay, Dubai"
      src={embedSrc}
      className={className}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      allowFullScreen
    />
  );
}
