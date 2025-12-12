Project Name

Chitti English — AI English Tutor (Tamil-friendly)

சிட்டி ஆங்கிலம் — தமிழ் வழி AI ஆங்கில ஆசிரியர்

Short Description

Chitti English is a lightweight static web app (HTML/CSS/JS) that helps Tamil speakers learn English.
It provides bilingual explanations (Tamil + English), word deep-dives (Word 360°), sentence correction, roleplay conversation practice, and a smart translator — all powered by an AI backend (OpenAI / Google Gemini). The app ships with a Demo Mode (limited offline data) and supports adding your own API key in Settings.

சிட்டி ஆங்கிலம் ஒரு எளிய ஸ்டாடிக் வெப் பயன்பாடு (HTML/CSS/JS) — தமிழ்ந்் பேசுனர்களுக்கு ஆங்கிலம் கற்றுக்கொள்ள உதவும். இது தமிழ் + ஆங்கில விளக்கங்கள், Word 360° சொல் பகுப்புரை, வாக்கிய திருத்தம், நிலைத்துப் பேசும் Roleplay பயிற்சி, மற்றும் ஸ்மார்ட் மொழிபெயர்ப்பு போன்றவற்றை AI மூலம் வழங்குகிறது. பயன்பாட்டில் Demo Mode (குறைவான உள்ளக டேட்டா) உண்டு; உங்கள் API key-ஐ Settings-ல் சேர்க்கலாம்.

Key Features

Word 360° Explainer: complete meaning, V1/V2/V3/V-ing, pronunciation, many examples, comparisons, collocations.

Grammar Fixer: paste a sentence → get corrected sentence + Tamil explanation.

Roleplay Chat: practice real-life scenarios (coffee shop, interviews, directions) with gentle AI corrections and Tamil translations.

Smart Translator: translates Tamil → English and shows word mapping + grammar notes.

My Vocab: save words locally, export as text file.

Demo Mode: works without API key for a few sample words (run, eat, study, book, necessary).

Local-first: user data (API key, vocab) stored in browser localStorage only.

குறிப்புகள்:

Word 360°: முழு சொல் பகுப்புரை (உதாரணங்கள், ஒலி எழுத்து, வடிவங்கள்).

Grammar Fixer: வாக்கியத்தை திருத்தி தமிழ் விளக்கத்தை தரும்.

Roleplay: வித்தியாசமான நடைமுறை சூழ்நிலைகளில் பயிற்சி செய்யலாம்.

Smart Translator: Tamil → English மற்றும் வார்த்தை வரைபடம் + இலக்கண குறிப்பு.

My Vocab: உள்ளகமாக சேமிப்பு மற்றும் ஏற்றுமதி.

Demo Mode

The app can run in Demo Mode if you do not add an API key. Demo supports only a small set of words and sample flows (see Settings → Demo Supported Words).

To unlock full functionality, add a valid OpenAI or Google Gemini API key in Settings.

Demo Mode:

API key இல்லாமல் பயன்பாடு Demo Mode-ல் இயங்கும் (குறைந்த சொற்கள் மட்டுமே).

பூரண செயல்பாட்டுக்கு Settings-ல் உங்கள் OpenAI / Gemini API key சேர்க்கவும்.

How to Use (Quick)

Open index.html in a browser (or deploy on GitHub Pages for public access).

Use the top navigation to visit: Home, Word 360°, Fix Grammar, Roleplay, Translator, My Vocab.

For Word 360°: type a word → Ask Chitti → read meanings, forms, examples → Save to Vocab.

For Fix Grammar: paste incorrect sentence → Check → get corrected sentence + Tamil explanation.

To enable full AI: open Settings → paste your API key → Save Key.

விரைவான வழி:

index.html-ஐ உலாவியில் திறக்கவும் (அல்லது GitHub Pages-க்கு deploy செய்யவும்).

மேல் navigation-ஐ பயன்படுத்தி தேவையான module-க்கு செல்லவும்.

Word 360°: ஒரு சொற் டைப் செய்து Ask Chitti அழுத்தவும் → விளக்கங்கள் மற்றும் உதாரணங்கள் பார்க்கவும் → Vocab-க்கு சேமிக்கவும்.

Fix Grammar: தவறான வாக்கியம் பेस्ट செய்து Check அழுத்தவும் → சரியான பதிலையும் தமிழ் விளக்கத்தையும் பெறலாம்.

முழு AI செயல்பாட்டுக்காக Settings → உங்கள் API key சேர்க்கவும்.

API Key & Privacy

The app stores the API key only in the browser's localStorage (on the user’s device). No API keys or user data are sent to any third-party server by the app itself (the app calls the AI provider directly from the browser).

NOTE: For security and cost control, deploying a small server-side proxy (serverless function) is recommended for production (to hide the API key and enforce rate limits). The current demo stores keys locally — only suitable for personal testing.

API Key & Privacy (தமிழில்)

API key browser localStorage-இல் மட்டுமே சேமிக்கப்படுகிறது. சேவையகம் மூலம் எந்தவொரு தனிப்பட்ட தரவையும் எங்கு ஊடுருவி பதியவில்லை.

உற்பத்தி நிலைக்கு, API key-ஐ frontend-ல் வைக்காமல் ஒரு server-side proxy பயன்படுத்த பரிந்துரைக்கப்படுகிறது (அதனால் key பாதுகாப்பாக இருக்கும், மற்றும் கட்டுநிலை கட்டுப்பாடு வரம்புகளை செயல் படுத்தலாம்).

Suggested AI Prompts (Examples)

Use these prompt templates in the app backend (the app already sends similar prompts). If you customize server-side, use these patterns:

Word 360° (request JSON):
Act as an English Teacher for Tamil learners. Analyze the word "RUN". Return JSON with word, tamil_meaning, pronunciation, part_of_speech, forms (v1/v2/v3/ving), usage_tamil, examples (10+), comparison, collocations.

Grammar Fixer:
Check this English sentence for a Tamil speaker: "I didn't went there." Return JSON: { is_correct, correction, reason_tamil, alternatives }.

Roleplay:
Act as a barista in a coffee shop. Keep replies short (1–2 sentences). If the user made a grammar mistake, include a gentle correction in Tamil. Return JSON: { reply, reply_tamil, correction }.

Translator:
Translate Tamil sentence to natural English, include word_mapping and grammar_note. Return JSON: { english, word_mapping, grammar_note }.

Prompting tip: ask the model to return strict JSON only (no markdown) for easy parsing in the frontend.
