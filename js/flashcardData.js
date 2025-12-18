// Flashcard Data for Italian Patente B App
// Contains traffic signs, vocabulary, and rules

const FlashcardData = {
    // Traffic Signs Deck
    trafficSigns: [
        // Warning Signs (Segnali di Pericolo) - Triangle
        { id: 1, category: 'warning', italian: 'Curva pericolosa', english: 'Dangerous curve', symbol: '⚠️↩️', pronunciation: 'KOOR-va pe-ri-ko-LO-za' },
        { id: 2, category: 'warning', italian: 'Doppia curva', english: 'Double curve (S-curve)', symbol: '⚠️〰️', pronunciation: 'DOP-pya KOOR-va' },
        { id: 3, category: 'warning', italian: 'Incrocio', english: 'Intersection/Crossroads', symbol: '⚠️✚', pronunciation: 'in-KRO-cho' },
        { id: 4, category: 'warning', italian: 'Passaggio a livello', english: 'Railway crossing', symbol: '⚠️🚂', pronunciation: 'pas-SAJ-jo a li-VEL-lo' },
        { id: 5, category: 'warning', italian: 'Attraversamento pedonale', english: 'Pedestrian crossing', symbol: '⚠️🚶', pronunciation: 'at-tra-ver-sa-MEN-to pe-do-NA-le' },
        { id: 6, category: 'warning', italian: 'Bambini', english: 'Children (school zone)', symbol: '⚠️👫', pronunciation: 'bam-BI-ni' },
        { id: 7, category: 'warning', italian: 'Animali selvatici', english: 'Wild animals', symbol: '⚠️🦌', pronunciation: 'a-ni-MA-li sel-VA-ti-chi' },
        { id: 8, category: 'warning', italian: 'Strada sdrucciolevole', english: 'Slippery road', symbol: '⚠️💦', pronunciation: 'STRA-da zdroo-cho-LE-vo-le' },
        { id: 9, category: 'warning', italian: 'Caduta massi', english: 'Falling rocks', symbol: '⚠️🪨', pronunciation: 'ka-DU-ta MAS-si' },
        { id: 10, category: 'warning', italian: 'Lavori in corso', english: 'Road work ahead', symbol: '⚠️🚧', pronunciation: 'la-VO-ri in KOR-so' },
        { id: 11, category: 'warning', italian: 'Semaforo', english: 'Traffic light ahead', symbol: '⚠️🚦', pronunciation: 'se-MA-fo-ro' },
        { id: 12, category: 'warning', italian: 'Discesa pericolosa', english: 'Steep descent', symbol: '⚠️⬇️', pronunciation: 'di-SHE-za pe-ri-ko-LO-za' },
        { id: 13, category: 'warning', italian: 'Salita ripida', english: 'Steep climb', symbol: '⚠️⬆️', pronunciation: 'sa-LI-ta RI-pi-da' },
        { id: 14, category: 'warning', italian: 'Strettoia', english: 'Road narrows', symbol: '⚠️><', pronunciation: 'stret-TO-ya' },
        { id: 15, category: 'warning', italian: 'Pericolo generico', english: 'General danger', symbol: '⚠️❗', pronunciation: 'pe-RI-ko-lo je-NE-ri-ko' },
        
        // Prohibition Signs (Segnali di Divieto) - Round Red Border
        { id: 16, category: 'prohibition', italian: 'Divieto di accesso', english: 'No entry', symbol: '⛔', pronunciation: 'di-VYE-to di ak-CHES-so' },
        { id: 17, category: 'prohibition', italian: 'Divieto di transito', english: 'No vehicles', symbol: '🚫🚗', pronunciation: 'di-VYE-to di TRAN-zi-to' },
        { id: 18, category: 'prohibition', italian: 'Senso vietato', english: 'No entry (one way)', symbol: '⛔➡️', pronunciation: 'SEN-so vye-TA-to' },
        { id: 19, category: 'prohibition', italian: 'Divieto di sorpasso', english: 'No overtaking', symbol: '🚫🚗🚗', pronunciation: 'di-VYE-to di sor-PAS-so' },
        { id: 20, category: 'prohibition', italian: 'Divieto di sosta', english: 'No parking', symbol: '🚫🅿️', pronunciation: 'di-VYE-to di SO-sta' },
        { id: 21, category: 'prohibition', italian: 'Divieto di fermata', english: 'No stopping', symbol: '🚫🛑', pronunciation: 'di-VYE-to di fer-MA-ta' },
        { id: 22, category: 'prohibition', italian: 'Limite di velocità', english: 'Speed limit', symbol: '🔴50', pronunciation: 'LI-mi-te di ve-lo-chi-TA' },
        { id: 23, category: 'prohibition', italian: 'Divieto di svolta', english: 'No turn', symbol: '🚫↩️', pronunciation: 'di-VYE-to di SVOL-ta' },
        { id: 24, category: 'prohibition', italian: 'Divieto di inversione', english: 'No U-turn', symbol: '🚫🔄', pronunciation: 'di-VYE-to di in-ver-SYO-ne' },
        { id: 25, category: 'prohibition', italian: 'Divieto di clacson', english: 'No horn/honking', symbol: '🚫📢', pronunciation: 'di-VYE-to di KLAK-son' },
        
        // Mandatory Signs (Segnali di Obbligo) - Round Blue
        { id: 26, category: 'mandatory', italian: 'Direzione obbligatoria', english: 'Mandatory direction', symbol: '🔵➡️', pronunciation: 'di-re-TSYO-ne ob-bli-ga-TO-rya' },
        { id: 27, category: 'mandatory', italian: 'Rotatoria', english: 'Roundabout', symbol: '🔵🔄', pronunciation: 'ro-ta-TO-rya' },
        { id: 28, category: 'mandatory', italian: 'Percorso pedonale', english: 'Pedestrian path', symbol: '🔵🚶', pronunciation: 'per-KOR-so pe-do-NA-le' },
        { id: 29, category: 'mandatory', italian: 'Pista ciclabile', english: 'Bicycle path', symbol: '🔵🚴', pronunciation: 'PI-sta chi-KLA-bi-le' },
        { id: 30, category: 'mandatory', italian: 'Velocità minima', english: 'Minimum speed', symbol: '🔵30', pronunciation: 've-lo-chi-TA MI-ni-ma' },
        { id: 31, category: 'mandatory', italian: 'Catene obbligatorie', english: 'Snow chains required', symbol: '🔵⛓️', pronunciation: 'ka-TE-ne ob-bli-ga-TO-rye' },
        
        // Priority Signs
        { id: 32, category: 'priority', italian: 'STOP', english: 'Stop completely', symbol: '🛑', pronunciation: 'stop' },
        { id: 33, category: 'priority', italian: 'Dare precedenza', english: 'Give way/Yield', symbol: '🔻', pronunciation: 'DA-re pre-che-DEN-tsa' },
        { id: 34, category: 'priority', italian: 'Strada con precedenza', english: 'Priority road', symbol: '◆', pronunciation: 'STRA-da kon pre-che-DEN-tsa' },
        { id: 35, category: 'priority', italian: 'Fine precedenza', english: 'End of priority road', symbol: '◇', pronunciation: 'FI-ne pre-che-DEN-tsa' },
        { id: 36, category: 'priority', italian: 'Precedenza ai veicoli', english: 'Priority to oncoming', symbol: '🔴🔵', pronunciation: 'pre-che-DEN-tsa ai ve-I-ko-li' },
        
        // Information Signs (Blue Rectangles)
        { id: 37, category: 'information', italian: 'Parcheggio', english: 'Parking', symbol: '🅿️', pronunciation: 'par-KEJ-jo' },
        { id: 38, category: 'information', italian: 'Ospedale', english: 'Hospital', symbol: '🏥', pronunciation: 'o-spe-DA-le' },
        { id: 39, category: 'information', italian: 'Stazione di servizio', english: 'Gas/Service station', symbol: '⛽', pronunciation: 'sta-TSYO-ne di ser-VI-tsyo' },
        { id: 40, category: 'information', italian: 'Autostrada', english: 'Highway/Motorway', symbol: '🛣️', pronunciation: 'au-to-STRA-da' }
    ],
    
    // Vocabulary Deck
    vocabulary: [
        // Road Types
        { id: 1, category: 'roads', italian: 'Autostrada', english: 'Motorway/Highway', pronunciation: 'au-to-STRA-da', example: 'Speed limit: 130 km/h' },
        { id: 2, category: 'roads', italian: 'Strada statale', english: 'State road', pronunciation: 'STRA-da sta-TA-le', example: 'Main roads connecting cities' },
        { id: 3, category: 'roads', italian: 'Centro abitato', english: 'Urban/Built-up area', pronunciation: 'CHEN-tro a-bi-TA-to', example: 'Speed limit: 50 km/h' },
        { id: 4, category: 'roads', italian: 'Strada extraurbana', english: 'Road outside city', pronunciation: 'STRA-da ek-stra-ur-BA-na', example: 'Speed limit: 90 km/h' },
        { id: 5, category: 'roads', italian: 'Corsia', english: 'Lane', pronunciation: 'kor-SI-a', example: 'Corsia di destra = right lane' },
        { id: 6, category: 'roads', italian: 'Incrocio', english: 'Intersection', pronunciation: 'in-KRO-cho', example: 'Where roads meet' },
        { id: 7, category: 'roads', italian: 'Rotatoria', english: 'Roundabout', pronunciation: 'ro-ta-TO-rya', example: 'Drive counter-clockwise' },
        { id: 8, category: 'roads', italian: 'Marciapiede', english: 'Sidewalk', pronunciation: 'mar-cha-PYE-de', example: 'For pedestrians only' },
        
        // Vehicle Parts
        { id: 9, category: 'vehicle', italian: 'Volante', english: 'Steering wheel', pronunciation: 'vo-LAN-te', example: 'Keep both hands on it' },
        { id: 10, category: 'vehicle', italian: 'Freno', english: 'Brake', pronunciation: 'FRE-no', example: 'Freno a mano = handbrake' },
        { id: 11, category: 'vehicle', italian: 'Acceleratore', english: 'Gas pedal', pronunciation: 'ak-che-le-ra-TO-re', example: 'Right pedal' },
        { id: 12, category: 'vehicle', italian: 'Frizione', english: 'Clutch', pronunciation: 'fri-TSYO-ne', example: 'Left pedal in manual cars' },
        { id: 13, category: 'vehicle', italian: 'Cambio', english: 'Gearbox/Transmission', pronunciation: 'KAM-byo', example: 'Cambio automatico = automatic' },
        { id: 14, category: 'vehicle', italian: 'Specchietto', english: 'Mirror', pronunciation: 'spek-KYET-to', example: 'Check before turning' },
        { id: 15, category: 'vehicle', italian: 'Fari', english: 'Headlights', pronunciation: 'FA-ri', example: 'Luci anabbaglianti = low beams' },
        { id: 16, category: 'vehicle', italian: 'Freccia', english: 'Turn signal/Indicator', pronunciation: 'FRECH-cha', example: 'Mettere la freccia = to signal' },
        { id: 17, category: 'vehicle', italian: 'Tergicristallo', english: 'Windshield wiper', pronunciation: 'ter-ji-kri-STAL-lo', example: 'For rain and snow' },
        { id: 18, category: 'vehicle', italian: 'Pneumatico', english: 'Tire', pronunciation: 'pneu-MA-ti-ko', example: 'Check pressure regularly' },
        
        // Actions
        { id: 19, category: 'actions', italian: 'Accelerare', english: 'To accelerate', pronunciation: 'ak-che-le-RA-re', example: 'Increase speed' },
        { id: 20, category: 'actions', italian: 'Frenare', english: 'To brake', pronunciation: 'fre-NA-re', example: 'Slow down or stop' },
        { id: 21, category: 'actions', italian: 'Sorpassare', english: 'To overtake', pronunciation: 'sor-pas-SA-re', example: 'Pass another vehicle' },
        { id: 22, category: 'actions', italian: 'Parcheggiare', english: 'To park', pronunciation: 'par-kej-JA-re', example: 'Leave the car' },
        { id: 23, category: 'actions', italian: 'Fermarsi', english: 'To stop', pronunciation: 'fer-MAR-si', example: 'Come to a halt' },
        { id: 24, category: 'actions', italian: 'Svoltare', english: 'To turn', pronunciation: 'svol-TA-re', example: 'Svoltare a destra = turn right' },
        { id: 25, category: 'actions', italian: 'Rallentare', english: 'To slow down', pronunciation: 'ral-len-TA-re', example: 'Reduce speed' },
        { id: 26, category: 'actions', italian: 'Invertire', english: 'To reverse/U-turn', pronunciation: 'in-ver-TI-re', example: 'Change direction' },
        
        // Documents
        { id: 27, category: 'documents', italian: 'Patente', english: 'Driving license', pronunciation: 'pa-TEN-te', example: 'Always carry it' },
        { id: 28, category: 'documents', italian: 'Libretto', english: 'Registration document', pronunciation: 'li-BRET-to', example: 'Keep in car' },
        { id: 29, category: 'documents', italian: 'Assicurazione', english: 'Insurance', pronunciation: 'as-si-ku-ra-TSYO-ne', example: 'RCA = liability insurance' },
        { id: 30, category: 'documents', italian: 'Revisione', english: 'MOT/Inspection', pronunciation: 're-vi-ZYO-ne', example: 'Every 2 years' },
        { id: 31, category: 'documents', italian: 'Bollo', english: 'Road tax', pronunciation: 'BOL-lo', example: 'Annual payment' },
        { id: 32, category: 'documents', italian: 'Multa', english: 'Fine/Ticket', pronunciation: 'MUL-ta', example: 'Prendere una multa = get a ticket' },
        
        // Safety
        { id: 33, category: 'safety', italian: 'Cintura di sicurezza', english: 'Seat belt', pronunciation: 'chin-TU-ra di si-ku-RET-tsa', example: 'Always wear it' },
        { id: 34, category: 'safety', italian: 'Airbag', english: 'Airbag', pronunciation: 'AIR-bag', example: 'Safety cushion' },
        { id: 35, category: 'safety', italian: 'Seggiolino', english: 'Child seat', pronunciation: 'sej-jo-LI-no', example: 'For children under 150cm' },
        { id: 36, category: 'safety', italian: 'Triangolo', english: 'Warning triangle', pronunciation: 'tri-AN-go-lo', example: 'Place 100m behind car' },
        { id: 37, category: 'safety', italian: 'Giubbotto', english: 'Reflective vest', pronunciation: 'jub-BOT-to', example: 'Wear outside car' },
        { id: 38, category: 'safety', italian: 'Estintore', english: 'Fire extinguisher', pronunciation: 'e-stin-TO-re', example: 'For emergencies' },
        
        // Common Phrases
        { id: 39, category: 'phrases', italian: 'Dare precedenza', english: 'Give way/Yield', pronunciation: 'DA-re pre-che-DEN-tsa', example: 'Let other vehicles go first' },
        { id: 40, category: 'phrases', italian: 'Tenere la destra', english: 'Keep right', pronunciation: 'te-NE-re la DE-stra', example: 'Drive in right lane' },
        { id: 41, category: 'phrases', italian: 'Limite di velocità', english: 'Speed limit', pronunciation: 'LI-mi-te di ve-lo-chi-TA', example: 'Maximum allowed speed' },
        { id: 42, category: 'phrases', italian: 'Distanza di sicurezza', english: 'Safe following distance', pronunciation: 'di-STAN-tsa di si-ku-RET-tsa', example: '2-second rule' },
        { id: 43, category: 'phrases', italian: 'Zona a traffico limitato', english: 'Limited traffic zone', pronunciation: 'DZO-na a TRAF-fi-ko li-mi-TA-to', example: 'ZTL - need permit' },
        { id: 44, category: 'phrases', italian: 'Senso unico', english: 'One way', pronunciation: 'SEN-so U-ni-ko', example: 'Traffic in one direction' },
        { id: 45, category: 'phrases', italian: 'Doppio senso', english: 'Two way', pronunciation: 'DOP-pyo SEN-so', example: 'Traffic both directions' }
    ],
    
    // Flashcard Deck Categories for UI
    decks: [
        { id: 'signs', name: 'Traffic Signs', nameIt: 'Segnali Stradali', icon: '🚦', count: 40, description: 'Learn Italian road signs' },
        { id: 'vocabulary', name: 'Driving Words', nameIt: 'Vocabolario', icon: '📖', count: 45, description: 'Essential Italian driving vocabulary' },
        { id: 'rules', name: 'Key Rules', nameIt: 'Regole', icon: '📋', count: 20, description: 'Important rules to remember' }
    ],
    
    // Key Rules Flashcards
    rules: [
        { id: 1, rule: 'Speed in urban areas', answer: '50 km/h in centri abitati (built-up areas)', category: 'speed' },
        { id: 2, rule: 'Speed on highways', answer: '130 km/h on autostrade (110 in rain)', category: 'speed' },
        { id: 3, rule: 'Speed on main roads', answer: '110 km/h on strade extraurbane principali', category: 'speed' },
        { id: 4, rule: 'Speed on secondary roads', answer: '90 km/h on strade extraurbane secondarie', category: 'speed' },
        { id: 5, rule: 'Blood alcohol limit', answer: '0.5 g/l (0.0 for neopatentati)', category: 'alcohol' },
        { id: 6, rule: 'Priority rule at intersections', answer: 'Give way to the right (precedenza a destra)', category: 'priority' },
        { id: 7, rule: 'Trams priority', answer: 'Trams ALWAYS have priority', category: 'priority' },
        { id: 8, rule: 'Warning triangle distance', answer: 'At least 100 meters behind vehicle', category: 'safety' },
        { id: 9, rule: 'Emergency number', answer: '112 (unified European number)', category: 'emergency' },
        { id: 10, rule: 'Seat belt rule', answer: 'Mandatory for ALL passengers', category: 'safety' },
        { id: 11, rule: 'Child seat requirement', answer: 'Required for children under 150cm', category: 'safety' },
        { id: 12, rule: 'Parking near crossings', answer: 'Not within 5 meters of pedestrian crossings', category: 'parking' },
        { id: 13, rule: 'Parking near intersections', answer: 'Not within 5 meters of intersections', category: 'parking' },
        { id: 14, rule: 'Neopatentati speed limit', answer: '100 km/h on autostrade, 90 km/h on main roads', category: 'speed' },
        { id: 15, rule: 'Neopatentati duration', answer: '3 years of restrictions after getting license', category: 'documents' },
        { id: 16, rule: 'First MOT (revisione)', answer: 'After 4 years, then every 2 years', category: 'documents' },
        { id: 17, rule: 'Starting points on license', answer: '20 points (patente a punti)', category: 'documents' },
        { id: 18, rule: 'Phone use while driving', answer: 'Only hands-free allowed, costs 5 points', category: 'safety' },
        { id: 19, rule: 'Headlights outside cities', answer: 'Required during day on extraurban roads', category: 'safety' },
        { id: 20, rule: 'Safe following distance', answer: 'At least 2 seconds behind vehicle ahead', category: 'safety' }
    ]
};

// Study Materials Content
const StudyMaterials = {
    topics: [
        {
            id: 'signs',
            title: 'Traffic Signs',
            titleIt: 'Segnali Stradali',
            icon: '🚦',
            content: `
                <h3>Types of Traffic Signs in Italy</h3>
                <p>Italian traffic signs follow European standards. Learn to recognize them by <strong>shape</strong> and <strong>color</strong>:</p>
                
                <h4>1. Warning Signs <span class="term">(Segnali di Pericolo)</span></h4>
                <p>Shape: <strong>Triangle</strong> pointing UP with red border<br>
                Meaning: Danger ahead! Be careful and slow down.</p>
                <ul>
                    <li><span class="term">Curva pericolosa</span> <span class="term-meaning">(dangerous curve)</span></li>
                    <li><span class="term">Attraversamento pedonale</span> <span class="term-meaning">(pedestrian crossing)</span></li>
                    <li><span class="term">Lavori in corso</span> <span class="term-meaning">(road work)</span></li>
                </ul>
                
                <h4>2. Prohibition Signs <span class="term">(Segnali di Divieto)</span></h4>
                <p>Shape: <strong>Circle</strong> with red border<br>
                Meaning: You CANNOT do something.</p>
                <ul>
                    <li><span class="term">Divieto di accesso</span> <span class="term-meaning">(no entry)</span></li>
                    <li><span class="term">Divieto di sorpasso</span> <span class="term-meaning">(no overtaking)</span></li>
                    <li><span class="term">Limite di velocità</span> <span class="term-meaning">(speed limit)</span></li>
                </ul>
                
                <h4>3. Mandatory Signs <span class="term">(Segnali di Obbligo)</span></h4>
                <p>Shape: <strong>Circle</strong>, blue background<br>
                Meaning: You MUST do something.</p>
                <ul>
                    <li><span class="term">Direzione obbligatoria</span> <span class="term-meaning">(mandatory direction)</span></li>
                    <li><span class="term">Rotatoria</span> <span class="term-meaning">(roundabout)</span></li>
                </ul>
                
                <h4>4. Priority Signs</h4>
                <ul>
                    <li><strong>STOP</strong> - Red octagon - Stop completely!</li>
                    <li><span class="term">Dare precedenza</span> - Triangle pointing DOWN - Yield</li>
                    <li>Yellow diamond - You have priority</li>
                </ul>
            `
        },
        {
            id: 'speed',
            title: 'Speed Limits',
            titleIt: 'Limiti di Velocità',
            icon: '🚗',
            content: `
                <h3>Speed Limits in Italy</h3>
                <p>Remember these important limits:</p>
                
                <div class="speed-table">
                    <h4>Regular Drivers</h4>
                    <ul>
                        <li><strong>Urban areas</strong> <span class="term">(centri abitati)</span>: <strong>50 km/h</strong></li>
                        <li><strong>Secondary roads</strong> <span class="term">(strade extraurbane secondarie)</span>: <strong>90 km/h</strong></li>
                        <li><strong>Main roads</strong> <span class="term">(strade extraurbane principali)</span>: <strong>110 km/h</strong></li>
                        <li><strong>Motorways</strong> <span class="term">(autostrade)</span>: <strong>130 km/h</strong></li>
                    </ul>
                    
                    <h4>New Drivers <span class="term">(Neopatentati)</span></h4>
                    <p>For 3 years after getting your license:</p>
                    <ul>
                        <li><strong>Main roads</strong>: <strong>90 km/h</strong> (not 110)</li>
                        <li><strong>Motorways</strong>: <strong>100 km/h</strong> (not 130)</li>
                    </ul>
                    
                    <h4>In Bad Weather</h4>
                    <p>When it rains <span class="term">(pioggia)</span> or there's fog <span class="term">(nebbia)</span>:</p>
                    <ul>
                        <li>Motorways: reduced to <strong>110 km/h</strong></li>
                        <li>Always drive slower than the limit in poor conditions</li>
                    </ul>
                </div>
                
                <h4>Speed Cameras <span class="term">(Autovelox)</span></h4>
                <p>In Italy, speed cameras must be signaled with warning signs. The <span class="term">Tutor</span> system measures your average speed between two points.</p>
            `
        },
        {
            id: 'priority',
            title: 'Priority Rules',
            titleIt: 'Regole di Precedenza',
            icon: '⚠️',
            content: `
                <h3>Who Goes First?</h3>
                
                <h4>The Basic Rule: Right of Way <span class="term">(Precedenza a Destra)</span></h4>
                <p>At intersections without signs or lights: <strong>Give way to vehicles coming from your RIGHT.</strong></p>
                <p>This is the most important rule to remember!</p>
                
                <h4>Who ALWAYS Has Priority:</h4>
                <ul>
                    <li>🚋 <strong>Trams</strong> <span class="term">(tram)</span> - ALWAYS have priority</li>
                    <li>🚑 <strong>Emergency vehicles</strong> with lights AND sirens</li>
                    <li>👮 <strong>Police officers</strong> directing traffic</li>
                    <li>🚶 <strong>Pedestrians</strong> on zebra crossings</li>
                </ul>
                
                <h4>At Roundabouts <span class="term">(Rotatorie)</span></h4>
                <p>Vehicles already IN the roundabout have priority. You must yield when entering.</p>
                
                <h4>On Narrow Mountain Roads</h4>
                <p>Vehicles going <strong>uphill</strong> have priority (it's harder to stop and start on a slope).</p>
                
                <h4>Special Situations</h4>
                <ul>
                    <li>Buses leaving stops in urban areas have priority</li>
                    <li>When changing lanes, yield to vehicles already in that lane</li>
                    <li>When exiting private property, yield to ALL traffic</li>
                </ul>
            `
        },
        {
            id: 'alcohol',
            title: 'Alcohol & Driving',
            titleIt: 'Alcol e Guida',
            icon: '🚫',
            content: `
                <h3>Alcohol Limits</h3>
                
                <h4>Blood Alcohol Limits <span class="term">(Tasso Alcolemico)</span></h4>
                <ul>
                    <li><strong>Regular drivers</strong>: Maximum <strong>0.5 g/l</strong></li>
                    <li><strong>New drivers</strong> <span class="term">(neopatentati)</span>: <strong>0.0 g/l</strong> (ZERO)</li>
                    <li><strong>Professional drivers</strong>: <strong>0.0 g/l</strong> (ZERO)</li>
                </ul>
                
                <h4>Important Facts</h4>
                <ul>
                    <li>Your body eliminates alcohol at about <strong>0.1 g/l per hour</strong></li>
                    <li>Coffee, cold showers, and exercise do NOT speed this up</li>
                    <li>Only TIME reduces alcohol in your blood</li>
                    <li>Even small amounts affect reaction time and judgment</li>
                </ul>
                
                <h4>Penalties for Drunk Driving</h4>
                <ul>
                    <li>Heavy fines <span class="term">(multa)</span></li>
                    <li>License suspension <span class="term">(sospensione della patente)</span></li>
                    <li>Possible arrest for high levels</li>
                    <li>Refusing breathalyzer = same penalties as testing positive</li>
                </ul>
                
                <h4>Also Prohibited</h4>
                <p>Driving under the influence of drugs <span class="term">(stupefacenti)</span> is illegal. Some medications can also affect driving - always check the label.</p>
            `
        },
        {
            id: 'safety',
            title: 'Safety Rules',
            titleIt: 'Sicurezza',
            icon: '🛡️',
            content: `
                <h3>Safety Requirements</h3>
                
                <h4>Seat Belts <span class="term">(Cinture di Sicurezza)</span></h4>
                <p><strong>EVERYONE</strong> in the car must wear a seat belt - front and back seats. The driver is responsible for all passengers.</p>
                
                <h4>Child Safety <span class="term">(Seggiolini)</span></h4>
                <p>Children under <strong>150 cm tall</strong> or <strong>36 kg</strong> must use appropriate child seats. Children should sit in the back when possible.</p>
                
                <h4>Mobile Phones</h4>
                <ul>
                    <li>Using a phone while driving: <strong>PROHIBITED</strong></li>
                    <li>Hands-free systems: <strong>ALLOWED</strong></li>
                    <li>Penalty: Fine + 5 points from license</li>
                </ul>
                
                <h4>Headlights <span class="term">(Fari)</span></h4>
                <p>You must use low beams <span class="term">(anabbaglianti)</span> during the day when driving outside urban areas.</p>
                
                <h4>Emergency Equipment</h4>
                <p>Always carry in your car:</p>
                <ul>
                    <li>Warning triangle <span class="term">(triangolo)</span> - place 100m behind car</li>
                    <li>Reflective vest <span class="term">(giubbotto)</span> - wear when outside car on road</li>
                </ul>
                
                <h4>Safe Following Distance <span class="term">(Distanza di Sicurezza)</span></h4>
                <p>Keep at least <strong>2 seconds</strong> of distance from the car ahead. More in bad weather!</p>
            `
        },
        {
            id: 'parking',
            title: 'Parking Rules',
            titleIt: 'Sosta e Parcheggio',
            icon: '🅿️',
            content: `
                <h3>Parking in Italy</h3>
                
                <h4>Two Different Things:</h4>
                <ul>
                    <li><span class="term">Fermata</span> = Brief stop (driver stays in/near car)</li>
                    <li><span class="term">Sosta</span> = Parking (leaving the vehicle)</li>
                </ul>
                
                <h4>Parking Line Colors</h4>
                <ul>
                    <li><strong>White lines</strong> = Free parking (may have time limits)</li>
                    <li><strong>Blue lines</strong> <span class="term">(strisce blu)</span> = Paid parking</li>
                    <li><strong>Yellow lines</strong> <span class="term">(strisce gialle)</span> = Reserved (residents, disabled, taxis)</li>
                </ul>
                
                <h4>Where You CANNOT Park</h4>
                <ul>
                    <li>Within <strong>5 meters</strong> of intersections</li>
                    <li>Within <strong>5 meters</strong> of pedestrian crossings</li>
                    <li>Within <strong>15 meters</strong> of bus stops</li>
                    <li>On sidewalks <span class="term">(marciapiedi)</span></li>
                    <li>In double file <span class="term">(doppia fila)</span> - NEVER allowed</li>
                    <li>On curves, bridges, or tunnels</li>
                </ul>
                
                <h4>Parking on Hills</h4>
                <ul>
                    <li><strong>Uphill</strong>: Turn wheels AWAY from curb</li>
                    <li><strong>Downhill</strong>: Turn wheels TOWARD curb</li>
                </ul>
                
                <h4>Time-Limited Zones <span class="term">(Zona Disco)</span></h4>
                <p>Use your parking disc <span class="term">(disco orario)</span> to show when you arrived.</p>
            `
        },
        {
            id: 'documents',
            title: 'Required Documents',
            titleIt: 'Documenti',
            icon: '📄',
            content: `
                <h3>Documents You Need</h3>
                
                <h4>Always Carry When Driving:</h4>
                <ul>
                    <li><strong>Driving license</strong> <span class="term">(patente)</span></li>
                    <li><strong>Vehicle registration</strong> <span class="term">(libretto di circolazione)</span></li>
                    <li><strong>Insurance certificate</strong> <span class="term">(certificato di assicurazione)</span></li>
                </ul>
                
                <h4>Points System <span class="term">(Patente a Punti)</span></h4>
                <ul>
                    <li>You start with <strong>20 points</strong></li>
                    <li>Points are deducted for violations</li>
                    <li>Reach 0 = license suspended</li>
                    <li>Safe driving courses can restore points (max 6)</li>
                </ul>
                
                <h4>Insurance <span class="term">(Assicurazione RCA)</span></h4>
                <p>Liability insurance is <strong>MANDATORY</strong>. Driving without it:</p>
                <ul>
                    <li>Heavy fine</li>
                    <li>Vehicle seizure <span class="term">(sequestro)</span></li>
                </ul>
                
                <h4>MOT/Inspection <span class="term">(Revisione)</span></h4>
                <ul>
                    <li>First inspection: <strong>4 years</strong> after registration</li>
                    <li>Then: Every <strong>2 years</strong></li>
                </ul>
                
                <h4>Vehicle Tax <span class="term">(Bollo)</span></h4>
                <p>Annual tax paid to the region. Must be current.</p>
                
                <h4>New Driver Restrictions <span class="term">(Neopatentati)</span></h4>
                <p>For <strong>3 years</strong> after getting your license:</p>
                <ul>
                    <li>Zero alcohol (0.0 g/l)</li>
                    <li>Lower speed limits (100/90 km/h)</li>
                    <li>Cannot drive high-powered vehicles</li>
                </ul>
            `
        },
        {
            id: 'emergency',
            title: 'Emergencies',
            titleIt: 'Emergenze',
            icon: '🚨',
            content: `
                <h3>What to Do in Emergencies</h3>
                
                <h4>Emergency Numbers</h4>
                <ul>
                    <li><strong>112</strong> - European emergency number (reaches all services)</li>
                    <li><strong>113</strong> - Police <span class="term">(Polizia)</span></li>
                    <li><strong>115</strong> - Fire brigade <span class="term">(Vigili del Fuoco)</span></li>
                    <li><strong>118</strong> - Medical emergency <span class="term">(Emergenza sanitaria)</span></li>
                    <li><strong>803-116</strong> - ACI roadside assistance</li>
                </ul>
                
                <h4>If You Have an Accident</h4>
                <ol>
                    <li><strong>STOP</strong> - You must stop (leaving is a crime)</li>
                    <li><strong>SECURE</strong> - Turn on hazard lights, place triangle</li>
                    <li><strong>HELP</strong> - Check for injuries, call 112 if needed</li>
                    <li><strong>DOCUMENT</strong> - Fill out CID form for insurance</li>
                </ol>
                
                <h4>Helping Injured People</h4>
                <ul>
                    <li>Ensure YOUR safety first</li>
                    <li>Do NOT move injured people unless there's immediate danger (fire, etc.)</li>
                    <li>Unconscious but breathing? Use recovery position <span class="term">(posizione laterale)</span></li>
                    <li>Do NOT remove motorcycle helmets unless breathing is blocked</li>
                </ul>
                
                <h4>Breakdown on Motorway</h4>
                <ol>
                    <li>Move to emergency lane if possible</li>
                    <li>Turn on hazard lights</li>
                    <li>Put on reflective vest BEFORE exiting</li>
                    <li>Place triangle 100m behind car</li>
                    <li>Use SOS columns <span class="term">(colonnine SOS)</span> or call for help</li>
                    <li>Wait behind the barrier, not in the car</li>
                </ol>
            `
        }
    ]
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { FlashcardData, StudyMaterials };
}

