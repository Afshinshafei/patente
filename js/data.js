// Italian Patente B Learning App - Data Module
// Contains quiz questions

const PatenteData = {
    // Quiz Categories
    categories: [
        { id: 'signs', name: 'Traffic Signs', icon: '🚦', nameIt: 'Segnali Stradali' },
        { id: 'priority', name: 'Priority Rules', icon: '⚠️', nameIt: 'Precedenza' },
        { id: 'speed', name: 'Speed Limits', icon: '🚗', nameIt: 'Limiti di Velocità' },
        { id: 'safety', name: 'Safety Rules', icon: '🛡️', nameIt: 'Sicurezza' },
        { id: 'parking', name: 'Parking & Stopping', icon: '🅿️', nameIt: 'Sosta e Fermata' },
        { id: 'alcohol', name: 'Alcohol & Drugs', icon: '🚫', nameIt: 'Alcol e Droghe' },
        { id: 'documents', name: 'Documents', icon: '📄', nameIt: 'Documenti' },
        { id: 'emergency', name: 'Emergencies', icon: '🚨', nameIt: 'Emergenze' }
    ],

    // Official-style Patente B Questions (Vero/Falso format)
    questions: [
        // TRAFFIC SIGNS - Segnali Stradali
        { id: 1, category: 'signs', question: 'The STOP sign (STOP) requires you to stop completely and give way to all vehicles.', answer: true, explanation: 'The STOP sign means you must stop completely at the line and give way (dare precedenza) to all vehicles on the main road.' },
        { id: 2, category: 'signs', question: 'A triangular sign with red border pointing up is a warning sign (segnale di pericolo).', answer: true, explanation: 'Triangular signs with the point up and red border warn of dangers ahead. In Italian: segnale di pericolo.' },
        { id: 3, category: 'signs', question: 'A round sign with red border indicates something is prohibited (divieto).', answer: true, explanation: 'Round signs with red borders are prohibition signs (segnali di divieto). They tell you what you cannot do.' },
        { id: 4, category: 'signs', question: 'Blue round signs indicate obligations (obbligo) - things you must do.', answer: true, explanation: 'Blue circular signs are mandatory/obligation signs (segnali di obbligo). Example: turn right, minimum speed.' },
        { id: 5, category: 'signs', question: 'The "give way" sign (dare precedenza) is a triangle pointing down with red border.', answer: true, explanation: 'The yield/give way sign (dare precedenza) is an inverted triangle. You must slow down and give way.' },
        { id: 6, category: 'signs', question: 'A sign showing a car and motorcycle side by side means overtaking is allowed.', answer: false, explanation: 'This sign means NO overtaking (divieto di sorpasso). The red border indicates prohibition.' },
        { id: 7, category: 'signs', question: 'A white arrow on blue background indicates a mandatory direction (direzione obbligatoria).', answer: true, explanation: 'Blue signs with white arrows show mandatory directions you must follow.' },
        { id: 8, category: 'signs', question: 'The pedestrian crossing sign (attraversamento pedonale) warns drivers to watch for pedestrians.', answer: true, explanation: 'This warning sign tells you a pedestrian crossing is ahead. Be ready to stop.' },
        { id: 9, category: 'signs', question: 'A round sign with a red diagonal line through it means the end of a restriction.', answer: true, explanation: 'When you see a prohibition sign crossed out with diagonal lines, the restriction has ended.' },
        { id: 10, category: 'signs', question: 'Yellow diamond signs indicate you have priority (precedenza).', answer: true, explanation: 'The yellow diamond sign means you are on a priority road (strada con diritto di precedenza).' },
        { id: 11, category: 'signs', question: 'A circular blue sign with number 30 means minimum speed is 30 km/h.', answer: true, explanation: 'Blue circular signs with numbers show minimum speed (velocità minima). You must drive at least this fast.' },
        { id: 12, category: 'signs', question: 'A circular sign with red border and number 50 means maximum speed is 50 km/h.', answer: true, explanation: 'Red border circular signs with numbers show maximum speed (limite di velocità). You cannot exceed this.' },
        { id: 13, category: 'signs', question: 'Green highway signs indicate you are on an autostrada (motorway).', answer: true, explanation: 'In Italy, green signs are for autostrada (motorways). Blue signs are for other roads.' },
        { id: 14, category: 'signs', question: 'A sign with a black car on white background inside red circle means no vehicles allowed.', answer: true, explanation: 'This is the no motor vehicles sign (divieto di transito ai veicoli a motore).' },
        { id: 15, category: 'signs', question: 'The "no entry" sign (divieto di accesso) is a red circle with white horizontal bar.', answer: true, explanation: 'Senso vietato - this sign means you cannot enter. Often seen on one-way streets.' },

        // PRIORITY RULES - Precedenza
        { id: 16, category: 'priority', question: 'At an intersection without signs, you must give way to vehicles coming from the right (precedenza a destra).', answer: true, explanation: 'The basic rule in Italy: give way to the right (dare precedenza a destra) at unmarked intersections.' },
        { id: 17, category: 'priority', question: 'Emergency vehicles (veicoli di emergenza) with sirens and lights always have priority.', answer: true, explanation: 'Ambulances, police, and fire trucks with active sirens/lights have absolute priority. Pull over safely.' },
        { id: 18, category: 'priority', question: 'On a roundabout (rotatoria), vehicles already in the roundabout have priority.', answer: true, explanation: 'When entering a rotatoria, you must yield to vehicles already circulating inside.' },
        { id: 19, category: 'priority', question: 'Trams (tram) always have priority over other vehicles.', answer: true, explanation: 'Trams have absolute priority in Italy. Always give way to them.' },
        { id: 20, category: 'priority', question: 'When two vehicles arrive at an intersection at the same time, the larger vehicle has priority.', answer: false, explanation: 'Size does not determine priority. The vehicle on the right has priority, or follow signs.' },
        { id: 21, category: 'priority', question: 'Vehicles going uphill have priority over vehicles going downhill on narrow mountain roads.', answer: true, explanation: 'On narrow mountain roads, uphill traffic has priority because stopping on slopes is harder.' },
        { id: 22, category: 'priority', question: 'Pedestrians on zebra crossings (strisce pedonali) always have priority.', answer: true, explanation: 'You must always stop for pedestrians on marked crossings (attraversamento pedonale).' },
        { id: 23, category: 'priority', question: 'At a T-intersection, vehicles on the through road always have priority.', answer: false, explanation: 'Only if there are signs giving priority. Otherwise, right-of-way rules apply.' },
        { id: 24, category: 'priority', question: 'When a traffic officer (vigile) is present, their signals override traffic signs and lights.', answer: true, explanation: 'Police officers directing traffic have authority over all signs and signals.' },
        { id: 25, category: 'priority', question: 'Buses leaving a bus stop have priority in urban areas (centri abitati).', answer: true, explanation: 'In built-up areas, you must allow buses to re-enter traffic when leaving stops.' },

        // SPEED LIMITS - Limiti di Velocità
        { id: 26, category: 'speed', question: 'The general speed limit in urban areas (centri abitati) is 50 km/h.', answer: true, explanation: 'In cities and towns (centri abitati), the default limit is 50 km/h unless signs say otherwise.' },
        { id: 27, category: 'speed', question: 'The speed limit on regular roads outside cities (strade extraurbane secondarie) is 90 km/h.', answer: true, explanation: 'On secondary roads outside urban areas, the limit is 90 km/h.' },
        { id: 28, category: 'speed', question: 'The speed limit on motorways (autostrade) is 150 km/h.', answer: false, explanation: 'The maximum on autostrade is 130 km/h (110 km/h in rain). Not 150 km/h.' },
        { id: 29, category: 'speed', question: 'New drivers (neopatentati) must follow lower speed limits for 3 years.', answer: true, explanation: 'Neopatentati: max 100 km/h on autostrade, 90 km/h on main roads for first 3 years.' },
        { id: 30, category: 'speed', question: 'In rain or bad weather, you must reduce your speed below the posted limit.', answer: true, explanation: 'The law requires adapting speed to conditions. On autostrade, limit drops to 110 km/h in rain.' },
        { id: 31, category: 'speed', question: 'Speed cameras (autovelox) must always be signaled in advance.', answer: true, explanation: 'Italian law requires warning signs before speed cameras (autovelox or tutor systems).' },
        { id: 32, category: 'speed', question: 'The speed limit on main roads (strade extraurbane principali) is 110 km/h.', answer: true, explanation: 'On superstrade (main roads with divider), the limit is 110 km/h.' },
        { id: 33, category: 'speed', question: 'Vehicles towing trailers have the same speed limits as cars.', answer: false, explanation: 'Vehicles towing must go slower: max 70 km/h on regular roads, 80 km/h on autostrade.' },
        { id: 34, category: 'speed', question: 'In residential zones (zone residenziali), the limit may be 30 km/h.', answer: true, explanation: 'Zone 30 areas have a 30 km/h limit to protect pedestrians and cyclists.' },
        { id: 35, category: 'speed', question: 'Driving too slowly can also be dangerous and is prohibited.', answer: true, explanation: 'Driving much slower than traffic flow without reason is dangerous and can be fined.' },

        // SAFETY RULES - Sicurezza
        { id: 36, category: 'safety', question: 'Seat belts (cinture di sicurezza) are mandatory for all passengers.', answer: true, explanation: 'All occupants must wear seat belts - front and back seats. Driver is responsible.' },
        { id: 37, category: 'safety', question: 'Children under 150 cm tall must use appropriate child seats (seggiolini).', answer: true, explanation: 'Children under 150 cm or 36 kg need approved child restraint systems.' },
        { id: 38, category: 'safety', question: 'Using a mobile phone while driving is allowed if using hands-free.', answer: true, explanation: 'Hands-free systems are allowed. Holding the phone is prohibited (vietato).' },
        { id: 39, category: 'safety', question: 'You must keep headlights on during the day outside urban areas.', answer: true, explanation: 'Daytime running lights or dipped headlights required outside centri abitati.' },
        { id: 40, category: 'safety', question: 'The minimum following distance should be at least 2 seconds behind the car ahead.', answer: true, explanation: 'The 2-second rule helps maintain safe distance (distanza di sicurezza).' },
        { id: 41, category: 'safety', question: 'Hazard warning lights (quattro frecce) should be used when stopping on the road.', answer: true, explanation: 'Use hazard lights when your vehicle is a potential obstacle to warn others.' },
        { id: 42, category: 'safety', question: 'The warning triangle must be placed at least 50 meters behind a stopped vehicle.', answer: false, explanation: 'The triangle (triangolo) must be placed at least 100 meters behind on regular roads.' },
        { id: 43, category: 'safety', question: 'High-visibility vests (giubbotti) must be worn when exiting the car on roads.', answer: true, explanation: 'You must wear a reflective vest when outside your vehicle on roads or motorways.' },
        { id: 44, category: 'safety', question: 'Fog lights (fendinebbia) can be used in any weather condition.', answer: false, explanation: 'Fog lights are only for fog, heavy rain, or snow. Using them otherwise is prohibited.' },
        { id: 45, category: 'safety', question: 'ABS prevents wheels from locking during emergency braking.', answer: true, explanation: 'Anti-lock Braking System (ABS) helps maintain steering control during hard braking.' },

        // PARKING & STOPPING - Sosta e Fermata
        { id: 46, category: 'parking', question: 'Fermata means a brief stop (driver stays in car), sosta means parking.', answer: true, explanation: 'Fermata = brief stop with driver present. Sosta = parking (leaving the vehicle).' },
        { id: 47, category: 'parking', question: 'Parking is prohibited within 5 meters of an intersection.', answer: true, explanation: 'You cannot park within 5 meters of intersections to maintain visibility.' },
        { id: 48, category: 'parking', question: 'Blue painted lines indicate paid parking (parcheggio a pagamento).', answer: true, explanation: 'Blue lines = paid parking (strisce blu). White lines = free parking. Yellow = reserved.' },
        { id: 49, category: 'parking', question: 'Double parking (doppia fila) is allowed for quick stops.', answer: false, explanation: 'Double parking is always prohibited (vietato). It blocks traffic and is dangerous.' },
        { id: 50, category: 'parking', question: 'You can park on sidewalks if there is enough space for pedestrians.', answer: false, explanation: 'Parking on sidewalks (marciapiedi) is prohibited unless specifically marked.' },
        { id: 51, category: 'parking', question: 'Parking within 15 meters of a bus stop is prohibited.', answer: true, explanation: 'Keep 15 meters clear around bus stops (fermata autobus) for safety.' },
        { id: 52, category: 'parking', question: 'Yellow lines indicate parking reserved for specific vehicles.', answer: true, explanation: 'Yellow lines (strisce gialle) = reserved parking for residents, disabled, taxis, etc.' },
        { id: 53, category: 'parking', question: 'When parking uphill, turn wheels toward the curb.', answer: false, explanation: 'Uphill: turn wheels away from curb. Downhill: turn toward curb. This prevents rolling.' },
        { id: 54, category: 'parking', question: 'The parking disc (disco orario) shows when you started parking in time-limited zones.', answer: true, explanation: 'In zona disco areas, display your arrival time on the disco orario.' },
        { id: 55, category: 'parking', question: 'Parking is prohibited within 5 meters of pedestrian crossings.', answer: true, explanation: 'Keep pedestrian crossings clear - no parking within 5 meters.' },

        // ALCOHOL & DRUGS - Alcol e Droghe
        { id: 56, category: 'alcohol', question: 'The blood alcohol limit for regular drivers is 0.5 g/l.', answer: true, explanation: 'Maximum blood alcohol content (tasso alcolemico) is 0.5 g/l for normal drivers.' },
        { id: 57, category: 'alcohol', question: 'New drivers (neopatentati) must have zero alcohol (0.0 g/l) for 3 years.', answer: true, explanation: 'Neopatentati and professional drivers must have 0.0 alcohol level.' },
        { id: 58, category: 'alcohol', question: 'Refusing a breathalyzer test (alcol test) is a serious offense.', answer: true, explanation: 'Refusing the test results in the same penalties as testing over the limit.' },
        { id: 59, category: 'alcohol', question: 'Even small amounts of alcohol improve driving ability.', answer: false, explanation: 'Any alcohol impairs reaction time, judgment, and driving ability.' },
        { id: 60, category: 'alcohol', question: 'Coffee or cold showers can quickly reduce blood alcohol level.', answer: false, explanation: 'Only time reduces alcohol level. Coffee and showers do not speed this up.' },
        { id: 61, category: 'alcohol', question: 'Driving under the influence of drugs (stupefacenti) is prohibited.', answer: true, explanation: 'Drug driving is illegal and very dangerous. Penalties are severe.' },
        { id: 62, category: 'alcohol', question: 'Some medications can impair driving ability.', answer: true, explanation: 'Many medicines affect driving. Always check warnings and consult your doctor.' },
        { id: 63, category: 'alcohol', question: 'The penalty for drunk driving includes license suspension.', answer: true, explanation: 'Penalties include fines, license suspension (sospensione patente), and possible arrest.' },
        { id: 64, category: 'alcohol', question: 'Professional drivers (truck, bus) can have 0.5 g/l blood alcohol.', answer: false, explanation: 'Professional drivers must have 0.0 alcohol - zero tolerance.' },
        { id: 65, category: 'alcohol', question: 'Alcohol affects your ability to judge distances and speeds.', answer: true, explanation: 'Alcohol impairs perception, reaction time, and decision-making.' },

        // DOCUMENTS - Documenti
        { id: 66, category: 'documents', question: 'You must always carry your driving license (patente) when driving.', answer: true, explanation: 'La patente must always be with you when driving.' },
        { id: 67, category: 'documents', question: 'The vehicle registration document (libretto) must be in the car.', answer: true, explanation: 'Libretto di circolazione must be kept in the vehicle at all times.' },
        { id: 68, category: 'documents', question: 'Insurance (assicurazione) is mandatory for all motor vehicles.', answer: true, explanation: 'RCA (liability insurance) is required by law. Driving without it is a serious offense.' },
        { id: 69, category: 'documents', question: 'The MOT certificate (revisione) must be renewed every 2 years.', answer: false, explanation: 'First revisione after 4 years, then every 2 years.' },
        { id: 70, category: 'documents', question: 'You can drive in Italy with a valid EU driving license.', answer: true, explanation: 'EU licenses are valid throughout Italy without additional documents.' },
        { id: 71, category: 'documents', question: 'Points are deducted from your license for traffic violations.', answer: true, explanation: 'Italy uses a points system (patente a punti). You start with 20 points.' },
        { id: 72, category: 'documents', question: 'Driving without insurance can result in vehicle seizure.', answer: true, explanation: 'No insurance = heavy fine + vehicle seizure (sequestro del veicolo).' },
        { id: 73, category: 'documents', question: 'An international driving permit is needed for non-EU licenses.', answer: true, explanation: 'Non-EU drivers need IDP or official translation with their license.' },
        { id: 74, category: 'documents', question: 'The Patente B allows you to drive motorcycles over 125cc.', answer: false, explanation: 'Patente B only allows motorcycles up to 125cc (with restrictions). Larger bikes need Patente A.' },
        { id: 75, category: 'documents', question: 'Vehicle tax (bollo auto) must be paid annually.', answer: true, explanation: 'Bollo is the annual vehicle tax. Payment is mandatory.' },

        // EMERGENCIES - Emergenze
        { id: 76, category: 'emergency', question: 'The European emergency number is 112.', answer: true, explanation: '112 works throughout Europe for all emergencies (police, fire, ambulance).' },
        { id: 77, category: 'emergency', question: 'In case of accident, you must stop and help injured people.', answer: true, explanation: 'Leaving the scene (omissione di soccorso) is a crime. You must stop and assist.' },
        { id: 78, category: 'emergency', question: 'First aid priority: ensure your own safety first.', answer: true, explanation: 'Make sure the scene is safe before helping others. Turn off engines, use warning signals.' },
        { id: 79, category: 'emergency', question: 'Move an injured person only if there is immediate danger.', answer: true, explanation: 'Do not move injured people unless fire, explosion, or other immediate threat exists.' },
        { id: 80, category: 'emergency', question: 'The recovery position is used for unconscious breathing victims.', answer: true, explanation: 'Place unconscious but breathing people in recovery position (posizione laterale).' },
        { id: 81, category: 'emergency', question: 'ACI is the Italian automobile assistance service.', answer: true, explanation: 'ACI (Automobile Club Italia) provides roadside assistance: 803-116.' },
        { id: 82, category: 'emergency', question: 'In a tunnel fire, you should stay in your car.', answer: false, explanation: 'Leave the vehicle and follow emergency exits (uscite di sicurezza). Do not stay in car.' },
        { id: 83, category: 'emergency', question: 'SOS columns on motorways connect directly to emergency services.', answer: true, explanation: 'Orange SOS columns (colonnine SOS) on autostrade connect to help centers.' },
        { id: 84, category: 'emergency', question: 'After a minor accident, you must always call the police.', answer: false, explanation: 'For minor accidents without injuries, you can fill out CID form without police.' },
        { id: 85, category: 'emergency', question: 'The CID form (constatazione amichevole) is used to report accidents.', answer: true, explanation: 'CID/CAI form documents accidents for insurance purposes.' }
    ]
};

// Add more questions to reach 200+
PatenteData.questions.push(
    // More Traffic Signs
    { id: 86, category: 'signs', question: 'A sign with children running indicates a school zone.', answer: true, explanation: 'This warning sign indicates schools nearby. Reduce speed and watch for children.' },
    { id: 87, category: 'signs', question: 'A sign showing falling rocks warns of possible rockslides.', answer: true, explanation: 'Caduta massi - be alert for rocks on the road, especially in mountain areas.' },
    { id: 88, category: 'signs', question: 'A sign with a deer warns of wild animals crossing.', answer: true, explanation: 'Animali selvatici - common in rural areas. Be prepared to stop.' },
    { id: 89, category: 'signs', question: 'The end of all restrictions sign is a white circle with black diagonal stripes.', answer: true, explanation: 'This sign cancels all previous restrictions (fine di tutte le prescrizioni).' },
    { id: 90, category: 'signs', question: 'A sign with train tracks warns of a railway crossing without barriers.', answer: true, explanation: 'Passaggio a livello senza barriere - very dangerous, proceed with extreme caution.' },
    
    // More Priority Rules
    { id: 91, category: 'priority', question: 'When entering traffic from private property, you must give way to all traffic.', answer: true, explanation: 'Vehicles from driveways or private roads must yield to road traffic.' },
    { id: 92, category: 'priority', question: 'Cyclists have the same rights on the road as motor vehicles.', answer: true, explanation: 'Cyclists are legitimate road users with same priority rights.' },
    { id: 93, category: 'priority', question: 'You must stop for a school bus with flashing lights unloading children.', answer: true, explanation: 'When a scuolabus is loading/unloading, you must stop from both directions.' },
    { id: 94, category: 'priority', question: 'Funeral processions have right of way.', answer: true, explanation: 'Funeral cortèges have priority. Do not interrupt them.' },
    { id: 95, category: 'priority', question: 'At intersections with broken traffic lights, right-of-way rules apply.', answer: true, explanation: 'When lights fail, treat intersection as uncontrolled - yield to the right.' },
    
    // More Speed
    { id: 96, category: 'speed', question: 'In fog, you must reduce speed significantly below the limit.', answer: true, explanation: 'Nebbia (fog) requires much slower speeds - you must be able to stop within visible distance.' },
    { id: 97, category: 'speed', question: 'Near hospitals, speed limits may be lower than 50 km/h.', answer: true, explanation: 'Hospital zones often have 30 km/h limits for patient safety and noise reduction.' },
    { id: 98, category: 'speed', question: 'Speeding fines increase based on how much you exceed the limit.', answer: true, explanation: 'Higher excess = higher fine. Over 40 km/h excess = license suspension.' },
    { id: 99, category: 'speed', question: 'The Tutor system measures average speed over a distance.', answer: true, explanation: 'Tutor calculates average speed between two points - you cannot speed between cameras.' },
    { id: 100, category: 'speed', question: 'Electric vehicles have different speed limits than cars.', answer: false, explanation: 'Electric cars follow the same speed limits as all other vehicles.' },
    
    // More Safety
    { id: 101, category: 'safety', question: 'Airbags work best in combination with seat belts.', answer: true, explanation: 'Airbags are supplemental - seat belts are essential for airbag effectiveness.' },
    { id: 102, category: 'safety', question: 'Headrests help prevent whiplash injuries.', answer: true, explanation: 'Poggiatesta should be adjusted to the middle of your head for protection.' },
    { id: 103, category: 'safety', question: 'Driving when very tired is as dangerous as drunk driving.', answer: true, explanation: 'Fatigue (stanchezza) severely impairs reaction time and judgment.' },
    { id: 104, category: 'safety', question: 'You should signal before changing lanes, even if no one is visible.', answer: true, explanation: 'Always signal (freccia) - there may be vehicles in your blind spot.' },
    { id: 105, category: 'safety', question: 'The horn should only be used to warn of danger.', answer: true, explanation: 'Clacson use is only for warnings, not expressing frustration or greeting.' },
    
    // More Parking
    { id: 106, category: 'parking', question: 'Parking in front of fire hydrants is prohibited.', answer: true, explanation: 'Fire hydrants (idranti) must remain accessible - no parking within 5 meters.' },
    { id: 107, category: 'parking', question: 'You can park on the left side of one-way streets.', answer: true, explanation: 'On one-way streets (senso unico), parking on either side is permitted.' },
    { id: 108, category: 'parking', question: 'Parking lights must be used when parked at night outside lit areas.', answer: true, explanation: 'Luci di posizione required when parked where there is no street lighting.' },
    { id: 109, category: 'parking', question: 'Disabled parking spaces (posti disabili) require a special permit.', answer: true, explanation: 'Contrassegno disabili required - unauthorized use results in heavy fines.' },
    { id: 110, category: 'parking', question: 'Parking on curves is prohibited.', answer: true, explanation: 'Curves (curve) reduce visibility - parking there is dangerous and prohibited.' },
    
    // More General Knowledge
    { id: 111, category: 'safety', question: 'Winter tires (pneumatici invernali) are mandatory in some areas from November to April.', answer: true, explanation: 'Many regions require winter tires or chains during cold months.' },
    { id: 112, category: 'safety', question: 'Tire pressure should be checked when tires are hot.', answer: false, explanation: 'Check tire pressure when cold - heat increases pressure and gives false readings.' },
    { id: 113, category: 'documents', question: 'You can drive without glasses if your license requires them.', answer: false, explanation: 'If your license has restriction code 01, you must wear corrective lenses.' },
    { id: 114, category: 'signs', question: 'A blue rectangular sign with "P" indicates a parking area.', answer: true, explanation: 'Blue P signs show parking areas (parcheggio).' },
    { id: 115, category: 'priority', question: 'When backing out of a parking space, you have priority.', answer: false, explanation: 'Reversing vehicles must yield to all other traffic.' },
    
    // More Mixed Questions
    { id: 116, category: 'signs', question: 'A sign with wavy lines warns of a slippery road.', answer: true, explanation: 'Strada sdrucciolevole - road may be slippery, especially when wet.' },
    { id: 117, category: 'safety', question: 'You should look in mirrors before opening car doors.', answer: true, explanation: 'Always check for cyclists and motorcyclists before opening doors.' },
    { id: 118, category: 'speed', question: 'When towing a broken-down vehicle, maximum speed is 50 km/h.', answer: false, explanation: 'Maximum 50 km/h in urban areas, 40 km/h outside. Use hazard lights.' },
    { id: 119, category: 'priority', question: 'Vehicles coming from the right always have priority in parking lots.', answer: false, explanation: 'Parking lots often have their own rules marked with signs.' },
    { id: 120, category: 'emergency', question: 'Carabinieri emergency number is 112.', answer: true, explanation: '112 is the unified emergency number that reaches all services including Carabinieri.' },
    
    { id: 121, category: 'signs', question: 'A white arrow on a round blue sign means you must go in that direction.', answer: true, explanation: 'Direzione obbligatoria - mandatory direction signs must be followed.' },
    { id: 122, category: 'safety', question: 'The braking distance doubles when speed doubles.', answer: false, explanation: 'Braking distance quadruples when speed doubles - much more dangerous!' },
    { id: 123, category: 'priority', question: 'Ambulances without sirens have the same priority as other vehicles.', answer: true, explanation: 'Emergency vehicles only have priority when using lights AND sirens.' },
    { id: 124, category: 'parking', question: 'Leaving the engine running while parked is prohibited.', answer: true, explanation: 'Keeping the engine running (motore acceso) when stopped wastes fuel and pollutes.' },
    { id: 125, category: 'alcohol', question: 'One beer is always safe before driving.', answer: false, explanation: 'Alcohol affects everyone differently. Even one drink can impair driving.' },
    
    { id: 126, category: 'signs', question: 'Brown tourist signs indicate cultural attractions and landmarks.', answer: true, explanation: 'Brown signs (segnali turistici) point to museums, monuments, and attractions.' },
    { id: 127, category: 'safety', question: 'Mirrors should be adjusted before starting to drive.', answer: true, explanation: 'Adjust all mirrors (specchietti) before moving. Never adjust while driving.' },
    { id: 128, category: 'speed', question: 'Motorcycles have different speed limits than cars.', answer: false, explanation: 'Motorcycles follow the same speed limits as cars.' },
    { id: 129, category: 'priority', question: 'Military vehicles in convoy have priority.', answer: true, explanation: 'Military convoys have right of way. Do not break into the convoy.' },
    { id: 130, category: 'documents', question: 'Driving with an expired license is a minor offense.', answer: false, explanation: 'Driving with expired patente is treated as driving without a license - serious offense.' },
    
    { id: 131, category: 'signs', question: 'A sign showing two cars side by side with red X means no overtaking.', answer: true, explanation: 'Divieto di sorpasso - you cannot pass other vehicles until restriction ends.' },
    { id: 132, category: 'safety', question: 'Eating while driving is not recommended.', answer: true, explanation: 'Any distraction while driving is dangerous. Pull over to eat.' },
    { id: 133, category: 'speed', question: 'You may exceed speed limits when overtaking.', answer: false, explanation: 'You must never exceed speed limits, even when overtaking.' },
    { id: 134, category: 'emergency', question: 'After an accident, turn off the ignition of involved vehicles.', answer: true, explanation: 'Turn off engines to prevent fire risk. Use key if possible.' },
    { id: 135, category: 'parking', question: 'Parking on bridges is generally prohibited.', answer: true, explanation: 'Ponti (bridges) and tunnels (gallerie) - no parking allowed.' },
    
    { id: 136, category: 'signs', question: 'A red triangle sign with exclamation mark is a general warning.', answer: true, explanation: 'Pericolo generico - warns of danger ahead, specific hazard not indicated.' },
    { id: 137, category: 'safety', question: 'Dashboard warning lights should be checked before driving.', answer: true, explanation: 'Check that no warning lights remain on after starting the engine.' },
    { id: 138, category: 'priority', question: 'When changing lanes, the vehicle in the destination lane has priority.', answer: true, explanation: 'You must yield to vehicles already in the lane you want to enter.' },
    { id: 139, category: 'documents', question: 'You lose 5 points for using a phone while driving.', answer: true, explanation: 'Mobile phone use while driving costs 5 points plus a fine.' },
    { id: 140, category: 'alcohol', question: 'Alcohol is eliminated from the body at about 0.1 g/l per hour.', answer: true, explanation: 'The liver processes about 0.1 g/l per hour - you cannot speed this up.' },
    
    // Continue with more questions...
    { id: 141, category: 'signs', question: 'A sign with bicycle indicates a cycle path.', answer: true, explanation: 'Pista ciclabile - reserved path for bicycles only.' },
    { id: 142, category: 'safety', question: 'Children under 12 should sit in the back seat.', answer: true, explanation: 'Front seat is dangerous for children due to airbags. Use rear seats.' },
    { id: 143, category: 'speed', question: 'Construction zones often have temporary lower speed limits.', answer: true, explanation: 'Cantieri (construction) zones have reduced limits for safety.' },
    { id: 144, category: 'priority', question: 'Vehicles with special permits (blue lights) always have priority.', answer: false, explanation: 'Only with lights AND sirens active. Otherwise normal rules apply.' },
    { id: 145, category: 'parking', question: 'ZTL (zona traffico limitato) means restricted traffic zone.', answer: true, explanation: 'ZTL areas require permits. Entering without one results in fines.' },
    
    { id: 146, category: 'signs', question: 'A sign showing a truck and car with 70m indicates minimum following distance.', answer: true, explanation: 'Distanza minima di sicurezza - maintain at least this distance from vehicle ahead.' },
    { id: 147, category: 'safety', question: 'Pets must be secured when transported in vehicles.', answer: true, explanation: 'Unsecured animals can cause accidents and injuries.' },
    { id: 148, category: 'speed', question: 'Speed limits apply to all lanes equally.', answer: true, explanation: 'The posted limit applies to all lanes, not just the slow lane.' },
    { id: 149, category: 'priority', question: 'Merging traffic must yield to vehicles on the main road.', answer: true, explanation: 'When entering from acceleration lanes, yield to traffic on the highway.' },
    { id: 150, category: 'documents', question: 'The Patente B permits driving vehicles up to 3500 kg.', answer: true, explanation: 'Patente B: vehicles up to 3.5 tons, max 9 seats including driver.' },
    
    { id: 151, category: 'signs', question: 'Road work signs are typically diamond-shaped and orange.', answer: false, explanation: 'In Italy, road work signs are triangular warning signs, sometimes with orange elements.' },
    { id: 152, category: 'safety', question: 'Side mirrors eliminate all blind spots.', answer: false, explanation: 'Mirrors have blind spots. Always check by looking over shoulder when changing lanes.' },
    { id: 153, category: 'speed', question: 'Electronic speed signs can change the limit temporarily.', answer: true, explanation: 'Variable message signs (PMV) can display temporary limits based on conditions.' },
    { id: 154, category: 'priority', question: 'On unmarked narrow roads, whoever gets there first has priority.', answer: false, explanation: 'On narrow roads, larger vehicles and uphill traffic usually have priority.' },
    { id: 155, category: 'emergency', question: 'The fire brigade number in Italy is 115.', answer: true, explanation: 'Vigili del Fuoco: 115 (or use 112 for all emergencies).' },
    
    { id: 156, category: 'signs', question: 'A sign with H indicates a hospital nearby.', answer: true, explanation: 'Ospedale - hospital ahead. Be quiet and watch for emergency vehicles.' },
    { id: 157, category: 'safety', question: 'High beams should be used when following another vehicle closely.', answer: false, explanation: 'Use low beams when following - high beams blind the driver ahead.' },
    { id: 158, category: 'alcohol', question: 'Blood alcohol can be tested through breath, blood, or urine.', answer: true, explanation: 'Police can use any of these methods to test for alcohol.' },
    { id: 159, category: 'priority', question: 'Construction vehicles working have priority in work zones.', answer: true, explanation: 'Give way to macchine operatrici (construction equipment) in their work area.' },
    { id: 160, category: 'parking', question: 'White parking lines indicate free public parking.', answer: true, explanation: 'Strisce bianche = free parking (usually with time limits).' },
    
    { id: 161, category: 'signs', question: 'A red circle with no symbols means no vehicles allowed.', answer: true, explanation: 'Divieto di transito - no vehicles may enter.' },
    { id: 162, category: 'safety', question: 'Worn tires increase stopping distance.', answer: true, explanation: 'Minimum tread depth is 1.6mm. Worn tires are dangerous in wet conditions.' },
    { id: 163, category: 'speed', question: 'Driving 50 km/h over the limit results in license suspension.', answer: true, explanation: 'Exceeding limits by more than 40 km/h = license suspension for serious violation.' },
    { id: 164, category: 'priority', question: 'Cyclists can ride on highways.', answer: false, explanation: 'Bicycles are prohibited on autostrade and superstrade.' },
    { id: 165, category: 'documents', question: 'Car insurance covers damage to your own vehicle.', answer: false, explanation: 'Basic RCA only covers third-party damage. Need Kasko for own vehicle.' },
    
    { id: 166, category: 'signs', question: 'A yield sign is shaped like an inverted triangle.', answer: true, explanation: 'Dare precedenza - unique shape makes it recognizable even if covered in snow.' },
    { id: 167, category: 'safety', question: 'ESP (electronic stability program) helps prevent skidding.', answer: true, explanation: 'ESP automatically applies brakes to individual wheels to prevent loss of control.' },
    { id: 168, category: 'speed', question: 'Night driving requires slower speeds due to reduced visibility.', answer: true, explanation: 'You should only drive as fast as you can see to stop safely.' },
    { id: 169, category: 'priority', question: 'Taxis have priority over private vehicles.', answer: false, explanation: 'Taxis follow same rules as private vehicles unless in marked taxi lanes.' },
    { id: 170, category: 'emergency', question: 'Medical emergency number in Italy is 118.', answer: true, explanation: 'Emergenza sanitaria: 118 (or use unified 112).' },
    
    { id: 171, category: 'signs', question: 'End of speed limit is shown by the limit number with black diagonal lines.', answer: true, explanation: 'Fine limite di velocità - return to general speed limit for road type.' },
    { id: 172, category: 'safety', question: 'You should not drive with arms or feet outside the vehicle.', answer: true, explanation: 'Keep body parts inside the vehicle for safety.' },
    { id: 173, category: 'speed', question: 'The recommended speed is the same as speed limit.', answer: false, explanation: 'Recommended speed (velocità consigliata) is advisory, limit is mandatory.' },
    { id: 174, category: 'priority', question: 'At an intersection with equal roads, turning vehicles yield to straight traffic.', answer: true, explanation: 'When turning, yield to vehicles going straight.' },
    { id: 175, category: 'parking', question: 'You must park in the direction of traffic flow.', answer: true, explanation: 'On two-way streets, park on the right facing traffic direction.' },
    
    { id: 176, category: 'signs', question: 'A sign with a bicycle crossed out means no bicycles allowed.', answer: true, explanation: 'Divieto di transito ai velocipedi - bicycles prohibited.' },
    { id: 177, category: 'safety', question: 'Cruise control should not be used on wet or icy roads.', answer: true, explanation: 'Cruise control can be dangerous in slippery conditions.' },
    { id: 178, category: 'documents', question: 'The insurance certificate must be displayed on the windshield.', answer: false, explanation: 'Insurance can be verified electronically now - display is not mandatory.' },
    { id: 179, category: 'priority', question: 'At equal intersections, vehicles already turning have priority.', answer: false, explanation: 'Vehicles going straight have priority over turning vehicles.' },
    { id: 180, category: 'emergency', question: 'You should not remove a motorcycle helmet from an unconscious rider.', answer: true, explanation: 'Only remove helmet if breathing is obstructed. Moving could cause spine injury.' },
    
    { id: 181, category: 'signs', question: 'Kilometer markers show the distance from the road start point.', answer: true, explanation: 'Cippi chilometrici show progressive distance along the road.' },
    { id: 182, category: 'safety', question: 'Overloading a vehicle is prohibited and dangerous.', answer: true, explanation: 'Exceeding weight limits affects braking and handling.' },
    { id: 183, category: 'speed', question: 'In parking areas, speed should not exceed 10 km/h.', answer: false, explanation: 'There is no specific limit but you must drive very slowly for pedestrian safety.' },
    { id: 184, category: 'priority', question: 'Snow plows have priority when clearing roads.', answer: true, explanation: 'Give way to spartineve and stay behind them when they are working.' },
    { id: 185, category: 'alcohol', question: 'Drinking water between alcoholic drinks prevents intoxication.', answer: false, explanation: 'Water does not reduce alcohol absorption or blood alcohol level.' },
    
    { id: 186, category: 'signs', question: 'A sign with a plus symbol indicates first aid available.', answer: true, explanation: 'Pronto soccorso - first aid station or hospital nearby.' },
    { id: 187, category: 'safety', question: 'Load on roof rack must be secured and not exceed vehicle width.', answer: true, explanation: 'Unsecured loads are dangerous. Must not stick out beyond mirrors.' },
    { id: 188, category: 'documents', question: 'Points lost can be recovered through safe driving courses.', answer: true, explanation: 'Approved courses can restore points. Max 6 points can be recovered.' },
    { id: 189, category: 'priority', question: 'Electric vehicles have priority over petrol vehicles.', answer: false, explanation: 'Vehicle type does not determine priority - same rules for all.' },
    { id: 190, category: 'parking', question: 'Parking in emergency vehicle zones is always prohibited.', answer: true, explanation: 'Areas marked for emergency vehicles must always be kept clear.' },
    
    { id: 191, category: 'signs', question: 'A sign with a gas pump indicates a fuel station.', answer: true, explanation: 'Rifornimento - petrol station ahead.' },
    { id: 192, category: 'safety', question: 'Broken windshield wipers can be a hazard in rain.', answer: true, explanation: 'Tergicristalli must work properly - required for safe driving in rain.' },
    { id: 193, category: 'speed', question: 'School zone speed limits apply only during school hours.', answer: false, explanation: 'School zone limits typically apply at all times unless signs specify hours.' },
    { id: 194, category: 'priority', question: 'Pedestrians crossing against the light lose their right of way.', answer: false, explanation: 'Drivers must still try to avoid accidents even if pedestrians violate rules.' },
    { id: 195, category: 'emergency', question: 'Police emergency number in Italy is 113.', answer: true, explanation: 'Polizia di Stato: 113 (or use unified 112).' },
    
    { id: 196, category: 'signs', question: 'A sign showing car with skid marks warns of slippery road.', answer: true, explanation: 'Strada sdrucciolevole - road surface may be slippery.' },
    { id: 197, category: 'safety', question: 'You should keep both hands on the steering wheel.', answer: true, explanation: 'Proper hand position (9 and 3) gives best control.' },
    { id: 198, category: 'speed', question: 'Speedometer readings are always accurate.', answer: false, explanation: 'Speedometers may show slightly higher than actual speed.' },
    { id: 199, category: 'priority', question: 'Delivery vehicles have priority when unloading.', answer: false, explanation: 'Delivery vehicles must follow parking rules - no special priority.' },
    { id: 200, category: 'documents', question: 'You need a toll pass for all Italian highways.', answer: false, explanation: 'You can pay cash at toll booths, but Telepass makes it faster.' },
    
    { id: 201, category: 'signs', question: 'Signs with white text on brown background show tourist information.', answer: true, explanation: 'Brown tourist signs guide you to cultural and recreational attractions.' },
    { id: 202, category: 'safety', question: 'Blind spot monitoring systems replace the need to check manually.', answer: false, explanation: 'Technology assists but never replaces checking mirrors and over shoulder.' },
    { id: 203, category: 'speed', question: 'Average speed cameras only measure speed at camera locations.', answer: false, explanation: 'Tutor systems calculate average speed over distance - cannot speed between them.' },
    { id: 204, category: 'priority', question: 'On multi-lane roads, the right lane is for slower traffic.', answer: true, explanation: 'Keep right except when overtaking. Left lanes are for passing.' },
    { id: 205, category: 'emergency', question: 'Call 112 for any type of emergency in Italy.', answer: true, explanation: '112 is the unified European emergency number that routes to all services.' }
);

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PatenteData;
}

