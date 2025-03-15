export interface RelatorioExperiencia {
  id?: number; // Opcional, pois um novo relatório ainda não tem ID
  titulo: string;
  descricao: string;
  dataCriacao: string; // O backend espera uma string no formato de data
  autor: string;
}
