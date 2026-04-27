const topics = {
    s1: [
        { title: "1. Decline of Mughal Empire", facts: "Aurangzeb's death in 1707 began the end. Pleasure-seeking emperors like Bahadur Shah I wasted the treasury.", reason: "Mansabdari system corruption, succession wars, and Persian invasions (Nadir Shah).", impact: "The weakening of central power allowed the East India Company to fill the vacuum.", dp: "The Battle of Buxar (1764) consolidated British political control after the Mughal collapse." },
        { title: "2. East India Company", facts: "Started as traders in 1600. Used Doctrine of Lapse to annex states.", reason: "Mughal weakness and the need for raw materials for the Industrial Revolution.", impact: "By 1850, the EIC controlled almost all of the subcontinent.", dp: "Robert Clive's victories secured the Diwani of Bengal, giving British total financial control." },
        { title: "3. War of Independence 1857", facts: "Began in Meerut. Greased cartridges used pig/cow fat.", reason: "Political (Doctrine of Lapse), Social (Western Education), and Religious interference.", impact: "End of EIC rule; Crown took control. Mughal Empire officially ended.", dp: "The capture of Delhi and exile of Bahadur Shah Zafar marked the end of 300 years of Mughal rule." },
        { title: "4. Reformers", facts: "Shah Waliullah translated Quran to Persian. Syed Ahmed Barelvi led Jihad movement.", reason: "Muslims were losing religious purity and political power.", impact: "Restored pride and unity among Muslims during the British rise.", dp: "Shah Waliullah's call to Ahmed Shah Abdali saved Muslims from Maratha dominance at Panipat." },
        { title: "5. Sir Syed Ahmed Khan", facts: "Founded Aligarh College (1875). Wrote 'The Causes of the Indian Revolt'.", reason: "Believed Muslims would fail without Western education and English.", impact: "Created a loyal educated class; Two-Nation Theory.", dp: "The Urdu-Hindi controversy (1867) convinced him that Hindus and Muslims could not share a single state." },
        { title: "6. Languages", facts: "Urdu vs Hindi controversy in 1867. British favored Hindi in some regions.", reason: "Hindu nationalists wanted to remove Persian/Arabic influence.", impact: "Identified language as a core part of national identity.", dp: "Sir Syed's defense of Urdu laid the foundation for the Two-Nation Theory." }
    ],
    s2: [
        { title: "7. Partition of Bengal 1905", facts: "Lord Curzon divided Bengal. East Bengal had Muslim majority.", reason: "Administrative convenience (54m population). Divide & Rule strategy.", impact: "Swadeshi movement (boycott) by Hindus. Muslim joy.", dp: "The 1911 reversal of this partition proved to Muslims that they needed their own political party." },
        { title: "8. Simla Deputation 1906", facts: "35 leaders met Lord Minto. Requested Separate Electorates.", reason: "Fear of being outvoted by Hindu majority in future reforms.", impact: "Separate electorates granted in 1909.", dp: "This was the first formal success of the Two-Nation Theory in British policy." },
        { title: "9. Muslim League 1906", facts: "Founded in Dacca. Nawab Salimullah was key.", reason: "Need to protect Muslim political rights after the Bengal crisis.", impact: "Gave Muslims a unified voice for the first time.", dp: "The ML became the main vehicle for the demand for Pakistan." },
        { title: "10. Reforms (1909-1935)", facts: "Minto-Morley (1909), Montagu-Chelmsford (1919), GOI Act (1935).", reason: "Rising Indian nationalism and demand for self-rule.", impact: "Gradual shift to provincial autonomy.", dp: "The 1935 Act set the stage for the 1937 elections which proved Congress's bias." },
        { title: "11. Lucknow Pact 1916", facts: "Agreement between Congress and ML. Congress accepted Separate Electorates.", reason: "Desire for a united front against the British during WWI.", impact: "Peak of Hindu-Muslim unity.", dp: "Jinnah earned the title 'Ambassador of Hindu-Muslim Unity' through this pact." },
        { title: "12. Non-Cooperation Movement 1920", facts: "Gandhi's boycott of British goods and titles.", reason: "Response to Rowlatt Act and Jallianwala Bagh.", impact: "Mass mobilization; but suspended after Chauri Chaura violence.", dp: "Suspension without consulting Muslims broke the trust in the Khilafat-Congress alliance." },
        { title: "13. Khilafat Movement 1919", facts: "Ali Brothers led movement to protect the Ottoman Caliph.", reason: "Religious attachment to the Caliphate after WWI.", impact: "United Muslims; taught them political activism.", dp: "Though the Caliphate was abolished by Turks, it created the mass momentum for the Pakistan movement." },
        { title: "14. Delhi Proposals 1927", facts: "Jinnah offered to drop separate electorates for certain safeguards.", reason: "Attempt to find middle ground with Congress.", impact: "Congress rejected it, leading to the Nehru Report.", dp: "The rejection pushed Jinnah to formulate his 14 Points." },
        { title: "15. Simon Commission 1927", facts: "All-British commission to review reforms.", reason: "Determine future constitutional steps.", impact: "Boycotted by most Indians; led to Nehru Report.", dp: "The exclusion of Indians was seen as a direct insult to local political capacity." },
        { title: "16. Nehru Report 1928", facts: "Proposed joint electorates and a secular India.", reason: "Congress vision for future India.", impact: "Rejected by Muslims; ended the era of cooperation.", dp: "It proved that Congress wanted 'Ram Raj' where Muslims would be dominated." },
        { title: "17. Jinnah's 14 Points 1929", facts: "Demanded federal system and separate electorates.", reason: "Response to the Nehru Report's anti-Muslim stance.", impact: "Became the 'Minimum Demands' for Muslims.", dp: "This document unified all Muslim factions under Jinnah's leadership." },
        { title: "18. Salt March 1930", facts: "Gandhi's march to Dandi to break the salt law.", reason: "Protest against British economic monopoly.", impact: "Global attention; mass arrests.", dp: "It forced the British to hold the Round Table Conferences to solve the deadlock." },
        { title: "19. Round Table Conferences 1930-32", facts: "Three meetings in London. Gandhi only attended the 2nd.", reason: "To reach an agreed constitution for India.", impact: "Failed to find consensus; led to Communal Award.", dp: "The failure proved that Hindu and Muslim visions were fundamentally different." },
        { title: "20. Iqbal's Allahabad Address 1930", facts: "Iqbal proposed a separate state in the North-West.", reason: "Believed Muslims needed a territory to protect their culture.", impact: "Provided the vision/philosophy for Pakistan.", dp: "Iqbal transformed the demand from 'rights' to a 'homeland'." },
        { title: "21. Rehmat Ali & Now or Never", facts: "Coined the name 'Pakistan' in 1933.", reason: "Felt the RTC leaders were ignoring the need for a separate nation.", impact: "Gave the movement a powerful name and identity.", dp: "Initially dismissed as a 'student's dream', it soon became the goal of millions." },
        { title: "22. Elections 1937 & Congress Rule", facts: "ML lost; Congress ruled 7 provinces. Wardha Scheme introduced.", reason: "ML was unorganized; Congress was better funded.", impact: "Muslims were oppressed (Bande Mataram); led to Day of Deliverance.", dp: "The 27 months of Congress rule convinced every Muslim that Pakistan was necessary." },
        { title: "23. Pakistan Resolution 1940", facts: "Passed at Minto Park, Lahore. Demanded sovereign states.", reason: "Failure of Congress Rule (1937-39).", impact: "Pakistan became the official goal of the ML.", dp: "It was the first democratic mandate for a new country in the subcontinent." },
        { title: "24. Cripps Mission 1942", facts: "Offered Dominion Status after WWI.", reason: "British needed India's help against Japan.", impact: "Rejected by both Congress and ML.", dp: "The mission was the first time the British admitted 'Partition' was possible (Opt-out clause)." },
        { title: "25. Gandhi-Jinnah Talks 1944", facts: "Met in Bombay. Gandhi rejected the 2-Nation Theory.", reason: "Attempt to solve the deadlock before British left.", impact: "Failed; proved that only Partition could solve the issue.", dp: "The talks elevated Jinnah's status as the sole spokesman for Muslims." },
        { title: "26. Simla Conference 1945", facts: "Lord Wavell proposed parity in the cabinet.", reason: "Form an interim government.", impact: "Failed because Jinnah insisted ML must pick all Muslim members.", dp: "The failure proved ML's total control over the Muslim mandate." },
        { title: "27. Elections 1945-46", facts: "ML won all Central Muslim seats and 90% of Provincial ones.", reason: "Effective organization and 'Pakistan' slogan.", impact: "Confirmed ML's mandate for Pakistan.", dp: "The results made the creation of Pakistan inevitable." },
        { title: "28. Cabinet Mission Plan 1946", facts: "Proposed grouping provinces (A, B, C). ML accepted; Congress didn't.", reason: "Last attempt to keep India united.", impact: "Failure led to Direct Action Day.", dp: "Nehru's statement that Congress could change the plan killed the last hope of unity." },
        { title: "29. Direct Action Day 1946", facts: "Aug 16. Great Calcutta Killings (4000+ dead).", reason: "ML wanted to show the British that Partition was the only way.", impact: "Forced the British to speed up their departure.", dp: "The communal violence proved that Hindus and Muslims could no longer live together." },
        { title: "30. June 3 Plan 1947", facts: "Mountbatten announced the Partition date.", reason: "India was on the brink of a full civil war.", impact: "Creation of India and Pakistan.", dp: "The rushed 10nd-week timeline caused the greatest migration in history." },
        { title: "31. Radcliffe Commission 1947", facts: "Cyril Radcliffe drew the borders in 5 weeks.", reason: "Determine majority areas for each nation.", impact: "Gave Gurdaspur to India (Kashmir link); caused massive riots.", dp: "The 'Radcliffe Award' was seen as biased towards India by many Pakistanis." },
        { title: "32. Independence Act 1947", facts: "Legal transfer of power from British to India/Pakistan.", reason: "End British colonial rule.", impact: "Two sovereign dominions created.", dp: "It ended 200 years of British presence but left the Princely States' future vague." }
    ],
    s3: [
        { title: "33. Jinnah as Governor General", facts: "Secured UN membership; Chose Karachi as capital.", reason: "Needed to build state infrastructure from zero.", impact: "United the nation during the refugee crisis.", dp: "His 11 Aug address declared Pakistan a land of equal rights for all religions." },
        { title: "34. Liaqat Ali Khan (1949-51)", facts: "Objectives Resolution (1949). Assassinated in 1951.", reason: "Set the Islamic framework for the constitution.", impact: "Permanent Islamic character of Pakistan's law.", dp: "The Objectives Resolution remains the preamble of every Pakistan constitution." },
        { title: "35. Malik Ghulam Muhammad (1951-55)", facts: "Dismissed PM Nazimuddin using discretionary powers.", reason: "Power struggle between the bureaucracy and parliament.", impact: "Set a precedent for undemocratic dismissals.", dp: "This era marked the beginning of bureaucratic interference in politics." },
        { title: "36. Iskandar Mirza (1955-58)", facts: "First President. One Unit Scheme. Imposed Martial Law.", reason: "Political instability (4 PMs in 2 years).", impact: "Invited Ayub Khan, leading to the first military rule.", dp: "His dismissal by Ayub just 20 days after Martial Law showed the Army was the true power." },
        { title: "37. Ayub Khan (1958-69)", facts: "Basic Democracies. Decade of Development. 1965 War.", reason: "Promised stability and economic growth.", impact: "Industrial growth but increased wealth inequality (22 families).", dp: "The 1965 Tashkent Declaration damaged his image, leading to his downfall." },
        { title: "38. Yahya Khan & 1971", facts: "1970 elections. Operation Searchlight. Surrender in Dacca.", reason: "Refusal to hand power to Mujibur Rahman.", impact: "Separation of East Pakistan (Bangladesh).", dp: "The 1971 surrender remains the most painful event in Pakistan's history." },
        { title: "39. Z. Ali Bhutto (1972-77)", facts: "1973 Constitution. Nationalization. Simla Agreement.", reason: "Populist mandate 'Roti, Kapra, Makaan'.", impact: "Modernized state but economic output dropped due to state control.", dp: "He initiated the nuclear program to ensure 'strategic parity' with India." },
        { title: "40. Zia ul Haq (1977-88)", facts: "Islamization. Afghan Jihad. Hudood Ordinances.", reason: "Gained legitimacy through religion after the coup.", impact: "Society became radicalized; Kalashnikov culture.", dp: "Supporting the Mujahideen against USSR made Pakistan a frontline US ally but brought drugs/arms." },
        { title: "41. Benazir 1st Term (1988-90)", facts: "First woman PM. Dismissed for corruption.", reason: "Clash with President Ghulam Ishaq Khan and military.", impact: "Political deadlock; dismissal after 20 months.", dp: "Her term faced constant destabilization from Zia-era loyalists." },
        { title: "42. Nawaz 1st Term (1991-93)", facts: "Privatization. Motorway project. Yellow Cab scheme.", reason: "Focus on economic liberalization and infrastructure.", impact: "Struggle for power led to his dismissal by the President.", dp: "The Supreme Court reinstated him, but the Army forced both him and the President to resign." },
        { title: "43. Benazir 2nd Term (1994-96)", facts: "Karachi operation. Clash with brother Murtaza.", reason: "Law and order crisis in Sindh.", impact: "Dismissed by her own party's President (Leghari).", dp: "Corruption allegations (Mr. 10 Percent) peaked during this period." },
        { title: "44. Nawaz 2nd Term (1997-99)", facts: "Nuclear tests (1998). Kargil War. 1999 Coup.", reason: "Conflict with Gen Musharraf over Kargil and command.", impact: "Return of military rule under Musharraf.", dp: "The 1998 tests made Pakistan the first and only Muslim nuclear power." }
    ],
    fr: [
        { title: "45. Relations: USA", facts: "SEATO/CENTO in 50s. Afghan War in 80s. Pressler Amendment.", reason: "Security deterrence for Pak; Anti-Communism for US.", impact: "Billion-dollar aid but reliability issues during wars.", dp: "The 1962 US support for India during the China war shifted Pak towards Beijing." },
        { title: "46. Relations: USSR", facts: "Tashkent Declaration (1966). Steel Mill (1970s). Afghan War.", reason: "Transactional; cold during most of the Cold War.", impact: "Hostility during the 1980s Afghan Jihad.", dp: "Supporting the Mujahideen in the 80s led to constant border violations by Soviet-backed Kabul." },
        { title: "47. Relations: Bangladesh", facts: "Recognition in 1974 at OIC summit. Trade agreements.", reason: "Need to normalize after the 1971 split.", impact: "Improved relations in the 80s under Ziaur Rahman.", dp: "The 1974 Simla agreement paved the way for mutual recognition." },
        { title: "48. Relations: India", facts: "Wars in 48, 65, 71, 99. Indus Water Treaty (1960).", reason: "Kashmir dispute and ideological differences.", impact: "High military spending on both sides.", dp: "The Kashmir issue remains the 'unfinished business of Partition'." },
        { title: "49. Relations: Afghanistan", facts: "Durand Line dispute. Refugee crisis (3m+). Transit trade.", reason: "Afghanistan's claim on Pakhtoonistan.", impact: "Security spillover and economic burden of refugees.", dp: "Afghanistan was the only country to vote against Pakistan's entry into the UN in 1947." },
        { title: "50. Relations: UK & Commonwealth", facts: "Colonial links. Withdrawal in 1972; rejoined in 1989.", reason: "Trade and expatriate community (1.5m people).", impact: "Strong educational and administrative legacy.", dp: "The 1972 withdrawal was a protest against the Commonwealth's recognition of Bangladesh." },
        { title: "51. Relations: China", facts: "KKH highway. All-weather friendship. CPEC ($62bn).", reason: "Shared strategic interests against India.", impact: "China is Pak's most reliable defense and economic partner.", dp: "China's support during the 1965 war proved it was a 'higher than mountains' friend." },
        { title: "52. Relations: Iran", facts: "First to recognize Pak. Support in 1965 war. RCD (1964).", reason: "Historical and cultural ties.", impact: "Strained post-1979 Iranian Revolution but mostly cordial.", dp: "Iran provided crucial sanctuary for Pakistani aircraft during the 1965 war." },
        { title: "53. Relations: Muslim World", facts: "OIC founding member. 1974 Lahore Summit. Saudi aid.", reason: "Islamic identity and financial needs.", impact: "Pak provided military training to Gulf states.", dp: "The 1974 summit made Bhutto a global leader of the Third World/Islamic bloc." },
        { title: "54. Relations: UN", facts: "Joined 1947. Top troop contributor to peacekeeping.", reason: "Platform for Kashmir and global legitimacy.", impact: "Successful mediation in many global conflicts.", dp: "Pakistan has been elected to the Security Council seven times, proving its diplomatic strength." },
        { title: "55. Nuclear Power", facts: "Program started by Bhutto. Tests in 1998 (Chagai).", reason: "Deterrence against India's 1974/1998 tests.", impact: "Ensured strategic parity and prevented full-scale wars.", dp: "Dr. A.Q. Khan is hailed as the father of the 'Islamic Bomb' that saved Pakistan's sovereignty." }
    ]
};

const practiceQs = [
    { q: "Why was the Khilafat Movement founded? [7]", a: "1. Protect Caliphate (Religious duty). 2. Resentment of British WWI policies. 3. Tool for mass political mobilization." },
    { q: "Was the 1935 Act the main reason for the creation of Pakistan? [14]", a: "Side 1: 1935 Act led to 1937 elections which proved Congress bias. Side 2: Sir Syed's 2-Nation Theory, 1940 Resolution, and Jinnah's leadership. Eval: 1935 Act provided the democratic platform that made Partition a formal demand." }
];

function showTab(id, btn) {
    document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.nav-link').forEach(b => b.classList.remove('active'));
    document.getElementById('panel-' + id).classList.add('active');
    btn.classList.add('active');
    if(id === 'db') renderDB('s1');
    if(id === 'drills') renderDrills();
}

function filterSec(s, btn) {
    document.querySelectorAll('.sub-link').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderDB(s);
}

function renderDB(s) {
    const list = document.getElementById('db-list');
    list.innerHTML = topics[s].map((t, i) => `
        <div class="glass-card">
            <div class="topic-header" onclick="this.nextElementSibling.classList.toggle('open')">
                <h3>${t.title}</h3>
                <span>▾</span>
            </div>
            <div class="topic-body">
                <div class="label">The Facts</div>
                <div class="desc">${t.facts}</div>
                <div class="label">Why/Reason</div>
                <div class="desc">${t.reason}</div>
                <div class="label">Impact/Result</div>
                <div class="desc">${t.impact}</div>
                <div class="dp-pill">Developed Point: ${t.dp}</div>
            </div>
        </div>
    `).join('');
}

function renderDrills() {
    document.getElementById('drill-list').innerHTML = practiceQs.map(p => `
        <div class="glass-card">
            <h4>${p.q}</h4>
            <button class="nav-link" style="margin-top:10px" onclick="this.nextElementSibling.classList.toggle('open')">Show Answer Structure</button>
            <div class="topic-body" style="border-top:1px solid var(--border); margin-top:10px">${p.a}</div>
        </div>
    `).join('');
}

function search() {
    let q = document.getElementById('master-search').value.toLowerCase();
    document.querySelectorAll('.glass-card').forEach(card => {
        card.style.display = card.innerText.toLowerCase().includes(q) ? 'block' : 'none';
    });
}

// Startup
showTab('exams', document.querySelector('.nav-link'));
