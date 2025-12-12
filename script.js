    // --- EXPANDED MOCK DATA (For Better Demo Experience) ---
        const MOCK_DB = {
            words: {
                "run": {
                    "word": "Run",
                    "tamil_meaning": "ஓடு / இயக்கு",
                    "pronunciation": "ரன்",
                    "part_of_speech": "Verb / Noun",
                    "forms": { "v1": "Run", "v2": "Ran", "v3": "Run", "ving": "Running" },
                    "usage_tamil": "வேகமாக செல்வதை குறிக்க அல்லது ஒரு இயந்திரத்தை இயக்குவதை குறிக்க பயன்படுகிறது.",
                    "examples": [
                        { "eng": "I run every morning.", "tam": "நான் தினமும் காலையில் ஓடுகிறேன்.", "label": "V1 / General" },
                        { "eng": "She ran to the store yesterday.", "tam": "நேற்று அவள் கடைக்கு ஓடினாள்.", "label": "V2 / Past" },
                        { "eng": "He has run three marathons.", "tam": "அவர் மூன்று மராத்தான்கள் ஓடியுள்ளார்.", "label": "V3 / Perfect" },
                        { "eng": "The dog is running in the park.", "tam": "நாய் பூங்காவில் ஓடிக்கொண்டிருக்கிறது.", "label": "Continuous" },
                        { "eng": "She runs a software company.", "tam": "அவள் ஒரு மென்பொருள் நிறுவனத்தை நடத்துகிறாள்.", "label": "Manage" },
                        { "eng": "My nose is running.", "tam": "என் மூக்கில் நீர் வடிகிறது.", "label": "Idiom" },
                        { "eng": "Time is running out.", "tam": "நேரம் முடிந்து கொண்டிருக்கிறது.", "label": "Phrase" },
                        { "eng": "The computer is running slow.", "tam": "கணினி மெதுவாக இயங்குகிறது.", "label": "Machine" },
                        { "eng": "Don't run away from problems.", "tam": "பிரச்சனைகளில் இருந்து ஓடி ஒளியாதே.", "label": "Phrasal Verb" },
                        { "eng": "The buses are not running today.", "tam": "இன்று பேருந்துகள் இயங்கவில்லை.", "label": "Transport" }
                    ],
                    "comparison": {
                        "similar_word": "Jog",
                        "difference_tamil": "'Run' என்றால் வேகமாக ஓடுவது. 'Jog' என்றால் உடற்பயிற்சிக்காக மெதுவாக ஓடுவது.",
                        "example_eng": "I jog every morning to stay fit, but I run when I am late.",
                        "example_tam": "நான் உடற்பயிற்சிக்காக தினமும் மெதுவாக ஓடுவேன் (Jog), ஆனால் தாமதமானால் வேகமாக ஓடுவேன் (Run)."
                    },
                    "collocations": ["Run away", "Run out of", "Run fast", "Run into"]
                },
                "eat": {
                    "word": "Eat",
                    "tamil_meaning": "சாப்பிடு",
                    "pronunciation": "ஈட்",
                    "part_of_speech": "Verb",
                    "forms": { "v1": "Eat", "v2": "Ate", "v3": "Eaten", "ving": "Eating" },
                    "usage_tamil": "உணவை உட்கொள்வதை குறிக்க.",
                    "examples": [
                        { "eng": "I eat lunch at 1 PM.", "tam": "நான் மதியம் 1 மணிக்கு சாப்பிடுவேன்.", "label": "V1" },
                        { "eng": "He ate a whole pizza.", "tam": "அவன் ஒரு முழு பீட்சாவையும் சாப்பிட்டான்.", "label": "V2" },
                        { "eng": "We have eaten already.", "tam": "நாங்கள் ஏற்கனவே சாப்பிட்டுவிட்டோம்.", "label": "V3" },
                        { "eng": "She is eating an apple.", "tam": "அவள் ஆப்பிள் சாப்பிட்டுக் கொண்டிருக்கிறாள்.", "label": "Ving" },
                        { "eng": "Don't eat too much sugar.", "tam": "அதிக சர்க்கரை சாப்பிடாதே.", "label": "Advice" },
                        { "eng": "Do you eat meat?", "tam": "நீ அசைவம் சாப்பிடுவாயா?", "label": "Question" },
                        { "eng": "Let's eat out tonight.", "tam": "இன்று இரவு வெளியே சாப்பிடலாம்.", "label": "Phrasal Verb" },
                        { "eng": "He eats like a horse.", "tam": "அவன் மிக அதிகமாக சாப்பிடுகிறான்.", "label": "Idiom" },
                        { "eng": "Eat your vegetables.", "tam": "உன் காய்கறிகளை சாப்பிடு.", "label": "Command" },
                        { "eng": "I'm eating my words now.", "tam": "நான் சொன்னதை திரும்பப் பெறுகிறேன் (தவறை உணர்ந்து).", "label": "Idiom" }
                    ],
                    "comparison": {
                        "similar_word": "Feed",
                        "difference_tamil": "'Eat' என்றால் சாப்பிடுவது (தானாக). 'Feed' என்றால் ஊட்டி விடுவது அல்லது உணவு அளிப்பது.",
                        "example_eng": "I eat breakfast, but I feed my dog.",
                        "example_tam": "நான் காலை உணவு சாப்பிடுவேன், ஆனால் என் நாய்க்கு உணவு வைப்பேன் (Feed)."
                    },
                    "collocations": ["Eat out", "Eat up", "Healthy eating"]
                }
            },
            sentences: {
                "i didn't went": {
                    "is_correct": false,
                    "correction": "I didn't go",
                    "reason_tamil": "Did ஏற்கனவே Past tense-ஐ குறிக்கிறது. அதனால் அதற்குப் பிறகு வரும் வினைச்சொல் (verb) Present form-ல் (V1) தான் இருக்க வேண்டும். 'Went' வராது.",
                    "alternatives": ["I did not go", "I haven't gone"]
                }
            },
            roleplay: {
                "hello": {
                    "reply": "Hello! Welcome to the coffee shop. What can I get for you today?",
                    "reply_tamil": "வணக்கம்! காபி ஷாப்பிற்கு வரவேற்கிறோம். இன்று உங்களுக்கு என்ன வேண்டும்?",
                    "correction": null
                }
            },
            translator: {
                "நான் வருகிறேன்": {
                    "english": "I am coming.",
                    "word_mapping": [
                        {"tam": "நான் (Naan)", "eng": "I"},
                        {"tam": "வருகிறேன் (Varugiren)", "eng": "am coming"}
                    ],
                    "grammar_note": "In Tamil, the verb 'வருகிறேன்' includes both the action 'come' and the tense 'present continuous'. English uses 'am coming' to show it is happening now."
                }
            }
        };

        // --- APP STATE & UTILS ---
        const app = {
            apiKey: localStorage.getItem('chitti_api_key') || '',
            currentView: 'home',
            vocabList: JSON.parse(localStorage.getItem('chitti_vocab')) || [],
            roleplayContext: { scenario: 'General', history: [] },
            
            toggleSettings: () => {
                document.getElementById('settings-modal').classList.toggle('hidden');
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
                app.toast('API Key Saved! You have unlimited access.', 'success');
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
                const bgColor = type === 'success' ? 'bg-green-600' : (type === 'error' ? 'bg-red-500' : 'bg-gray-800');
                div.className = `fixed bottom-4 right-4 px-6 py-3 rounded-xl text-white shadow-xl fade-in z-[70] ${bgColor} flex items-center gap-2`;
                div.innerHTML = `<i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i> <span>${msg}</span>`;
                document.body.appendChild(div);
                setTimeout(() => div.remove(), 3000);
            },

            navigate: (view) => {
                app.currentView = view;
                document.getElementById('mobile-menu').classList.add('hidden');
                
                document.querySelectorAll('[id^="nav-"]').forEach(btn => btn.classList.remove('bg-blue-100', 'text-blue-700'));
                const activeBtn = document.getElementById(`nav-${view}`);
                if(activeBtn) activeBtn.classList.add('bg-blue-100', 'text-blue-700');

                const content = document.getElementById('app-content');
                content.innerHTML = ''; 
                
                switch(view) {
                    case 'home': views.renderHome(content); break;
                    case 'word360': views.renderWord360(content); break;
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
                            const term = input.toLowerCase().trim();
                            
                            if (promptType === 'word_explainer') {
                                // Default to 'run' if word matches or if user enters something random in demo
                                if (MOCK_DB.words[term]) resolve(MOCK_DB.words[term]);
                                else resolve({ error: "demo_limit" });
                            } else if (promptType === 'correction') {
                                const key = Object.keys(MOCK_DB.sentences).find(k => term.includes(k));
                                resolve(key ? MOCK_DB.sentences[key] : {
                                    is_correct: true, correction: input, reason_tamil: "Demo: Looks good!", alternatives: []
                                });
                            } else if (promptType === 'roleplay') {
                                resolve(MOCK_DB.roleplay['hello']);
                            } else if (promptType === 'translator') {
                                resolve(MOCK_DB.translator['நான் வருகிறேன்'] || {
                                    english: "Demo: Please add API Key",
                                    word_mapping: [],
                                    grammar_note: "Demo Mode only supports 'நான் வருகிறேன்'"
                                });
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
                    return `Act as an English Teacher for Tamil students. Analyze the word "${input}". 
                    Return strictly valid JSON with NO markdown:
                    {
                        "word": "${input}",
                        "tamil_meaning": "Meaning in Tamil",
                        "pronunciation": "Tamil phonetic (e.g. ரன்)",
                        "part_of_speech": "Noun/Verb/Adj",
                        "forms": {"v1": "Base", "v2": "Past", "v3": "Past Participle", "ving": "Continuous"},
                        "usage_tamil": "Detailed explanation of when to use this word in Tamil.",
                        "examples": [
                            {"eng": "Sentence using V1 (if verb) or general usage", "tam": "Tamil translation", "label": "V1 / General"},
                            {"eng": "Sentence using V2 (if verb)", "tam": "Tamil translation", "label": "V2 / Past"},
                            {"eng": "Sentence using V3 (if verb)", "tam": "Tamil translation", "label": "V3 / Perfect"},
                            {"eng": "Sentence using Ving (if verb)", "tam": "Tamil translation", "label": "Continuous"},
                            {"eng": "Sentence in a different context", "tam": "Tamil translation", "label": "Context 1"},
                            {"eng": "Sentence in another context", "tam": "Tamil translation", "label": "Context 2"},
                            {"eng": "Idiom or Phrase usage", "tam": "Tamil translation", "label": "Idiom"},
                            {"eng": "Negative sentence", "tam": "Tamil translation", "label": "Negative"},
                            {"eng": "Question format", "tam": "Tamil translation", "label": "Question"},
                            {"eng": "Common daily usage", "tam": "Tamil translation", "label": "Daily Use"}
                            // Provide at least 10 examples covering V1, V2, V3, Ving if it's a verb.
                        ],
                        "comparison": {
                            "similar_word": "A word often confused with this (e.g. Say vs Tell, Make vs Build)",
                            "difference_tamil": "Explain the difference in Tamil clearly.",
                            "example_eng": "A sentence showing the distinction.",
                            "example_tam": "Tamil translation of the distinction example."
                        },
                        "collocations": ["List", "4", "common", "pairs"]
                    }`;
                } else if (type === 'correction') {
                    return `Check this English sentence for a Tamil speaker: "${input}". 
                    Return strictly valid JSON with NO markdown:
                    {
                        "is_correct": boolean,
                        "correction": "Corrected sentence",
                        "reason_tamil": "Explain the mistake using Tamil logic comparison.",
                        "alternatives": ["Natural native alternative 1", "Formal alternative 2"]
                    }`;
                } else if (type === 'roleplay') {
                    const historyText = context.history.map(m => `${m.sender}: ${m.text}`).join('\n');
                    return `Act as a character in a ${context.scenario} scenario.
                    Keep responses concise (max 2 sentences) and friendly.
                    
                    Conversation History:
                    ${historyText}
                    User: ${input}
                    
                    Reply to the user. If the user made a grammar mistake, provide a gentle correction in the 'correction' field, otherwise null.
                    Return strictly valid JSON with NO markdown:
                    {
                        "reply": "Your response as the character",
                        "reply_tamil": "Tamil translation of your response (casual/spoken style)",
                        "correction": "Correction of user's last message if needed, else null"
                    }`;
                } else if (type === 'translator') {
                    return `Translate this Tamil sentence to English: "${input}".
                    Explain the grammar logic/word order change for a learner.
                    Return strictly valid JSON with NO markdown:
                    {
                        "english": "English translation",
                        "word_mapping": [{"tam": "Tamil Word", "eng": "English Equivalent"}],
                        "grammar_note": "Explain the structural difference (e.g. SOV vs SVO) in English."
                    }`;
                }
            }
        };

        // --- VIEWS ---
        const views = {
            renderHome: (container) => {
                container.innerHTML = `
                    <div class="text-center py-8 md:py-16 fade-in">
                        <div class="inline-block p-2 bg-blue-100 rounded-2xl mb-4">
                            <i class="fas fa-robot text-4xl text-blue-600 animate-bounce"></i>
                        </div>
                        <h1 class="text-4xl md:text-5xl font-extrabold text-gray-800 mb-3 tracking-tight">
                            Hello, I am <span class="gradient-text">Chitti.</span>
                        </h1>
                        <h2 class="text-xl md:text-2xl text-gray-500 font-medium mb-8 tamil-text">உங்கள் தமிழ் வழி ஆங்கில ஆசிரியர்.</h2>
                        
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto px-2">
                            <!-- Card 1 -->
                            <div onclick="app.navigate('word360')" class="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition cursor-pointer border border-gray-100 group text-left relative overflow-hidden">
                                <div class="absolute top-0 right-0 w-20 h-20 bg-blue-50 rounded-bl-full -mr-10 -mt-10 transition group-hover:bg-blue-100"></div>
                                <div class="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white text-xl mb-4 shadow-lg shadow-blue-200">
                                    <i class="fas fa-search"></i>
                                </div>
                                <h3 class="font-bold text-lg mb-1">Word 360°</h3>
                                <p class="text-gray-500 text-sm tamil-text leading-relaxed">சொற்களை ஆழமாக புரிந்து கொள்ள சிறந்த வழி.</p>
                            </div>

                            <!-- Card 2 -->
                            <div onclick="app.navigate('fixer')" class="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition cursor-pointer border border-gray-100 group text-left relative overflow-hidden">
                                <div class="absolute top-0 right-0 w-20 h-20 bg-orange-50 rounded-bl-full -mr-10 -mt-10 transition group-hover:bg-orange-100"></div>
                                <div class="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center text-white text-xl mb-4 shadow-lg shadow-orange-200">
                                    <i class="fas fa-wand-magic-sparkles"></i>
                                </div>
                                <h3 class="font-bold text-lg mb-1">Fix Grammar</h3>
                                <p class="text-gray-500 text-sm tamil-text leading-relaxed">வாக்கிய பிழைகளை திருத்தி விளக்கம் பெறுங்கள்.</p>
                            </div>

                            <!-- Card 3 (Roleplay) -->
                            <div onclick="app.navigate('roleplay')" class="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition cursor-pointer border border-gray-100 group text-left relative overflow-hidden">
                                <div class="absolute top-0 right-0 w-20 h-20 bg-purple-50 rounded-bl-full -mr-10 -mt-10 transition group-hover:bg-purple-100"></div>
                                <div class="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center text-white text-xl mb-4 shadow-lg shadow-purple-200">
                                    <i class="fas fa-comments"></i>
                                </div>
                                <h3 class="font-bold text-lg mb-1 flex items-center gap-2">Roleplay <span class="bg-purple-100 text-purple-700 text-xs px-2 py-0.5 rounded-full">New</span></h3>
                                <p class="text-gray-500 text-sm tamil-text leading-relaxed">சிட்டியுடன் ஆங்கிலத்தில் பேசி பழகுங்கள்.</p>
                            </div>

                            <!-- Card 4 (Translator) -->
                            <div onclick="app.navigate('translator')" class="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition cursor-pointer border border-gray-100 group text-left relative overflow-hidden">
                                <div class="absolute top-0 right-0 w-20 h-20 bg-indigo-50 rounded-bl-full -mr-10 -mt-10 transition group-hover:bg-indigo-100"></div>
                                <div class="w-12 h-12 bg-indigo-500 rounded-xl flex items-center justify-center text-white text-xl mb-4 shadow-lg shadow-indigo-200">
                                    <i class="fas fa-language"></i>
                                </div>
                                <h3 class="font-bold text-lg mb-1 flex items-center gap-2">Smart Translator <span class="bg-indigo-100 text-indigo-700 text-xs px-2 py-0.5 rounded-full">New</span></h3>
                                <p class="text-gray-500 text-sm tamil-text leading-relaxed">மொழிபெயர்ப்புடன் இலக்கண விளக்கமும்.</p>
                            </div>

                             <!-- Card 5 (Vocab) -->
                            <div onclick="app.navigate('vocab')" class="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition cursor-pointer border border-gray-100 group text-left relative overflow-hidden md:col-span-2 lg:col-span-2">
                                <div class="absolute top-0 right-0 w-20 h-20 bg-emerald-50 rounded-bl-full -mr-10 -mt-10 transition group-hover:bg-emerald-100"></div>
                                <div class="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center text-white text-xl mb-4 shadow-lg shadow-emerald-200">
                                    <i class="fas fa-book-bookmark"></i>
                                </div>
                                <h3 class="font-bold text-lg mb-1">My Vocab</h3>
                                <p class="text-gray-500 text-sm tamil-text leading-relaxed">சேமித்த சொற்களை மீண்டும் படியுங்கள்.</p>
                            </div>
                        </div>

                        <!-- Status Badge -->
                        <div class="mt-10 inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200 shadow-sm text-sm">
                            <span class="w-2 h-2 rounded-full ${app.apiKey ? 'bg-green-500' : 'bg-orange-400'}"></span>
                            <span class="text-gray-600 font-medium">
                                ${app.apiKey ? 'Chitti is Online (Full Access)' : 'Demo Mode (Limited Words)'}
                            </span>
                        </div>
                    </div>
                `;
            },

            renderWord360: (container) => {
                // Determine random suggestions based on API mode
                const demoWords = Object.keys(MOCK_DB.words);
                const fullWords = ["Resilience", "Empathy", "Perspective", "Nostalgia", "Ambition", "Integrity", "Courage", "Optimism", "Procrastinate", "Consistent", "Unique", "Determine", "Journey", "Wisdom", "Knowledge"];
                
                const sourceList = app.apiKey ? fullWords : demoWords;
                const shuffled = sourceList.sort(() => 0.5 - Math.random()).slice(0, 5);
                
                const suggestionsHtml = shuffled.map(word => 
                    `<button onclick="document.getElementById('word-input').value='${word}'; views.handleWordSubmit()" class="text-xs bg-white border border-gray-200 px-3 py-1.5 rounded-full hover:bg-blue-50 hover:border-blue-200 text-gray-600 hover:text-blue-600 transition capitalize">${word}</button>`
                ).join('');

                container.innerHTML = `
                    <div class="max-w-3xl mx-auto fade-in">
                        <div class="text-center mb-8">
                            <h2 class="text-2xl font-bold text-gray-800 mb-2">Word 360° Analysis</h2>
                            <p class="text-gray-500 tamil-text">எந்த வார்த்தையையும் சந்தேகமே இல்லாமல் கற்றுக்கொள்ளுங்கள்.</p>
                        </div>
                        <div class="bg-white rounded-2xl shadow-lg p-3 flex border border-gray-200 focus-within:border-blue-500 focus-within:ring-4 ring-blue-50 transition mb-4">
                            <input type="text" id="word-input" placeholder="Type a word (e.g., Run, Study, Make)" class="flex-grow p-3 outline-none text-lg text-gray-700 bg-transparent" autocomplete="off" onkeypress="if(event.key==='Enter') views.handleWordSubmit()">
                            <button onclick="views.handleWordSubmit()" class="bg-blue-600 text-white px-6 md:px-8 py-2 rounded-xl font-bold hover:bg-blue-700 transition shadow-md shadow-blue-200"><i class="fas fa-search md:hidden"></i><span class="hidden md:inline">Ask Chitti</span></button>
                        </div>
                        
                        <!-- Suggestions -->
                        <div class="flex flex-wrap justify-center items-center gap-2 mb-8">
                            <span class="text-xs text-gray-400 uppercase font-bold tracking-wider mr-1"><i class="fas fa-random mr-1"></i>Try:</span>
                            ${suggestionsHtml}
                        </div>

                        <div id="word-result" class="space-y-6 min-h-[200px]"></div>
                    </div>
                `;
            },
            
            handleWordSubmit: async () => {
                 const input = document.getElementById('word-input').value.trim();
                 if(!input) return;
                 const resDiv = document.getElementById('word-result');
                 resDiv.innerHTML = `<div class="flex flex-col items-center py-12"><div class="loader mb-4"></div><p class="text-gray-500 text-sm font-medium animate-pulse">Chitti is thinking...</p></div>`;
                 
                 const data = await aiService.generateContent('word_explainer', input);
                 
                 if (data && data.error === 'demo_limit') {
                    resDiv.innerHTML = `<div class="bg-white p-8 rounded-2xl shadow-sm border border-orange-200 text-center fade-in"><div class="w-16 h-16 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl"><i class="fas fa-lock"></i></div><h3 class="text-lg font-bold text-gray-800 mb-2">Word Not Found in Demo</h3><p class="text-gray-600 mb-6 max-w-md mx-auto">Please add your free API Key in settings for unlimited words.</p><button onclick="app.toggleSettings()" class="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700">Add API Key</button></div>`;
                    return;
                 }

                 if(data) {
                     const formsHtml = data.forms ? `<div class="grid grid-cols-4 gap-2 text-center text-sm bg-gray-50 p-4 rounded-xl mb-6 border border-gray-100"><div class="bg-white p-2 rounded shadow-sm"><strong class="text-blue-700 block">${data.forms.v1}</strong><span class="text-[10px] text-gray-400">V1 (Base)</span></div><div class="bg-white p-2 rounded shadow-sm"><strong class="text-blue-700 block">${data.forms.v2}</strong><span class="text-[10px] text-gray-400">V2 (Past)</span></div><div class="bg-white p-2 rounded shadow-sm"><strong class="text-blue-700 block">${data.forms.v3}</strong><span class="text-[10px] text-gray-400">V3 (Perfect)</span></div><div class="bg-white p-2 rounded shadow-sm"><strong class="text-blue-700 block">${data.forms.ving}</strong><span class="text-[10px] text-gray-400">Continuous</span></div></div>` : '';
                     
                     const examplesHtml = data.examples.map(ex => `
                        <div class="flex gap-3 items-start group">
                            <div class="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-300 group-hover:bg-blue-500 transition"></div>
                            <div class="flex-grow">
                                <div class="flex justify-between items-start">
                                    <p class="text-gray-800 font-medium">${ex.eng}</p>
                                    ${ex.label ? `<span class="text-[10px] bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full uppercase tracking-wide font-bold whitespace-nowrap ml-2">${ex.label}</span>` : ''}
                                </div>
                                <p class="text-gray-500 text-sm tamil-text">${ex.tam}</p>
                            </div>
                        </div>
                     `).join('');

                     const comparisonHtml = data.comparison ? `
                        <div class="mb-6 bg-orange-50 p-5 rounded-xl border border-orange-100">
                            <h4 class="text-orange-800 font-bold uppercase text-xs tracking-wider mb-3 flex items-center gap-2">
                                <i class="fas fa-exclamation-triangle"></i> Don't Confuse With (குழப்ப வேண்டாம்)
                            </h4>
                            <div class="flex flex-col md:flex-row gap-4 items-start">
                                <div class="bg-white p-3 rounded-lg shadow-sm border border-orange-100 flex-1">
                                    <span class="text-xs text-gray-400 uppercase font-bold">Word</span>
                                    <p class="text-xl font-bold text-gray-800">${data.comparison.similar_word}</p>
                                </div>
                                <div class="flex-[3]">
                                    <p class="text-gray-700 tamil-text mb-2 font-medium">${data.comparison.difference_tamil}</p>
                                    <div class="bg-white/50 p-2 rounded text-sm border border-orange-100">
                                        <p class="text-gray-800">"${data.comparison.example_eng}"</p>
                                        <p class="text-gray-500 tamil-text text-xs">${data.comparison.example_tam}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                     ` : '';

                     resDiv.innerHTML = `
                        <div class="bg-white rounded-2xl shadow-xl overflow-hidden fade-in border border-gray-100">
                            <div class="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 text-white">
                                <h1 class="text-4xl font-bold mb-2">${data.word}</h1>
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
                                    <h4 class="text-gray-400 font-bold uppercase text-xs tracking-wider mb-2">Usage Context (பயன்பாடு)</h4>
                                    <div class="text-gray-700 tamil-text bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 leading-relaxed">
                                        ${data.usage_tamil}
                                    </div>
                                </div>

                                ${comparisonHtml}

                                <div class="mb-6">
                                    <h4 class="text-gray-400 font-bold uppercase text-xs tracking-wider mb-2 flex items-center gap-2">
                                        <i class="fas fa-list-ul"></i> 10+ Examples (உதாரணங்கள்)
                                    </h4>
                                    <div class="space-y-4 bg-gray-50 p-4 rounded-xl border border-gray-100 h-64 overflow-y-auto custom-scrollbar">
                                        ${examplesHtml}
                                    </div>
                                </div>
                                
                                <button onclick='views.saveToVocab(${JSON.stringify(data).replace(/'/g, "&#39;")})' class="w-full flex items-center justify-center gap-2 bg-gray-900 text-white hover:bg-black px-6 py-2.5 rounded-xl transition shadow-lg shadow-gray-200">
                                    <i class="far fa-bookmark"></i> Save to Vocab
                                </button>
                            </div>
                        </div>`;
                 }
            },
            
            renderFixer: (container) => {
                 container.innerHTML = `<div class="max-w-2xl mx-auto fade-in"><div class="text-center mb-8"><h2 class="text-2xl font-bold text-gray-800 mb-2">Grammar Fixer</h2><p class="text-gray-500 tamil-text">தவறான வாக்கியத்தை கொடுங்கள், காரணத்துடன் திருத்துகிறோம்.</p></div><div class="bg-white p-2 rounded-2xl shadow-lg border border-gray-200 focus-within:ring-4 focus-within:ring-orange-100 transition"><textarea id="fixer-input" rows="3" placeholder="Type incorrect sentence (e.g. 'I didn't went there')" class="w-full p-4 rounded-xl outline-none resize-none text-lg text-gray-700"></textarea><div class="flex justify-between items-center px-4 pb-2"><span class="text-xs text-gray-400">Press Check to analyze</span><button onclick="views.handleFixerSubmit()" class="bg-secondary text-white px-6 py-2 rounded-xl font-bold hover:bg-orange-600 transition shadow-md shadow-orange-200 flex items-center gap-2"><i class="fas fa-check"></i> Check</button></div></div><div id="fixer-result" class="mt-8 space-y-4"></div></div>`;
            },
            
            handleFixerSubmit: async () => {
                const input = document.getElementById('fixer-input').value.trim();
                if(!input) return;
                const resDiv = document.getElementById('fixer-result');
                resDiv.innerHTML = `<div class="flex flex-col items-center py-8"><div class="loader mb-2"></div></div>`;
                const data = await aiService.generateContent('correction', input);
                if(data) {
                    const statusColor = data.is_correct ? 'green' : 'red';
                    const icon = data.is_correct ? 'check-circle' : 'times-circle';
                    resDiv.innerHTML = `<div class="bg-white rounded-2xl shadow-lg overflow-hidden fade-in border border-gray-100"><div class="p-6"><div class="flex items-start gap-4 mb-6"><div class="bg-${statusColor}-50 p-3 rounded-full shrink-0"><i class="fas fa-${icon} text-2xl text-${statusColor}-500"></i></div><div class="flex-grow"><p class="text-gray-400 text-sm mb-1 uppercase tracking-wide font-bold">Original</p><p class="text-gray-500 line-through text-lg mb-4 bg-gray-50 inline-block px-2 rounded">${input}</p><p class="text-gray-400 text-sm mb-1 uppercase tracking-wide font-bold text-${statusColor}-600">Corrected</p><p class="text-2xl font-bold text-gray-800">${data.correction}</p></div></div><div class="bg-blue-50 p-5 rounded-xl border border-blue-100"><h4 class="font-bold text-blue-800 text-sm mb-2 uppercase tracking-wide">Chitti's Logic (விளக்கம்)</h4><p class="text-gray-700 tamil-text leading-relaxed">${data.reason_tamil}</p></div></div></div>`;
                }
            },
            
            renderVocab: (container) => {
                const list = app.vocabList;
                if(list.length === 0) {
                    container.innerHTML = `<div class="text-center py-20 text-gray-400 fade-in"><div class="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4"><i class="fas fa-folder-open text-3xl opacity-30"></i></div><p class="text-lg">Your vocabulary list is empty.</p><button onclick="app.navigate('word360')" class="mt-4 text-blue-600 font-bold hover:underline">Start Learning Words</button></div>`;
                    return;
                }
                const itemsHtml = list.map((item, index) => `<div class="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition group relative overflow-hidden"><div class="absolute left-0 top-0 bottom-0 w-1 bg-blue-500"></div><div class="flex justify-between items-start"><div><div class="flex items-baseline gap-2 mb-1"><h3 class="font-bold text-xl text-gray-800">${item.word}</h3><span class="text-xs bg-gray-100 px-2 py-0.5 rounded text-gray-500 font-mono">${item.pronunciation}</span></div><p class="text-blue-600 tamil-text font-medium">${item.tamil_meaning}</p></div><button onclick="views.deleteVocab(${index})" class="w-8 h-8 rounded-full hover:bg-red-50 text-gray-300 hover:text-red-500 transition flex items-center justify-center"><i class="fas fa-trash-alt"></i></button></div></div>`).join('');
                container.innerHTML = `<div class="max-w-3xl mx-auto fade-in"><div class="flex justify-between items-center mb-6"><h2 class="text-2xl font-bold text-gray-800">My Vocabulary <span class="bg-blue-100 text-blue-700 text-sm px-2 py-1 rounded-full ml-2">${list.length}</span></h2><button onclick="views.exportVocab()" class="text-gray-600 text-sm font-medium hover:text-blue-600 flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border shadow-sm"><i class="fas fa-file-export"></i> Export</button></div><div class="grid grid-cols-1 md:grid-cols-2 gap-4">${itemsHtml}</div></div>`;
            },
            
            saveToVocab: (wordData) => {
                if (!app.vocabList.some(w => w.word === wordData.word)) {
                    app.vocabList.unshift(wordData);
                    localStorage.setItem('chitti_vocab', JSON.stringify(app.vocabList));
                    app.toast("Saved to My Vocab!", "success");
                } else {
                    app.toast("Already in your list.", "info");
                }
            },
            
            deleteVocab: (index) => {
                app.vocabList.splice(index, 1);
                localStorage.setItem('chitti_vocab', JSON.stringify(app.vocabList));
                views.renderVocab(document.getElementById('app-content'));
                app.toast("Word removed.", "info");
            },

            exportVocab: () => {
                const text = app.vocabList.map(w => `${w.word} (${w.pronunciation}) - ${w.tamil_meaning}\nUsage: ${w.usage_tamil}\n---`).join('\n');
                const blob = new Blob([text], { type: 'text/plain' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'my-chitti-vocab.txt';
                a.click();
            },

            // --- ROLEPLAY (Same as before) ---
            renderRoleplay: (container) => {
                container.innerHTML = `
                    <div class="max-w-2xl mx-auto fade-in h-[calc(100vh-140px)] flex flex-col">
                        <div class="flex justify-between items-center mb-4 flex-wrap gap-2">
                            <h2 class="text-xl font-bold text-gray-800">Roleplay Chat</h2>
                            <div class="flex gap-2 items-center flex-wrap">
                                <select id="scenario-select" onchange="views.changeScenario()" class="bg-white border border-gray-300 rounded-lg text-sm px-3 py-1 outline-none">
                                    <option value="Coffee Shop">☕ Coffee Shop</option>
                                    <option value="Job Interview">💼 Job Interview</option>
                                    <option value="Grocery Store">🛒 Grocery Store</option>
                                    <option value="Asking Directions">🗺️ Asking Directions</option>
                                    <option value="Friend">👫 Friend</option>
                                    <option value="Girlfriend">❤️ Girlfriend</option>
                                </select>
                                <div class="flex items-center gap-2 text-sm text-gray-600 bg-white px-2 py-1 rounded border border-gray-200">
                                    <input type="checkbox" id="chat-translate-toggle" onchange="views.toggleChatTranslation()" class="rounded text-purple-600 focus:ring-purple-500">
                                    <label for="chat-translate-toggle" class="whitespace-nowrap cursor-pointer select-none">Show Tamil</label>
                                </div>
                            </div>
                        </div>
                        <div id="chat-window" class="flex-grow bg-white rounded-2xl shadow-lg border border-gray-200 p-4 overflow-y-auto mb-4 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]">
                            <div class="chat-bubble chat-ai">
                                <p>Hello! I'm the barista at this coffee shop. What can I get for you today?</p>
                                <p class="translation-text text-sm text-gray-500 mt-2 pt-2 border-t border-gray-100 tamil-text hidden">வணக்கம்! காபி ஷாப்பிற்கு வரவேற்கிறோம். இன்று உங்களுக்கு என்ன வேண்டும்?</p>
                            </div>
                        </div>
                        <div class="flex gap-2">
                            <input type="text" id="chat-input" placeholder="Type your reply..." class="flex-grow p-3 rounded-xl border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition" onkeypress="if(event.key==='Enter') views.handleChatSubmit()">
                            <button onclick="views.handleChatSubmit()" class="bg-purple-600 text-white w-12 h-12 rounded-xl flex items-center justify-center hover:bg-purple-700 transition shadow-lg shadow-purple-200"><i class="fas fa-paper-plane"></i></button>
                        </div>
                    </div>
                `;
                app.roleplayContext = { scenario: 'Coffee Shop', history: [] };
            },

            changeScenario: () => {
                const scenario = document.getElementById('scenario-select').value;
                app.roleplayContext = { scenario: scenario, history: [] };
                const chatWindow = document.getElementById('chat-window');
                const greetings = { 
                    "Coffee Shop": "Hello! I'm the barista. What would you like to drink?", 
                    "Job Interview": "Good morning. Please take a seat. Tell me about yourself.", 
                    "Grocery Store": "Hi there! Can I help you find anything in the store?", 
                    "Asking Directions": "Excuse me? You look lost. Can I help you find a place?",
                    "Friend": "Hey buddy! Long time no see. How have you been?",
                    "Girlfriend": "Hey sweetie! How was your day today?"
                };
                const translations = {
                    "Coffee Shop": "வணக்கம்! நான் பாரிஸ்டா. உங்களுக்கு என்ன வேண்டும்?",
                    "Job Interview": "காலை வணக்கம். அமருங்கள். உங்களைப் பற்றி சொல்லுங்கள்.",
                    "Grocery Store": "வணக்கம்! கடையில் ஏதாவது தேட உதவி வேண்டுமா?",
                    "Asking Directions": "மன்னிக்கவும்? நீங்கள் வழி தவறியது போல் தெரிகிறது. நான் உதவலாமா?",
                    "Friend": "ஹே நண்பா! பார்த்து ரொம்ப நாளாச்சு. எப்படி இருக்க?",
                    "Girlfriend": "ஹே கண்ணம்மா! இன்று உன் நாள் எப்படி இருந்தது?"
                };
                
                const showTamil = document.getElementById('chat-translate-toggle').checked;
                
                chatWindow.innerHTML = `
                    <div class="chat-bubble chat-ai fade-in">
                        <p>${greetings[scenario]}</p>
                        <p class="translation-text text-sm text-gray-500 mt-2 pt-2 border-t border-gray-100 tamil-text ${showTamil ? '' : 'hidden'}">${translations[scenario]}</p>
                    </div>
                `;
            },

            handleChatSubmit: async () => {
                const inputEl = document.getElementById('chat-input');
                const text = inputEl.value.trim();
                if(!text) return;
                const chatWindow = document.getElementById('chat-window');
                chatWindow.innerHTML += `<div class="chat-bubble chat-user fade-in"><p>${text}</p></div>`;
                inputEl.value = '';
                chatWindow.scrollTop = chatWindow.scrollHeight;
                const loaderId = 'typing-' + Date.now();
                chatWindow.innerHTML += `<div id="${loaderId}" class="chat-bubble chat-ai fade-in w-16"><div class="flex gap-1 justify-center"><div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div><div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0.2s"></div><div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0.4s"></div></div></div>`;
                chatWindow.scrollTop = chatWindow.scrollHeight;
                
                const data = await aiService.generateContent('roleplay', text, app.roleplayContext);
                document.getElementById(loaderId).remove();
                
                const showTamil = document.getElementById('chat-translate-toggle').checked;

                if(data) {
                    if(data.correction) chatWindow.innerHTML += `<div class="text-xs text-center text-gray-400 mb-2 fade-in"><span class="bg-yellow-50 text-yellow-700 border border-yellow-200 px-2 py-1 rounded">Tip: "${data.correction}"</span></div>`;
                    
                    chatWindow.innerHTML += `
                        <div class="chat-bubble chat-ai fade-in">
                            <p>${data.reply}</p>
                            <p class="translation-text text-sm text-gray-500 mt-2 pt-2 border-t border-gray-100 tamil-text ${showTamil ? '' : 'hidden'}">${data.reply_tamil || ''}</p>
                        </div>
                    `;
                    
                    app.roleplayContext.history.push({ sender: 'User', text: text });
                    app.roleplayContext.history.push({ sender: 'AI', text: data.reply });
                    if(app.roleplayContext.history.length > 6) app.roleplayContext.history.shift();
                }
                chatWindow.scrollTop = chatWindow.scrollHeight;
            },
            
            toggleChatTranslation: () => {
                const checked = document.getElementById('chat-translate-toggle').checked;
                document.querySelectorAll('.translation-text').forEach(el => {
                    if(checked) el.classList.remove('hidden');
                    else el.classList.add('hidden');
                });
            },

            // --- TRANSLATOR (Same as before) ---
            renderTranslator: (container) => {
                container.innerHTML = `
                    <div class="max-w-2xl mx-auto fade-in">
                        <div class="text-center mb-8">
                            <h2 class="text-2xl font-bold text-gray-800 mb-2">Smart Translator</h2>
                            <p class="text-gray-500 tamil-text">ஆங்கில மொழிபெயர்ப்பின் 'காரணத்தை' புரிந்து கொள்ளுங்கள்.</p>
                        </div>
                        <div class="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 mb-8">
                            <label class="block text-sm font-bold text-gray-500 mb-2 uppercase">Tamil Sentence (தமிழ்)</label>
                            <textarea id="trans-input" rows="2" placeholder="நான் நாளை சென்னைக்கு செல்கிறேன்..." class="w-full p-3 rounded-xl border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none tamil-text text-lg"></textarea>
                            <div class="flex justify-end mt-3"><button onclick="views.handleTransSubmit()" class="bg-indigo-600 text-white px-6 py-2 rounded-xl font-bold hover:bg-indigo-700 transition shadow-md shadow-indigo-200">Translate & Explain</button></div>
                        </div>
                        <div id="trans-result"></div>
                    </div>
                `;
            },

            handleTransSubmit: async () => {
                const input = document.getElementById('trans-input').value.trim();
                if(!input) return;
                const resDiv = document.getElementById('trans-result');
                resDiv.innerHTML = `<div class="flex flex-col items-center py-8"><div class="loader mb-2"></div></div>`;
                const data = await aiService.generateContent('translator', input);
                if(data) {
                    const mappingHtml = data.word_mapping.map(m => `<div class="flex flex-col items-center p-2 bg-gray-50 rounded border border-gray-100"><span class="text-indigo-600 font-bold text-sm">${m.eng}</span><i class="fas fa-arrow-up text-gray-300 text-xs my-1"></i><span class="text-gray-500 text-xs tamil-text text-center">${m.tam}</span></div>`).join('');
                    resDiv.innerHTML = `<div class="bg-white rounded-2xl shadow-xl overflow-hidden fade-in border border-indigo-100"><div class="bg-indigo-50 p-6 border-b border-indigo-100"><p class="text-gray-500 text-xs font-bold uppercase mb-1">English Translation</p><h2 class="text-2xl font-bold text-indigo-900">${data.english}</h2></div><div class="p-6"><div class="mb-6"><h4 class="text-gray-400 font-bold uppercase text-xs tracking-wider mb-3">Word Mapping</h4><div class="flex flex-wrap gap-2">${mappingHtml}</div></div><div class="bg-yellow-50 p-4 rounded-xl border border-yellow-100"><h4 class="text-yellow-700 font-bold text-sm mb-2 flex items-center gap-2"><i class="fas fa-lightbulb"></i> Grammar Logic</h4><p class="text-gray-700 leading-relaxed">${data.grammar_note}</p></div></div></div>`;
                }
            }
        };

        // Initialize
        document.addEventListener('DOMContentLoaded', () => {
            app.updateApiStatus();
            app.navigate('home');
        });