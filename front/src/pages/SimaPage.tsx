import { useEffect, useState } from "react";
import { getSima } from "../api/simaApi";
import type { Sima, PaginatedResponse } from "../types/sima";
import styled from "styled-components";

// --- Styled Components (mesmos do seu código anterior) ---

const PageContainer = styled.div`
  flex: 1;
  width: 100%;
  padding: 2rem;
  background: #ffffff;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #0f172a;
  text-align: center;
`;

const Subtitle = styled.p`
  color: #475569;
  text-align: center;
  margin: 0 0 1.5rem;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: ${({ theme }) => theme.colors.card.background};
  border-radius: 16px;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.colors.card.shadow};
  border: 1px solid ${({ theme }) => theme.colors.card.border};
  backdrop-filter: blur(10px);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    border-color 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 12px 40px rgba(30, 64, 175, 0.2);
    border-color: rgba(30, 64, 175, 0.25);
  }
`;

const Th = styled.th`
  text-align: left;
  padding: 1rem 1.25rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  font-weight: 600;
  font-size: 0.875rem;
`;

const Td = styled.td`
  padding: 1rem 1.25rem;
  border-bottom: 1px solid rgba(229, 231, 235, 0.5);
  color: ${({ theme }) => theme.colors.text.base};
  font-size: 0.875rem;
`;

const Tr = styled.tr`
  &:nth-child(even) {
    background-color: rgba(249, 250, 251, 0.5);
  }
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  gap: 1rem;
`;

const Button = styled.button<{ disabled?: boolean }>`
  background-color: ${(props) => (props.disabled ? "#9ca3af" : props.theme.colors.primary)};
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 12px;
  border: none;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  font-weight: 600;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${(props) => (props.disabled ? "#9ca3af" : props.theme.colors.primaryDark)};
    transform: ${(props) => (props.disabled ? "none" : "translateY(-2px)")};
    box-shadow: ${(props) => (props.disabled ? "none" : "0 8px 20px rgba(30, 64, 175, 0.3)")};
  }
`;

const DateInputs = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  align-items: center;

  input {
    padding: 0.5rem;
    border-radius: 6px;
    border: 1px solid #d1d5db;
  }
`;

function SimaPage() {
  const [data, setData] = useState<Sima[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [startDate, setStartDate] = useState("2004-01-01"); // data inicial padrão
  const [endDate, setEndDate] = useState("2004-12-31"); // data final padrão

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: PaginatedResponse<Sima> = await getSima({
          page,
          limit: 20,
          startDate,
          endDate,
        });

        setData(response.data);
        setTotalPages(response.totalPages);
      } catch (error) {
        console.error("Erro ao carregar registros:", error);
      }
    };

    fetchData();
  }, [page, startDate, endDate]);

  return (
    <PageContainer>
      <Title>Lista de Registros - SIMA</Title>
      <Subtitle>Consulte e filtre os dados coletados pelo sistema</Subtitle>

      {/* 📅 Filtros de data */}
      <DateInputs>
        <label>
          Início:
          <input
            type="date"
            value={startDate}
            onChange={(e) => {
              setStartDate(e.target.value);
              setPage(1); // resetar a paginação ao mudar o filtro
            }}
          />
        </label>

        <label>
          Fim:
          <input
            type="date"
            value={endDate}
            onChange={(e) => {
              setEndDate(e.target.value);
              setPage(1); // resetar a paginação ao mudar o filtro
            }}
          />
        </label>
      </DateInputs>

      {/* 🧾 Tabela de dados */}
      <Table>
        <thead>
          <tr>
            <Th>ID</Th>
            <Th>Estação</Th>
            <Th>Data/Hora</Th>
            <Th>Temperatura</Th>
            <Th>Precipitação</Th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <Tr key={row.idsima}>
              <Td>{row.idsima}</Td>
              <Td>{row.idestacao}</Td>
              <Td>{new Date(row.datahora).toLocaleString("pt-BR")}</Td>
              <Td>{row.tempar ?? "-"}</Td>
              <Td>{row.precipitacao ?? "-"}</Td>
            </Tr>
          ))}
        </tbody>
      </Table>

      {/* 📄 Paginação */}
      <Pagination>
        <Button disabled={page === 1} onClick={() => setPage(page - 1)}>
          Anterior
        </Button>
        <span>
          Página {page} de {totalPages}
        </span>
        <Button disabled={page === totalPages} onClick={() => setPage(page + 1)}>
          Próxima
        </Button>
      </Pagination>
    </PageContainer>
  );
}

export default SimaPage;
