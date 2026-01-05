 // --- MOCK DATA FOR DEMO MODE ---
        const MOCK_DB = {
            bonus: {
                title: "The 3-Second Rule",
                category: "Golden Trick",
                content: "When translating from Tamil to English in your head, stop focusing on word-to-word translation.",
                tamil_explanation: "தமிழ் வாக்கியத்தை அப்படியே ஆங்கிலத்தில் மொழிபெயர்க்காதீர்கள் (Word-to-word). தமிழுக்கும் ஆங்கிலத்திற்கும் வாக்கிய அமைப்பு (SVO vs SOV) மாறுபடும். முதலில் 'யார்' (Subject), அடுத்து 'என்ன செய்கிறார்' (Verb), கடைசியாக 'என்ன' (Object) என்று சிந்தியுங்கள்.",
                example: "Tamil: நான் ஆப்பிள் சாப்பிடுகிறேன் (I apple eat) ❌ -> English: I eat an apple ✅"
            },
            practice: {
                basic: {
                    word: "Happy",
                    tamil_meaning: "மகிழ்ச்சி",
                    pronunciation: "ஹேப்பி",
                    part_of_speech: "Adjective",
                    forms: { v1: "-", v2: "-", v3: "-", ving: "-" },
                    usage_tamil: "மனநிறைவு அல்லது மகிழ்ச்சியை வெளிப்படுத்த.",
                    examples: [
                        { eng: "I am happy.", tam: "நான் மகிழ்ச்சியாக இருக்கிறேன்.", label: "General" },
                        { eng: "She looks happy.", tam: "அவள் மகிழ்ச்சியாக தெரிகிறாள்.", label: "Observation" }
                    ],
                    comparison: null,
                    type: "word"
                },
                intermediate: {
                    sentence: "I am going to the market to buy vegetables.",
                    tamil_meaning: "நான் காய்கறிகள் வாங்க சந்தைக்குச் செல்கிறேன்.",
                    level: "Intermediate",
                    grammar: [
                        { segment: "I am going", role: "Present Continuous Tense", meaning: "நான் சென்று கொண்டிருக்கிறேன்" },
                        { segment: "to the market", role: "Destination (இடம்)", meaning: "சந்தைக்கு" },
                        { segment: "to buy", role: "Purpose (காரணம்)", meaning: "வாங்க" },
                        { segment: "vegetables", role: "Object", meaning: "காய்கறிகள்" }
                    ],
                    explanation: "This sentence tells where someone is going and why. 'To buy' shows the purpose.",
                    key_words: [
                        { word: "Market", meaning: "சந்தை" },
                        { word: "Buy", meaning: "வாங்கு" }
                    ],
                    type: "sentence"
                },
                advanced: {
                    sentence: "Although it was raining heavily, he decided to walk to work because his car had broken down.",
                    tamil_meaning: "கனமழை பெய்து கொண்டிருந்த போதிலும், தனது கார் பழுதாகிவிட்டதால் அவர் வேலைக்கு நடந்து செல்ல முடிவு செய்தார்.",
                    level: "Advanced",
                    grammar: [
                        { segment: "Although it was raining heavily", role: "Concession Clause", meaning: "மழை பெய்த போதிலும்" },
                        { segment: "he decided to walk", role: "Main Action", meaning: "அவர் நடக்க முடிவு செய்தார்" },
                        { segment: "because his car had broken down", role: "Reason Clause (Past Perfect)", meaning: "கார் பழுதாகிவிட்டதால்" }
                    ],
                    explanation: "This uses 'Although' to show contrast and 'Because' to show reason. Note 'had broken down' happened before he decided to walk.",
                    key_words: [
                        { word: "Although", meaning: "இருந்தபோதிலும்" },
                        { word: "Heavily", meaning: "கடுமையாக" },
                        { word: "Decide", meaning: "முடிவு செய்" }
                    ],
                    type: "sentence"
                }
            },
            words: {
                "run": {
                    "word": "Run",
                    "tamil_meaning": "ஓடு / இயக்கு",
                    "pronunciation": "ரன்",
                    "part_of_speech": "Verb",
                    "forms": { "v1": "Run", "v2": "Ran", "v3": "Run", "ving": "Running" },
                    "usage_tamil": "வேகமாக செல்வதை குறிக்க அல்லது இயந்திரத்தை இயக்குவதை குறிக்க.",
                    "examples": [{ "eng": "I run daily.", "tam": "நான் தினமும் ஓடுகிறேன்.", "label": "V1" }],
                    "comparison": { "similar_word": "Jog", "difference_tamil": "Jog மெதுவாக ஓடுவது.", "example_eng": "I jog, then run.", "example_tam": "நான் மெதுவாக ஓடி பின் வேகமாக ஓடுவேன்." },
                    "collocations": ["Run fast"],
                    "type": "word"
                }
            },
            roleplay: {
                "hello": { "reply": "Hello! Welcome to the coffee shop.", "reply_tamil": "வணக்கம்! காபி ஷாப்பிற்கு வரவேற்கிறோம்.", "correction": null }
            },
            translator: {
                "நான் வருகிறேன்": { "english": "I am coming.", "word_mapping": [], "grammar_note": "Present Continuous." }
            }
        };

        // --- APP STATE & UTILS ---
        const app = {
            apiKey: localStorage.getItem('chitti_api_key') || '',
            currentView: 'home',
            vocabList: JSON.parse(localStorage.getItem('chitti_vocab')) || [],
            roleplayContext: { scenario: 'General', history: [] },
            darkMode: localStorage.getItem('chitti_dark_mode') === 'true',
            
            init: () => {
                app.updateApiStatus();
                app.applyDarkMode();
                app.navigate('home');
                
                // Set toggle state based on storage
                const toggle = document.getElementById('dark-mode-toggle');
                if(toggle) toggle.checked = app.darkMode;
            },

            toggleDarkMode: () => {
                app.darkMode = !app.darkMode;
                localStorage.setItem('chitti_dark_mode', app.darkMode);
                app.applyDarkMode();
            },

            applyDarkMode: () => {
                if (app.darkMode) {
                    document.documentElement.classList.add('dark');
                } else {
                    document.documentElement.classList.remove('dark');
                }
            },

            toggleSettings: () => {
                const modal = document.getElementById('settings-modal');
                modal.classList.toggle('hidden');
                
                // Sync toggle state whenever modal opens
                const toggle = document.getElementById('dark-mode-toggle');
                if(toggle) toggle.checked = app.darkMode;
                
                if(app.apiKey) document.getElementById('api-key-input').value = app.apiKey;
            },
            
            toggleMobileMenu: () => {
                document.getElementById('mobile-menu').classList.toggle('hidden');
            },
            
            saveSettings: () => {
                const key = document.getElementById('api-key-input').value.trim();
                localStorage.setItem('chitti_api_key', key);
                app.apiKey = key;
                app.toggleSettings();
                app.updateApiStatus();
                app.toast('API Key Saved!', 'success');
            },

            clearKey: () => {
                localStorage.removeItem('chitti_api_key');
                app.apiKey = '';
                document.getElementById('api-key-input').value = '';
                app.toggleSettings();
                app.updateApiStatus();
                app.toast('Logged out. Reverted to Demo Mode.', 'info');
            },

            updateApiStatus: () => {
                const dot = document.getElementById('api-status-dot');
                if(app.apiKey) dot.classList.remove('hidden');
                else dot.classList.add('hidden');
            },
            
            toast: (msg, type = 'info') => {
                const div = document.createElement('div');
                const bgColor = type === 'success' ? 'bg-green-600' : (type === 'error' ? 'bg-red-500' : 'bg-gray-800 dark:bg-slate-700');
                div.className = `fixed bottom-4 right-4 px-6 py-3 rounded-xl text-white shadow-xl fade-in z-[70] ${bgColor} flex items-center gap-2 border border-white/10`;
                div.innerHTML = `<i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i> <span>${msg}</span>`;
                document.body.appendChild(div);
                setTimeout(() => div.remove(), 3000);
            },

            navigate: (view) => {
                app.currentView = view;
                document.getElementById('mobile-menu').classList.add('hidden');
                
                document.querySelectorAll('[id^="nav-"]').forEach(btn => {
                    // Clean reset
                    btn.className = "px-3 py-1.5 rounded-md text-sm font-medium transition hover:bg-white dark:hover:bg-slate-700 hover:shadow-sm whitespace-nowrap text-gray-600 dark:text-gray-300 flex items-center gap-1"; 
                    
                    // Specific color adjustments for special buttons in inactive state
                    if(btn.id === 'nav-bonus') btn.classList.add('text-amber-600', 'dark:text-amber-400');
                    if(btn.id === 'nav-practice') btn.classList.add('text-pink-600', 'dark:text-pink-400');
                });
                
                const activeBtn = document.getElementById(`nav-${view}`);
                if(activeBtn) {
                    activeBtn.classList.remove('text-gray-600', 'dark:text-gray-300', 'hover:bg-white', 'dark:hover:bg-slate-700');
                    if (view === 'practice') {
                        activeBtn.className += ' bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300';
                    } else if (view === 'bonus') {
                        activeBtn.className += ' bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300';
                    } else {
                        activeBtn.className += ' bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300';
                    }
                }

                const content = document.getElementById('app-content');
                content.innerHTML = ''; 
                
                switch(view) {
                    case 'home': views.renderHome(content); break;
                    case 'bonus': views.renderBonus(content); break;
                    case 'word360': views.renderWord360(content); break;
                    case 'practice': views.renderPractice(content); break;
                    case 'fixer': views.renderFixer(content); break;
                    case 'vocab': views.renderVocab(content); break;
                    case 'roleplay': views.renderRoleplay(content); break;
                    case 'translator': views.renderTranslator(content); break;
                }
                window.scrollTo(0,0);
            }
        };

        // --- AI SERVICE ---
        const aiService = {
            async generateContent(promptType, input, extraContext = null) {
                if (!app.apiKey) {
                    return new Promise((resolve) => {
                        setTimeout(() => {
                            if (promptType === 'word_explainer' && MOCK_DB.words[input.toLowerCase()]) {
                                resolve(MOCK_DB.words[input.toLowerCase()]);
                            } else if (promptType === 'practice_basic') {
                                resolve(MOCK_DB.practice.basic);
                            } else if (promptType === 'practice_intermediate') {
                                resolve(MOCK_DB.practice.intermediate);
                            } else if (promptType === 'practice_advanced') {
                                resolve(MOCK_DB.practice.advanced);
                            } else if (promptType === 'daily_bonus') {
                                resolve(MOCK_DB.bonus);
                            } else if (promptType === 'roleplay') {
                                resolve(MOCK_DB.roleplay['hello']);
                            } else if (promptType === 'translator') {
                                resolve(MOCK_DB.translator['நான் வருகிறேன்']);
                            } else {
                                resolve({ error: "demo_limit" });
                            }
                        }, 1200);
                    });
                }

                try {
                    const prompt = this.getPrompt(promptType, input, extraContext);
                    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${app.apiKey}`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            contents: [{ parts: [{ text: prompt }] }]
                        })
                    });
                    
                    const data = await response.json();
                    if(data.error) throw new Error(data.error.message);
                    
                    const text = data.candidates[0].content.parts[0].text;
                    const jsonStr = text.replace(/```json/g, '').replace(/```/g, '').trim();
                    return JSON.parse(jsonStr);
                } catch (e) {
                    console.error(e);
                    app.toast("Error calling AI. Check your API Key.", "error");
                    return null;
                }
            },

            getPrompt(type, input, context) {
                if (type === 'word_explainer') {
                    return `Act as an English Teacher for Tamil students. Analyze the word "${input}". Return JSON: { "word": "${input}", "tamil_meaning": "...", "pronunciation": "...", "part_of_speech": "...", "forms": {"v1": "...", "v2": "...", "v3": "...", "ving": "..."}, "usage_tamil": "...", "examples": [{"eng": "...", "tam": "...", "label": "..."}], "comparison": {"similar_word": "...", "difference_tamil": "...", "example_eng": "...", "example_tam": "..."}, "type": "word" }`;
                } else if (type === 'practice_basic') {
                    return `Generate a random common English word (A1/A2 level). Analyze it for a Tamil student. Return JSON: { "word": "THE_WORD", "tamil_meaning": "...", "pronunciation": "...", "part_of_speech": "...", "forms": {"v1": "...", "v2": "...", "v3": "...", "ving": "..."}, "usage_tamil": "...", "examples": [{"eng": "...", "tam": "...", "label": "..."}, {"eng": "...", "tam": "...", "label": "..."}], "comparison": {"similar_word": "...", "difference_tamil": "...", "example_eng": "...", "example_tam": "..."}, "type": "word" }`;
                } else if (type === 'practice_intermediate') {
                    return `Generate a simple/medium English sentence (B1 level). Analyze it for a Tamil student. Return JSON: { "sentence": "THE_SENTENCE", "tamil_meaning": "...", "level": "Intermediate", "grammar": [{"segment": "part of sentence", "role": "Subject/Verb/etc", "meaning": "Tamil meaning"}], "explanation": "Simple explanation of sentence structure", "key_words": [{"word": "...", "meaning": "..."}], "type": "sentence" }`;
                } else if (type === 'practice_advanced') {
                    return `Generate a complex/long English sentence (C1 level). Analyze it for a Tamil student. Return JSON: { "sentence": "THE_SENTENCE", "tamil_meaning": "...", "level": "Advanced", "grammar": [{"segment": "part of sentence", "role": "Clause/Tense/etc", "meaning": "Tamil meaning"}], "explanation": "Detailed explanation of complex structure", "key_words": [{"word": "...", "meaning": "..."}], "type": "sentence" }`;
                } else if (type === 'daily_bonus') {
                    return `Generate a random 'Golden Rule', 'Secret Trick', or 'Pro Tip' for learning English, specifically tailored for a Tamil speaker learning English. It could be about grammar, pronunciation, or mindset. Return JSON: { "title": "Catchy Title", "category": "Golden Rule/Trick/Tip", "content": "The rule/tip in English", "tamil_explanation": "Detailed explanation in Tamil clarifying why this is important", "example": "A clear example showing the rule in action" }`;
                } else if (type === 'correction') {
                    return `Check this sentence: "${input}". Return JSON: { "is_correct": boolean, "correction": "...", "reason_tamil": "...", "alternatives": ["..."] }`;
                } else if (type === 'roleplay') {
                    const historyText = context.history.map(m => `${m.sender}: ${m.text}`).join('\n');
                    return `Act as a character in a ${context.scenario} scenario. History: ${historyText}. User: ${input}. Reply strictly JSON: { "reply": "...", "reply_tamil": "...", "correction": "correction if needed else null" }`;
                } else if (type === 'translator') {
                    return `Translate to English: "${input}". Return JSON: { "english": "...", "word_mapping": [{"tam":"...", "eng":"..."}], "grammar_note": "..." }`;
                }
            }
        };

        // --- VIEWS ---
        const views = {
            renderHome: (container) => {
                container.innerHTML = `
                    <div class="text-center py-8 md:py-16 fade-in">
                        <div class="inline-block p-2 bg-blue-100 dark:bg-blue-900/50 rounded-2xl mb-4">
                            <i class="fas fa-robot text-4xl text-blue-600 dark:text-blue-400 animate-bounce"></i>
                        </div>
                        <h1 class="text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-white mb-3 tracking-tight">
                            Hello, I am <span class="gradient-text">Chitti.</span>
                        </h1>
                        <h2 class="text-xl md:text-2xl text-gray-500 dark:text-gray-400 font-medium mb-8 tamil-text">உங்கள் தமிழ் வழி ஆங்கில ஆசிரியர்.</h2>
                        
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto px-2">
                            <!-- Daily Bonus Card -->
                            <div onclick="app.navigate('bonus')" class="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm hover:shadow-xl transition cursor-pointer border-l-4 border-amber-500 dark:border-amber-600 group text-left relative overflow-hidden">
                                <div class="absolute top-0 right-0 w-24 h-24 bg-amber-50 dark:bg-amber-900/20 rounded-bl-full -mr-10 -mt-10 transition group-hover:bg-amber-100 dark:group-hover:bg-amber-900/40"></div>
                                <div class="w-12 h-12 bg-amber-100 dark:bg-amber-900/40 text-amber-600 dark:text-amber-400 rounded-xl flex items-center justify-center text-xl mb-4 relative z-10">
                                    <i class="fas fa-star"></i>
                                </div>
                                <h3 class="font-bold text-lg mb-1 relative z-10 text-gray-800 dark:text-white">Daily Bonus</h3>
                                <p class="text-gray-500 dark:text-gray-400 text-sm tamil-text leading-relaxed relative z-10">Golden Rules & Tricks for English.</p>
                            </div>

                             <!-- Practice Card -->
                            <div onclick="app.navigate('practice')" class="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm hover:shadow-xl transition cursor-pointer border border-gray-100 dark:border-slate-700 group text-left relative overflow-hidden">
                                <div class="w-12 h-12 bg-pink-100 dark:bg-pink-900/40 text-pink-600 dark:text-pink-400 rounded-xl flex items-center justify-center text-xl mb-4">
                                    <i class="fas fa-dumbbell"></i>
                                </div>
                                <h3 class="font-bold text-lg mb-1 text-gray-800 dark:text-white">Practice Mode</h3>
                                <p class="text-gray-500 dark:text-gray-400 text-sm tamil-text leading-relaxed">Basic, Intermediate & Advanced பயிற்சி.</p>
                            </div>

                            <div onclick="app.navigate('word360')" class="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm hover:shadow-xl transition cursor-pointer border border-gray-100 dark:border-slate-700 group text-left">
                                <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center text-xl mb-4">
                                    <i class="fas fa-search"></i>
                                </div>
                                <h3 class="font-bold text-lg mb-1 text-gray-800 dark:text-white">Word 360°</h3>
                                <p class="text-gray-500 dark:text-gray-400 text-sm tamil-text leading-relaxed">சொற்களை ஆழமாக புரிந்து கொள்ள.</p>
                            </div>
                        </div>
                        
                         <div class="mt-10 inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 rounded-full border border-gray-200 dark:border-slate-700 shadow-sm text-sm">
                            <span class="w-2 h-2 rounded-full ${app.apiKey ? 'bg-green-500' : 'bg-orange-400'}"></span>
                            <span class="text-gray-600 dark:text-gray-300 font-medium">
                                ${app.apiKey ? 'Chitti is Online (Full Access)' : 'Demo Mode (Limited Content)'}
                            </span>
                        </div>
                    </div>
                `;
            },

            // --- DAILY BONUS ---
            renderBonus: (container) => {
                container.innerHTML = `
                    <div class="max-w-2xl mx-auto fade-in">
                        <div class="text-center mb-8">
                            <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-2">Daily Bonus <i class="fas fa-star text-amber-500"></i></h2>
                            <p class="text-gray-500 dark:text-gray-400 tamil-text">இன்றைய ஆங்கில ரகசியம் மற்றும் பொன்விதிகள்.</p>
                        </div>

                        <div id="bonus-card" class="min-h-[300px]">
                             <!-- Content loads here -->
                        </div>

                        <div class="text-center mt-8">
                            <button onclick="views.handleBonus()" class="bg-gray-800 dark:bg-slate-700 text-white px-6 py-3 rounded-xl font-bold hover:bg-black dark:hover:bg-slate-900 transition shadow-lg flex items-center gap-2 mx-auto">
                                <i class="fas fa-magic"></i> Reveal New Secret
                            </button>
                        </div>
                    </div>
                `;
                views.handleBonus();
            },

            handleBonus: async () => {
                const resDiv = document.getElementById('bonus-card');
                resDiv.innerHTML = `<div class="flex flex-col items-center py-12"><div class="loader mb-4 border-t-amber-500 border-gray-200 dark:border-slate-700"></div><p class="text-gray-500 dark:text-gray-400 text-sm font-medium animate-pulse">Unlocking secret...</p></div>`;

                const data = await aiService.generateContent('daily_bonus', '');
                
                if (data && data.error === 'demo_limit') {
                     resDiv.innerHTML = `<div class="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-orange-200 dark:border-orange-900 text-center fade-in"><div class="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 text-orange-500 dark:text-orange-400 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl"><i class="fas fa-lock"></i></div><h3 class="text-lg font-bold text-gray-800 dark:text-white mb-2">Bonus Locked</h3><p class="text-gray-600 dark:text-gray-400 mb-6">Demo mode has limited bonus content. Add API Key.</p></div>`;
                     return;
                }
                if (!data) return;

                resDiv.innerHTML = `
                    <div class="bg-white dark:bg-slate-800 rounded-3xl shadow-xl overflow-hidden fade-in border border-amber-100 dark:border-amber-900/30 relative">
                        <!-- Decorative Header -->
                        <div class="bg-gold-gradient p-8 text-white text-center relative overflow-hidden">
                            <div class="absolute top-0 left-0 w-full h-full opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                            <span class="bg-white/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-2 inline-block backdrop-blur-sm">${data.category}</span>
                            <h1 class="text-3xl font-extrabold mb-2 drop-shadow-sm leading-tight">${data.title}</h1>
                            <div class="w-16 h-1 bg-white/50 mx-auto rounded-full"></div>
                        </div>

                        <div class="p-8">
                            <div class="text-center mb-8">
                                <p class="text-xl text-gray-800 dark:text-gray-200 font-medium leading-relaxed">"${data.content}"</p>
                            </div>

                            <div class="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-2xl border border-amber-100 dark:border-amber-900/30 mb-6">
                                <h4 class="text-amber-800 dark:text-amber-400 font-bold text-sm uppercase tracking-wide mb-3 flex items-center justify-center gap-2">
                                    <i class="fas fa-lightbulb"></i> Explanation (விளக்கம்)
                                </h4>
                                <p class="text-gray-700 dark:text-gray-300 tamil-text text-center leading-relaxed">
                                    ${data.tamil_explanation}
                                </p>
                            </div>

                            <div class="bg-gray-50 dark:bg-slate-900 p-5 rounded-xl border border-gray-100 dark:border-slate-700">
                                <span class="text-xs text-gray-400 font-bold uppercase tracking-wide block mb-2">Example:</span>
                                <p class="text-gray-800 dark:text-gray-200 font-mono text-sm">${data.example}</p>
                            </div>
                        </div>
                    </div>
                `;
            },

            // --- PRACTICE MODE ---
            renderPractice: (container) => {
                container.innerHTML = `
                    <div class="max-w-4xl mx-auto fade-in">
                        <div class="text-center mb-8">
                            <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-2">Practice & Learn</h2>
                            <p class="text-gray-500 dark:text-gray-400 tamil-text">உங்கள் நிலையைத் தேர்ந்தெடுத்து கற்கத் தொடங்குங்கள்.</p>
                        </div>
                        
                        <div class="flex flex-wrap justify-center gap-3 mb-8">
                            <button onclick="views.handlePractice('basic')" id="btn-basic" class="px-6 py-3 rounded-xl font-bold border-2 border-green-100 dark:border-green-900/30 bg-white dark:bg-slate-800 text-green-600 dark:text-green-400 hover:bg-green-50 dark:hover:bg-slate-700 hover:border-green-300 dark:hover:border-green-800 transition flex items-center gap-2 shadow-sm">
                                <i class="fas fa-seedling"></i> Basic
                            </button>
                            <button onclick="views.handlePractice('intermediate')" id="btn-intermediate" class="px-6 py-3 rounded-xl font-bold border-2 border-blue-100 dark:border-blue-900/30 bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-700 hover:border-blue-300 dark:hover:border-blue-800 transition flex items-center gap-2 shadow-sm">
                                <i class="fas fa-layer-group"></i> Intermediate
                            </button>
                            <button onclick="views.handlePractice('advanced')" id="btn-advanced" class="px-6 py-3 rounded-xl font-bold border-2 border-purple-100 dark:border-purple-900/30 bg-white dark:bg-slate-800 text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-slate-700 hover:border-purple-300 dark:hover:border-purple-800 transition flex items-center gap-2 shadow-sm">
                                <i class="fas fa-brain"></i> Advanced
                            </button>
                        </div>

                        <div id="practice-result" class="min-h-[300px]">
                            <div class="text-center text-gray-400 dark:text-gray-600 py-10">
                                <i class="fas fa-arrow-up text-2xl mb-2 animate-bounce"></i>
                                <p>Select a level to generate content</p>
                            </div>
                        </div>
                    </div>
                `;
            },

            handlePractice: async (level) => {
                // Update button styles
                ['basic', 'intermediate', 'advanced'].forEach(l => {
                    const btn = document.getElementById(`btn-${l}`);
                    // Reset to default
                    btn.className = btn.className.replace('ring-2 ring-offset-2 dark:ring-offset-slate-900', '').replace('bg-gray-100 dark:bg-slate-700', 'bg-white dark:bg-slate-800');
                    if(l === level) {
                        btn.className = btn.className.replace('bg-white dark:bg-slate-800', 'bg-gray-100 dark:bg-slate-700 ring-2 ring-offset-2 dark:ring-offset-slate-900');
                    }
                });

                const resDiv = document.getElementById('practice-result');
                resDiv.innerHTML = `<div class="flex flex-col items-center py-12"><div class="loader mb-4"></div><p class="text-gray-500 dark:text-gray-400 text-sm font-medium animate-pulse">Generating ${level} content...</p></div>`;

                let promptType = `practice_${level}`;
                const data = await aiService.generateContent(promptType, '');

                if (data && data.error === 'demo_limit') {
                     resDiv.innerHTML = `<div class="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-orange-200 dark:border-orange-900/50 text-center fade-in"><div class="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 text-orange-500 dark:text-orange-400 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl"><i class="fas fa-lock"></i></div><h3 class="text-lg font-bold text-gray-800 dark:text-white mb-2">Practice Mode Locked</h3><p class="text-gray-600 dark:text-gray-400 mb-6">Demo mode has limited practice content. Add API Key for unlimited generation.</p><button onclick="app.toggleSettings()" class="bg-blue-600 text-white px-6 py-2 rounded-lg">Add Key</button></div>`;
                     return;
                }
                if (!data) return;

                if (data.type === 'word') {
                    views.renderWordCard(data, resDiv, true);
                } else if (data.type === 'sentence') {
                    views.renderSentenceCard(data, resDiv, level);
                }
            },

            renderSentenceCard: (data, container, level) => {
                const badgeColor = level === 'intermediate' ? 'blue' : 'purple';
                
                const grammarHtml = data.grammar.map(g => `
                    <div class="flex flex-col md:flex-row md:items-center justify-between p-3 bg-white dark:bg-slate-800 rounded-lg border border-gray-100 dark:border-slate-700 hover:border-${badgeColor}-200 dark:hover:border-${badgeColor}-700 transition">
                        <div class="mb-1 md:mb-0">
                            <span class="font-bold text-gray-800 dark:text-gray-200 bg-gray-50 dark:bg-slate-700 px-2 py-1 rounded text-sm">${g.segment}</span>
                        </div>
                        <div class="flex items-center gap-2 text-sm">
                            <span class="text-${badgeColor}-600 dark:text-${badgeColor}-400 font-medium">${g.role}</span>
                            <i class="fas fa-arrow-right text-gray-300 dark:text-gray-600 text-xs"></i>
                            <span class="text-gray-500 dark:text-gray-400 tamil-text">${g.meaning}</span>
                        </div>
                    </div>
                `).join('');

                const keywordsHtml = data.key_words.map(k => `
                    <span class="inline-flex items-center gap-1 bg-gray-100 dark:bg-slate-700 px-2 py-1 rounded-md text-sm text-gray-700 dark:text-gray-200">
                        <strong>${k.word}</strong>: <span class="tamil-text text-gray-500 dark:text-gray-400">${k.meaning}</span>
                    </span>
                `).join('');

                container.innerHTML = `
                    <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden fade-in border border-gray-100 dark:border-slate-700 relative">
                        <div class="bg-gradient-to-r from-${badgeColor}-500 to-${badgeColor}-700 p-6 text-white">
                             <div class="flex justify-between items-start mb-2">
                                <span class="bg-white/20 px-2 py-0.5 rounded text-xs uppercase tracking-wider font-bold">${data.level} Sentence</span>
                                <button onclick="views.handlePractice('${level}')" class="bg-white text-${badgeColor}-600 px-3 py-1 rounded-lg text-sm font-bold shadow-lg hover:scale-105 transition"><i class="fas fa-sync-alt mr-1"></i> Next</button>
                            </div>
                            <h2 class="text-2xl md:text-3xl font-bold leading-relaxed mb-4">"${data.sentence}"</h2>
                            <p class="tamil-text text-lg text-${badgeColor}-100 border-l-4 border-white/30 pl-3">${data.tamil_meaning}</p>
                        </div>

                        <div class="p-6 space-y-6">
                            <!-- 360 Breakdown -->
                            <div>
                                <h4 class="text-gray-400 dark:text-gray-500 font-bold uppercase text-xs tracking-wider mb-3">360° Grammar Breakdown</h4>
                                <div class="space-y-2 bg-gray-50 dark:bg-slate-900 p-4 rounded-xl">
                                    ${grammarHtml}
                                </div>
                            </div>

                            <!-- Explanation -->
                            <div class="flex gap-4 items-start bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-xl border border-yellow-100 dark:border-yellow-900/30">
                                <div class="text-yellow-600 dark:text-yellow-500 text-xl"><i class="fas fa-lightbulb"></i></div>
                                <div>
                                    <h4 class="text-yellow-800 dark:text-yellow-500 font-bold text-sm mb-1">Why is it structured this way?</h4>
                                    <p class="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">${data.explanation}</p>
                                </div>
                            </div>

                            <!-- Keywords -->
                            <div>
                                <h4 class="text-gray-400 dark:text-gray-500 font-bold uppercase text-xs tracking-wider mb-2">Key Vocabulary</h4>
                                <div class="flex flex-wrap gap-2">
                                    ${keywordsHtml}
                                </div>
                            </div>

                            <button onclick='views.saveToVocab(${JSON.stringify(data).replace(/'/g, "&#39;")})' class="w-full flex items-center justify-center gap-2 bg-gray-900 dark:bg-black text-white hover:bg-black dark:hover:bg-gray-900 px-6 py-3 rounded-xl transition shadow-lg shadow-gray-200 dark:shadow-none">
                                <i class="far fa-bookmark"></i> Save Sentence
                            </button>
                        </div>
                    </div>
                `;
            },

            renderWord360: (container) => {
                container.innerHTML = `
                    <div class="max-w-3xl mx-auto fade-in">
                        <div class="text-center mb-8">
                            <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-2">Word 360° Analysis</h2>
                            <p class="text-gray-500 dark:text-gray-400 tamil-text">எந்த வார்த்தையையும் சந்தேகமே இல்லாமல் கற்றுக்கொள்ளுங்கள்.</p>
                        </div>
                        <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-3 flex border border-gray-200 dark:border-slate-700 focus-within:border-blue-500 focus-within:ring-4 ring-blue-50 dark:ring-blue-900/20 transition mb-4">
                            <input type="text" id="word-input" placeholder="Type a word (e.g., Run, Study)" class="flex-grow p-3 outline-none text-lg text-gray-700 dark:text-white bg-transparent" onkeypress="if(event.key==='Enter') views.handleWordSubmit()">
                            <button onclick="views.handleWordSubmit()" class="bg-blue-600 text-white px-6 md:px-8 py-2 rounded-xl font-bold hover:bg-blue-700 transition shadow-md shadow-blue-200 dark:shadow-none"><span class="hidden md:inline">Ask Chitti</span><i class="fas fa-search md:hidden"></i></button>
                        </div>
                        <div id="word-result" class="space-y-6 min-h-[200px]"></div>
                    </div>
                `;
            },
            
            handleWordSubmit: async () => {
                 const input = document.getElementById('word-input').value.trim();
                 if(!input) return;
                 const resDiv = document.getElementById('word-result');
                 resDiv.innerHTML = `<div class="flex flex-col items-center py-12"><div class="loader mb-4"></div><p class="text-gray-500 dark:text-gray-400 text-sm font-medium animate-pulse">Chitti is thinking...</p></div>`;
                 const data = await aiService.generateContent('word_explainer', input);
                 if (data && data.error === 'demo_limit') {
                    resDiv.innerHTML = `<div class="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-orange-200 dark:border-orange-900/50 text-center"><p class="text-gray-600 dark:text-gray-400">Word not in demo. Add API Key.</p></div>`;
                    return;
                 }
                 if(data) views.renderWordCard(data, resDiv, false);
            },

            renderWordCard: (data, container, isPractice) => {
                const formsHtml = data.forms && data.forms.v1 !== '-' ? `<div class="grid grid-cols-4 gap-2 text-center text-sm bg-gray-50 dark:bg-slate-900 p-4 rounded-xl mb-6 border border-gray-100 dark:border-slate-700"><div class="bg-white dark:bg-slate-800 p-2 rounded shadow-sm"><strong class="text-blue-700 dark:text-blue-400 block">${data.forms.v1}</strong><span class="text-[10px] text-gray-400">V1</span></div><div class="bg-white dark:bg-slate-800 p-2 rounded shadow-sm"><strong class="text-blue-700 dark:text-blue-400 block">${data.forms.v2}</strong><span class="text-[10px] text-gray-400">V2</span></div><div class="bg-white dark:bg-slate-800 p-2 rounded shadow-sm"><strong class="text-blue-700 dark:text-blue-400 block">${data.forms.v3}</strong><span class="text-[10px] text-gray-400">V3</span></div><div class="bg-white dark:bg-slate-800 p-2 rounded shadow-sm"><strong class="text-blue-700 dark:text-blue-400 block">${data.forms.ving}</strong><span class="text-[10px] text-gray-400">Ving</span></div></div>` : '';
                
                const examplesHtml = data.examples.map(ex => `
                    <div class="flex gap-3 items-start group">
                        <div class="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-300 dark:bg-blue-500 group-hover:bg-blue-500 dark:group-hover:bg-blue-400 transition"></div>
                        <div class="flex-grow">
                            <div class="flex justify-between items-start">
                                <p class="text-gray-800 dark:text-gray-200 font-medium">${ex.eng}</p>
                                ${ex.label ? `<span class="text-[10px] bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 px-2 py-0.5 rounded-full uppercase tracking-wide font-bold whitespace-nowrap ml-2">${ex.label}</span>` : ''}
                            </div>
                            <p class="text-gray-500 dark:text-gray-400 text-sm tamil-text">${ex.tam}</p>
                        </div>
                    </div>
                `).join('');

                const nextBtn = isPractice ? `<button onclick="views.handlePractice('basic')" class="bg-white/20 hover:bg-white/30 text-white px-3 py-1 rounded-lg text-sm font-bold shadow-lg transition flex items-center gap-1 backdrop-blur-sm"><i class="fas fa-random"></i> Next</button>` : '';

                container.innerHTML = `
                    <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden fade-in border border-gray-100 dark:border-slate-700">
                        <div class="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 text-white">
                            <div class="flex justify-between items-start">
                                <h1 class="text-4xl font-bold mb-2">${data.word}</h1>
                                ${nextBtn}
                            </div>
                            <div class="flex items-center gap-3 opacity-90">
                                <p class="tamil-text text-xl font-medium text-blue-100">${data.tamil_meaning}</p>
                                <span class="w-1 h-1 bg-white rounded-full"></span>
                                <span class="font-mono bg-white/20 px-2 py-0.5 rounded text-sm">${data.pronunciation}</span>
                                <span class="bg-white/20 px-2 py-0.5 rounded text-sm ml-auto uppercase tracking-wider">${data.part_of_speech}</span>
                            </div>
                        </div>
                        
                        <div class="p-6">
                            ${formsHtml}
                            <div class="mb-6">
                                <h4 class="text-gray-400 dark:text-gray-500 font-bold uppercase text-xs tracking-wider mb-2">Usage (பயன்பாடு)</h4>
                                <div class="text-gray-700 dark:text-gray-200 tamil-text bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-500 leading-relaxed">${data.usage_tamil}</div>
                            </div>
                            <div class="mb-6">
                                <h4 class="text-gray-400 dark:text-gray-500 font-bold uppercase text-xs tracking-wider mb-2">Examples</h4>
                                <div class="space-y-4 bg-gray-50 dark:bg-slate-900 p-4 rounded-xl border border-gray-100 dark:border-slate-700 h-64 overflow-y-auto custom-scrollbar">${examplesHtml}</div>
                            </div>
                            <button onclick='views.saveToVocab(${JSON.stringify(data).replace(/'/g, "&#39;")})' class="w-full flex items-center justify-center gap-2 bg-gray-900 dark:bg-black text-white hover:bg-black dark:hover:bg-gray-900 px-6 py-2.5 rounded-xl transition shadow-lg shadow-gray-200 dark:shadow-none">
                                <i class="far fa-bookmark"></i> Save to Vocab
                            </button>
                        </div>
                    </div>`;
            },
            
            renderFixer: (container) => {
                 container.innerHTML = `<div class="max-w-2xl mx-auto fade-in"><div class="text-center mb-8"><h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-2">Grammar Fixer</h2><p class="text-gray-500 dark:text-gray-400 tamil-text">தவறான வாக்கியத்தை கொடுங்கள், காரணத்துடன் திருத்துகிறோம்.</p></div><div class="bg-white dark:bg-slate-800 p-2 rounded-2xl shadow-lg border border-gray-200 dark:border-slate-700 focus-within:ring-4 focus-within:ring-orange-100 dark:focus-within:ring-orange-900/30 transition"><textarea id="fixer-input" rows="3" placeholder="Type incorrect sentence..." class="w-full p-4 rounded-xl outline-none resize-none text-lg text-gray-700 dark:text-white bg-transparent"></textarea><div class="flex justify-between items-center px-4 pb-2"><button onclick="views.handleFixerSubmit()" class="bg-secondary text-white px-6 py-2 rounded-xl font-bold hover:bg-orange-600 transition shadow-md shadow-orange-200 dark:shadow-none flex items-center gap-2 ml-auto">Check</button></div></div><div id="fixer-result" class="mt-8 space-y-4"></div></div>`;
            },
            handleFixerSubmit: async () => {
                const input = document.getElementById('fixer-input').value.trim();
                if(!input) return;
                const resDiv = document.getElementById('fixer-result');
                resDiv.innerHTML = `<div class="flex flex-col items-center py-8"><div class="loader mb-2"></div></div>`;
                const data = await aiService.generateContent('correction', input);
                if(data) resDiv.innerHTML = `<div class="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 border border-gray-100 dark:border-slate-700 fade-in"><p class="text-gray-500 dark:text-gray-400 line-through mb-2">${input}</p><p class="text-2xl font-bold text-green-600 dark:text-green-400 mb-4">${data.correction}</p><div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl"><p class="text-gray-700 dark:text-gray-300 tamil-text">${data.reason_tamil}</p></div></div>`;
            },

            renderVocab: (container) => {
                const list = app.vocabList;
                if(list.length === 0) {
                    container.innerHTML = `<div class="text-center py-20 text-gray-400 dark:text-gray-500 fade-in"><div class="w-20 h-20 bg-gray-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4"><i class="fas fa-folder-open text-3xl opacity-30"></i></div><p class="text-lg">Your list is empty.</p><button onclick="app.navigate('practice')" class="mt-4 text-blue-600 dark:text-blue-400 font-bold hover:underline">Start Practice</button></div>`;
                    return;
                }
                
                const itemsHtml = list.map((item, index) => {
                    if (item.type === 'sentence') {
                        return `
                            <div class="bg-white dark:bg-slate-800 p-5 rounded-xl shadow-sm border border-gray-100 dark:border-slate-700 hover:shadow-md transition group relative overflow-hidden">
                                <div class="absolute left-0 top-0 bottom-0 w-1 bg-purple-500"></div>
                                <div class="flex justify-between items-start mb-2">
                                    <span class="text-[10px] bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 px-2 py-0.5 rounded uppercase font-bold tracking-wide">Sentence</span>
                                    <button onclick="views.deleteVocab(${index})" class="text-gray-300 hover:text-red-500 transition"><i class="fas fa-trash-alt"></i></button>
                                </div>
                                <h3 class="font-bold text-lg text-gray-800 dark:text-gray-100 mb-1 leading-snug">"${item.sentence}"</h3>
                                <p class="text-purple-600 dark:text-purple-400 tamil-text text-sm mb-3">${item.tamil_meaning}</p>
                                <div class="bg-gray-50 dark:bg-slate-900 p-2 rounded text-xs text-gray-500 dark:text-gray-400 line-clamp-2">${item.explanation}</div>
                            </div>
                        `;
                    } else {
                        return `
                            <div class="bg-white dark:bg-slate-800 p-5 rounded-xl shadow-sm border border-gray-100 dark:border-slate-700 hover:shadow-md transition group relative overflow-hidden">
                                <div class="absolute left-0 top-0 bottom-0 w-1 bg-blue-500"></div>
                                <div class="flex justify-between items-start">
                                    <div>
                                        <div class="flex items-baseline gap-2 mb-1">
                                            <h3 class="font-bold text-xl text-gray-800 dark:text-white">${item.word}</h3>
                                            <span class="text-xs bg-gray-100 dark:bg-slate-700 px-2 py-0.5 rounded text-gray-500 dark:text-gray-400 font-mono">${item.pronunciation}</span>
                                        </div>
                                        <p class="text-blue-600 dark:text-blue-400 tamil-text font-medium text-sm">${item.tamil_meaning}</p>
                                    </div>
                                    <button onclick="views.deleteVocab(${index})" class="text-gray-300 hover:text-red-500 transition"><i class="fas fa-trash-alt"></i></button>
                                </div>
                            </div>
                        `;
                    }
                }).join('');
                
                container.innerHTML = `<div class="max-w-4xl mx-auto fade-in"><div class="flex justify-between items-center mb-6"><h2 class="text-2xl font-bold text-gray-800 dark:text-white">My Saved Items <span class="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm px-2 py-1 rounded-full ml-2">${list.length}</span></h2></div><div class="grid grid-cols-1 md:grid-cols-2 gap-4">${itemsHtml}</div></div>`;
            },
            
            saveToVocab: (data) => {
                const key = data.type === 'sentence' ? data.sentence : data.word;
                const exists = app.vocabList.some(item => (item.type === 'sentence' ? item.sentence : item.word) === key);
                
                if (!exists) {
                    app.vocabList.unshift(data);
                    localStorage.setItem('chitti_vocab', JSON.stringify(app.vocabList));
                    app.toast("Saved to List!", "success");
                } else {
                    app.toast("Already saved.", "info");
                }
            },
            
            deleteVocab: (index) => {
                app.vocabList.splice(index, 1);
                localStorage.setItem('chitti_vocab', JSON.stringify(app.vocabList));
                views.renderVocab(document.getElementById('app-content'));
                app.toast("Item removed.", "info");
            },

            renderRoleplayUI: (container) => {
                container.innerHTML = `<div class="max-w-2xl mx-auto fade-in flex flex-col h-[calc(100vh-140px)]"><div class="flex justify-between items-center mb-4"><h2 class="text-xl font-bold text-gray-800 dark:text-white">Roleplay</h2><select id="scenario-select" onchange="views.changeScenario()" class="bg-white dark:bg-slate-800 dark:text-white border dark:border-slate-700 rounded px-2 py-1 text-sm"><option value="Coffee Shop">Coffee Shop</option><option value="Friend">Friend</option></select></div><div id="chat-window" class="flex-grow bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-gray-200 dark:border-slate-700 p-4 overflow-y-auto mb-4 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"><div class="chat-bubble chat-ai"><p>Hello! Welcome to the coffee shop.</p></div></div><div class="flex gap-2"><input type="text" id="chat-input" placeholder="Type reply..." class="flex-grow p-3 rounded-xl border dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-800 dark:text-white outline-none" onkeypress="if(event.key==='Enter') views.handleChatSubmit()"><button onclick="views.handleChatSubmit()" class="bg-purple-600 text-white w-12 h-12 rounded-xl flex items-center justify-center"><i class="fas fa-paper-plane"></i></button></div></div>`;
                app.roleplayContext = { scenario: 'Coffee Shop', history: [] };
            },
            changeScenario: () => {
                const s = document.getElementById('scenario-select').value;
                app.roleplayContext = { scenario: s, history: [] };
                document.getElementById('chat-window').innerHTML = `<div class="chat-bubble chat-ai fade-in"><p>Hello! (Scenario: ${s})</p></div>`;
            },
            handleChatSubmit: async () => {
                const inp = document.getElementById('chat-input');
                const txt = inp.value.trim();
                if(!txt) return;
                const win = document.getElementById('chat-window');
                win.innerHTML += `<div class="chat-bubble chat-user fade-in"><p>${txt}</p></div>`;
                inp.value = '';
                win.scrollTop = win.scrollHeight;
                const data = await aiService.generateContent('roleplay', txt, app.roleplayContext);
                if(data) {
                    if(data.correction) win.innerHTML += `<div class="text-xs text-center text-gray-400 mb-2"><span class="bg-yellow-50 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 px-2 py-1 rounded">Tip: ${data.correction}</span></div>`;
                    win.innerHTML += `<div class="chat-bubble chat-ai fade-in"><p>${data.reply}</p></div>`;
                    app.roleplayContext.history.push({sender:'User', text:txt}, {sender:'AI', text:data.reply});
                    win.scrollTop = win.scrollHeight;
                }
            },
            renderTranslator: (container) => {
                 container.innerHTML = `<div class="max-w-2xl mx-auto fade-in"><h2 class="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-white">Smart Translator</h2><div class="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-md border dark:border-slate-700"><textarea id="trans-input" rows="2" placeholder="Tamil sentence..." class="w-full p-2 outline-none tamil-text bg-transparent text-gray-800 dark:text-white"></textarea><button onclick="views.handleTrans()" class="w-full bg-indigo-600 text-white py-2 rounded-lg mt-2 font-bold">Translate</button></div><div id="trans-res" class="mt-6"></div></div>`;
            },
            handleTrans: async () => {
                const txt = document.getElementById('trans-input').value;
                if(!txt) return;
                const res = document.getElementById('trans-res');
                res.innerHTML = '<div class="loader mx-auto"></div>';
                const data = await aiService.generateContent('translator', txt);
                if(data) res.innerHTML = `<div class="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border dark:border-slate-700"><h3 class="text-xl font-bold text-indigo-900 dark:text-indigo-400 mb-2">${data.english}</h3><p class="text-gray-600 dark:text-gray-300 text-sm">${data.grammar_note}</p></div>`;
            }
        };

        // Initialize
        document.addEventListener('DOMContentLoaded', () => {
            app.init();
        });
