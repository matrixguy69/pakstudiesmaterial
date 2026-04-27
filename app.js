const topics = {
    s1: [
        { id: 1, title: "Decline of Mughal Empire", points: ["Succession wars drained treasury.", "Later Mughals were pleasure-seekers.", "Mansabdari collapse.", "Military vacuum."], dp: "Battle of Buxar (1764) gave EIC financial control of Bengal." },
        { id: 2, title: "East India Company", points: ["Battle of Plassey (1757).", "Doctrine of Lapse.", "Subsidiary Alliance."], dp: "Transitioned from traders to legal masters via superior military discipline." },
        { id: 3, title: "War of Independence", points: ["Greased cartridges.", "Economic destruction of local textiles.", "Fear of forced conversions."], dp: "Failure led to direct British Crown rule via the 1858 Act." },
        { id: 4, title: "Reformers", points: ["SWU: Quran translation.", "SAB: Jihad Movement.", "Haji S: Faraizi Movement."], dp: "Ensured Muslim identity survived the collapse of the Mughal state." },
        { id: 5, title: "Sir Syed Ahmed Khan", points: ["Two-Nation Theory.", "MAO College.", "Loyal Mohammedans pamphlet."], dp: "Saved Muslims from marginalization through modern education." },
        { id: 6, title: "Languages", points: ["Urdu as identity.", "Promotion of Punjabi/Sindhi Sufi poetry.", "Standardized scripts."], dp: "Ensured provincial pride complemented the larger Pakistan Movement." }
    ],
    s2: [
        { id: 7, title: "Partition & Reversal of Bengal", points: ["1905 Partition.", "Swadeshi protests.", "1911 Annulment."], dp: "Annulment proved British promises were fragile under Hindu pressure." },
        { id: 8, title: "Simla Deputation 1906", points: ["35 leaders met Lord Minto.", "Demanded Separate Electorates."], dp: "First formal British recognition of the Two-Nation Theory." },
        { id: 9, title: "Creation of Muslim League 1906", points: ["Founded in Dacca.", "Countered Congress influence."], dp: "Transformed the struggle from social reform to a political movement." },
        { id: 10, title: "Reforms (1909 - 1935)", points: ["1909 Minto-Morley.", "1919 Montagu-Chelmsford.", "1935 Gov of India Act."], dp: "Gradually moved India toward self-rule, forcing Muslim safeguards." },
        { id: 11, title: "Lucknow Pact 1916", points: ["Joint demands for self-rule.", "Acceptance of Separate Electorates."], dp: "Jinnah became the 'Ambassador of Hindu-Muslim Unity'." },
        { id: 12, title: "Non-Cooperation Movement 1920", points: ["Gandhi's boycott.", "Chauri Chaura violence."], dp: "Sudden withdrawal left Muslims feeling politically isolated." },
        { id: 13, title: "Khilafat Movement 1919", points: ["Ali Brothers.", "Protecting Ottoman Caliphate."], dp: "First mass-mobilization of Indian Muslims." },
        { id: 14, title: "Delhi Proposals 1927", points: ["Jinnah offered to drop Separate Electorates for 1/3 seats.", "Rejected by Congress."], dp: "Last major attempt at a United India compromise." },
        { id: 15, title: "Simon Commission 1927", points: ["All-white commission.", "Boycotted by ML/Congress."], dp: "Insulted Indian leaders, leading to the Nehru Report." },
        { id: 16, title: "Nehru Report 1928", points: ["Demanded Joint Electorates.", "Ignored Muslim safeguards."], dp: "The 'Parting of the Ways' for Jinnah." },
        { id: 17, title: "Jinnah 14 Points 1929", points: ["Federal system.", "1/3 Muslim representation."], dp: "Became the 'Minimum Demand' for all future negotiations." },
        { id: 18, title: "Salt March 1930", points: ["Dandi protest.", "Civil Disobedience."], dp: "Globalized the struggle via international media." },
        { id: 19, title: "Round Table Conferences", points: ["Three London meetings.", "Failed to agree on communal award."], dp: "Failure led directly to the 1935 Act." },
        { id: 20, title: "Allahabad Address 1930", points: ["Iqbal's separate state demand.", "Islam as social order."], dp: "Provided the ideological blueprint for Pakistan." },
        { id: 21, title: "Rehmat Ali & PNM 1933", points: ["'Now or Never' pamphlet.", "Named the state 'Pakistan'."], dp: "The name became a rallying cry for the masses." },
        { id: 22, title: "Elections 1937 & Congress Rule", points: ["Bande Mataram enforced.", "Wardha Scheme."], dp: "Convinced Muslims that 'Hindu Raj' was the alternative to Pakistan." },
        { id: 23, title: "Pakistan Resolution 1940", points: ["Lahore Resolution.", "Sovereign states demand."], dp: "Goal shifted from safeguards to outright independence." },
        { id: 24, title: "Cripps Mission 1942", points: ["Dominion status offer.", "Rejected by ML/Congress."], dp: "First time the British acknowledged the possibility of a separate union." },
        { id: 25, title: "Gandhi–Jinnah talks 1944", points: ["C.R. Formula discussed.", "Refusal to accept Two-Nation Theory."], dp: "Established Jinnah as the sole spokesperson for Muslims." },
        { id: 26, title: "Simla Conference 1945", points: ["Wavell Plan.", "ML nomination dispute."], dp: "Prevented Congress from claiming they represented Muslims." },
        { id: 27, title: "Elections of 1945–46", points: ["ML won all Muslim seats in Center.", "87% in Provinces."], dp: "Made the creation of Pakistan inevitable." },
        { id: 28, title: "Cabinet Mission Plan 1946", points: ["Provinces grouped (A, B, C).", "Nehru's speech killed it."], dp: "Final collapse of the 'United India' possibility." },
        { id: 29, title: "Direct Action Day 1946", points: ["Great Calcutta Killings.", "Protests for Pakistan."], dp: "Violence forced the British to accelerate withdrawal." },
        { id: 30, title: "June 3 Plan 1947", points: ["Partition announced.", "Mountbatten moved date up."], dp: "Caused a chaotic and bloody migration." },
        { id: 31, title: "Radcliffe Commission 1947", points: ["Border drawn in 5 weeks.", "Gurdaspur awarded to India."], dp: "Primary cause of the Kashmir conflict." },
        { id: 32, title: "Indian Independence Act 1947", points: ["Legal birth of Pakistan/India.", "Ended British rule."], dp: "Marked the formal end of 200 years of British Raj." }
    ],
    s3: [
        { id: 33, title: "Jinnah as GG", points: ["Refugee relief.", "Karachi as capital.", "UN membership."], dp: "Prevented the collapse of the state in Year One." },
        { id: 34, title: "Liaqat Ali Khan", points: ["Objectives Resolution 1949.", "Liaquat-Nehru Pact."], dp: "Defined Pakistan as an Islamic Democracy." },
        { id: 35, title: "Malik Ghulam Muhammad", points: ["Dissolved Assembly 1953.", "Era of Bureaucratic Rule."], dp: "Set a precedent for military-bureaucracy dominance." },
        { id: 36, title: "Iskandar Mirza", points: ["One Unit Scheme.", "First Martial Law 1958."], dp: "Merged provinces to counter East Pakistan influence." },
        { id: 37, title: "Ayub Khan", points: ["Green Revolution.", "1962 Constitution.", "1965 War."], dp: "Decade of development widened the East-West economic gap." },
        { id: 38, title: "Yahya Khan & Bangladesh", points: ["1970 Elections.", "Fall of Dhaka 1971."], dp: "Transfer of power refusal led to the birth of Bangladesh." },
        { id: 39, title: "Z. Ali Bhutto", points: ["Nationalization.", "1973 Constitution.", "Simla Agreement."], dp: "Restored national pride after the 1971 defeat." },
        { id: 40, title: "Zia ul Haq", points: ["Islamization.", "Afghan-Soviet War.", "Hudood Laws."], dp: "Fundamentally shifted Pakistan toward religious conservatism." },
        { id: 41, title: "Benazir Bhutto 1st Term", points: ["First female PM.", "Political prisoner release."], dp: "Dismissed early due to conflict with the President." },
        { id: 42, title: "Nawaz Sharif 1st term", points: ["Privatization.", "Motorway Project."], dp: "Reversed nationalization to empower the middle class." },
        { id: 43, title: "Benazir Bhutto 2nd Term", points: ["Health workers initiative.", "MQM cleanup."], dp: "Dismissed by Leghari over corruption charges." },
        { id: 44, title: "Nawaz Sharif 2nd Term", points: ["Nuclear tests 1998.", "Kargil War 1999."], dp: "Ousted by Musharraf in a military coup." }
    ],
    fr: [
        { id: 45, title: "Relations with US", points: ["SEATO/CENTO.", "Afghan War aid.", "Pressler Amendment."], dp: "A transactional relationship defined by US security needs." },
        { id: 46, title: "Relations with USSR", points: ["U-2 Crisis.", "Steel Mills aid.", "Afghan War hostility."], dp: "Generally cold due to Pakistan's Western tilt." },
        { id: 47, title: "Relations with Bangladesh", points: ["1974 OIC Recognition.", "Stranded Pakistanis issue."], dp: "Slow normalization focused on regional trade." },
        { id: 48, title: "Relations with India", points: ["Indus Water Treaty.", "Wars: 65, 71, 99."], dp: "Kashmir remains the core barrier to peace." },
        { id: 49, title: "Relations with Afghanistan", points: ["Durand Line dispute.", "Voted against Pak in UN."], dp: "Hostile relations due to Pakhtoonistan claims." },
        { id: 50, title: "Relations with UK/Commonwealth", points: ["Left 1972, Rejoined 1989.", "Trade & Diaspora."], dp: "UK acts as a diplomatic bridge to the West." },
        { id: 51, title: "Relations with China", points: ["1963 Boundary pact.", "JF-17 project.", "KKH."], dp: "Pakistan's only 'All-Weather' strategic friend." },
        { id: 52, title: "Relations with Iran", points: ["First to recognize Pak.", "RCD 1964."], dp: "A security ally until the sectarian shifts of the 80s." },
        { id: 53, title: "Relations with Muslim World", points: ["1974 OIC Summit.", "Saudi Military ties."], dp: "Pakistan serves as the 'Sword of Islam' via its nuclear status." },
        { id: 54, title: "Relations with UN", points: ["Peacekeeping leader.", "Kashmir advocacy."], dp: "Primary platform for international legal status." },
        { id: 55, title: "Pakistan as Nuclear Power", points: ["1974 start.", "1998 tests (Chagai)."], dp: "Established deterrence against Indian conventional superiority." }
    ]
};

const practiceQs = [];
const patterns = [
    "Why did the Mughal Empire decline? [7]",
    "Was the 1857 war a success? [14]",
    "Importance of SASW's education? [14]",
    "Why was Partition of Bengal reversed? [7]",
    "Was Lucknow Pact a turning point? [14]",
    "Reasons for Khilafat Movement failure? [7]",
    "Congress Rule (1937-39) significance? [14]",
    "Success of Ayub Khan's Green Revolution? [14]",
    "Why did Pakistan join SEATO? [7]",
    "Relations with China 1947-99? [14]"
];

for(let i=1; i<=50; i++) {
    practiceQs.push({
        q: `${i}. ${patterns[i % patterns.length]}`,
        a: "Structure: 3 DPs for factor in Q + 3 DPs for other factors + Evaluation."
    });
}

function switchTab(id, btn) {
    document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
    document.getElementById('tab-' + id).classList.add('active');
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    if(id === 'db') filter('s1', document.querySelector('.f-pill'));
    if(id === 'drill') renderDrills();
}

function filter(sec, btn) {
    document.querySelectorAll('.f-pill').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    const container = document.getElementById('db-render');
    container.innerHTML = topics[sec].map(t => `
        <div class="card glass item-card">
            <h3>${t.id}. ${t.title}</h3>
            ${t.points.map(p => `<p class="bullet">• ${p}</p>`).join('')}
            <div class="dp-box"><strong>DEVELOPED POINT:</strong> ${t.dp}</div>
        </div>
    `).join('');
}

function renderDrills() {
    document.getElementById('drill-render').innerHTML = practiceQs.map(d => `
        <div class="card glass">
            <h4>${d.q}</h4>
            <button class="ms-btn" onclick="this.nextElementSibling.classList.toggle('open')">View Strategy</button>
            <div class="ms-content">${d.a}</div>
        </div>
    `).join('');
}

function search() {
    let q = document.getElementById('search').value.toLowerCase();
    document.querySelectorAll('.item-card').forEach(c => {
        c.style.display = c.innerText.toLowerCase().includes(q) ? 'block' : 'none';
    });
}

// Init
filter('s1', document.querySelector('.f-pill'));
