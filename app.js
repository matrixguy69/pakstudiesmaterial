const historyDB = {
    s1: [
        {
            id: 1, title: "Decline of Mughal Empire",
            points: [
                "Administratively: Later Mughals (pleasure-seekers) focused on drinking/music instead of statecraft. Central control collapsed.",
                "Succession: Lack of 'Law of Primogeniture' caused bloody civil wars between princes, draining the treasury and killing military talent.",
                "Military: The Mansabdari system became corrupt; governors kept the tax money and declared independence (e.g., Oudh, Bengal, Hyderabad).",
                "Foreign Invasions: Nadir Shah (1739) and Ahmed Shah Abdali's raids exposed the military vacuum, allowing the British to step in."
            ],
            dp: "The decline wasn't just internal; the British industrial advantage and organized military tech outweighed the Mughals' medieval tactics."
        },
        {
            id: 2, title: "East India Company",
            points: [
                "Trade to Power: EIC shifted from spices to political control after the Battle of Plassey (1757) and Buxar (1764).",
                "Doctrine of Lapse: Lord Dalhousie's policy to seize states without a male heir (Jhansi, Oudh) fueled massive resentment.",
                "Economic Drain: British imposed high taxes and destroyed the local textile industry to favor Lancashire cotton imports."
            ],
            dp: "By 1850, the EIC operated as a 'Government' rather than a company, controlling the legal and fiscal lives of millions."
        },
        {
            id: 3, title: "War of Independence (1857)",
            points: [
                "Immediate Cause: Greased cartridges (cow/pig fat) offended both Muslims and Hindus, leading to the Meerut mutiny.",
                "Political: The mistreatment of Mughal Emperor Bahadur Shah Zafar (sent to Rangoon) symbolized the end of Indian sovereignty.",
                "Why it failed: Lack of a unified leader, superior British telegraph/railway tech, and the support of Sikhs/Punjabis for the British."
            ],
            dp: "The 1857 failure led to the Government of India Act 1858, transferring power directly to the British Crown."
        },
        { id: 4, title: "Reformers (SWU, Barelvi, SASW)", points: ["Shah Waliullah's translation of Quran to Persian bridged the gap between scholars and laymen.", "Syed Ahmed Barelvi's Jihad Movement failed at Balakot but revived the spirit of struggle.", "Haji Shariatullah's Faraizi Movement focused on rural Bengali Muslims."] },
        { id: 5, title: "Sir Syed Ahmed Khan", points: ["Two-Nation Theory (1867) born from Urdu-Hindi controversy.", "Scientific Society (1864) and MAO College (1875) modernized Muslim education.", "Aligarh Movement aimed to remove British suspicion of Muslims after 1857."] },
        { id: 6, title: "Languages", points: ["Urdu was promoted as a 'cultural glue' for Muslims.", "Punjabi, Sindhi, Pashto, and Balochi literature preservation was encouraged to build provincial pride."] }
    ],
    s2: [
        {
            id: 7, title: "Partition of Bengal (1905)",
            points: [
                "Reason: Administrative necessity—Bengal had 85 million people. Lord Curzon claimed it was 'ungovernable'.",
                "Hindu Reaction: Swadeshi Movement (Boycott of British goods) and violent protests in Calcutta.",
                "Muslim Reaction: Welcomed it as it gave them a majority in East Bengal, leading to the creation of the Muslim League."
            ],
            dp: "The 1911 reversal (Annulment) proved to Muslims that the British would bow to Hindu pressure, ending Muslim trust in British promises."
        },
        { id: 8, title: "Simla Deputation 1906", points: ["35 Muslim leaders met Lord Minto.", "Demanded Separate Electorates to ensure Muslim representation in councils.", "Success: British accepted the principle, forming the basis of the 1909 Reforms."] },
        { id: 9, title: "Creation of Muslim League 1906", points: ["Nawab Salimullah hosted the meeting in Dacca.", "Objective: Protect Muslim political rights and loyalty to the British.", "Counter-balanced the Hindu-dominated Congress."] },
        { id: 10, title: "Reforms (1909, 1919, 1935)", points: ["1909: Separate Electorates granted.", "1919: Diarchy introduced (transferred vs reserved subjects).", "1935: Provincial Autonomy and end of Diarchy at province level."] },
        { id: 11, title: "Lucknow Pact 1916", points: ["Congress and League agreed on 1/3rd Muslim representation.", "Joint demand for self-rule. Jinnah as the architect of unity."] },
        { id: 12, title: "Non-Cooperation Movement 1920", points: ["Gandhi's boycott of schools/offices.", "Failed after Chauri Chaura violence (1922).", "Left Muslims feeling betrayed by the sudden withdrawal."] },
        { id: 13, title: "Khilafat Movement 1919", points: ["Ali Brothers led protests to save the Ottoman Caliphate.", "Hijrat Movement (migration to Afghanistan) was a disaster.", "Ended when Mustafa Kemal Ataturk abolished the Caliphate in Turkey."] },
        { id: 14, title: "Delhi Proposals 1927", points: ["Jinnah offered to waive separate electorates if Sindh was made a province."] },
        { id: 15, title: "Simon Commission 1927", points: ["All-British commission. Boycotted by both League and Congress."] },
        { id: 16, title: "Nehru Report 1928", points: ["Demanded joint electorates. Rejected Muslim safeguards.", "Forced Jinnah to give his 14 Points."] },
        { id: 17, title: "Jinnah's 14 Points 1929", points: ["The 'minimum demands' for Muslim cooperation.", "Demanded federal system with provincial autonomy."] },
        { id: 18, title: "Salt March 1930", points: ["Gandhi's protest against salt tax. Showed mass power of Congress."] },
        { id: 19, title: "Round Table Conferences (1930-32)", points: ["Minority issues couldn't be resolved. Communal Award (1932) resulted."] },
        { id: 20, title: "Iqbal's Allahabad Address 1930", points: ["First formal demand for a North-Western Muslim state."] },
        { id: 21, title: "Rehmat Ali (1933)", points: ["Coined 'Pakistan' in 'Now or Never' pamphlet."] },
        { id: 22, title: "Elections 1937 & Congress Rule", points: ["Wardha Scheme (Hinduized education) and Bande Mataram.", "Muslims felt persecuted for 27 months.", "Led to 'Day of Deliverance' in 1939."] },
        { id: 23, title: "Pakistan Resolution 1940", points: ["Adopted at Lahore. Defined the final goal as sovereign Muslim states."] },
        { id: 24, title: "Cripps Mission 1942", points: ["Offered Dominion status. Rejected by Gandhi as a 'post-dated cheque'."] },
        { id: 25, title: "Gandhi-Jinnah Talks 1944", points: ["Discussed the C.R. Formula. Gandhi only offered a 'district-wise' partition."] },
        { id: 26, title: "Simla Conference 1945", points: ["Wavell Plan failed because Jinnah wanted ML to name all Muslim members."] },
        { id: 27, title: "Elections 1945-46", points: ["ML won all Muslim seats in the center. Proved they were the sole voice."] },
        { id: 28, title: "Cabinet Mission 1946", points: ["Grouped India into A, B, C categories. Rejected after Nehru's 'sovereignty' speech."] },
        { id: 29, title: "Direct Action Day 1946", points: ["League protest in Calcutta. 4000 killed. Proved partition was inevitable."] },
        { id: 30, title: "June 3 Plan 1947", points: ["The Partition blueprint. Princely states given choice."] },
        { id: 31, title: "Radcliffe Award 1947", points: ["Unfair boundary line. Awarded Gurdaspur to India (Kashmir access)."] },
        { id: 32, title: "Indian Independence Act 1947", points: ["Legal end to the British Empire in India."] }
    ],
    s3: [
        {
            id: 33, title: "Jinnah as Governor General (1947-48)",
            points: [
                "Infrastructure: Established the State Bank and organized civil services from Karachi (the new capital).",
                "Refugee Crisis: Handled 20 million displaced people through the Quaid-e-Azam Relief Fund.",
                "Kashmir: Faced the first war with India (1948) after the unfair Radcliffe Award."
            ],
            dp: "His charisma held the country together when the Indian leadership predicted Pakistan would collapse within six months."
        },
        { id: 34, title: "Liaqat Ali Khan (1949-51)", points: ["Objectives Resolution (1949) set the Islamic-Democratic base.", "Liaqat-Nehru Pact for minority rights."] },
        { id: 35, title: "Malik Ghulam Muhammad (1951-55)", points: ["Dismissed Khawaja Nazimuddin. First 'Civilian Coup'."] },
        { id: 36, title: "Iskandar Mirza (1955-58)", points: ["One Unit Scheme (unified West Pakistan).", "1956 Constitution. Later declared Martial Law."] },
        { id: 37, title: "Ayub Khan (1958-69)", points: ["Basic Democracies system. 1965 War with India.", "Economic boom but 22 families controlled all wealth."] },
        { id: 38, title: "Yahya Khan & 1971", points: ["Legal Framework Order. 1970 Elections (Mujib won).", "Operation Searchlight led to the creation of Bangladesh."] },
        { id: 39, title: "Z. Ali Bhutto (1972-77)", points: ["Simla Agreement (1972). 1973 Constitution.", "Nationalization of industries; Nuclear program start."] },
        { id: 40, title: "Zia ul Haq (1977-88)", points: ["Islamization (Zakat/Ushr). Afghan Jihad against USSR.", "Frontline state for the USA."] },
        { id: 41, title: "Benazir Bhutto (1st Term)", points: ["First female PM. Dismissed by GIK on corruption charges."] },
        { id: 42, title: "Nawaz Sharif (1st Term)", points: ["Privatization and Motorways (M2). Nuclear race intensifies."] },
        { id: 43, title: "Benazir Bhutto (2nd Term)", points: ["Clash with brother Murtaza. Dismissed by Farooq Leghari."] },
        { id: 44, title: "Nawaz Sharif (2nd Term)", points: ["Nuclear Tests (Chagai 1998). Kargil War. 1999 Coup by Musharraf."] }
    ],
    fr: [
        { id: 45, title: "Relations with USA", points: ["1950s: Alliance (SEATO/CENTO) against USSR.", "1962: US sided with India against China, cooling relations.", "1980s: Golden era due to Afghan War ($4.2bn aid).", "1990s: Pressler Amendment (Sanctions)."] },
        { id: 46, title: "Relations with USSR", points: ["Tashkent Declaration (1966). USSR helped build Pakistan Steel Mills."] },
        { id: 47, title: "Relations with Bangladesh", points: ["1974: OIC Summit in Lahore marked official recognition."] },
        { id: 48, title: "Relations with India", points: ["Indus Water Treaty (1960). Three major wars (1948, 1965, 1971)."] },
        { id: 49, title: "Relations with Afghanistan", points: ["Durand Line dispute. Hosted 3.5 million refugees in the 1980s."] },
        { id: 50, title: "Relations with UK", points: ["Commonwealth link. UK as a mediator in water and border disputes."] },
        { id: 51, title: "Relations with China", points: ["'All-weather' friendship. 1963 Boundary agreement. CPEC roots."] },
        { id: 52, title: "Relations with Iran", points: ["First to recognize Pakistan. RCD (1964) partnership."] },
        { id: 53, title: "Relations with Muslim World", points: ["OIC (1969/1974). Strong ties with Saudi Arabia and UAE for oil/defense."] },
        { id: 54, title: "Relations with UN", points: ["Pakistan as one of the largest troop contributors to UN Peacekeeping."] },
        { id: 55, title: "Nuclear Power Status", points: ["Chagai-I (May 1998). Response to India's Pokhran-II."] }
    ]
};

// UI LOGIC
function showTab(id, btn) {
    gsap.to('.tab-content', { opacity: 0, y: 20, duration: 0.3, onComplete: () => {
        document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
        document.getElementById('tab-' + id).classList.add('active');
        gsap.to('#tab-' + id, { opacity: 1, y: 0, duration: 0.5 });
    }});
    document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
    btn.classList.add('active');
}

function filter(sec, btn) {
    document.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    renderList(sec);
}

function renderList(sec) {
    const container = document.getElementById('db-render');
    container.innerHTML = historyDB[sec].map(t => `
        <div class="card glass item-card">
            <div class="card-header">
                <h3>${t.id}. ${t.title}</h3>
                <span class="badge">CHARTABLE</span>
            </div>
            <div class="expanded-points">
                ${t.points.map(p => `<p class="bullet">• ${p}</p>`).join('')}
                <div class="dp-tag">DP: ${t.dp}</div>
            </div>
        </div>
    `).join('');
    gsap.from('.item-card', { opacity: 0, scale: 0.95, stagger: 0.05, duration: 0.6 });
}

function searchDB() {
    let q = document.getElementById('dbSearch').value.toLowerCase();
    document.querySelectorAll('.item-card').forEach(card => {
        card.style.display = card.innerText.toLowerCase().includes(q) ? 'block' : 'none';
    });
}

// DRILLS DATA (FROM PAPACAMBRIDGE PATTERNS)
const pastPapers = [
    { q: "Why was the Khilafat Movement founded? [7 Marks]", a: "1. Protect Caliphate. 2. Post-war resentment. 3. Political mobilization." },
    { q: "Was Jinnah's role as Governor General successful? [14 Marks]", a: "Side 1: Infrastructure, refugees, State Bank. Side 2: Language issue, early death. Eval: Jinnah was the anchor that prevented collapse." }
];

function renderDrills() {
    document.getElementById('drill-render').innerHTML = pastPapers.map(d => `
        <div class="card glass drill-card">
            <h4>${d.q}</h4>
            <button class="pill" onclick="this.nextElementSibling.style.display='block'">View Scheme</button>
            <div class="ans-box" style="display:none; margin-top:10px; border-top:1px solid #333; padding-top:10px;">${d.a}</div>
        </div>
    `).join('');
}

// INIT
renderList('s1');
renderDrills();
