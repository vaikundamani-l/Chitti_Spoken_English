// --- MOCK DATA FOR DEMO MODE ---
const MOCK_DB = {
    grammar: {
        "i didn't went there.": {
            is_correct: false,
            correction: "I didn't go there.",
            reason_tamil: "'didn't' என்ற உதவி வினைச்சொல் (auxiliary verb) பயன்படுத்தும் போது, அடுத்து வரும் முக்கிய வினைச்சொல் V1 (Present tense) வடிவத்தில் தான் இருக்க வேண்டும். எனவே 'went' க்கு பதிலாக 'go' பயன்படுத்த வேண்டும்.",
            alternatives: ["I did not go there.", "I haven't gone there (different context)."]
        }
    },
    translator: {
        "நான் நாளை சென்னை செல்வேன்": {
            english: "I will go to Chennai tomorrow.",
            word_mapping: [
                {tamil: "நான்", english: "I"}, 
                {tamil: "நாளை", english: "tomorrow"}, 
                {tamil: "சென்னை", english: "to Chennai"}, 
                {tamil: "செல்வேன்", english: "will go"}
            ],
            grammar_note: "இது Future Tense (எதிர்காலம்). தமிழில் 'செல்வேன்' என்று உள்ளதால், ஆங்கிலத்தில் 'will + go' பயன்படுத்தப்படுகிறது."
        },
        "நான் நாளை சென்னைக்கு செல்வேன்": {
            english: "I will go to Chennai tomorrow.",
            word_mapping: [
                {tamil: "நான்", english: "I"}, 
                {tamil: "நாளை", english: "tomorrow"}, 
                {tamil: "சென்னைக்கு", english: "to Chennai"}, 
                {tamil: "செல்வேன்", english: "will go"}
            ],
            grammar_note: "இது Future Tense (எதிர்காலம்). தமிழில் 'செல்வேன்' என்று உள்ளதால், ஆங்கிலத்தில் 'will + go' பயன்படுத்தப்படுகிறது."
        }
    },
    story: {
        "a clever fox": {
            title: "The Clever Fox",
            english_story: [
                "One day, a hungry fox was walking through the green forest.",
                "He looked up and saw a black crow sitting on a high tree branch. The crow had a tasty piece of cheese in its beak.",
                "The fox smiled. He wanted the cheese. He looked at the crow and said, 'Oh, beautiful crow! Your feathers are so shiny. I am sure your voice is very sweet. Please sing a song for me.'",
                "The foolish crow was very happy to hear this. It opened its beak to sing. The cheese fell down to the ground. The clever fox quickly ate the cheese and ran away."
            ],
            tamil_summary: "ஒரு பசியுள்ள நரி காட்டில் ஒரு காகத்தைப் பார்த்தது. காகத்தின் அலகில் சீஸ் இருந்தது. நரி காகத்தைப் புகழ்ந்து பாடச் சொன்னது. முட்டாள் காகம் பாட வாயைத் திறந்ததும் சீஸ் கீழே விழுந்தது, நரி அதை எடுத்துக்கொண்டு ஓடியது.",
            vocabulary: [
                {word: "hungry", tamil: "பசியுள்ள"},
                {word: "branch", tamil: "மரக்கிளை"},
                {word: "beak", tamil: "பறவையின் அலகு"},
                {word: "foolish", tamil: "முட்டாள்தனமான"}
            ]
        },
        "a clever fox dialogue": {
            title: "Fox and the Crow: A Conversation",
            dialogue: [
                {speaker: "Fox", english: "Hello there, beautiful crow! You look wonderful today.", tamil: "அங்கே பார், அழகான காகமே! இன்று நீ அற்புதமாக இருக்கிறாய்."},
                {speaker: "Crow", english: "(Holds the cheese tightly, looking proud)", tamil: "(சீஸை இறுக்கமாக பிடித்துக்கொண்டு, பெருமையாக பார்க்கிறது)"},
                {speaker: "Fox", english: "Your feathers are so shiny. I am sure your voice is very sweet too. Can you sing a song for me?", tamil: "உன் சிறகுகள் மிகவும் பளபளப்பாக உள்ளன. உன் குரலும் மிகவும் இனிமையாக இருக்கும் என்று நம்புகிறேன். எனக்காக ஒரு பாடல் பாட முடியுமா?"},
                {speaker: "Crow", english: "(Opens beak to sing) Caw! Caw!", tamil: "(பாட அலகை திறக்கிறது) கா! கா!"},
                {speaker: "Fox", english: "(Catches the falling cheese) Thank you for the delicious cheese! Goodbye!", tamil: "(கீழே விழும் சீஸை பிடிக்கிறது) சுவையான சீஸுக்கு நன்றி! சென்று வருகிறேன்!"}
            ],
            tamil_summary: "நரி காகத்தின் அழகைப் புகழ்ந்து அதனைப் பாடச் சொல்கிறது. காகம் தன் அலகைத் திறந்தவுடன் அதிலிருந்த சீஸ் கீழே விழுகிறது. நரி அந்த சீஸை எடுத்துக்கொண்டு ஏமாற்றிவிட்டுச் செல்கிறது.",
            vocabulary: [
                {word: "beautiful", tamil: "அழகான"},
                {word: "feathers", tamil: "சிறகுகள்"},
                {word: "proud", tamil: "பெருமை"},
                {word: "delicious", tamil: "சுவையான"}
            ]
        }
    }
};

// --- APP STATE & UTILS ---
const app = {
    apiKey: localStorage.getItem('chitti_api_key') || '',
    currentView: 'home',
    darkMode: localStorage.getItem('chitti_dark_mode') === 'true',
    currentStory: null, 
    storyFormat: 'story', 
    
    init: () => {
        app.applyDarkMode();
        app.updateApiStatus();
        
        if (app.apiKey) {
            document.getElementById('api-key-input').value = app.apiKey;
        }

        app.updateNavStyles('home');
    },

    toggleDarkMode: () => {
        app.darkMode = !app.darkMode;
        localStorage.setItem('chitti_dark_mode', app.darkMode);
        app.applyDarkMode();
    },

    applyDarkMode: () => {
        const html = document.documentElement;
        const iconDesktop = document.getElementById('theme-icon');
        
        if (app.darkMode) {
            html.classList.add('dark');
            html.classList.remove('light');
            if(iconDesktop) iconDesktop.className = 'ph-fill ph-sun text-xl text-amber-400';
        } else {
            html.classList.remove('dark');
            html.classList.add('light');
            if(iconDesktop) iconDesktop.className = 'ph-fill ph-moon text-xl text-slate-500';
        }
    },

    toggleSettings: () => {
        const modal = document.getElementById('settings-modal');
        const backdrop = document.getElementById('settings-backdrop');
        const content = document.getElementById('settings-content');
        
        if (modal.classList.contains('hidden')) {
            // Open Sequence
            modal.classList.remove('hidden');
            
            // Force reflow
            void modal.offsetWidth; 
            
            backdrop.classList.remove('opacity-0');
            backdrop.classList.add('opacity-100');
            
            content.classList.remove('translate-y-full', 'md:scale-95', 'md:opacity-0');
            content.classList.add('translate-y-0', 'md:scale-100', 'md:opacity-100');
            
            if(app.apiKey) document.getElementById('api-key-input').value = app.apiKey;
        } else {
            // Close Sequence
            backdrop.classList.remove('opacity-100');
            backdrop.classList.add('opacity-0');
            
            content.classList.remove('translate-y-0', 'md:scale-100', 'md:opacity-100');
            content.classList.add('translate-y-full', 'md:scale-95', 'md:opacity-0');
            
            setTimeout(() => {
                modal.classList.add('hidden');
            }, 300);
        }
    },

    navigate: (view) => {
        if (app.currentView === view) return; 
        app.currentView = view;
        
        document.querySelectorAll('.page-section').forEach(el => el.classList.remove('active'));
        document.getElementById(view).classList.add('active');
        
        app.updateNavStyles(view);
        
        const mainContainer = document.querySelector('main');
        if(mainContainer) mainContainer.scrollTo({top: 0, behavior: 'smooth'});
    },

    updateNavStyles: (view) => {
        // Desktop Nav Reset
        document.querySelectorAll('nav button[id^="desktop-nav-"]').forEach(el => {
            el.classList.remove('desktop-nav-active', 'text-slate-900', 'dark:text-white');
            el.classList.add('text-slate-500', 'dark:text-slate-400');
        });
        
        // Mobile Bottom Nav Reset
        document.querySelectorAll('nav button[id^="mobile-nav-"]').forEach(el => {
            el.classList.remove('mobile-nav-active', 'text-blue-600', 'dark:text-blue-400');
            el.classList.add('text-slate-500', 'dark:text-slate-400');
            const icon = el.querySelector('i');
            if(icon) icon.className = icon.className.replace('ph-fill', 'ph').replace('ph-bold', 'ph');
        });
        
        // Active Desktop
        const activeDesktop = document.getElementById(`desktop-nav-${view}`);
        if(activeDesktop) {
            activeDesktop.classList.remove('text-slate-500', 'dark:text-slate-400');
            activeDesktop.classList.add('desktop-nav-active', 'text-slate-900', 'dark:text-white');
        }

        // Active Mobile
        const activeMobile = document.getElementById(`mobile-nav-${view}`);
        if(activeMobile) {
            activeMobile.classList.remove('text-slate-500', 'dark:text-slate-400');
            activeMobile.classList.add('mobile-nav-active', 'text-blue-600', 'dark:text-blue-400');
            const icon = activeMobile.querySelector('i');
            if(icon) icon.className = icon.className.replace('ph ', 'ph-fill ');
        }
    },

    saveApiKey: () => {
        const key = document.getElementById('api-key-input').value.trim();
        if (key) {
            localStorage.setItem('chitti_api_key', key);
            app.apiKey = key;
            app.updateApiStatus();
            app.toast('API Key Saved Successfully!', 'success');
            setTimeout(() => app.toggleSettings(), 500); 
        }
    },

    clearKey: () => {
        localStorage.removeItem('chitti_api_key');
        app.apiKey = '';
        document.getElementById('api-key-input').value = '';
        app.updateApiStatus();
        app.toast('API Key Cleared. Reverted to Demo Mode.', 'info');
    },

    updateApiStatus: () => {
        const statusText = document.getElementById('api-key-status');
        const dot = document.getElementById('api-status-dot');
        const homeBadge = document.getElementById('home-status-badge');
        
        if (app.apiKey) {
            statusText.textContent = 'Active';
            statusText.className = 'text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-md bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400';
            dot.classList.remove('hidden');
            
            if(homeBadge) {
                homeBadge.className = 'mt-10 md:mt-12 inline-flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800/50 text-emerald-800 dark:text-emerald-400 rounded-full text-xs md:text-sm font-medium transition-colors';
                homeBadge.innerHTML = '<i class="ph-fill ph-check-circle text-lg"></i> Full AI Access Enabled';
                homeBadge.onclick = null;
                homeBadge.style.cursor = 'default';
            }
        } else {
            statusText.textContent = 'Demo Mode';
            statusText.className = 'text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-md bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400';
            dot.classList.add('hidden');
            
            if(homeBadge) {
                homeBadge.className = 'mt-10 md:mt-12 inline-flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/50 text-amber-800 dark:text-amber-400 rounded-full text-xs md:text-sm font-medium transition-colors cursor-pointer active:scale-95';
                homeBadge.innerHTML = '<i class="ph-fill ph-warning-circle text-lg"></i> In Demo Mode. Tap to add Key.';
                homeBadge.onclick = app.toggleSettings;
                homeBadge.style.cursor = 'pointer';
            }
        }
    },

    toast: (msg, type = 'info') => {
        const div = document.createElement('div');
        const isSuccess = type === 'success';
        const bgColor = isSuccess ? 'bg-emerald-600' : (type === 'error' ? 'bg-red-500' : 'bg-slate-800 dark:bg-slate-700');
        const icon = isSuccess ? 'ph-check-circle' : (type === 'error' ? 'ph-warning-circle' : 'ph-info');
        
        div.className = `fixed bottom-24 md:bottom-8 left-1/2 transform -translate-x-1/2 px-5 py-3 rounded-full text-white shadow-xl toast-enter z-[110] ${bgColor} flex items-center gap-2 text-sm font-medium whitespace-nowrap`;
        div.innerHTML = `<i class="ph-fill ${icon} text-lg"></i> <span>${msg}</span>`;
        
        document.body.appendChild(div);
        setTimeout(() => {
            div.style.opacity = '0';
            div.style.transform = 'translate(-50%, 10px) scale(0.95)';
            div.style.transition = 'all 0.3s ease';
            setTimeout(() => div.remove(), 300);
        }, 3000);
    }
};

// --- AI SERVICE ---
const aiService = {
    async generateContent(promptType, input) {
        if (!app.apiKey) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    let result = null;
                    if (promptType === 'correction') {
                        result = MOCK_DB.grammar[input.toLowerCase()];
                    } else if (promptType === 'translator') {
                        result = MOCK_DB.translator[input] || MOCK_DB.translator[input.trim()];
                    } else if (promptType === 'story') {
                        result = MOCK_DB.story[input.toLowerCase()] || MOCK_DB.story['a clever fox'];
                    }
                    
                    if (result) {
                        resolve(result);
                    } else {
                        resolve({ error: "demo_limit" });
                    }
                }, 800);
            });
        }

        try {
            const prompt = this.getPrompt(promptType, input);
            const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${app.apiKey}`;
            
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    systemInstruction: { parts: [{ text: this.getSystemInstruction(promptType) }] },
                    contents: [{ parts: [{ text: prompt }] }],
                    generationConfig: { responseMimeType: "application/json" }
                })
            });
            
            if (!response.ok) throw new Error(`API Error: ${response.status}`);
            
            const data = await response.json();
            const textResult = data.candidates?.[0]?.content?.parts?.[0]?.text;
            if (!textResult) throw new Error("Invalid response format");
            
            const jsonStr = textResult.replace(/^```json\s*/i, '').replace(/```\s*$/i, '').trim();
            return JSON.parse(jsonStr);
        } catch (error) {
            console.error(error);
            app.toast("Error connecting to AI. Check API Key.", "error");
            return null;
        }
    },

    getSystemInstruction(type) {
        if (type === 'correction') {
            return `Act as an English Grammar Teacher for a Tamil speaker. Analyze the sentence. Return STRICT JSON: { "is_correct": boolean, "correction": "corrected sentence or original if correct", "reason_tamil": "Detailed explanation of the mistake or why it is correct, in Tamil", "alternatives": ["alt1", "alt2"] }`;
        } else if (type === 'translator') {
            return `Translate the Tamil text to natural English. Return STRICT JSON: { "english": "translation", "word_mapping": [{"tamil": "word", "english": "word"}], "grammar_note": "Explanation of sentence structure or grammar used, in Tamil" }`;
        } else if (type === 'story') {
            if (app.storyFormat === 'dialogue') {
                return `Write a short, engaging English conversation/dialogue (A2/B1 level) about the user's topic. Format it like a play script. Return STRICT JSON: { "title": "Conversation Title", "dialogue": [{"speaker": "Character Name", "english": "spoken line", "tamil": "tamil translation of line"}], "tamil_summary": "Overall Tamil summary", "vocabulary": [{"word": "english word", "tamil": "tamil meaning"}] }`;
            } else {
                return `Write a very short, engaging English story (A2/B1 level) about the user's topic. Write it like a storyteller narrating a classic tale. Return STRICT JSON: { "title": "Story Title", "english_story": ["paragraph 1", "paragraph 2", "paragraph 3"], "tamil_summary": "Overall Tamil summary of the story", "vocabulary": [{"word": "english word", "tamil": "tamil meaning"}] }`;
            }
        }
        return "";
    },

    getPrompt(type, input) {
        if (type === 'correction') return `Sentence to check: "${input}"`;
        if (type === 'translator') return `Tamil text: "${input}"`;
        if (type === 'story') return `Topic: "${input}"`;
        return input;
    }
};

// --- VIEW CONTROLLERS ---
const views = {
    processGrammar: async () => {
        const input = document.getElementById('grammar-input').value.trim();
        if (!input) return;

        const loading = document.getElementById('grammar-loading');
        const result = document.getElementById('grammar-result');
        const empty = document.getElementById('grammar-empty');
        
        loading.style.display = 'flex';
        result.classList.add('hidden');
        empty.classList.add('hidden');
        
        const data = await aiService.generateContent('correction', input);

        loading.style.display = 'none';

        if (data && data.error === 'demo_limit') {
            app.toast('Sentence not in Demo DB. Try "I didn\'t went there."', 'error');
            empty.classList.remove('hidden');
            return;
        }

        if (data) {
            const badge = document.getElementById('grammar-status-badge');
            if (data.is_correct) {
                badge.className = 'inline-flex items-center gap-1.5 px-3 py-1 md:px-4 md:py-1.5 rounded-full text-xs md:text-sm font-bold w-max mb-5 bg-emerald-100 text-emerald-800 border border-emerald-200 dark:bg-emerald-900/40 dark:text-emerald-400 dark:border-emerald-800/50';
                badge.innerHTML = '<i class="ph-fill ph-check-circle text-lg"></i> Perfect Sentence!';
            } else {
                badge.className = 'inline-flex items-center gap-1.5 px-3 py-1 md:px-4 md:py-1.5 rounded-full text-xs md:text-sm font-bold w-max mb-5 bg-amber-100 text-amber-800 border border-amber-200 dark:bg-amber-900/40 dark:text-amber-400 dark:border-amber-800/50';
                badge.innerHTML = '<i class="ph-fill ph-warning-circle text-lg"></i> Needs Correction';
            }

            document.getElementById('grammar-correction').textContent = data.correction;
            document.getElementById('grammar-reason').textContent = data.reason_tamil;
            
            const altsList = document.getElementById('grammar-alts');
            altsList.innerHTML = '';
            (data.alternatives || []).forEach(a => {
                let li = document.createElement('li'); li.textContent = a; altsList.appendChild(li);
            });

            result.classList.remove('hidden');
        } else {
            empty.classList.remove('hidden');
        }
    },

    processTranslation: async () => {
        const input = document.getElementById('translator-input').value.trim();
        if (!input) return;

        const loading = document.getElementById('translator-loading');
        const result = document.getElementById('translator-result');
        
        loading.style.display = 'flex';
        result.style.display = 'none';
        
        const data = await aiService.generateContent('translator', input);
        
        loading.style.display = 'none';

        if (data && data.error === 'demo_limit') {
            app.toast('Sentence not in Demo DB. Try "நான் நாளை சென்னை செல்வேன்".', 'error');
            return;
        }

        if (data) {
            document.getElementById('trans-english').textContent = data.english;
            document.getElementById('trans-grammar').textContent = data.grammar_note;
            
            const mappingList = document.getElementById('trans-mapping');
            mappingList.innerHTML = '';
            (data.word_mapping || []).forEach(m => {
                let div = document.createElement('div');
                div.className = "flex justify-between items-center border-b border-slate-100 dark:border-slate-700/50 pb-2 last:border-0";
                div.innerHTML = `
                    <span class="font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded text-sm md:text-base">${m.tamil}</span> 
                    <span class="text-slate-300 dark:text-slate-600 text-xs md:text-sm"><i class="ph-bold ph-arrow-right"></i></span> 
                    <span class="font-bold text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/20 px-2 py-1 rounded text-sm md:text-base">${m.english}</span>`;
                mappingList.appendChild(div);
            });

            result.style.display = 'flex';
        }
    },

    setStoryFormat: (format) => {
        app.storyFormat = format;
        const btnStory = document.getElementById('btn-format-story');
        const btnDiag = document.getElementById('btn-format-dialogue');
        
        const baseClass = 'flex-1 py-2 rounded-lg text-sm font-bold transition-all shadow-sm flex items-center justify-center gap-1.5';
        const inactiveClass = 'flex-1 py-2 rounded-lg text-sm font-bold transition-all text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 flex items-center justify-center gap-1.5 bg-transparent';
        
        if (format === 'story') {
            btnStory.className = `${baseClass} bg-white dark:bg-slate-700 text-amber-600 dark:text-amber-400`;
            btnDiag.className = inactiveClass;
            document.getElementById('story-topic').placeholder = "Topic (e.g. A clever fox)...";
        } else {
            btnDiag.className = `${baseClass} bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400`;
            btnStory.className = inactiveClass;
            document.getElementById('story-topic').placeholder = "Topic (e.g. Ordering coffee)...";
        }
    },

    processStory: async () => {
        const input = document.getElementById('story-topic').value.trim() || 'A clever fox';
        
        const loading = document.getElementById('story-loading');
        const result = document.getElementById('story-result');
        const empty = document.getElementById('story-empty');
        
        loading.style.display = 'flex';
        result.style.display = 'none';
        empty.style.display = 'none';
        
        const data = await aiService.generateContent('story', input);
        
        loading.style.display = 'none';

        if (data && data.error === 'demo_limit') {
            app.toast('Using Demo Example. Add key for custom generation.', 'info');
            if (app.storyFormat === 'dialogue') {
                app.currentStory = MOCK_DB.story['a clever fox dialogue'];
            } else {
                app.currentStory = MOCK_DB.story['a clever fox'];
            }
        } else if (data) {
            app.currentStory = data; 
        } else {
            empty.style.display = 'flex';
            return;
        }

        const currentData = app.currentStory;
        document.getElementById('story-title').textContent = currentData.title;
        
        const contentDiv = document.getElementById('story-content');
        contentDiv.innerHTML = '';
        
        if (app.storyFormat === 'dialogue' || currentData.dialogue) {
            contentDiv.classList.remove('font-serif', 'text-justify');
            contentDiv.classList.add('font-sans', 'text-left');
            
            let dialogueHtml = '<div class="space-y-3 md:space-y-4">';
            currentData.dialogue.forEach(line => {
                dialogueHtml += `
                    <div class="bg-white/60 dark:bg-black/20 p-4 md:p-5 rounded-2xl border border-black/5 dark:border-white/5 shadow-sm">
                        <strong class="text-blue-600 dark:text-blue-400 text-xs md:text-sm uppercase tracking-wide block mb-1 md:mb-1.5"><i class="ph-fill ph-user-circle mr-1"></i> ${line.speaker}</strong>
                        <p class="text-slate-800 dark:text-slate-100 font-medium mb-1 text-base md:text-lg">${line.english}</p>
                        <p class="text-slate-500 dark:text-slate-400 text-sm md:text-[15px]">${line.tamil}</p>
                    </div>`;
            });
            dialogueHtml += '</div>';
            contentDiv.innerHTML = dialogueHtml;
        } else {
            contentDiv.classList.add('font-serif', 'text-justify');
            contentDiv.classList.remove('font-sans', 'text-left');
            
            let storyHtml = '';
            currentData.english_story.forEach((p, index) => {
                if (index === 0) {
                    const firstLetter = p.charAt(0);
                    const restOfParagraph = p.slice(1);
                    storyHtml += `<p class="mb-4"><span class="float-left text-5xl md:text-6xl font-extrabold pr-2 leading-[0.8] mt-1.5 text-amber-600 dark:text-amber-500 drop-shadow-sm">${firstLetter}</span>${restOfParagraph}</p>`;
                } else {
                    storyHtml += `<p class="mb-4">${p}</p>`;
                }
            });
            contentDiv.innerHTML = storyHtml;
        }
        
        document.getElementById('story-summary').textContent = currentData.tamil_summary;
        
        const vocabDiv = document.getElementById('story-vocab');
        vocabDiv.innerHTML = '';
        (currentData.vocabulary || []).forEach(v => {
            let div = document.createElement('div');
            div.className = "flex flex-col sm:flex-row sm:items-center justify-between sm:gap-2 bg-white/60 dark:bg-black/20 px-3 py-2 md:px-4 md:py-2.5 rounded-lg shadow-sm border border-black/5 dark:border-white/5";
            div.innerHTML = `
                <span class="font-bold opacity-90 text-slate-800 dark:text-white">${v.word}</span> 
                <span class="text-sm font-medium opacity-80 text-amber-700 dark:text-amber-400 mt-0.5 sm:mt-0">${v.tamil}</span>`;
            vocabDiv.appendChild(div);
        });

        result.style.display = 'flex';
    },

    exportStory: () => {
        if (!app.currentStory) {
            app.toast('No content available to export!', 'error');
            return;
        }
        
        const data = app.currentStory;
        const isDialogue = !!data.dialogue;
        
        let content = `========================================\n`;
        content += `      CHITTI ENGLISH - ${isDialogue ? 'CONVERSATION' : 'STORY TIME'}\n`;
        content += `========================================\n\n`;
        
        content += `TITLE: ${data.title}\n`;
        content += `----------------------------------------\n\n`;
        
        if (isDialogue) {
            data.dialogue.forEach(line => {
                content += `[${line.speaker}]: ${line.english}\n`;
                content += `(Tamil: ${line.tamil})\n\n`;
            });
        } else {
            content += data.english_story.join('\n\n');
        }
        
        content += `\n\n----------------------------------------\n`;
        content += `TAMIL SUMMARY (தமிழ் சுருக்கம்):\n`;
        content += `----------------------------------------\n`;
        content += `${data.tamil_summary}\n\n`;
        
        content += `----------------------------------------\n`;
        content += `KEY VOCABULARY (முக்கிய சொற்கள்):\n`;
        content += `----------------------------------------\n`;
        
        (data.vocabulary || []).forEach(v => {
            content += `• ${v.word} : ${v.tamil}\n`;
        });
        
        content += `\n========================================\n`;
        content += `Generated by Chitti English App\n`;
        
        const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        
        const a = document.createElement('a');
        a.href = url;
        a.download = `Chitti_${isDialogue ? 'Conv' : 'Story'}_${data.title.replace(/\s+/g, '_')}.txt`;
        
        document.body.appendChild(a);
        a.click();
        
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        app.toast('Exported Successfully!', 'success');
    }
};

// --- INITIALIZE ON LOAD ---
document.addEventListener('DOMContentLoaded', () => {
    app.init();
});
