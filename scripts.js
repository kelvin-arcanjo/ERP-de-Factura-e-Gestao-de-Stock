/* ================= DADOS DE EXEMPLO (em memória) ================= */
const clientes = [
  {nome:"Empresa Kianda, Lda", nif:"5000123456", contacto:"923 456 789", limite:500000, divida:180000, estado:"Em dívida", tipo:"Empresa", retencao:false, endereco:"Rua Amílcar Cabral, Luanda", municipio:"Luanda", provincia:"Luanda", pais:"Angola", email:"geral@kianda.co.ao"},
  {nome:"Sónia Baptista", nif:"004512347LA045", contacto:"912 334 221", limite:80000, divida:0, estado:"Activo", tipo:"Pessoa Singular", retencao:false, endereco:"Bairro Maianga, Luanda", municipio:"Luanda", provincia:"Luanda", pais:"Angola", email:"sonia.baptista@mail.com"},
  {nome:"Grupo Cufeni SA", nif:"5401998877", contacto:"924 110 220", limite:1200000, divida:432000, estado:"Em dívida", tipo:"Empresa", retencao:true, endereco:"Talatona, Luanda", municipio:"Belas", provincia:"Luanda", pais:"Angola", email:"financeiro@cufeni.co.ao"},
  {nome:"Manuel dos Santos", nif:"003344556LA032", contacto:"936 771 002", limite:50000, divida:0, estado:"Activo", tipo:"Pessoa Singular", retencao:false, endereco:"Cazenga, Luanda", municipio:"Luanda", provincia:"Luanda", pais:"Angola", email:""},
  {nome:"Farmácia Boa Saúde", nif:"5109887766", contacto:"921 556 341", limite:300000, divida:0, estado:"Activo", tipo:"Empresa", retencao:true, endereco:"Viana, Luanda", municipio:"Viana", provincia:"Luanda", pais:"Angola", email:"contacto@boasaude.co.ao"},
  {nome:"Consumidor final", nif:"999999999", contacto:"—", limite:0, divida:0, estado:"Activo", tipo:"Pessoa Singular", retencao:false, endereco:"—", municipio:"—", provincia:"—", pais:"Angola", email:""},
];

const produtos = [
  {nome:"Toner HP 26A Original", cat:"Consumíveis", tipoFiscal:"Bem", preco:38500, iva:14, stock:4, min:10, armazem:"Loja"},
  {nome:"Computador Desktop i5 8GB", cat:"Informática", tipoFiscal:"Bem", preco:410000, iva:14, stock:12, min:5, armazem:"Armazém Principal"},
  {nome:"Licença Windows 11 Pro", cat:"Software", tipoFiscal:"Bem", preco:96000, iva:14, stock:30, min:8, armazem:"Escritório"},
  {nome:"Resma de Papel A4", cat:"Escritório", tipoFiscal:"Bem", preco:5200, iva:14, stock:2, min:20, armazem:"Loja"},
  {nome:"Nobreak 1200VA", cat:"Equipamentos", tipoFiscal:"Bem", preco:78000, iva:14, stock:9, min:6, armazem:"Depósito"},
  {nome:"Rato Óptico USB", cat:"Informática", tipoFiscal:"Bem", preco:6800, iva:14, stock:0, min:15, armazem:"Loja"},
  {nome:"Serviço de Suporte Mensal", cat:"Serviços", tipoFiscal:"Serviço", preco:60000, iva:14, stock:999, min:0, armazem:"—"},
];

const armazens = [
  {nome:"Armazém Principal", itens:842, valor:"Kz 28.4M", cor:"blue"},
  {nome:"Loja", itens:213, valor:"Kz 6.1M", cor:"green"},
  {nome:"Escritório", itens:64, valor:"Kz 2.9M", cor:"amber"},
  {nome:"Depósito", itens:398, valor:"Kz 11.2M", cor:"red"},
];

const movimentos = [
  {data:"07/07 09:14", user:"Ana Costa", prod:"Toner HP 26A", qtd:"-2", origem:"Loja", destino:"Venda", doc:"FT 2026/0412"},
  {data:"07/07 08:52", user:"Jorge Manuel", prod:"Computador Desktop i5", qtd:"+15", origem:"Fornecedor", destino:"Armazém Principal", doc:"GR 2026/0087"},
  {data:"06/07 17:30", user:"Sistema", prod:"Rato Óptico USB", qtd:"-1", origem:"Loja", destino:"Quebra", doc:"AJ 2026/0021"},
  {data:"06/07 15:05", user:"Ana Costa", prod:"Resma de Papel A4", qtd:"-40", origem:"Armazém Principal", destino:"Loja", doc:"TR 2026/0134"},
];

const usuarios = [
  {nome:"Ana Costa", perfil:"Administrador", acesso:"Hoje, 08:12", estado:"Activo"},
  {nome:"Jorge Manuel", perfil:"Armazém", acesso:"Hoje, 07:40", estado:"Activo"},
  {nome:"Beatriz Fortes", perfil:"Caixa", acesso:"Ontem, 18:02", estado:"Activo"},
  {nome:"Pedro Ilunga", perfil:"Vendedor", acesso:"Ontem, 12:15", estado:"Inactivo"},
];

/* --- Configuração fiscal (Angola) --- */
const regimesFiscais = ["Regime Geral","Regime Simplificado","Regime de Exclusão","Regime Transitório","Regime Especial"];
const regimeNotas = {
  "Regime Geral":"IVA normal, com direito à dedução do IVA suportado e emissão de mapas fiscais completos.",
  "Regime Simplificado":"Regras específicas de tributação com limitações ao direito à dedução do IVA.",
  "Regime de Exclusão":"Sem liquidação de IVA. Todos os documentos emitidos incluem automaticamente a menção: \"Operação enquadrada no Regime de Exclusão do IVA.\"",
  "Regime Transitório":"Regime aplicável durante o período de transição definido pela AGT, com regras próprias enquanto vigorar.",
  "Regime Especial":"Regras próprias para actividades específicas sujeitas a tratamento fiscal diferenciado.",
};
const tiposFiscaisProduto = ["Bem","Serviço","Activo","Consumo Interno","Combustível","Medicamento","Exportação"];
const CODIGO_MESTRE_DEMO = "MILLENNES-DEV-2026"; // válido apenas nesta simulação — num sistema real ficaria só no servidor

let taxasIva = [
  {taxa:0, estado:"Activa"},
  {taxa:5, estado:"Activa"},
  {taxa:7, estado:"Activa"},
  {taxa:14, estado:"Activa"},
];
const isencoesIva = [
  {nome:"Isento", codigo:"M01"},
  {nome:"Não sujeito", codigo:"M02"},
  {nome:"Taxa Zero", codigo:"M03"},
  {nome:"Exportação", codigo:"M04"},
  {nome:"Serviços Diplomáticos", codigo:"M05"},
  {nome:"Outros motivos previstos por lei", codigo:"M99"},
];
let configFiscal = {
  regime: "Regime Geral",
  retencaoActiva: true,
  retencaoTaxa: 6.5,
  layoutPapel: "A4 Vertical",
  logoVisivel: true, qrVisivel: true, assinaturaVisivel: true, rodapeVisivel: true,
  empresaNome: "Millennes Angola", empresaNif: "5417000111", moeda: "Kz",
};

/* --- Configuração completa da empresa (Geral / Contactos / Bancos / Cores / Modelos) --- */
const templatesImpressao = ["Clássico","Executivo","Moderno","Corporativo","Minimalista"];
function empresaPadrao(nome, nif, corP, corS){
  return {
    nome, nomeComercial: nome, logoUrl:"", faviconUrl:"",
    nif, registo:"", capital:0, pais:"Angola", provincia:"Luanda", municipio:"Luanda",
    endereco:"Luanda, Angola", cp:"",
    website:"www.millennes.co.ao",
    tel1:"923 000 000", tel2:"", tel3:"",
    whatsappIgual:true, whatsapp:"",
    emailGeral:"geral@millennes.co.ao", emailComercial:"", emailFinanceiro:"",
    bancos:[
      {banco:"BAI", conta:"40 1234 5678", iban:"AO06 0040 0000 4012 3456 7891 0", swift:""},
      {banco:"BFA", conta:"12 9988 1122", iban:"AO06 0006 0000 1299 8811 2200 5", swift:""},
    ],
    corPrimaria: corP, corSecundaria: corS,
    rodapeTexto:"Documento gerado em ambiente de simulação — MILLENNES ERP. Sem valor fiscal.",
    modeloImpressao:"Clássico",
  };
}
let empresas = {
  "Millennes Angola": empresaPadrao("Millennes Angola","5417000111","#2f7dfa","#ef3b52"),
  "Millennes Comércio, SA": empresaPadrao("Millennes Comércio, SA","5417000222","#26c281","#0d9488"),
  "Millennes Serviços, Lda": empresaPadrao("Millennes Serviços, Lda","5417000333","#a855f7","#f0a83a"),
};
let empresaAtiva = "Millennes Angola";
let empresaInfo = empresas[empresaAtiva];

/* --- Permissões: 12 perfis x módulos --- */
const perfis = ["Administrador","Supervisor","Gerente","Tesouraria","Caixa","Vendedor","Armazém","Contabilidade","RH","Direcção","Auditor","Suporte"];
const modulosPerm = ["Dashboard","Clientes","Faturas","Caixa","Produtos","Inventário","Financeiro","CRM","Compras","Contabilidade","Relatórios","Utilizadores"];
// nível de acesso pré-definido por perfil: 2=total 1=leitura 0=nenhum
const nivelPadrao = {
  "Administrador":()=>2,
  "Supervisor":(m)=> ["Utilizadores"].includes(m)?1:2,
  "Gerente":(m)=> ["Utilizadores","Contabilidade"].includes(m)?1:2,
  "Tesouraria":(m)=> ["Financeiro","Dashboard","Relatórios"].includes(m)?2:(["Clientes","Contabilidade"].includes(m)?1:0),
  "Caixa":(m)=> ["Caixa","Faturas","Clientes"].includes(m)?2:(["Produtos","Dashboard"].includes(m)?1:0),
  "Vendedor":(m)=> ["Faturas","Clientes","CRM"].includes(m)?2:(["Produtos","Dashboard"].includes(m)?1:0),
  "Armazém":(m)=> ["Produtos","Inventário","Compras"].includes(m)?2:(["Dashboard"].includes(m)?1:0),
  "Contabilidade":(m)=> ["Contabilidade","Financeiro","Relatórios"].includes(m)?2:(["Clientes","Faturas"].includes(m)?1:0),
  "RH":(m)=> ["Utilizadores"].includes(m)?1:0,
  "Direcção":(m)=> ["Dashboard","Relatórios"].includes(m)?2:1,
  "Auditor":(m)=> 1,
  "Suporte":(m)=> ["Utilizadores","Dashboard"].includes(m)?1:0,
};

/* --- Auditoria --- */
const auditoria = [
  {quando:"07/07/2026 09:14", user:"Ana Costa", ip:"197.149.20.4", modulo:"Clientes", acao:"Alteração de limite de crédito", antes:"Kz 300.000", depois:"Kz 500.000"},
  {quando:"07/07/2026 08:52", user:"Jorge Manuel", ip:"197.149.20.11", modulo:"Produtos", acao:"Ajuste de stock", antes:"6 un.", depois:"21 un."},
  {quando:"06/07/2026 18:03", user:"Beatriz Fortes", ip:"197.149.31.2", modulo:"Faturas", acao:"Anulação de documento", antes:"FT 2026/0398 activa", depois:"FT 2026/0398 anulada"},
  {quando:"06/07/2026 17:41", user:"Ana Costa", ip:"197.149.20.4", modulo:"Utilizadores", acao:"Alteração de perfil", antes:"Vendedor", depois:"Supervisor"},
  {quando:"06/07/2026 11:20", user:"Sistema", ip:"—", modulo:"Integração Fiscal", acao:"Geração SAF-T AO", antes:"—", depois:"Junho/2026 gerado"},
  {quando:"05/07/2026 16:08", user:"Pedro Ilunga", ip:"197.149.44.7", modulo:"Caixa", acao:"Saída de caixa (sangria)", antes:"Kz 0", depois:"Kz 12.000"},
];

/* --- Integração fiscal --- */
const fiscalItems = [
  {nome:"Facturação Electrónica (FE)", estado:"Configurado", cor:"green", desc:"Emissão de documentos comerciais em conformidade com o regime de facturação electrónica em vigor em Angola."},
  {nome:"Portal da AGT", estado:"Configurado", cor:"green", desc:"Submissão automática de facturas e SAF-T ao Portal da Administração Geral Tributária."},
  {nome:"SAF-T AO", estado:"Configurado", cor:"green", desc:"Geração mensal do ficheiro normalizado SAF-T Angola para efeitos de auditoria fiscal."},
  {nome:"QR Code Fiscal", estado:"Pendente", cor:"amber", desc:"Impressão de código QR de validação fiscal em todos os documentos comerciais emitidos."},
  {nome:"Assinatura Digital", estado:"Pendente", cor:"amber", desc:"Assinatura digital dos documentos com certificado qualificado, garantindo integridade e autenticidade."},
  {nome:"Certificado Fiscal", estado:"Expira em 12 dias", cor:"red", desc:"Certificado emitido pela AGT para autenticação do software de facturação junto às autoridades."},
];

/* --- CRM: funil de vendas --- */
const funilCrm = [
  {nome:"Novo Lead", leads:[
    {n:"Construtora Alvorada", v:"Kz 850.000"},
    {n:"Hotel Terra Nova", v:"Kz 1.200.000"},
    {n:"João Muteka", v:"Kz 45.000"},
  ]},
  {nome:"Contactado", leads:[
    {n:"Farmácia Vida Plena", v:"Kz 320.000"},
    {n:"Auto Peças Lunda", v:"Kz 210.000"},
  ]},
  {nome:"Proposta Enviada", leads:[
    {n:"Escola Nova Geração", v:"Kz 640.000"},
  ]},
  {nome:"Negociação", leads:[
    {n:"Grupo Cufeni SA", v:"Kz 1.900.000"},
    {n:"Clínica Girassol", v:"Kz 470.000"},
  ]},
  {nome:"Ganho", leads:[
    {n:"Empresa Kianda, Lda", v:"Kz 500.000"},
  ]},
  {nome:"Perdido", leads:[
    {n:"Transportes Bengo", v:"Kz 280.000"},
  ]},
];

/* --- Contabilidade: atalhos --- */
const contabItems = [
  {nome:"Plano de Contas", foot:"124 contas activas"},
  {nome:"Diário", foot:"842 lançamentos em Junho"},
  {nome:"Razão", foot:"Actualizado ao minuto"},
  {nome:"Balancete", foot:"Fecho de Junho disponível"},
  {nome:"Balanço", foot:"Exercício 2026"},
  {nome:"Demonstração de Resultados", foot:"Junho 2026"},
  {nome:"IVA", foot:"Apurado: Kz 1.378.900"},
  {nome:"Retenções na Fonte", foot:"3 guias pendentes"},
  {nome:"SAF-T", foot:"Ficheiro de Junho gerado"},
];

/* --- Workflow --- */
const workflowSteps = ["Pedido","Aprovação","Compra","Recepção","Factura","Pagamento"];

/* --- Centro de documentos --- */
const documentos = [
  {nome:"Contrato_Cufeni_2026.pdf", tipo:"Contrato", cor:"blue", assoc:"Grupo Cufeni SA", data:"02/07/2026"},
  {nome:"FT_2026_0412.pdf", tipo:"Documento fiscal", cor:"green", assoc:"Sónia Baptista", data:"07/07/2026"},
  {nome:"Assinatura_Recibo_0088.png", tipo:"Assinatura", cor:"amber", assoc:"OfficeMax Luanda", data:"28/06/2026"},
  {nome:"BI_Cliente_Kianda.jpg", tipo:"Imagem", cor:"red", assoc:"Empresa Kianda, Lda", data:"18/06/2026"},
  {nome:"Certificado_Fiscal_AGT.pdf", tipo:"Documento fiscal", cor:"green", assoc:"Millennes Angola", data:"01/01/2026"},
];

const kz = n => "Kz " + n.toLocaleString("pt-PT");


/* ================= RENDER: DASHBOARD ================= */
function renderDashboard(){
  document.getElementById("tblDividas").innerHTML = clientes.filter(c=>c.divida>0).map(c=>`
    <tr><td class="cell-main">${c.nome}</td><td class="mono">${c.nif}</td>
    <td class="mono" style="color:var(--red);font-weight:700">${kz(c.divida)}</td>
    <td><span class="tag amber">15 dias</span></td></tr>`).join("");

  const topP = [...produtos].sort((a,b)=>b.preco-a.preco).slice(0,5);
  const maxV = Math.max(...topP.map(p=>p.preco));
  document.getElementById("topProdutos").innerHTML = topP.map((p,i)=>`
    <div class="rank-row">
      <div class="rank-num">${String(i+1).padStart(2,"0")}</div>
      <div class="rank-name">${p.nome}<small>${p.cat}</small></div>
      <div style="width:90px"><div class="rank-val" style="text-align:right">${kz(p.preco)}</div>
      <div class="bar-track"><div class="bar-fill" style="width:${(p.preco/maxV*100).toFixed(0)}%"></div></div></div>
    </div>`).join("");

  document.getElementById("alertList").innerHTML = `
    <div class="alert-item"><div class="alert-dot red"></div><div class="alert-txt">Rato Óptico USB sem stock<small>Loja · reposição sugerida pela MillenBot</small></div></div>
    <div class="alert-item"><div class="alert-dot amber"></div><div class="alert-txt">Resma de Papel A4 abaixo do mínimo<small>Stock: 2 · mínimo: 20</small></div></div>
    <div class="alert-item"><div class="alert-dot red"></div><div class="alert-txt">Grupo Cufeni SA excedeu o limite de crédito<small>Dívida: Kz 432.000 · limite: Kz 1.200.000</small></div></div>
    <div class="alert-item"><div class="alert-dot amber"></div><div class="alert-txt">Caixa aberta há mais de 10 horas<small>Turno de Ana Costa · sugerir fecho</small></div></div>
  `;
}

/* ================= RENDER: CLIENTES ================= */
function renderClientes(){
  document.getElementById("tblClientes").innerHTML = clientes.map((c,i)=>`
    <tr>
      <td class="cell-main">${c.nome}${c.retencao?'<span class="tag amber" style="margin-left:6px">Retenção</span>':''}<div class="cell-sub">${c.tipo||"Empresa"} · ${c.estado==="Em dívida"?"Cliente recorrente":"Novo cliente"}</div></td>
      <td class="mono">${c.nif}</td>
      <td>${c.contacto}</td>
      <td class="mono">${kz(c.limite)}</td>
      <td class="mono" style="${c.divida>0?'color:var(--red);font-weight:700':''}">${kz(c.divida)}</td>
      <td><span class="tag ${c.estado==="Em dívida"?"red":"green"}">${c.estado}</span></td>
      <td><div class="row-actions">
        <button onclick="toast('A abrir histórico de ${c.nome}')"><svg viewBox="0 0 24 24" fill="none" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z"/></svg></button>
        <button onclick="toast('A editar ${c.nome}')"><svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 013 3L7 19l-4 1 1-4z"/></svg></button>
        <button class="danger" onclick="requestDelete('cliente',${i})"><svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2m3 0l-1 14a2 2 0 01-2 2H7a2 2 0 01-2-2L4 6"/></svg></button>
      </div></td>
    </tr>`).join("");
}

/* ================= RENDER: PRODUTOS ================= */
function renderProdutos(){
  document.getElementById("tblProdutos").innerHTML = produtos.map((p,i)=>{
    const pct = p.min>0 ? Math.min(100, (p.stock/p.min*100)) : 100;
    const cor = p.stock===0? "var(--red)" : p.stock<p.min? "var(--amber)" : "var(--green)";
    return `<tr>
      <td class="cell-main">${p.nome}<div class="cell-sub">${p.armazem} · ${p.tipoFiscal||"Bem"}</div></td>
      <td><span class="tag blue">${p.cat}</span></td>
      <td class="mono">${kz(p.preco)}</td>
      <td class="mono">${p.iva}%</td>
      <td style="width:120px">
        <div class="mono" style="font-weight:700">${p.stock===999?"—":p.stock}</div>
        ${p.stock!==999?`<div class="stock-bar"><div class="stock-fill" style="width:${pct}%;background:${cor}"></div></div>`:""}
      </td>
      <td><span class="tag ${p.stock===0?"red":p.stock<p.min?"amber":"green"}">${p.stock===0?"Sem stock":p.stock<p.min?"Stock baixo":"Disponível"}</span></td>
      <td><div class="row-actions">
        <button onclick="toast('A editar ${p.nome}')"><svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 013 3L7 19l-4 1 1-4z"/></svg></button>
        <button class="danger" onclick="requestDelete('produto',${i})"><svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2m3 0l-1 14a2 2 0 01-2 2H7a2 2 0 01-2-2L4 6"/></svg></button>
      </div></td>
    </tr>`;
  }).join("");
}

/* ================= RENDER: INVENTÁRIO ================= */
function renderInventario(){
  document.getElementById("tblInventario").innerHTML = produtos.filter(p=>p.stock!==999).map(p=>{
    const pct = p.min>0 ? Math.min(100,(p.stock/p.min*100)) : 100;
    const cor = p.stock===0? "var(--red)" : p.stock<p.min? "var(--amber)" : "var(--green)";
    return `<tr>
      <td class="cell-main">${p.nome}</td>
      <td>${p.armazem}</td>
      <td class="mono">${p.stock}</td>
      <td class="mono">${p.min}</td>
      <td style="width:160px"><div class="stock-bar"><div class="stock-fill" style="width:${pct}%;background:${cor}"></div></div></td>
    </tr>`;
  }).join("");
}

/* ================= RENDER: ARMAZÉNS ================= */
function renderArmazens(){
  document.getElementById("armazensGrid").innerHTML = armazens.map(a=>`
    <div class="card">
      <div class="kpi-icon ${a.cor}" style="margin-bottom:12px"><svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M3 21V10l9-6 9 6v11"/><path d="M9 21v-7h6v7"/></svg></div>
      <div class="kpi-label">${a.nome}</div>
      <div class="kpi-value" style="font-size:19px">${a.itens} itens</div>
      <div class="kpi-foot">Valor em stock: ${a.valor}</div>
    </div>`).join("");
}

/* ================= RENDER: MOVIMENTOS ================= */
function renderMovimentos(){
  document.getElementById("tblMovimentos").innerHTML = movimentos.map(m=>`
    <tr><td class="mono cell-sub">${m.data}</td><td class="cell-main">${m.user}</td><td>${m.prod}</td>
    <td class="mono" style="color:${m.qtd.startsWith('-')?'var(--red)':'var(--green)'};font-weight:700">${m.qtd}</td>
    <td>${m.origem}</td><td>${m.destino}</td><td class="mono">${m.doc}</td></tr>`).join("");
}

/* ================= RENDER: USUÁRIOS ================= */
function renderUsuarios(){
  document.getElementById("tblUsuarios").innerHTML = usuarios.map(u=>`
    <tr><td class="cell-main">${u.nome}</td><td><span class="tag blue">${u.perfil}</span></td><td>${u.acesso}</td>
    <td><span class="tag ${u.estado==="Activo"?"green":"red"}">${u.estado}</span></td>
    <td><div class="row-actions"><button onclick="toast('A editar permissões de ${u.nome}')"><svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 013 3L7 19l-4 1 1-4z"/></svg></button></div></td></tr>`).join("");
}

/* ================= RENDER: PERMISSÕES (matriz) ================= */
const permState = {}; // "Perfil|Modulo" -> nivel
function renderPermissoes(){
  document.getElementById("permHead").innerHTML = `<th>Perfil</th>` + modulosPerm.map(m=>`<th style="text-align:center">${m}</th>`).join("");
  document.getElementById("permBody").innerHTML = perfis.map(p=>`
    <tr><td>${p}</td>${modulosPerm.map(m=>{
      const key = p+"|"+m;
      if(!(key in permState)) permState[key] = nivelPadrao[p](m);
      return `<td style="text-align:center"><div class="perm-cell" data-lvl="${permState[key]}" data-key="${key}"><span class="dot"></span></div></td>`;
    }).join("")}</tr>`).join("");

  document.querySelectorAll(".perm-cell").forEach(cell=>{
    cell.addEventListener("click", ()=>{
      const key = cell.dataset.key;
      permState[key] = (permState[key]+1)%3;
      cell.dataset.lvl = permState[key];
    });
  });
}

/* ================= RENDER: AUDITORIA ================= */
function renderAuditoria(){
  document.getElementById("tblAuditoria").innerHTML = auditoria.map(a=>`
    <tr><td class="mono cell-sub">${a.quando}</td><td class="cell-main">${a.user}</td><td class="mono">${a.ip}</td>
    <td>${a.modulo}<div class="cell-sub">${a.acao}</div></td>
    <td><span class="diff-chip old">${a.antes}</span></td>
    <td><span class="diff-chip new">${a.depois}</span></td></tr>`).join("");
}

/* ================= RENDER: INTEGRAÇÃO FISCAL ================= */
function renderFiscal(){
  const icons = {
    green:'<path d="M20 6L9 17l-5-5"/>',
    amber:'<path d="M12 9v4M12 17h.01"/><path d="M10.3 3.9L1.8 18a1.8 1.8 0 001.6 2.7h17.2a1.8 1.8 0 001.6-2.7L13.7 3.9a1.8 1.8 0 00-3.4 0z"/>',
    red:'<path d="M12 9v13"/><path d="M12 2l0 0"/><circle cx="12" cy="12" r="10"/>'
  };
  document.getElementById("fiscalGrid").innerHTML = fiscalItems.map(f=>`
    <div class="card fiscal-card">
      <div class="fc-top">
        <div class="kpi-icon ${f.cor}"><svg viewBox="0 0 24 24" fill="none" stroke-width="2">${icons[f.cor]}</svg></div>
        <span class="tag ${f.cor}">${f.estado}</span>
      </div>
      <h4>${f.nome}</h4>
      <p>${f.desc}</p>
      <button class="btn" style="width:100%;justify-content:center" onclick="toast('A abrir configuração de ${f.nome}')">Configurar</button>
    </div>`).join("");
}

/* ================= RENDER: CRM (kanban) ================= */
function renderCrm(){
  document.getElementById("kanbanCrm").innerHTML = funilCrm.map(col=>`
    <div class="kanban-col">
      <h5>${col.nome}<em>${col.leads.length}</em></h5>
      ${col.leads.map(l=>`<div class="kanban-card" onclick="toast('A abrir oportunidade: ${l.n}')">${l.n}<small>Proposta comercial</small><div class="kv">${l.v}</div></div>`).join("")}
    </div>`).join("");
}

/* ================= RENDER: CONTABILIDADE ================= */
function renderContabilidade(){
  document.getElementById("contabGrid").innerHTML = contabItems.map(c=>`
    <div class="card" style="cursor:pointer" onclick="toast('A abrir ${c.nome}')">
      <div class="kpi-label">${c.nome}</div>
      <div class="kpi-foot" style="margin-top:8px">${c.foot}</div>
    </div>`).join("");
}

/* ================= RENDER: WORKFLOW ================= */
function renderWorkflow(){
  const ic = '<path d="M12 5v14M5 12h14"/>';
  document.getElementById("flowRow").innerHTML = workflowSteps.map((s,i)=>`
    ${i>0?'<div class="flow-arrow"></div>':''}
    <div class="flow-step"><div class="fs-ic"><svg viewBox="0 0 24 24" fill="none" stroke-width="2">${ic}</svg></div><div class="fs-label">${s}</div></div>
  `).join("");
}

/* ================= RENDER: DOCUMENTOS ================= */
function renderDocumentos(){
  const iconMap = {
    "Contrato":'<path d="M7 3h8l4 4v14H7z"/><path d="M15 3v4h4"/>',
    "Documento fiscal":'<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8h8M8 12h8"/>',
    "Assinatura":'<path d="M3 17s3-1 5-4 3 3 5 0 4-4.5 4-4.5"/>',
    "Imagem":'<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="8.5" cy="9.5" r="1.5"/><path d="M21 15l-5-5L5 20"/>',
  };
  document.getElementById("tblDocumentos").innerHTML = documentos.map(d=>`
    <tr><td><div style="display:flex;align-items:center;gap:10px">
      <div class="doc-ic" style="background:var(--${d.cor})"><svg viewBox="0 0 24 24" fill="none" stroke-width="2">${iconMap[d.tipo]||iconMap["Documento fiscal"]}</svg></div>
      <span class="cell-main">${d.nome}</span></div></td>
      <td><span class="tag ${d.cor}">${d.tipo}</span></td><td>${d.assoc}</td><td class="mono">${d.data}</td>
      <td><div class="row-actions"><button onclick="toast('A abrir ${d.nome}')"><svg viewBox="0 0 24 24" fill="none" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z"/></svg></button></div></td></tr>`).join("");
}


let invoiceLines = [
  {nome:"Toner HP 26A Original", qtd:2, preco:38500, desc:0, iva:14, tipoFiscal:"Bem"},
  {nome:"Resma de Papel A4", qtd:5, preco:5200, desc:0, iva:14, tipoFiscal:"Bem"},
];

function populateInvoiceSelectors(){
  const sel = document.getElementById("clientSelect");
  const current = sel.value;
  sel.innerHTML = clientes.map(c=>`<option>${c.nome}</option>`).join("");
  if(clientes.some(c=>c.nome===current)) sel.value = current;

  document.getElementById("isencaoDoc").innerHTML =
    `<option value="">Nenhuma</option>` + isencoesIva.map(x=>`<option value="${x.nome}">${x.nome} (${x.codigo})</option>`).join("");
}
function onClientSelectChange(){
  const nome = document.getElementById("clientSelect").value;
  const c = clientes.find(c=>c.nome===nome);
  document.getElementById("clientNif").value = c ? c.nif : "";
  renderInvoice();
}
document.getElementById("clientSelect").addEventListener("change", onClientSelectChange);
document.getElementById("isencaoDoc").addEventListener("change", renderInvoice);
document.getElementById("docType").addEventListener("change", renderInvoice);


function calcInvoiceTotals(){
  const globalDesc = +document.getElementById("descGlobal").value || 0;
  const isencaoNome = document.getElementById("isencaoDoc").value;
  const regimeExclusao = configFiscal.regime === "Regime de Exclusão";
  const ivaZerado = regimeExclusao || !!isencaoNome;

  const clienteObj = clientes.find(c=>c.nome === document.getElementById("clientSelect").value);
  const aplicaRetencao = configFiscal.retencaoActiva && clienteObj && clienteObj.retencao;

  let sub=0, ivaTotal=0, baseServicos=0;
  invoiceLines.forEach(l=>{
    const base = l.qtd*l.preco*(1-l.desc/100);
    sub += base;
    if(!ivaZerado) ivaTotal += base*(l.iva/100);
    if(aplicaRetencao && l.tipoFiscal==="Serviço") baseServicos += base;
  });
  const descValor = sub*(globalDesc/100);
  const ivaFinal = ivaTotal*(1-globalDesc/100);
  const total = (sub-descValor) + ivaFinal;
  const retencaoValor = aplicaRetencao ? baseServicos*(1-globalDesc/100)*(configFiscal.retencaoTaxa/100) : 0;
  const liquido = total - retencaoValor;

  let nota = "";
  if(regimeExclusao) nota = regimeNotas["Regime de Exclusão"];
  else if(isencaoNome){ const x = isencoesIva.find(i=>i.nome===isencaoNome); nota = `${x.nome} — Código AGT ${x.codigo}. Operação sem liquidação de IVA.`; }

  return {globalDesc, sub, descValor, ivaFinal, total, retencaoValor, liquido, aplicaRetencao, nota, ivaZerado};
}

function renderInvoice(){
  const t0 = calcInvoiceTotals();
  document.getElementById("invoiceItems").innerHTML = invoiceLines.map((l,i)=>{
    const base = l.qtd*l.preco*(1-l.desc/100);
    const ivaEfetivo = t0.ivaZerado ? 0 : l.iva;
    const total = base*(1+ivaEfetivo/100);
    const opcoesIva = taxasIva.filter(x=>x.estado==="Activa").map(x=>`<option value="${x.taxa}" ${x.taxa===l.iva?"selected":""}>${x.taxa}%</option>`).join("");
    return `<tr>
      <td class="cell-main">${l.nome}<div class="cell-sub">${l.tipoFiscal||"Bem"}</div></td>
      <td><input class="qty-input" type="number" value="${l.qtd}" min="1" onchange="invoiceLines[${i}].qtd=+this.value;renderInvoice()"></td>
      <td class="mono">${kz(l.preco)}</td>
      <td class="mono">${l.desc}%</td>
      <td><select class="qty-input" style="width:64px" ${t0.ivaZerado?"disabled":""} onchange="invoiceLines[${i}].iva=+this.value;renderInvoice()">${opcoesIva}</select></td>
      <td class="mono" style="font-weight:700">${kz(Math.round(total))}</td>
      <td><button class="row-actions" style="border:none;background:none;color:var(--text-dim)" onclick="invoiceLines.splice(${i},1);renderInvoice()">
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg></button></td>
    </tr>`;
  }).join("");

  const t = calcInvoiceTotals();
  document.getElementById("sumSub").textContent = kz(Math.round(t.sub));
  document.getElementById("sumDesc").textContent = "- "+kz(Math.round(t.descValor));
  document.getElementById("sumIva").textContent = kz(Math.round(t.ivaFinal));
  document.getElementById("sumTotal").textContent = kz(Math.round(t.total));

  const rowRet = document.getElementById("rowRetencao");
  const rowLiq = document.getElementById("rowLiquido");
  if(t.aplicaRetencao && t.retencaoValor>0){
    rowRet.style.display = "flex"; rowLiq.style.display = "flex";
    document.getElementById("sumRetencao").textContent = "- "+kz(Math.round(t.retencaoValor));
    document.getElementById("sumLiquido").textContent = kz(Math.round(t.liquido));
  } else {
    rowRet.style.display = "none"; rowLiq.style.display = "none";
  }

  const badge = document.getElementById("regimeBadge");
  if(t.nota){ badge.style.display="block"; badge.textContent = t.nota; }
  else{ badge.style.display="none"; }
}
function addInvoiceItem(){
  const rand = produtos[Math.floor(Math.random()*produtos.length)];
  invoiceLines.push({nome:rand.nome, qtd:1, preco:rand.preco, desc:0, iva:rand.iva, tipoFiscal:rand.tipoFiscal||"Bem"});
  renderInvoice();
}
document.getElementById("prodSearch").addEventListener("keydown", e=>{
  if(e.key==="Enter" && e.target.value.trim()){
    const match = produtos.find(p=>p.nome.toLowerCase().includes(e.target.value.toLowerCase()));
    if(match){ invoiceLines.push({nome:match.nome, qtd:1, preco:match.preco, desc:0, iva:match.iva, tipoFiscal:match.tipoFiscal||"Bem"}); renderInvoice(); }
    else{ toast('Nenhum produto encontrado com esse nome'); }
    e.target.value="";
  }
});
document.querySelectorAll(".pay-chip").forEach(chip=>{
  chip.addEventListener("click", ()=>{
    document.querySelectorAll(".pay-chip").forEach(c=>c.classList.remove("sel"));
    chip.classList.add("sel");
  });
});

/* ================= EMISSÃO DE DOCUMENTOS (simulação real) ================= */
const docPrefixos = {
  "Factura":"FT", "Factura-Recibo":"FR", "Recibo":"RC", "Proforma":"PF",
  "Nota de Crédito":"NC", "Nota de Débito":"ND", "Guia de Remessa":"GR",
  "Guia de Transporte":"GT", "Cotação / Orçamento":"CT"
};
const docCounters = {FT:412, FR:0, RC:0, PF:0, NC:14, ND:0, GR:87, GT:0, CT:0};
let invoiceHistory = [];

function currentDraft(){
  const tipo = document.getElementById("docType").value;
  const cliente = document.getElementById("clientSelect").value;
  const data = document.getElementById("docDate").value || "2026-07-07";
  const pagamento = document.querySelector(".pay-chip.sel")?.textContent.trim() || "Numerário";
  const t = calcInvoiceTotals();
  return {tipo, cliente, data, pagamento, itens: JSON.parse(JSON.stringify(invoiceLines)), ...t};
}

function emitirDocumento(){
  if(invoiceLines.length===0){ toast("Adicione pelo menos um item antes de emitir o documento"); return; }
  const draft = currentDraft();
  const prefixo = docPrefixos[draft.tipo] || "DOC";
  docCounters[prefixo] = (docCounters[prefixo]||0) + 1;
  const numero = `${prefixo} 2026/${String(docCounters[prefixo]).padStart(4,"0")}`;
  const registo = {numero, ...draft};
  invoiceHistory.unshift(registo);
  renderInvoiceHistory();
  toast(`${draft.tipo} ${numero} emitida com sucesso`);

  // liberta o construtor para o próximo documento de teste
  invoiceLines = [];
  document.getElementById("descGlobal").value = 0;
  renderInvoice();
}

function renderInvoiceHistory(){
  const tbody = document.getElementById("tblFaturasEmitidas");
  if(invoiceHistory.length===0){
    tbody.innerHTML = `<tr><td colspan="7" style="text-align:center;color:var(--text-faint);padding:26px">Ainda não emitiu nenhum documento nesta sessão.</td></tr>`;
    return;
  }
  tbody.innerHTML = invoiceHistory.map((inv,i)=>`
    <tr>
      <td class="cell-main mono">${inv.numero}</td>
      <td><span class="tag blue">${inv.tipo}</span></td>
      <td>${inv.cliente}</td>
      <td class="mono">${inv.data}</td>
      <td>${inv.pagamento}</td>
      <td class="mono" style="font-weight:700">${kz(Math.round(inv.total))}</td>
      <td><div class="row-actions">
        <button title="Ver detalhe" onclick="verDocumento(${i})"><svg viewBox="0 0 24 24" fill="none" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z"/></svg></button>
        <button title="Imprimir" onclick="printFromHistory(${i},'a4')"><svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M6 9V3h12v6M6 18H4a1 1 0 01-1-1v-6a1 1 0 011-1h16a1 1 0 011 1v6a1 1 0 01-1 1h-2"/><rect x="6" y="14" width="12" height="7"/></svg></button>
        <button title="Exportar PDF" onclick="exportHistoryPDF(${i})"><svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M12 3v12M7 10l5 5 5-5"/><path d="M4 21h16"/></svg></button>
        <button class="danger" title="Anular documento" onclick="requestDelete('fatura',${i})"><svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2m3 0l-1 14a2 2 0 01-2 2H7a2 2 0 01-2-2L4 6"/></svg></button>
      </div></td>
    </tr>`).join("");
}

function verDocumento(i){
  const inv = invoiceHistory[i];
  const bodyHtml = `
    <div class="field"><label>Documento</label><input value="${inv.numero} · ${inv.tipo}" readonly></div>
    <div class="fields-row">
      <div class="field"><label>Cliente</label><input value="${inv.cliente}" readonly></div>
      <div class="field"><label>Data</label><input value="${inv.data}" readonly></div>
    </div>
    <table class="item-table"><thead><tr><th>Produto</th><th>Qtd</th><th>P.Unit.</th><th>IVA</th><th>Total</th></tr></thead>
    <tbody>${inv.itens.map(l=>{
      const ivaEf = inv.ivaZerado ? 0 : l.iva;
      const total = l.qtd*l.preco*(1-l.desc/100)*(1+ivaEf/100);
      return `<tr><td>${l.nome}</td><td class="mono">${l.qtd}</td><td class="mono">${kz(l.preco)}</td><td class="mono">${ivaEf}%</td><td class="mono">${kz(Math.round(total))}</td></tr>`;
    }).join("")}</tbody></table>
    <div class="summary-row total"><span>Total</span><span class="mono">${kz(Math.round(inv.total))}</span></div>
    ${inv.aplicaRetencao && inv.retencaoValor>0 ? `
    <div class="summary-row" style="color:var(--amber)"><span>Retenção na Fonte</span><span class="mono">- ${kz(Math.round(inv.retencaoValor))}</span></div>
    <div class="summary-row" style="font-weight:700"><span>Valor líquido a receber</span><span class="mono">${kz(Math.round(inv.liquido))}</span></div>` : ""}
    ${inv.nota ? `<div class="agt-note" style="margin-top:10px">${inv.nota}</div>` : ""}
  `;
  openModal(`Detalhe do documento — ${inv.numero}`, bodyHtml, null, true);
}

/* --------- Construção do template imprimível --------- */
function layoutToPrintClass(){
  const map = {"A4 Vertical":"", "A4 Horizontal":"", "A5":"a5", "A6":"a6", "POS 58mm":"pos58", "POS 80mm":"pos80", "Carta":""};
  return map[configFiscal.layoutPapel] || "";
}
function buildPrintHTML(draft, numero){
  const e = empresaInfo;
  const isPos = configFiscal.layoutPapel.startsWith("POS");
  const itemsRows = draft.itens.map(l=>{
    const base = l.qtd*l.preco*(1-l.desc/100);
    const ivaEf = draft.ivaZerado ? 0 : l.iva;
    const total = base*(1+ivaEf/100);
    return `<tr><td>${l.nome}</td><td>${l.qtd}</td><td>${kz(l.preco)}</td><td>${l.desc}%</td><td>${ivaEf}%</td><td>${kz(Math.round(total))}</td></tr>`;
  }).join("");
  const whatsappNum = e.whatsappIgual ? e.tel1 : e.whatsapp;

  // POS 58/80: cabeçalho mínimo (logo, nome, NIF, telefone, whatsapp). A4/A5/Carta: dados completos.
  const headInfo = isPos
    ? `${configFiscal.logoVisivel && e.logoUrl ? `<img src="${e.logoUrl}" style="max-height:40px;margin-bottom:4px">` : ""}
       <strong>${e.nomeComercial}</strong><br>NIF: ${e.nif}<br>Tel: ${e.tel1}${whatsappNum?` · WhatsApp: ${whatsappNum}`:""}`
    : `${configFiscal.logoVisivel && e.logoUrl ? `<img src="${e.logoUrl}" style="max-height:52px;margin-bottom:6px">` : ""}
       <h2>${e.nomeComercial.toUpperCase()}</h2>
       <p>${e.endereco}, ${e.municipio} · NIF ${e.nif}${e.registo?` · Registo ${e.registo}`:""}<br>
       Tel: ${e.tel1}${e.tel2?` / ${e.tel2}`:""}${whatsappNum?` · WhatsApp: ${whatsappNum}`:""}<br>
       ${e.emailGeral?`${e.emailGeral} · `:""}${e.website||""}<br>
       Regime: ${configFiscal.regime}</p>`;

const bancosBlock = (!isPos && e.bancos.length && draft.pagamento === "Transferência") ? `
<div style="margin-top:18px; font-size:13px; line-height:1.5; color:#000;">
  <strong style="font-size:14px; display:block; margin-bottom:6px; color:#111;">Dados Bancários:</strong>
  ${e.bancos.map(b => `
    <div style="margin-bottom:6px;">
      <b style="color:#111;">${b.banco}</b>: 
      <span style="color:#555;">Conta №:</span> ${b.conta} 
      ${b.iban ? ` · <span style="color:#555;">IBAN:</span> ${b.iban}` : ""}
      ${b.swift ? ` · <span style="color:#555;">SWIFT</span> ${b.swift}` : ""}
    </div>
  `).join("")}
</div>` : "";

  return `
    <div class="inv-print-head">
      <div>${headInfo}</div>
      <div class="inv-print-meta"><b>${numero}</b>${draft.tipo}<br>Data: ${draft.data}</div>
    </div>
    <p style="font-size:12px"><strong>Cliente:</strong> ${draft.cliente}</p>
    <table><thead><tr><th>Produto</th><th>Qtd</th><th>P.Unit.</th><th>Desc.</th><th>IVA</th><th>Total</th></tr></thead>
    <tbody>${itemsRows}</tbody></table>
    <div class="tot-row"><span>Subtotal</span><span>${kz(Math.round(draft.sub))}</span></div>
    <div class="tot-row"><span>Desconto</span><span>- ${kz(Math.round(draft.descValor))}</span></div>
    <div class="tot-row"><span>IVA</span><span>${kz(Math.round(draft.ivaFinal))}</span></div>
    <div class="tot-row final"><span>Total a pagar</span><span>${kz(Math.round(draft.total))}</span></div>
    ${draft.aplicaRetencao && draft.retencaoValor>0 ? `
    <div class="tot-row" style="color:#b25e00"><span>Retenção na Fonte (${configFiscal.retencaoTaxa}%)</span><span>- ${kz(Math.round(draft.retencaoValor))}</span></div>
    <div class="tot-row" style="font-weight:700"><span>Valor líquido a receber</span><span>${kz(Math.round(draft.liquido))}</span></div>` : ""}
    ${draft.nota ? `<p style="font-size:11px;margin-top:10px;font-weight:700">${draft.nota}</p>` : ""}
    <p style="font-size:11px;margin-top:14px">Método de pagamento: ${draft.pagamento}</p>
    ${bancosBlock}
    ${configFiscal.qrVisivel?`<p style="font-size:10px;color:#888;margin-top:10px">[ QR Code fiscal apareceria aqui ]</p>`:""}
    ${configFiscal.assinaturaVisivel && !isPos?`<p style="font-size:10px;color:#888">[ Assinatura digital ]</p>`:""}
    ${isPos ? `<p style="font-size:10px;margin-top:10px;text-align:center">Obrigado pela preferência</p>` : ""}
    ${configFiscal.rodapeVisivel?`<p style="font-size:10px;color:#888;margin-top:${isPos?8:24}px">${e.rodapeTexto}</p>`:""}
  `;
}

function printDraft(modo){
  if(invoiceLines.length===0){ toast("Adicione itens à factura antes de imprimir"); return; }
  const draft = currentDraft();
  const area = document.getElementById("printInvoiceArea");
  area.className = "inv-print" + (modo==="talao" ? " talao" : " "+layoutToPrintClass());
  area.innerHTML = buildPrintHTML(draft, "RASCUNHO");
  window.print();
}
function printFromHistory(i, modo){
  const inv = invoiceHistory[i];
  const area = document.getElementById("printInvoiceArea");
  area.className = "inv-print" + (modo==="talao" ? " talao" : " "+layoutToPrintClass());
  area.innerHTML = buildPrintHTML(inv, inv.numero);
  window.print();
}

/* --------- Exportação real para PDF (jsPDF) --------- */
function pdfFormatFor(layout){
  const map = {
    "A4 Vertical": {format:"a4", orientation:"portrait"},
    "A4 Horizontal": {format:"a4", orientation:"landscape"},
    "A5": {format:"a5", orientation:"portrait"},
    "A6": {format:"a6", orientation:"portrait"},
    "Carta": {format:"letter", orientation:"portrait"},
    "POS 58mm": {format:[58,210], orientation:"portrait"},
    "POS 80mm": {format:[80,250], orientation:"portrait"},
  };
  return map[layout] || {format:"a4", orientation:"portrait"};
}
function pdfFromDraft(draft, numero){
  const { jsPDF } = window.jspdf;
  const e = empresaInfo;
  const isPos = configFiscal.layoutPapel.startsWith("POS");
  const isCompacto = isPos || configFiscal.layoutPapel === "A6";
  const whatsappNum = e.whatsappIgual ? e.tel1 : e.whatsapp;
  const cfg = pdfFormatFor(configFiscal.layoutPapel);
  const doc = new jsPDF({unit:"mm", format:cfg.format, orientation:cfg.orientation});
  const pageW = doc.internal.pageSize.getWidth();
  const rightX = pageW - 14;
  const padX = isPos ? 4 : 14; 
  const posRightX = pageW - 4;

  // --- . NOME DA EMPRESA ---
  doc.setFont("helvetica","bold")
  if(isCompacto){
    doc.setFontSize(11)
    doc.text(`${e.nome}`, pageW / 2, 12,{align:"center"});

  } else {
    doc.setFontSize(20)
    doc.text(`${e.nome}`,14, 18)
  }
  
  // --- . DADOS DO CABEÇALHO ---
  doc.setFont("helvetica","normal");
  if(isCompacto){
    doc.setFontSize(8);
    doc.text(`NIF: ${e.nif}`, pageW / 2, 17, { align: "center" });
    doc.text(`Tel: ${e.tel1}${whatsappNum ? ` · WA: ${whatsappNum}` : ""}`, pageW / 2, 22, { align: "center" });

   // --- BLOCO EXCLUSIVO POS: Dados do Documento empilhados abaixo (Y maiores) ---
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9);
    doc.text(numero, pageW / 2, 28, { align: "center" }); // O número (ex: RASCUNHO_Factura) ganha destaque central
    
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.text(`Tipo: ${draft.tipo}`, pageW / 2, 33, { align: "center" });
    doc.text(`Data: ${draft.data}`, pageW / 2, 38, { align: "center" });

    // Linha divisória e Cliente ajustados para o Y correto do talão
    doc.setDrawColor(200); 
    doc.line(padX, 42, posRightX, 42);
    doc.text(`Cliente: ${draft.cliente}`, padX, 47);

  } else {
    doc.setFontSize(9)
    doc.text(`${e.endereco}, ${e.municipio} · NIF ${e.nif}`, 14, 24);
    doc.text(`Tel: ${e.tel1}${e.tel2?` / ${e.tel2}`:""}${whatsappNum?` · WhatsApp: ${whatsappNum}`:""} · Regime: ${configFiscal.regime}`, 14, 29);
  }

  // --- Caso não for POS ---
  if(!isCompacto){
  doc.setFont("helvetica","bold"); doc.setFontSize(12);
  doc.text(numero, rightX, 18, {align:"right"});
  doc.setFont("helvetica","normal"); doc.setFontSize(9);
  doc.text(`${draft.tipo}`, rightX, 24, {align:"right"});
  doc.text(`Data: ${draft.data}`, rightX, 30, {align:"right"});
  doc.setDrawColor(200); doc.line(14, 34, rightX, 34);
  doc.setFontSize(10); doc.text(`Cliente: ${draft.cliente}`, 14, 42);
}


let y = isPos?55:52;
  
if(isCompacto){
  //Ajuste de Margens...
    const mX = 6
    const pW = pageW - 6

  draft.itens.forEach(l=>{
    const base = l.qtd*l.preco*(1-l.desc/100);
    const ivaEf = draft.ivaZerado ? 0 : l.iva;
    const total = base*(1+ivaEf/100);

    // Linha 1: nome do produto...
    doc.setFont("helvetica","bold")
    doc.text(String(l.nome).slice(0, 35), mX, y)
    y += 4.5;

    // Linha 2: Quantidade...
    doc.setFont("helvetica","normal")
    doc.text(`Qtd: ${l.qtd}`, mX, y)
    y += 4.5;

    // Linha 3: Preço Unitário...
    doc.setFont("helvetica","normal")
    doc.text(`P.Unit.: ${kz(l.preco)}`, mX, y)
    y += 4.5;

    // Linha 4: IVA...
    doc.text(`IVA: ${ivaEf}%`, mX, y)
    y += 4.5;

    // Linha 5: Total
    doc.text(`Total: ${kz(Math.round(total))}`, mX, y)
    y += 4.5;

    //Linha divisória de Produtos...
    doc.setDrawColor(220)
    doc.line(mX, y, pW, y)
    y += 4;
  })
} else {
  // --- EXCLUSIVO A4: Desenha o Cabeçalho de Colunas Primeiro ---
  doc.setFont("helvetica", "bold"); 
  doc.setFontSize(9);

  // Proporções calibradas com base no A4...
  const colQtd = rightX - rightX*0.459;
  const colPUnit = rightX - rightX*0.383;
  const colIva = rightX - rightX*0.230;
  const colTotal = rightX - rightX*0.102;

  doc.text("Produto", 14, y); 
  doc.text("Qtd", colQtd, y); 
  doc.text("P.Unit.", colPUnit, y);
  doc.text("IVA", colIva, y); 
  doc.text("Total", colTotal, y);
  
  doc.setFont("helvetica", "normal");
  doc.line(14, y + 2, rightX, y + 2);
  y += 8;

  // --- EXCLUSIVO A4: O ciclo forEach recuperado para renderizar a tabela ---
  draft.itens.forEach(l => {
    const base = l.qtd * l.preco * (1 - l.desc / 100);
    const ivaEf = draft.ivaZerado ? 0 : l.iva;
    const total = base * (1 + ivaEf / 100);

    doc.text(String(l.nome).slice(0, 30), 14, y);
    doc.text(String(l.qtd), colQtd, y);
    doc.text(kz(l.preco), colPUnit, y);
    doc.text(ivaEf + "%", colIva, y);
    doc.text(kz(Math.round(total)), colTotal, y);
    y += 7;

    if (y > doc.internal.pageSize.getHeight() - 40) { 
      doc.addPage(); 
      y = 20; 
    }
  });
}

// --- Totais ---
if(isCompacto){
  const mX = 6;
  const centroX = pageW / 2;
  const larguraDisponivel = pageW - 12; // Espaço útil entre as margens esquerda e direita

  // 1. Preparar os textos rotulados com as propriedades corretas do teu projeto...
  const txtSubtotal = `Subtotal: ${kz(Math.round(draft.sub))}`;
  const txtDesconto = `Desconto: - ${kz(Math.round(draft.descValor || 0))}`;
  const txtIVA = `IVA: ${kz(Math.round(draft.ivaFinal || 0))}`;
  const txtTotal = `Total a pagar: ${kz(Math.round(draft.total))}`;

  const linhasTotais = [
    {texto: txtSubtotal, bold: false},
    {texto: txtDesconto, bold: false},
    {texto: txtIVA, bold: false},
    {texto: "---DIVIDER---", bold: false},
    {texto: txtTotal, bold: true}
  ];

  doc.setFontSize(9);

  linhasTotais.forEach(item => {
    if (item.texto === "---DIVIDER---") {
      y += 2;
      doc.setDrawColor(200);
      doc.line(mX, y, pageW - mX, y);
      y += 4;
      return;
    } 

    doc.setFont("helvetica", item.bold ? "bold" : "normal");
    // Sempre centralizado no POS...
    doc.text(item.texto, centroX, y, {align: "center"});
    y += 5;
  });

  y += 2;
  
  // --- Método de Pagamento no POS ---
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.text(`Pagamento: ${draft.pagamento}`, centroX, y, {align: "center"});
  y += 6;
  
} else {
  y+=4; doc.line(rightX-76,y,rightX,y); y+=8;
  doc.text("Subtotal:",rightX-76,y); doc.text(kz(Math.round(draft.sub)),rightX-20,y); y+=7;
  doc.text("Desconto:",rightX-76,y); doc.text("- "+kz(Math.round(draft.descValor)),rightX-20,y); y+=7;
  doc.text("IVA:",rightX-76,y); doc.text(kz(Math.round(draft.ivaFinal)),rightX-20,y); y+=9;
  doc.setFont("helvetica","bold"); doc.setFontSize(11);
  doc.text("Total a pagar:",rightX-76,y); doc.text(kz(Math.round(draft.total)),rightX-20,y); y+=9;
  if(draft.aplicaRetencao && draft.retencaoValor>0){
    doc.setFont("helvetica","normal"); doc.setFontSize(9);
    doc.text(`Retenção (${configFiscal.retencaoTaxa}%):`,rightX-76,y); doc.text("- "+kz(Math.round(draft.retencaoValor)),rightX-20,y); y+=7;
    doc.setFont("helvetica","bold");
    doc.text("Líquido a receber:",rightX-76,y); doc.text(kz(Math.round(draft.liquido)),rightX-20,y); y+=9;
  }
  doc.setFont("helvetica","normal"); doc.setFontSize(9);
  doc.text(`Método de pagamento: ${draft.pagamento}`,14,y); y+=8;
  if(draft.nota){ doc.setFont("helvetica","bold"); doc.setFontSize(8); doc.text(draft.nota,14,y,{maxWidth:pageW-28}); y+=10; }
  if(!isPos && e.bancos.length && draft.pagamento === "Transferência"){
    doc.setFont("helvetica","bold"); doc.setFontSize(8.5); doc.text("Dados bancários:",14,y); y+=5;
    doc.setFont("helvetica","normal"); doc.setFontSize(7.5);
    e.bancos.forEach(b=>{
      let currentX = 14;

      doc.setFont("helvetica","bold");
      let txtBanco = `${b.banco}: `
      doc.text(txtBanco,currentX,y);

      currentX += doc.getTextWidth(txtBanco);

      doc.setFont("helvetica","normal");
      doc.text(`Conta Nº: ${b.conta}${b.iban?` · IBAN: ${b.iban}`:""}`, currentX, y, {maxWidth: pageW - 28});

      y += 5;
    });
    y+=4;
  }
}

// --- Fechamento do Documento (Fora do if/else de Totais) ---
if(isPos){
  doc.setFont("helvetica","normal"); doc.setFontSize(8);
  doc.text("Obrigado pela preferência",pageW/2,y,{align:"center"}); y+=6;
}
if(configFiscal.rodapeVisivel){
  doc.setFont("helvetica","normal"); doc.setFontSize(7.5); doc.setTextColor(140);

  // Garante margem adequada para o rodapé dependendo do formato...
  doc.text(e.rodapeTexto, isPos ? 6 : 14, y, {maxWidth: pageW - (isPos ? 12 : 28)});
}

doc.save(`${numero.replace(/[^a-zA-Z0-9]/g,"_")}.pdf`);
}

function exportDraftPDF(){
  if(invoiceLines.length===0){ toast("Adicione itens à factura antes de exportar"); return; }
  const draft = currentDraft();
  pdfFromDraft(draft, "RASCUNHO_"+draft.tipo.replace(/\s/g,"_"));
  toast("PDF gerado e transferido");
}
function exportHistoryPDF(i){
  const inv = invoiceHistory[i];
  pdfFromDraft(inv, inv.numero);
  toast(`PDF de ${inv.numero} gerado e transferido`);
}

/* ================= MODAL GENÉRICO ================= */
function openModal(title, bodyHtml, onSave, hideSave){
  document.getElementById("modalTitle").textContent = title;
  document.getElementById("modalBody").innerHTML = bodyHtml;
  document.getElementById("modalOverlay").classList.add("open");
  const saveBtn = document.getElementById("modalSave");
  saveBtn.style.display = hideSave ? "none" : "inline-flex";
  saveBtn.onclick = ()=>{ if(onSave) onSave(); };
}
function closeModal(){ document.getElementById("modalOverlay").classList.remove("open"); }
document.getElementById("modalClose").addEventListener("click", closeModal);
document.getElementById("modalCancel").addEventListener("click", closeModal);
document.getElementById("modalOverlay").addEventListener("click", e=>{ if(e.target.id==="modalOverlay") closeModal(); });

/* --------- Novo Cliente --------- */
function openClientModal(){
  const body = `
    <div class="field"><label>Nome do cliente</label><input id="m_nome" placeholder="Ex: Empresa Kianda, Lda"></div>
    <button type="button" class="btn" style="margin:-6px 0 12px" onclick="document.getElementById('m_nome').value='Consumidor final';document.getElementById('m_nif').value='999999999';">Preencher como Consumidor Final</button>
    <div class="fields-row">
      <div class="field"><label>NIF</label><input id="m_nif" placeholder="5000000000 ou 999999999"></div>
      <div class="field"><label>Contacto / Telefone</label><input id="m_contacto" placeholder="923 000 000"></div>
    </div>
    <div class="fields-row">
      <div class="field"><label>Tipo</label><select id="m_tipo"><option>Empresa</option><option>Pessoa Singular</option></select></div>
      <div class="field"><label>E-mail</label><input id="m_email" placeholder="cliente@email.com"></div>
    </div>
    <div class="field"><label>Endereço</label><input id="m_endereco" placeholder="Rua, bairro..."></div>
    <div class="fields-row">
      <div class="field"><label>Município</label><input id="m_municipio" placeholder="Luanda"></div>
      <div class="field"><label>Província</label><input id="m_provincia" placeholder="Luanda"></div>
    </div>
    <div class="fields-row">
      <div class="field"><label>País</label><input id="m_pais" value="Angola"></div>
      <div class="field"><label>Limite de crédito (Kz)</label><input id="m_limite" type="number" value="100000"></div>
    </div>
    <div class="cfg-row" style="padding-top:4px">
      <div><div class="cfg-label">Sujeito a Retenção na Fonte</div><div class="cfg-sub">Aplica ${configFiscal.retencaoTaxa}% em artigos do tipo "Serviço"</div></div>
      <div class="toggle-sw" id="m_retencao"></div>
    </div>
  `;
  openModal("Novo Cliente", body, ()=>{
    const nome = document.getElementById("m_nome").value.trim();
    if(!nome){ toast("Indique o nome do cliente"); return; }
    clientes.push({
      nome,
      nif: document.getElementById("m_nif").value.trim() || "—",
      contacto: document.getElementById("m_contacto").value.trim() || "—",
      limite: +document.getElementById("m_limite").value || 0,
      divida: 0, estado:"Activo",
      tipo: document.getElementById("m_tipo").value,
      email: document.getElementById("m_email").value.trim(),
      endereco: document.getElementById("m_endereco").value.trim() || "—",
      municipio: document.getElementById("m_municipio").value.trim() || "—",
      provincia: document.getElementById("m_provincia").value.trim() || "—",
      pais: document.getElementById("m_pais").value.trim() || "Angola",
      retencao: document.getElementById("m_retencao").classList.contains("on"),
    });
    renderClientes();
    populateInvoiceSelectors();
    document.getElementById("clientSelect").value = nome;
    onClientSelectChange();
    closeModal();
    toast(`Cliente "${nome}" adicionado com sucesso`);
  });
  document.getElementById("m_retencao").addEventListener("click", function(){ this.classList.toggle("on"); });
}

/* --------- Novo Produto --------- */
function openProductModal(){
  const body = `
    <div class="field"><label>Nome do produto</label><input id="m_pnome" placeholder="Ex: Impressora Laser M15"></div>
    <div class="fields-row">
      <div class="field"><label>Categoria</label><select id="m_pcat"><option>Informática</option><option>Escritório</option><option>Software</option><option>Serviços</option><option>Consumíveis</option><option>Equipamentos</option></select></div>
      <div class="field"><label>Tipo fiscal</label><select id="m_ptipo">${tiposFiscaisProduto.map(t=>`<option>${t}</option>`).join("")}</select></div>
    </div>
    <div class="field"><label>Armazém</label><select id="m_parm"><option>Armazém Principal</option><option>Loja</option><option>Escritório</option><option>Depósito</option></select></div>
    <div class="fields-row">
      <div class="field"><label>Preço de venda (Kz)</label><input id="m_ppreco" type="number" value="10000"></div>
      <div class="field"><label>IVA (%)</label><select id="m_piva">${taxasIva.filter(t=>t.estado==="Activa").map(t=>`<option ${t.taxa===14?"selected":""}>${t.taxa}</option>`).join("")}</select></div>
    </div>
    <div class="fields-row">
      <div class="field"><label>Stock inicial</label><input id="m_pstock" type="number" value="10"></div>
      <div class="field"><label>Stock mínimo</label><input id="m_pmin" type="number" value="5"></div>
    </div>
  `;
  openModal("Novo Produto", body, ()=>{
    const nome = document.getElementById("m_pnome").value.trim();
    if(!nome){ toast("Indique o nome do produto"); return; }
    produtos.push({
      nome,
      cat: document.getElementById("m_pcat").value,
      tipoFiscal: document.getElementById("m_ptipo").value,
      preco: +document.getElementById("m_ppreco").value || 0,
      iva: +document.getElementById("m_piva").value || 0,
      stock: +document.getElementById("m_pstock").value || 0,
      min: +document.getElementById("m_pmin").value || 0,
      armazem: document.getElementById("m_parm").value,
    });
    renderProdutos(); renderInventario();
    closeModal();
    toast(`Produto "${nome}" adicionado com sucesso`);
  });
}

/* --------- Novo Funcionário / Utilizador --------- */
function openUserModal(){
  const body = `
    <div class="field"><label>Nome completo</label><input id="m_unome" placeholder="Ex: Carlos Neto"></div>
    <div class="fields-row">
      <div class="field"><label>Perfil de acesso</label><select id="m_uperfil">${perfis.map(p=>`<option>${p}</option>`).join("")}</select></div>
      <div class="field"><label>Estado</label><select id="m_uestado"><option>Activo</option><option>Inactivo</option></select></div>
    </div>
  `;
  openModal("Novo Funcionário", body, ()=>{
    const nome = document.getElementById("m_unome").value.trim();
    if(!nome){ toast("Indique o nome do funcionário"); return; }
    usuarios.push({
      nome,
      perfil: document.getElementById("m_uperfil").value,
      acesso: "Ainda não acedeu",
      estado: document.getElementById("m_uestado").value,
    });
    renderUsuarios();
    closeModal();
    toast(`Funcionário "${nome}" adicionado com o perfil ${document.getElementById("m_uperfil")?.value || ""}`);
  });
}

/* ================= CONFIGURAÇÃO DA EMPRESA ================= */
document.querySelectorAll("#view-empresa .tab-btn").forEach(btn=>{
  btn.addEventListener("click", ()=>{
    document.querySelectorAll("#view-empresa .tab-btn").forEach(b=>b.classList.remove("active"));
    document.querySelectorAll("#view-empresa .tab-panel").forEach(p=>p.classList.remove("active"));
    btn.classList.add("active");
    document.getElementById("tab-"+btn.dataset.tab).classList.add("active");
  });
});

function renderEmpresaPage(){
  const e = empresaInfo;
  document.getElementById("empresaAtivaLabel").textContent = "A editar: " + empresaAtiva;

  // Geral
  document.getElementById("e_logoUrl").value = e.logoUrl;
  document.getElementById("e_faviconUrl").value = e.faviconUrl;
  document.getElementById("e_nome").value = e.nome;
  document.getElementById("e_nomeComercial").value = e.nomeComercial;
  document.getElementById("e_nif").value = e.nif;
  document.getElementById("e_registo").value = e.registo;
  document.getElementById("e_capital").value = e.capital;
  document.getElementById("e_regime").innerHTML = regimesFiscais.map(r=>`<option ${r===configFiscal.regime?"selected":""}>${r}</option>`).join("");
  document.getElementById("e_pais").value = e.pais;
  document.getElementById("e_provincia").value = e.provincia;
  document.getElementById("e_municipio").value = e.municipio;
  document.getElementById("e_cp").value = e.cp;
  document.getElementById("e_endereco").value = e.endereco;
  document.getElementById("e_website").value = e.website;
  const logoDrop = document.getElementById("logoDrop");
  logoDrop.innerHTML = e.logoUrl ? `<img src="${e.logoUrl}" onerror="this.parentNode.innerHTML='⚠️ Não foi possível carregar esta imagem'">` : `<span>🖼️ Clique para carregar o logótipo</span>`;

  // Contactos
  document.getElementById("e_tel1").value = e.tel1;
  document.getElementById("e_tel2").value = e.tel2;
  document.getElementById("e_tel3").value = e.tel3;
  document.getElementById("e_whatsappIgual").classList.toggle("on", e.whatsappIgual);
  document.getElementById("wrapWhatsappCustom").style.display = e.whatsappIgual ? "none" : "block";
  document.getElementById("e_whatsapp").value = e.whatsapp;
  document.getElementById("e_emailGeral").value = e.emailGeral;
  document.getElementById("e_emailComercial").value = e.emailComercial;
  document.getElementById("e_emailFinanceiro").value = e.emailFinanceiro;

  // Bancos
  renderBankRows();

  // Cores
  document.getElementById("e_corPrimaria").value = e.corPrimaria;
  document.getElementById("e_corSecundaria").value = e.corSecundaria;
  document.getElementById("e_corPrimariaHex").textContent = e.corPrimaria;
  document.getElementById("e_corSecundariaHex").textContent = e.corSecundaria;
  document.getElementById("e_rodapeTexto").value = e.rodapeTexto;

  // Modelos
  document.getElementById("templateGrid").innerHTML = templatesImpressao.map(t=>`
    <div class="template-card ${t===e.modeloImpressao?"sel":""}" data-tpl="${t}">
      <div class="template-swatch"></div>${t}
    </div>`).join("");
  document.querySelectorAll(".template-card").forEach(card=>{
    card.addEventListener("click", ()=>{
      empresaInfo.modeloImpressao = card.dataset.tpl;
      document.querySelectorAll(".template-card").forEach(c=>c.classList.remove("sel"));
      card.classList.add("sel");
      toast(`Modelo de impressão "${card.dataset.tpl}" seleccionado`);
    });
  });
}

document.getElementById("e_whatsappIgual").addEventListener("click", function(){
  empresaInfo.whatsappIgual = !empresaInfo.whatsappIgual;
  this.classList.toggle("on", empresaInfo.whatsappIgual);
  document.getElementById("wrapWhatsappCustom").style.display = empresaInfo.whatsappIgual ? "none" : "block";
});

function saveEmpresaGeral(){
  const g = id => document.getElementById(id).value.trim();
  Object.assign(empresaInfo, {
    logoUrl: g("e_logoUrl"), faviconUrl: g("e_faviconUrl"),
    nome: g("e_nome") || empresaInfo.nome, nomeComercial: g("e_nomeComercial") || empresaInfo.nomeComercial,
    nif: g("e_nif"), registo: g("e_registo"), capital: +document.getElementById("e_capital").value || 0,
    pais: g("e_pais"), provincia: g("e_provincia"), municipio: g("e_municipio"), cp: g("e_cp"),
    endereco: g("e_endereco"), website: g("e_website"),
  });
  configFiscal.regime = document.getElementById("e_regime").value;
  configFiscal.empresaNome = empresaInfo.nome;
  configFiscal.empresaNif = empresaInfo.nif;
  empresas[empresaAtiva] = empresaInfo;
  renderConfiguracao(); renderInvoice(); renderEmpresaPage();
  toast("Dados gerais da empresa guardados");
}
function saveEmpresaContactos(){
  const g = id => document.getElementById(id).value.trim();
  Object.assign(empresaInfo, {
    tel1:g("e_tel1"), tel2:g("e_tel2"), tel3:g("e_tel3"),
    whatsapp:g("e_whatsapp"), emailGeral:g("e_emailGeral"), emailComercial:g("e_emailComercial"), emailFinanceiro:g("e_emailFinanceiro"),
  });
  empresas[empresaAtiva] = empresaInfo;
  toast("Contactos da empresa guardados");
}
function saveEmpresaRodape(){
  empresaInfo.rodapeTexto = document.getElementById("e_rodapeTexto").value.trim() || empresaInfo.rodapeTexto;
  empresas[empresaAtiva] = empresaInfo;
  toast("Rodapé personalizado guardado");
}
function applyEmpresaCores(){
  empresaInfo.corPrimaria = document.getElementById("e_corPrimaria").value;
  empresaInfo.corSecundaria = document.getElementById("e_corSecundaria").value;
  document.getElementById("e_corPrimariaHex").textContent = empresaInfo.corPrimaria;
  document.getElementById("e_corSecundariaHex").textContent = empresaInfo.corSecundaria;
  const root = document.documentElement.style;
  root.setProperty("--blue", empresaInfo.corPrimaria);
  root.setProperty("--blue-2", empresaInfo.corPrimaria);
  root.setProperty("--blue-glow", empresaInfo.corPrimaria+"55");
  root.setProperty("--red", empresaInfo.corSecundaria);
  root.setProperty("--red-glow", empresaInfo.corSecundaria+"55");
  empresas[empresaAtiva] = empresaInfo;
  toast("Cores da empresa aplicadas a todo o ERP");
}

/* --------- Contas bancárias ilimitadas --------- */
function renderBankRows(){
  document.getElementById("bancosList").innerHTML = empresaInfo.bancos.map((b,i)=>`
    <div class="bank-row">
      <input placeholder="Banco" value="${b.banco}" oninput="empresaInfo.bancos[${i}].banco=this.value">
      <input placeholder="Nº de Conta" value="${b.conta}" oninput="empresaInfo.bancos[${i}].conta=this.value">
      <input placeholder="IBAN" value="${b.iban}" oninput="empresaInfo.bancos[${i}].iban=this.value">
      <input placeholder="SWIFT/BIC (opcional)" value="${b.swift}" oninput="empresaInfo.bancos[${i}].swift=this.value">
      <button onclick="removeBankRow(${i})"><svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg></button>
    </div>`).join("") || `<p style="font-size:12px;color:var(--text-faint)">Nenhuma conta bancária adicionada.</p>`;
}
function addBankRow(){
  empresaInfo.bancos.push({banco:"", conta:"", iban:"", swift:""});
  renderBankRows();
}
function removeBankRow(i){
  empresaInfo.bancos.splice(i,1);
  empresas[empresaAtiva] = empresaInfo;
  renderBankRows();
  toast("Conta bancária removida");
}

/* --------- Multiempresa: trocar empresa activa --------- */
function switchEmpresa(nome){
  empresas[empresaAtiva] = empresaInfo; // guarda estado da empresa anterior
  empresaAtiva = nome;
  if(!empresas[nome]) empresas[nome] = empresaPadrao(nome, "", "#2f7dfa", "#ef3b52");
  empresaInfo = empresas[nome];
  configFiscal.empresaNome = empresaInfo.nome;
  configFiscal.empresaNif = empresaInfo.nif;
  document.documentElement.style.setProperty("--blue", empresaInfo.corPrimaria);
  document.documentElement.style.setProperty("--blue-2", empresaInfo.corPrimaria);
  document.documentElement.style.setProperty("--red", empresaInfo.corSecundaria);
  renderEmpresaPage();
  renderConfiguracao();
  renderInvoice();
}

/* ================= CONFIGURAÇÃO FISCAL ================= */
function renderConfiguracao(){
  const regSel = document.getElementById("cfgRegime");
  regSel.innerHTML = regimesFiscais.map(r=>`<option ${r===configFiscal.regime?"selected":""}>${r}</option>`).join("");
  document.getElementById("regimeNote").textContent = regimeNotas[configFiscal.regime];

  document.getElementById("toggleRetencao").classList.toggle("on", configFiscal.retencaoActiva);
  document.getElementById("cfgTaxaRetencao").value = configFiscal.retencaoTaxa;

  document.getElementById("taxasIvaList").innerHTML = taxasIva.map((t,i)=>
    `<span class="rate-chip ${t.estado==="Activa"?"":"off"}" data-i="${i}">${t.taxa}% <span class="tag ${t.estado==="Activa"?"green":"red"}">${t.estado}</span></span>`
  ).join("");
  document.querySelectorAll(".rate-chip").forEach(chip=>{
    chip.addEventListener("click", ()=>{
      const i = +chip.dataset.i;
      taxasIva[i].estado = taxasIva[i].estado==="Activa" ? "Inactiva" : "Activa";
      renderConfiguracao();
      renderInvoice();
    });
  });

  document.getElementById("isencoesTbl").innerHTML = isencoesIva.map(x=>`<tr><td>${x.nome}</td><td class="mono">${x.codigo}</td></tr>`).join("");

  const cfgLayoutSel = document.getElementById("cfgLayout");
  cfgLayoutSel.value = configFiscal.layoutPapel;
  document.querySelectorAll("[data-cfg]").forEach(sw=>{
    sw.classList.toggle("on", configFiscal[sw.dataset.cfg]);
  });
}
document.getElementById("cfgRegime").addEventListener("change", e=>{
  configFiscal.regime = e.target.value;
  document.getElementById("regimeNote").textContent = regimeNotas[configFiscal.regime];
  renderInvoice();
  toast(`Regime fiscal alterado para ${configFiscal.regime}`);
});
document.getElementById("toggleRetencao").addEventListener("click", ()=>{
  configFiscal.retencaoActiva = !configFiscal.retencaoActiva;
  renderConfiguracao(); renderInvoice();
});
document.getElementById("cfgTaxaRetencao").addEventListener("input", e=>{
  configFiscal.retencaoTaxa = +e.target.value || 0;
  renderInvoice();
});
document.getElementById("cfgLayout").addEventListener("change", e=>{
  configFiscal.layoutPapel = e.target.value;
  toast(`Layout de impressão predefinido: ${configFiscal.layoutPapel}`);
});
document.querySelectorAll("[data-cfg]").forEach(sw=>{
  sw.addEventListener("click", ()=>{
    configFiscal[sw.dataset.cfg] = !configFiscal[sw.dataset.cfg];
    sw.classList.toggle("on", configFiscal[sw.dataset.cfg]);
  });
});
function openAddTaxaModal(){
  const body = `<div class="field"><label>Nova taxa de IVA (%)</label><input id="m_taxa" type="number" step="0.1" value="10"></div>`;
  openModal("Adicionar Taxa de IVA", body, ()=>{
    const v = +document.getElementById("m_taxa").value;
    if(isNaN(v)){ toast("Indique um valor válido"); return; }
    taxasIva.push({taxa:v, estado:"Activa"});
    renderConfiguracao(); renderInvoice();
    closeModal();
    toast(`Taxa de ${v}% adicionada`);
  });
}

/* ================= ELIMINAÇÃO SEGURA (CÓDIGO MESTRE) ================= */
function nowStamp(){
  const d = new Date();
  return d.toLocaleDateString("pt-PT")+" "+d.toLocaleTimeString("pt-PT",{hour:"2-digit",minute:"2-digit"});
}
function requestDelete(tipo, idx){
  const nomes = {cliente:"cliente", produto:"produto", fatura:"documento"};
  const body = `
    <div class="master-warn" style="margin-bottom:14px">Esta ação elimina permanentemente o registo e fica registada em auditoria. Introduza o Código Mestre Millennes Developer para confirmar.</div>
    <div class="field"><label>Código Mestre</label><input id="m_codigo" type="password" placeholder="Código Mestre Millennes Developer"></div>
    <div class="field"><label>Motivo da eliminação</label><input id="m_motivo" placeholder="Ex: registo duplicado, erro de digitação..."></div>
  `;
  openModal(`Eliminar ${nomes[tipo]}`, body, ()=>{
    const codigo = document.getElementById("m_codigo").value.trim();
    const motivo = document.getElementById("m_motivo").value.trim() || "Não especificado";
    const ip = "197.149."+Math.floor(Math.random()*250)+"."+Math.floor(Math.random()*250);
    if(codigo !== CODIGO_MESTRE_DEMO){
      auditoria.unshift({quando:nowStamp(), user:"Desconhecido", ip, modulo: nomes[tipo], acao:"Tentativa de eliminação falhada (código inválido)", antes:"—", depois:"—"});
      renderAuditoria();
      toast("Código Mestre inválido — eliminação bloqueada e registada em auditoria");
      return;
    }
    let label = "";
    if(tipo==="cliente"){ label = clientes[idx].nome; clientes.splice(idx,1); renderClientes(); }
    if(tipo==="produto"){ label = produtos[idx].nome; produtos.splice(idx,1); renderProdutos(); renderInventario(); }
    if(tipo==="fatura"){ label = invoiceHistory[idx].numero; invoiceHistory.splice(idx,1); renderInvoiceHistory(); }
    auditoria.unshift({quando:nowStamp(), user:"Millennes Developer", ip, modulo:nomes[tipo], acao:`Eliminação de registo — motivo: ${motivo}`, antes:label, depois:"Eliminado"});
    renderAuditoria();
    closeModal();
    toast(`${nomes[tipo]} "${label}" eliminado com sucesso`);
  });
}

/* ================= ASSISTENTE DE CONFIGURAÇÃO INICIAL (WIZARD) ================= */
let wizardStep = 0;
const wizardSteps = [
  {label:"Empresa", render:()=>`<div class="field"><label>Nome da empresa</label><input id="w_empresa" value="${configFiscal.empresaNome}"></div>`},
  {label:"Logótipo", render:()=>`<div class="field"><label>URL do logótipo (opcional)</label><input id="w_logo" value="${empresaInfo.logoUrl}" placeholder="https://..."></div><p style="font-size:11.5px;color:var(--text-faint)">Pode carregar/alterar o logótipo mais tarde em Configuração da Empresa → Geral.</p>`},
  {label:"NIF", render:()=>`<div class="field"><label>NIF da empresa</label><input id="w_nif" value="${configFiscal.empresaNif}"></div>`},
  {label:"Regime Fiscal", render:()=>`<div class="field"><label>Regime fiscal</label><select id="w_regime">${regimesFiscais.map(r=>`<option ${r===configFiscal.regime?"selected":""}>${r}</option>`).join("")}</select></div><div class="agt-note">${regimeNotas[configFiscal.regime]}</div>`},
  {label:"IVA", render:()=>`<p style="font-size:12.5px;color:var(--text-dim);margin-bottom:8px">Taxas de IVA activas no sistema:</p><div>${taxasIva.map(t=>`<span class="tag ${t.estado==='Activa'?'green':'red'}" style="margin:2px">${t.taxa}%</span>`).join("")}</div><p style="font-size:11.5px;color:var(--text-faint);margin-top:10px">Pode gerir as taxas em Configuração Fiscal.</p>`},
  {label:"Contactos", render:()=>`
    <div class="fields-row"><div class="field"><label>Telefone 1</label><input id="w_tel1" value="${empresaInfo.tel1}"></div><div class="field"><label>Telefone 2</label><input id="w_tel2" value="${empresaInfo.tel2}"></div></div>
    <div class="field"><label>E-mail geral</label><input id="w_emailGeral" value="${empresaInfo.emailGeral}"></div>`},
  {label:"E-mails", render:()=>`
    <div class="fields-row"><div class="field"><label>E-mail comercial</label><input id="w_emailComercial" value="${empresaInfo.emailComercial}"></div><div class="field"><label>E-mail financeiro</label><input id="w_emailFinanceiro" value="${empresaInfo.emailFinanceiro}"></div></div>`},
  {label:"WhatsApp", render:()=>`
    <div class="cfg-row"><div><div class="cfg-label">WhatsApp igual ao Telefone 1</div></div><div class="toggle-sw ${empresaInfo.whatsappIgual?"on":""}" id="w_whatsappIgual"></div></div>
    <div class="field" style="margin-top:10px"><label>Número de WhatsApp (se diferente)</label><input id="w_whatsapp" value="${empresaInfo.whatsapp}"></div>`},
  {label:"Retenção", render:()=>`
    <div class="cfg-row"><div><div class="cfg-label">Activar retenção na fonte</div></div><div class="toggle-sw ${configFiscal.retencaoActiva?"on":""}" id="w_retToggle"></div></div>
    <div class="field" style="margin-top:10px"><label>Taxa (%)</label><input id="w_retTaxa" type="number" step="0.1" value="${configFiscal.retencaoTaxa}"></div>`},
  {label:"Bancos", render:()=>`<p style="font-size:12.5px;color:var(--text-dim);margin-bottom:8px">Contas bancárias já registadas:</p>${empresaInfo.bancos.map(b=>`<div class="cfg-row"><div class="cfg-label">${b.banco||"(sem nome)"} · ${b.conta||"—"}</div></div>`).join("") || "<p style='font-size:12px;color:var(--text-faint)'>Nenhuma conta registada.</p>"}<p style="font-size:11.5px;color:var(--text-faint);margin-top:10px">Adicione ou remova contas em Configuração da Empresa → Bancos (sem limite de contas).</p>`},
  {label:"Moeda", render:()=>`<div class="field"><label>Moeda predefinida</label><select id="w_moeda"><option>Kz</option><option>US$</option><option>€</option><option>R$</option></select></div>`},
  {label:"Série das Facturas", render:()=>`<p style="font-size:12.5px;color:var(--text-dim);margin-bottom:8px">Prefixos de série de documentos activos:</p><div style="display:flex;flex-wrap:wrap;gap:8px">${Object.entries(docPrefixos).map(([n,p])=>`<span class="tag blue">${p} · ${n}</span>`).join("")}</div>`},
  {label:"Armazéns", render:()=>`<p style="font-size:12.5px;color:var(--text-dim);margin-bottom:8px">Armazéns já configurados no sistema:</p>${armazens.map(a=>`<div class="cfg-row"><div class="cfg-label">${a.nome}</div><span class="tag blue">${a.itens} itens</span></div>`).join("")}`},
  {label:"Caixa", render:()=>`<p style="font-size:12.5px;color:var(--text-dim)">O módulo Caixa (POS) já está disponível com abertura, fecho e registo de entradas/saídas por método de pagamento — configurável em Caixa (POS).</p>`},
  {label:"Utilizadores", render:()=>`<p style="font-size:12.5px;color:var(--text-dim)">${usuarios.length} utilizador(es) já configurados, com 12 perfis de acesso disponíveis em Permissões.</p>`},
  {label:"Impressoras", render:()=>`<div class="field"><label>Impressora predefinida</label><select id="w_impressora"><option>Térmica 58mm</option><option>Térmica 80mm</option><option>Laser / Jacto A4</option></select></div>`},
  {label:"Layout", render:()=>`<div class="field"><label>Formato de papel predefinido</label><select id="w_layout"><option>A4 Vertical</option><option>A4 Horizontal</option><option>A5</option><option>A6</option><option>POS 58mm</option><option>POS 80mm</option><option>Carta</option></select></div>`},
  {label:"Integração AGT", render:()=>`
    <div class="cfg-row"><div><div class="cfg-label">Activar Integração FE / Portal da AGT</div><div class="cfg-sub">Submissão automática de facturas e SAF-T AO</div></div><div class="toggle-sw on" id="w_agtToggle"></div></div>
    <p style="font-size:11.5px;color:var(--text-faint);margin-top:10px">Configuração concluída. Clique em "Concluir" para aplicar todas as definições.</p>`},
];
function openWizard(){
  wizardStep = 0;
  document.getElementById("wizardOverlay").classList.add("open");
  renderWizardStep();
}
function closeWizard(){ document.getElementById("wizardOverlay").classList.remove("open"); }
document.getElementById("wizardClose").addEventListener("click", closeWizard);
document.getElementById("wizardOverlay").addEventListener("click", e=>{ if(e.target.id==="wizardOverlay") closeWizard(); });

function renderWizardStep(){
  const s = wizardSteps[wizardStep];
  document.getElementById("wizardStepLabel").textContent = `Passo ${wizardStep+1} de ${wizardSteps.length} — ${s.label}`;
  document.getElementById("wizardBody").innerHTML = s.render();
  document.getElementById("wizardDots").innerHTML = wizardSteps.map((_,i)=>
    `<div class="wizard-dot ${i<wizardStep?"done":i===wizardStep?"active":""}"></div>`).join("");
  document.getElementById("wizardBack").style.visibility = wizardStep===0 ? "hidden" : "visible";
  document.getElementById("wizardNext").textContent = wizardStep===wizardSteps.length-1 ? "Concluir" : "Seguinte";

  // wire toggles inside the step, if present
  const wRet = document.getElementById("w_retToggle");
  if(wRet) wRet.addEventListener("click", ()=> wRet.classList.toggle("on"));
  const wAgt = document.getElementById("w_agtToggle");
  if(wAgt) wAgt.addEventListener("click", ()=> wAgt.classList.toggle("on"));
  const wWa = document.getElementById("w_whatsappIgual");
  if(wWa) wWa.addEventListener("click", ()=> wWa.classList.toggle("on"));
}
document.getElementById("wizardBack").addEventListener("click", ()=>{
  if(wizardStep>0){ wizardStep--; renderWizardStep(); }
});
document.getElementById("wizardNext").addEventListener("click", ()=>{
  // guarda os valores do passo actual antes de avançar
  const g = id => document.getElementById(id);
  if(g("w_empresa")) configFiscal.empresaNome = g("w_empresa").value.trim() || configFiscal.empresaNome;
  if(g("w_logo")) empresaInfo.logoUrl = g("w_logo").value.trim();
  if(g("w_nif")) configFiscal.empresaNif = g("w_nif").value.trim() || configFiscal.empresaNif;
  if(g("w_regime")) configFiscal.regime = g("w_regime").value;
  if(g("w_tel1")) empresaInfo.tel1 = g("w_tel1").value.trim();
  if(g("w_tel2")) empresaInfo.tel2 = g("w_tel2").value.trim();
  if(g("w_emailGeral")) empresaInfo.emailGeral = g("w_emailGeral").value.trim();
  if(g("w_emailComercial")) empresaInfo.emailComercial = g("w_emailComercial").value.trim();
  if(g("w_emailFinanceiro")) empresaInfo.emailFinanceiro = g("w_emailFinanceiro").value.trim();
  if(g("w_whatsappIgual")) empresaInfo.whatsappIgual = g("w_whatsappIgual").classList.contains("on");
  if(g("w_whatsapp")) empresaInfo.whatsapp = g("w_whatsapp").value.trim();
  if(g("w_retToggle")) configFiscal.retencaoActiva = g("w_retToggle").classList.contains("on");
  if(g("w_retTaxa")) configFiscal.retencaoTaxa = +g("w_retTaxa").value || configFiscal.retencaoTaxa;
  if(g("w_moeda")) configFiscal.moeda = g("w_moeda").value;
  if(g("w_layout")) configFiscal.layoutPapel = g("w_layout").value;

  if(wizardStep < wizardSteps.length-1){
    wizardStep++; renderWizardStep();
    return;
  }
  // Concluir: aplica todas as definições recolhidas
  empresaInfo.nome = configFiscal.empresaNome;
  empresaInfo.nif = configFiscal.empresaNif;
  empresas[empresaAtiva] = empresaInfo;
  closeWizard();
  renderConfiguracao();
  renderEmpresaPage();
  renderInvoice();
  toast("Configuração inicial concluída com sucesso");
});


/* ================= NAVEGAÇÃO ================= */
const titles = {
  dashboard:["Dashboard","Visão geral do negócio em tempo real"],
  clientes:["Clientes","Cadastro, contactos e histórico de compras"],
  faturas:["Emitir Fatura","Facturas, recibos, guias e cotações"],
  caixa:["Caixa (POS)","Abertura, fecho e movimentos de caixa"],
  relatorios:["Relatórios","Análises de vendas, IVA e fluxo de caixa"],
  produtos:["Produtos","Catálogo, preços e categorias"],
  inventario:["Inventário","Stock actual, mínimo e alertas"],
  armazens:["Armazéns","Localizações físicas de stock"],
  movimentos:["Movimentos","Rastreabilidade de entradas e saídas"],
  financeiro:["Bancos & Tesouraria","Contas bancárias, fluxo de caixa e reconciliação"],
  crm:["CRM & Vendas","Leads, oportunidades e funil de vendas"],
  compras:["Compras & Fornecedores","Requisições, ordens de compra e recepção"],
  contabilidade:["Contabilidade","Plano de contas, diário, razão e demonstrações"],
  millenbot:["MillenBot AI","Assistente inteligente integrado em todos os módulos"],
  empresa:["Configuração da Empresa","Geral, contactos, bancos, cores e modelos de impressão"],
  configuracao:["Configuração Fiscal","Regimes, taxas, isenções, retenção e layout de impressão"],
  permissoes:["Permissões","Matriz de acesso por perfil de utilizador"],
  auditoria:["Auditoria","Histórico completo de alterações: quem, quando e o quê"],
  fiscal:["Integração Fiscal","FE, AGT, SAF-T AO, QR fiscal e certificado digital"],
  workflow:["Workflow","Fluxos de aprovação configuráveis"],
  documentos:["Centro de Documentos","Repositório de ficheiros ligados a clientes e fornecedores"],
  mobile:["Aplicações Móveis","Millennes no telemóvel, para toda a equipa"],
  usuarios:["Utilizadores","Perfis e permissões de acesso"],
};
function goto(view){
  document.querySelectorAll(".nav-item").forEach(n=>n.classList.toggle("active", n.dataset.view===view));
  document.querySelectorAll(".view").forEach(v=>v.classList.remove("active"));
  document.getElementById("view-"+view).classList.add("active");
  document.getElementById("pageTitle").textContent = titles[view][0];
  document.getElementById("pageSub").textContent = titles[view][1];
  if(window.innerWidth<=680) document.getElementById("sidebar").classList.remove("mobile-open");
}
document.querySelectorAll(".nav-item").forEach(item=>{
  item.addEventListener("click", ()=>goto(item.dataset.view));
});
document.querySelectorAll("[data-goto]").forEach(el=>{
  el.style.cursor="pointer";
  el.addEventListener("click", ()=>goto(el.dataset.goto));
});

document.getElementById("toggleSidebar").addEventListener("click", ()=>{
  const sb = document.getElementById("sidebar");
  if(window.innerWidth<=680){ sb.classList.toggle("mobile-open"); }
  else{ sb.classList.toggle("collapsed"); }
});

/* ================= TOAST ================= */
let toastTimer;
function toast(msg){
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=>t.classList.remove("show"), 2600);
}

/* ================= DROPDOWNS GENÉRICOS (empresa / tema / moeda / notificações) ================= */
function setupDropdown(wrapId, triggerId, menuId){
  const wrap = document.getElementById(wrapId);
  const trigger = document.getElementById(triggerId);
  const menu = document.getElementById(menuId);
  trigger.addEventListener("click", (e)=>{
    e.stopPropagation();
    document.querySelectorAll(".dd-menu.open").forEach(m=>{ if(m!==menu) m.classList.remove("open"); });
    menu.classList.toggle("open");
  });
  return {wrap, trigger, menu};
}
const ddCompany = setupDropdown("companyWrap","companyTrigger","companyMenu");
const ddTheme = setupDropdown("themeWrap","themeTrigger","themeMenu");
const ddCurr = setupDropdown("currWrap","currTrigger","currMenu");
const ddNotif = setupDropdown("notifWrap","notifTrigger","notifMenu");
document.addEventListener("click", ()=> document.querySelectorAll(".dd-menu.open").forEach(m=>m.classList.remove("open")));

document.querySelectorAll("#companyMenu [data-company]").forEach(el=>{
  el.addEventListener("click", ()=>{
    document.getElementById("companyLabel").textContent = "🏢 "+el.dataset.company;
    document.querySelectorAll("#companyMenu .dd-item").forEach(i=>i.classList.remove("sel"));
    el.classList.add("sel");
    switchEmpresa(el.dataset.company);
    toast("A editar dados de "+el.dataset.company);
  });
});
document.querySelectorAll("#currMenu [data-curr]").forEach(el=>{
  el.addEventListener("click", ()=>{
    document.getElementById("currTrigger").innerHTML = el.dataset.curr+' <svg class="chev" viewBox="0 0 24 24" fill="none" stroke-width="2.5"><path d="M6 9l6 6 6-6"/></svg>';
    document.querySelectorAll("#currMenu .dd-item").forEach(i=>i.classList.remove("sel"));
    el.classList.add("sel");
    toast("Moeda predefinida alterada para "+el.textContent);
  });
});

/* ================= TEMA CLARO / ESCURO / AUTOMÁTICO ================= */
function applyTheme(mode){
  const isLight = mode==="light" || (mode==="auto" && window.matchMedia("(prefers-color-scheme: light)").matches);
  document.documentElement.classList.toggle("theme-light", isLight);
  const icon = document.getElementById("themeIcon");
  icon.innerHTML = mode==="light"
    ? '<circle cx="12" cy="12" r="4.5"/><path d="M12 2v2.5M12 19.5V22M4.2 4.2l1.8 1.8M18 18l1.8 1.8M2 12h2.5M19.5 12H22M4.2 19.8L6 18M18 6l1.8-1.8"/>'
    : mode==="auto"
    ? '<rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8M12 17v4"/>'
    : '<path d="M12 3a9 9 0 109 9c0-.5 0-1-.1-1.5A5.5 5.5 0 0112 3z"/>';
}
document.querySelectorAll("#themeMenu [data-theme]").forEach(el=>{
  el.addEventListener("click", ()=>{
    document.querySelectorAll("#themeMenu .dd-item").forEach(i=>i.classList.remove("sel"));
    el.classList.add("sel");
    applyTheme(el.dataset.theme);
  });
});

/* ================= PESQUISA GLOBAL (COMMAND PALETTE) ================= */
const cmdkOverlay = document.getElementById("cmdkOverlay");
const cmdkInput = document.getElementById("cmdkInput");
const cmdkResults = document.getElementById("cmdkResults");
function openCmdk(){ cmdkOverlay.classList.add("open"); cmdkInput.value=""; renderCmdk(""); setTimeout(()=>cmdkInput.focus(),50); }
function closeCmdk(){ cmdkOverlay.classList.remove("open"); }
document.getElementById("openCmdk").addEventListener("click", openCmdk);
document.addEventListener("keydown", e=>{
  if((e.ctrlKey||e.metaKey) && e.key.toLowerCase()==="k"){ e.preventDefault(); openCmdk(); }
  if(e.key==="Escape") closeCmdk();
});
cmdkOverlay.addEventListener("click", e=>{ if(e.target===cmdkOverlay) closeCmdk(); });

function renderCmdk(q){
  q = q.trim().toLowerCase();
  const icClient = '<circle cx="9" cy="8" r="3.2"/><path d="M3 20c0-3.5 2.8-6 6-6s6 2.5 6 6"/>';
  const icProd = '<path d="M21 8l-9-5-9 5 9 5 9-5z"/><path d="M3 8v8l9 5 9-5V8"/>';
  const icDoc = '<path d="M7 3h8l4 4v14H7z"/><path d="M15 3v4h4"/>';
  const icForn = '<path d="M3 3h3l2.4 12.4a2 2 0 002 1.6h7.2a2 2 0 002-1.6L21 8H6"/>';

  let groups = [];
  const cMatch = clientes.filter(c=> !q || c.nome.toLowerCase().includes(q) || c.nif.toLowerCase().includes(q) || c.contacto.includes(q));
  const pMatch = produtos.filter(p=> !q || p.nome.toLowerCase().includes(q) || p.cat.toLowerCase().includes(q));
  if(cMatch.length) groups.push(["Clientes", icClient, cMatch.slice(0,5).map(c=>[c.nome, c.nif, ()=>{closeCmdk();goto("clientes");}])]);
  if(pMatch.length) groups.push(["Produtos", icProd, pMatch.slice(0,5).map(p=>[p.nome, kz(p.preco), ()=>{closeCmdk();goto("produtos");}])]);
  if(!q || "factura".includes(q) || "documentos".includes(q)){
    groups.push(["Documentos comerciais", icDoc, [
      ["FT 2026/0412 · Sónia Baptista","07/07/2026", ()=>{closeCmdk();goto("faturas");}],
      ["FT 2026/0398 · Anulada","06/07/2026", ()=>{closeCmdk();goto("auditoria");}],
    ]]);
  }
  if(!q || "fornecedor".includes(q) || "techimport".includes(q)){
    groups.push(["Fornecedores", icForn, [
      ["TechImport Angola","5200112233", ()=>{closeCmdk();goto("compras");}],
      ["Distribuidora Kianda","5400556677", ()=>{closeCmdk();goto("compras");}],
    ]]);
  }

  if(!groups.length){ cmdkResults.innerHTML = `<div class="cmdk-empty">Sem resultados para "${q}"</div>`; return; }
  cmdkResults.innerHTML = groups.map(([label,ic,items])=>`
    <div class="cmdk-group-label">${label}</div>
    ${items.map(([n,sub,fn],i)=>`<div class="cmdk-row" data-g="${label}" data-i="${i}"><div class="cmdk-ic"><svg viewBox="0 0 24 24" fill="none" stroke-width="2">${ic}</svg></div>${n}<small>${sub}</small></div>`).join("")}
  `).join("");
  // wire clicks
  let idx=0;
  groups.forEach(([label,ic,items])=>{
    items.forEach(([n,sub,fn])=>{
      const el = cmdkResults.querySelectorAll(".cmdk-row")[idx];
      el.addEventListener("click", fn);
      idx++;
    });
  });
}
cmdkInput.addEventListener("input", e=> renderCmdk(e.target.value));

/* ================= MILLENBOT FLUTUANTE ================= */
const botFab = document.getElementById("botFab");
const botPanel = document.getElementById("botPanel");
const botBody = document.getElementById("botBody");
botFab.addEventListener("click", ()=> botPanel.classList.toggle("open"));
document.getElementById("botClose").addEventListener("click", ()=> botPanel.classList.remove("open"));

const botAnswers = {
  "sugerir reposição de stock":"Com base no histórico de vendas, sugiro repor: Rato Óptico USB (0 un.), Resma de Papel A4 (2 un.) e Toner HP 26A (4 un.). Posso gerar as ordens de compra automaticamente.",
  "prever vendas do mês":"Mantendo a tendência dos últimos 14 dias, projecto um total facturado entre Kz 11.2M e Kz 11.8M este mês — cerca de 95% da meta definida.",
  "resumir caixa de hoje":"Caixa aberta às 08:12 com Kz 25.000 de fundo. Até agora: Kz 214.300 em numerário, Kz 186.900 em Multicaixa e Kz 85.000 em transferências. Saldo esperado: Kz 313.300.",
  "explicar o iva apurado":"O IVA apurado este mês é de Kz 1.378.900, calculado à taxa geral de 14% sobre o total facturado, deduzido do IVA suportado nas compras registadas.",
};
function botReply(q){
  const key = q.trim().toLowerCase();
  const found = Object.keys(botAnswers).find(k=> key.includes(k) || k.includes(key));
  return found ? botAnswers[found] : "Ainda estou a aprender sobre isso — mas já posso sugerir reposições, prever vendas, resumir a caixa e explicar relatórios de IVA. Experimente uma das sugestões abaixo.";
}
function botSendMsg(text){
  if(!text.trim()) return;
  botBody.insertAdjacentHTML("beforeend", `<div class="bot-msg user">${text}</div>`);
  botBody.scrollTop = botBody.scrollHeight;
  setTimeout(()=>{
    botBody.insertAdjacentHTML("beforeend", `<div class="bot-msg bot">${botReply(text)}</div>`);
    botBody.scrollTop = botBody.scrollHeight;
  }, 500);
}
document.getElementById("botSend").addEventListener("click", ()=>{
  const inp = document.getElementById("botInput");
  botSendMsg(inp.value); inp.value="";
});
document.getElementById("botInput").addEventListener("keydown", e=>{
  if(e.key==="Enter"){ botSendMsg(e.target.value); e.target.value=""; }
});
document.querySelectorAll(".bot-chip").forEach(chip=>{
  chip.addEventListener("click", ()=>{ botPanel.classList.add("open"); botSendMsg(chip.dataset.q); });
});

/* ================= CHARTS ================= */
if(typeof Chart !== "undefined"){
    Chart.defaults.color = "#8595a8";
    Chart.defaults.font.family = "Inter";
} else {
    console.log('Chart is not defined')
}

function initCharts(){
  const ctx = document.getElementById("chartVendas");
  new Chart(ctx, {
    type:"line",
    data:{
      labels:["24/06","25","26","27","28","29","30","01/07","02","03","04","05","06","07"],
      datasets:[{
        label:"Vendas diárias (Kz)",
        data:[312000,298000,415000,389000,441000,520000,610000,455000,398000,470000,512000,489000,530000,486200],
        borderColor:"#2f7dfa", borderWidth:2.5, tension:.4, fill:true,
        backgroundColor:"rgba(47,125,250,.12)", pointRadius:0, pointHoverRadius:5,
        pointBackgroundColor:"#2f7dfa"
      }]
    },
    options:{
      plugins:{legend:{display:false}},
      scales:{
        x:{grid:{display:false}, border:{color:"#1c2733"}},
        y:{grid:{color:"#161f29"}, border:{display:false}, ticks:{callback:v=>(v/1000)+"k"}}
      },
      maintainAspectRatio:false
    }
  });

  const ctx2 = document.getElementById("chartPagamentos");
  new Chart(ctx2, {
    type:"doughnut",
    data:{
      labels:["Numerário","Multicaixa","Transferência"],
      datasets:[{data:[214300,186900,85000], backgroundColor:["#2f7dfa","#ef3b52","#26c281"], borderWidth:0}]
    },
    options:{ plugins:{legend:{position:"bottom", labels:{boxWidth:10, padding:16, font:{size:11}}}}, maintainAspectRatio:false, cutout:"68%" }
  });

  const ctx3 = document.getElementById("chartFluxo");
  new Chart(ctx3, {
    type:"bar",
    data:{
      labels:["Fev","Mar","Abr","Mai","Jun","Jul"],
      datasets:[
        {label:"Entradas", data:[7800000,8200000,8900000,9100000,9700000,9842000], backgroundColor:"#26c281", borderRadius:5},
        {label:"Saídas", data:[6200000,6500000,7100000,7300000,7600000,7900000], backgroundColor:"#ef3b52", borderRadius:5},
      ]
    },
    options:{
      plugins:{legend:{position:"bottom", labels:{boxWidth:10, padding:16, font:{size:11}}}},
      scales:{
        x:{grid:{display:false}, border:{color:"#1c2733"}},
        y:{grid:{color:"#161f29"}, border:{display:false}, ticks:{callback:v=>(v/1000000)+"M"}}
      },
      maintainAspectRatio:false
    }
  });
}

/* ================= INIT ================= */
renderDashboard();
renderClientes();
renderProdutos();
renderInventario();
renderArmazens();
renderMovimentos();
renderUsuarios();
populateInvoiceSelectors();
onClientSelectChange();
renderInvoice();
renderPermissoes();
renderAuditoria();
renderFiscal();
renderCrm();
renderContabilidade();
renderWorkflow();
renderDocumentos();
renderInvoiceHistory();
renderEmpresaPage();
renderConfiguracao();
window.addEventListener("load", initCharts);