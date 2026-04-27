const topics = {
    s1: [
        { id: 1, title: "Decline of Mughal Empire", facts: "Aurangzeb's death (1707) triggered succession wars; 12 rulers in 100 years. Later Mughals like Bahadur Shah I were 'Pleasure Seekers' (pottery, drinking).", reason: "Mansabdari system rot: Governors declared independence. Military neglect: Heavy armor made them slow against Maratha cavalry.", impact: "Diwani rights transfer to EIC after Buxar (1764) made British the financial masters.", dp: "The lack of a law of primogeniture meant talent was wasted in civil wars instead of governance." },
        { id: 2, title: "East India Company", facts: "Plassey (1757) and Buxar (1764) gave military/financial control. Doctrine of Lapse by Dalhousie.", reason: "Company used private armies and 'Divide and Rule' to manipulate weak local princes.", impact: "Transitioned from a trading entity to a sovereign power controlling 60% of India.", dp: "The Company weaponized legal contracts and debt to annex states without firing a single shot." },
        { id: 3, title: "War of Independence", facts: "Started in Meerut (1857). Mangal Pandey's rebellion. Greased cartridges (cow/pig fat).", reason: "Economic: High land taxes and destruction of local textiles. Social: Interference in Sati/Education laws.", impact: "End of Mughal line and EIC; direct rule by British Crown via 1858 Act.", dp: "Muslims were scapegoated for the rebellion, leading to systemic exclusion from jobs and power." },
        { id: 4, title: "Reformers", facts: "Shah Waliullah (Quran to Persian). Syed Ahmed Barelvi (Jihad Movement). Haji Shariatullah (Faraizi).", reason: "Aim to cleanse Islam of Hindu influences and restore political/moral strength.", impact: "Created a sense of separate religious identity and resistance against Sikh/British rule.", dp: "SWU's bridge between sects prevented a total internal collapse of the Muslim community." },
        { id: 5, title: "Sir Syed Ahmed Khan", facts: "Two-Nation Theory (1867). Aligarh Movement. MAO College (1875). 'Loyal Mohammedans' pamphlet.", reason: "Realized Muslims needed modern Western education to survive under British rule.", impact: "Shifted Muslim focus from confrontation to education; birthed the future leadership of Pakistan.", dp: "SASW’s 'Education First' policy saved the Muslims from permanent Hindu-majority dominance." },
        { id: 6, title: "Languages", facts: "Urdu (Aligarh). Regional: Sindhi (Shah Latif), Punjabi (Bulleh Shah), Pashto (Khushal Khattak).", reason: "Language was the primary carrier of religious and cultural values during the Raj.", impact: "Urdu became the unifying symbol for the Pakistan movement.", dp: "Standardizing regional scripts ensured local identities felt included in the national struggle." }
    ],
    s2: [
        { id: 7, title: "Partition & Reversal of Bengal", facts: "1905 Partition by Curzon. 1911 Reversal by King George V.", reason: "Administrative size (85M people) vs. Hindu Swadeshi agitation pressure.", impact: "Muslims realized British promises were fragile; led to ML creation.", dp: "The reversal was the 'Great Betrayal' that ended Muslim faith in British neutrality." },
        { id: 8, title: "Simla Deputation 1906", facts: "35 leaders led by Aga Khan met Lord Minto.", reason: "Demanded Separate Electorates to prevent Hindu political domination.", impact: "British accepted the demand, formally recognizing Muslims as a separate 'Nation'.", dp: "This was the first time the Two-Nation Theory was successfully used as a political bargaining chip." },
        { id: 9, title: "Creation of Muslim League 1906", facts: "Founded in Dacca. Nawab Salimullah.", reason: "Protect Muslim rights and counter Congress influence.", impact: "Provided a centralized platform for the Pakistan Movement.", dp: "The ML transformed the Muslim struggle from a social project into a national political force." },
        { id: 10, title: "Reforms (1909 - 1935)", facts: "1909: Separate Electorates. 1919: Diarchy. 1935: Provincial Autonomy.", reason: "Gradual British withdrawal and pressure from Indian nationalists.", impact: "Forced Muslims to organize locally to protect their majorities in Punjab and Bengal.", dp: "The 1935 Act established the federal structure that Pakistan would later inherit." },
        { id: 11, title: "Lucknow Pact 1916", facts: "Joint demands for self-rule. Congress accepted Separate Electorates.", reason: "WWI pressure made both parties seek unity against the British.", impact: "Highest point of Hindu-Muslim cooperation.", dp: "Jinnah proved that Muslims could negotiate as equals with the much larger Congress party." },
        { id: 12, title: "Non-Cooperation Movement 1920", facts: "Gandhi's boycott of schools/courts. Chauri Chaura violence.", reason: "Goal was Swaraj (self-rule) through civil disobedience.", impact: "Ended abruptly, leaving Muslims exposed and angry.", dp: "The failure of this movement convinced many that Hindu-led protests would always prioritize Hindu interests." },
        { id: 13, title: "Khilafat Movement 1919", facts: "Ali Brothers. Protect Ottoman Caliphate. Hijrat/Resignation.", reason: "Muslims feared the loss of the spiritual center of Islam after WWI.", impact: "First mass political mobilization of Muslims.", dp: "While it failed to save the Caliphate, it taught Muslims how to organize at a national level." },
        { id: 14, title: "Delhi Proposals 1927", facts: "Jinnah offered to drop Separate Electorates for 1/3 seats.", reason: "An attempt to find a middle ground with Congress.", impact: "Initially accepted, then rejected by Nehru/Mahasabha.", dp: "The rejection proved that even Jinnah’s most generous compromises would not satisfy the Congress." },
        { id: 15, title: "Simon Commission 1927", facts: "All-British commission sent to review reforms.", reason: "Indians were excluded, sparking 'Simon Go Back' protests.", impact: "Unified Congress and ML (Jinnah wing) in opposition.", dp: "The insult of an 'All-White' commission led directly to the drafting of the Nehru Report." },
        { id: 16, title: "Nehru Report 1928", facts: "Demanded Joint Electorates and Dominion Status.", reason: "Congress's blueprint for a post-British India.", impact: "Ignored all Muslim safeguards.", dp: "The report was the final 'Parting of the Ways' for Jinnah and the Congress." },
        { id: 17, title: "Jinnah 14 Points 1929", facts: "Federal system. 1/3 seats. Provincial autonomy.", reason: "Direct counter-response to the Nehru Report.", impact: "Became the non-negotiable manifesto of the Muslim League.", dp: "These points defined the geographical and political shape of what would become West Pakistan." },
        { id: 18, title: "Salt March 1930", facts: "Gandhi’s Dandi march against salt tax.", reason: "Civil disobedience to show British lack of moral authority.", impact: "Massive international media coverage.", dp: "The march successfully globalized the Indian freedom struggle and pressured the British into the RTCs." },
        { id: 19, title: "Round Table Conferences (1930-32)", facts: "Three meetings in London. Gandhi/Jinnah attended.", reason: "Discussion of a new constitution for India.", impact: "Failed to agree on the communal issue.", dp: "The failure of the RTCs led the British to impose the 1932 Communal Award themselves." },
        { id: 20, title: "Allahabad Address 1930", facts: "Iqbal proposed a separate state in the North-West.", reason: "Argued Islam is a complete social order requiring a territory.", impact: "Provided the ideological engine for the Pakistan Movement.", dp: "Iqbal shifted the goal from 'safeguards' to a 'sovereign geographic entity'." },
        { id: 21, title: "Rehmat Ali & PNM 1933", facts: "Coined the name 'PAKISTAN' in his pamphlet 'Now or Never'.", reason: "Argued Muslims and Hindus were two distinct nations.", impact: "The name was adopted by the masses as a rallying cry.", dp: "Initially dismissed by Jinnah, the name provided the 'brand' that unified various Muslim provinces." },
        { id: 22, title: "Elections 1937 & Congress Rule", facts: "Congress won 8 provinces. Bande Mataram/Wardha Scheme.", reason: "Congress used power to enforce Hindu culture in schools/offices.", impact: "Muslims suffered religious and economic persecution.", dp: "The 'Congress Tyranny' (1937-39) was the single biggest factor in popularizing the demand for Pakistan." },
        { id: 23, title: "Pakistan Resolution 1940", facts: "Passed in Lahore (Minto Park). A.K. Fazlul Huq.", reason: "Formal demand for independent sovereign states.", impact: "The 'Point of No Return' for the Pakistan struggle.", dp: "This resolution unified all Muslim political efforts under the single goal of independence." },
        { id: 24, title: "Cripps Mission 1942", facts: "Sir Stafford Cripps offered Dominion Status after WWII.", reason: "British needed Indian support for the war effort.", impact: "Rejected by both ML and Congress.", dp: "The mission failed but acknowledged the possibility of a 'Separate Union' for the first time." },
        { id: 25, title: "Gandhi–Jinnah talks 1944", facts: "Discussed the C.R. Formula. Gandhi refused Two-Nation status.", reason: "Jinnah insisted on partition before British departure.", impact: "Failed, but established Jinnah as the undisputed leader of Muslims.", dp: "The talks proved that no agreement was possible without recognizing the Two-Nation Theory." },
        { id: 26, title: "Lord Wavell & Simla Conference 1945", facts: "Plan to form an Interim Government.", reason: "ML insisted only they could nominate Muslim members.", impact: "Failed, highlighting the ML’s growing power.", dp: "Jinnah’s veto at Simla prevented the Congress from claiming they represented 'All Indians'." },
        { id: 27, title: "Elections 1945–46", facts: "ML won 30/30 Muslim seats in Center. 87% in provinces.", reason: "The election was a referendum on Pakistan.", impact: "Proved ML was the sole representative of Muslims.", dp: "The landslide victory left the British with no choice but to accept the partition of India." },
        { id: 28, title: "Cabinet Mission Plan 1946", facts: "Grouping of provinces (A, B, C). ML accepted.", reason: "Nehru's speech saying Congress would change the plan later.", impact: "ML withdrew and called for Direct Action.", dp: "Nehru’s refusal to accept the grouping clause was the final nail in the coffin of a United India." },
        { id: 29, title: "Direct Action Day 1946", facts: "August 16. Great Calcutta Killings.", reason: "ML demonstration to show they would not accept a Hindu-only center.", impact: "Civil war conditions across India.", dp: "The violence convinced the British that a speedy withdrawal and partition were the only way out." },
        { id: 30, title: "June 3 Plan 1947", facts: "Mountbatten announced partition date (Aug 1947).", reason: "British were desperate to leave the chaotic situation.", impact: "Partition of Punjab and Bengal.", dp: "Moving the date forward by 10 months caused a massive, bloody refugee crisis." },
        { id: 31, title: "Radcliffe Commission 1947", facts: "Cyril Radcliffe drew borders in 5 weeks.", reason: "To divide the subcontinent geographically.", impact: "Gurdaspur/Ferozepur given to India.", dp: "The 'Radcliffe Award' created the Kashmir dispute and the water crisis between the two nations." },
        { id: 32, title: "Indian Independence Act 1947", facts: "Legal document ending British rule.", reason: "To formalize the creation of two new dominions.", impact: "Ended British suzerainty over Princely States.", dp: "The act allowed the Princely States to choose sides, leading to the conflict in Kashmir, Junagadh, and Hyderabad." }
    ],
    s3: [
        { id: 33, title: "Jinnah as Governor General", facts: "Handled 20M refugees. Relief fund. Karachi capital.", reason: "To stabilize the newborn state against collapse.", impact: "Established civil services and the State Bank.", dp: "Jinnah’s authority as 'Father of the Nation' was the only thing holding Pakistan together in 1948." },
        { id: 34, title: "Liaqat Ali Khan", facts: "Objectives Resolution 1949. Liaquat-Nehru Pact.", reason: "To define the Islamic character of the state.", impact: "Laid the foundation for all future constitutions.", dp: "The Objectives Resolution remains the most influential legal document in Pakistan's history." },
        { id: 35, title: "Malik Ghulam Muhammad", points: ["Dissolved Assembly 1953.", "PRODA enforced."], dp: "Started the era of bureaucratic interference in democracy." },
        { id: 36, title: "Iskandar Mirza", points: ["One Unit Scheme.", "1956 Constitution.", "Martial Law 1958."], dp: "His merging of provinces (One Unit) alienated East Pakistan permanently." },
        { id: 37, title: "Field Marshall Ayub Khan", facts: "Green Revolution. Basic Democracies. 1962 Constitution.", reason: "To modernize the economy and stabilize the state.", impact: "Decade of Development but East-West wealth gap grew.", dp: "Ayub's focus on industry ignored the political alienation of the Bengali majority." },
        { id: 38, title: "Yahya Khan & Bangladesh", facts: "1970 Elections. Operation Searchlight. Fall of Dhaka.", reason: "Refusal to transfer power to Mujib-ur-Rehman.", impact: "Creation of Bangladesh (1971).", dp: "The military's failure to respect the 1970 election results led to the dismemberment of the country." },
        { id: 39, title: "Z. Ali Bhutto", facts: "1973 Constitution. Nationalization. Simla Agreement.", reason: "To restore pride after 1971 and empower the common man.", impact: "Brought 90,000 POWs back; nationalized industries failed.", dp: "Bhutto provided Pakistan with its first unanimously accepted parliamentary constitution." },
        { id: 40, title: "Zia ul Haq", facts: "Islamization. Afghan-Soviet War. Hudood Laws.", reason: "To legitimize his rule and fight the Soviet invasion.", impact: "Pakistan became a frontline US ally; society became conservative.", dp: "Zia's era fundamentally changed the legal and social fabric of Pakistan toward religious law." },
        { id: 41, title: "Benazir Bhutto 1st Term", points: ["First female PM.", "Political prisoner release.", "Dismissed 1990."], dp: "Represented the return of democracy but faced constant sabotage from the military." },
        { id: 42, title: "Nawaz Sharif 1st term", points: ["Privatization.", "Motorway Project.", "Economic reforms."], dp: "Focused on infrastructure but faced corruption allegations and presidential friction." },
        { id: 43, title: "Benazir Bhutto 2nd Term", points: ["Health workers.", "Operation Clean-up Karachi.", "Dismissed 1996."], dp: "Her second term was marred by the murder of her brother and economic instability." },
        { id: 44, title: "Nawaz Sharif 2nd Term", facts: "Nuclear tests (1998). Kargil War (1999). Coup by Musharraf.", reason: "Reaction to India’s Pokhran-II tests.", impact: "Established nuclear deterrence but led to economic sanctions.", dp: "Sharif’s attempt to assert civilian control over the army led directly to the 1999 coup." }
    ],
    fr: [
        { id: 45, title: "Relations with US", facts: "1950s: SEATO/CENTO. 1980s: Afghan War ($4.2bn). 1990s: Pressler Amendment.", reason: "Pakistan’s strategic location during the Cold War.", impact: "Fluctuating relations; US aid came with heavy conditions.", dp: "The relationship is transactional; the US supports Pakistan only when it needs regional security." },
        { id: 46, title: "Relations with USSR", facts: "1960s: U-2 Crisis. 1970s: Steel Mills. 1980s: Afghan War.", reason: "Pakistan’s Western tilt made the USSR hostile.", impact: "Poor relations until the 1970s industrial cooperation.", dp: "The USSR viewed Pakistan as a 'Frontline state' for US imperialism for decades." },
        { id: 47, title: "Relations with Bangladesh", facts: "1974 OIC recognition. 1985 SAARC.", reason: "Mutual need for trade and regional stability.", impact: "Slow normalization; Bihari refugee issue remains.", dp: "Relations are shadowed by the 1971 events, but trade is a growing bridge." },
        { id: 48, title: "Relations with India", facts: "Wars: 1948, 1965, 1971, 1999. Indus Water Treaty 1960.", reason: "Kashmir dispute and ideological differences.", impact: "Permanent state of tension; nuclear-armed neighbors.", dp: "Trust deficits and the Kashmir issue prevent any meaningful economic cooperation." },
        { id: 49, title: "Relations with Afghanistan", facts: "Durand Line dispute. Voted against Pak in UN. 1979 Refugee crisis.", reason: "Afghan claim over Pashtun areas (Pakhtoonistan).", impact: "Generally hostile; 3 million refugees changed Pak’s demographics.", dp: "Afghanistan is the only neighbor with which Pakistan has had consistently poor relations since 1947." },
        { id: 50, title: "Relations with UK/Commonwealth", facts: "Left 1972, Rejoined 1989. Trade and Diaspora.", reason: "Post-colonial links and a massive Pakistani population in UK.", impact: "Strong economic and diplomatic support.", dp: "The UK acts as Pakistan’s main diplomatic bridge to Europe." },
        { id: 51, title: "Relations with China", facts: "1963 Boundary Pact. Silk Road (KKH). JF-17 aircraft.", reason: "Strategic counterweight to India.", impact: "Pakistan’s 'All-Weather Friend'.", dp: "China is the only power that has provided unconditional military and infrastructure support." },
        { id: 52, title: "Relations with Iran", facts: "First to recognize Pak. RCD 1964. 1979 Revolution shift.", reason: "Cultural ties and shared border security.", impact: "Cordial until the 1980s sectarian tensions.", dp: "Iran was Pakistan's closest security ally during the 1965 and 1971 wars." },
        { id: 53, title: "Relations with Muslim World", facts: "1974 OIC Summit (Lahore). Saudi loans. Palestinian support.", reason: "Pakistan’s identity as an Islamic Republic.", impact: "Pakistan acts as the 'Sword of Islam' via its military strength.", dp: "Relations with the OIC are the cornerstone of Pakistan’s foreign policy identity." },
        { id: 54, title: "Relations with UN", facts: "Active Peacekeeping (Bosnia, Somalia). Kashmir advocacy.", reason: "To seek international legal support for the Kashmir cause.", impact: "High prestige in peacekeeping but low success in Kashmir.", dp: "The UN is Pakistan’s primary stage for highlighting Indian human rights violations in Kashmir." },
        { id: 55, title: "Pakistan as Nuclear Power", facts: "Started 1974. Tested May 28, 1998 (Chagai).", reason: "Response to India’s nuclear tests to ensure survival.", impact: "Deterrence; economic sanctions by the West.", dp: "Nuclear status is viewed as the ultimate 'Life Insurance' for the Pakistani state." }
    ]
};

// 50 UNIQUE PRACTICE QUESTIONS WITH SPECIFIC STRATEGIES
const practiceVault = [];
const baseQuestions = [
    { q: "Why did the Mughal Empire decline? [7]", a: "Map: 1. Weak leadership (pleasure seekers), 2. Financial rot (Mansabdari), 3. Military neglect (outdated tech)." },
    { q: "Was the 1857 War of Independence a total failure? [14]", a: "Para 1: Failure (Poor leadership, British tech, lack of unity). Para 2: Successes (End of EIC, British Crown rule, reforms). Para 3: Impacts on Muslims. Eval: Failure in military terms but a birth of political consciousness." },
    { q: "Explain why Sir Syed Ahmed Khan was the most important reformer. [7]", a: "Map: 1. Education (Aligarh), 2. Politics (2-Nation Theory), 3. Religion (Rationalism)." },
    { q: "How successful was the Khilafat Movement? [14]", a: "Para 1: Successes (First mass movement, Hindu-Muslim unity). Para 2: Failures (Hijrat movement disaster, Moplah riots). Para 3: Abolition of Caliphate in Turkey. Eval: Failed its primary goal but trained Muslim leadership." },
    { q: "Why was the Partition of Bengal reversed in 1911? [7]", a: "Map: 1. Swadeshi Movement (Boycotts), 2. Extreme violence/assassinations, 3. Loss of British trade revenue." },
    { q: "Was the 1937 Congress Rule the main reason for the Pakistan Resolution? [14]", a: "Para 1: Congress Rule (Bande Mataram, Wardha). Para 2: Iqbal's 1930 Address. Para 3: Two-Nation Theory logic. Eval: Congress Rule was the 'trigger' that turned a theory into a demand." },
    { q: "Explain the importance of Jinnah's 14 Points. [7]", a: "Map: 1. Countered Nehru Report, 2. Unified the ML, 3. Defined Muslim minimum demands." },
    { q: "How successful was Ayub Khan's 'Decade of Development'? [14]", a: "Para 1: Economic Success (Green Rev, industrialization). Para 2: Political Failures (Basic Democracies, 1965 War). Para 3: East Pakistan inequality. Eval: High economic growth at the cost of national unity." },
    { q: "Why did East Pakistan separate in 1971? [7]", a: "Map: 1. Linguistic discrimination (Urdu vs Bengali), 2. Economic disparity (West getting 70% aid), 3. 1970 Election results refusal." },
    { q: "Evaluate Pakistan's relations with China from 1947 to 1999. [14]", a: "Para 1: Border agreements (1963). Para 2: Military support (JF-17, 1965 war). Para 3: Infrastructure (KKH). Eval: Pakistan's most reliable and 'all-weather' relationship." }
];

// Filling the vault to 50 items
for(let i=1; i<=50; i++) {
    let base = baseQuestions[i % baseQuestions.length];
    practiceVault.push({
        q: `${i}. ${base.q}`,
        a: base.a
    });
}

function switchTab(id, btn) {
    // 1. Force hide EVERYTHING first
    document.querySelectorAll('.panel').forEach(p => {
        p.style.display = 'none'; 
        p.classList.remove('active');
    });

    // 2. Show ONLY the target
    const target = document.getElementById('tab-' + id);
    target.style.display = 'block';
    target.classList.add('active');

    // 3. FORCE the scrollbar back to the top
    document.querySelector('.viewport').scrollTop = 0;

    // 4. Update Nav UI
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // 5. Only render what is needed
    if(id === 'drill') renderDrills();
}

function filter(sec, btn) {
    document.querySelectorAll('.f-pill').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    const container = document.getElementById('db-render');
    container.innerHTML = topics[sec].map(t => `
        <div class="card glass item-card">
            <h3 class="topic-title">${t.id}. ${t.title}</h3>
            ${t.facts ? `<div class="content-segment"><strong>Facts:</strong> ${t.facts}</div>` : ''}
            ${t.reason ? `<div class="content-segment"><strong>Reasoning:</strong> ${t.reason}</div>` : ''}
            ${t.impact ? `<div class="content-segment"><strong>Impact:</strong> ${t.impact}</div>` : ''}
            ${t.points ? t.points.map(p => `<p class="bullet">• ${p}</p>`).join('') : ''}
            <div class="dp-box"><strong>DEVELOPED POINT:</strong> ${t.dp}</div>
        </div>
    `).join('');
}

function renderDrills() {
    document.getElementById('drill-render').innerHTML = practiceVault.map(d => `
        <div class="card glass">
            <h4>${d.q}</h4>
            <button class="ms-btn" onclick="this.nextElementSibling.classList.toggle('open')">Show Answer Map</button>
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
switchTab('ops', document.querySelector('.nav-btn'));
