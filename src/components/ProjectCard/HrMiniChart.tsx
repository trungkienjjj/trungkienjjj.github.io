import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  { metric: "Recall", custom: 0.6316, sklearn: 0.2937 },
  { metric: "F1", custom: 0.4785, sklearn: 0.3966 }
];

export default function HrMiniChart() {
  return (
    <div className="mt-5 border-t border-line/10 pt-4">
      <div className="h-44" aria-hidden="true">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart accessibilityLayer={false} data={data} margin={{ top: 8, right: 4, left: -22, bottom: 0 }}>
            <CartesianGrid stroke="rgb(var(--line) / 0.07)" vertical={false} />
            <XAxis
              dataKey="metric"
              tick={{ fill: "rgb(var(--muted))", fontFamily: "IBM Plex Mono", fontSize: 9 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              domain={[0, 0.7]}
              tick={{ fill: "rgb(var(--muted))", fontFamily: "IBM Plex Mono", fontSize: 8 }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              contentStyle={{
                background: "rgb(var(--surface))",
                border: "1px solid rgb(var(--line) / 0.12)",
                color: "rgb(var(--paper))",
                fontFamily: "IBM Plex Mono",
                fontSize: 10
              }}
            />
            <Legend wrapperStyle={{ fontFamily: "IBM Plex Mono", fontSize: 9 }} />
            <Bar dataKey="custom" name="Custom NumPy" fill="rgb(var(--teal))" radius={[2, 2, 0, 0]} />
            <Bar dataKey="sklearn" name="scikit-learn" fill="rgb(var(--muted))" radius={[2, 2, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="sr-only">
        <table>
          <caption>HR Analytics custom model and scikit-learn comparison</caption>
          <thead>
            <tr><th>Metric</th><th>Custom NumPy</th><th>scikit-learn</th></tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.metric}>
                <th>{item.metric}</th><td>{item.custom}</td><td>{item.sklearn}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
