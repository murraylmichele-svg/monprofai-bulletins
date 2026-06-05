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
  saveAttentesState();
  const annee = document.getElementById('classe-annee').value;
  updateClasseAttentes();
  if (annee) restoreAttentesState(annee);
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
  // Only reassemble if there's already a comment built — don't wipe manual edits
  const box = document.getElementById('hab-assembled-box');
  const hasContent = box && box.textContent.trim() && !box.textContent.includes('assemblera ici');
  if (hasContent) assembleComment();
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
          saveAttentesState(); // persist across tab switches
        });
        list.appendChild(item);
      });
    });

    // Inject Français notions checklist inside the Français section body
    if (matiere === 'Français') {
      renderFrancaisNotions(section.querySelector('.matiere-body'));
    }
  });

  // Note: attentes are NOT auto-restored on grade change to avoid confusion
  // State is only preserved within the same session tab switch
}

function saveAttentesState() {
  const annee = document.getElementById('classe-annee').value;
  const state = {};
  document.querySelectorAll('.attente-item input[type="checkbox"]').forEach(cb => {
    const label = cb.closest('label');
    const matiere = label ? label.dataset.matiere : null;
    const text = label ? label.querySelector('span').textContent : null;
    if (matiere && text) {
      if (!state[matiere]) state[matiere] = [];
      if (cb.checked) state[matiere].push(text);
    }
  });
  // Also save selected Français notions
  const francaisNotions = [];
  document.querySelectorAll('.francais-notion-cb:checked').forEach(cb => {
    const span = cb.closest('label') ? cb.closest('label').querySelector('span') : null;
    if (span) francaisNotions.push(span.textContent);
  });
  state['__francaisNotions__'] = francaisNotions;
  state['__annee__'] = annee;
  try {
    sessionStorage.setItem('monprof_attentes', JSON.stringify(state));
  } catch(e) {}
}

function restoreAttentesState(annee) {
  try {
    const saved = sessionStorage.getItem('monprof_attentes');
    if (!saved) return;
    const state = JSON.parse(saved);
    if (state['__annee__'] !== annee) return; // different grade - don't restore
    document.querySelectorAll('.attente-item input[type="checkbox"]').forEach(cb => {
      const label = cb.closest('label');
      const matiere = label ? label.dataset.matiere : null;
      const text = label ? label.querySelector('span').textContent : null;
      if (matiere && text && state[matiere] && state[matiere].includes(text)) {
        cb.checked = true;
        label.classList.add('selected');
      }
    });
    // Restore Français notions
    const savedNotions = state['__francaisNotions__'] || [];
    if (savedNotions.length > 0) {
      document.querySelectorAll('.francais-notion-cb').forEach(cb => {
        const span = cb.closest('label') ? cb.closest('label').querySelector('span') : null;
        if (span && savedNotions.includes(span.textContent)) {
          cb.checked = true;
          const label = cb.closest('label');
          if (label) { label.style.fontWeight = '600'; label.style.color = 'var(--bleu)'; }
        }
      });
    }
  } catch(e) {}
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

// ── PARSE CLASSE PASTE ────────────────────────────────────
// Column layout (0-indexed) matches Google Sheets template:
// 0=Nom 1=Prénom 2=Pronom
// 3=Cote Maths 4=Obs Maths
// 5=Cote Français 6=Obs Français
// 7=Cote Anglais 8=Obs Anglais
// 9=Cote ÉtSoc 10=Obs ÉtSoc
// 11=Cote Sciences 12=Obs Sciences
// 13=Cote Arts visuels 14=Obs Arts visuels
// 15=Cote Arts musique 16=Obs Arts musique
// 17=Cote Arts danse 18=Obs Arts danse
// 19=Cote Arts dram 20=Obs Arts dram
// 21=Cote ÉPS 22=Obs ÉPS
// 23=Cote Religion 24=Obs Religion
function parsePaste(raw) {
  var lines = raw.trim().split('\n').filter(function(l) { return l.trim(); });

  function isCote(val) {
    if (!val) return false;
    return /^[ABCDT][+\-]?$/.test(val.trim());
  }

  function cleanCote(val) {
    if (!val) return '';
    val = val.trim();
    var match = val.match(/^([ABCDT][+\-]?)$/i);
    return match ? match[1].toUpperCase() : '';
  }

  // Skip header rows
  var dataLines = lines.filter(function(line) {
    var cols = line.split('\t').map(function(c) { return c.trim(); });
    var first = (cols[0] || '').toLowerCase();
    var headerWords = ['nom', 'name', 'élève', 'prénom', 'famille'];
    for (var i = 0; i < headerWords.length; i++) {
      if (first.indexOf(headerWords[i]) !== -1) return false;
    }
    // Skip if col3 has value but isn't a cote (header text in grade column)
    var gradeVal = (cols[3] || '').trim();
    if (gradeVal.length > 3) return false;
    return true;
  });

  return dataLines.map(function(line) {
    var cols = line.split('\t').map(function(c) { return c.trim(); });

    // Helper: get cote at position, handling potential column shift
    // If the expected obs column looks like a cote, the obs was empty and cols shifted
    function getCote(coteIdx) {
      return cleanCote(cols[coteIdx] || '');
    }
    function getObs(obsIdx, nextCoteIdx) {
      var val = cols[obsIdx] || '';
      // If this looks like a cote and next col also looks like a cote, obs was skipped
      if (isCote(val) && isCote(cols[nextCoteIdx] || '')) return '';
      return val;
    }

    return {
      nom: cols[0] || '',
      prenom: cols[1] || '',
      pronom: (cols[2] || 'elle').toLowerCase(),
      'Mathématiques': getCote(3),
      'Mathématiques_obs': cols[4] || '',
      'Français': getCote(5),
      'Anglais': getCote(7),
      'Anglais_obs': cols[8] || '',
      'Études sociales': getCote(9),
      'Études sociales_obs': cols[10] || '',
      'Sciences et technologie': getCote(11),
      'Sciences et technologie_obs': cols[12] || '',
      'Arts (arts visuels)': getCote(13),
      'Arts (arts visuels)_obs': cols[14] || '',
      'Arts (musique)': getCote(15),
      'Arts (musique)_obs': cols[16] || '',
      'Arts (danse)': getCote(17),
      'Arts (danse)_obs': cols[18] || '',
      'Arts (art dramatique)': getCote(19),
      'Arts (art dramatique)_obs': cols[20] || '',
      'Éducation physique et santé': getCote(21),
      'Éducation physique et santé_obs': cols[22] || '',
      'Enseignement religieux': getCote(23),
      'Enseignement religieux_obs': cols[24] || '',
      observations: cols[25] || ''
    };
  }).filter(function(e) {
    return e.nom.trim() !== '' || e.prenom.trim() !== '';
  });
}
// ── FRANÇAIS NOTIONS CHECKLIST ────────────────────────────
function renderFrancaisNotions(container) {
  var wrapper = document.createElement('div');
  wrapper.id = 'francais-notions-wrapper';
  wrapper.style.cssText = 'margin-top:12px; border:1.5px solid var(--bleu); border-radius:8px; overflow:hidden;';

  var toggleSpan = document.createElement('span');
  toggleSpan.textContent = '▲';

  var panelHeader = document.createElement('div');
  panelHeader.style.cssText = 'background:var(--bleu); color:#fff; padding:10px 14px; font-weight:700; font-size:13px; cursor:pointer; display:flex; justify-content:space-between; align-items:center;';
  var titleSpan = document.createElement('span');
  titleSpan.textContent = 'Notions enseignées ce trimestre — Français';
  panelHeader.appendChild(titleSpan);
  panelHeader.appendChild(toggleSpan);
  wrapper.appendChild(panelHeader);

  var body = document.createElement('div');
  body.style.cssText = 'padding:12px 14px; background:#f8fbff; display:block;';

  var hint = document.createElement('p');
  hint.style.cssText = 'font-size:11px; color:#666; font-style:italic; margin:0 0 10px;';
  hint.textContent = 'Cochez les notions travaillées ce trimestre. Le commentaire sera adapté selon la cote de chaque élève.';
  body.appendChild(hint);

  var btnRow = document.createElement('div');
  btnRow.style.cssText = 'display:flex; gap:8px; margin-bottom:12px;';
  var btnAll = document.createElement('button');
  btnAll.textContent = 'Tout sélectionner';
  btnAll.style.cssText = 'font-size:11px; padding:3px 10px; background:var(--bleu); color:#fff; border:none; border-radius:4px; cursor:pointer;';
  btnAll.onclick = function() { toggleAllFrancaisNotions(true); };
  var btnNone = document.createElement('button');
  btnNone.textContent = 'Tout désélectionner';
  btnNone.style.cssText = 'font-size:11px; padding:3px 10px; background:#888; color:#fff; border:none; border-radius:4px; cursor:pointer;';
  btnNone.onclick = function() { toggleAllFrancaisNotions(false); };
  btnRow.appendChild(btnAll);
  btnRow.appendChild(btnNone);
  body.appendChild(btnRow);

  Object.keys(FRANCAIS_NOTIONS).forEach(function(section) {
    var sectionHeader = document.createElement('div');
    sectionHeader.style.cssText = 'font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:0.07em; color:var(--bleu); padding:6px 0 3px; margin-top:8px; border-bottom:1px solid #d0e4f7;';
    sectionHeader.textContent = section;
    body.appendChild(sectionHeader);
    FRANCAIS_NOTIONS[section].forEach(function(notion) {
      var label = document.createElement('label');
      label.className = 'francais-notion-item';
      label.style.cssText = 'display:flex; align-items:flex-start; gap:8px; padding:4px 0; font-size:12px; color:#333; cursor:pointer;';
      var cb = document.createElement('input');
      cb.type = 'checkbox';
      cb.className = 'francais-notion-cb';
      cb.style.cssText = 'accent-color:var(--bleu); flex-shrink:0; margin-top:2px;';
      cb.addEventListener('change', function() {
        label.style.fontWeight = this.checked ? '600' : '400';
        label.style.color = this.checked ? 'var(--bleu)' : '#333';
      });
      var txt = document.createElement('span');
      txt.textContent = notion;
      label.appendChild(cb);
      label.appendChild(txt);
      body.appendChild(label);
    });
  });

  wrapper.appendChild(body);
  container.appendChild(wrapper);

  panelHeader.addEventListener('click', function() {
    var isOpen = body.style.display !== 'none';
    body.style.display = isOpen ? 'none' : 'block';
    toggleSpan.textContent = isOpen ? '▼' : '▲';
  });
}

function toggleAllFrancaisNotions(checked) {
  document.querySelectorAll('.francais-notion-cb').forEach(cb => {
    cb.checked = checked;
    const label = cb.closest('label');
    if (label) {
      label.style.fontWeight = checked ? '600' : '400';
      label.style.color = checked ? 'var(--bleu)' : '#333';
    }
  });
}

function getSelectedFrancaisNotions() {
  const selected = [];
  document.querySelectorAll('.francais-notion-cb:checked').forEach(cb => {
    const label = cb.closest('label');
    if (label) selected.push(label.querySelector('span').textContent);
  });
  return selected;
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

 const BATCH_SIZE = 8;
  const matieresActives = Object.keys(matiereMap);
  if (matieresActives.length === 0) { alert('Aucune cote trouvée dans la liste.'); btn.disabled = false; return; }

  const allResults = {};
  eleves.forEach(e => { allResults[`${e.nom} ${e.prenom}`] = {}; });

  // Count total batches for progress bar
  let totalBatches = 0;
  matieresActives.forEach(m => {
    totalBatches += Math.ceil(matiereMap[m].length / BATCH_SIZE);
  });
  let batchDone = 0;

  for (let i = 0; i < matieresActives.length; i++) {
    const matiere = matieresActives[i];
    const studentsInMatiere = matiereMap[matiere];

    const attentesMatiere = attentes[matiere] || [];
    let attentesText = attentesMatiere.length > 0
      ? `Attentes évaluées : ${attentesMatiere.join('; ')}`
      : 'Attentes générales de la matière';

    if (matiere === 'Français') {
      const notions = getSelectedFrancaisNotions();
      if (notions.length > 0) {
        attentesText += `\nNotions enseignées ce trimestre : ${notions.join('; ')}`;
      }
    }

    // Split students into batches of BATCH_SIZE
    for (let b = 0; b < studentsInMatiere.length; b += BATCH_SIZE) {
      const batch = studentsInMatiere.slice(b, b + BATCH_SIZE);
      const batchNum = Math.floor(b / BATCH_SIZE) + 1;
      const totalBatchesForMatiere = Math.ceil(studentsInMatiere.length / BATCH_SIZE);

      const pct = Math.round((batchDone / totalBatches) * 100);
      progressFill.style.width = pct + '%';
      progressText.textContent = totalBatchesForMatiere > 1
        ? `Génération pour ${matiere} — groupe ${batchNum}/${totalBatchesForMatiere}...`
        : `Génération pour ${matiere}...`;

      const prompt = buildClassePrompt(matiere, annee, batch, attentesText, bulletinType);

      try {
        const response = await callClaude(prompt);
        const parsed = parseClasseResponse(response, batch, matiere);
        parsed.forEach(({ eleve, commentaire }) => {
          const key = `${eleve.nom} ${eleve.prenom}`;
          if (!allResults[key]) allResults[key] = {};
          allResults[key][matiere] = { cote: eleve[matiere], commentaire };
        });
      } catch (err) {
        console.error('Erreur pour', matiere, 'groupe', batchNum, err);
      }

      batchDone++;
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
          <div style="font-size:11px; font-weight:${over ? '700' : '400'}; color:${over ? 'var(--rouge-doux)' : '#666'}; margin-top:6px; padding:2px 6px; background:${over ? '#fff0f0' : '#f4f4f4'}; border-radius:4px; display:inline-block;" id="count-${rowId}">${charCount} / ${limit}</div>
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
    const subjectObs = e[matiere + '_obs'] || e.observations || '';
    const obs = subjectObs ? ' [Note : ' + subjectObs + ']' : '';
    return '- ' + e.prenom + ' ' + e.nom + ' (' + e.pronom + ') : cote ' + e[matiere] + obs;
  }).join('\n');

  const limit = CHAR_LIMITS[matiere] || 700;
  const lines = [
    'Tu es un expert en redaction de bulletins scolaires pour les ecoles de langue francaise catholiques de l\'Ontario.',
    '',
    'Matiere : ' + matiere,
    'Annee : ' + annee + 'e annee',
    typeLabel,
    attentesText,
    '',
    'Tu dois generer un commentaire pour CHACUN des ' + eleves.length + ' eleves ci-dessous.',
    'IMPORTANT : Produire exactement ' + eleves.length + ' commentaire(s), sans en omettre aucun.',
    '',
    'REGLES ABSOLUES :',
    '- Commencer par le prenom de l\'eleve',
    '- Utiliser le pronom indique entre parentheses pour TOUS les accords',
    '- Si pronom il : formes masculines (encourage, invite, motive)',
    '- Si pronom elle : formes feminines (encouragee, invitee, motivee)',
    '- Ne jamais melanger les pronoms',
    '- Mentionner forces et pistes de progres',
    '- Respecter la limite de ' + limit + ' caracteres MAXIMUM',
    '- Viser entre 80% et 95% de cette limite',
    '- Ton professionnel, bienveillant et encourageant',
    '- Jamais je ou nous - ton impersonnel uniquement',
    '',
    'Eleves (prenom nom - pronom - cote) :',
    elevesList,
    '',
    'Format OBLIGATOIRE :',
    '===ELEVE: [Prenom] [Nom]===',
    '[commentaire]',
    '===FIN===',
    '',
    'Repete ce bloc pour chacun des ' + eleves.length + ' eleves. Ne saute aucun eleve.'
  ];
  return lines.join('\n');
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
    // Live counter while editing
    const countEl = document.getElementById('count-' + rowId);
    if (countEl) {
      const parts = countEl.textContent.split('/');
      const limit = parseInt(parts[1]);
      cell.addEventListener('input', function() {
        const count = cell.textContent.length;
        const over = count > limit;
        countEl.textContent = count + ' / ' + limit;
        countEl.style.color = over ? 'var(--rouge-doux)' : '#888';
        countEl.style.fontWeight = over ? '700' : '400';
      });
    }
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
- Commencer OBLIGATOIREMENT par le prénom de l'élève (ex: "Sophie démontre...", "Marc maîtrise...")
- Utiliser ensuite le bon pronom (elle/il/iel) naturellement dans le reste du commentaire

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
    E: [
      "s'exprime avec aisance et assurance en français dans toutes les situations.",
      "communique ses idées clairement et enrichit les discussions par ses interventions de qualité.",
      "utilise un vocabulaire riche et varié et s'exprime avec fluidité en français.",
      "prend la parole avec confiance et articule ses pensées de façon précise et organisée."
    ],
    T: [
      "s'exprime généralement bien en français et contribue positivement aux échanges.",
      "participe activement aux discussions et utilise le français avec confiance.",
      "communique ses idées de façon claire et respecte les règles de la communication orale.",
      "s'exprime avec aisance dans la plupart des contextes et enrichit les échanges de la classe."
    ],
    S: [
      "fait des efforts constants pour communiquer en français lors des activités de classe.",
      "utilise le français en classe et continue à développer sa fluidité à l'oral.",
      "participe aux échanges et fait des progrès dans l'utilisation du français oral.",
      "s'améliore dans sa capacité à exprimer ses idées en français lors des activités."
    ],
    N: [
      "est encouragé(e) à prendre davantage d'initiatives pour communiquer en français.",
      "travaille à renforcer son utilisation du français dans les contextes scolaires.",
      "est invité(e) à s'exprimer plus régulièrement en français lors des discussions et des activités.",
      "bénéficierait de pratiquer davantage la communication orale en français au quotidien."
    ]
  },
  fiabilite: {
    E: [
      "remet toujours ses travaux dans les délais et assume ses responsabilités avec soin.",
      "fait preuve d'une fiabilité exemplaire : les tâches sont complètes, soignées et ponctuelles.",
      "respecte toutes les échéances et produit un travail de qualité constante.",
      "démontre un sens aigu des responsabilités et peut toujours compter sur sa propre constance."
    ],
    T: [
      "est généralement fiable et remet la plupart de ses travaux à temps.",
      "assume ses responsabilités scolaires avec sérieux et constance.",
      "fait preuve de fiabilité dans la majorité des situations et respecte les consignes données.",
      "remet ses travaux dans les délais et démontre un bon sens des responsabilités."
    ],
    S: [
      "remet habituellement ses travaux, bien que des rappels soient parfois nécessaires.",
      "fait des efforts pour respecter les attentes en matière de fiabilité.",
      "progresse dans le respect des délais et des responsabilités scolaires.",
      "s'améliore dans la remise de ses travaux et dans le suivi des consignes."
    ],
    N: [
      "est invité(e) à développer de meilleures habitudes pour remettre ses travaux à temps.",
      "travaille à améliorer sa constance dans le respect des délais et des consignes.",
      "gagnerait à développer des stratégies pour mieux gérer ses responsabilités scolaires.",
      "est encouragé(e) à prendre ses engagements scolaires plus au sérieux et de façon constante."
    ]
  },
  organisation: {
    E: [
      "gère son matériel et son temps de façon exemplaire, ce qui favorise sa réussite.",
      "fait preuve d'un excellent sens de l'organisation : son espace de travail et son agenda sont toujours en ordre.",
      "planifie son travail avec méthode et utilise efficacement les outils organisationnels à sa disposition.",
      "démontre une organisation irréprochable qui lui permet d'aborder les tâches avec sérénité et efficacité."
    ],
    T: [
      "s'organise bien et gère efficacement son matériel scolaire.",
      "démontre un bon sens de l'organisation dans la gestion de ses tâches et de son matériel.",
      "utilise des stratégies organisationnelles efficaces pour gérer son travail et ses responsabilités.",
      "maintient un espace de travail ordonné et gère son temps de façon satisfaisante."
    ],
    S: [
      "fait des progrès dans l'organisation de son travail et de son matériel.",
      "s'améliore dans la gestion de son temps et de ses responsabilités scolaires.",
      "développe des stratégies pour mieux s'organiser et gérer ses tâches quotidiennes.",
      "fait des efforts pour maintenir son matériel en ordre et respecter les échéances."
    ],
    N: [
      "est encouragé(e) à développer des stratégies d'organisation plus efficaces.",
      "bénéficierait de soutien pour améliorer l'organisation de son travail et de son matériel.",
      "gagnerait à utiliser des outils de planification pour mieux gérer son temps et ses responsabilités.",
      "est invité(e) à développer de meilleures habitudes organisationnelles pour favoriser sa réussite."
    ]
  },
  autonomie: {
    E: [
      "travaille de façon très autonome et sait trouver des ressources pour surmonter les défis.",
      "fait preuve d'une grande autonomie : elle/il prend des initiatives et résout les problèmes de façon indépendante.",
      "aborde les tâches avec confiance et persévère de façon autonome face aux difficultés.",
      "démontre une autonomie remarquable : elle/il gère son travail de façon indépendante et efficace."
    ],
    T: [
      "travaille généralement de façon autonome et cherche de l'aide au bon moment.",
      "démontre une bonne autonomie dans la réalisation de ses tâches scolaires.",
      "complète la plupart de ses tâches de façon indépendante et sait quand demander de l'aide.",
      "fait preuve d'une bonne capacité à travailler seul(e) et à gérer son apprentissage."
    ],
    S: [
      "développe son autonomie et fait des progrès dans sa capacité à travailler de façon indépendante.",
      "s'efforce de compléter ses tâches de façon plus autonome.",
      "fait des efforts pour travailler de façon plus indépendante et recourir moins souvent à l'aide.",
      "progresse dans son autonomie et développe sa confiance lors des tâches individuelles."
    ],
    N: [
      "est encouragé(e) à tenter de résoudre les problèmes avant de demander de l'aide.",
      "travaille à développer sa confiance et son autonomie dans les tâches scolaires.",
      "gagnerait à développer des stratégies pour travailler de façon plus indépendante.",
      "est invité(e) à persévérer davantage avant de chercher l'aide de l'enseignant(e)."
    ]
  },
  collaboration: {
    E: [
      "collabore de façon exemplaire : elle/il écoute les autres, partage ses idées et contribue positivement au travail d'équipe.",
      "est un(e) coéquipier(ère) remarquable, toujours prêt(e) à soutenir ses pairs et à travailler dans un esprit d'équipe.",
      "démontre d'excellentes habiletés de collaboration : elle/il valorise les idées des autres et contribue avec enthousiasme.",
      "joue un rôle positif dans les travaux d'équipe et encourage ses coéquipiers avec bienveillance."
    ],
    T: [
      "collabore bien avec ses pairs et contribue positivement aux travaux d'équipe.",
      "démontre un bon esprit de collaboration et respecte les idées des autres.",
      "participe activement aux activités de groupe et fait preuve d'écoute envers ses pairs.",
      "travaille bien en équipe et s'assure que chacun peut contribuer au projet commun."
    ],
    S: [
      "fait des efforts pour collaborer avec ses pairs lors des travaux d'équipe.",
      "développe ses habiletés de collaboration et participe aux activités de groupe.",
      "progresse dans sa capacité à travailler en équipe et à respecter les idées des autres.",
      "s'améliore dans son rôle de coéquipier(ère) et fait des efforts pour contribuer au groupe."
    ],
    N: [
      "est invité(e) à développer davantage son esprit de collaboration lors des travaux en équipe.",
      "travaille à améliorer sa façon d'interagir et de contribuer lors des activités collaboratives.",
      "gagnerait à pratiquer l'écoute active et le partage des responsabilités dans les travaux de groupe.",
      "est encouragé(e) à s'engager plus activement dans les projets d'équipe et à respecter les rôles de chacun."
    ]
  },
  initiative: {
    E: [
      "fait preuve d'un remarquable sens de l'initiative : elle/il cherche toujours à dépasser les attentes et propose des idées nouvelles.",
      "prend des initiatives de façon proactive et enrichit les apprentissages par sa curiosité et son leadership.",
      "va au-delà des attentes et s'engage avec enthousiasme dans des projets qui stimulent sa créativité.",
      "démontre un leadership naturel et propose régulièrement des idées originales qui enrichissent la classe."
    ],
    T: [
      "prend souvent des initiatives et cherche à approfondir ses apprentissages.",
      "démontre un bon sens de l'initiative et participe activement à la vie de la classe.",
      "s'engage avec enthousiasme dans les projets et propose régulièrement des idées pertinentes.",
      "fait preuve d'initiative dans son travail et cherche souvent à en apprendre davantage."
    ],
    S: [
      "commence à prendre davantage d'initiatives dans son apprentissage.",
      "fait des efforts pour s'impliquer de façon plus proactive dans les activités de classe.",
      "progresse dans sa capacité à prendre des initiatives et à s'engager dans son apprentissage.",
      "développe son sens de l'initiative et commence à proposer ses idées avec plus de confiance."
    ],
    N: [
      "est encouragé(e) à prendre plus d'initiatives et à s'impliquer davantage dans ses apprentissages.",
      "bénéficierait de s'engager plus activement dans les activités et de proposer ses idées.",
      "gagnerait à se fixer des défis personnels et à chercher à dépasser les attentes minimales.",
      "est invité(e) à s'impliquer davantage dans les projets et à prendre davantage d'initiatives."
    ]
  },
  autoregulation: {
    E: [
      "gère ses émotions et ses comportements de façon exemplaire, même dans des situations difficiles.",
      "fait preuve d'une excellente autorégulation : elle/il reconnaît ses besoins et utilise des stratégies efficaces.",
      "démontre une maturité remarquable dans la gestion de ses émotions et de ses réactions.",
      "utilise des stratégies d'autorégulation variées et efficaces qui lui permettent de maintenir un comportement positif."
    ],
    T: [
      "gère généralement bien ses émotions et ses comportements en classe.",
      "utilise des stratégies d'autorégulation efficaces et maintient un comportement positif.",
      "reconnaît ses besoins émotionnels et utilise des stratégies appropriées pour y répondre.",
      "démontre une bonne capacité à gérer ses réactions et à maintenir un environnement de travail positif."
    ],
    S: [
      "développe des stratégies pour mieux gérer ses émotions et ses comportements.",
      "fait des progrès dans sa capacité à s'autoréguler en situation de défi.",
      "s'améliore dans la gestion de ses émotions et fait des efforts pour maintenir un comportement approprié.",
      "apprend à utiliser des stratégies d'autorégulation et progresse dans ce domaine."
    ],
    N: [
      "est soutenu(e) dans le développement de stratégies d'autorégulation plus efficaces.",
      "travaille à développer des outils pour mieux gérer ses émotions et ses réactions.",
      "bénéficierait d'un soutien pour développer des stratégies adaptées à la gestion de ses émotions.",
      "est encouragé(e) à pratiquer les stratégies d'autorégulation apprises pour mieux gérer les situations difficiles."
    ]
  }
};

const PROCHAINES_PHRASES = {
  oral: [
    "continuer à utiliser le français dans tous les contextes, y compris lors des échanges informels",
    "enrichir son vocabulaire et prendre des risques linguistiques en français",
    "s'exercer à structurer ses interventions orales de façon plus claire et organisée",
    "participer plus régulièrement aux discussions en classe et oser s'exprimer en français"
  ],
  fiabilite: [
    "développer des stratégies pour respecter les délais de façon plus constante",
    "renforcer sa routine de vérification avant de remettre ses travaux",
    "utiliser un agenda ou une liste de tâches pour mieux suivre ses responsabilités",
    "s'engager à remettre tous ses travaux complets et dans les délais établis"
  ],
  organisation: [
    "développer un système personnel d'organisation de son agenda et de son matériel",
    "utiliser des outils de planification pour mieux gérer son temps",
    "prendre l'habitude de préparer son matériel à l'avance et de vérifier son espace de travail",
    "utiliser un cahier de planification ou un organisateur pour structurer ses tâches quotidiennes"
  ],
  autonomie: [
    "pratiquer des stratégies de résolution de problèmes avant de demander de l'aide",
    "développer sa confiance en ses propres capacités lors des tâches individuelles",
    "s'exercer à relire les consignes attentivement avant de demander une explication",
    "développer des stratégies pour aborder les tâches difficiles de façon plus indépendante"
  ],
  collaboration: [
    "pratiquer l'écoute active et le partage des responsabilités lors des travaux en équipe",
    "développer des stratégies pour contribuer positivement aux discussions de groupe",
    "apprendre à valoriser les idées des autres et à chercher des compromis lors des désaccords",
    "s'exercer à prendre un rôle actif et à respecter les contributions de chaque membre de l'équipe"
  ],
  initiative: [
    "se fixer des objectifs personnels et chercher à les dépasser",
    "s'impliquer de façon proactive dans les projets de classe et proposer des idées",
    "chercher des occasions d'approfondir ses apprentissages au-delà des attentes minimales",
    "développer sa curiosité intellectuelle en posant des questions et en explorant de nouveaux sujets"
  ],
  autoregulation: [
    "identifier et pratiquer des stratégies d'autorégulation efficaces en situation de stress",
    "reconnaître ses déclencheurs émotionnels et utiliser des stratégies de gestion apprises",
    "s'exercer à utiliser des techniques de gestion des émotions lors des moments difficiles",
    "développer un répertoire de stratégies personnelles pour maintenir un comportement positif en classe"
  ]
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
      label.innerHTML = `<input type="radio" name="force-${hab}" value="${idx}" style="accent-color:var(--bleu); margin-top:3px; flex-shrink:0;"> <span>${phrase}</span>`;
const radio = label.querySelector('input');
radio.addEventListener('click', function() {
  if (this.dataset.wasChecked === 'true') {
    this.checked = false;
    this.dataset.wasChecked = 'false';
  } else {
    document.querySelectorAll(`input[name="force-${hab}"]`).forEach(r => r.dataset.wasChecked = 'false');
    this.dataset.wasChecked = 'true';
  }
  assembleComment();
});
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
      label.innerHTML = `<input type="radio" name="prochaine-${hab}" value="${idx}" style="accent-color:var(--bleu); margin-top:3px; flex-shrink:0;"> <span>${phrase}</span>`;
const radio = label.querySelector('input');
radio.addEventListener('click', function() {
  if (this.dataset.wasChecked === 'true') {
    this.checked = false;
    this.dataset.wasChecked = 'false';
  } else {
    document.querySelectorAll(`input[name="prochaine-${hab}"]`).forEach(r => r.dataset.wasChecked = 'false');
    this.dataset.wasChecked = 'true';
  }
  assembleComment();
});
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

  // Build comment — replace [Prénom] with pronoun after first sentence
  const pronSujet = pronom === 'elle' ? 'Elle' : pronom === 'il' ? 'Il' : 'Iel';
  const pronObj   = pronom === 'elle' ? 'elle' : pronom === 'il' ? 'il' : 'iel';

  const parts = [];

  if (forcePhrases.length > 0) {
    // First phrase gets the name prepended, subsequent phrases get the pronoun
    const joined = forcePhrases.map((phrase, idx) => {
      // Capitalize first letter of phrase
      const capitalized = phrase.charAt(0).toUpperCase() + phrase.slice(1);
      if (idx === 0) return prenom + ' ' + phrase;
      return pronSujet + ' ' + phrase;
    }).join(' ');
    parts.push(joined);
  }

  if (prochainePhrases.length > 0) {
    const objectif = periode === 'etape1'
      ? `Pour la prochaine étape, ${pronObj} est invité(e) à ${prochainePhrases.join(' et à ')}.`
      : `Pour continuer à progresser, ${pronObj} est encouragé(e) à ${prochainePhrases.join(' et à ')}.`;
    parts.push(objectif);
  }

  if (peiSentence) parts.push(peiSentence);

  let comment = parts.join(' ').trim();
// Resolve pronoun placeholders
if (pronom === 'elle') {
  comment = comment.replace(/elle\/il/g, 'elle').replace(/encouragé\(e\)/g, 'encouragée').replace(/invité\(e\)/g, 'invitée').replace(/soutenu\(e\)/g, 'soutenue');
} else if (pronom === 'il') {
  comment = comment.replace(/elle\/il/g, 'il').replace(/encouragé\(e\)/g, 'encouragé').replace(/invité\(e\)/g, 'invité').replace(/soutenu\(e\)/g, 'soutenu');
} else {
  comment = comment.replace(/elle\/il/g, 'iel').replace(/encouragé\(e\)/g, 'encouragé·e').replace(/invité\(e\)/g, 'invité·e').replace(/soutenu\(e\)/g, 'soutenu·e');
}
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
  const resultsDiv = document.getElementById('results-classe-content');
  if (!resultsDiv || resultsDiv.innerHTML.trim() === '') {
    alert('Aucun commentaire à télécharger. Veuillez générer les commentaires d’abord.');
    return;
  }

  // Build clean HTML from actual data — not from DOM innerHTML
  let bodyContent = '';

  // Find all subject sections
  const subjectSections = resultsDiv.querySelectorAll('.subject-results');
  subjectSections.forEach(section => {
    const title = section.querySelector('.subject-results-title');
    const rows = section.querySelectorAll('tbody tr');
    if (!title || rows.length === 0) return;

    bodyContent += `<h2 style="font-family:Calibri,sans-serif; font-size:13pt; color:#1a3a5c; margin:24px 0 4px; border-bottom:2px solid #1a3a5c; padding-bottom:4px;">${title.textContent}</h2>`;
    bodyContent += `<table style="width:100%; border-collapse:collapse; margin-bottom:20px; font-family:Calibri,sans-serif; font-size:10.5pt;">`;
    bodyContent += `<thead><tr>
      <th style="background:#1a3a5c; color:#fff; padding:7px 10px; text-align:left; width:18%;">Élève</th>
      <th style="background:#1a3a5c; color:#fff; padding:7px 10px; text-align:left; width:8%;">Cote</th>
      <th style="background:#1a3a5c; color:#fff; padding:7px 10px; text-align:left;">Commentaire</th>
    </tr></thead><tbody>`;

    rows.forEach((row, idx) => {
      const nameCell = row.querySelector('.name-cell');
      const coteCell = row.querySelector('.cote-cell');
      const commentCell = row.querySelector('.comment-cell');
      if (!nameCell || !commentCell) return;

      const bg = idx % 2 === 0 ? '#ffffff' : '#f4f7fb';
      const nom = nameCell.textContent.trim();
      const cote = coteCell ? coteCell.textContent.trim() : '';
      const commentaire = commentCell.textContent.trim();

      bodyContent += `<tr style="background:${bg};">
        <td style="padding:7px 10px; border-bottom:1px solid #ddd; vertical-align:top;">${nom}</td>
        <td style="padding:7px 10px; border-bottom:1px solid #ddd; vertical-align:top; font-weight:bold;">${cote}</td>
        <td style="padding:7px 10px; border-bottom:1px solid #ddd; vertical-align:top; line-height:1.5;">${commentaire}</td>
      </tr>`;
    });

    bodyContent += `</tbody></table>`;
  });

  if (!bodyContent) {
    alert('Aucun commentaire trouvé. Veuillez générer les commentaires d’abord.');
    return;
  }

  const anneeLabel = annee === '1' ? '1re' : annee + 'e';
  const html = buildDownloadHTML(`Commentaires de bulletin — ${anneeLabel} année`, bodyContent);
  triggerDownload(html, `bulletins-${annee}e-annee.html`);
}

function downloadCombinedWord() {
  const HAB_DISPLAY = {
    oral: "Utilisation du français oral",
    fiabilite: "Fiabilité",
    organisation: "Sens de l'organisation",
    autonomie: "Autonomie",
    collaboration: "Esprit de collaboration",
    initiative: "Sens de l'initiative",
    autoregulation: "Autorégulation"
  };

  let content = '';
  habRoster.forEach(e => {
    // Build cotes table
    let cotesRows = '';
    Object.keys(HAB_DISPLAY).forEach(hab => {
      const cote = e.cotes[hab] || '—';
      cotesRows += `<tr>
        <td style="padding:4px 10px; border-bottom:1px solid #eee; font-size:10pt;">${HAB_DISPLAY[hab]}</td>
        <td style="padding:4px 10px; border-bottom:1px solid #eee; font-size:10pt; font-weight:bold; text-align:center;">${cote}</td>
      </tr>`;
    });

    content += `
      <div style="margin-bottom:28px; border:1px solid #ddd; padding:16px; border-radius:6px; font-family:Calibri,sans-serif;">
        <h3 style="margin:0 0 12px; color:#1a3a5c; font-size:13pt;">${e.nom ? e.nom + ', ' : ''}${e.prenom}</h3>
        <table style="width:50%; border-collapse:collapse; margin-bottom:12px;">
          <thead>
            <tr>
              <th style="background:#1a3a5c; color:#fff; padding:5px 10px; text-align:left; font-size:10pt;">Habileté</th>
              <th style="background:#1a3a5c; color:#fff; padding:5px 10px; text-align:center; font-size:10pt; width:60px;">Cote</th>
            </tr>
          </thead>
          <tbody>${cotesRows}</tbody>
        </table>
        <p style="font-size:11pt; line-height:1.5; margin:0; border-top:1px solid #eee; padding-top:10px;">${e.comment}</p>
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
  const progresHeaders = [
    'Nom', 'Prénom', 'Pronom',
    'Mathématiques', 'Obs Mathématiques',
    'Français', 'Obs Français',
    'Anglais', 'Obs Anglais',
    'Études sociales', 'Obs Études sociales',
    'Sciences et technologie', 'Obs Sciences et technologie',
    'Arts (arts visuels)', 'Obs Arts (arts visuels)',
    'Arts (musique)', 'Obs Arts (musique)',
    'Arts (danse)', 'Obs Arts (danse)',
    'Arts (art dramatique)', 'Obs Arts (art dramatique)',
    'Éducation physique et santé', 'Obs Éducation physique et santé',
    'Enseignement religieux', 'Obs Enseignement religieux',
    'Observations'
  ].join('\t');

  const scolaireHeaders = [
    'Nom', 'Prénom', 'Pronom',
    'Mathématiques', 'Obs Mathématiques',
    'Français', 'Obs Français',
    'Anglais', 'Obs Anglais',
    'Études sociales', 'Obs Études sociales',
    'Sciences et technologie', 'Obs Sciences et technologie',
    'Arts (arts visuels)', 'Obs Arts (arts visuels)',
    'Arts (musique)', 'Obs Arts (musique)',
    'Arts (danse)', 'Obs Arts (danse)',
    'Arts (art dramatique)', 'Obs Arts (art dramatique)',
    'Éducation physique et santé', 'Obs Éducation physique et santé',
    'Enseignement religieux', 'Obs Enseignement religieux',
    'Observations'
  ].join('\t');

  const headers = type === 'progres' ? progresHeaders : scolaireHeaders;

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
    headers: {
      'Content-Type': 'application/json',
      'X-Proxy-Secret': 'monprof-juin2026'
    },
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

function prochainEleve() {
  saveHabComment();
  document.getElementById('prenom-hab').value = '';
  document.getElementById('nom-hab').value = '';
  selectPronomHab('elle');
  Object.keys(COTES_STATE).forEach(h => {
    COTES_STATE[h] = null;
    const container = document.getElementById('hab-' + h);
    if (container) container.querySelectorAll('.cote-btn').forEach(b => b.className = 'cote-btn');
  });
  document.getElementById('hab-assembled-box').innerHTML = '<p style="color:#999; font-style:italic; font-size:13px;">Le commentaire s\'assemblera ici au fur et à mesure de vos sélections.</p>';
  document.getElementById('hab-char-count').textContent = '0 / 2560 caractères';
  const peiCheck = document.getElementById('pei-check');
  if (peiCheck) { peiCheck.checked = false; togglePEI(); }
  renderForcesProchaines();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ── INIT ──────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Clear saved attentes state so checkboxes don't persist across page reloads
  try { sessionStorage.removeItem('monprof_attentes'); } catch(e) {}
  renderNiveauButtonsInd();
  renderForcesProchaines();
});
