"use client";

interface SidebarProps {
  funcao: string;
}

export default function Sidebar({ funcao }: SidebarProps) {
  const itensRecepcionista = ["Pacientes", "Médicos", "Consultas"];
  const itensMedico = ["Minha Agenda"];

  const itens =
    funcao === "recepcionista"
      ? itensRecepcionista
      : funcao === "medico"
      ? itensMedico
      : [];

  return (
    <aside className="w-60 bg-gray-900 text-white p-6 min-h-screen">
      <h2 className="text-lg font-bold mb-4">Menu</h2>
      <ul className="flex flex-col gap-2">
        {itens.map((item) => (
          <li
            key={item}
            className="hover:bg-gray-700 cursor-pointer px-4 py-2 rounded-md transition-colors"
          >
            {item}
          </li>
        ))}
      </ul>
    </aside>
  );
}
