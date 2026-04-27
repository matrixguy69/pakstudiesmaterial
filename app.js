const topics = {
    s1: [
        { id: 1, title: "Decline of Mughal Empire", points: ["Later Mughals were pleasure-seekers involved in drinking and music. Succession wars (no law of primogeniture) killed military talent.", "Mansabdari system collapse: Governors declared independence, shrinking the empire's revenue.", "Religious Degeneration: Akbar's 'Din-e-Ilahi' and Rajput policies alienated orthodox Muslims.", "Invasions: Nadir Shah (1739) and Ahmed Shah Abdali exposed military vacuum."], dp: "The Battle of Buxar (1764) was the final nail, as the British secured Diwani rights over Bengal, effectively ending Mughal sovereignty." },
        { id: 5, title: "Sir Syed Ahmed Khan", points: ["Two-Nation Theory (1867) born from the Urdu-Hindi controversy in Banaras.", "MAO College (1875) provided modern Western education to compete with Hindus.", "Written Works: 'Loyal Mohammedans of India' to bridge the gap with the British.", "Advice to stay away from Congress (1885) to avoid becoming a 'permanent minority'."], dp: "By focusing on 'education first, politics later,' SASW saved the Muslim community from total marginalization after the 1857 disaster." },
        // ... (Repeat structure for all 55 chapters using the same mapping)
    ],
    s2: [
        { id: 7, title: "Partition of Bengal (1905)", points: ["Administrative necessity: Population of 85 million was ungovernable for one man.", "Political: British wanted to 'Divide and Rule' to weaken the Congress stronghold in Bengal.", "Muslim majority in East Bengal allowed for better agricultural and educational funding.", "Hindu Protest: Swadeshi Movement (boycott of British goods) led to the 1911 reversal."], dp: "The 1911 annulment proved that the British would ignore Muslim loyalty if Hindu pressure became violent enough, leading to the need for the ML." },
        { id: 22, title: "Congress Rule (1937-39)", points: ["Wardha Scheme: Hinduized education forced on Muslim children.", "Bande Mataram: National anthem that was anti-Islamic in sentiment.", "Vidya Mandir: Attempt to replace mosques as centers of learning.", "Economic bias: Muslims were denied jobs and faced religious discrimination."], dp: "The 27 months of 'Congress Tyranny' convinced the masses that Jinnah's 2-Nation Theory was the only survival path, leading to the 1940 Resolution." },
    ],
    // ... Additional sections s3 and fr added here
};

const practiceQs = [
    { q: "Why was the Khilafat Movement founded? [7] (Nov 2005)", a: "1. Protect the Ottoman Caliphate. 2. Post-war resentment toward British. 3. Mobilize Muslim masses." },
    { q: "Was the 1857 War a success for anyone? [14] (June 2012)", a: "Success: End of EIC, Promise of rights. Failure: Muslim punishment, Crown takeover. Eval: It was a 'turning point' rather than a success." },
    { q: "How successful was Ayub Khan's 'Decade of Development'? [14] (Nov 2018)", a: "Success: Green Revolution, Industrialization, Family Laws. Failures: 22 families wealth gap, loss of East Pak sentiment. Eval: Economic boom vs political alienation." },
    { q: "Why did the Cabinet Mission Plan fail? [7] (June 2021)", a: "1. Nehru's speech about changing grouping. 2. Jinnah's distrust. 3. League's withdrawal to 'Direct Action'." }
];

function showTab(id, btn) {
    gsap.to('.panel', { opacity: 0, y: 15, duration: 0.2, onComplete: () => {
        document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
        const activePanel = document.getElementById('tab-' + id);
        activePanel.classList.add('active');
        gsap.to(activePanel, { opacity: 1, y: 0, duration: 0.4 });
    }});
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    if(id === 'db') filter('s1', document.querySelector('.f-pill'));
    if(id === 'drill') renderDrills();
}

function filter(s, btn) {
    document.querySelectorAll('.f-pill').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const container = document.getElementById('db-render');
    container.innerHTML = topics[s].map(t => `
        <div class="card glass item-card">
            <div class="item-head">
                <h3>${t.id}. ${t.title}</h3>
                <span class="year-badge">TOPIC</span>
            </div>
            <div class="item-body">
                ${t.points.map(p => `<p class="p-bullet">• ${p}</p>`).join('')}
                <div class="dp-box"><strong>DEVELOPED POINT:</strong> ${t.dp || "Point detail pending..."}</div>
            </div>
        </div>
    `).join('');
    gsap.from('.item-card', { opacity: 0, x: -20, stagger: 0.05 });
}

function renderDrills() {
    document.getElementById('drill-render').innerHTML = practiceQs.map((d, i) => `
        <div class="card glass">
            <h4>${d.q}</h4>
            <button class="ms-btn" onclick="this.nextElementSibling.classList.toggle('open')">View Mark Scheme</button>
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

// Initial Boot
showTab('ops', document.querySelector('.nav-btn'));
