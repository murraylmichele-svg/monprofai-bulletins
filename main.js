// ════════════════════════════════════════════════════════════════
// main.js — MonProf.ai Bulletin Generator
// All UI logic, generation, and helper functions
// ════════════════════════════════════════════════════════════════

// ── RAILWAY API PROXY ─────────────────────────────────────────
const RAILWAY_URL = 'https://web-production-f1270.up.railway.app/api/claude';

// ── CHAR LIMITS (Aspen) ───────────────────────────────────────
const CHAR_LIMITS = {
  'HH': 2560,
  'Mathématiques': 1100,
  'Français': 1000,
  'Sciences et technologie': 1000,
  'Anglais': 1000,
  'Études sociales': 700,
  'Éducation physique et santé': 500,
  'Santé': 400,
  'Arts (arts visuels)': 300,
  'Arts (musique)': 300,
  'Arts (danse)': 300,
  'Arts (art dramatique)': 300,
  'Enseignement religieux': 700
};

// ── BULLETIN TYPE STATE ───────────────────────────────────────
let bulletinType = 'progres';
let indBulletinType = 'progres';

function setBulletinType(type) {
  bulletinType = type;
  document.getElementById('btn-type-progres').classList.toggle('active', type === 'progres');
  document.getElementById('btn-type-scolaire').classList.toggle('active', type === 'scolaire');
  updateClasseAttentes();
}

function setIndBulletinType(type) {
  indBulletinType = type;
  document.getElementById('btn-ind-type-progres').classList.toggle('active', type === 'progres');
  document.getElementById('btn-ind-type-scolaire').classList.toggle('active', type === 'scolaire');
  renderNiveauButtonsInd();
}

function renderNiveauButtonsInd() {
  const container = document.getElementById('niveau-group-ind');
  if (!container) return;
  if (indBulletinType === 'progres') {
    container.innerHTML = `
      <button class="niveau-btn" onclick="selectNiveauInd('T')">T — Très bien</button>
      <button class="niveau-btn" onclick="selectNiveauInd('B')">B — Bien</button>
      <button class="niveau-btn" onclick="selectNiveauInd('D')">D — En développement</button>`;
  } else {
    container.innerHTML = `
      <button class="niveau-btn" onclick="selectNiveauInd('A+')">A+</button>
      <button class="niveau-btn" onclick="selectNiveauInd('A')">A</button>
      <button class="niveau-btn" onclick="selectNiveauInd('A-')">A-</button>
      <button class="niveau-btn" onclick="selectNiveauInd('B+')">B+</button>
      <button class="niveau-btn" onclick="selectNiveauInd('B')">B</button>
      <button class="niveau-btn" onclick="selectNiveauInd('B-')">B-</button>
      <button class="niveau-btn" onclick="selectNiveauInd('C+')">C+</button>
      <button class="niveau-btn" onclick="selectNiveauInd('C')">C</button>
      <button class="niveau-btn" onclick="selectNiveauInd('C-')">C-</button>
      <button class="niveau-btn" onclick="selectNiveauInd('D+')">D+</button>
      <button class="niveau-btn" onclick="selectNiveauInd('D')">D</button>
      <button class="niveau-btn" onclick="selectNiveauInd('D-')">D-</button>`;
  }
}

let selectedNiveauInd = '';
function selectNiveauInd(val) {
  selectedNiveauInd = val;
  document.querySelectorAll('#niveau-group-ind .niveau-btn').forEach(b => {
    b.className = 'niveau-btn';
    if (b.textContent.startsWith(val)) {
      const letter = val.replace(/[+-]/, '');
      b.classList.add('sel-' + letter);
    }
  });
}

// ── TAB SWITCHING ─────────────────────────────────────────────
function switchTab(tab) {
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.getElementById('panel-' + tab).classList.add('active');
  event.target.classList.add('active');
}

// ── PRONOM ───────────────────────────────────────────────────
let selectedPronom = 'elle';
function selectPronom(p) {
  selectedPronom = p;
  ['elle','il','iel'].forEach(x => {
    document.getElementById('btn-' + x).classList.toggle('selected', x === p);
  });
}

let selectedPronomHab = 'elle';
function selectPronomHab(p) {
  selectedPronomHab = p;
  ['elle','il','iel'].forEach(x => {
    const btn = document.getElementById('btn-' + x + '-hab');
    if (btn) btn.classList.toggle('selected', x === p);
  });
  assembleComment();
}

// ── INDIVIDUEL — MATIÈRE / ATTENTES ──────────────────────────
function updateMatieres() {
  const annee = document.getElementById('annee').value;
  const sel = document.getElementById('matiere');
  sel.innerHTML = '<option value="">— Sélectionner —</option>';
  if (!annee) return;
  MATIERES.forEach(m => {
    if (ATTENTES[m] && ATTENTES[m][annee]) {
      const opt = document.createElement('option');
      opt.value = m;
      opt.textContent = m;
      sel.appendChild(opt);
    }
  });
  document.getElementById('attentes-list-individuel').innerHTML =
    '<p style="color:#999; font-style:italic; font-size:13px; padding:8px;">Sélectionnez la matière d\'abord.</p>';
  renderNiveauButtonsInd();
}

function updateAttentes() {
  const annee = document.getElementById('annee').value;
  const matiere = document.getElementById('matiere').value;
  const container = document.getElementById('attentes-list-individuel');
  if (!annee || !matiere || !ATTENTES[matiere] || !ATTENTES[matiere][annee]) {
    container.innerHTML = '<p style="color:#999; font-style:italic; font-size:13px; padding:8px;">Aucune attente disponible.</p>';
    return;
  }
  container.innerHTML = '';
  const data = ATTENTES[matiere][annee];
  Object.keys(data).forEach(domaine => {
    const header = document.createElement('div');
    header.style.cssText = 'font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:0.08em; color:#2d6a9f; padding:6px 0 2px; margin-top:6px;';
    header.textContent = domaine;
    container.appendChild(header);
    data[domaine].forEach(att => {
      const item = document.createElement('label');
      item.className = 'attente-item';
      item.innerHTML = `<input type="checkbox" style="accent-color:var(--bleu); flex-shrink:0; margin-top:2px;"> <span>${att}</span>`;
      item.querySelector('input').addEventListener('change', function() {
        item.classList.toggle('selected', this.checked);
      });
      container.appendChild(item);
    });
  });
}

// ── CLASSE ENTIÈRE — ATTENTES ─────────────────────────────────
function updateClasseAttentes() {
  const annee = document.getElementById('classe-annee').value;
  const container = document.getElementById('classe-attentes-container');
  if (!annee) {
    container.innerHTML = '<p style="color:#999; font-style:italic; font-size:13px;">Sélectionnez d\'abord l\'année d\'études.</p>';
    return;
  }
  container.innerHTML = '';
  MATIERES.forEach(matiere => {
    if (!ATTENTES[matiere] || !ATTENTES[matiere][annee]) return;
    const section = document.createElement('div');
    section.className = 'matiere-section';
    const mLabel = matiere.replace('Arts (', '').replace(')', '');
    section.innerHTML = `
      <div class="matiere-header" onclick="toggleMatiere(this)">
        <h3>${matiere}</h3>
        <span class="toggle">▼</span>
      </div>
      <div class="matiere-body">
        <div class="attentes-list" id="attentes-${slugify(matiere)}"></div>
      </div>`;
    container.appendChild(section);
    const list = section.querySelector('.attentes-list');
    const data = ATTENTES[matiere][annee];
    Object.keys(data).forEach(domaine => {
      const header = document.createElement('div');
      header.style.cssText = 'font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:0.08em; color:#2d6a9f; padding:6px 0 2px; margin-top:6px;';
      header.textContent = domaine;
      list.appendChild(header);
      data[domaine].forEach(att => {
        const item = document.createElement('label');
        item.className = 'attente-item';
        item.dataset.matiere = matiere;
        item.innerHTML = `<input type="checkbox" style="accent-color:var(--bleu); flex-shrink:0; margin-top:2px;"> <span>${att}</span>`;
        item.querySelector('input').addEventListener('change', function() {
          item.classList.toggle('selected', this.checked);
        });
        list.appendChild(item);
      });
    });
  });
}

function toggleMatiere(header) {
  const body = header.nextElementSibling;
  const toggle = header.querySelector('.toggle');
  body.classList.toggle('open');
  toggle.textContent = body.classList.contains('open') ? '▲' : '▼';
}

function slugify(str) {
  return str.toLowerCase().replace(/[^a-z0-9]/g, '-');
}

// ── PARSE CLASSE PASTE ────────────────────────────────────────
function parsePaste(raw) {
  const lines = raw.trim().split('\n').filter(l => l.trim());
  return lines.map(line => {
    const cols = line.split('\t').map(c => c.trim());
    return {
      nom: cols[0] || '',
      prenom: cols[1] || '',
      pronom: (cols[2] || 'elle').toLowerCase(),
      Mathématiques: cols[3] || '',
      Français: cols[4] || '',
      'Études sociales': cols[5] || '',
      'Sciences et technologie': cols[6] || '',
      'Arts (arts visuels)': cols[7] || '',
      'Arts (musique)': cols[8] || '',
      'Arts (danse)': cols[9] || '',
      'Arts (art dramatique)': cols[10] || '',
      'Éducation physique et santé': cols[11] || '',
      'Enseignement religieux': cols[12] || '',
      observations: cols[13] || ''
    };
  });
}

// ── GET SELECTED ATTENTES ─────────────────────────────────────
function getSelectedAttentes() {
  const result = {};
  document.querySelectorAll('.attente-item.selected').forEach(item => {
    const matiere = item.dataset.matiere;
    if (!result[matiere]) result[matiere] = [];
    result[matiere].push(item.querySelector('span').textContent);
  });
  return result;
}

function getSelectedAttentesInd() {
  const result = [];
  document.querySelectorAll('#attentes-list-individuel .attente-item').forEach(item => {
    if (item.querySelector('input').checked) {
      result.push(item.querySelector('span').textContent);
    }
  });
  return result;
}

// ── BULLETIN TYPE LABEL ───────────────────────────────────────
function getBulletinTypeLabel(type) {
  return type === 'progres'
    ? 'Bulletin de progrès (cotes : T = Très bien, B = Bien, D = En développement)'
    : 'Bulletin scolaire (cotes : A+/A/A- = Niveau 4, B+/B/B- = Niveau 3, C+/C/C- = Niveau 2, D+/D/D- = Niveau 1)';
}

// ── GENERATE CLASSE ENTIÈRE ───────────────────────────────────
async function generateClasse() {
  const raw = document.getElementById('class-paste').value.trim();
  const annee = document.getElementById('classe-annee').value;
  if (!raw) { alert('Veuillez coller votre liste de classe.'); return; }
  if (!annee) { alert('Veuillez sélectionner l\'année d\'études.'); return; }

  const eleves = parsePaste(raw);
  if (eleves.length === 0) { alert('Aucun élève trouvé dans la liste collée.'); return; }

  const attentes = getSelectedAttentes();
  const btn = document.getElementById('btn-gen-classe');
  btn.disabled = true;

  const progressSection = document.getElementById('progress-classe');
  const progressFill = document.getElementById('progress-fill');
  const progressText = document.getElementById('progress-text');
  progressSection.classList.add('visible');

  const resultsSection = document.getElementById('results-classe');
  const resultsContent = document.getElementById('results-classe-content');
  resultsSection.classList.remove('visible');
  resultsContent.innerHTML = '';

  // Group students by subjects they have grades for
  const matiereMap = {};
  MATIERES.forEach(m => {
    const studentsWithGrade = eleves.filter(e => e[m] && e[m].trim() !== '');
    if (studentsWithGrade.length > 0) matiereMap[m] = studentsWithGrade;
  });

  const matieresActives = Object.keys(matiereMap);
  if (matieresActives.length === 0) { alert('Aucune cote trouvée dans la liste.'); btn.disabled = false; return; }

  const allResults = {};
  eleves.forEach(e => { allResults[`${e.nom} ${e.prenom}`] = {}; });

  for (let i = 0; i < matieresActives.length; i++) {
    const matiere = matieresActives[i];
    const studentsInMatiere = matiereMap[matiere];
    const pct = Math.round(((i) / matieresActives.length) * 100);
    progressFill.style.width = pct + '%';
    progressText.textContent = `Génération pour ${matiere} (${i + 1}/${matieresActives.length})...`;

    const attentesMatiere = attentes[matiere] || [];
    const attentesText = attentesMatiere.length > 0
      ? `Attentes évaluées : ${attentesMatiere.join('; ')}`
      : 'Attentes générales de la matière';

    const prompt = buildClassePrompt(matiere, annee, studentsInMatiere, attentesText, bulletinType);

    try {
      const response = await callClaude(prompt);
      const parsed = parseClasseResponse(response, studentsInMatiere, matiere);
      parsed.forEach(({ eleve, commentaire }) => {
        const key = `${eleve.nom} ${eleve.prenom}`;
        if (!allResults[key]) allResults[key] = {};
        allResults[key][matiere] = { cote: eleve[matiere], commentaire };
      });
    } catch (err) {
      console.error('Erreur pour', matiere, err);
    }
  }

  progressFill.style.width = '100%';
  progressText.textContent = 'Terminé !';

  // Render results
  const matieresBySubject = {};
  matieresActives.forEach(m => { matieresBySubject[m] = []; });
  eleves.forEach(e => {
    const key = `${e.nom} ${e.prenom}`;
    matieresActives.forEach(m => {
      if (allResults[key] && allResults[key][m]) {
        matieresBySubject[m].push({
          nom: e.nom, prenom: e.prenom, pronom: e.pronom,
          cote: allResults[key][m].cote,
          commentaire: allResults[key][m].commentaire
        });
      }
    });
  });

  resultsContent.innerHTML = '';
  matieresActives.forEach(matiere => {
    const students = matieresBySubject[matiere];
    if (!students || students.length === 0) return;
    const limit = CHAR_LIMITS[matiere] || CHAR_LIMITS[matiere.split(' ')[0]] || 700;

    const div = document.createElement('div');
    div.className = 'subject-results';
    div.innerHTML = `
      <div class="subject-results-title">${matiere}</div>
      <div class="subject-attentes-note">Limite Aspen : ${limit} caractères</div>
      <table class="results-table">
        <thead><tr>
          <th>Élève</th><th>Cote</th><th>Commentaire</th>
          <th style="width:110px;">Actions</th>
        </tr></thead>
        <tbody id="tbody-${slugify(matiere)}"></tbody>
      </table>`;
    resultsContent.appendChild(div);

    const tbody = div.querySelector('tbody');
    students.forEach((s, idx) => {
      const charCount = (s.commentaire || '').length;
      const over = charCount > limit;
      const tr = document.createElement('tr');
      const rowId = `${slugify(matiere)}-${idx}`;
      tr.innerHTML = `
        <td class="name-cell">${s.nom}, ${s.prenom}</td>
        <td class="cote-cell">${s.cote}</td>
        <td class="comment-cell" id="comment-${rowId}">${s.commentaire || '(aucun commentaire)'}</td>
        <td class="edit-cell">
          <button class="btn-mini" onclick="copyComment('${rowId}')">Copier</button>
          <button class="btn-mini" onclick="editComment('${rowId}')">✏️</button>
          <div style="font-size:10px; color:${over ? 'var(--rouge-doux)' : '#888'}; margin-top:4px;" id="count-${rowId}">${charCount} / ${limit}</div>
        </td>`;
      tbody.appendChild(tr);
    });
  });

  resultsSection.classList.add('visible');
  document.getElementById('results-classe-title').textContent =
    `Commentaires générés — ${eleves.length} élève(s) · ${matieresActives.length} matière(s)`;

  setTimeout(() => {
    progressSection.classList.remove('visible');
  }, 2000);

  btn.disabled = false;
}

function buildClassePrompt(matiere, annee, eleves, attentesText, type) {
  const typeLabel = getBulletinTypeLabel(type);
  const elevesList = eleves.map(e => {
    const obs = e.observations ? ` [Note : ${e.observations}]` : '';
    return `- ${e.prenom} ${e.nom} (${e.pronom}) : cote ${e[matiere]}${obs}`;
  }).join('\n');

  return `Tu es un expert en rédaction de bulletins scolaires pour les écoles de langue française catholiques de l'Ontario.

Matière : ${matiere}
Année d'études : ${annee}e année
${typeLabel}
${attentesText}

Génère un commentaire de bulletin en français pour chacun des élèves suivants. 
Le commentaire doit :
- Être personnalisé selon la cote et le prénom de l'élève
- Utiliser le bon pronom (elle/il/iel)
- Mentionner des forces observées et des pistes de progrès
- Être en lien avec les attentes évaluées
- Faire entre 150 et 350 mots (ou respecter la limite de la matière)
- Utiliser un ton professionnel, bienveillant et encourageant
- Ne pas commencer par le prénom de l'élève

Élèves :
${elevesList}

Format de réponse OBLIGATOIRE (utiliser exactement ces séparateurs) :
===ÉLÈVE: [Prénom Nom]===
[commentaire]
===FIN===

Génère les commentaires pour tous les élèves listés.`;
}

function parseClasseResponse(text, eleves, matiere) {
  const results = [];
  const blocks = text.split('===ÉLÈVE:');
  blocks.forEach(block => {
    if (!block.trim()) return;
    const endIdx = block.indexOf('===FIN===');
    const nameEnd = block.indexOf('===');
    if (nameEnd === -1) return;
    const name = block.substring(0, nameEnd).trim();
    const commentaire = endIdx !== -1
      ? block.substring(nameEnd + 3, endIdx).trim()
      : block.substring(nameEnd + 3).trim();

    const eleve = eleves.find(e =>
      name.toLowerCase().includes(e.prenom.toLowerCase()) ||
      name.toLowerCase().includes(e.nom.toLowerCase())
    );
    if (eleve) results.push({ eleve, commentaire });
  });

  // Fallback: match by order if parsing fails
  if (results.length === 0 && eleves.length === 1) {
    results.push({ eleve: eleves[0], commentaire: text.trim() });
  }
  return results;
}

function copyComment(rowId) {
  const cell = document.getElementById('comment-' + rowId);
  const text = cell.textContent;
  navigator.clipboard.writeText(text).then(() => {
    const btn = cell.parentElement.querySelector('.btn-mini');
    btn.textContent = '✓ Copié';
    btn.classList.add('copied');
    setTimeout(() => { btn.textContent = 'Copier'; btn.classList.remove('copied'); }, 2000);
  });
}

function editComment(rowId) {
  const cell = document.getElementById('comment-' + rowId);
  if (cell.contentEditable === 'true') {
    cell.contentEditable = 'false';
    // Update char count
    const countEl = document.getElementById('count-' + rowId);
    if (countEl) {
      const parts = countEl.textContent.split('/');
      const limit = parseInt(parts[1]);
      const count = cell.textContent.length;
      const over = count > limit;
      countEl.textContent = `${count} / ${limit}`;
      countEl.style.color = over ? 'var(--rouge-doux)' : '#888';
    }
  } else {
    cell.contentEditable = 'true';
    cell.focus();
  }
}

// ── GENERATE INDIVIDUEL ───────────────────────────────────────
async function generateIndividuel() {
  const annee = document.getElementById('annee').value;
  const matiere = document.getElementById('matiere').value;
  const prenom = document.getElementById('prenom').value.trim();
  const observations = document.getElementById('observations').value.trim();

  if (!annee || !matiere || !prenom) {
    alert('Veuillez remplir l\'année, la matière et le prénom.');
    return;
  }

  const attentes = getSelectedAttentesInd();
  const attentesText = attentes.length > 0
    ? `Attentes évaluées : ${attentes.join('; ')}`
    : 'Attentes générales de la matière';

  const btn = document.getElementById('btn-gen-ind');
  btn.disabled = true;
  const loading = document.getElementById('loading-ind');
  loading.classList.add('visible');

  const prompt = `Tu es un expert en rédaction de bulletins scolaires pour les écoles de langue française catholiques de l'Ontario.

Matière : ${matiere}
Année d'études : ${annee}e année
${getBulletinTypeLabel(indBulletinType)}
Cote : ${selectedNiveauInd || 'non précisée'}
${attentesText}
Élève : ${prenom} (pronom : ${selectedPronom})
${observations ? 'Observations : ' + observations : ''}

Génère 3 versions de commentaires de bulletin en français pour cet élève.
Chaque version doit :
- Être différente dans le style et les formulations
- Mentionner des forces et des pistes de progrès
- Utiliser le bon pronom
- Avoir un ton professionnel et encourageant
- Ne pas commencer par le prénom

Utilise ce format :
===VERSION 1===
[commentaire]
===VERSION 2===
[commentaire]
===VERSION 3===
[commentaire]`;

  try {
    const response = await callClaude(prompt);
    const versions = parseVersions(response);
    renderVersionsInd(versions, matiere);
  } catch (err) {
    alert('Erreur lors de la génération : ' + err.message);
  }

  loading.classList.remove('visible');
  btn.disabled = false;
}

function parseVersions(text) {
  const versions = [];
  const blocks = text.split(/===VERSION \d+===/);
  blocks.forEach(b => { if (b.trim()) versions.push(b.trim()); });
  return versions.slice(0, 3);
}

function renderVersionsInd(versions, matiere) {
  const limit = CHAR_LIMITS[matiere] || 700;
  const container = document.getElementById('results-ind');
  container.classList.add('visible');
  container.innerHTML = '<div class="section-label" style="margin-bottom:12px;">Versions générées</div>';
  versions.forEach((v, i) => {
    const count = v.length;
    const over = count > limit;
    const card = document.createElement('div');
    card.className = 'comment-card';
    card.innerHTML = `
      <div class="comment-label">Version ${i + 1}</div>
      <div class="comment-text" id="ver-${i}" contenteditable="false">${v}</div>
      <div style="font-size:11px; color:${over ? 'var(--rouge-doux)' : '#888'}; margin-top:6px;" id="ver-count-${i}">${count} / ${limit} caractères</div>
      <div class="comment-actions">
        <button class="btn-secondary" onclick="toggleEditVer(${i})">✏️ Modifier</button>
        <button class="btn-primary" style="padding:8px 14px; font-size:12px;" onclick="copyVer(${i})">Copier</button>
      </div>`;
    container.appendChild(card);
  });
}

function toggleEditVer(i) {
  const el = document.getElementById('ver-' + i);
  el.contentEditable = el.contentEditable === 'true' ? 'false' : 'true';
  if (el.contentEditable === 'true') el.focus();
}

function copyVer(i) {
  const el = document.getElementById('ver-' + i);
  navigator.clipboard.writeText(el.textContent);
}

// ── HABILETÉS TAB ─────────────────────────────────────────────
const COTES_STATE = {};

const FORCES_PHRASES = {
  oral: {
    E: ["[Prénom] s'exprime avec aisance et assurance en français dans toutes les situations.", "[Prénom] communique ses idées clairement et enrichit les discussions par ses interventions de qualité."],
    T: ["[Prénom] s'exprime généralement bien en français et contribue positivement aux échanges.", "[Prénom] participe activement aux discussions et utilise le français avec confiance."],
    S: ["[Prénom] fait des efforts constants pour communiquer en français lors des activités de classe.", "[Prénom] utilise le français en classe et continue à développer sa fluidité à l'oral."],
    N: ["[Prénom] est encouragé(e) à prendre davantage d'initiatives pour communiquer en français.", "[Prénom] travaille à renforcer son utilisation du français dans les contextes scolaires."]
  },
  fiabilite: {
    E: ["[Prénom] remet toujours ses travaux dans les délais et assume ses responsabilités avec soin.", "[Prénom] fait preuve d'une fiabilité exemplaire : les tâches sont complètes, soignées et ponctuelles."],
    T: ["[Prénom] est généralement fiable et remet la plupart de ses travaux à temps.", "[Prénom] assume ses responsabilités scolaires avec sérieux et constance."],
    S: ["[Prénom] remet habituellement ses travaux, bien que des rappels soient parfois nécessaires.", "[Prénom] fait des efforts pour respecter les attentes en matière de fiabilité."],
    N: ["[Prénom] est invité(e) à développer de meilleures habitudes pour remettre ses travaux à temps.", "[Prénom] travaille à améliorer sa constance dans le respect des délais et des consignes."]
  },
  organisation: {
    E: ["[Prénom] gère son matériel et son temps de façon exemplaire, ce qui favorise sa réussite.", "[Prénom] fait preuve d'un excellent sens de l'organisation : son espace de travail et son agenda sont toujours en ordre."],
    T: ["[Prénom] s'organise bien et gère efficacement son matériel scolaire.", "[Prénom] démontre un bon sens de l'organisation dans la gestion de ses tâches et de son matériel."],
    S: ["[Prénom] fait des progrès dans l'organisation de son travail et de son matériel.", "[Prénom] s'améliore dans la gestion de son temps et de ses responsabilités scolaires."],
    N: ["[Prénom] est encouragé(e) à développer des stratégies d'organisation plus efficaces.", "[Prénom] bénéficierait de soutien pour améliorer l'organisation de son travail et de son matériel."]
  },
  autonomie: {
    E: ["[Prénom] travaille de façon très autonome et sait trouver des ressources pour surmonter les défis.", "[Prénom] fait preuve d'une grande autonomie : elle/il prend des initiatives et résout les problèmes de façon indépendante."],
    T: ["[Prénom] travaille généralement de façon autonome et cherche de l'aide au bon moment.", "[Prénom] démontre une bonne autonomie dans la réalisation de ses tâches scolaires."],
    S: ["[Prénom] développe son autonomie et fait des progrès dans sa capacité à travailler de façon indépendante.", "[Prénom] s'efforce de compléter ses tâches de façon plus autonome."],
    N: ["[Prénom] est encouragé(e) à tenter de résoudre les problèmes avant de demander de l'aide.", "[Prénom] travaille à développer sa confiance et son autonomie dans les tâches scolaires."]
  },
  collaboration: {
    E: ["[Prénom] collabore de façon exemplaire : elle/il écoute les autres, partage ses idées et contribue positivement au travail d'équipe.", "[Prénom] est un(e) coéquipier(ère) remarquable, toujours prêt(e) à soutenir ses pairs et à travailler dans un esprit d'équipe."],
    T: ["[Prénom] collabore bien avec ses pairs et contribue positivement aux travaux d'équipe.", "[Prénom] démontre un bon esprit de collaboration et respecte les idées des autres."],
    S: ["[Prénom] fait des efforts pour collaborer avec ses pairs lors des travaux d'équipe.", "[Prénom] développe ses habiletés de collaboration et participe aux activités de groupe."],
    N: ["[Prénom] est invité(e) à développer davantage son esprit de collaboration lors des travaux en équipe.", "[Prénom] travaille à améliorer sa façon d'interagir et de contribuer lors des activités collaboratives."]
  },
  initiative: {
    E: ["[Prénom] fait preuve d'un remarquable sens de l'initiative : elle/il cherche toujours à dépasser les attentes et propose des idées nouvelles.", "[Prénom] prend des initiatives de façon proactive et enrichit les apprentissages par sa curiosité et son leadership."],
    T: ["[Prénom] prend souvent des initiatives et cherche à approfondir ses apprentissages.", "[Prénom] démontre un bon sens de l'initiative et participe activement à la vie de la classe."],
    S: ["[Prénom] commence à prendre davantage d'initiatives dans son apprentissage.", "[Prénom] fait des efforts pour s'impliquer de façon plus proactive dans les activités de classe."],
    N: ["[Prénom] est encouragé(e) à prendre plus d'initiatives et à s'impliquer davantage dans ses apprentissages.", "[Prénom] bénéficierait de s'engager plus activement dans les activités et de proposer ses idées."]
  },
  autoregulation: {
    E: ["[Prénom] gère ses émotions et ses comportements de façon exemplaire, même dans des situations difficiles.", "[Prénom] fait preuve d'une excellente autorégulation : elle/il reconnaît ses besoins et utilise des stratégies efficaces."],
    T: ["[Prénom] gère généralement bien ses émotions et ses comportements en classe.", "[Prénom] utilise des stratégies d'autorégulation efficaces et maintient un comportement positif."],
    S: ["[Prénom] développe des stratégies pour mieux gérer ses émotions et ses comportements.", "[Prénom] fait des progrès dans sa capacité à s'autoréguler en situation de défi."],
    N: ["[Prénom] est soutenu(e) dans le développement de stratégies d'autorégulation plus efficaces.", "[Prénom] travaille à développer des outils pour mieux gérer ses émotions et ses réactions."]
  }
};

const PROCHAINES_PHRASES = {
  oral: ["continuer à utiliser le français dans tous les contextes, y compris lors des échanges informels", "enrichir son vocabulaire et prendre des risques linguistiques en français"],
  fiabilite: ["développer des stratégies pour respecter les délais de façon plus constante", "renforcer sa routine de vérification avant de remettre ses travaux"],
  organisation: ["développer un système personnel d'organisation de son agenda et de son matériel", "utiliser des outils de planification pour mieux gérer son temps"],
  autonomie: ["pratiquer des stratégies de résolution de problèmes avant de demander de l'aide", "développer sa confiance en ses propres capacités lors des tâches individuelles"],
  collaboration: ["pratiquer l'écoute active et le partage des responsabilités lors des travaux en équipe", "développer des stratégies pour contribuer positivement aux discussions de groupe"],
  initiative: ["se fixer des objectifs personnels et chercher à les dépasser", "s'impliquer de façon proactive dans les projets de classe et proposer des idées"],
  autoregulation: ["identifier et pratiquer des stratégies d'autorégulation efficaces en situation de stress", "reconnaître ses déclencheurs émotionnels et utiliser des stratégies de gestion apprises"]
};

const HAB_LABELS = {
  oral: "l'utilisation du français oral",
  fiabilite: "la fiabilité",
  organisation: "le sens de l'organisation",
  autonomie: "l'autonomie",
  collaboration: "l'esprit de collaboration",
  initiative: "le sens de l'initiative",
  autoregulation: "l'autorégulation"
};

function selectCoteNew(hab, cote) {
  COTES_STATE[hab] = cote;
  const container = document.getElementById('hab-' + hab);
  container.querySelectorAll('.cote-btn').forEach(b => {
    b.className = 'cote-btn';
    if (b.textContent.trim() === cote) {
      b.classList.add('sel-' + cote);
    }
  });
  renderForcesProchaines();
  assembleComment();
}

function renderForcesProchaines() {
  const forcesContainer = document.getElementById('forces-container');
  const prochinesContainer = document.getElementById('prochaines-container');

  const withCotes = Object.keys(COTES_STATE).filter(h => COTES_STATE[h]);
  if (withCotes.length === 0) {
    forcesContainer.innerHTML = '<p style="color:#999; font-style:italic; font-size:13px;">Sélectionnez d\'abord les cotes à l\'étape 1.</p>';
    prochinesContainer.innerHTML = '<p style="color:#999; font-style:italic; font-size:13px;">Sélectionnez d\'abord les cotes à l\'étape 1.</p>';
    return;
  }

  // Forces — show for habiletés with E or T cotes (strengths)
  forcesContainer.innerHTML = '';
  withCotes.forEach(hab => {
    const cote = COTES_STATE[hab];
    const phrases = FORCES_PHRASES[hab] && FORCES_PHRASES[hab][cote] ? FORCES_PHRASES[hab][cote] : [];
    const block = document.createElement('div');
    block.style.cssText = 'margin-bottom:12px; background:#fafaf8; border:1.5px solid var(--gris-clair); border-radius:8px; padding:12px;';
    block.innerHTML = `<div style="font-size:12px; font-weight:700; color:var(--bleu); margin-bottom:8px;">${HAB_LABELS[hab]} — ${cote}</div>`;
    phrases.forEach((phrase, idx) => {
      const label = document.createElement('label');
      label.style.cssText = 'display:flex; gap:8px; align-items:flex-start; font-size:13px; margin-bottom:6px; cursor:pointer;';
      label.innerHTML = `<input type="radio" name="force-${hab}" value="${idx}" style="accent-color:var(--bleu); margin-top:3px; flex-shrink:0;" onchange="assembleComment()"> <span>${phrase.replace('[Prénom]', document.getElementById('prenom-hab').value || '[Prénom]')}</span>`;
      block.appendChild(label);
    });
    forcesContainer.appendChild(block);
  });

  // Prochaines étapes
  prochinesContainer.innerHTML = '';
  withCotes.forEach(hab => {
    const phrases = PROCHAINES_PHRASES[hab] || [];
    const block = document.createElement('div');
    block.style.cssText = 'margin-bottom:12px; background:#fafaf8; border:1.5px solid var(--gris-clair); border-radius:8px; padding:12px;';
    block.innerHTML = `<div style="font-size:12px; font-weight:700; color:var(--bleu); margin-bottom:8px;">${HAB_LABELS[hab]}</div>`;
    phrases.forEach((phrase, idx) => {
      const label = document.createElement('label');
      label.style.cssText = 'display:flex; gap:8px; align-items:flex-start; font-size:13px; margin-bottom:6px; cursor:pointer;';
      label.innerHTML = `<input type="radio" name="prochaine-${hab}" value="${idx}" style="accent-color:var(--bleu); margin-top:3px; flex-shrink:0;" onchange="assembleComment()"> <span>${phrase}</span>`;
      block.appendChild(label);
    });
    prochinesContainer.appendChild(block);
  });
}

// ── ASSEMBLE HAB COMMENT ──────────────────────────────────────
function assembleComment() {
  const prenom = document.getElementById('prenom-hab').value.trim() || '[Prénom]';
  const nom = document.getElementById('nom-hab').value.trim();
  const pronom = selectedPronomHab;
  const periode = document.getElementById('periode-hab').value;

  // Gather selected force phrases
  const forcePhrases = [];
  document.querySelectorAll('[name^="force-"]').forEach(radio => {
    if (radio.checked) {
      const phrase = radio.parentElement.querySelector('span').textContent;
      forcePhrases.push(phrase.replace('[Prénom]', prenom));
    }
  });

  // Gather selected prochaines phrases
  const prochainePhrases = [];
  document.querySelectorAll('[name^="prochaine-"]').forEach(radio => {
    if (radio.checked) {
      const phrase = radio.parentElement.querySelector('span').textContent;
      prochainePhrases.push(phrase);
    }
  });

  // PEI sentence
  let peiSentence = '';
  const peiCheck = document.getElementById('pei-check');
  if (peiCheck && peiCheck.checked) {
    const peiHabs = Array.from(document.querySelectorAll('.pei-hab-cb:checked')).map(cb => cb.value);
    if (peiHabs.length > 0) {
      peiSentence = `Les attentes liées à ${peiHabs.join(', ')} sont évaluées conformément aux objectifs du programme d'éducation individuel (PEI) de ${pronom === 'elle' ? 'l\'élève' : pronom === 'il' ? 'l\'élève' : 'l\'élève'}.`;
    }
  }

  // Build comment
  const parts = [];

  if (forcePhrases.length > 0) {
    parts.push(forcePhrases.join(' '));
  }

  if (prochainePhrases.length > 0) {
    const pronSujet = pronom === 'elle' ? 'Elle' : pronom === 'il' ? 'Il' : 'Iel';
    const objectif = periode === 'etape1'
      ? `Pour la prochaine étape, ${pronSujet.toLowerCase()} est invité(e) à ${prochainePhrases.join(' et à ')}.`
      : `Pour continuer à progresser, ${pronSujet.toLowerCase()} est encouragé(e) à ${prochainePhrases.join(' et à ')}.`;
    parts.push(objectif);
  }

  if (peiSentence) parts.push(peiSentence);

  const comment = parts.join(' ').trim();
  const box = document.getElementById('hab-assembled-box');
  if (comment) {
    box.textContent = comment;
  } else {
    box.innerHTML = '<p style="color:#999; font-style:italic; font-size:13px;">Le commentaire s\'assemblera ici au fur et à mesure de vos sélections.</p>';
  }

  // Update char count
  const count = comment.length;
  const limit = CHAR_LIMITS['HH'];
  const countEl = document.getElementById('hab-char-count');
  if (countEl) {
    countEl.textContent = `${count} / ${limit} caractères`;
    countEl.style.color = count > limit ? 'var(--rouge-doux)' : count > limit * 0.9 ? 'var(--orange-doux)' : '#777';
  }
}

function toggleEditHab() {
  const box = document.getElementById('hab-assembled-box');
  box.contentEditable = box.contentEditable === 'true' ? 'false' : 'true';
  if (box.contentEditable === 'true') box.focus();
}

// ── SAVE / ROSTER HAB ─────────────────────────────────────────
const habRoster = [];

function saveHabComment() {
  const prenom = document.getElementById('prenom-hab').value.trim();
  const nom = document.getElementById('nom-hab').value.trim();
  const comment = document.getElementById('hab-assembled-box').textContent.trim();

  if (!prenom || !comment || comment.includes('assemblera ici')) {
    alert('Veuillez remplir le prénom et assembler un commentaire avant de sauvegarder.');
    return;
  }

  const existing = habRoster.findIndex(e => e.prenom === prenom && e.nom === nom);
  if (existing >= 0) {
    habRoster[existing].comment = comment;
    habRoster[existing].cotes = { ...COTES_STATE };
  } else {
    habRoster.push({ prenom, nom, comment, cotes: { ...COTES_STATE } });
  }
  renderRoster();
}

function renderRoster() {
  const section = document.getElementById('hab-roster-section');
  const roster = document.getElementById('hab-roster');
  section.style.display = 'block';
  roster.innerHTML = '';
  habRoster.forEach((e, i) => {
    const btn = document.createElement('button');
    btn.className = 'btn-secondary';
    btn.style.cssText = 'font-size:12px; padding:6px 12px;';
    btn.textContent = `${e.nom ? e.nom + ', ' : ''}${e.prenom}`;
    btn.onclick = () => loadEleve(i);
    roster.appendChild(btn);
  });
}

function loadEleve(i) {
  const e = habRoster[i];
  document.getElementById('prenom-hab').value = e.prenom;
  document.getElementById('nom-hab').value = e.nom || '';
  Object.keys(e.cotes).forEach(hab => {
    if (e.cotes[hab]) selectCoteNew(hab, e.cotes[hab]);
  });
  document.getElementById('hab-assembled-box').textContent = e.comment;
  const limit = CHAR_LIMITS['HH'];
  const count = e.comment.length;
  document.getElementById('hab-char-count').textContent = `${count} / ${limit} caractères`;
}

// ── PEI TOGGLE ────────────────────────────────────────────────
function togglePEI() {
  const checked = document.getElementById('pei-check').checked;
  document.getElementById('pei-habs').style.display = checked ? 'block' : 'none';
  assembleComment();
}

// ── TÉLÉCHARGER WORD (HTML) ───────────────────────────────────
function downloadWord() {
  const annee = document.getElementById('classe-annee').value;
  const content = document.getElementById('results-classe-content').innerHTML;
  const html = buildDownloadHTML(`Bulletin — ${annee}e année`, content);
  triggerDownload(html, `bulletins-${annee}e-annee.html`);
}

function downloadCombinedWord() {
  let content = '<h1 style="font-family:Calibri,sans-serif; color:#1a3a5c;">Habiletés et habitudes de travail</h1>';
  habRoster.forEach(e => {
    content += `
      <div style="margin-bottom:20px; border:1px solid #ddd; padding:16px; border-radius:6px;">
        <h3 style="font-family:Calibri,sans-serif; margin:0 0 6px; color:#1a3a5c;">${e.nom ? e.nom + ', ' : ''}${e.prenom}</h3>
        <p style="font-family:Calibri,sans-serif; font-size:11pt; line-height:1.5; margin:0;">${e.comment}</p>
      </div>`;
  });
  const html = buildDownloadHTML('Habiletés et habitudes de travail', content);
  triggerDownload(html, 'habiletes-habitudes.html');
}

function buildDownloadHTML(title, content) {
  return `<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<title>${title}</title>
<style>
  body { font-family: Calibri, sans-serif; font-size: 11pt; line-height: 1.5; margin: 2cm; color: #222; }
  h1 { color: #1a3a5c; font-size: 16pt; margin-bottom: 20px; }
  .subject-results-title { font-weight: bold; font-size: 13pt; color: #1a3a5c; margin: 20px 0 4px; }
  table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
  th { background: #1a3a5c; color: white; padding: 8px 10px; font-size: 10pt; text-align: left; }
  td { padding: 8px 10px; border-bottom: 1px solid #ddd; font-size: 10pt; vertical-align: top; }
  tr:nth-child(even) td { background: #f9f9f9; }
  .edit-cell { display: none; }
  button { display: none; }
</style>
</head>
<body>
<h1>${title}</h1>
${content}
</body>
</html>`;
}

function triggerDownload(html, filename) {
  const blob = new Blob([html], { type: 'text/html;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

// ── SHEET HEADERS ─────────────────────────────────────────────
function copySheetHeaders(type) {
  const headers = [
    'Nom', 'Prénom', 'Pronom',
    'Mathématiques', 'Français', 'Études sociales', 'Sciences et technologie',
    'Arts (arts visuels)', 'Arts (musique)', 'Arts (danse)', 'Arts (art dramatique)',
    'Éducation physique et santé', 'Enseignement religieux', 'Observations'
  ].join('\t');

  navigator.clipboard.writeText(headers).then(() => {
    const successEl = document.getElementById('headers-success');
    successEl.style.display = 'block';
    const btnP = document.getElementById('btn-copy-progres');
    const btnS = document.getElementById('btn-copy-scolaire');
    if (type === 'progres') { btnP.textContent = '✅ En-têtes copiées !'; }
    else { btnS.textContent = '✅ En-têtes copiées !'; }
    setTimeout(() => {
      successEl.style.display = 'none';
      btnP.textContent = '📋 En-têtes — Bulletin de progrès (T/B/D)';
      btnS.textContent = '📋 En-têtes — Bulletin scolaire (A/B/C/D)';
    }, 3000);
  });
}

// ── CLAUDE API CALL ───────────────────────────────────────────
async function callClaude(prompt) {
  const response = await fetch(RAILWAY_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 8000,
      messages: [{ role: 'user', content: prompt }]
    })
  });

  if (!response.ok) {
    const err = await response.text();
    throw new Error(`API error ${response.status}: ${err}`);
  }

  const data = await response.json();

  // Handle both direct API response and proxied response
  if (data.content && data.content[0]) {
    return data.content[0].text;
  } else if (data.text) {
    return data.text;
  } else {
    throw new Error('Réponse API inattendue: ' + JSON.stringify(data));
  }
}

// ── INIT ──────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderNiveauButtonsInd();
  renderForcesProchaines();
});
