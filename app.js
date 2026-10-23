// Shared Phase 1 Daily APT & Mobility Protocol (Run on Days 1–6)
const PHASE_1_APT_PREP = [
  {
    id: "apt-couch",
    code: "P1.A",
    name: "Rear-Foot Elevated Couch Stretch",
    muscle: "Psoas & Rectus Femoris",
    sets: 2,
    reps: "60s / side",
    tempo: "Iso Hold",
    rest: 30,
    img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80",
    directive: "Place your back knee against a wall or bench pad with your front foot planted in a lunge. Squeeze your trailing glute maximally before bringing your torso upright.",
    aptCue: "Tuck your tailbone under (posterior tilt) and stack ribs over hips. Never arch your lower back to force your torso upright.",
    intensifier: "Contract your back quad pushing into the pad for 5 seconds, then relax deeper into the stretch."
  },
  {
    id: "apt-deadbug",
    code: "P1.B",
    name: "Deadbug Isometric Hold",
    muscle: "Deep Anterior Core & Obliques",
    sets: 3,
    reps: "8 / side",
    tempo: "3-3-1-0",
    rest: 45,
    img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=80",
    directive: "Lie on your back, arms locked toward the ceiling, knees at 90°. Exhale all air to crush your lower back into the mat, then extend opposite arm and leg 2 inches above the floor.",
    aptCue: "If your lower back arches even 1 cm off the floor, shorten the leg extension range immediately.",
    intensifier: "Hold the bottom extended position for a full 3-second forceful exhale on every rep."
  },
  {
    id: "apt-9090",
    code: "P1.C",
    name: "90/90 Active Hip Switch + Dead Hang",
    muscle: "Hip Capsule & Thoracic Decompression",
    sets: 2,
    reps: "10 switches + 30s hang",
    tempo: "Controlled",
    rest: 30,
    img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80",
    directive: "Sit tall with knees bent at 90° angles on the floor and rotate knees side-to-side without leaning back. Immediately follow with a 30-second passive dead hang from a pull-up bar.",
    aptCue: "During the dead hang, exhale and slightly tuck your pelvis so your spine lengthens downward.",
    intensifier: "Perform hip switches hands-free with arms held straight out in front of your sternum."
  }
];

// Full 7-Day Master Program Data
const WORKOUT_DAYS = [
  {
    dayNumber: 1,
    shortDay: "MON",
    title: "Push A + Pelvic Core + Zone 2",
    focus: "Upper Chest, Anterior/Lateral Delts, Triceps & Active Posterior Tilt",
    summary: "22 high-density working sets pairing heavy pressing with spinal decompression and pelvic curls, finished with suitcase carries and 20m Zone 2 incline walk.",
    phases: {
      phase1: PHASE_1_APT_PREP,
      phase2: [
        {
          id: "d1-incline-db",
          code: "A1",
          name: "30° Incline Dumbbell Press",
          muscle: "Clavicular Pectorals",
          sets: 4,
          reps: "8–10",
          tempo: "3-1-1-0",
          rest: 45,
          img: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=800&q=80",
          directive: "Set bench to 30°. Lower dumbbells under a 3-second count until handles align with upper chest for a deep stretch, then drive up without clanging weights.",
          aptCue: "Put your feet up on weight plates or the bench edge so your lumbar spine stays glued to the pad.",
          intensifier: "Final Set Rest-Pause: Hit failure at 8–10 reps, rest 15s, crank out 3–4 bonus reps."
        },
        {
          id: "d1-pelvic-raise",
          code: "A2",
          name: "Hanging Pelvic Curl Raise",
          muscle: "Rectus Abdominis & Lumbar Decompression",
          sets: 4,
          reps: "10–12",
          tempo: "2-1-2-0",
          rest: 75,
          img: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=800&q=80",
          directive: "Hang from a bar or use a Captain's Chair. Curl your knees up and roll your tailbone upward toward your chest so your lower spine actively rounds at the top.",
          aptCue: "Lifting legs to 90° only works tight hip flexors. Curling the pelvis past 90° is what fixes APT.",
          intensifier: "Add a 2-second peak isometric squeeze at the top of the curl on the last 3 reps."
        },
        {
          id: "d1-machine-chest",
          code: "B1",
          name: "Seated Machine Chest Press",
          muscle: "Mid/Lower Pectorals",
          sets: 4,
          reps: "10–12",
          tempo: "3-1-1-0",
          rest: 45,
          img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
          directive: "Adjust seat so handles align with mid-chest. Control the eccentric return for 3 seconds and stop 1 inch before the weight stack touches.",
          aptCue: "Keep back of head, upper back, and sacrum pressed evenly into the seat pad.",
          intensifier: "Final Set Drop Set: Drop the pin by 30% immediately upon failure and push for 6–8 extra reps."
        },
        {
          id: "d1-db-ohp",
          code: "B2",
          name: "High-Back Seated DB Shoulder Press",
          muscle: "Anterior & Medial Delts",
          sets: 4,
          reps: "10–12",
          tempo: "2-0-1-0",
          rest: 75,
          img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80",
          directive: "Set bench to 80° (one notch below vertical). Press dumbbells overhead in the scapular plane (elbows tucked slightly forward at 30°).",
          aptCue: "Exhale before pressing to lock bottom ribs down; never flare your chest to force a rep.",
          intensifier: "Final Set: Perform 4 bottom-half lengthened partial reps after full-range failure."
        },
        {
          id: "d1-cable-lat",
          code: "C1",
          name: "Cuff Cable Lateral Raise",
          muscle: "Lateral Deltoid",
          sets: 3,
          reps: "12–15",
          tempo: "2-1-2-0",
          rest: 30,
          img: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=80",
          directive: "Set pulley to wrist height and stand slightly sideways so the cable crosses behind your back at the start for maximal stretch.",
          aptCue: "Squeeze glutes and keep knees slightly soft so you don't sway your torso.",
          intensifier: "Final Set: 5 extra bottom-half partial reps from hip to 45°."
        },
        {
          id: "d1-tricep-tri",
          code: "C2",
          name: "Overhead Cable Extension + Pushdown Superset",
          muscle: "Triceps Long & Lateral Heads",
          sets: 3,
          reps: "10–12 + 12–15",
          tempo: "2-1-1-0",
          rest: 60,
          img: "https://images.unsplash.com/photo-1530822847156-5df684ec5ee1?auto=format&fit=crop&w=800&q=80",
          directive: "Perform 10–12 overhead rope extensions for the long head stretch, then immediately step back and crank out 12–15 standard pushdowns.",
          aptCue: "Stagger your stance during overhead extensions so the cable doesn't pull your lower back into an arch.",
          intensifier: "Hold the final rep of the pushdown locked out for a 15-second isometric burn."
        }
      ],
      phase3: [
        {
          id: "d1-suitcase",
          code: "KB.1",
          name: "Heavy Kettlebell Suitcase Carry + RKC Plank",
          muscle: "Quadratus Lumborum, Obliques & Deep Core",
          sets: 3,
          reps: "30m/hand + 30s Plank",
          tempo: "Strict Anti-Tilt",
          rest: 60,
          img: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
          directive: "Walk 30m holding one heavy kettlebell in your right hand without leaning left, switch hands for 30m, then drop directly into a 30-second RKC plank.",
          aptCue: "In the RKC plank, pull elbows toward toes and squeeze glutes at 100% effort so your pelvis tilts posteriorly.",
          intensifier: "Increase KB weight by 4 kg once all 3 rounds feel solid."
        }
      ],
      phase4: [
        {
          id: "d1-z2",
          code: "CARDIO",
          name: "Zone 2 Incline Treadmill Walk",
          muscle: "Aerobic Base & Fat Oxidation",
          sets: 1,
          reps: "20 Minutes",
          tempo: "130–145 BPM",
          rest: 0,
          img: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=800&q=80",
          directive: "Set incline to 8–10% and speed to 4.5–5.5 km/h. Do not hold onto the handrails—swing your arms naturally and breathe through your nose.",
          aptCue: "Lean slightly forward from the ankles (not the waist) and drive through your heels to engage glutes.",
          intensifier: "Maintain strict nasal breathing for the full 20-minute block."
        }
      ]
    }
  },
  {
    dayNumber: 2,
    shortDay: "TUE",
    title: "Pull A + Scapular Control + Zone 2",
    focus: "Lats, Mid-Back Traps/Rhomboids, Rear Delts & Biceps",
    summary: "23 high-density working sets pairing chest-supported rows with straight-arm lat prayers and rear-delt isolation, finished with farmer carries and 20m Zone 2 rower.",
    phases: {
      phase1: PHASE_1_APT_PREP,
      phase2: [
        {
          id: "d2-cs-row",
          code: "A1",
          name: "Chest-Supported Machine or T-Bar Row",
          muscle: "Mid-Back, Rhomboids & Lats",
          sets: 4,
          reps: "8–10",
          tempo: "3-1-1-1",
          rest: 45,
          img: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=800&q=80",
          directive: "Glue your sternum to the pad. Let your shoulder blades protract forward at the bottom for a loaded stretch, then row elbows back and pause 1 second.",
          aptCue: "Do not hyperextend your lower spine off the pad to heave the weight—keep ribs pinned to the cushion.",
          intensifier: "Final Set: After full-range failure, perform 5 protracted-to-midway partial reps."
        },
        {
          id: "d2-lat-prayer",
          code: "A2",
          name: "Cable Rope Lat Prayer Pulldown",
          muscle: "Latissimus Dorsi (Stretch Bias)",
          sets: 4,
          reps: "12–15",
          tempo: "3-1-1-0",
          rest: 75,
          img: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=800&q=80",
          directive: "Hinge 30° forward with a rope or bar on the high pulley. Keep elbows softly locked and sweep hands in a wide arc to your thighs.",
          aptCue: "Exhale hard as the rope hits your thighs to pull your ribcage down into active core flexion.",
          intensifier: "Hold the top overhead lat stretch for a full 2 seconds on every rep."
        },
        {
          id: "d2-lat-pulldown",
          code: "B1",
          name: "Neutral-Grip Lat Pulldown",
          muscle: "Lats & Teres Major",
          sets: 4,
          reps: "8–10",
          tempo: "3-0-1-1",
          rest: 45,
          img: "https://images.unsplash.com/photo-1534367610401-9f5ed68180aa?auto=format&fit=crop&w=800&q=80",
          directive: "Lock thighs tightly under the roller pad. Pull elbows straight down toward your front pockets while keeping your torso at a fixed 10° lean.",
          aptCue: "Avoid turning the pulldown into a lower-back arch; keep abs braced against the thigh pad.",
          intensifier: "Final Set Drop Set: Drop weight 25% and immediately perform 8 slow reps."
        },
        {
          id: "d2-rear-delt",
          code: "B2",
          name: "Reverse Pec-Deck Rear Delt Fly",
          muscle: "Posterior Deltoid & Mid-Traps",
          sets: 4,
          reps: "12–15",
          tempo: "2-1-1-1",
          rest: 75,
          img: "https://images.unsplash.com/photo-1584466977773-e625c37cdd50?auto=format&fit=crop&w=800&q=80",
          directive: "Set handles all the way back. Push your knuckles outward toward the walls rather than squeezing your shoulder blades together first.",
          aptCue: "Press sternum into the pad with neutral neck alignment.",
          intensifier: "Hold peak contraction for 2 seconds on the final 3 reps of each set."
        },
        {
          id: "d2-incline-curl",
          code: "C1",
          name: "45° Incline Dumbbell Curl",
          muscle: "Biceps Long Head",
          sets: 3,
          reps: "10–12",
          tempo: "3-1-1-0",
          rest: 30,
          img: "https://images.unsplash.com/photo-1581009137042-c552e485697a?auto=format&fit=crop&w=800&q=80",
          directive: "Lie back on a 45° bench with arms hanging perpendicular to the floor behind your torso. Curl without letting elbows drift forward.",
          aptCue: "Flex your glutes and keep your lower back flat against the incline pad.",
          intensifier: "Final Set: Stand up after failure and immediately crank out 5 standing hammer curls."
        },
        {
          id: "d2-facepull",
          code: "C2",
          name: "Rope Face Pull with External Rotation Hold",
          muscle: "Rotator Cuff & Lower Traps",
          sets: 3,
          reps: "15",
          tempo: "2-0-1-3",
          rest: 60,
          img: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?auto=format&fit=crop&w=800&q=80",
          directive: "Pull the rope toward your eyebrows while rotating thumbs backward into a double-biceps pose. Hold the back position for 3 seconds.",
          aptCue: "Keep ribcage stacked over pelvis; do not lean backward against the cable stack.",
          intensifier: "Maintain a strict 3-second isometric pause at the forehead on all 15 reps."
        }
      ],
      phase3: [
        {
          id: "d2-farmer",
          code: "KB.2",
          name: "Double Kettlebell Farmer Carry + Scapular Pulls",
          muscle: "Grip, Traps, Core & Lower Traps",
          sets: 4,
          reps: "40m walk + 10 Scap Pulls",
          tempo: "Braced Walk",
          rest: 60,
          img: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&w=800&q=80",
          directive: "Grab two heavy kettlebells (20–28 kg each) and walk 40m with short steps. Immediately hang from a pull-up bar and perform 10 straight-arm scapular depressions.",
          aptCue: "Pull your ribs down toward your belt buckle before picking up the bells.",
          intensifier: "Zero grip readjustments during the entire 40m carry."
        }
      ],
      phase4: [
        {
          id: "d2-z2-row",
          code: "CARDIO",
          name: "Zone 2 Rowing Machine or Cross-Trainer",
          muscle: "Cardiovascular Endurance",
          sets: 1,
          reps: "20 Minutes",
          tempo: "18–22 SPM",
          rest: 0,
          img: "https://images.unsplash.com/photo-1519505907962-0a6cb0167c73?auto=format&fit=crop&w=800&q=80",
          directive: "Maintain a steady, rhythmic pace at 130–145 BPM. Focus on leg drive first, slight hip swing second, arm pull last.",
          aptCue: "Sit on your sit-bones on the rower seat; do not slump or over-arch at the finish.",
          intensifier: "Keep split time within a 3-second window for all 20 minutes."
        }
      ]
    }
  },
  {
    dayNumber: 3,
    shortDay: "WED",
    title: "Legs A (Quad & Glute) + HIIT Rower",
    focus: "Hamstring Pre-Exhaust, Quads, Glutes, Adductors & VO2 Max",
    summary: "Starts with hamstring curls to pull the pelvis into alignment, moves into Hack Squats, Prying Goblet holds, Bulgarian Split Squats, and closes with KB Swings & 30/60 HIIT.",
    phases: {
      phase1: PHASE_1_APT_PREP,
      phase2: [
        {
          id: "d3-leg-curl",
          code: "A1",
          name: "Seated or Lying Leg Curl",
          muscle: "Hamstrings (Pelvic Stabilizer)",
          sets: 4,
          reps: "10–12",
          tempo: "3-1-1-1",
          rest: 45,
          img: "https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?auto=format&fit=crop&w=800&q=80",
          directive: "Lock the thigh pad down tightly. Curl heels all the way under the seat, pause 1 second, and take 3 full seconds on the way up.",
          aptCue: "Training hamstrings first pulls your ischial tuberosities (sit bones) down, reducing APT before you squat.",
          intensifier: "Final Set: 10 full reps + 5 lengthened partial reps + 10s mid-range iso hold."
        },
        {
          id: "d3-goblet-pry",
          code: "A2",
          name: "Loaded Prying Goblet Squat Hold",
          muscle: "Hip Mobility, Ankles & Core",
          sets: 3,
          reps: "45s Bottom Hold",
          tempo: "Isometric",
          rest: 60,
          img: "https://images.unsplash.com/photo-1566241142559-40e1dab266c6?auto=format&fit=crop&w=800&q=80",
          directive: "Hold a 16–24 kg kettlebell at your chest, sink into the bottom of a deep squat, and use your elbows to push your knees outward for 45 seconds.",
          aptCue: "Keep your torso upright and let the kettlebell counterbalance you so your pelvis untucks cleanly.",
          intensifier: "Breathe deeply into your belly for 8 slow breaths at the bottom."
        },
        {
          id: "d3-hack-squat",
          code: "B1",
          name: "Machine Hack Squat or 45° Leg Press",
          muscle: "Quadriceps & Glutes",
          sets: 4,
          reps: "8–10",
          tempo: "3-1-1-0",
          rest: 45,
          img: "https://images.unsplash.com/photo-1534438097545-a2c22c57f2ad?auto=format&fit=crop&w=800&q=80",
          directive: "Place feet shoulder-width apart in the middle of the platform. Lower for 3 seconds until hamstrings cover calves, pause 1s, and drive up.",
          aptCue: "Press your lower back flat into the back pad like a postage stamp—never let your tailbone peel off.",
          intensifier: "Final Set Rest-Pause: Rack weight at failure for 15 seconds, then hit 3–4 bonus reps."
        },
        {
          id: "d3-copenhagen",
          code: "B2",
          name: "Copenhagen Adductor Plank",
          muscle: "Adductors & Pelvic Floor Stability",
          sets: 3,
          reps: "25s / side",
          tempo: "Isometric",
          rest: 75,
          img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
          directive: "Rest your top inner knee on a flat bench while propping on your bottom forearm. Drive your top leg down into the bench to lift hips high.",
          aptCue: "Push hips slightly forward so your body forms a straight line from head to heel.",
          intensifier: "Move the support point from your knee toward your ankle for longer leverage."
        },
        {
          id: "d3-bss",
          code: "C1",
          name: "Dumbbell Bulgarian Split Squat",
          muscle: "Glute Max, Quads & Trailing Hip Stretch",
          sets: 4,
          reps: "8–10 / leg",
          tempo: "3-1-1-0",
          rest: 45,
          img: "https://images.unsplash.com/photo-1434682881908-b43d0467b798?auto=format&fit=crop&w=800&q=80",
          directive: "Elevate rear foot on a bench roller. Lean torso 15° forward and sink straight down until your back knee hovers 1 inch off the floor.",
          aptCue: "Every rep stretches your trailing psoas under load while building unilateral glute strength.",
          intensifier: "Final Set: Drop the dumbbells and immediately perform 8 bodyweight jump/pulse reps per leg."
        },
        {
          id: "d3-calf",
          code: "C2",
          name: "Standing Machine Calf Raise",
          muscle: "Gastrocnemius & Soleus",
          sets: 4,
          reps: "15",
          tempo: "2-3-1-1",
          rest: 60,
          img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80",
          directive: "Lower your heels as far as ankle mobility allows and pause for a strict 3-second stretch at the bottom so the Achilles tendon cannot bounce.",
          aptCue: "Lock knees and glutes straight so your hips don't hinge during the press.",
          intensifier: "Hold the deep bottom stretch for 15 seconds after the 15th rep."
        }
      ],
      phase3: [
        {
          id: "d3-kb-swing",
          code: "KB.3",
          name: "Kettlebell Russian Swing (EMOM)",
          muscle: "Explosive Posterior Chain & Glute Lockout",
          sets: 5,
          reps: "15 reps / minute",
          tempo: "Ballistic Snap",
          rest: 40,
          img: "https://images.unsplash.com/photo-1517963628607-235ccdd5476c?auto=format&fit=crop&w=800&q=80",
          directive: "At the top of every minute for 5 minutes, perform 15 explosive hip-hinge swings to chest height, resting for the remainder of each minute.",
          aptCue: "Lock out the top of every swing like a vertical plank—crush glutes and brace abs so you never lean backward.",
          intensifier: "Progress to a 24 kg kettlebell once all 75 total reps are crisp."
        }
      ],
      phase4: [
        {
          id: "d3-hiit",
          code: "HIIT",
          name: "Rower or Assault Bike 30/60 Intervals",
          muscle: "VO2 Max & Anaerobic Conditioning",
          sets: 10,
          reps: "30s Hard / 60s Easy",
          tempo: "85–90% Output",
          rest: 60,
          img: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?auto=format&fit=crop&w=800&q=80",
          directive: "Warm up 5 minutes easy, then execute 10 rounds of 30 seconds at 85–90% max power followed by 60 seconds of slow recovery pedaling/rowing.",
          aptCue: "Keep core braced during the final 10 seconds of each sprint when fatigue sets in.",
          intensifier: "Try to match your Round 1 wattage/split on Round 10."
        }
      ]
    }
  },
  {
    dayNumber: 4,
    shortDay: "THU",
    title: "Push B (Dip & Delt Bias) + Zone 2",
    focus: "Chest Stretch, Assisted/Bodyweight Dips, Shoulders & Core",
    summary: "Rotates angles from Monday to prioritize flat dumbbell pressing, parallel bar dips, and high-tension cable work, followed by overhead carries and Zone 2.",
    phases: {
      phase1: PHASE_1_APT_PREP,
      phase2: [
        {
          id: "d4-flat-db",
          code: "A1",
          name: "Flat Dumbbell Bench Press",
          muscle: "Sternal Pectorals & Triceps",
          sets: 4,
          reps: "8–10",
          tempo: "3-1-1-0",
          rest: 45,
          img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
          directive: "Tuck elbows at a 45° angle to your torso. Lower dumbbells slowly for 3 seconds to a deep stretch across the pecs and press to lockout.",
          aptCue: "Keep feet planted on plates or bench edge so you press with pecs, not a hyperextended lower back.",
          intensifier: "Final Set Rest-Pause: 15 seconds rest after failure + 3–4 extra reps."
        },
        {
          id: "d4-ab-wheel",
          code: "A2",
          name: "Stability Ball or Ab-Wheel Rollout",
          muscle: "Anti-Extension Anterior Core",
          sets: 4,
          reps: "8–10",
          tempo: "3-1-2-0",
          rest: 75,
          img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=80",
          directive: "Kneel on a pad, tuck your tailbone under hard, and roll forward only as far as you can maintain a slightly rounded or flat lower back.",
          aptCue: "Rollouts are the ultimate anti-APT exercise—if your hips sag or lower back arches, stop shorter.",
          intensifier: "Pause for 2 seconds at your maximum controlled extension."
        },
        {
          id: "d4-dips",
          code: "B1",
          name: "Parallel Bar or Assisted Machine Dip",
          muscle: "Lower Pectorals & Anterior Delts",
          sets: 4,
          reps: "8–12",
          tempo: "3-1-1-0",
          rest: 45,
          img: "https://images.unsplash.com/photo-1598971639058-fab3c3109a00?auto=format&fit=crop&w=800&q=80",
          directive: "Lean torso 20° forward, tuck chin, and lower under a 3-second count until shoulders drop slightly below elbows.",
          aptCue: "Hold your legs slightly in front of your torso (hollow-body position) instead of crossing ankles behind you.",
          intensifier: "Final Set: Add 25% assistance on the machine pin and immediately push 8 burn-out reps."
        },
        {
          id: "d4-pec-fly",
          code: "B2",
          name: "Seated Cable or Pec-Deck Fly",
          muscle: "Pectoral Adduction & Stretch",
          sets: 4,
          reps: "12–15",
          tempo: "3-1-1-1",
          rest: 75,
          img: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=800&q=80",
          directive: "Keep a slight bend in elbows and bring inner elbows together in front of your sternum, pausing 1s in the squeeze and 1s in the stretch.",
          aptCue: "Keep ribs pinned down against the seat back as your arms open wide.",
          intensifier: "Final Set: 6 lengthened partial reps in the back half of the stretch."
        },
        {
          id: "d4-db-lat",
          code: "C1",
          name: "Chest-Supported Incline Lateral Raise",
          muscle: "Medial Deltoid (Zero Momentum)",
          sets: 3,
          reps: "12–15",
          tempo: "2-1-2-0",
          rest: 30,
          img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80",
          directive: "Lie chest-down on a 70° incline bench and raise dumbbells out to the sides so body English is 100% eliminated.",
          aptCue: "Squeeze glutes slightly into the bench so your neck and lower back stay relaxed.",
          intensifier: "Final Set Drop Set: Grab dumbbells 3 kg lighter and hit 10 immediate reps."
        },
        {
          id: "d4-dip-tri",
          code: "C2",
          name: "Single-Arm Cable Tricep Kickback + Overhead Ext",
          muscle: "Triceps Short & Long Head",
          sets: 3,
          reps: "12 / arm",
          tempo: "2-1-1-1",
          rest: 60,
          img: "https://images.unsplash.com/photo-1530822847156-5df684ec5ee1?auto=format&fit=crop&w=800&q=80",
          directive: "Hold the cable cuff directly (no attachment), hinge torso 45°, and lock your upper arm slightly behind your torso for full tricep shortening.",
          aptCue: "Brace your core in the hinge so your pelvis stays neutral.",
          intensifier: "Zero rest when switching between left and right arms."
        }
      ],
      phase3: [
        {
          id: "d4-waiter",
          code: "KB.4",
          name: "Kettlebell Front-Rack Carry + Hollow Hold",
          muscle: "Thoracic Extension, Obliques & Anterior Core",
          sets: 3,
          reps: "35m / side + 30s Hollow",
          tempo: "Strict Control",
          rest: 60,
          img: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
          directive: "Hold one heavy kettlebell in the front-rack position at chest height, walk 35m per arm, then lie on the mat for a 30-second gymnastic hollow-body hold.",
          aptCue: "Front-rack carries force your abs to pull your ribcage down against the weight.",
          intensifier: "Extend arms overhead during the final 10 seconds of the hollow hold."
        }
      ],
      phase4: [
        {
          id: "d4-z2-bike",
          code: "CARDIO",
          name: "Zone 2 Stationary Bike or Incline Walk",
          muscle: "Mitochondrial Density & Recovery",
          sets: 1,
          reps: "20 Minutes",
          tempo: "130–145 BPM",
          rest: 0,
          img: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=800&q=80",
          directive: "Hold a steady 80–90 RPM cadence on the bike or brisk incline walk on the treadmill in strict Zone 2.",
          aptCue: "Adjust bike seat height so knees retain a 25° bend at the bottom of the pedal stroke.",
          intensifier: "Breathe exclusively through the nose for all 20 minutes."
        }
      ]
    }
  },
  {
    dayNumber: 5,
    shortDay: "FRI",
    title: "Pull B (Width & Thickness) + Zone 2",
    focus: "Unilateral Lats, Upper Back Thickness, Brachialis & Grip",
    summary: "Focuses on unilateral dumbbell rows, wide-grip upper back pulldowns, spider curls, and heavy carries to build V-taper width and postural resilience.",
    phases: {
      phase1: PHASE_1_APT_PREP,
      phase2: [
        {
          id: "d5-db-row",
          code: "A1",
          name: "3-Point Heavy Dumbbell Row",
          muscle: "Lats & Mid-Back Thickness",
          sets: 4,
          reps: "8–10 / side",
          tempo: "3-1-1-0",
          rest: 45,
          img: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=800&q=80",
          directive: "Plant one hand on a flat bench with both feet on the floor in a wide athletic stance. Sweep the dumbbell back toward your hip in a J-curve.",
          aptCue: "Keep your spine flat like a tabletop; brace your abs so your lower back doesn't sag between hips and shoulders.",
          intensifier: "Final Set: Rest 15 seconds at failure and hit 4 extra reps per arm."
        },
        {
          id: "d5-bird-dog",
          code: "A2",
          name: "Kettlebell Pullover in Deadbug Bridge",
          muscle: "Lats, Serratus Anterior & Ribcage Control",
          sets: 4,
          reps: "10–12",
          tempo: "3-1-2-0",
          rest: 75,
          img: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=800&q=80",
          directive: "Lie flat on a bench or mat with knees bent at 90° in the air. Lower a kettlebell or dumbbell overhead toward the floor while keeping your lower back glued down.",
          aptCue: "This teaches your lats to stretch overhead without your lumbar spine arching—a game-changer for APT.",
          intensifier: "Pause 2 seconds at the deepest overhead stretch while exhaling."
        },
        {
          id: "d5-wide-pull",
          code: "B1",
          name: "Pronated Wide-Grip Lat Pulldown",
          muscle: "Upper Lats & Teres Major",
          sets: 4,
          reps: "10–12",
          tempo: "3-0-1-1",
          rest: 45,
          img: "https://images.unsplash.com/photo-1534367610401-9f5ed68180aa?auto=format&fit=crop&w=800&q=80",
          directive: "Grip the bar 1.5x shoulder width. Drive elbows out and down toward your ribs while keeping chest tall.",
          aptCue: "Keep your pelvis tucked under the thigh pad; don't swing back with momentum.",
          intensifier: "Final Set Drop Set: Reduce weight 25% for 8 controlled reps."
        },
        {
          id: "d5-shrug-row",
          code: "B2",
          name: "Incline Bench Dumbbell Kelso Shrug",
          muscle: "Mid & Upper Traps / Rhomboids",
          sets: 4,
          reps: "12–15",
          tempo: "2-1-1-2",
          rest: 75,
          img: "https://images.unsplash.com/photo-1584466977773-e625c37cdd50?auto=format&fit=crop&w=800&q=80",
          directive: "Lie chest-down on a 45° bench holding heavy dumbbells. With straight arms, retract your shoulder blades hard up and back, pausing 2 seconds.",
          aptCue: "Keep your lower ribs pressed into the bench pad.",
          intensifier: "Hold the final rep retracted for a 10-second isometric squeeze."
        },
        {
          id: "d5-spider-curl",
          code: "C1",
          name: "Chest-Supported Spider Curl",
          muscle: "Biceps Short Head (Peak Contraction)",
          sets: 3,
          reps: "10–12",
          tempo: "2-1-1-1",
          rest: 30,
          img: "https://images.unsplash.com/photo-1581009137042-c552e485697a?auto=format&fit=crop&w=800&q=80",
          directive: "Lie chest-down on an incline bench with arms hanging straight down in front of you. Curl dumbbells up and pause 1 second at the top.",
          aptCue: "Zero lower-back involvement thanks to chest support.",
          intensifier: "Final Set: 6 partial reps at the bottom after full failure."
        },
        {
          id: "d5-hammer",
          code: "C2",
          name: "Cable Rope Hammer Curl + Reverse Wrist Extension",
          muscle: "Brachialis & Forearm Extensors",
          sets: 3,
          reps: "12–15",
          tempo: "2-1-1-0",
          rest: 60,
          img: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?auto=format&fit=crop&w=800&q=80",
          directive: "Curl the rope from the low pulley with thumbs pointing up. Keep elbows pinned to your sides.",
          aptCue: "Squeeze glutes so you don't sway your hips to start the curl.",
          intensifier: "Final Set Drop Set: Drop pin 2 plates and go to failure."
        }
      ],
      phase3: [
        {
          id: "d5-offset-carry",
          code: "KB.5",
          name: "Offset Kettlebell Carry + Active Hang",
          muscle: "Rotational Core & Grip Endurance",
          sets: 4,
          reps: "35m / side + 30s Hang",
          tempo: "Braced Walk",
          rest: 60,
          img: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&w=800&q=80",
          directive: "Carry one heavy KB at your side (farmer) and a lighter KB in front-rack on the opposite side for 35m, then switch sides.",
          aptCue: "Keep shoulders level and ribs stacked over pelvis.",
          intensifier: "Finish each round with a 30-second active bar hang."
        }
      ],
      phase4: [
        {
          id: "d5-z2",
          code: "CARDIO",
          name: "Zone 2 Cross-Trainer or Incline Walk",
          muscle: "Aerobic Base & Recovery",
          sets: 1,
          reps: "20 Minutes",
          tempo: "130–145 BPM",
          rest: 0,
          img: "https://images.unsplash.com/photo-1519505907962-0a6cb0167c73?auto=format&fit=crop&w=800&q=80",
          directive: "20 minutes continuous steady-state cardio in Zone 2 to flush metabolites before Saturday's heavy posterior leg day.",
          aptCue: "Maintain tall posture and nasal breathing.",
          intensifier: "Zero breaks for the full 20-minute block."
        }
      ]
    }
  },
  {
    dayNumber: 6,
    shortDay: "SAT",
    title: "Legs B (Posterior & Hinge) + HIIT",
    focus: "Glutes, Hamstrings, Hip Hinge Mechanics & High-Output Conditioning",
    summary: "Directly targets the weak links of Anterior Pelvic Tilt—glutes and hamstrings—using Dumbbell RDLs, Hip Thrusts, Glute-Biased Leg Press, KB Swings, and HIIT.",
    phases: {
      phase1: PHASE_1_APT_PREP,
      phase2: [
        {
          id: "d6-rdl",
          code: "A1",
          name: "Dumbbell Romanian Deadlift (RDL)",
          muscle: "Hamstrings & Glute Max (Lengthened)",
          sets: 4,
          reps: "8–10",
          tempo: "3-1-1-0",
          rest: 45,
          img: "https://images.unsplash.com/photo-1534438097545-a2c22c57f2ad?auto=format&fit=crop&w=800&q=80",
          directive: "Keep a 15° soft bend in your knees and push your hips straight backward toward the wall behind you. Stop lowering the exact millisecond your hips stop moving back.",
          aptCue: "Do NOT chase the floor by arching or rounding your lower back. Usually mid-shin is the true hamstring end-range.",
          intensifier: "Hold the bottom hamstring stretch for a full 2-second pause on every rep."
        },
        {
          id: "d6-plank-saw",
          code: "A2",
          name: "Forearm Plank Body Saw",
          muscle: "Deep Transverse Abdominis",
          sets: 4,
          reps: "10–12 slow saws",
          tempo: "2-1-2-0",
          rest: 75,
          img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
          directive: "In a forearm plank, rock your body 4 inches backward and forward by pushing through your forearms and ankles while keeping your pelvis tucked.",
          aptCue: "Keep glutes squeezed so your lower back never sags as your shoulders shift behind your elbows.",
          intensifier: "Hold the furthest backward position for 10 seconds on the last rep."
        },
        {
          id: "d6-hip-thrust",
          code: "B1",
          name: "Machine or Dumbbell Hip Thrust",
          muscle: "Gluteus Maximus (Shortened Peak)",
          sets: 4,
          reps: "10–12",
          tempo: "2-0-1-2",
          rest: 45,
          img: "https://images.unsplash.com/photo-1434682881908-b43d0467b798?auto=format&fit=crop&w=800&q=80",
          directive: "Anchor your shoulder blades on a bench pad. Drive through your heels to lock out your hips and hold the top contraction for 2 full seconds.",
          aptCue: "Keep your chin tucked and eyes forward so you scoop your pelvis upward rather than arching your lower back.",
          intensifier: "Final Set: Hold the top glute lockout for a 15-second isometric burn after the 12th rep."
        },
        {
          id: "d6-leg-press-glute",
          code: "B2",
          name: "High-and-Wide Foot 45° Leg Press",
          muscle: "Glutes, Adductors & Quads",
          sets: 4,
          reps: "10–12",
          tempo: "3-1-1-0",
          rest: 75,
          img: "https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?auto=format&fit=crop&w=800&q=80",
          directive: "Place feet high and wide on the sled platform with toes turned out 15°. Lower until knees track outside your ribs.",
          aptCue: "Stop lowering before your sacrum curls off the seat pad.",
          intensifier: "Final Set Rest-Pause: Rack sled for 15s at failure, then hit 4 bonus reps."
        },
        {
          id: "d6-leg-ext",
          code: "C1",
          name: "Seated Leg Extension",
          muscle: "Rectus Femoris & Vastus Medialis",
          sets: 3,
          reps: "12–15",
          tempo: "2-1-1-1",
          rest: 30,
          img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80",
          directive: "Pull yourself down into the seat using the side handles. Extend knees fully, pause 1 second at the top, and lower under control.",
          aptCue: "Keep hips firmly planted in the seat crease.",
          intensifier: "Final Set Drop Set: Drop weight 30% twice (triple drop set) to complete quad exhaustion."
        },
        {
          id: "d6-seated-calf",
          code: "C2",
          name: "Seated Calf Raise",
          muscle: "Soleus & Ankle Stability",
          sets: 4,
          reps: "15",
          tempo: "2-3-1-1",
          rest: 60,
          img: "https://images.unsplash.com/photo-1566241142559-40e1dab266c6?auto=format&fit=crop&w=800&q=80",
          directive: "Pause 3 seconds in the bottom stretch on every rep before driving all the way onto your big toes.",
          aptCue: "Sit tall without rocking your torso.",
          intensifier: "Add 5 bottom-half pulses at the end of each set."
        }
      ],
      phase3: [
        {
          id: "d6-kb-clean",
          code: "KB.6",
          name: "Single-Arm Kettlebell Swing + Goblet March",
          muscle: "Anti-Rotation Hip Power",
          sets: 5,
          reps: "10 / arm (EMOM)",
          tempo: "Explosive",
          rest: 40,
          img: "https://images.unsplash.com/photo-1517963628607-235ccdd5476c?auto=format&fit=crop&w=800&q=80",
          directive: "Perform 10 one-handed swings on the left (minutes 1, 3) and right (minutes 2, 4), finishing Minute 5 with 15 two-handed swings.",
          aptCue: "Resist shoulder rotation as the single bell pulls you forward; snap hips into a vertical plank.",
          intensifier: "Snap glutes hard enough that the bell floats weightlessly at chest height."
        }
      ],
      phase4: [
        {
          id: "d6-hiit-2",
          code: "HIIT",
          name: "Assault Bike or Rower Pyramid Intervals",
          muscle: "Peak Cardiovascular Output",
          sets: 1,
          reps: "20 Minutes Total",
          tempo: "30/30 Intervals",
          rest: 30,
          img: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?auto=format&fit=crop&w=800&q=80",
          directive: "5m warm-up, then 12 rounds of 30 seconds hard / 30 seconds easy recovery, finishing with a 3-minute cooldown walk.",
          aptCue: "Exhale fully during the 30-second recovery windows to drop heart rate fast.",
          intensifier: "Empty the tank on Round 12."
        }
      ]
    }
  },
  {
    dayNumber: 7,
    shortDay: "SUN",
    title: "Active Recovery & Systemic Reset",
    focus: "Outdoor Zone 1 Steps, Myofascial Release & Parasympathetic Down-Regulation",
    summary: "Stay out of the weight room so muscle protein synthesis, glycogen resynthesis, and central nervous system recovery complete before Monday.",
    phases: {
      phase1: [
        {
          id: "d7-mobility",
          code: "RESET.1",
          name: "Full Couch Stretch & Thoracic Foam Roll",
          muscle: "Hip Flexors, Quads & Upper Back",
          sets: 2,
          reps: "90s / side",
          tempo: "Slow Nasal Breathing",
          rest: 30,
          img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80",
          directive: "Spend 90 seconds per side in the Couch Stretch and 3 minutes rolling your thoracic spine and scapular border.",
          aptCue: "Focus on 4-second inhales and 8-second exhales to down-regulate sympathetic tone.",
          intensifier: "Zero soreness chasing—keep tension gentle and restorative."
        }
      ],
      phase2: [],
      phase3: [],
      phase4: [
        {
          id: "d7-walk",
          code: "STEPS",
          name: "Outdoor Zone 1 Walk (8,000–10,000 Steps)",
          muscle: "Active Lymphatic & Blood Flow Recovery",
          sets: 1,
          reps: "45–60 Mins",
          tempo: "Easy Pace",
          rest: 0,
          img: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=800&q=80",
          directive: "Walk outdoors at a relaxed conversational pace to drive blood flow into sore legs and keep your weekly caloric deficit effortless.",
          aptCue: "Let your arms swing freely and push off your back big toe to naturally extend the hip.",
          intensifier: "Hydrate with electrolytes and hit your 160–170g protein target even on rest day."
        }
      ]
    }
  }
];

const PHASE_META = {
  phase1: { time: "00–15 MIN", title: "Phase 1: APT & Mobility Reset", sub: "Stack ribs over pelvis and unlock hip flexors before touching iron" },
  phase2: { time: "15–60 MIN", title: "Phase 2: High-Density Paired Supersets", sub: "Alternate A1/A2, B1/B2, C1/C2 so one muscle works while the other recovers" },
  phase3: { time: "60–70 MIN", title: "Phase 3: Kettlebell & Bodyweight Control", sub: "Bridge raw hypertrophy into anti-rotational core and dynamic glute power" },
  phase4: { time: "70–90 MIN", title: "Phase 4: Polarized Cardio Engine", sub: "Zone 2 aerobic base on Push/Pull days; VO2 Max HIIT on Leg days" }
};

// State Management
let state = {
  selectedDay: 1,
  selectedPhase: "all",
  savageMode: true, // Week 2+ intensifiers enabled by default
  completedSets: JSON.parse(localStorage.getItem("protocol90_sets") || "{}"),
  loggedWeights: JSON.parse(localStorage.getItem("protocol90_weights") || "{}")
};

// Rest Timer State
let timerInterval = null;
let remainingSeconds = 0;

function initApp() {
  // Default to current weekday (Mon=1 ... Sun=7)
  const jsDay = new Date().getDay();
  state.selectedDay = jsDay === 0 ? 7 : jsDay;

  renderDaySelector();
  bindStaticEvents();
  renderCurrentDay();
}

function saveState() {
  localStorage.setItem("protocol90_sets", JSON.stringify(state.completedSets));
  localStorage.setItem("protocol90_weights", JSON.stringify(state.loggedWeights));
}

function renderDaySelector() {
  const nav = document.getElementById("daySelector");
  nav.innerHTML = WORKOUT_DAYS.map(d => `
    <button class="day-btn ${d.dayNumber === state.selectedDay ? "active" : ""}" data-day="${d.dayNumber}">
      <div class="day-btn-top">
        <span>DAY ${d.dayNumber}</span>
        <span>${d.shortDay}</span>
      </div>
      <div class="day-btn-title">${d.title.split("+")[0].trim()}</div>
    </button>
  `).join("");

  nav.querySelectorAll(".day-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      state.selectedDay = Number(btn.dataset.day);
      renderDaySelector();
      renderCurrentDay();
    });
  });
}

function renderCurrentDay() {
  const dayObj = WORKOUT_DAYS.find(d => d.dayNumber === state.selectedDay);
  const hero = document.getElementById("dayHero");

  hero.innerHTML = `
    <div>
      <span class="day-hero-badge">DAY ${dayObj.dayNumber} // ${dayObj.shortDay}</span>
      <h2>${dayObj.title}</h2>
      <p>${dayObj.summary}</p>
    </div>
    <button class="reset-day-btn" id="resetDayBtn">Reset Day Checkmarks</button>
  `;

  document.getElementById("resetDayBtn").addEventListener("click", () => {
    Object.keys(dayObj.phases).forEach(pk => {
      dayObj.phases[pk].forEach(ex => {
        delete state.completedSets[`d${dayObj.dayNumber}_${ex.id}`];
      });
    });
    saveState();
    renderCurrentDay();
  });

  const container = document.getElementById("workoutContainer");
  container.innerHTML = "";

  const phaseKeys = state.selectedPhase === "all"
    ? ["phase1", "phase2", "phase3", "phase4"]
    : [state.selectedPhase];

  phaseKeys.forEach(pk => {
    const exercises = dayObj.phases[pk] || [];
    if (!exercises.length) return;

    const meta = PHASE_META[pk];
    const section = document.createElement("section");
    section.className = "phase-section";

    section.innerHTML = `
      <div class="phase-header">
        <div class="phase-title-group">
          <span class="phase-time-tag">${meta.time}</span>
          <h3 class="phase-title">${meta.title}</h3>
        </div>
        <span class="phase-subtitle">${meta.sub}</span>
      </div>
      <div class="cards-grid">
        ${exercises.map(ex => renderExerciseCard(dayObj.dayNumber, ex)).join("")}
      </div>
    `;

    container.appendChild(section);
  });

  bindCardEvents(dayObj.dayNumber);
  updateDayProgress(dayObj);
}

function renderExerciseCard(dayNum, ex) {
  const storageKey = `d${dayNum}_${ex.id}`;
  const doneArr = state.completedSets[storageKey] || [];
  const savedWeight = state.loggedWeights[storageKey] || "";
  const allSetsDone = doneArr.length >= ex.sets;

  const setButtonsHtml = Array.from({ length: ex.sets }, (_, i) => {
    const setIndex = i + 1;
    const isDone = doneArr.includes(setIndex);
    return `<button class="set-pill ${isDone ? "done" : ""}" data-key="${storageKey}" data-set="${setIndex}" data-rest="${ex.rest}">S${setIndex}</button>`;
  }).join("");

  const intensifierText = state.savageMode
    ? `<strong>🔥 WEEK 2+ SAVAGE INTENSIFIER</strong>${ex.intensifier}`
    : `<strong>🛡️ WEEK 1 BASE ADAPTATION</strong>Stop 1–2 reps shy of failure with clean form. Save final-set intensifiers for Week 2.`;

  const ytQuery = encodeURIComponent(`${ex.name} exercise form tutorial`);

  return `
    <article class="exercise-card ${allSetsDone ? "card-completed" : ""}" id="card-${storageKey}">
      <div class="card-media">
        <img src="${ex.img}" alt="${ex.name}" loading="lazy" />
        <div class="card-media-overlay"></div>
        <span class="superset-badge">${ex.code}</span>
        <a class="video-demo-link" href="https://www.youtube.com/results?search_query=${ytQuery}" target="_blank" rel="noopener">▶ Form Video</a>
        <div class="card-title-overlay">
          <div class="muscle-tag">${ex.muscle}</div>
          <h4 class="exercise-name">${ex.name}</h4>
        </div>
      </div>

      <div class="card-body">
        <div class="prescription-bar">
          <div class="rx-item">
            <span class="rx-label">SETS × REPS</span>
            <span class="rx-value">${ex.sets} × ${ex.reps}</span>
          </div>
          <div class="rx-item">
            <span class="rx-label">TEMPO</span>
            <span class="rx-value">${ex.tempo}</span>
          </div>
          <div class="rx-item">
            <span class="rx-label">REST</span>
            <span class="rx-value">${ex.rest > 0 ? ex.rest + "s" : "CONT."}</span>
          </div>
        </div>

        <p class="directive-text">${ex.directive}</p>

        <div class="apt-callout">
          <strong>🎯 PELVIC / APT LOCK</strong>
          ${ex.aptCue}
        </div>

        <div class="intensifier-callout ${state.savageMode ? "" : "week1-muted"}">
          ${intensifierText}
        </div>

        <div class="card-footer">
          <div class="set-pills">${setButtonsHtml}</div>
          <input type="text" class="load-input" placeholder="kg / pin" value="${savedWeight}" data-weight-key="${storageKey}" aria-label="Log weight for ${ex.name}" />
        </div>
      </div>
    </article>
  `;
}

function bindCardEvents(dayNum) {
  const dayObj = WORKOUT_DAYS.find(d => d.dayNumber === dayNum);

  document.querySelectorAll(".set-pill").forEach(btn => {
    btn.addEventListener("click", () => {
      const key = btn.dataset.key;
      const setNum = Number(btn.dataset.set);
      const restSec = Number(btn.dataset.rest);

      if (!state.completedSets[key]) state.completedSets[key] = [];
      const idx = state.completedSets[key].indexOf(setNum);

      if (idx > -1) {
        state.completedSets[key].splice(idx, 1);
        btn.classList.remove("done");
      } else {
        state.completedSets[key].push(setNum);
        btn.classList.add("done");
        if (restSec > 0) startRestTimer(restSec);
      }

      saveState();
      updateDayProgress(dayObj);

      // Highlight card if all sets complete
      const card = document.getElementById(`card-${key}`);
      const totalPills = card.querySelectorAll(".set-pill").length;
      if (state.completedSets[key].length >= totalPills) {
        card.classList.add("card-completed");
      } else {
        card.classList.remove("card-completed");
      }
    });
  });

  document.querySelectorAll(".load-input").forEach(input => {
    input.addEventListener("input", () => {
      state.loggedWeights[input.dataset.weightKey] = input.value;
      saveState();
    });
  });
}

function updateDayProgress(dayObj) {
  let totalSets = 0;
  let completed = 0;

  Object.keys(dayObj.phases).forEach(pk => {
    dayObj.phases[pk].forEach(ex => {
      totalSets += ex.sets;
      const doneArr = state.completedSets[`d${dayObj.dayNumber}_${ex.id}`] || [];
      completed += Math.min(doneArr.length, ex.sets);
    });
  });

  const pct = totalSets ? Math.round((completed / totalSets) * 100) : 0;
  document.getElementById("dayProgressText").textContent = `${pct}%`;
}

function bindStaticEvents() {
  // Intensity Mode Toggle (Week 1 vs Week 2+)
  const toggleBtn = document.getElementById("intensityToggle");
  const modeLabel = document.getElementById("modeLabel");

  toggleBtn.addEventListener("click", () => {
    state.savageMode = !state.savageMode;
    toggleBtn.classList.toggle("active", state.savageMode);
    modeLabel.textContent = state.savageMode ? "WEEK 2+ SAVAGE" : "WEEK 1 BASE";
    renderCurrentDay();
  });

  // Phase Filter Tabs
  document.querySelectorAll(".phase-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".phase-tab").forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      state.selectedPhase = tab.dataset.phase;
      renderCurrentDay();
    });
  });

  // Floating Rest Timer Buttons
  document.querySelectorAll(".timer-btn[data-sec]").forEach(btn => {
    btn.addEventListener("click", () => startRestTimer(Number(btn.dataset.sec)));
  });

  document.getElementById("timerStopBtn").addEventListener("click", stopRestTimer);
}

function startRestTimer(seconds) {
  clearInterval(timerInterval);
  remainingSeconds = seconds;
  const pulse = document.getElementById("timerPulse");
  pulse.classList.add("running");
  updateTimerUI();

  timerInterval = setInterval(() => {
    remainingSeconds--;
    updateTimerUI();
    if (remainingSeconds <= 0) {
      clearInterval(timerInterval);
      pulse.classList.remove("running");
      playBeep();
    }
  }, 1000);
}

function stopRestTimer() {
  clearInterval(timerInterval);
  remainingSeconds = 0;
  document.getElementById("timerPulse").classList.remove("running");
  updateTimerUI();
}

function updateTimerUI() {
  const mins = String(Math.floor(remainingSeconds / 60)).padStart(2, "0");
  const secs = String(remainingSeconds % 60).padStart(2, "0");
  document.getElementById("timerClock").textContent = `${mins}:${secs}`;
}

function playBeep() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    [0, 0.22].forEach(delay => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(880, ctx.currentTime + delay);
      gain.gain.setValueAtTime(0.18, ctx.currentTime + delay);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + delay + 0.18);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(ctx.currentTime + delay);
      osc.stop(ctx.currentTime + delay + 0.18);
    });
  } catch (e) {
    // AudioContext blocked if no prior user gesture
  }
}

document.addEventListener("DOMContentLoaded", initApp);
