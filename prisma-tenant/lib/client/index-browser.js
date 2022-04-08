
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 3.11.1
 * Query Engine version: 1a2506facaf1a4727b7c26850735e88ec779dee9
 */
Prisma.prismaVersion = {
  client: "3.11.1",
  engine: "1a2506facaf1a4727b7c26850735e88ec779dee9"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = 'DbNull'
Prisma.JsonNull = 'JsonNull'
Prisma.AnyNull = 'AnyNull'

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.ClinicaScalarFieldEnum = makeEnum({
  codcli: 'codcli',
  nome: 'nome',
  cnpj: 'cnpj',
  hraber: 'hraber',
  hrfech: 'hrfech',
  descri: 'descri',
  tmpcon: 'tmpcon',
  inialm: 'inialm',
  fimalm: 'fimalm',
  fimsem: 'fimsem',
  agenPago: 'agenPago',
  video: 'video',
  emailAniversario: 'emailAniversario',
  smsConsulta: 'smsConsulta',
  emailConsulta: 'emailConsulta',
  emailClinica: 'emailClinica',
  visuDicom: 'visuDicom',
  telefClinica: 'telefClinica',
  modolaudo: 'modolaudo',
  intervaloAgenda: 'intervaloAgenda',
  cabecalhoLaudos: 'cabecalhoLaudos',
  habAlmoco: 'habAlmoco',
  marginTop: 'marginTop',
  marginLeft: 'marginLeft',
  painelChamado: 'painelChamado',
  usaPIN: 'usaPIN',
  corpoEmailClientes: 'corpoEmailClientes',
  dataCreated: 'dataCreated',
  statusBase: 'statusBase',
  PIN: 'PIN',
  configurarClinica: 'configurarClinica',
  adicionaEventos: 'adicionaEventos',
  adicionaProntuarios: 'adicionaProntuarios',
  enderecoLogo: 'enderecoLogo',
  cepClin: 'cepClin',
  enderecoClin: 'enderecoClin',
  numeroClin: 'numeroClin',
  bairroClin: 'bairroClin',
  complementoClin: 'complementoClin',
  codIbgeClin: 'codIbgeClin',
  cidadeClin: 'cidadeClin',
  estadoClin: 'estadoClin',
  emailresponsavelClin: 'emailresponsavelClin',
  emailFinanceiroClin: 'emailFinanceiroClin',
  pesquisaSatisfacao: 'pesquisaSatisfacao',
  profissaoContato: 'profissaoContato',
  quantiaProfSaude: 'quantiaProfSaude',
  quantiaSecretarias: 'quantiaSecretarias',
  outroSistema: 'outroSistema',
  plano: 'plano',
  valorMensal: 'valorMensal',
  minimoUsuarios: 'minimoUsuarios',
  linkContrato: 'linkContrato',
  enderecoCobranca: 'enderecoCobranca',
  cepCobranca: 'cepCobranca',
  cidadeCobranca: 'cidadeCobranca',
  nomeCobranca: 'nomeCobranca',
  emailCobranca: 'emailCobranca',
  tokencard: 'tokencard',
  cod_cliente_omie: 'cod_cliente_omie',
  cod_contrato_omie: 'cod_contrato_omie',
  modopag: 'modopag',
  cobrarsms: 'cobrarsms',
  cobrarapp: 'cobrarapp',
  obsInterna: 'obsInterna',
  temPendencia: 'temPendencia',
  idfusohorario: 'idfusohorario',
  difsegundos: 'difsegundos',
  usaDoisConvenios: 'usaDoisConvenios',
  usaCodRef: 'usaCodRef',
  relatoriosPersonalizados: 'relatoriosPersonalizados',
  demonstracaoAtiva: 'demonstracaoAtiva',
  localObrigatorio: 'localObrigatorio',
  status_secundario: 'status_secundario',
  filtroLocalAgenda: 'filtroLocalAgenda',
  filtroEspecAgenda: 'filtroEspecAgenda',
  modoPagamentoPadrao: 'modoPagamentoPadrao',
  camposPacObrigatorios: 'camposPacObrigatorios',
  msgSMS: 'msgSMS',
  msgEmail: 'msgEmail',
  msgWhatsapp: 'msgWhatsapp',
  integracaoFilazero: 'integracaoFilazero',
  integracaoZoop: 'integracaoZoop',
  corEmail: 'corEmail',
  logoClinEmail: 'logoClinEmail',
  painelSenhas: 'painelSenhas',
  usaTISS: 'usaTISS',
  uploadPanel: 'uploadPanel',
  integraSUS: 'integraSUS',
  confSUS: 'confSUS',
  documentosSUS: 'documentosSUS',
  infoTeste: 'infoTeste',
  configTISS: 'configTISS',
  dadosFaturamento: 'dadosFaturamento',
  nfeConf: 'nfeConf',
  usaSolicitante: 'usaSolicitante',
  usaReembolso: 'usaReembolso',
  obsFinanceira: 'obsFinanceira',
  bloqueioProntuario: 'bloqueioProntuario',
  edtObsPacAgenda: 'edtObsPacAgenda',
  alertaObsPacAgenda: 'alertaObsPacAgenda',
  titleAgenda: 'titleAgenda',
  modeloOrcamento: 'modeloOrcamento',
  tabelaItensOrcamento: 'tabelaItensOrcamento',
  camposPreCadastro: 'camposPreCadastro',
  precadastro: 'precadastro',
  modulo_questionarios: 'modulo_questionarios',
  campos_evento: 'campos_evento',
  default_user_permissions: 'default_user_permissions',
  observacao_obrigatoria_agendamento: 'observacao_obrigatoria_agendamento',
  exibe_id_sol: 'exibe_id_sol',
  obriga_id_sol: 'obriga_id_sol',
  filtro_grupos: 'filtro_grupos',
  config_financeiro: 'config_financeiro',
  modulo_oncologia: 'modulo_oncologia',
  cobrar_telemedicina: 'cobrar_telemedicina',
  controle_vacinas: 'controle_vacinas',
  aviso_inadimplencia_paciente: 'aviso_inadimplencia_paciente',
  modelo_carteirinha: 'modelo_carteirinha'
});

exports.Prisma.Config_clinicaScalarFieldEnum = makeEnum({
  id: 'id',
  nome_config: 'nome_config',
  texto: 'texto',
  true_false: 'true_false',
  numerico: 'numerico'
});

exports.Prisma.OrcamentoScalarFieldEnum = makeEnum({
  codorc: 'codorc',
  idevento: 'idevento',
  descricao: 'descricao',
  statusorc: 'statusorc',
  codu: 'codu',
  codp: 'codp',
  datacad: 'datacad',
  datavalid: 'datavalid',
  dataaprov: 'dataaprov',
  observacao: 'observacao',
  motivorecusa: 'motivorecusa',
  deleted: 'deleted',
  codcon: 'codcon',
  codu_prof: 'codu_prof'
});

exports.Prisma.OrcamentoitensScalarFieldEnum = makeEnum({
  coditem: 'coditem',
  codorc: 'codorc',
  descricao: 'descricao',
  codproc: 'codproc',
  codconvenio: 'codconvenio',
  valor: 'valor',
  reajuste: 'reajuste',
  tiporeajuste: 'tiporeajuste',
  qtdreajuste: 'qtdreajuste',
  quantidade: 'quantidade',
  valorfinal: 'valorfinal',
  aprovado: 'aprovado',
  usuarioAprovou: 'usuarioAprovou'
});

exports.Prisma.OrcamentorecusasScalarFieldEnum = makeEnum({
  codrecusa: 'codrecusa',
  descricao: 'descricao'
});

exports.Prisma.EventosScalarFieldEnum = makeEnum({
  id: 'id',
  title: 'title',
  start: 'start',
  end: 'end',
  color: 'color',
  paciente: 'paciente',
  profissional: 'profissional',
  codproc: 'codproc',
  tpagenda: 'tpagenda',
  status: 'status',
  status_secundario: 'status_secundario',
  horatu: 'horatu',
  codconvenio: 'codconvenio',
  codplano: 'codplano',
  convenio: 'convenio',
  obsagen: 'obsagen',
  codp: 'codp',
  codu: 'codu',
  codcon: 'codcon',
  cidadep: 'cidadep',
  contato: 'contato',
  contato2: 'contato2',
  contato3: 'contato3',
  valor: 'valor',
  editable: 'editable',
  coduni: 'coduni',
  local: 'local',
  pago: 'pago',
  modopag: 'modopag',
  parcelas: 'parcelas',
  ocorrenciaRepeticao: 'ocorrenciaRepeticao',
  codconta: 'codconta',
  medicoSolicitante: 'medicoSolicitante',
  codVinculo: 'codVinculo',
  desconto: 'desconto',
  tipoDesconto: 'tipoDesconto',
  valorFinal: 'valorFinal',
  deuDesconto: 'deuDesconto',
  id_solicitacao: 'id_solicitacao',
  usuarioAtendimento: 'usuarioAtendimento',
  flagevento: 'flagevento',
  fromApp: 'fromApp',
  obsApp: 'obsApp',
  coducad: 'coducad',
  datacadeve: 'datacadeve',
  vinculoApp: 'vinculoApp',
  metadados: 'metadados',
  flag_migracao: 'flag_migracao',
  data_migracao: 'data_migracao',
  data_edicao: 'data_edicao',
  codu_update: 'codu_update'
});

exports.Prisma.PacientesScalarFieldEnum = makeEnum({
  codp: 'codp',
  nome: 'nome',
  dtnasc: 'dtnasc',
  genero: 'genero',
  email: 'email',
  ddi: 'ddi',
  celular: 'celular',
  telf: 'telf',
  telo: 'telo',
  cep: 'cep',
  endereco: 'endereco',
  numero: 'numero',
  comple: 'comple',
  bairro: 'bairro',
  cidade: 'cidade',
  idcidade: 'idcidade',
  uf: 'uf',
  idcidadenatural: 'idcidadenatural',
  cpf: 'cpf',
  rg: 'rg',
  profis: 'profis',
  estadoci: 'estadoci',
  nmae: 'nmae',
  npai: 'npai',
  nresp: 'nresp',
  obs: 'obs',
  convenio: 'convenio',
  codplano: 'codplano',
  ncart: 'ncart',
  valicart: 'valicart',
  fotopac: 'fotopac',
  peso: 'peso',
  altura: 'altura',
  qmind: 'qmind',
  pacFicouSabendo: 'pacFicouSabendo',
  datacad: 'datacad',
  alergias: 'alergias',
  fimImportacao: 'fimImportacao',
  orgemissor: 'orgemissor',
  raca: 'raca',
  ibgecidade: 'ibgecidade',
  codref: 'codref',
  obito: 'obito',
  dataObito: 'dataObito',
  conveniodois: 'conveniodois',
  codplanodois: 'codplanodois',
  empresa: 'empresa',
  nTemCpf: 'nTemCpf',
  motivoCPF: 'motivoCPF',
  recebeAvisos: 'recebeAvisos',
  recebeAvisosEmail: 'recebeAvisosEmail',
  ncartcns: 'ncartcns',
  cpfresponsavel: 'cpfresponsavel',
  profmae: 'profmae',
  profpai: 'profpai',
  estrangeiro: 'estrangeiro',
  tiposanguineo: 'tiposanguineo',
  observacaoFinanceira: 'observacaoFinanceira',
  obsClinicas: 'obsClinicas',
  imgCarteiraConv: 'imgCarteiraConv',
  convenioApp: 'convenioApp',
  lista_consultas: 'lista_consultas',
  data_modificado: 'data_modificado',
  codu_modificou: 'codu_modificou',
  codu_vendedor: 'codu_vendedor',
  ncartdois: 'ncartdois',
  valicartdois: 'valicartdois',
  conveniotres: 'conveniotres',
  codplanotres: 'codplanotres',
  ncarttres: 'ncarttres',
  valicarttres: 'valicarttres',
  nome_registro: 'nome_registro',
  religiao: 'religiao',
  compartilha_dados: 'compartilha_dados',
  identidade_genero: 'identidade_genero',
  flag_migracao: 'flag_migracao',
  data_migracao: 'data_migracao',
  fichaleg: 'fichaleg'
});

exports.Prisma.ConsultaScalarFieldEnum = makeEnum({
  codcon: 'codcon',
  queixa: 'queixa',
  anteceden: 'anteceden',
  antecedenfamilia: 'antecedenfamilia',
  ativi: 'ativi',
  ativiD: 'ativiD',
  etili: 'etili',
  etiliD: 'etiliD',
  fuman: 'fuman',
  fumanD: 'fumanD',
  droga: 'droga',
  drogaD: 'drogaD',
  alerg: 'alerg',
  alergD: 'alergD',
  diabe: 'diabe',
  diabeD: 'diabeD',
  doenc: 'doenc',
  doencD: 'doencD',
  hiper: 'hiper',
  hiperD: 'hiperD',
  neopl: 'neopl',
  neoplD: 'neoplD',
  remed: 'remed',
  remedD: 'remedD',
  peso: 'peso',
  altura: 'altura',
  imc: 'imc',
  tempe: 'tempe',
  pas: 'pas',
  pad: 'pad',
  freqres: 'freqres',
  freqcar: 'freqcar',
  descfis: 'descfis',
  cid10: 'cid10',
  conduta: 'conduta',
  meds: 'meds',
  id: 'id',
  nomepac: 'nomepac',
  codp: 'codp',
  codu: 'codu',
  nomepro: 'nomepro',
  dtconsulta: 'dtconsulta',
  anxfoto1: 'anxfoto1',
  anxfoto2: 'anxfoto2',
  anxfoto3: 'anxfoto3',
  legfotos: 'legfotos',
  prescricao: 'prescricao',
  documentos: 'documentos',
  documentos2: 'documentos2',
  documentos3: 'documentos3',
  documentosdif: 'documentosdif',
  ncomp: 'ncomp',
  motivo: 'motivo',
  etiquetas: 'etiquetas',
  listpro: 'listpro',
  metcon: 'metcon',
  metconD: 'metconD',
  plantrat: 'plantrat',
  patologia: 'patologia',
  flag_migracao: 'flag_migracao',
  data_migracao: 'data_migracao',
  data_edicao: 'data_edicao',
  codu_update: 'codu_update'
});

exports.Prisma.UsuariosScalarFieldEnum = makeEnum({
  id: 'id',
  usuclin: 'usuclin',
  id_multiclinica: 'id_multiclinica',
  codu: 'codu',
  usuario: 'usuario',
  nome: 'nome',
  senha: 'senha',
  datanasci: 'datanasci',
  genero: 'genero',
  cpf: 'cpf',
  rg: 'rg',
  telefonecel: 'telefonecel',
  telefonefix: 'telefonefix',
  estado: 'estado',
  cidade: 'cidade',
  cep: 'cep',
  endereco: 'endereco',
  numero: 'numero',
  bairro: 'bairro',
  conselho: 'conselho',
  registroprof: 'registroprof',
  registrouf: 'registrouf',
  permissao: 'permissao',
  img: 'img',
  viuAtualizacoes: 'viuAtualizacoes',
  hab_chat: 'hab_chat',
  volume_chat: 'volume_chat',
  panel_user_status: 'panel_user_status',
  tmpConsulta: 'tmpConsulta',
  chat_status: 'chat_status',
  medpadrao: 'medpadrao',
  assinaturaMed: 'assinaturaMed',
  userstatus: 'userstatus',
  intervAgenda: 'intervAgenda',
  inicioAgenda: 'inicioAgenda',
  fimAgenda: 'fimAgenda',
  modoAgenda: 'modoAgenda',
  contapadrao: 'contapadrao',
  PIN: 'PIN',
  usuarioTarefas: 'usuarioTarefas',
  modoPagamento: 'modoPagamento',
  paginaInicial: 'paginaInicial',
  controlaPermissoes: 'controlaPermissoes',
  usuarioSuporte: 'usuarioSuporte',
  triagemSimplificada: 'triagemSimplificada',
  mostrarFinalizadas: 'mostrarFinalizadas',
  usaAmpliconsulta: 'usaAmpliconsulta',
  blockModalCadHorarios: 'blockModalCadHorarios',
  especialidade: 'especialidade',
  tratamento: 'tratamento',
  temAgenda: 'temAgenda',
  multiAgenda: 'multiAgenda',
  nivelAcesso: 'nivelAcesso',
  usuarioAluno: 'usuarioAluno',
  usuarioAtivo: 'usuarioAtivo',
  cobrarUsuario: 'cobrarUsuario',
  somenteAmpliconsulta: 'somenteAmpliconsulta',
  login_token: 'login_token',
  relatDiario: 'relatDiario',
  ccRelatorioDiario: 'ccRelatorioDiario',
  usaCertificado: 'usaCertificado',
  atendeOnline: 'atendeOnline',
  datacad: 'datacad',
  usuario_senha_res: 'usuario_senha_res',
  agenda_procedimentos: 'agenda_procedimentos',
  perfil: 'perfil',
  cooperado: 'cooperado',
  consulta_dados_res: 'consulta_dados_res',
  envia_dados_res: 'envia_dados_res',
  tipo_certificado: 'tipo_certificado',
  rqe: 'rqe',
  info_implantacao: 'info_implantacao',
  oid_assinatura: 'oid_assinatura',
  termo_aceite: 'termo_aceite',
  identidade_genero: 'identidade_genero',
  usuario_restrito: 'usuario_restrito',
  log_edicoes: 'log_edicoes',
  horarioRelatorioDiario: 'horarioRelatorioDiario',
  biografia: 'biografia',
  auditor: 'auditor'
});

exports.Prisma.UsuconfScalarFieldEnum = makeEnum({
  codconusu: 'codconusu',
  codu: 'codu',
  hispac: 'hispac',
  habvida: 'habvida',
  outinf: 'outinf',
  exafis: 'exafis',
  exafisdet: 'exafisdet',
  doctos: 'doctos',
  anexos: 'anexos',
  prescri: 'prescri',
  resuhist: 'resuhist',
  atalhos: 'atalhos',
  inf9: 'inf9',
  inf10: 'inf10',
  inf11: 'inf11',
  inf12: 'inf12',
  inf13: 'inf13',
  inf14: 'inf14',
  inf15: 'inf15',
  inf16: 'inf16',
  inf17: 'inf17',
  inf18: 'inf18',
  inf19: 'inf19',
  tamtex1: 'tamtex1',
  tamtex2: 'tamtex2',
  tamtex3: 'tamtex3',
  tamtex4: 'tamtex4',
  infextras: 'infextras',
  infreumato: 'infreumato',
  infpersonalizado: 'infpersonalizado',
  audiolaudo: 'audiolaudo',
  infodontologia: 'infodontologia',
  timeline: 'timeline',
  imppdf: 'imppdf',
  margemsupd: 'margemsupd',
  margemesqd: 'margemesqd',
  largurapagd: 'largurapagd',
  margemsupp: 'margemsupp',
  margemesqp: 'margemesqp',
  largurapagp: 'largurapagp',
  cabecalhop: 'cabecalhop',
  cabecalhod: 'cabecalhod',
  margemEsqLaudo: 'margemEsqLaudo',
  margemSupLaudo: 'margemSupLaudo',
  larguraLaudo: 'larguraLaudo',
  alturaLaudo: 'alturaLaudo',
  alturaPaginacao: 'alturaPaginacao',
  rodapeLaudo: 'rodapeLaudo',
  estoquePresc: 'estoquePresc',
  infoftalmologia: 'infoftalmologia',
  receitaOculos: 'receitaOculos',
  rodRelatorio: 'rodRelatorio',
  cabRelatorio: 'cabRelatorio',
  moduloPadrao: 'moduloPadrao',
  infprenatal: 'infprenatal',
  modoTabelasPreNatal: 'modoTabelasPreNatal',
  infimagemed: 'infimagemed',
  infformularios: 'infformularios',
  infscores: 'infscores',
  modeloscore: 'modeloscore',
  ordemTimeline: 'ordemTimeline',
  ordemProntuarios: 'ordemProntuarios',
  preenchelista: 'preenchelista',
  preencheplano: 'preencheplano',
  infoncologia: 'infoncologia',
  tabelaOncologia: 'tabelaOncologia',
  timelineOftalmo: 'timelineOftalmo',
  infpediatria: 'infpediatria',
  infpsicologia: 'infpsicologia',
  timelinePersonalizado: 'timelinePersonalizado',
  incrementapersonalizado: 'incrementapersonalizado',
  manterCID: 'manterCID',
  obrigaCID: 'obrigaCID',
  addProceds: 'addProceds',
  obrigaProced: 'obrigaProced',
  addTarefas: 'addTarefas',
  id_memed: 'id_memed',
  memedConf: 'memedConf',
  perguntasPers: 'perguntasPers',
  compartilhaProntuario: 'compartilhaProntuario',
  obsClinicasPac: 'obsClinicasPac',
  cronometro: 'cronometro',
  infpericias: 'infpericias',
  guiasConsulta: 'guiasConsulta',
  tagsAutocomplete: 'tagsAutocomplete',
  modelosolicitacaoexames: 'modelosolicitacaoexames',
  status_secundario: 'status_secundario',
  agendas_acesso: 'agendas_acesso',
  modelo_pediatria: 'modelo_pediatria',
  telemedicina: 'telemedicina',
  substituirpersonalizado: 'substituirpersonalizado',
  orcamentos_consulta: 'orcamentos_consulta',
  compartilhar_psicologia: 'compartilhar_psicologia',
  odonto_orcamentista: 'odonto_orcamentista',
  odonto_executante: 'odonto_executante'
});

exports.Prisma.FluxodecaixaScalarFieldEnum = makeEnum({
  id: 'id',
  codconta: 'codconta',
  dia: 'dia',
  entradas: 'entradas',
  saidas: 'saidas',
  saldodia: 'saldodia',
  saldoanterior: 'saldoanterior',
  saldoacumulado: 'saldoacumulado'
});

exports.Prisma.FaturamentoentradaitensScalarFieldEnum = makeEnum({
  iditem: 'iditem',
  idfatentrada: 'idfatentrada',
  descricao: 'descricao',
  codproc: 'codproc',
  codprocder: 'codprocder',
  codconvenio: 'codconvenio',
  datacad: 'datacad',
  datapago: 'datapago',
  pago: 'pago',
  modopag: 'modopag',
  valor: 'valor',
  reajuste: 'reajuste',
  tiporeajuste: 'tiporeajuste',
  qtdreajuste: 'qtdreajuste',
  valorfinal: 'valorfinal',
  usuarioRecebeu: 'usuarioRecebeu',
  codorc: 'codorc'
});

exports.Prisma.FaturamentoentradaScalarFieldEnum = makeEnum({
  idfatentrada: 'idfatentrada',
  descricao: 'descricao',
  codu: 'codu',
  codp: 'codp',
  idevento: 'idevento',
  coduni: 'coduni',
  datacad: 'datacad',
  datavenc: 'datavenc',
  parcelas: 'parcelas',
  categoria: 'categoria',
  situacao: 'situacao',
  recorrencia: 'recorrencia',
  qtdrecorrencia: 'qtdrecorrencia',
  centrocusto: 'centrocusto',
  idparcelas: 'idparcelas',
  idrecorrencia: 'idrecorrencia',
  deleted: 'deleted',
  log_edicoes: 'log_edicoes',
  finalizado: 'finalizado'
});

exports.Prisma.ConveniosScalarFieldEnum = makeEnum({
  codconvenio: 'codconvenio',
  nome: 'nome',
  dias_retorno: 'dias_retorno',
  registroans: 'registroans',
  cidade: 'cidade',
  limiteDiario: 'limiteDiario',
  convenioAtivo: 'convenioAtivo',
  quemAtende: 'quemAtende',
  configTISS: 'configTISS',
  numeracaotiss: 'numeracaotiss',
  logotipo: 'logotipo',
  tabelaprocs: 'tabelaprocs',
  codu_bloqueado: 'codu_bloqueado',
  edita_procedimento: 'edita_procedimento',
  dtcadastro: 'dtcadastro',
  flag_migracao: 'flag_migracao',
  data_migracao: 'data_migracao',
  data_cadastro: 'data_cadastro',
  data_edicao: 'data_edicao',
  codu_update: 'codu_update'
});

exports.Prisma.ProcedimentosScalarFieldEnum = makeEnum({
  codproc: 'codproc',
  nome: 'nome',
  descricao: 'descricao',
  nomecodu: 'nomecodu',
  diasuteisentrega: 'diasuteisentrega',
  tempoproc: 'tempoproc',
  codigoSUS: 'codigoSUS',
  corAgenda: 'corAgenda',
  idformulario: 'idformulario',
  enviaFormEmail: 'enviaFormEmail',
  procAtivo: 'procAtivo',
  codtab22: 'codtab22',
  quemAtende: 'quemAtende',
  podeEditar: 'podeEditar',
  retornoOnline: 'retornoOnline',
  categoria_padrao: 'categoria_padrao',
  protocolos_aps: 'protocolos_aps',
  teleatendimento: 'teleatendimento',
  dtcadastro: 'dtcadastro',
  flag_migracao: 'flag_migracao',
  data_migracao: 'data_migracao',
  data_cadastro: 'data_cadastro',
  data_edicao: 'data_edicao',
  codu_update: 'codu_update'
});

exports.Prisma.CidadeScalarFieldEnum = makeEnum({
  id: 'id',
  nome: 'nome',
  estado: 'estado'
});

exports.Prisma.EstadoScalarFieldEnum = makeEnum({
  id: 'id',
  nome: 'nome',
  uf: 'uf',
  pais: 'pais'
});

exports.Prisma.LocaisScalarFieldEnum = makeEnum({
  codloc: 'codloc',
  nome: 'nome',
  descricao: 'descricao',
  inf1: 'inf1',
  inf2: 'inf2',
  inf3: 'inf3',
  permiteSobreposicao: 'permiteSobreposicao',
  deleted: 'deleted',
  avisaSobreposicao: 'avisaSobreposicao'
});

exports.Prisma.Status_secundarioScalarFieldEnum = makeEnum({
  id: 'id',
  nome: 'nome',
  codu_created: 'codu_created',
  datetime_created: 'datetime_created',
  codu_update: 'codu_update',
  datetime_update: 'datetime_update',
  ativo: 'ativo',
  permite_atendimento: 'permite_atendimento'
});

exports.Prisma.MedicoSolicitanteScalarFieldEnum = makeEnum({
  id: 'id',
  nome: 'nome',
  email: 'email',
  telefone: 'telefone',
  numNoConselhoSol: 'numNoConselhoSol',
  conselhoSol: 'conselhoSol',
  ufConselhoSol: 'ufConselhoSol',
  cboSol: 'cboSol'
});

exports.Prisma.UsuariosUnidadeScalarFieldEnum = makeEnum({
  id: 'id',
  codu: 'codu',
  coduni: 'coduni'
});

exports.Prisma.UnidadesClinicaScalarFieldEnum = makeEnum({
  coduni: 'coduni',
  nome: 'nome',
  telefone: 'telefone',
  endereco: 'endereco',
  deleted: 'deleted',
  cnpj: 'cnpj',
  contador: 'contador'
});

exports.Prisma.FaturamentolancamentosScalarFieldEnum = makeEnum({
  codlanc: 'codlanc',
  idfat: 'idfat',
  idlink: 'idlink',
  descricao: 'descricao',
  codproc: 'codproc',
  codconvenio: 'codconvenio',
  codconta: 'codconta',
  modopag: 'modopag',
  datavenc: 'datavenc',
  datarec: 'datarec',
  efetivado: 'efetivado',
  codu_repasse: 'codu_repasse',
  codu_rec: 'codu_rec',
  valor: 'valor',
  reajuste: 'reajuste',
  tiporeajuste: 'tiporeajuste',
  qtdreajuste: 'qtdreajuste',
  valorfinal: 'valorfinal',
  tipo: 'tipo',
  codcontrato: 'codcontrato',
  parcela: 'parcela',
  data_efetivado: 'data_efetivado',
  ocorrenciaRepeticao: 'ocorrenciaRepeticao'
});

exports.Prisma.RegrasRepasseScalarFieldEnum = makeEnum({
  id: 'id',
  codu: 'codu',
  codproc: 'codproc',
  codconvenio: 'codconvenio',
  tipo: 'tipo',
  valor: 'valor'
});

exports.Prisma.FaturamentosaidaScalarFieldEnum = makeEnum({
  idfatsaida: 'idfatsaida',
  descricao: 'descricao',
  codu: 'codu',
  codp: 'codp',
  codc: 'codc',
  pagoa: 'pagoa',
  coduni: 'coduni',
  datacad: 'datacad',
  datavenc: 'datavenc',
  parcelas: 'parcelas',
  categoria: 'categoria',
  situacao: 'situacao',
  recorrencia: 'recorrencia',
  qtdrecorrencia: 'qtdrecorrencia',
  centrocusto: 'centrocusto',
  idparcelas: 'idparcelas',
  idrecorrencia: 'idrecorrencia',
  deleted: 'deleted',
  log_edicoes: 'log_edicoes',
  ocorrenciaRepeticao: 'ocorrenciaRepeticao'
});

exports.Prisma.FinconfScalarFieldEnum = makeEnum({
  codfinconf: 'codfinconf',
  nome: 'nome',
  inf1: 'inf1',
  inf2: 'inf2',
  valor: 'valor',
  tpinf: 'tpinf',
  codu: 'codu',
  datacad: 'datacad'
});

exports.Prisma.ModelosScalarFieldEnum = makeEnum({
  id: 'id',
  modelo: 'modelo',
  descricao: 'descricao',
  conteudo: 'conteudo',
  deleted: 'deleted'
});

exports.Prisma.PacsimgScalarFieldEnum = makeEnum({
  codimg: 'codimg',
  codp: 'codp',
  codu: 'codu',
  datacad: 'datacad',
  endimg: 'endimg',
  legenda: 'legenda',
  dicom: 'dicom',
  codConsulta: 'codConsulta',
  idalbum: 'idalbum',
  deleted: 'deleted',
  thumbnail: 'thumbnail',
  flag_migracao: 'flag_migracao',
  data_migracao: 'data_migracao'
});

exports.Prisma.PacsdocScalarFieldEnum = makeEnum({
  coddoc: 'coddoc',
  codp: 'codp',
  codu: 'codu',
  datacad: 'datacad',
  enddoc: 'enddoc',
  nomedoc: 'nomedoc',
  legenda: 'legenda',
  codConsulta: 'codConsulta',
  deleted: 'deleted',
  flag_migracao: 'flag_migracao',
  data_migracao: 'data_migracao'
});

exports.Prisma.Chat_telemedicinaScalarFieldEnum = makeEnum({
  id: 'id',
  hash_sala: 'hash_sala',
  tipo_mensagem: 'tipo_mensagem',
  mensagem: 'mensagem',
  sender: 'sender',
  receiver: 'receiver',
  tipo_sender: 'tipo_sender',
  data_hora: 'data_hora'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});
exports.clinica_cobrarapp = makeEnum({
  true: 'true',
  false: 'false'
});

exports.clinica_status_secundario = makeEnum({
  true: 'true',
  false: 'false'
});

exports.clinica_filtroEspecAgenda = makeEnum({
  true: 'true',
  false: 'false'
});

exports.clinica_integraSUS = makeEnum({
  true: 'true',
  false: 'false'
});

exports.clinica_usaSolicitante = makeEnum({
  true: 'true',
  false: 'false'
});

exports.clinica_usaReembolso = makeEnum({
  true: 'true',
  false: 'false'
});

exports.clinica_bloqueioProntuario = makeEnum({
  true: 'true',
  false: 'false'
});

exports.clinica_edtObsPacAgenda = makeEnum({
  true: 'true',
  false: 'false'
});

exports.clinica_alertaObsPacAgenda = makeEnum({
  true: 'true',
  false: 'false'
});

exports.clinica_precadastro = makeEnum({
  true: 'true',
  false: 'false'
});

exports.clinica_modulo_questionarios = makeEnum({
  true: 'true',
  false: 'false'
});

exports.clinica_observacao_obrigatoria_agendamento = makeEnum({
  true: 'true',
  false: 'false'
});

exports.clinica_exibe_id_sol = makeEnum({
  true: 'true',
  false: 'false'
});

exports.clinica_obriga_id_sol = makeEnum({
  true: 'true',
  false: 'false'
});

exports.clinica_filtro_grupos = makeEnum({
  true: 'true',
  false: 'false'
});

exports.clinica_modulo_oncologia = makeEnum({
  true: 'true',
  false: 'false'
});

exports.clinica_cobrar_telemedicina = makeEnum({
  true: 'true',
  false: 'false'
});

exports.clinica_controle_vacinas = makeEnum({
  true: 'true',
  false: 'false'
});

exports.clinica_aviso_inadimplencia_paciente = makeEnum({
  true: 'true',
  false: 'false'
});

exports.BoolEnum = makeEnum({
  true: 'true',
  false: 'false'
});

exports.orcamento_statusorc = makeEnum({
  elaboracao: 'elaboracao',
  aprovacao: 'aprovacao',
  revisao: 'revisao',
  parcaprovado: 'parcaprovado',
  aprovado: 'aprovado',
  recusado: 'recusado'
});

exports.orcamento_deleted = makeEnum({
  true: 'true',
  false: 'false'
});

exports.orcamentoitens_reajuste = makeEnum({
  true: 'true',
  false: 'false'
});

exports.orcamentoitens_tiporeajuste = makeEnum({
  PORCENTAGEM: 'PORCENTAGEM',
  DINHEIRO: 'DINHEIRO'
});

exports.orcamentoitens_aprovado = makeEnum({
  true: 'true',
  false: 'false'
});

exports.eventos_vinculoApp = makeEnum({
  true: 'true',
  false: 'false'
});

exports.eventos_flag_migracao = makeEnum({
  true: 'true',
  false: 'false'
});

exports.pacientes_estrangeiro = makeEnum({
  true: 'true',
  false: 'false'
});

exports.pacientes_tiposanguineo = makeEnum({
  AB_POSITVO: 'AB_POSITVO',
  AB_NEGATIVO: 'AB_NEGATIVO',
  B_POSITIVO: 'B_POSITIVO',
  B_NEGATIVO: 'B_NEGATIVO',
  A_POSITIVO: 'A_POSITIVO',
  A_NEGATIVO: 'A_NEGATIVO',
  O_POSITIVO: 'O_POSITIVO',
  O_NEGATIVO: 'O_NEGATIVO',
  NF: 'NF'
});

exports.pacientes_compartilha_dados = makeEnum({
  true: 'true',
  false: 'false'
});

exports.pacientes_flag_migracao = makeEnum({
  true: 'true',
  false: 'false'
});

exports.consulta_flag_migracao = makeEnum({
  true: 'true',
  false: 'false'
});

exports.usuarios_blockModalCadHorarios = makeEnum({
  true: 'true',
  false: 'false'
});

exports.usuarios_cobrarUsuario = makeEnum({
  true: 'true',
  false: 'false'
});

exports.usuarios_usaCertificado = makeEnum({
  true: 'true',
  false: 'false'
});

exports.usuarios_atendeOnline = makeEnum({
  true: 'true',
  false: 'false'
});

exports.usuarios_agenda_procedimentos = makeEnum({
  true: 'true',
  false: 'false'
});

exports.usuarios_perfil = makeEnum({
  Medico: 'Medico',
  Atendente: 'Atendente',
  Triagem: 'Triagem',
  Faturista: 'Faturista',
  Gerentefinanceiro: 'Gerentefinanceiro',
  Agendaprocedimentos: 'Agendaprocedimentos'
});

exports.usuarios_cooperado = makeEnum({
  true: 'true',
  false: 'false'
});

exports.usuarios_consulta_dados_res = makeEnum({
  true: 'true',
  false: 'false'
});

exports.usuarios_envia_dados_res = makeEnum({
  true: 'true',
  false: 'false'
});

exports.usuarios_tipo_certificado = makeEnum({
  soluti: 'soluti',
  eval: 'eval'
});

exports.usuarios_usuario_restrito = makeEnum({
  true: 'true',
  false: 'false'
});

exports.usuarios_auditor = makeEnum({
  true: 'true',
  false: 'false'
});

exports.unidadesClinica_deleted = makeEnum({
  true: 'true',
  false: 'false'
});

exports.faturamentolancamentos_efetivado = makeEnum({
  true: 'true',
  false: 'false'
});

exports.faturamentolancamentos_reajuste = makeEnum({
  true: 'true',
  false: 'false'
});

exports.faturamentolancamentos_tipo = makeEnum({
  receber: 'receber',
  pagar: 'pagar'
});

exports.faturamentolancamentos_parcela = makeEnum({
  true: 'true',
  false: 'false'
});

exports.regrasRepasse_tipo = makeEnum({
  PORCENTAGEM: 'PORCENTAGEM',
  DINHEIRO: 'DINHEIRO'
});

exports.pacsimg_flag_migracao = makeEnum({
  true: 'true',
  false: 'false'
});

exports.pacsdoc_flag_migracao = makeEnum({
  true: 'true',
  false: 'false'
});

exports.chat_telemedicina_tipo_mensagem = makeEnum({
  text: 'text',
  file: 'file'
});

exports.chat_telemedicina_tipo_sender = makeEnum({
  prof: 'prof',
  pac: 'pac'
});

exports.Prisma.ModelName = makeEnum({
  clinica: 'clinica',
  config_clinica: 'config_clinica',
  orcamento: 'orcamento',
  orcamentoitens: 'orcamentoitens',
  orcamentorecusas: 'orcamentorecusas',
  eventos: 'eventos',
  pacientes: 'pacientes',
  consulta: 'consulta',
  usuarios: 'usuarios',
  usuconf: 'usuconf',
  fluxodecaixa: 'fluxodecaixa',
  faturamentoentradaitens: 'faturamentoentradaitens',
  faturamentoentrada: 'faturamentoentrada',
  convenios: 'convenios',
  procedimentos: 'procedimentos',
  cidade: 'cidade',
  estado: 'estado',
  locais: 'locais',
  status_secundario: 'status_secundario',
  medicoSolicitante: 'medicoSolicitante',
  usuariosUnidade: 'usuariosUnidade',
  unidadesClinica: 'unidadesClinica',
  faturamentolancamentos: 'faturamentolancamentos',
  regrasRepasse: 'regrasRepasse',
  faturamentosaida: 'faturamentosaida',
  finconf: 'finconf',
  modelos: 'modelos',
  pacsimg: 'pacsimg',
  pacsdoc: 'pacsdoc',
  chat_telemedicina: 'chat_telemedicina'
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
