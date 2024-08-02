import { useState } from "react";
import { BsFillTrashFill, BsPencilFill } from "react-icons/bs";
import SearchField from "../components/form/SearchField";

const data = [
  {
    title: "Conteúdo 1",
    author: "Autor 1",
    description: "Descrição 1",
  },
  {
    title: "Conteúdo 2",
    author: "Autor 2",
    description: "Descrição 2",
  },
  {
    title: "Conteúdo 3",
    author: "Autor 3",
    description: "Descrição 3",
  },
];

const ContentManager = () => {
  const [search, setSearch] = useState("");
  const [searchError, setSearchError] = useState("");
  const [openModalAddContent, setOpenModalAddContent] = useState(false);

  const validateSearch = () => {
    if (!search) {
      setSearchError("Campo obrigatório");
      return false;
    }
    return true;
  };

  const handleSearch = () => {
    if (!validateSearch()) return;
    console.log("Searching..." + search);
  };

  return (
    <main className="flex justify-center items-center gap-8 p-16 flex-col">
      <h1 className="text-2xl mb-3">Gerenciador de conteúdos</h1>
      <div className="flex gap-4 align-center justify-center w-full">
        <SearchField
          value={search}
          onChange={setSearch}
          placeholder="Digite sua busca"
          error={searchError}
          onSearch={handleSearch}
          width="w-3/4"
        />
        <button
          className=" bg-blue-dark w-1/4 text-white py-2 px-4 rounded-md h-12 hover:bg-blue"
          onClick={() => setOpenModalAddContent(true)}
        >
          Cadastrar Conteúdo
        </button>
      </div>

      <table className="w-full mt-8 text-left border-collapse table-auto">
        <thead>
          <tr className="border-b border-gray h-10">
            <th className="font-semibold">Título</th>
            <th className="font-semibold">Autor</th>
            <th className="font-semibold">Descrição</th>
            <th className="font-semibold text-center">Editar</th>
            <th className="font-semibold text-center">Excluir</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="border-b border-gray h-10">
              <td>{item.title}</td>
              <td>{item.author}</td>
              <td>{item.description}</td>
              <td className="text-center">
                <button className="text-gray-dark hover:text-gray">
                  <BsPencilFill />
                </button>
              </td>
              <td className="text-center">
                <button className="text-gray-dark hover:text-gray">
                  <BsFillTrashFill />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default ContentManager;
