import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";

const metrics = [
  { metric: "Mean CER", base: 38.49, tuned: 12.15, baseLabel: "38.49%", tunedLabel: "12.15%" },
  { metric: "Median CER", base: 27.63, tuned: 6.98, baseLabel: "27.63%", tunedLabel: "6.98%" },
  { metric: "P90 CER", base: 77.5, tuned: 27.33, baseLabel: "77.50%", tunedLabel: "27.33%" },
  { metric: "Exact match", base: 0.1, tuned: 21.9, baseLabel: "0.1%", tunedLabel: "21.9%" },
  { metric: "CER < 5%", base: 1.9, tuned: 41.3, baseLabel: "1.9%", tunedLabel: "41.3%" }
].map((item) => ({
  ...item,
  offset: Math.min(item.base, item.tuned),
  span: Math.abs(item.base - item.tuned)
}));

function DumbbellShape(props: {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  payload?: (typeof metrics)[number];
}) {
  const { x = 0, y = 0, width = 0, height = 0, payload } = props;
  if (!payload) return null;
  const centerY = y + height / 2;
  const baseAtStart = payload.base <= payload.tuned;
  const baseX = baseAtStart ? x : x + width;
  const tunedX = baseAtStart ? x + width : x;

  return (
    <g>
      <line x1={x} x2={x + width} y1={centerY} y2={centerY} className="stroke-line/40" strokeWidth="2" />
      <circle cx={baseX} cy={centerY} r="5" className="fill-muted" />
      <circle cx={tunedX} cy={centerY} r="6" className="fill-teal" />
      <text x={baseX} y={centerY - 10} textAnchor="middle" className="fill-muted font-mono text-[10px]">
        {payload.baseLabel}
      </text>
      <text x={tunedX} y={centerY + 18} textAnchor="middle" className="fill-teal font-mono text-[10px] font-semibold">
        {payload.tunedLabel}
      </text>
    </g>
  );
}

function OCRTooltip({
  active,
  payload
}: {
  active?: boolean;
  payload?: Array<{ payload: (typeof metrics)[number] }>;
}) {
  const item = payload?.[0]?.payload;
  if (!active || !item) return null;
  return (
    <div className="border border-line/10 bg-surface p-3 font-mono text-[0.65rem] shadow-ledger">
      <p className="font-semibold text-paper">{item.metric}</p>
      <p className="mt-2 text-muted">Base: {item.baseLabel}</p>
      <p className="mt-1 text-teal">Fine-tuned: {item.tunedLabel}</p>
    </div>
  );
}

export default function OCRComparisonChart() {
  return (
    <div>
      <div className="mb-4 flex flex-wrap gap-4 font-mono text-[0.65rem] uppercase tracking-[0.1em]">
        <span className="flex items-center gap-2 text-muted">
          <span className="h-2 w-2 rounded-full bg-muted" /> Base
        </span>
        <span className="flex items-center gap-2 text-teal">
          <span className="h-2 w-2 rounded-full bg-teal" /> Fine-tuned
        </span>
      </div>
      <div className="h-[370px] min-w-0 w-full" aria-hidden="true">
        <ResponsiveContainer
          width="100%"
          height="100%"
          minWidth={0}
          minHeight={370}
        >
          <BarChart accessibilityLayer={false} data={metrics} layout="vertical" margin={{ top: 20, right: 36, left: 10, bottom: 10 }}>
            <CartesianGrid stroke="rgb(var(--line) / 0.08)" horizontal={false} />
            <XAxis
              type="number"
              domain={[0, 100]}
              tickFormatter={(value) => `${value}%`}
              tick={{ fill: "rgb(var(--muted))", fontFamily: "IBM Plex Mono", fontSize: 10 }}
              axisLine={{ stroke: "rgb(var(--line) / 0.15)" }}
              tickLine={false}
            />
            <YAxis
              dataKey="metric"
              type="category"
              width={88}
              tick={{ fill: "rgb(var(--paper))", fontFamily: "IBM Plex Mono", fontSize: 10 }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              cursor={{ fill: "rgb(var(--line) / 0.035)" }}
              content={<OCRTooltip />}
            />
            <Bar dataKey="offset" stackId="range" fill="transparent" isAnimationActive={false} />
            <Bar dataKey="span" stackId="range" shape={<DumbbellShape />} isAnimationActive />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="sr-only">
        <table>
          <caption>DeepSeek-OCR base and fine-tuned comparison</caption>
          <thead>
            <tr><th>Metric</th><th>Base</th><th>Fine-tuned</th></tr>
          </thead>
          <tbody>
            {metrics.map((item) => (
              <tr key={item.metric}>
                <th>{item.metric}</th><td>{item.baseLabel}</td><td>{item.tunedLabel}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
