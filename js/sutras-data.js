// ─────────────────────────────────────────────────────────────
//  SUTRAS DATA
//  To add a new sutra: copy the template below, paste at the
//  end of SUTRAS, fill in the fields, then add its id to the
//  right category in SUTRA_CATEGORIES.
// ─────────────────────────────────────────────────────────────
// {
//   id: 'my-sutra-id',          // unique, no spaces, lowercase
//   title: 'Title in English',
//   sub: 'उपशीर्षक हिंदी में',
//   hindi: `Hindi / Prakrit text here`,
//   hinglish: `Transliteration here`,
//   meaning: 'Short description.'
// },
// ─────────────────────────────────────────────────────────────

const SUTRAS = [

{id:'navkar',type:'sutra',title:'Navkar Mantra',sub:'णमो अरिहंताणं',
hindi:`णमो अरिहंताणं,
णमो सिद्धाणं,
णमो आयरियाणं,
णमो उवज्झायाणं,
णमो लोए सव्व साहूणं ।
एसो पंच-णमोक्कारो,
सव्व-पाव-प्पणासणो ।
मंगलाणं च सव्वेसिं,
पढमं हवई मंगलं ।`,
hinglish:`Namo Arihantanam,
Namo Siddhanam,
Namo Ayariyanam,
Namo Uvajjhayanam,
Namo Loe Savva-Sahunam.
Eso Panch Namokaro,
Savva-Pavappanasano.
Mangalanam Cha Savvesim,
Padhamam Havei Mangalam.`,
meaning:'The most sacred Jain prayer. Salutes five supreme beings. Reciting it destroys all sins and is considered the foremost auspicious mantra.'},

{id:'logassa',type:'sutra',title:'Logassa',sub:'लोगस्स उज्जोअ-गरे',
hindi:`लोगस्स उज्जोअ-गरे, धम्म-तित्थ-यरे जिणे
अरिहंते कित्तइस्सं, चउवीसं पि केवली ॥१॥
उसभ-मजिअं च वंदे, संभव-मभिणंदणं च सुमइं च
पउम-प्पहं सुपासं, जिणं च चंद-प्पहं वंदे ॥२॥
सुविहिं च पुप्फ-दंतं, सीअल-सिज्जंस-वासु-पुज्जं च
विमल-मणंतं च जिणं, धम्मं संतिं च वंदामि ॥३॥
कुंथुं अरं च मल्लिं, वंदे मुणि-सुव्वयं नमि-जिणं च
वंदामि रिट्ठ-नेमिं, पासं तह वद्धमाणं च ॥४॥
एवं मए अभिथुआ, विहुय-रय-मला पहीण-जर-मरणा
चउ-वीसं पि जिणवरा, तित्थ-यरा मे पसीयंतु ॥५॥
कित्तिय-वंदिय-महिया, जे ए लोगस्स उत्तमा सिद्धा
आरुग्ग-बोहि-लाभं, समाहि-वर-मुत्तमं दिंतु ॥६॥
चंदेसु निम्मल-यरा, आइच्चेसु अहियं पयास-यरा
सागर-वर-गंभीरा, सिद्धा सिद्धिं मम दिसंतु ॥७॥`,
hinglish:`Logassa ujjoyagare, dhamma-titthayare jine
Arihante kittaissam, cauviisam pi kevali..1..
Usabha-majiam cha vande, sambhava-mabhinandanam cha sumaim cha
Pauma-ppabham supassam, jinam cha chanda-ppabham vande..2..
Suvihim cha puppha-damtam, siala-sijjamsa-vasu-pujjam cha
Vimala-manantam cha jinam, dhammam santim cha vandami..3..
Kunthum aram cha mallim, vande muni-suvvayam nami-jinam cha
Vandami ritthanemi, pasam taha vaddhamanam cha..4..
Evam mae abhithua, vihuya-raya-mala pahina-jara-marana
Cau-visam pi jinavara, tittha-yara me pasiyantu..5..
Kittiya-vandiya-mahiya, je e logassa uttama siddha
Arugga-bohi-labham, samahi-vara-muttamam dintu..6..
Chandesu nimmala-yara, aiccesu ahiyam payasa-yara
Sagara-vara-gambhira, siddha siddhim mama disantu..7..`,
meaning:'Praises all 24 Tirthankaras by name and the Siddhas. Recited during Samayik and Pratikraman.'},

{id:'chattari',type:'sutra',title:'Chattari Mangalam',sub:'चत्तारि मंगलं',
hindi:`चत्तारि मंगलं, अरिहंता मंगलं,
सिद्धा मंगलं, साहू मंगलं,
केवलि-पण्णत्तो धम्मो मंगलं ।
चत्तारि लोगुत्तमा, अरिहंता लोगुत्तमा,
सिद्धा लोगुत्तमा, साहू लोगुत्तमा,
केवलि-पण्णत्तो धम्मो लोगुत्तमो ।
चत्तारि सरणं पवज्जामि, अरिहंते सरणं पवज्जामि,
सिद्धे सरणं पवज्जामि, साहू सरणं पवज्जामि,
केवलि-पण्णत्तं धम्मं सरणं पवज्जामि ।`,
hinglish:`Chattari Mangalam, Arihanta Mangalam,
Siddha Mangalam, Sahu Mangalam,
Kevali-Pannatto Dhammo Mangalam.
Chattari Loguttama, Arihanta Loguttama,
Siddha Loguttama, Sahu Loguttama,
Kevali-Pannatto Dhammo Loguttamo.
Chattari Saranam Pavajjami, Arihante Saranam Pavajjami,
Siddhe Saranam Pavajjami, Sahu Saranam Pavajjami,
Kevali-Pannattam Dhammam Saranam Pavajjami.`,
meaning:'Declares the four auspicious shelters of Jainism. Chanted as a prayer of refuge and protection.'},

{id:'saagari',type:'sutra',title:'Karemi Bhante (Samayik Vow)',sub:'करेमि भंते सामाइयं',
hindi:`करेमि भंते सामाइयं।
सव्वं सावज्जं जोगं पच्चक्खामि।
जाव नियमं पज्जुवासामि।
दुविहं तिविहेणं।
मणेणं वायाए कायेणं।
न करेमि न कारवेमि।
तस्स भंते पडिक्कमामि।
निंदामि गरिहामि।
अप्पाणं वोसिरामि।`,
hinglish:`Karemi Bhante Samaiyam.
Savvam Savajjam Jogam Paccakkhami.
Jav Niyamam Pajjuvasami.
Duviham Tivihena.
Manena Vayae Kayena.
Na Karemi Na Karavemi.
Tassa Bhante Padikkamami.
Nindami Garihami.
Appanam Vosiramami.`,
meaning:'The Samayik vow — a 48-minute period of equanimity and meditation. The foundational spiritual practice for Jain householders.'},

{id:'iriyavahiyam',type:'sutra',title:'Iriyavahiyam Sutra',sub:'इरियावहियं सूत्र',
hindi:`इरियावहियं पडिक्कमामि।
भंते! इरियावहियाए विराहणाए।
गमणागमणे।
पाणक्कमणे, बीयक्कमणे, हरियक्कमणे।
ओसा-उत्तिंग-पणग-दग-मट्टी-मक्कडा-संताणा संकमणे।
जे मे जीवा विराहिया।
एगिंदिया, दुविंदिया, तेइंदिया, चउरिंदिया, पंचिंदिया।
अभिहया, वत्तिया, लेसिया, संघाइया, संघट्टिया।
परियाविया, किलामिया, उद्दविया।
ठाणाओ ठाणं संकामिया, जीवियाओ ववरोविया।
तस्स मिच्छामि दुक्कडं।`,
hinglish:`Iriyavahiyam padikkamami.
Bhante! Iriyavahiyae virahane.
Gamanagamane.
Panakkamane, Biyakkamane, Hariyakkamane.
Osa-uttinga-panaga-daga-matti-makkada-santana sankamane.
Je me jiva virahiya.
Egindia, duvindiya, teindiya, chaurindiya, panchindiya.
Abhihaya, vattiya, lesiya, sanghaiya, sanghatiya.
Pariyaviya, kilamiya, uddaviya.
Thanao thanam sankamiya, jiviyao vavaroviya.
Tassa michhami dukkadam.`,
meaning:'Recited at the start of Pratikraman, repenting for harm unknowingly done to living beings while walking. Reflects Jainism\'s deep commitment to ahimsa.'},

{id:'tassauttari',type:'sutra',title:'Tassa Uttari Sutra',sub:'तस्स उत्तरी सूत्र',
hindi:`तस्स उत्तरी-करणेणं।
पायच्छित्त-करणेणं।
विसोहि-करणेणं।
विसल्ली-करणेणं।
पावाणं कम्माणं निग्घायणट्ठाएं।
ठामि काउस्सग्गं।`,
hinglish:`Tassa Uttari-Karanennam.
Payacchitta-Karanennam.
Visohi-Karanennam.
Visalli-Karanennam.
Pavanam Kammanam Nigghayanaṭṭhaem.
Ṭhami Causaggam.`,
meaning:'Recited before Kayotsarga — the standing meditation. Declares the purpose: completion, atonement, purification, and removal of karmic thorns.'},

{id:'annath',type:'sutra',title:'Annath Sutra',sub:'अन्नत्थ सूत्र',
hindi:`अन्नत्थ ऊसासनिसासेहिं।
सुहुम-एहिं-अंग-संचालेहिं।
सुहुम-एहिं खेल-संचालेहिं।
सुहुम-एहिं दिट्ठि-संचालेहिं।
एवमादिएहिं आगारेहिं।
अभग्गो अविराहिओ।
हुज्ज मे काउस्सग्गो।`,
hinglish:`Annath ussasanisasehi.
Suhumaehi-Anga-Sancalehi.
Suhumaehi-Khela-Sancalehi.
Suhumaehi-Ditthi-Sancalehi.
Evamadiehi Agarehi.
Abhaggo Avirahio.
Hujja Me Causaggo.`,
meaning:'Recited before Kayotsarga meditation. Specifies which natural bodily functions are permitted during the standing meditation without breaking the vow.'},

{id:'namutthunam',type:'sutra',title:'Namutthunam Sutra',sub:'णमुत्थुणं सूत्र',
hindi:`णमुत्थुणं अरिहंताणं भगवंताणं।
आइगराणं, तित्थगराणं, सयंसंबुद्धाणं।
पुरिसुत्तमाणं, पुरिससीहाणं, पुरिसवरपुंडरीयाणं, पुरिसवर-गंध-हत्थीणं।
लोगुत्तमाणं, लोगनाहाणं, लोगहियाणं, लोगपईवाणं, लोगपज्जोयगराणं।
अभयदयाणं, चक्खुदयाणं, मग्गदयाणं, सरणदयाणं, बोहिदयाणं।
धम्मदयाणं, धम्मदेसयाणं, धम्मनायगाणं, धम्मसारहीणं, धम्मवर-चाउरंत-चक्कवट्टीणं।
जिणाणं जावयाणं, तिण्णाणं तारयाणं, बुद्धाणं बोहयाणं, मुत्ताणं मोयगाणं।
सव्वन्नूणं, सव्वदरिसीणं।
नमो जिणाणं जिअभयाणं।`,
hinglish:`Namutthunnam Arihantanam Bhagavantanam.
Aigaranam, Titthagaranam, Sayamsabuddhanam.
Purisuttamanam, Purisasihanam, Purisavarapundariyanam, Purisavara-gandha-hatthinam.
Loguttamanam, Loganahanam, Logahiyanam, Logapaivam, Logapajjoyagaranam.
Abhayadayanam, Cakkhuadayanam, Maggadayanam, Saranadayanam, Bohidayanam.
Dhammadayanam, Dhammadesa yanam, Dhammanayaganam, Dhammasarahinam, Dhammavaraa-chaurant-cakkavattinam.
Jinanam javayanam, tinnanam tarayanam, buddhanam bohayanam, muttanam moyaganam.
Savvannunam, savvadarisinam.
Namo jinanam jiya-bhayanam.`,
meaning:'A beautiful elaboration of the attributes of the Arihantas. Recited during Pratikraman. Praises the Tirthankaras with their full list of 32 divine qualities.'},

{id:'khamasamano',type:'sutra',title:'Khamemi Savve Jiva',sub:'खामेमि सव्वे जीवा',
hindi:`खामेमि सव्वे जीवा,
सव्वे जीवा खमंतु मे।
मित्ती मे सव्व-भूएसु,
वेरं मज्झ न केणइ।।`,
hinglish:`Khamemi Savve Jiva,
Savve Jiva Khamantu Me.
Mitti Me Savva Bhuesu,
Veram Majjha Na Kenai.`,
meaning:'The universal forgiveness sutra. "I forgive all living beings; may all living beings forgive me. I have friendship with all, enmity with none." Recited at the close of Samayik and during Paryushana.'},

{id:'pratyakhyan',type:'sutra',title:'Pratyakhyan Sutras',sub:'प्रत्याख्यान सूत्र',
hindi:`नवकारसी — नमोकार मंत्र से भोजन तक का त्याग
पोरसी — प्रातःकाल की एक प्रहर की साधना
साड्ढपोरसी — डेढ़ प्रहर की साधना
पुरिमड्ड — चार प्रहर तक अन्न-जल का त्याग
अवड्ढ — आधे दिन का उपवास
एकासना — दिन में एक बार भोजन
बियासना — दिन में दो बार भोजन
तिविहार उपवास — रात्रि में जल के अलावा सब का त्याग
चउविहार उपवास — जल सहित सब का त्याग`,
hinglish:`Navkarsi — Navakar mantra se bhojan tak ka tyaag
Porasi — Pratahkaal ki ek prahar ki sadhana
Saddhporasi — Dedh prahar ki sadhana
Purimadda — Chaar prahar tak anna-jal ka tyaag
Avaddha — Aadhe din ka upavas
Ekasana — Din mein ek baar bhojan
Biyasana — Din mein do baar bhojan
Tivihara Upavas — Raatri mein jal ke alaava sab ka tyaag
Chauvihara Upavas — Jal sahit sab ka tyaag`,
meaning:'Vows of renunciation (Pachchakhan) taken by Jain householders, ranging from skipping one meal to full fasting.'},

{id:'uvasaggaharam',type:'sutra',title:'Uvasaggaharam Stotra',sub:'उवसग्गहरं स्तोत्र',
hindi:`उवसग्गहरं पासं, पासं वंदामि कम्म-घण-मुक्कं ।
विसहर-विस-निन्नासं, मंगल कल्लाण आवासं ।। १।।
विसहर-फुल्लिंग मंतं, कंठे धारेइ जो सया मणुओ ।
तस्स गह रोग मारी, दुट्ठ जरा जंति उवसामं ।।२।।
चिट्ठउ दूरे मंतो, तुज्झ पणामो वि बहु फलो होइ ।
नर तिरिएसु वि जीवा, पावंति न दुक्ख-दोगच्चं ।।३।।
तुह सम्मत्ते लद्धे, चिंतामणि कप्प-पाय वब्भहिए ।
पावंति अविग्घेणं, जीवा अयरामरं ठाणं ।।४।।
इह संथुओ महायस, भत्तिब्भर निब्भरेण हिअएण ।
ता देव! दिज्झ बोहिं, भवे-भवे पास जिणचंद ।।५।।`,
hinglish:`Uvasaggaharam Pasam, Pasam vandami kamma-ghana-mukkam.
Visahara-visa-ninnasam, Mangala-kallana-avasam..1..
Visahara-phullinga-mantam, kanthe dharei jo saya manuo.
Tassa gaha roga mari, duttha-jara janti uvasamam..2..
Chitthau dure manto, tujjha panamo vi bahu-phalo hoi.
Nara tiriesu vi jiva, pavanti na dukkha-dogaccam..3..
Tuha sammatte laddhe, cintamani kappa-paya-vabbhahie.
Pavanti avigghenam, jiva ayaramaram thanam..4..
Iha santhuo mahayasa, bhatti-bbhara-nibbharena hiaenam.
Ta deva! dijjha bohim, bhave-bhave pasa jinacanda..5..`,
meaning:'Composed by Bhadrabahu Swami in praise of Parshvanatha (23rd Tirthankara). Believed to protect from disease, evil and suffering.'},

{id:'bhaktamar',type:'sutra',title:'Bhaktamar Stotra (Selected)',sub:'भक्तामर स्तोत्र',
hindi:`भक्तामर-प्रणत-मौलि-मणि-प्रभाणाम्
उद्द्योतकं दलित-पाप-तमो-वितानम् ।
सम्यक् प्रणम्य जिन-पाद-युगं युगादा-
वालम्बनं भवजले पततां जनानाम् ॥१॥

यः संस्तुतः सकल-वाङ्मय-तत्त्वबोधाद्
उद्भूत-बुद्धि-पटुभिः सुर-लोक-नाथैः ।
स्तोत्रैर्जगत्-त्रितय-चित्त-हरैरुदारैः
स्तोष्ये किलाहमपि तं प्रथमं जिनेन्द्रम् ॥२॥

बुद्ध्या विनापि विबुधार्चित-पाद-पीठ!
स्तोतुं समुद्यत-मतिर्विगत-त्रपोऽहम् ।
बालं विहाय जलसंस्थितमिन्दु-बिम्बम्
अन्यः क इच्छति जनः सहसा ग्रहीतुम् ॥३॥`,
hinglish:`Bhaktamar-pranata-mauli-mani-prabhanam
Uddyotakam dalita-papa-tamo-vitanam.
Samyak pranamya jina-pada-yugam yugada-
Valambanam bhavajale patatam jananam..1..

Yah samstutah sakala-vangmaya-tattvabodha-
Dudbhuta-buddhi-patubhih sura-loka-nataih.
Stotrair-jagat-tritaya-citta-harair-udaraih
Stoshhye kilahama-pi tam prathamam jinendram..2..

Buddhya vinapi vibudha-archita-pada-pitha!
Stotum samudyata-matir-vigata-trapo'ham.
Balam vihaya jalasamsthitam indu-bimbam
Anyah ka icchati janah sahasa grahitum..3..`,
meaning:'One of the most celebrated Sanskrit Jain hymns by Acharya Manatungasuri. 48 verses praising Adinath (Rishabhadev). Believed to have miraculous protective power.'},

{id:'panch',type:'sutra',title:'Panch Parmesthi Sutra',sub:'पंच परमेष्ठी सूत्र',
hindi:`पाँच परमेष्ठी :

१. अरिहंत — जिन्होंने राग, द्वेष, मोह, अहंकार को जीत लिया और केवल ज्ञान पाया
२. सिद्ध — जो सब कर्मों को जलाकर मोक्ष को प्राप्त हो गए, शाश्वत आनंद में
३. आचार्य — साधु-समाज के नेता, जो पाँच महाव्रत और संघ की रक्षा करते हैं
४. उपाध्याय — आगम शास्त्र के शिक्षक, जो ज्ञान का प्रसार करते हैं
५. साधु — सभी निर्ग्रंथ मुनि और साध्वियाँ जो संयम में रहते हैं

णमो अरिहंताणं
णमो सिद्धाणं
णमो आयरियाणं
णमो उवज्झायाणं
णमो लोए सव्व साहूणं`,
hinglish:`Paanch Parmesthi:

1. Arihant — Jinhone raag, dvesh, moh, ahankaar ko jeet liya aur keval gyaan paaya
2. Siddha — Jo sab karmon ko jalakar moksh ko praapt ho gaye, shaashvat aanand mein
3. Acharya — Saadhu-samaaj ke neta, jo paanch mahavrat aur sangh ki raksha karte hain
4. Upadhyaaya — Aagam shaastra ke shikshak, jo gyaan ka prasaar karte hain
5. Saadhu — Sabhi nirgrantha muni aur sadhviyaan jo sanyam mein rahte hain

Namo Arihantanam
Namo Siddhanam
Namo Ayariyanam
Namo Uvajjhayanam
Namo Loe Savva-Sahunam`,
meaning:'The five supreme beings central to Jain worship and the Navkar Mantra. Understanding them deepens the meaning of every Jain prayer.'},

{id:'chintamani-parshvanath',type:'sutra',title:'Chintamani Parshvanath',sub:'चिंतामणि पार्श्वनाथ',
hindi:`चिंतामणि, चिंतामणि, पार्श्व जिन चिंतामणि।
जगदीश, जगदीश, पारस जिन जगदीश।।

तुम हो दाता, तुम हो त्राता, तुम हो सुखकारी।
भव-भव पापों को हरने वाले, तुम जगत-उपकारी।।
चिंतामणि, चिंतामणि…

भक्त तुम्हारे दरस को आए, मन में आस लगाए।
कर जोड़ी विनती करते हैं, संकट दूर भगाए।।
चिंतामणि, चिंतामणि…

नागराज फण छाया में, रक्षक पार्श्व देवा।
भक्त-मन-मंदिर में तुम्हारी, होती नित्य सेवा।।
चिंतामणि, चिंतामणि…

पार्श्व-नाम जो नित्य जपे नर, पाए मन की शांति।
जन्म-जन्म के पाप कटे, हो जाए मोक्ष-प्राप्ति।।
चिंतामणि, चिंतामणि…`,
hinglish:`Chintamani, Chintamani, Parshv jin Chintamani.
Jagdish, Jagdish, Paras jin Jagdish.

Tum ho daata, tum ho traata, tum ho sukhkari.
Bhav-bhav papon ko harne vaale, tum jagat-upkari.
Chintamani, Chintamani…

Bhakt tumhare daras ko aaye, man mein aas lagaaye.
Kar jodi vinti karte hain, sankat door bhaaye.
Chintamani, Chintamani…

Nagaraaj phan chhaaya mein, rakshak Parshv devaa.
Bhakt-man-mandir mein tumhari, hoti nitya sevaa.
Chintamani, Chintamani…

Parshva-naam jo nitya jape nar, paaye man ki shaanti.
Janm-janm ke paap kate, ho jaaye moksh-praapti.
Chintamani, Chintamani…`,
meaning:'A beloved devotional stotra to Parshvanath, the 23rd Tirthankara, who is worshipped as a wish-fulfilling jewel (chintamani). He is depicted with a protective serpent hood and is prayed to for removal of obstacles and suffering.'},

{id:'mahavir-ashtak',type:'sutra',title:'Mahavir Ashtak',sub:'महावीर अष्टक',
hindi:`जय जय वर्धमान वीर, जय जिन महावीर।
जय जय कर्म-विजेता, जय जग के हीर।। १।।

राग-द्वेष-रहित प्रभु, मोह-निशा-उजियार।
तप-तेज-रूप प्रभु, भव-दुःख-निवार।। २।।

बारह वर्ष तपश्चर्या, ध्यान में लगे।
केवल-ज्ञान प्रकाशित, कर्म-पाश भगे।। ३।।

इंद्र-देव भी वंदे, त्रिभुवन के स्वामी।
तीनों लोकों में पूजित, अंतर्यामी।। ४।।

चतुर्विध-संघ स्थापित, धर्म-सेतु धरा।
अहिंसा-सत्य-अपरिग्रह, मोक्ष-पथ उघरा।। ५।।

वीर-वाणी अमृत जैसी, जग-जन ने सुनी।
जन्म-मरण-संसार से, मुक्ति-राह चुनी।। ६।।

पर्युषण पर्व मनाएँ, क्षमा-भाव धारें।
मिच्छामि दुक्कडम् बोल, पाप निवारें।। ७।।

ऐसे वीर प्रभु चरणों में, नमन बारंबार।
भव-भव में शरण दो, करो भव-पार।। ८।।`,
hinglish:`Jai jai Vardhamaan Veer, jai jin Mahaveer.
Jai jai karma-vijetaa, jai jag ke heer..1..

Raag-dvesh-rahit prabhu, moh-nisha-ujiyaar.
Tap-tej-roop prabhu, bhav-dukkh-nivaar..2..

Baarah varsh tapashcharyaa, dhyaan mein lage.
Keval-gyaan prakaashit, karma-paash bhage..3..

Indra-dev bhi vande, tribhuvan ke swaami.
Teenon lokon mein poojit, antaryaami..4..

Chaturvidha-sangh sthaapit, dharm-setu dharaa.
Ahimsaa-satya-aparigraha, moksh-path ugharaa..5..

Veer-vaani amrit jaisi, jag-jan ne suni.
Janm-maran-sansaar se, mukti-raah chuni..6..

Paryushan parv manaayein, kshama-bhaav dhaarein.
Micchaami Dukkadam bol, paap nivaarein..7..

Aise veer prabhu charanon mein, naman baar-baar.
Bhav-bhav mein sharan do, karo bhav-paar..8..`,
meaning:'An eight-verse (ashtak) devotional hymn praising Bhagwan Mahavir, the 24th and last Tirthankara. Celebrates his supreme austerity (12 years of meditation), Kevalgyan (omniscience), and his teachings of ahimsa, satya, and aparigraha.'},

{id:'ghantakarna',type:'sutra',title:'Om Ghantakarna Mahavir',sub:'ॐ घण्टाकर्ण महावीर',
hindi:`ॐ जय जय घण्टाकर्ण, महावीर देव।
कर्ण-घण्ट-सुशोभित, सुर-गण करे सेव।। टेक।।

महुडी नगरी में विराजमान, शक्ति-स्वरूप।
भक्त-जन-रक्षक देव, दिव्य अनूप।।
ॐ जय जय…

मन-वांछित फल देते, संकट हरते।
अमोघ वरदान देते, पाप निवारते।।
ॐ जय जय…

जैन-धर्म के रक्षक, यक्षराज महान।
शरण तुम्हारी आए, पाएँ कल्याण।।
ॐ जय जय…

ध्यान धरे जो तेरा, निर्भय हो जाए।
घण्टाकर्ण की कृपा से, सब कार्य बन जाए।।
ॐ जय जय…`,
hinglish:`Om jai jai Ghantakarna, Mahaveer dev.
Karn-ghant-sushobhit, sur-gan kare sev. (Tek)

Mahudi nagri mein viraajmaan, shakti-swaroop.
Bhakt-jan-rakshak dev, divya anoop.
Om jai jai…

Man-vaanchit phal dete, sankat harte.
Amogh varadaan dete, paap nivaarte.
Om jai jai…

Jain-dharm ke rakshak, yakshraaj mahaan.
Sharan tumhari aaye, paayen kalyaan.
Om jai jai…

Dhyaan dhare jo tera, nirbhay ho jaaye.
Ghantakarna ki kripa se, sab kaarya ban jaaye.
Om jai jai…`,
meaning:'Ghantakarna Mahavir is a revered yaksha (divine protector) of the Jain tradition, primarily worshipped at the famous Mahudi temple in Gujarat. Devotees pray to him for protection, removal of obstacles, and fulfilment of wishes.'},

{id:'panchindiya',type:'sutra',title:'Panchindiya Sutra',sub:'पंचिंदिय सूत्र',
hindi:`पंचिंदिय-संवरणो,
तह नवविह-बंभचेर-गुत्तिधरो ।
चउविह-कसाय-मुक्को,
इअ अट्ठारस-गुणेहिं संजुत्तो ॥१॥
पंच-महव्वय-जुत्तो,
पंचविहायार-पालण-समत्थो ।
पंच-समिओ ति-गुत्तो,
छत्तीस-गुणो गुरू मज्झ ॥२॥`,
hinglish:`Panchindiya-samvarano,
Taha navaviha-bambhachera-guttidharo.
Chauviha-kasaya-mukko,
Ia attharasa-gunehim sanjutto..1..
Pancha-mahavvaya-jutto,
Panchavihayara-palana-samattho.
Pancha-samio ti-gutto,
Chhattisa-guno guru majjha..2..`,
meaning:'Describes the 36 qualities of a true Guru. Recited at the start of Samayik and Pratikraman to establish the Guru\'s presence (sthapana) when a living guru is not physically present.'},

{id:'icchami-khamasamano',type:'sutra',title:'Khamasamana Sutra',sub:'इच्छामि खमासमणो',
hindi:`इच्छामि खमासमणो!
वंदिउं जावणिज्जाए निसीहियाए ।
मत्थएण वंदामि ॥`,
hinglish:`Icchami Khamasamano!
Vandium javanijjae nisihiae.
Matthaena vandami.`,
meaning:'The Panchanga Pranipata — the five-limbed bow (two hands, two knees, forehead touching the ground). Recited each time one bows to the Guru or to the Jina during Samayik, Pratikraman, and temple rituals.'},

{id:'tikhutto',type:'sutra',title:'Tikhutto Sutra',sub:'तिक्खुत्तो सूत्र',
hindi:`तिक्खुत्तो आयाहिणं पयाहिणं करेमि,
वंदामि नमंसामि,
सक्कारेमि सम्माणेमि,
कल्लाणं मंगलं देवयं चेइयं,
पज्जुवासामि मत्थएण वंदामि ॥`,
hinglish:`Tikkhutto ayahinam payahinam karemi,
Vandami namamsami,
Sakkaremi sammanemi,
Kallanam mangalam devayam cheiyam,
Pajjuvasami matthaena vandami.`,
meaning:'Recited while circumambulating (going around) the Guru or Jina three times. "Three times I circle you keeping you on my right; I bow, I venerate, I honour, I respect you — auspicious, benevolent, divine, the embodiment of knowledge — I serve you and bow my head."'},

{id:'jankinchi',type:'sutra',title:'Jankinchi Sutra',sub:'जं किंचि सूत्र',
hindi:`जं किंचि नाम तित्थं,
सग्गे पायालि माणुसे लोए ।
जाइं जिणबिंबाइं,
ताइं सव्वाइं वंदामि ॥`,
hinglish:`Jam kinchi nama tittham,
Sagge payali manuse loe.
Jaim jinabimbaim,
Taim savvaim vandami.`,
meaning:'A short tirtha-vandana: "Whatever holy places there are in heaven, the netherworld, or the human world, and whatever images of the Jinas they hold — I bow to them all." Part of Chaityavandan.'},

{id:'javanti-cheiaim',type:'sutra',title:'Javanti Cheiaim Sutra',sub:'जावंति चेइआइं',
hindi:`जावंति चेइआइं,
उड्ढे अ अहे अ तिरिअलोए अ ।
सव्वाइं ताइं वंदे,
इह संतो तत्थ संताइं ॥`,
hinglish:`Javanti cheiaim,
Uddhe a ahe a tiria-loe a.
Savvaim taim vande,
Iha santo tattha santaim.`,
meaning:'"To all the temples of the Jinas in the upper world, the lower world and the middle world — standing here, I bow to all of them there." Recited during Chaityavandan.'},

{id:'javant-kevi-sahu',type:'sutra',title:'Javant Kevi Sahu Sutra',sub:'जावंत केवि साहू',
hindi:`जावंत केवि साहू,
भरहेरवय-महाविदेहे अ ।
सव्वेसिं तेसिं पणओ,
तिविहेण तिदंड-विरयाणं ॥`,
hinglish:`Javant kevi sahu,
Bharaheravaya-Mahavidehe a.
Savvesim tesim panao,
Tivihena tidanda-virayanam.`,
meaning:'"To all the sadhus in Bharat, Airavat and Mahavideh kshetras, who have renounced the three-fold wrong activities of mind, speech and body — I bow to them all." Recited during Chaityavandan.'},

{id:'siddhanam-buddhanam',type:'sutra',title:'Siddhanam Buddhanam (Siddha Stava)',sub:'सिद्धाणं बुद्धाणं',
hindi:`सिद्धाणं बुद्धाणं, पार-गयाणं परंपर-गयाणं ।
लोअग्ग-मुवगयाणं, नमो सया सव्व-सिद्धाणं ॥१॥
जो देवाण वि देवो, जं देवा पंजली नमंसंति ।
तं देव-देव-महिअं, सिरसा वंदे महावीरं ॥२॥
इक्को वि नमुक्कारो, जिणवर-वसहस्स वद्धमाणस्स ।
संसार-सागराओ, तारेइ नरं व नारिं वा ॥३॥`,
hinglish:`Siddhanam buddhanam, para-gayanam parampara-gayanam.
Loagga-muvagayanam, namo saya savva-siddhanam..1..
Jo devana vi devo, jam deva panjali namamsanti.
Tam deva-deva-mahiam, sirasa vande Mahaviram..2..
Ikko vi namukkaro, jinavara-vasahassa Vaddhamanassa.
Sansara-sagarao, tarei naram va narim va..3..`,
meaning:'The Siddha Stava — praise of the liberated souls. Declares that even a single namaskar to Bhagwan Mahavir can carry a man or woman across the ocean of sansara. Recited near the end of Pratikraman and Chaityavandan.'},

{id:'sansara-davanala',type:'sutra',title:'Sansara Davanala Stuti (Selected)',sub:'संसार-दावानल स्तुति',
hindi:`संसार-दावानल-दाह-नीरं,
संमोह-धूली-हरणे समीरं ।
माया-रसा-दारण-सार-सीरं,
नमामि वीरं गिरि-सार-धीरं ॥१॥`,
hinglish:`Sansara-davanala-daha-niram,
Sammoha-dhuli-harane samiram.
Maya-rasa-darana-sara-siram,
Namami Viram giri-sara-dhiram..1..`,
meaning:'Composed by Acharya Haribhadrasuri. "I bow to Vir — water to the forest-fire of sansara, wind that blows away the dust of delusion, the plough that tears apart the soil of maya, steadfast as the great mountain." Recited during Pratikraman. (First verse of four shown.)'},

{id:'pukkharavardivaddhe',type:'sutra',title:'Pukkharavardivaddhe (Shruta Stava — Selected)',sub:'पुक्खरवर-दीवड्ढे',
hindi:`पुक्खरवर-दीवड्ढे,
धायइसंडे अ जंबुदीवे अ ।
भरहेरवय-विदेहे,
धम्माइगरे नमंसामि ॥१॥`,
hinglish:`Pukkharavara-divaddhe,
Dhayaisande a Jambudive a.
Bharaheravaya-videhe,
Dhammaigare namamsami..1..`,
meaning:'The Shruta Stava — veneration of the scriptures and of the founders of dharma in all the continents (Pushkaravara, Dhatakikhanda, Jambudvipa). Recited during Pratikraman. (First verse shown.)'},

{id:'vandittu',type:'sutra',title:'Vandittu Sutra (Selected)',sub:'वंदित्तु सूत्र',
hindi:`वंदित्तु सव्व-सिद्धे,
धम्मायरिए अ सव्व-साहू अ ।
इच्छामि पडिक्कमिउं,
सावग-धम्माइयारस्स ॥१॥

जो मे वयाइयारो,
नाणे तह दंसणे चरित्ते अ ।
सुहुमो व बायरो वा,
तं निंदे तं च गरिहामि ॥२॥

खामेमि सव्व जीवे,
सव्वे जीवा खमंतु मे ।
मित्ती मे सव्व-भूएसु,
वेरं मज्झ न केणइ ॥`,
hinglish:`Vandittu savva-siddhe,
Dhammayarie a savva-sahu a.
Icchami padikkamium,
Savaga-dhammaiyarassa..1..

Jo me vayaiyaro,
Nane taha damsane charitte a.
Suhumo va bayaro va,
Tam ninde tam cha garihami..2..

Khamemi savva jive,
Savve jiva khamantu me.
Mitti me savva-bhuesu,
Veram majjha na kenai..`,
meaning:'The heart of Pratikraman — the shravak\'s confession of transgressions against the twelve vows, knowledge, faith and conduct. The full sutra has 50 verses; the opening verses and the famous universal-forgiveness verse are shown here.'},

{id:'jagchintamani',type:'sutra',title:'Jagchintamani Chaityavandan (Selected)',sub:'जग-चिंतामणि चैत्यवंदन',
hindi:`जग-चिंतामणि! जग-नाह!
जग-गुरु! जग-रक्खण!
जग-बंधव! जग-सत्थवाह!
जग-भाव-विअक्खण!
अट्ठावय-संठविअ-रूव!
कम्मट्ठ-विणासण!
चउवीसं पि जिणवरा!
जयंतु अप्पडिहय-सासण! ॥१॥`,
hinglish:`Jag-chintamani! Jag-naha!
Jag-guru! Jag-rakkhana!
Jag-bandhava! Jag-satthavaha!
Jag-bhava-viakkhana!
Atthavaya-santhavia-ruva!
Kammattha-vinasana!
Chauvisam pi jinavara!
Jayantu appadihaya-sasana!..1..`,
meaning:'The morning Chaityavandan composed, by tradition, by Ganadhar Gautam Swami. Hails the Jinas as the wish-fulfilling jewel of the universe, its lord, guru, protector, kinsman and guide. (Opening verse shown.)'},

{id:'kalpasutra',type:'sutra',title:'Kalpa Sutra (Overview)',sub:'कल्पसूत्र — परिचय',
hindi:`कल्पसूत्र जैन धर्म का अत्यंत पवित्र आगम ग्रंथ है,
जिसकी रचना आचार्य भद्रबाहु स्वामी ने की थी।

इसमें तीन मुख्य भाग हैं:

१. जिन-चरित्र — भगवान महावीर का जीवन,
उनके च्यवन, जन्म, दीक्षा, केवलज्ञान और निर्वाण का वर्णन।
साथ में पार्श्वनाथ, नेमिनाथ और ऋषभदेव का चरित्र।

२. स्थविरावली — गणधरों और आचार्यों की परंपरा।

३. साधु-समाचारी — पर्युषण में साधुओं के नियम।

पर्युषण महापर्व के आठ दिनों में इसका वाचन होता है।
महावीर जन्म वाचन के दिन विशेष उत्सव मनाया जाता है।`,
hinglish:`The Kalpa Sutra is one of the most sacred Jain scriptures,
composed by Acharya Bhadrabahu Swami.

It has three main sections:

1. Jin-Charitra — the life of Bhagwan Mahavir:
his conception, birth, diksha, kevalgyan and nirvana,
along with the lives of Parshvanath, Neminath and Rishabhdev.

2. Sthaviravali — the lineage of Ganadhars and Acharyas.

3. Sadhu-Samachari — the rules of conduct for monks during Paryushan.

It is recited over the eight days of Paryushan Mahaparva.
The day of the Mahavir Janma Vachan is celebrated with special festivity.`,
meaning:'An overview of the Kalpa Sutra — the full text is a complete scripture read aloud during Paryushan. This entry summarizes its structure and significance.'},

]; // end SUTRAS


// ─────────────────────────────────────────────────────────────
//  SUTRA CATEGORIES
//  Each category lists sutra ids in the order they are recited.
//  A sutra can appear in more than one category.
//  To add a new category: copy a block below and fill it in.
// ─────────────────────────────────────────────────────────────
const SUTRA_CATEGORIES = [
  {
    id: 'samayik',
    title: 'Samayik Path',
    sub: 'सामायिक पाठ',
    desc: 'Sutras in the order recited when taking and completing the 48-minute Samayik vow.',
    sutras: ['navkar','panchindiya','icchami-khamasamano','iriyavahiyam','tassauttari','annath','logassa','saagari','khamasamano']
  },
  {
    id: 'pratikraman',
    title: 'Pratikraman Path',
    sub: 'प्रतिक्रमण पाठ',
    desc: 'Sutras of the Pratikraman ritual of repentance, in the traditional order of recitation.',
    sutras: ['navkar','panchindiya','icchami-khamasamano','iriyavahiyam','tassauttari','annath','logassa','saagari','chattari','namutthunam','vandittu','jagchintamani','jankinchi','javanti-cheiaim','javant-kevi-sahu','uvasaggaharam','pukkharavardivaddhe','siddhanam-buddhanam','sansara-davanala','khamasamano','pratyakhyan']
  },
  {
    id: 'chaityavandan',
    title: 'Chaityavandan',
    sub: 'चैत्यवंदन',
    desc: 'Sutras of the temple-veneration ritual performed before the Jina image.',
    sutras: ['navkar','icchami-khamasamano','tikhutto','jagchintamani','jankinchi','namutthunam','javanti-cheiaim','javant-kevi-sahu','uvasaggaharam','siddhanam-buddhanam']
  },
  {
    id: 'uvasaggaharam',
    title: 'Uvasaggaharam',
    sub: 'उवसग्गहरं स्तोत्र',
    desc: 'Protective stotra to Parshvanath composed by Bhadrabahu Swami.',
    sutras: ['uvasaggaharam']
  },
  {
    id: 'ghantakarna',
    title: 'Om Ghantakarna Mahavir',
    sub: 'ॐ घण्टाकर्ण महावीर',
    desc: 'Prayer to Ghantakarna Mahavir, the protective yaksha deity of the Jain tradition.',
    sutras: ['ghantakarna']
  },
  {
    id: 'chintamani',
    title: 'Chintamani Parshvanath',
    sub: 'चिंतामणि पार्श्वनाथ',
    desc: 'Devotional stotra to the 23rd Tirthankara, worshipped as a wish-fulfilling jewel.',
    sutras: ['chintamani-parshvanath']
  },
  {
    id: 'mahavir-ashtak',
    title: 'Mahavir Ashtak',
    sub: 'महावीर अष्टक',
    desc: 'Eight-verse hymn praising Bhagwan Mahavir, the 24th Tirthankara.',
    sutras: ['mahavir-ashtak']
  },
  {
    id: 'pratyakhyan',
    title: 'Pratyakhyan (Pachikhan)',
    sub: 'प्रत्याख्यान सूत्र',
    desc: 'Vows of renunciation taken by Jain householders for fasting and self-restraint.',
    sutras: ['pratyakhyan','panch']
  },
  {
    id: 'kalpasutra',
    title: 'Kalpa Sutra',
    sub: 'कल्पसूत्र',
    desc: 'The sacred scripture by Acharya Bhadrabahu, read during the eight days of Paryushan.',
    sutras: ['kalpasutra']
  },
  {
    id: 'bhaktamar',
    title: 'Bhaktamar Stotra',
    sub: 'भक्तामर स्तोत्र',
    desc: 'Celebrated 48-verse Sanskrit hymn by Acharya Manatungasuri praising Adinath.',
    sutras: ['bhaktamar']
  },
]; // end SUTRA_CATEGORIES
