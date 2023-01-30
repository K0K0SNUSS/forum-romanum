{\rtf1\ansi\ansicpg1252\cocoartf2636
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 const textarea = document.getElementById("latin-text");\
const languageSelect = document.getElementById("language");\
const translateButton = document.getElementById("translate-button");\
const resultDiv = document.getElementById("translation-result");\
\
translateButton.addEventListener("click", function() \{\
  const text = textarea.value;\
  const targetLanguage = languageSelect.value;\
\
  // Make API call to OpenAI's GPT-3 to translate the text\
  fetch(`https://api.openai.com/v1/engines/gpt-3/jobs`, \{\
    method: "POST",\
    headers: \{\
      "Content-Type": "application/json",\
      "Authorization": "Bearer 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"\
    \},\
    body: JSON.stringify(\{\
      prompt: `Translate the following text to $\{targetLanguage\}: $\{text\}`,\
      max_tokens: 1024,\
      n: 1,\
      stop: "",\
      temperature: 0.5\
    \})\
  \})\
  .then(res => res.json())\
  .then(res => \{\
    const translation = res.choices[0].text;\
    resultDiv.innerText = translation;\
  \})\
  .catch(error => console.error(error));\
\});\
}