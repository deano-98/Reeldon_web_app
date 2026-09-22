"use client";
import { Printer } from "lucide-react";
export function ConversionTable({ rows }: { rows: string[][] }) {
  return (
    <div className="mt-12">
      <div className="no-print mb-4 flex justify-end">
        <button
          onClick={() => window.print()}
          className="inline-flex items-center gap-2 rounded-xl border bg-white px-4 py-2.5 text-xs font-bold"
        >
          <Printer size={14} /> Print table
        </button>
      </div>
      <div className="overflow-x-auto rounded-3xl border bg-white">
        <table className="min-w-190 w-full text-left text-sm">
          <thead className="bg-[#2C1D11] text-white">
            <tr>
              {[
                "Section (mm)",
                "R/M",
                "Pieces / 6m",
                "Bundle Pieces",
                "Bundle m³",
              ].map((x) => (
                <th key={x} className="px-5 py-4">
                  {x}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row[0]} className="border-t">
                <td className="px-5 py-4 font-semibold">{row[0]}</td>
                {row.slice(1).map((c, i) => (
                  <td key={i} className="px-5 py-4 text-[#2C1D11]/65">
                    {c}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
