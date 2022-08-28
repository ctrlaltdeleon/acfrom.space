interface MetricCardProps {
  header: string;
  link: string;
  metric: Number;
  isCurrency: boolean;
}

export default function MetricCard({
  header,
  link,
  metric,
  isCurrency,
}: MetricCardProps) {
  return (
    <div className="bg-white dark:bg-ei1 border-2 border-l-8 border-slate-800 dark:border-ei2 p-4 rounded-lg w-full">
      <a aria-label={header} target="_blank" rel="noreferrer" href={link}>
        <div className="flex items-center text-slate-800 dark:text-slate-200">
          {header}
          {/* share icon */}
          <svg
            className="h-4 w-4 ml-1"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </div>
      </a>
      <p className="font-bold mt-1 spacing-sm text-3xl text-black dark:text-white">
        {metric > 0 && isCurrency && "$"}
        {metric > 0 ? metric.toLocaleString() : "-"}
      </p>
    </div>
  );
}
