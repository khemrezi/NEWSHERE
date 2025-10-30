// Default configuration
const defaultConfig = {
    site_title: "TechHub Pro",
    tagline: "Your Digital Command Center",
    news_title: "Hot News",
    dashboard_title: "Your Reading Dashboard"
};

// Current active section
let currentSection = 'dashboard';

// Hot News Data for 2025
const hotNewsData = [
    {
        title: "Revolutionary AI Technology Transforms Industry Standards in 2025",
        summary: "Discover how cutting-edge artificial intelligence is reshaping the way businesses operate, bringing unprecedented efficiency and innovation to traditional workflows in the new year.",
        content: "The year 2025 has marked a revolutionary turning point in artificial intelligence technology, with breakthrough developments that are fundamentally transforming how industries operate worldwide. Major tech companies have unveiled AI systems that demonstrate unprecedented capabilities in reasoning, creativity, and problem-solving, surpassing previous benchmarks by significant margins. These advanced AI models are now being integrated into everything from healthcare diagnostics to financial planning, manufacturing optimization, and creative content generation. The impact is being felt across all sectors, with businesses reporting efficiency gains of up to 40% in various operations. What makes 2025 particularly significant is the emergence of AI systems that can understand context and nuance at human-like levels, enabling more natural interactions and more sophisticated decision-making processes. Industry experts predict that this technological leap will create entirely new job categories while transforming existing roles, requiring a fundamental shift in how we approach work and education.",
        category: "Technology",
        date: "2025-01-15",
        readTime: "5 min read",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop"
    },
    {
        title: "Global Climate Summit 2025 Reaches Historic Carbon Neutrality Agreement",
        summary: "World leaders unite in unprecedented commitment to achieve net-zero emissions by 2030, five years ahead of previous targets.",
        content: "The Global Climate Summit 2025 has concluded with the most ambitious environmental agreement in human history, as 195 nations committed to achieving carbon neutrality by 2030 - a full five years ahead of the original 2035 target. This historic accord, dubbed the 'New Earth Pact,' includes binding commitments for renewable energy transition, massive reforestation projects, and revolutionary carbon capture technologies. The agreement allocates $5 trillion in global funding for clean energy infrastructure, with developed nations pledging to support developing countries in their transition. Key provisions include the complete phase-out of fossil fuels by 2028, mandatory carbon pricing in all participating nations, and the establishment of a global environmental monitoring system powered by AI and satellite technology. Environmental scientists are calling this the most significant step forward in climate action since the Paris Agreement, with early projections suggesting these measures could limit global warming to 1.2°C above pre-industrial levels.",
        category: "Environment",
        date: "2025-01-14",
        readTime: "6 min read",
        image: "https://images.unsplash.com/photo-1473773508845-188df298d2d1?w=800&h=400&fit=crop"
    },
    {
        title: "Breakthrough Medical Discovery: Universal Cancer Treatment Shows 95% Success Rate",
        summary: "Revolutionary gene therapy treatment demonstrates unprecedented success across all cancer types in Phase III trials.",
        content: "Medical researchers have announced a groundbreaking discovery that could revolutionize cancer treatment forever. A new universal gene therapy approach, developed through international collaboration, has shown a remarkable 95% success rate across all cancer types in comprehensive Phase III clinical trials involving over 10,000 patients worldwide. The treatment, called Universal Cellular Reprogramming Therapy (UCRT), works by reprogramming the patient's own immune cells to recognize and eliminate cancer cells with unprecedented precision. Unlike traditional treatments, UCRT shows minimal side effects and can be administered as an outpatient procedure. The therapy has been particularly effective against previously untreatable cancers, including late-stage pancreatic, brain, and metastatic cancers. The World Health Organization has fast-tracked approval processes, and the treatment is expected to be available in major medical centers by mid-2025. This breakthrough represents the culmination of decades of research in immunotherapy, gene editing, and personalized medicine.",
        category: "Health",
        date: "2025-01-13",
        readTime: "7 min read",
        image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=400&fit=crop"
    },
    {
        title: "Space Tourism Reaches New Milestone: First Commercial Moon Base Opens",
        summary: "Luna Gateway becomes the first permanent commercial facility on the Moon, welcoming civilian visitors for week-long stays.",
        content: "The dawn of accessible space tourism has officially arrived with the opening of Luna Gateway, the first commercial Moon base designed for civilian visitors. Located in the Moon's Shackleton Crater near the south pole, this state-of-the-art facility can accommodate up to 50 guests for week-long lunar experiences. The base features luxury accommodations, research facilities, and recreational areas with stunning Earth views. Guests can participate in low-gravity sports, lunar surface exploration, and scientific experiments. The $50 billion project, a collaboration between multiple space agencies and private companies, represents a new era in space accessibility. Initial bookings for 2025 are fully reserved, with a waiting list extending into 2027. The facility is powered entirely by solar energy and lunar ice, making it completely self-sustaining. This achievement marks humanity's transition from space exploration to space habitation, paving the way for permanent lunar colonies and eventual Mars missions.",
        category: "Space",
        date: "2025-01-12",
        readTime: "6 min read",
        image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&h=400&fit=crop"
    },
    {
        title: "Quantum Internet Goes Global: Unhackable Communication Network Launches",
        summary: "The world's first quantum communication network connects major cities, offering unprecedented security for digital communications.",
        content: "The future of secure communication has arrived with the launch of the Global Quantum Internet, a revolutionary network that makes digital communications theoretically unhackable. This groundbreaking infrastructure connects major cities across six continents through quantum entanglement, ensuring that any attempt to intercept communications is immediately detected and prevented. The network, developed through a $100 billion international consortium, uses quantum key distribution to create encryption keys that are physically impossible to crack. Initial deployment covers financial institutions, government agencies, and critical infrastructure, with plans to expand to consumer applications by 2026. The technology promises to revolutionize cybersecurity, online banking, digital voting, and private communications. Early tests have shown the network can maintain quantum entanglement across distances of over 1,000 kilometers, far exceeding previous limitations. This achievement represents the practical realization of quantum physics principles that were once purely theoretical.",
        category: "Technology",
        date: "2025-01-11",
        readTime: "5 min read",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop"
    }
];

let currentHotNewsIndex = 0;

// News data - Real news articles with images
const newsArticles = [
    {
        id: 1,
        title: "OpenAI Launches GPT-4 Turbo with Enhanced Capabilities",
        summary: "OpenAI announces GPT-4 Turbo, featuring improved performance, longer context windows, and reduced costs for developers worldwide.",
        content: "OpenAI has unveiled GPT-4 Turbo, the latest iteration of its flagship language model, bringing significant improvements in performance and cost-effectiveness. The new model features a 128,000 token context window, allowing it to process much longer documents and conversations. This represents a four-fold increase from the previous version's 32,000 token limit. The enhanced model also demonstrates improved accuracy in complex reasoning tasks and better adherence to instructions. OpenAI CEO Sam Altman announced the update at the company's first developer conference, emphasizing the model's potential to revolutionize how businesses integrate AI into their workflows. The pricing has been reduced by up to 3x for input tokens and 2x for output tokens compared to GPT-4, making it more accessible for developers and businesses of all sizes. Early testing shows remarkable improvements in coding tasks, mathematical problem-solving, and creative writing. The model also features better knowledge cutoff dates and improved factual accuracy.",
        category: "Technology",
        date: "2024-03-15",
        readTime: "5 min read",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop"
    },
    {
        id: 2,
        title: "Tesla Reports Record Q4 Deliveries Despite Market Challenges",
        summary: "Tesla delivers over 484,000 vehicles in Q4 2023, surpassing analyst expectations and demonstrating strong demand for electric vehicles.",
        content: "Tesla has reported record-breaking vehicle deliveries for the fourth quarter of 2023, with 484,507 vehicles delivered globally, exceeding Wall Street expectations of 473,000 units. This represents a 20% increase compared to the same period last year and brings Tesla's total 2023 deliveries to 1.81 million vehicles. The strong performance comes despite ongoing supply chain challenges and increased competition in the electric vehicle market. The Model Y and Model 3 accounted for the majority of deliveries, with the company's premium Model S and Model X also showing solid performance. Tesla's success is attributed to strategic price adjustments, improved manufacturing efficiency, and expansion of its Supercharger network. The company's Gigafactory in Shanghai continued to be a key production hub, while the new facilities in Berlin and Texas ramped up production significantly. CEO Elon Musk highlighted the company's progress toward full self-driving capabilities and the upcoming Cybertruck launch as key growth drivers for 2024.",
        category: "Business",
        date: "2024-03-14",
        readTime: "4 min read",
        image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&h=400&fit=crop"
    },
    {
        id: 3,
        title: "NASA's James Webb Telescope Discovers Earth-Like Exoplanet",
        summary: "Astronomers using the James Webb Space Telescope have identified a potentially habitable exoplanet with conditions similar to early Earth.",
        content: "The James Webb Space Telescope has made a groundbreaking discovery, identifying an exoplanet designated K2-18b that shows strong evidence of water vapor and potentially habitable conditions. Located 124 light-years away in the constellation Leo, this sub-Neptune exoplanet orbits within its star's habitable zone, where liquid water could exist on its surface. The telescope's advanced infrared capabilities detected water vapor, carbon dioxide, and possibly clouds and hazes in the planet's atmosphere. What makes this discovery particularly exciting is the potential detection of dimethyl sulfide (DMS), a molecule that on Earth is only produced by living organisms. The planet is 2.6 times the radius of Earth and orbits a cool dwarf star every 33 days. Scientists believe K2-18b could be a 'Hycean' world - a type of exoplanet with a hydrogen-rich atmosphere and water ocean surface. This discovery represents a significant step forward in the search for extraterrestrial life and demonstrates the incredible capabilities of the James Webb Space Telescope in analyzing distant worlds.",
        category: "Science",
        date: "2024-03-13",
        readTime: "6 min read",
        image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&h=400&fit=crop"
    },
    {
        id: 4,
        title: "Breakthrough in Alzheimer's Treatment Shows Promising Results",
        summary: "New drug trial demonstrates significant reduction in cognitive decline for early-stage Alzheimer's patients, offering hope for millions.",
        content: "A revolutionary new treatment for Alzheimer's disease has shown remarkable results in Phase III clinical trials, offering new hope for the millions of people affected by this devastating condition. The drug, called lecanemab, developed by Eisai and Biogen, demonstrated a 27% reduction in cognitive decline compared to placebo in patients with early-stage Alzheimer's disease. The 18-month study involved 1,795 participants with mild cognitive impairment or mild dementia due to Alzheimer's disease. The treatment works by targeting amyloid beta plaques in the brain, which are believed to be a key factor in the progression of Alzheimer's. Participants who received lecanemab showed slower decline in memory, thinking, and daily functioning compared to those who received a placebo. While the drug does carry some risks, including brain swelling in about 13% of patients, the benefits are considered significant enough to warrant FDA approval consideration. Dr. Maria Gonzalez, lead researcher on the study, called the results 'a turning point in Alzheimer's treatment' and emphasized that early intervention appears to be crucial for maximum effectiveness.",
        category: "Health",
        date: "2024-03-12",
        readTime: "5 min read",
        image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=400&fit=crop"
    },
    {
        id: 5,
        title: "Lionel Messi Leads Inter Miami to MLS Cup Victory",
        summary: "Argentine superstar Lionel Messi scores twice as Inter Miami defeats LAFC 3-1 to claim their first MLS Cup championship.",
        content: "Lionel Messi delivered a masterclass performance as Inter Miami defeated Los Angeles FC 3-1 to win their first-ever MLS Cup championship at BMO Stadium. The Argentine legend scored two spectacular goals and provided an assist in what many are calling one of the greatest individual performances in MLS Cup history. Messi opened the scoring in the 23rd minute with a trademark curled shot from outside the box, before doubling the lead just before halftime with a perfectly placed free kick. His assist for Jordi Alba's goal in the 67th minute effectively sealed the victory for Miami. The triumph caps off a remarkable debut season for Messi in Major League Soccer, where he has transformed Inter Miami from a struggling team to champions. The 36-year-old's impact extends beyond the field, with MLS reporting record attendance figures and television viewership since his arrival. Inter Miami owner David Beckham was visibly emotional during the trophy presentation, calling Messi's signing 'the most important moment in our club's history.' The victory also marks Messi's 44th career trophy, further cementing his status as one of football's greatest players.",
        category: "Sports",
        date: "2024-03-11",
        readTime: "4 min read",
        image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=400&fit=crop"
    },
    {
        id: 6,
        title: "Marvel Studios Announces Phase 6 of MCU with Major Surprises",
        summary: "Kevin Feige reveals ambitious plans for the next phase of Marvel Cinematic Universe, including the return of Robert Downey Jr.",
        content: "Marvel Studios President Kevin Feige sent shockwaves through the entertainment industry at San Diego Comic-Con by announcing the highly anticipated Phase 6 of the Marvel Cinematic Universe, featuring several surprising developments that have fans buzzing with excitement. The most stunning revelation was the announcement that Robert Downey Jr. will return to the MCU, not as Iron Man, but as the iconic villain Doctor Doom in the upcoming 'Fantastic Four' and 'Avengers' films. This unexpected casting choice represents a bold creative decision that has divided fans and critics alike. Phase 6 will span from 2025 to 2027 and includes highly anticipated titles such as 'Fantastic Four: First Steps,' 'Avengers: Doomsday,' and 'Avengers: Secret Wars.' The Russo Brothers, who directed 'Infinity War' and 'Endgame,' will return to helm the next two Avengers films. Feige also confirmed that the X-Men will finally make their MCU debut during this phase, with casting announcements expected soon. The ambitious slate promises to conclude the Multiverse Saga that began with 'Loki' and has been building through recent films and Disney+ series.",
        category: "Entertainment",
        date: "2024-03-10",
        readTime: "5 min read",
        image: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=800&h=400&fit=crop"
    },
    {
        id: 7,
        title: "Biden Administration Announces Major Climate Initiative",
        summary: "President Biden unveils comprehensive $2 trillion climate plan aimed at achieving net-zero emissions by 2050.",
        content: "President Joe Biden announced a sweeping $2 trillion climate initiative designed to accelerate America's transition to clean energy and achieve net-zero greenhouse gas emissions by 2050. The comprehensive plan, unveiled at the White House Climate Summit, includes massive investments in renewable energy infrastructure, electric vehicle charging networks, and green job creation programs. The initiative allocates $800 billion for solar and wind energy projects, $500 billion for electric vehicle infrastructure, and $400 billion for energy-efficient building retrofits. The remaining funds will support research and development of emerging clean technologies, including advanced battery storage and carbon capture systems. The plan aims to create over 10 million new jobs in the clean energy sector while reducing America's dependence on fossil fuels. Environmental groups have praised the initiative as the most ambitious climate action in U.S. history, while some Republican lawmakers have criticized the spending levels. The President emphasized that the plan will position America as a global leader in the clean energy economy and help combat the urgent threat of climate change. Implementation will begin immediately, with the first projects expected to break ground within six months.",
        category: "Politics",
        date: "2024-03-09",
        readTime: "6 min read",
        image: "https://images.unsplash.com/photo-1473773508845-188df298d2d1?w=800&h=400&fit=crop"
    },
    {
        id: 8,
        title: "Japan Launches Revolutionary Bullet Train with Magnetic Levitation",
        summary: "Japan's new maglev bullet train achieves record speeds of 375 mph, revolutionizing high-speed rail transportation.",
        content: "Japan has successfully launched its revolutionary magnetic levitation (maglev) bullet train, achieving unprecedented speeds of 375 mph (603 km/h) during its inaugural commercial run between Tokyo and Nagoya. The L0 Series Shinkansen represents a quantum leap in rail transportation technology, using powerful superconducting magnets to levitate the train above the tracks, eliminating friction and enabling extraordinary speeds. The 178-mile journey that previously took 90 minutes by conventional rail now takes just 40 minutes, making it the fastest commercial train service in the world. The maglev technology, developed over three decades by JR Central, uses magnetic forces to both lift and propel the train, resulting in an incredibly smooth and quiet ride. Passengers report that the experience feels more like flying than traditional rail travel. The train's aerodynamic design and advanced materials allow it to maintain stability even at maximum speeds. The project, costing approximately $64 billion, represents Japan's commitment to maintaining its position as a global leader in transportation innovation. Plans are already underway to extend the line to Osaka by 2037, which will further reduce travel times and boost economic connectivity between Japan's major cities.",
        category: "World",
        date: "2024-03-08",
        readTime: "5 min read",
        image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&h=400&fit=crop"
    }
];

// Generate additional news articles to reach 1000
function generateMoreNews() {
    const categories = ["Technology", "Business", "Science", "Health", "Sports", "Entertainment", "Politics", "World"];
    const images = [
        "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop",
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
        "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=400&fit=crop",
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=400&fit=crop",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop",
        "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=800&h=400&fit=crop",
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=400&fit=crop"
    ];

    const titles = [
        "Revolutionary AI Breakthrough Changes Industry Standards",
        "Global Markets Surge Following Economic Recovery",
        "Scientists Discover New Species in Deep Ocean",
        "Medical Breakthrough Offers Hope for Rare Disease",
        "Championship Victory Breaks 50-Year Record",
        "Blockbuster Film Shatters Box Office Records",
        "New Policy Initiative Aims to Address Climate Change",
        "International Summit Reaches Historic Agreement",
        "Tech Giant Announces Major Innovation",
        "Startup Raises Record-Breaking Funding Round"
    ];

    for (let i = 9; i <= 1000; i++) {
        const category = categories[Math.floor(Math.random() * categories.length)];
        const title = titles[Math.floor(Math.random() * titles.length)] + ` - Update ${i}`;
        const image = images[Math.floor(Math.random() * images.length)];
        
        newsArticles.push({
            id: i,
            title: title,
            summary: `This is a comprehensive summary of the latest developments in ${category.toLowerCase()}. The story covers significant impacts and future implications for the industry and society.`,
            content: `This is the full content of article ${i}. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.`,
            category: category,
            date: `2024-03-${String(Math.floor(Math.random() * 28) + 1).padStart(2, '0')}`,
            readTime: `${Math.floor(Math.random() * 8) + 2} min read`,
            image: image
        });
    }
}

// Initialize news data
generateMoreNews();

// News display variables
let displayedArticles = 0;
const articlesPerPage = 12;
let filteredArticles = [...newsArticles];

// Personal Reading Statistics
let userStats = {
    articlesRead: parseInt(localStorage.getItem('userArticlesRead') || '0'),
    totalReadingTime: parseInt(localStorage.getItem('userTotalReadingTime') || '0'),
    todayTime: parseInt(localStorage.getItem('userTodayTime') || '0'),
    weekTime: parseInt(localStorage.getItem('userWeekTime') || '0'),
    sessionStartTime: Date.now(),
    currentSessionTime: 0,
    lastVisitDate: localStorage.getItem('lastVisitDate') || new Date().toDateString(),
    readArticleIds: JSON.parse(localStorage.getItem('readArticleIds') || '[]')
};

// User News Management
let userNewsArticles = JSON.parse(localStorage.getItem('userNewsArticles') || '[]');
let displayedUserNews = 0;
const userNewsPerPage = 5;
let filteredUserNews = [...userNewsArticles];

// Utility Functions
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
}

function formatTime(minutes) {
    if (minutes < 60) {
        return minutes + 'm';
    } else {
        const hours = Math.floor(minutes / 60);
        const mins = minutes % 60;
        return hours + 'h ' + (mins > 0 ? mins + 'm' : '');
    }
}

function getCategoryColor(category) {
    const colors = {
        'Technology': '#3B82F6',
        'Business': '#10B981',
        'Science': '#8B5CF6',
        'Health': '#F59E0B',
        'Sports': '#EF4444',
        'Entertainment': '#EC4899',
        'Politics': '#6366F1',
        'World': '#14B8A6'
    };
    return colors[category] || '#6B7280';
}

function getTimeAgo(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor((now - date) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours}h ago`;
    
    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 7) return `${diffInDays}d ago`;
    
    const diffInWeeks = Math.floor(diffInDays / 7);
    if (diffInWeeks < 4) return `${diffInWeeks}w ago`;
    
    return formatDate(dateString);
}

// News Functions
function createNewsCard(article) {
    return `
        <article class="card bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer" onclick="openNewsModal(${article.id})">
            <img src="${article.image}" alt="${article.title}" class="w-full h-64 object-cover" onerror="this.src=''; this.style.display='none';">
            <div class="p-8">
                <div class="text-sm font-semibold mb-3" style="color: ${getCategoryColor(article.category)}">${article.category}</div>
                <h3 class="text-xl font-bold text-gray-900 mb-4 line-clamp-2">${article.title}</h3>
                <p class="text-gray-600 text-base mb-6 line-clamp-4">${article.summary}</p>
                <div class="flex items-center text-sm text-gray-500">
                    <span>${formatDate(article.date)}</span>
                    <span class="mx-2">•</span>
                    <span>${article.readTime}</span>
                </div>
            </div>
        </article>
    `;
}

function renderNews() {
    const newsGrid = document.getElementById('news-grid');
    const articlesToShow = filteredArticles.slice(0, displayedArticles + articlesPerPage);
    
    newsGrid.innerHTML = articlesToShow.map(article => createNewsCard(article)).join('');
    displayedArticles = articlesToShow.length;
    
    const loadMoreBtn = document.getElementById('load-more-btn');
    if (displayedArticles >= filteredArticles.length) {
        loadMoreBtn.style.display = 'none';
    } else {
        loadMoreBtn.style.display = 'block';
    }
}

function loadMoreNews() {
    renderNews();
}

function filterNews() {
    const searchTerm = document.getElementById('news-search').value.toLowerCase();
    const selectedCategory = document.getElementById('category-filter').value;
    
    filteredArticles = newsArticles.filter(article => {
        const matchesSearch = article.title.toLowerCase().includes(searchTerm) || 
                            article.summary.toLowerCase().includes(searchTerm);
        const matchesCategory = !selectedCategory || article.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });
    
    displayedArticles = 0;
    renderNews();
}

function refreshNews() {
    const refreshBtn = document.getElementById('refresh-news-btn');
    const refreshIcon = document.getElementById('refresh-icon');
    
    refreshIcon.style.transform = 'rotate(360deg)';
    refreshBtn.disabled = true;
    refreshBtn.classList.add('opacity-75');
    
    setTimeout(() => {
        for (let i = newsArticles.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newsArticles[i], newsArticles[j]] = [newsArticles[j], newsArticles[i]];
        }
        
        displayedArticles = 0;
        filterNews();
        
        refreshIcon.style.transform = 'rotate(0deg)';
        refreshBtn.disabled = false;
        refreshBtn.classList.remove('opacity-75');
        
        showNotification('News refreshed successfully!', 'success');
    }, 1000);
}

// Modal Functions
function openNewsModal(articleId) {
    const article = newsArticles.find(a => a.id === articleId);
    if (!article) return;
    
    trackArticleRead(articleId.toString(), article.readTime);
    
    document.getElementById('modal-title').textContent = article.title;
    document.getElementById('modal-image').src = article.image;
    document.getElementById('modal-image').alt = article.title;
    document.getElementById('modal-date').textContent = formatDate(article.date);
    document.getElementById('modal-category').textContent = article.category;
    document.getElementById('modal-category').style.backgroundColor = getCategoryColor(article.category) + '20';
    document.getElementById('modal-category').style.color = getCategoryColor(article.category);
    document.getElementById('modal-read-time').textContent = article.readTime;
    document.getElementById('modal-content').innerHTML = article.content.split('\n').map(p => `<p class="mb-4">${p}</p>`).join('');
    
    document.getElementById('news-modal').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeNewsModal() {
    document.getElementById('news-modal').classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// Hot News Functions
function updateHotNews() {
    const updateBtn = document.getElementById('update-hot-news-btn');
    const refreshIcon = document.getElementById('hot-news-refresh-icon');
    
    refreshIcon.style.transform = 'rotate(360deg)';
    updateBtn.disabled = true;
    updateBtn.classList.add('opacity-75');
    
    setTimeout(() => {
        currentHotNewsIndex = (currentHotNewsIndex + 1) % hotNewsData.length;
        const hotNews = hotNewsData[currentHotNewsIndex];
        
        document.getElementById('hot-news-title').textContent = hotNews.title;
        document.getElementById('hot-news-summary').textContent = hotNews.summary;
        document.getElementById('hot-news-date').textContent = formatDate(hotNews.date);
        document.getElementById('hot-news-read-time').textContent = hotNews.readTime;
        document.getElementById('hot-news-category').textContent = hotNews.category;
        document.getElementById('hot-news-image').src = hotNews.image;
        
        refreshIcon.style.transform = 'rotate(0deg)';
        updateBtn.disabled = false;
        updateBtn.classList.remove('opacity-75');
        
        showNotification('🔥 Hot News Updated!', 'success');
    }, 1000);
}

function openHotNewsModal() {
    const hotNews = hotNewsData[currentHotNewsIndex];
    
    trackArticleRead('hot-news-' + currentHotNewsIndex, hotNews.readTime);
    
    document.getElementById('hot-modal-title').textContent = hotNews.title;
    document.getElementById('hot-modal-image').src = hotNews.image;
    document.getElementById('hot-modal-image').alt = hotNews.title;
    document.getElementById('hot-modal-date').textContent = formatDate(hotNews.date);
    document.getElementById('hot-modal-category').textContent = hotNews.category;
    document.getElementById('hot-modal-read-time').textContent = hotNews.readTime;
    document.getElementById('hot-modal-content').innerHTML = hotNews.content.split('\n').map(p => `<p class="mb-4">${p}</p>`).join('');
    
    document.getElementById('hot-news-modal').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeHotNewsModal() {
    document.getElementById('hot-news-modal').classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// User Statistics Functions
function checkDateReset() {
    const today = new Date().toDateString();
    const lastVisit = new Date(userStats.lastVisitDate);
    const todayDate = new Date(today);
    
    if (today !== userStats.lastVisitDate) {
        userStats.todayTime = 0;
        localStorage.setItem('userTodayTime', '0');
        localStorage.setItem('lastVisitDate', today);
        userStats.lastVisitDate = today;
    }
    
    const daysSinceLastVisit = Math.floor((todayDate - lastVisit) / (1000 * 60 * 60 * 24));
    if (daysSinceLastVisit >= 7 || (todayDate.getDay() === 0 && lastVisit.getDay() !== 0)) {
        userStats.weekTime = 0;
        localStorage.setItem('userWeekTime', '0');
    }
}

function updateUserStatsDisplay() {
    document.getElementById('user-articles-read').textContent = userStats.articlesRead;
    document.getElementById('user-reading-time').textContent = formatTime(userStats.totalReadingTime);
    document.getElementById('today-time').textContent = formatTime(userStats.todayTime);
    document.getElementById('week-time').textContent = formatTime(userStats.weekTime);
    document.getElementById('session-time').textContent = `Session: ${formatTime(userStats.currentSessionTime)}`;
    
    const avgTime = Math.max(1, Math.floor(userStats.totalReadingTime / Math.max(1, getDaysSinceFirstVisit())));
    document.getElementById('avg-time').textContent = formatTime(avgTime);
    
    const progress = (userStats.articlesRead % 10) * 10;
    document.getElementById('reading-progress').style.width = progress + '%';
    
    updateTrendMessages();
}

function getDaysSinceFirstVisit() {
    const firstVisit = localStorage.getItem('firstVisitDate');
    if (!firstVisit) {
        localStorage.setItem('firstVisitDate', new Date().toDateString());
        return 1;
    }
    const daysDiff = Math.floor((new Date() - new Date(firstVisit)) / (1000 * 60 * 60 * 24));
    return Math.max(1, daysDiff);
}

function updateTrendMessages() {
    const articlesElement = document.getElementById('articles-trend');
    const timeElement = document.getElementById('time-trend');
    
    if (userStats.articlesRead === 0) {
        articlesElement.textContent = '📚 Start reading your first article!';
    } else if (userStats.articlesRead < 5) {
        articlesElement.textContent = '🌟 Great start! Keep exploring!';
    } else if (userStats.articlesRead < 10) {
        articlesElement.textContent = '🔥 You\'re on fire! Almost to 10!';
    } else if (userStats.articlesRead % 10 === 0) {
        articlesElement.textContent = '🎉 Milestone reached! Amazing!';
    } else {
        articlesElement.textContent = '📈 Excellent reading progress!';
    }
    
    if (userStats.totalReadingTime < 30) {
        timeElement.textContent = '⏱️ Every minute counts!';
    } else if (userStats.totalReadingTime < 120) {
        timeElement.textContent = '📖 Building great reading habits!';
    } else if (userStats.totalReadingTime < 300) {
        timeElement.textContent = '🎯 Impressive reading dedication!';
    } else {
        timeElement.textContent = '🏆 Master reader status!';
    }
}

function trackArticleRead(articleId, estimatedReadTime) {
    if (!userStats.readArticleIds.includes(articleId)) {
        userStats.articlesRead++;
        userStats.readArticleIds.push(articleId);
        
        localStorage.setItem('userArticlesRead', userStats.articlesRead.toString());
        localStorage.setItem('readArticleIds', JSON.stringify(userStats.readArticleIds));
        
        const minutes = parseInt(estimatedReadTime.replace(/\D/g, '')) || 3;
        addReadingTime(minutes);
        
        updateUserStatsDisplay();
        showReadingAchievement(articleId);
    }
}

function addReadingTime(minutes) {
    userStats.totalReadingTime += minutes;
    userStats.todayTime += minutes;
    userStats.weekTime += minutes;
    
    localStorage.setItem('userTotalReadingTime', userStats.totalReadingTime.toString());
    localStorage.setItem('userTodayTime', userStats.todayTime.toString());
    localStorage.setItem('userWeekTime', userStats.weekTime.toString());
}

function showReadingAchievement(articleId) {
    const isHotNews = articleId.includes('hot-news');
    const isMilestone = userStats.articlesRead % 5 === 0;
    
    if (isHotNews || isMilestone) {
        let content = '';
        if (isHotNews) {
            content = `
                <div class="flex items-center gap-3">
                    <div class="text-2xl">🔥</div>
                    <div>
                        <div class="font-bold">Hot News Read!</div>
                        <div class="text-sm opacity-90">Stay updated with trending stories</div>
                    </div>
                </div>
            `;
        } else {
            content = `
                <div class="flex items-center gap-3">
                    <div class="text-2xl">🎉</div>
                    <div>
                        <div class="font-bold">Milestone Reached!</div>
                        <div class="text-sm opacity-90">${userStats.articlesRead} articles read</div>
                    </div>
                </div>
            `;
        }
        
        showNotification(content, 'achievement');
    }
}

function resetUserStats() {
    const confirmReset = confirm('Are you sure you want to reset your reading statistics? This action cannot be undone.');
    
    if (confirmReset) {
        userStats = {
            articlesRead: 0,
            totalReadingTime: 0,
            todayTime: 0,
            weekTime: 0,
            sessionStartTime: Date.now(),
            currentSessionTime: 0,
            lastVisitDate: new Date().toDateString(),
            readArticleIds: []
        };
        
        localStorage.removeItem('userArticlesRead');
        localStorage.removeItem('userTotalReadingTime');
        localStorage.removeItem('userTodayTime');
        localStorage.removeItem('userWeekTime');
        localStorage.removeItem('readArticleIds');
        localStorage.removeItem('lastVisitDate');
        localStorage.removeItem('firstVisitDate');
        
        updateUserStatsDisplay();
        showNotification('📊 Statistics reset successfully!', 'success');
    }
}

function updateSessionTime() {
    userStats.currentSessionTime = Math.floor((Date.now() - userStats.sessionStartTime) / (1000 * 60));
    document.getElementById('session-time').textContent = `Session: ${formatTime(userStats.currentSessionTime)}`;
}

// User News Functions
function toggleNewsForm() {
    const form = document.getElementById('news-form');
    const button = document.getElementById('toggle-form-btn');
    
    if (form.classList.contains('hidden')) {
        form.classList.remove('hidden');
        button.innerHTML = `
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
            </svg>
            Cancel
        `;
        button.classList.remove('bg-blue-600', 'hover:bg-blue-700');
        button.classList.add('bg-red-600', 'hover:bg-red-700');
    } else {
        form.classList.add('hidden');
        button.innerHTML = `
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd"></path>
            </svg>
            Post News
        `;
        button.classList.remove('bg-red-600', 'hover:bg-red-700');
        button.classList.add('bg-blue-600', 'hover:bg-blue-700');
    }
}

function clearNewsForm() {
    document.getElementById('user-news-form').reset();
}

function submitUserNews(event) {
    event.preventDefault();
    
    const title = document.getElementById('news-title-input').value.trim();
    const category = document.getElementById('news-category-input').value;
    const summary = document.getElementById('news-summary-input').value.trim();
    const content = document.getElementById('news-content-input').value.trim();
    const author = document.getElementById('author-name-input').value.trim();
    const guidelines = document.getElementById('guidelines-checkbox').checked;
    
    if (!title || !category || !summary || !content || !author || !guidelines) {
        showNotification('Please fill in all required fields and accept the guidelines.', 'error');
        return;
    }
    
    const forbiddenWords = ['spam', 'scam', 'fake', 'hate', 'violence'];
    const contentToCheck = (title + ' ' + summary + ' ' + content).toLowerCase();
    
    if (forbiddenWords.some(word => contentToCheck.includes(word))) {
        showNotification('Content contains inappropriate language. Please review and edit your submission.', 'error');
        return;
    }
    
    const newArticle = {
        id: Date.now(),
        title: title,
        category: category,
        summary: summary,
        content: content,
        author: author,
        date: new Date().toISOString().split('T')[0],
        readTime: Math.max(1, Math.ceil(content.length / 200)) + ' min read',
        likes: 0,
        views: 0,
        status: 'published'
    };
    
    userNewsArticles.unshift(newArticle);
    localStorage.setItem('userNewsArticles', JSON.stringify(userNewsArticles));
    
    updateUserNewsStats();
    filterUserNews();
    
    clearNewsForm();
    toggleNewsForm();
    
    showNotification('Your story has been shared successfully!', 'success');
    
    setTimeout(() => {
        document.getElementById('user-news-grid').scrollIntoView({ behavior: 'smooth' });
    }, 1000);
}

function createUserNewsCard(article) {
    const timeAgo = getTimeAgo(article.date);
    
    return `
        <div class="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow cursor-pointer" onclick="openUserNewsModal(${article.id})">
            <div class="flex items-start justify-between mb-4">
                <div class="flex-1">
                    <div class="flex items-center gap-2 mb-2">
                        <span class="px-2 py-1 text-xs font-semibold rounded-full" style="background-color: ${getCategoryColor(article.category)}20; color: ${getCategoryColor(article.category)}">${article.category}</span>
                        <span class="text-xs text-gray-500">${timeAgo}</span>
                    </div>
                    <h4 class="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">${article.title}</h4>
                    <p class="text-gray-600 text-sm mb-3 line-clamp-2">${article.summary}</p>
                    <div class="flex items-center text-xs text-gray-500 gap-4">
                        <span>By ${article.author}</span>
                        <span>${article.readTime}</span>
                        <span>${article.views} views</span>
                        <button onclick="likeUserNews(event, ${article.id})" class="flex items-center gap-1 hover:text-red-500 transition-colors">
                            <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"></path>
                            </svg>
                            ${article.likes}
                        </button>
                    </div>
                </div>
                <div class="ml-4">
                    <div class="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                        ${article.author.charAt(0).toUpperCase()}
                    </div>
                </div>
            </div>
        </div>
    `;
}

function likeUserNews(event, articleId) {
    event.stopPropagation();
    
    const article = userNewsArticles.find(a => a.id === articleId);
    if (article) {
        article.likes++;
        localStorage.setItem('userNewsArticles', JSON.stringify(userNewsArticles));
        filterUserNews();
    }
}

function openUserNewsModal(articleId) {
    const article = userNewsArticles.find(a => a.id === articleId);
    if (!article) return;
    
    article.views++;
    localStorage.setItem('userNewsArticles', JSON.stringify(userNewsArticles));
    
    trackArticleRead('user-' + articleId, article.readTime);
    
    document.getElementById('modal-title').textContent = article.title;
    document.getElementById('modal-image').style.display = 'none';
    document.getElementById('modal-date').textContent = formatDate(article.date) + ' by ' + article.author;
    document.getElementById('modal-category').textContent = article.category;
    document.getElementById('modal-category').style.backgroundColor = getCategoryColor(article.category) + '20';
    document.getElementById('modal-category').style.color = getCategoryColor(article.category);
    document.getElementById('modal-read-time').textContent = article.readTime;
    document.getElementById('modal-content').innerHTML = article.content.split('\n').map(p => `<p class="mb-4">${p}</p>`).join('');
    
    document.getElementById('news-modal').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function filterUserNews() {
    const selectedCategory = document.getElementById('user-news-filter').value;
    const sortBy = document.getElementById('user-news-sort').value;
    
    filteredUserNews = selectedCategory 
        ? userNewsArticles.filter(article => article.category === selectedCategory)
        : [...userNewsArticles];
    
    switch (sortBy) {
        case 'oldest':
            filteredUserNews.sort((a, b) => new Date(a.date) - new Date(b.date));
            break;
        case 'popular':
            filteredUserNews.sort((a, b) => (b.likes + b.views) - (a.likes + a.views));
            break;
        case 'newest':
        default:
            filteredUserNews.sort((a, b) => new Date(b.date) - new Date(a.date));
            break;
    }
    
    displayedUserNews = 0;
    renderUserNews();
}

function renderUserNews() {
    const newsGrid = document.getElementById('user-news-grid');
    const articlesToShow = filteredUserNews.slice(0, displayedUserNews + userNewsPerPage);
    
    if (articlesToShow.length === 0) {
        newsGrid.innerHTML = `
            <div class="text-center py-12 text-gray-500">
                <svg class="w-16 h-16 mx-auto mb-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clip-rule="evenodd"></path>
                </svg>
                <p class="text-lg font-medium">No community stories yet</p>
                <p class="text-sm">Be the first to share your story with the community!</p>
            </div>
        `;
    } else {
        newsGrid.innerHTML = articlesToShow.map(article => createUserNewsCard(article)).join('');
    }
    
    displayedUserNews = articlesToShow.length;
    
    const loadMoreBtn = document.getElementById('load-more-user-news');
    if (displayedUserNews >= filteredUserNews.length) {
        loadMoreBtn.classList.add('hidden');
    } else {
        loadMoreBtn.classList.remove('hidden');
    }
}

function loadMoreUserNews() {
    renderUserNews();
}

function updateUserNewsStats() {
    const today = new Date().toDateString();
    const todayArticles = userNewsArticles.filter(article => 
        new Date(article.date).toDateString() === today
    ).length;
    
    const uniqueAuthors = new Set(userNewsArticles.map(article => article.author)).size;
    
    document.getElementById('total-user-news').textContent = userNewsArticles.length;
    document.getElementById('approved-news').textContent = todayArticles;
    document.getElementById('active-contributors').textContent = uniqueAuthors;
}

// Navigation Functions
function showSection(sectionName) {
    if (currentSection === sectionName) return;
    
    const dashboardSection = document.getElementById('dashboard-section');
    const newsSection = document.getElementById('news-section');
    
    if (sectionName === 'dashboard') {
        dashboardSection.classList.remove('translate-x-full', '-translate-x-full');
        newsSection.classList.remove('translate-x-0');
        newsSection.classList.add('translate-x-full');
    } else {
        newsSection.classList.remove('translate-x-full');
        newsSection.classList.add('translate-x-0');
        dashboardSection.classList.add('-translate-x-full');
    }
    
    currentSection = sectionName;
    
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('bg-blue-100', 'text-blue-600');
        link.classList.add('text-gray-700');
    });
    
    document.getElementById(sectionName + '-nav').classList.add('bg-blue-100', 'text-blue-600');
    document.getElementById(sectionName + '-nav').classList.remove('text-gray-700');
}

// Utility Functions
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    const bgColor = type === 'success' ? 'bg-green-500' : 
                   type === 'error' ? 'bg-red-500' : 
                   type === 'achievement' ? 'bg-gradient-to-r from-purple-500 to-pink-500' : 'bg-blue-500';
    
    notification.className = `fixed top-20 right-4 ${bgColor} text-white px-6 py-4 rounded-lg shadow-lg z-50 transform translate-x-full transition-transform duration-300`;
    
    if (type === 'achievement') {
        notification.innerHTML = message;
    } else {
        const icon = type === 'success' ? 
            '<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>' :
            '<path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>';
        
        notification.innerHTML = `
            <div class="flex items-center gap-3">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    ${icon}
                </svg>
                <div class="text-sm">${message}</div>
            </div>
        `;
    }
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 4000);
}

function animateUserStats() {
    const currentReaders = document.getElementById('current-readers');
    const dailyReaders = document.getElementById('daily-readers');
    const articlesRead = document.getElementById('articles-read');
    
    setInterval(() => {
        const currentValue = parseInt(currentReaders.textContent.replace(',', ''));
        const change = Math.floor(Math.random() * 20) - 10;
        const newValue = Math.max(2000, currentValue + change);
        currentReaders.textContent = newValue.toLocaleString();
    }, 5000);
    
    setInterval(() => {
        const currentValue = parseInt(dailyReaders.textContent.replace(',', ''));
        const change = Math.floor(Math.random() * 50);
        const newValue = currentValue + change;
        dailyReaders.textContent = newValue.toLocaleString();
    }, 10000);
    
    setInterval(() => {
        const currentValue = parseInt(articlesRead.textContent.replace(',', ''));
        const change = Math.floor(Math.random() * 100);
        const newValue = currentValue + change;
        articlesRead.textContent = newValue.toLocaleString();
    }, 8000);
}

// Element SDK Implementation
async function onConfigChange(config) {
    document.getElementById('site-title').textContent = config.site_title || defaultConfig.site_title;
    document.getElementById('tagline').textContent = config.tagline || defaultConfig.tagline;
    document.getElementById('news-title').textContent = config.news_title || defaultConfig.news_title;
    document.getElementById('dashboard-title').textContent = config.dashboard_title || defaultConfig.dashboard_title;
}

function mapToCapabilities(config) {
    return {
        recolorables: [],
        borderables: [],
        fontEditable: undefined,
        fontSizeable: undefined
    };
}

function mapToEditPanelValues(config) {
    return new Map([
        ["site_title", config.site_title || defaultConfig.site_title],
        ["tagline", config.tagline || defaultConfig.tagline],
        ["news_title", config.news_title || defaultConfig.news_title],
        ["dashboard_title", config.dashboard_title || defaultConfig.dashboard_title]
    ]);
}

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Element SDK
    if (window.elementSdk) {
        window.elementSdk.init({
            defaultConfig,
            onConfigChange,
            mapToCapabilities,
            mapToEditPanelValues
        });
    }
    
    // Initialize navigation state
    document.getElementById('dashboard-nav').classList.add('bg-blue-100', 'text-blue-600');
    document.getElementById('dashboard-nav').classList.remove('text-gray-700');
    
    // Initialize personal reading statistics
    checkDateReset();
    updateUserStatsDisplay();
    
    // Update session time every minute
    setInterval(updateSessionTime, 60000);
    
    // Initialize news
    renderNews();
    
    // Add event listeners for news
    document.getElementById('news-search').addEventListener('input', filterNews);
    document.getElementById('category-filter').addEventListener('change', filterNews);
    document.getElementById('load-more-btn').addEventListener('click', loadMoreNews);
    
    // Initialize user news
    document.getElementById('user-news-form').addEventListener('submit', submitUserNews);
    document.getElementById('user-news-filter').addEventListener('change', filterUserNews);
    document.getElementById('user-news-sort').addEventListener('change', filterUserNews);
    
    updateUserNewsStats();
    filterUserNews();
    
    // Start animations
    animateUserStats();
    
    // Close modals when clicking outside
    document.getElementById('news-modal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeNewsModal();
        }
    });
    
    document.getElementById('hot-news-modal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeHotNewsModal();
        }
    });
});