// FULL CONTENT DATASET FROM pak_studies_history_study_app.html
const data = {
    s1: [
        { title: "Decline of Mughal Empire", year: "c.1700s", facts: "Aurangzeb's death in 1707 triggered succession crisis. Later emperors were powerless.", reason: "Wars in Deccan drained treasury. Rebellions due to strict policies.", impact: "Power vacuum filled by EIC and regional powers.", dp: "Battle of Plassey (1757) gave EIC control of Bengal's riches." },
        { title: "East India Company", year: "1600-1857", facts: "Founded 1600 for trade. Used private armies for territorial control.", reason: "Weak Mughals allowed intervention. Doctrine of Lapse annexed states.", impact: "By 1850 controlled most of India.", dp: "Doctrine of Lapse (1848) seized Jhansi/Satara, causing princes to revolt in 1857." },
        { title: "War of Independence 1857", year: "1857", facts: "Started May 10 in Meerut over greased cartridges.", reason: "Greased cartridges, taxation, fear of cultural destruction.", impact: "EIC dissolved; Crown rule began. Mughal Empire ended.", dp: "Post-1857, Muslims were specifically targeted, creating the need for Sir Syed's reforms." },
        { title: "Reformers", year: "1800s", facts: "Shah Waliullah, Hali, Shibli Nomani.", reason: "Muslims were ruined after 1857. Needed modern education.", impact: "Created educated middle class.", dp: "Hali's poem Musaddas-e-Hali restored cultural pride." },
        { title: "Sir Syed Ahmed Khan", year: "1817-1898", facts: "Founded Aligarh (1875). Propounded Two-Nation Theory.", reason: "Muslims fell behind by refusing Western science/English.", impact: "Aligarh became the base for future ML leaders.", dp: "His Two-Nation Theory argued Hindus/Muslims could not share a single democracy." },
        { title: "Languages Controversy", year: "1867", facts: "Hindus demanded Hindi replace Urdu in Persian script.", reason: "Desire to reduce Muslim administrative influence.", impact: "Sir Syed abandoned hope of unity.", dp: "This proved to Sir Syed that Hindus/Muslims were separate nations." }
    ],
    s2: [
        { title: "Partition of Bengal", year: "1905-11", facts: "Lord Curzon divided Bengal; Muslims got East Bengal majority.", reason: "Admin convenience + reducing Bengali nationalist influence.", impact: "Hindu boycott; 1911 reversal betrayed Muslims.", dp: "The 1911 reversal proved Muslims needed their own political party (ML)." },
        { title: "Simla Deputation", year: "1906", facts: "35 leaders met Lord Minto for separate electorates.", reason: "Fear of being outvoted by Hindu majority in elections.", impact: "Minto agreed; Separate electorates granted in 1909.", dp: "Success boosted confidence to form the Muslim League." },
        { title: "Creation of Muslim League", year: "1906", facts: "Founded Dec 30 in Dacca by Nawab Salimullah.", reason: "Need to protect Muslim political rights after Simla.", impact: "Main vehicle for the Pakistan movement.", dp: "It was the first formal political voice specifically for Indian Muslims." },
        { title: "Reforms (1909-1935)", year: "1909-35", facts: "Morley-Minto (1909), Montagu-Chelmsford (1919), GOI Act (1935).", reason: "Pressure for self-rule + communal tensions.", impact: "Gradual provincial autonomy granted.", dp: "1909 Reforms legally enshrined separate electorates, deepening communal identity." },
        { title: "Lucknow Pact", year: "1916", facts: "Congress accepted separate electorates; Jinnah was the architect.", reason: "United front against British during WWI.", impact: "Only time Congress accepted separate electorates.", dp: "Proved cooperation was possible, but Congress later backtracked." },
        { title: "Non-Cooperation Movement", year: "1920", facts: "Gandhi called for boycott of British goods/titles.", reason: "Jallianwala Bagh + Khilafat cause.", impact: "Suspended after Chauri Chaura violence.", dp: "Suspension without consulting Muslims damaged trust in Gandhi." },
        { title: "Khilafat Movement", year: "1919-24", facts: "Ali Brothers led movement to save the Ottoman Caliphate.", reason: "Caliph was spiritual head of global Muslims.", impact: "Mass mobilization of Muslims.", dp: "Created a politically aware Muslim base that later supported Pakistan." },
        { title: "Delhi Proposals", year: "1927", facts: "Jinnah offered to give up separate electorates for 4 safeguards.", reason: "Attempt at compromise with Congress.", impact: "Congress rejected; led to 14 Points.", dp: "The rejection proved Congress wouldn't share power fairly." },
        { title: "Simon Commission", year: "1927", facts: "All-British commission to review reforms.", reason: "British didn't think Indians were ready to lead review.", impact: "Widespread protests; led to Nehru Report.", dp: "The exclusion of Indians united all local parties in opposition." },
        { title: "Nehru Report", year: "1928", facts: "Demanded joint electorates and a secular state.", reason: "Congress vision for a centralized India.", impact: "Rejected by Muslims as it removed protections.", dp: "Directly led to Jinnah's 14 Points as a counter-proposal." },
        { title: "Jinnah's 14 Points", year: "1929", facts: "Demanded federal system + separate electorates.", reason: "Response to the exclusionary Nehru Report.", impact: "Became the minimum Muslim demand.", dp: "Defined the federal structure later demanded for Pakistan." },
        { title: "Salt March", year: "1930", facts: "Gandhi's march to Dandi to defy salt tax.", reason: "Universal symbol of British exploitation.", impact: "Global attention; forced Round Table Conferences.", dp: "Proved mass non-violence could force British concessions." },
        { title: "Round Table Conferences", year: "1930-32", facts: "3 meetings in London to discuss constitution.", reason: "Find an agreed settlement between parties.", impact: "No consensus; British imposed Communal Award.", dp: "The failure proved Indian visions were fundamentally incompatible." },
        { title: "Allama Iqbal (Allahabad)", year: "1930", facts: "Proposed separate Muslim state in NW India.", reason: "Muslims needed territory to practice Islam fully.", impact: "Philosophical foundation of Pakistan.", dp: "Shifted the goal from 'safeguards' to a 'homeland'." },
        { title: "Rehmat Ali (Now or Never)", year: "1933", facts: "Coined the name 'Pakistan' in a pamphlet.", reason: "Advocated for complete independence.", impact: "Gave the movement a concrete name.", dp: "The acronym 'Pakistan' (P-A-K-S-TAN) became psychologically powerful." },
        { title: "Elections 1937 / Congress Rule", year: "1937-39", facts: "ML lost badly; Congress ruled 7 provinces.", reason: "ML was unorganized; Congress was mass-based.", impact: "Wardha Scheme/Bande Mataram alienated Muslims.", dp: "The 'Day of Deliverance' in 1939 proved Muslims could not live under Hindu rule." },
        { title: "Pakistan Resolution", year: "1940", facts: "Passed March 23 at Minto Park, Lahore.", reason: "Congress rule 1937-39 convinced Jinnah of Two-Nation Theory.", impact: "Official goal became a separate state.", dp: "First democratic mandate for a separate country." },
        { title: "Cripps Mission", year: "1942", facts: "Offered dominion status for WWII support.", reason: "British needed India's help against Japan.", impact: "Rejected by both ML and Congress.", dp: "First time British hinted that provinces could opt-out (Partition)." },
        { title: "Gandhi-Jinnah Talks", year: "1944", facts: "Met in Bombay to discuss Rajagopalachari Formula.", reason: "Try to find a way to avoid deadlock.", impact: "Failed as Gandhi wouldn't accept full Partition.", dp: "Convinced British that voluntary agreement was impossible." },
        { title: "Simla Conference", year: "1945", facts: "Wavell proposed parity in Executive Council.", reason: "Revive political process post-WWII.", impact: "Failed as Jinnah insisted ML must pick all Muslims.", dp: "Established ML as the sole representative of Muslims." },
        { title: "Elections 1945-46", year: "1945-46", facts: "ML won all 30 Muslim seats in Central Assembly.", reason: "Effective organization + 'Pakistan' slogan.", impact: "Proved ML had a total mandate for Partition.", dp: "The British could no longer deny the demand for Pakistan." },
        { title: "Cabinet Mission Plan", year: "1946", facts: "Proposed grouping provinces (A, B, C).", reason: "Last attempt to keep India united with autonomy.", impact: "ML accepted; Congress's Nehru effectively killed it.", dp: "Failure led directly to Direct Action Day and Partition." },
        { title: "Direct Action Day", year: "1946", facts: "Aug 16; Great Calcutta Killings.", reason: "Pressure British after Cabinet Mission failure.", impact: "4,000 dead; proved Hindus/Muslims couldn't coexist.", dp: "The violence made the British speed up their departure." },
        { title: "June 3 Plan", year: "1947", facts: "Mountbatten announced Partition date.", reason: "Rushed exit to avoid full civil war.", impact: "India/Pakistan created Aug 1947.", dp: "The rushed timeline caused the massive refugee crisis." },
        { title: "Radcliffe Commission", year: "1947", facts: "Cyril Radcliffe drew borders in 5 weeks.", reason: "Determine majority areas for each nation.", impact: "Gurdaspur to India gave land link to Kashmir.", dp: "Announcement after independence caused mass confusion/death." },
        { title: "Indian Independence Act", year: "1947", facts: "Legal framework for the transfer of power.", reason: "End British rule formally.", impact: "Created two sovereign dominions.", dp: "Left princely states' fate vague, leading to Kashmir war." }
    ],
    s3: [
        { title: "Jinnah as Governor General", year: "1947-48", facts: "First GG; died Sept 1948. Worked through refugee crisis.", reason: "Only he had authority to unite the new state.", impact: "Set democratic/secular principles (11 Aug speech).", dp: "His 11 Aug address declared all citizens equal regardless of religion." },
        { title: "Liaqat Ali Khan", year: "1949-51", facts: "First PM; Objectives Resolution (1949). Assassinated 1951.", reason: "Successor to Jinnah; needed to build constitution.", impact: "Islamic character of state permanently fixed.", dp: "Objectives Resolution made Islam the foundation of the state." },
        { title: "Malik Ghulam Muhammad", year: "1951-55", facts: "Bureaucratic Governor General; dismissed PM Nazimuddin.", reason: "Used constitutional loopholes to concentrate power.", impact: "Undermined parliamentary democracy.", dp: "Established precedent of unelected officials over elected ones." },
        { title: "Iskandar Mirza", year: "1955-58", facts: "First President; imposed Martial Law in 1958.", reason: "Viewed politicians as corrupt and incompetent.", impact: "First military coup in Pakistan.", dp: "His removal by Ayub showed the military was the real power." },
        { title: "Field Marshal Ayub Khan", year: "1958-69", facts: "Basic Democracies; 1965 War; Tashkent Declaration.", reason: "Promised economic stability and development.", impact: "Growth in 60s but unequal wealth distribution.", dp: "1965 War damage to his image led to his 1969 resignation." },
        { title: "Yahya Khan / Bangladesh", year: "1969-71", facts: "1970 elections; Operation Searchlight; 1971 Surrender.", reason: "Refusal to hand power to Mujibur Rahman (East Pak).", impact: "East Pakistan became Bangladesh.", dp: "Proved religion alone couldn't hold a country without justice." },
        { title: "Z. Ali Bhutto", year: "1972-77", facts: "1973 Constitution; Nuclear program; Nationalization.", reason: "Populist mandate (Roti, Kapra, Makaan).", impact: "Modernized state but economic productivity fell.", dp: "Initiated the nuclear program to ensure 'strategic parity' with India." },
        { title: "Zia ul Haq", year: "1977-88", facts: "Islamization; Afghan Jihad support; Executed Bhutto.", reason: "Used Islam for legitimacy after 1977 coup.", impact: "Radicalized society; 'Kalashnikov culture' from Afghan war.", dp: "Support for Mujideen against USSR made Pak a frontline US ally." },
        { title: "Benazir Bhutto 1st Term", year: "1988-90", facts: "First woman PM in Muslim world. Dismissed by President.", reason: "Weak coalition + clash with military establishment.", impact: "Proved civilian rule was still fragile.", dp: "Her term faced constant obstruction from Zia-era officials." },
        { title: "Nawaz Sharif 1st Term", year: "1991-93", facts: "Privatization; Yellow Cab scheme. Dismissed 1993.", reason: "Power struggle with President Ghulam Ishaq Khan.", impact: "Reinstated by SC, then forced to resign by Army.", dp: "Showed the Army was the ultimate 'umpire' of politics." },
        { title: "Benazir Bhutto 2nd Term", year: "1994-96", facts: "Karachi violence; Mr. 10 Percent allegations.", reason: "Law and order crisis in Sindh.", impact: "Dismissed by her own party's President (Leghari).", dp: "Corruption charges overshadowed her democratic goals." },
        { title: "Nawaz Sharif 2nd Term", year: "1997-99", facts: "1998 Nuclear Tests; Kargil Conflict; 1999 Coup.", reason: "Attempted to dismiss Gen Musharraf while airborne.", impact: "Military rule returned under Musharraf.", dp: "1998 Nuclear tests made Pak the first Muslim nuclear power." },
        { title: "Relations: US", year: "", facts: "SEATO/CENTO in 50s; Afghan Jihad in 80s; War on Terror.", reason: "Transactional relationship based on Cold War/Security.", impact: "Billions in aid but strained by drone strikes.", dp: "Post-9/11 partnership brought $18bn but cost 70,000 lives." },
        { title: "Relations: China", year: "", facts: "All-weather friendship; KKH; CPEC ($62bn).", reason: "Strategic counterbalance to India.", impact: "China is Pakistan's most trusted partner.", dp: "CPEC shifted Pak's focus from Western aid to Chinese investment." },
        { title: "Relations: India", year: "", facts: "Wars in 48, 65, 71, 99. Kashmir Dispute.", reason: "Conflicting claims on Kashmir; Two-Nation Theory.", impact: "Nuclear rivalry; high defense spending.", dp: "Kashmir remains the core flashpoint that prevents regional peace." },
        { title: "Relations: Bangladesh", year: "", facts: "Recognition 1974; OIC Summit.", reason: "Need to normalize after 1971 war.", impact: "Improvement under Ziaur Rahman, but 1971 history remains.", dp: "Bhutto's 1974 visit was the first step toward reconciliation." },
        { title: "Relations: Afghanistan", year: "", facts: "Durand Line; Refugee crisis; Taliban support.", reason: "Search for 'Strategic Depth'.", impact: "Terrorism spillover into Pakistan.", dp: "Hosting 3m+ refugees created massive socio-economic strain." },
        { title: "Relations: Muslim World", year: "", facts: "OIC founding member; Close ties with Saudi/UAE.", reason: "Islamic identity and financial support.", impact: "Pak provides military training; Gulf provides oil/remittances.", dp: "1974 OIC Summit in Lahore was the peak of Islamic solidarity." },
        { title: "Relations: UK/Commonwealth", year: "", facts: "Colonial links; Pak rejoined in 1989.", reason: "Trade and expatriate community (1.5m Pakistanis in UK).", impact: "English remains official/educational language.", dp: "Pak's withdrawal in 1972 over Bangladesh was a major protest." },
        { title: "Relations: UN", year: "", facts: "Joined 1947; Major troop contributor to Peacekeeping.", reason: "Global platform for Kashmir issue.", impact: "Pak has chaired Security Council multiple times.", dp: "Pak is consistently one of the top 3 UN peacekeeper providers." },
        { title: "Pakistan as Nuclear Power", year: "1998", facts: "tests May 28-30; Chagai. Dr. A.Q. Khan.", reason: "Response to India's 1998 tests; Strategic deterrent.", impact: "Sanctions followed; A.Q. Khan scandal (2004).", dp: "Ensured India could not use conventional superiority to invade." }
    ]
};

// UI Functions
function toggleTheme() {
    document.body.classList.toggle('light');
    const btn = document.getElementById('theme-toggle');
    btn.innerText = document.body.classList.contains('light') ? '🌙' : '☀️';
}

function switchTab(id, el) {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
    el.classList.add('active');
    document.getElementById('panel-' + id).classList.add('active');
    window.scrollTo(0,0);
}

function render() {
    ['s1', 's2', 's3'].forEach(s => {
        const list = document.getElementById(s + '-topics-list');
        list.innerHTML = data[s].map((t, i) => `
            <div class="topic-card">
                <div class="topic-header" onclick="toggleTopic('${s}', ${i})">
                    <h3>${t.title}</h3>
                    <span class="year">${t.year}</span>
                </div>
                <div class="topic-body" id="${s}-body-${i}">
                    <div class="data-section">
                        <div class="data-label">Facts</div>
                        <div class="data-content">${t.facts}</div>
                    </div>
                    <div class="data-section">
                        <div class="data-label">Causes / Reasons</div>
                        <div class="data-content">${t.reason}</div>
                    </div>
                    <div class="data-section">
                        <div class="data-label">Impact</div>
                        <div class="data-content">${t.impact}</div>
                    </div>
                    <div class="dp-box">
                        <div class="data-label" style="color:var(--accent)">Developed Point (CIE Standard)</div>
                        <div class="data-content" style="font-style:italic">"${t.dp}"</div>
                    </div>
                </div>
            </div>
        `).join('');
    });
}

function toggleTopic(section, i) {
    const el = document.getElementById(`${section}-body-${i}`);
    const isOpen = el.classList.contains('open');
    document.querySelectorAll('.topic-body').forEach(b => b.classList.remove('open'));
    if(!isOpen) el.classList.add('open');
}

function filterTopics(section, val) {
    const cards = document.querySelectorAll(`#${section}-topics-list .topic-card`);
    cards.forEach(c => {
        c.style.display = c.innerText.toLowerCase().includes(val.toLowerCase()) ? '' : 'none';
    });
}

render();
