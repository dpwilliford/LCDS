'use client';

import { useState } from 'react';
import Papa from 'papaparse';

export default function ImportsPage() {
  const [data, setData] = useState<any[]>([]);
  const [columns, setColumns] = useState<string[]>([]);

  function handleFile(file: File) {
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        const parsed = results.data as any[];
        setData(parsed.slice(0, 10));
        if (parsed.length > 0) {
          setColumns(Object.keys(parsed[0]));
        }
      },
    });
  }

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Import CSV</h1>

      <input
        type="file"
        accept=".csv"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) handleFile(file);
        }}
        className="mb-4"
      />

      {columns.length > 0 && (
        <div className="overflow-auto">
          <table className="table-auto border">
            <thead>
              <tr>
                {columns.map((col) => (
                  <th key={col} className="border px-2 py-1">{col}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((row, i) => (
                <tr key={i}>
                  {columns.map((col) => (
                    <td key={col} className="border px-2 py-1">
                      {row[col]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
