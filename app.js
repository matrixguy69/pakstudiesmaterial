const topics = {
    s1: [
        { id: 1, title: "Decline of Mughal Empire", points: "Later Mughals were pleasure-seekers (drinking, music). Succession wars drained the treasury.", dp: "The Battle of Buxar (1764) confirmed British political control over the weakening Mughal structure." },
        { id: 2, title: "East India Company", points: "Trade expanded into political control via the Doctrine of Lapse.", dp: "By 1850, EIC controlled almost all of India due to military superior technology." },
        { id: 3, title: "War of Independence 1857", points: "Greased cartridges (cow/pig fat) + excessive taxation.", dp: "The failure led to the 'Crown Rule' and the final end of the Mughal line." },
        { id: 4, title: "Reformers", points: "Shah Waliullah translated Quran to Persian; Barelvi led Jihad.", dp: "Saved Muslim identity from being absorbed by Marathas/Sikhs." },
        { id: 5, title: "Sir Syed Ahmed Khan", points: "Aligarh Movement; Urdu-Hindi controversy (1867).", dp: "His Two-Nation Theory provided the base for the future Pakistan demand." },
        { id: 6, title: "Languages", points: "Promotion of Urdu as a symbol of Muslim unity.", dp: "Used as a tool for national identity during the independence movement." }
    ],
    s2: [
        { id: 7, title: "Partition of Bengal 1905", points: "Bengal was too large (54M west, 31M east).", dp: "Hindus' Swadeshi movement forced the 1911 reversal, shocking Muslims." },
        { id: 8, title: "Simla Deputation 1906", points: "35 leaders met Lord Minto for Separate Electorates.", dp: "First formal acceptance of the Two-Nation Theory by the British." },
        { id: 9, title: "Creation of Muslim League 1906", points: "Nawab Salimullah (Dacca). Protect Muslim rights.", dp: "Became the sole political voice for the Muslims of India." },
        { id: 10, title: "Reforms (1909-1935)", points: "Minto-Morley (1909), Montagu-Chelmsford (1919).", dp: "Each step proved that the Congress and League had different goals." },
        { id: 11, title: "Lucknow Pact 1916", points: "Peak Hindu-Muslim unity. Congress accepted Separate Electorates.", dp: "Jinnah earned the title 'Ambassador of Hindu-Muslim Unity'." },
        { id: 12, title: "Non-Cooperation Movement 1920", points: "Gandhi's boycott. Swaraj demand.", dp: "Failure after Chauri Chaura broke the trust of the Muslims." },
        { id: 13, title: "Khilafat Movement 1919", points: "Ali Brothers. Protect the Ottoman Caliph.", dp: "Failed religiously but taught Muslims massive political mobilization." },
        { id: 14, title: "Delhi Proposals 1927", points: "Jinnah offered to drop separate electorates for certain safeguards.", dp: "Rejection led to the Nehru Report and Jinnah's 14 Points." },
        { id: 15, title: "Simon Commission 1927", points: "All-British commission. Boycotted by India.", dp: "Showed British arrogance in deciding India's fate without Indians." },
        { id: 16, title: "Nehru Report 1928", points: "Proposed joint electorates and a secular India.", dp: "Proved Congress wanted to dominate the Muslim minority." },
        { id: 17, title: "Jinnah's 14 Points 1929", points: "Federal system + 1/3rd Muslim representation.", dp: "The 'Minimum Demands' that unified all Muslim factions." },
        { id: 18, title: "Salt March 1930", points: "Gandhi's Civil Disobedience. Mass arrests.", dp: "Forced the British to negotiate at the Round Table Conferences." },
        { id: 19, title: "Round Table Conferences (1930-32)", points: "Three sessions. Failure to agree on minorities.", dp: "Proved that no constitution could work without separate nations." },
        { id: 20, title: "Iqbal's Allahabad Address 1930", points: "First vision of a North-Western Muslim state.", dp: "Changed the movement from 'rights' to 'territory'." },
        { id: 21, title: "Rehmat Ali & PNM 1933", points: "Coined the name 'PAKISTAN'.", dp: "Gave a concrete name to the abstract vision of Iqbal." },
        { id: 22, title: "Elections 1937 & Congress Rule", points: "Wardha Scheme. Bande Mataram. Muslim oppression.", dp: "The 27 months of rule convinced Muslims that 'Partition' was the only way." },
        { id: 23, title: "Pakistan Resolution 1940", points: "Minto Park. Demand for sovereign states.", dp: "Official adoption of Pakistan as the final goal of the Muslim League." },
        { id: 24, title: "Cripps Mission 1942", points: "Offered Dominion status after the war.", dp: "First time British admitted 'Opt-out' (Partition) was possible." },
        { id: 25, title: "Gandhi-Jinnah Talks 1944", points: "Met in Bombay. Gandhi rejected 2-Nation Theory.", dp: "Elevated Jinnah to the status of the 'Sole Spokesman' for Muslims." },
        { id: 26, title: "Simla Conference 1945", points: "Lord Wavell. Interim government plan.", dp: "Failed because Jinnah insisted ML must pick all Muslim members." },
        { id: 27, title: "Elections 1945-46", points: "ML won 100% central Muslim seats.", dp: "Legally proved that the Muslim League represented the Muslims." },
        { id: 28, title: "Cabinet Mission Plan 1946", points: "Grouping of provinces (A, B, C).", dp: "Last chance for a united India; killed by Nehru’s statements." },
        { id: 29, title: "Direct Action Day 1946", points: "Great Calcutta Killings (4000 dead).", dp: "Showed that a united India would result in a bloody civil war." },
        { id: 30, title: "June 3 Plan 1947", points: "Partition announced by Mountbatten.", dp: "The formal blueprint for the creation of Pakistan and India." },
        { id: 31, title: "Radcliffe Commission 1947", points: "Awarded Gurdaspur to India (Kashmir link).", dp: "The biased border created the perpetual Kashmir conflict." },
        { id: 32, title: "Independence Act 1947", points: "End of British rule. Creation of two Dominions.", dp: "Birth of Pakistan as a sovereign state." }
    ],
    s3: [
        { id: 33, title: "Jinnah as GG (1947-48)", points: "Refugee fund; UN membership; State Bank.", dp: "His 'Unity, Faith, Discipline' motto stabilized the state in the first year." },
        { id: 34, title: "Liaqat Ali Khan (1949-51)", points: "Objectives Resolution. Preamble of Constitution.", dp: "Ensured Pakistan would be an Islamic democratic state." },
        { id: 35, title: "Malik Ghulam Muhammad (1951-55)", points: "Dismissed PM Nazimuddin. Bureaucratic coup.", dp: "Set the precedent for dismissing elected parliaments." },
        { id: 36, title: "Iskandar Mirza (1955-58)", points: "One Unit Scheme. First Martial Law (1958).", dp: "Invited the Army into politics, leading to Ayub Khan’s coup." },
        { id: 37, title: "Field Marshall Ayub Khan (1958-69)", points: "Decade of Development. 1965 War.", dp: "Industrialized Pak but increased the wealth gap (22 families)." },
        { id: 38, title: "Yahya Khan & Bangladesh (1971)", points: "Operation Searchlight. Fall of Dacca.", dp: "Refusal to hand power to Mujibur Rahman led to the 1971 split." },
        { id: 39, title: "Z. Ali Bhutto (1972-1977)", points: "1973 Constitution. Islamic Summit. Nuclear program.", dp: "Rebuilt national morale after the 1971 disaster." },
        { id: 40, title: "Zia ul Haq (1977-1988)", points: "Islamization. Afghan Jihad.", dp: "Turned Pakistan into a frontline state against USSR." },
        { id: 41, title: "Benazir Bhutto 1st Term", points: "First female PM of Muslim world. Clash with GIK.", dp: "Era of political instability and dismissals." },
        { id: 42, title: "Nawaz Sharif 1st Term", points: "Yellow cab; Motorways; Privatization.", dp: "Shift towards a free-market and infrastructure-heavy economy." },
        { id: 43, title: "Benazir Bhutto 2nd Term", points: "Clash with brother Murtaza. Corruption charges.", dp: "Dismissal after dismissal slowed national progress." },
        { id: 44, title: "Nawaz Sharif 2nd Term", points: "Nuclear tests 1998. Kargil War. 1999 Coup.", dp: "Pakistan became a declared nuclear power under his term." }
    ],
    fr: [
        { id: 45, title: "Relations with USA", points: "$1.6bn aid; SEATO/CENTO membership.", dp: "Cold War ally but faced arms embargoes during the 1965/71 wars." },
        { id: 46, title: "Relations with USSR", points: "Tashkent Declaration. Steel Mills aid.", dp: "Hostile during Afghan war; improved after Soviet withdrawal." },
        { id: 47, title: "Relations with Bangladesh", points: "1974 recognition at OIC Lahore.", dp: "Slow normalization after the traumatic 1971 separation." },
        { id: 48, title: "Relations with India", points: "Indus Water Treaty. Kashmir dispute.", dp: "Perpetual state of war and strategic competition." },
        { id: 49, title: "Relations with Afghanistan", points: "Durand Line; Refugee crisis (3.5M).", dp: "Frontline ally in the Afghan Jihad but faced cross-border issues." },
        { id: 50, title: "Relations with UK", points: "Commonwealth; Cricket diplomacy.", dp: "Strong colonial heritage and administrative links." },
        { id: 51, title: "Relations with China", points: "KKH highway; 1965 support.", dp: "All-weather friendship; strategic parity against India." },
        { id: 52, title: "Relations with Iran", points: "First to recognize Pak; RCD (1964).", dp: "Natural allies through geography and shared religion." },
        { id: 53, title: "Relations with Muslim World", points: "1974 Summit; Defense training.", dp: "Pakistan acting as the 'Sword of Islam' for the Middle East." },
        { id: 54, title: "Relations with UN", points: "Top troop contributor. Kashmir resolutions.", dp: "Platform for global recognition and peace efforts." },
        { id: 55, title: "Pakistan as Nuclear Power", points: "Chagai tests 1998. Response to India.", dp: "Established strategic deterrence in South Asia." }
    ]
};

const practiceQs = [
    { q: "Why was the Khilafat Movement founded? [7]", a: "1. Protect Caliphate. 2. Post-war resentment. 3. Political mobilization." },
    { q: "Was Jinnah's role as Governor General successful? [14]", a: "Side 1: Infrastructure, refugees, State Bank. Side 2: Language issue, early death. Eval: Jinnah was the anchor that prevented state collapse." }
];

// LIQUID GSAP TRANSITIONS
function showTab(id, btn) {
    gsap.to('.panel', { opacity: 0, y: 15, duration: 0.2, onComplete: () => {
        document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
        document.getElementById('panel-' + id).classList.add('active');
        gsap.to('#panel-' + id, { opacity: 1, y: 0, duration: 0.4 });
    }});
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    if(id === 'db') filterSec('s1', document.querySelector('.f-btn'));
    if(id === 'drill') renderDrills();
}

function filterSec(s, btn) {
    document.querySelectorAll('.f-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const container = document.getElementById('db-render');
    container.innerHTML = topics[s].map(t => `
        <div class="card ch-card">
            <h3 style="font-size:16px;">${t.id}. ${t.title}</h3>
            <div class="point-grp">
                <h4>EXAM POINTS (7/10/14)</h4>
                <p>${t.points}</p>
                <div class="dp-text">DEVELOPED POINT: ${t.dp}</div>
            </div>
        </div>
    `).join('');
    gsap.from('.ch-card', { opacity: 0, x: -20, stagger: 0.05 });
}

function renderDrills() {
    document.getElementById('drill-render').innerHTML = practiceQs.map(d => `
        <div class="card">
            <h4 style="margin-bottom:10px">${d.q}</h4>
            <button class="nav-btn" style="width:auto; padding:5px 10px;" onclick="this.nextElementSibling.style.display='block'">Check Structure</button>
            <p style="display:none; margin-top:10px; font-size:13px; color:#94a3b8;">${d.a}</p>
        </div>
    `).join('');
}

function search() {
    let q = document.getElementById('search').value.toLowerCase();
    document.querySelectorAll('.ch-card').forEach(card => {
        card.style.display = card.innerText.toLowerCase().includes(q) ? 'block' : 'none';
    });
}

// BOOT
showTab('ops', document.querySelector('.nav-btn'));
