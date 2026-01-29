
export enum TopicId {
  SAUDE = 'saude',
  EDUCACAO = 'educacao',
  DESENVOLVIMENTO_SOCIAL = 'social',
  FINANCAS = 'financas',
  ESPORTE_CULTURA_LAZER = 'esporte',
  AGRICULTURA = 'agricultura',
  INFRAESTRUTURA = 'infraestrutura',
  PLANEJAMENTO = 'planejamento',
}

export interface HistoricoItem {
  data: number; // Timestamp
  texto: string;
  tipo: 'conclusao' | 'atraso' | 'obs';
  autor: string;
}

export interface Etapa {
  id: string;
  descricao: string;
  prazo: string; // YYYY-MM-DD
  concluido: boolean;
  dataConclusao?: string;
  secretariaVinculada?: TopicId | ''; // Opcional: vínculo com outra secretaria
  observacao?: string;
}

export interface Meta {
  id: string;
  topicId: TopicId;
  titulo: string;
  descricao: string;
  
  // Controle de Prazos
  prazoGeral: string; // YYYY-MM-DD
  diasAlerta: number; // Quantos dias antes do prazo para ficar amarelo
  
  // Controle de Dados
  etapas: Etapa[];
  historico: HistoricoItem[];
  
  // Metadados
  responsavel: string;
  createdAt: number;
  dataAtualizacao: number;
  lastEditor?: string;
  order?: number;

  // Propriedades calculadas no Frontend (não salvas no banco necessariamente, mas usadas na UI)
  computedStatus?: 'green' | 'yellow' | 'red';
  computedProgress?: number;
}

export type Post = Meta;

export interface TopicDef {
  id: TopicId;
  label: string;
  iconName: string;
  color: string;
  description: string;
}

export interface ChartConfig {
    type: 'bar' | 'line' | 'pie';
    title?: string;
    data: any[];
    series?: any[];
    color?: string;
    barLabel?: string;
    lineLabel?: string;
    multiLineSeries?: any[];
    [key: string]: any;
}

export interface ExternalChartData {
    labels?: string[];
    series?: any[];
    yAxes?: {
        left?: { title?: string };
        right?: { title?: string };
    };
    [key: string]: any;
}
