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
  phase1: { time: "00–15", title: "APT & Mobility", sub: "Stack ribs over pelvis before you touch iron" },
  phase2: { time: "15–60", title: "Paired Supersets", sub: "A1/A2, B1/B2, C1/C2 — one pattern works while the other rests" },
  phase3: { time: "60–70", title: "KB Control", sub: "Carries, planks, and hip snap before the engine work" },
  phase4: { time: "70–90", title: "Cardio Engine", sub: "Zone 2 on push and pull days. Intervals on leg days" }
};

const CHIP_TITLES = {
  1: "Push A",
  2: "Pull A",
  3: "Legs A",
  4: "Push B",
  5: "Pull B",
  6: "Legs B",
  7: "Reset"
};

const DAY_NAMES = ["", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const FEELINGS = ["Crushed it", "Solid", "Grind", "Form focus", "Low energy", "PR territory"];

function todayNumber() {
  const jsDay = new Date().getDay();
  return jsDay === 0 ? 7 : jsDay;
}

function readJSON(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    const parsed = JSON.parse(raw);
    return parsed == null ? fallback : parsed;
  } catch (err) {
    return fallback;
  }
}

function writeJSON(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    // Private mode can block storage.
  }
}

function esc(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function dayByNumber(n) {
  return WORKOUT_DAYS.find(d => d.dayNumber === n);
}

function queueFor(dayObj) {
  return ["phase1", "phase2", "phase3", "phase4"].flatMap(pk =>
    (dayObj.phases[pk] || []).map(ex => ({
      ...ex,
      phase: pk,
      key: `d${dayObj.dayNumber}_${ex.id}`
    }))
  );
}

function formatClock(ms) {
  const total = Math.max(0, Math.floor(ms / 1000));
  const h = Math.floor(total / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = total % 60;
  if (h > 0) return `${h}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

function buzz(pattern) {
  try {
    if (navigator.vibrate) navigator.vibrate(pattern);
  } catch (err) {
    // Optional.
  }
}

let state = {
  view: "home",
  selectedDay: todayNumber(),
  savageMode: readJSON("protocol90_mode", "savage") !== "base",
  logs: readJSON("protocol90_logs", {}),
  session: readJSON("protocol90_session", null)
};

let clockTimer = null;
let wakeLock = null;
let cueOpen = false;

function persist() {
  writeJSON("protocol90_logs", state.logs);
  writeJSON("protocol90_session", state.session);
  writeJSON("protocol90_mode", state.savageMode ? "savage" : "base");
}

function applyTheme() {
  document.body.classList.toggle("is-savage", state.savageMode);
  document.body.classList.toggle("is-base", !state.savageMode);
}

function dayDone(dayObj) {
  const queue = queueFor(dayObj);
  if (!queue.length) return false;
  return queue.every(ex => state.logs[ex.key]?.completedAt);
}

function dayProgress(dayObj) {
  const queue = queueFor(dayObj);
  const done = queue.filter(ex => state.logs[ex.key]?.completedAt).length;
  return { done, total: queue.length };
}

async function keepAwake(on) {
  try {
    if (on && navigator.wakeLock) {
      wakeLock = await navigator.wakeLock.request("screen");
    } else if (wakeLock) {
      await wakeLock.release();
      wakeLock = null;
    }
  } catch (err) {
    wakeLock = null;
  }
}

function stopClock() {
  clearInterval(clockTimer);
  clockTimer = null;
}

function liveElapsed() {
  const session = state.session;
  if (!session) return 0;
  if (session.status === "working" && session.exerciseStartedAt) {
    return session.elapsedMs + (Date.now() - session.exerciseStartedAt);
  }
  return session.elapsedMs || 0;
}

function render() {
  applyTheme();
  const stage = document.getElementById("stage");
  if (state.view === "session") stage.innerHTML = renderSession();
  else if (state.view === "debrief") stage.innerHTML = renderDebrief();
  else if (state.view === "done") stage.innerHTML = renderDone();
  else stage.innerHTML = renderHome();
  bindView();
}

function renderHome() {
  const day = dayByNumber(state.selectedDay);
  const today = todayNumber();
  const queue = queueFor(day);
  const progress = dayProgress(day);
  const isToday = day.dayNumber === today;
  const session = state.session;
  const canResume = session && session.day === day.dayNumber && session.status !== "done" && session.index < queue.length;
  const media = queue[0]?.img || "";

  return `
    <section class="view view-home">
      <header class="chrome">
        <div class="mark">PROTOCOL <span>90</span></div>
        <button type="button" class="mode-pill${state.savageMode ? " is-on" : ""}" id="modeBtn">
          ${state.savageMode ? "SAVAGE" : "BASE"}
          <span class="mode-dot"></span>
        </button>
      </header>
      <div class="home-body">
        <div class="home-media" style="background-image:url('${esc(media)}')"></div>
        <div class="home-copy">
          <div class="kicker">${isToday ? "Today" : "Selected"} · ${DAY_NAMES[day.dayNumber]}</div>
          <h1>${esc(CHIP_TITLES[day.dayNumber])}</h1>
          <p class="lede">${esc(day.focus)}</p>
          <p class="blurb">${esc(day.summary)}</p>
          <div class="stat-row">
            <div class="stat"><b>${queue.length}</b><span>MOVEMENTS</span></div>
            <div class="stat"><b>90</b><span>MINUTES</span></div>
            <div class="stat"><b>${progress.done}/${progress.total}</b><span>LOGGED</span></div>
          </div>
        </div>
      </div>
      <footer class="home-foot">
        <nav class="day-rail" aria-label="Week">
          ${WORKOUT_DAYS.map(d => `
            <button type="button" class="day-dot${d.dayNumber === day.dayNumber ? " is-on" : ""}${d.dayNumber === today ? " is-today" : ""}${dayDone(d) ? " is-done" : ""}" data-day="${d.dayNumber}">
              <small>${String(d.dayNumber).padStart(2, "0")}</small>
              <b>${d.shortDay}</b>
            </button>
          `).join("")}
        </nav>
        ${canResume ? `<div class="resume-banner">Session waiting at movement ${session.index + 1}</div>` : ""}
        <button type="button" class="primary" id="startBtn">${canResume ? "Continue session" : isToday ? "Start today" : `Start ${CHIP_TITLES[day.dayNumber]}`}</button>
        ${progress.done && !canResume ? `<button type="button" class="ghost-link" id="resetDayBtn">Clear this day’s notes</button>` : ""}
      </footer>
    </section>
  `;
}

function renderSession() {
  const session = state.session;
  const day = dayByNumber(session.day);
  const queue = queueFor(day);
  const ex = queue[session.index];
  const next = queue[session.index + 1];
  const live = session.status === "working";
  const meta = PHASE_META[ex.phase];

  return `
    <section class="view session">
      <div class="session-bg" style="background-image:url('${esc(ex.img)}')"></div>
      <div class="session-top">
        <button type="button" class="icon-btn" id="exitBtn" aria-label="Leave session">✕</button>
        <div class="session-count">${String(session.index + 1).padStart(2, "0")} / ${String(queue.length).padStart(2, "0")}</div>
        <div class="session-count">${esc(CHIP_TITLES[day.dayNumber])}</div>
      </div>
      <div class="session-track"><i style="width:${((session.index) / queue.length) * 100}%"></i></div>
      <div class="session-main">
        <div>
          <div class="phase-line">${esc(meta.title)}</div>
          <div class="ex-code">${esc(ex.code)}</div>
          <h2>${esc(ex.name)}</h2>
          <div class="muscle">${esc(ex.muscle)}</div>
        </div>
        <div>
          <div class="clock-block">
            <div class="clock-label">${live ? "LIVE" : "READY"}</div>
            <div class="clock${live ? " is-live" : ""}" id="workClock">${formatClock(liveElapsed())}</div>
          </div>
          <div class="rx">
            <div><span>WORK</span><b>${esc(ex.sets)} × ${esc(ex.reps)}</b></div>
            <div><span>TEMPO</span><b>${esc(ex.tempo)}</b></div>
            <div><span>REST</span><b>${ex.rest > 0 ? `${esc(ex.rest)}s` : "Cont."}</b></div>
          </div>
          <p class="apt"><em>APT LOCK</em>${esc(ex.aptCue)}</p>
          <button type="button" class="cue-toggle" id="cueBtn">${cueOpen ? "Hide coaching" : "Coaching + finisher"}</button>
          ${cueOpen ? `<div class="cue-panel">${esc(ex.directive)} ${state.savageMode ? esc(ex.intensifier) : "Week 1: stop 1–2 reps shy of failure. Save intensifiers for week 2."}</div>` : ""}
        </div>
      </div>
      <footer class="session-foot">
        <div class="up-next">
          <span>Up next</span>
          <strong>${next ? esc(next.name) : "Session close"}</strong>
        </div>
        <button type="button" class="primary${live ? " danger" : ""}" id="workBtn">${live ? "Stop" : "Start"}</button>
      </footer>
    </section>
  `;
}

function renderDebrief() {
  const session = state.session;
  const day = dayByNumber(session.day);
  const queue = queueFor(day);
  const ex = queue[session.index];
  const next = queue[session.index + 1];
  const draft = session.draft || {};

  return `
    <section class="view debrief">
      <div class="debrief-inner">
        <div class="debrief-ex">${esc(ex.code)} · ${esc(ex.name)}</div>
        <h2>How did that go?</h2>
        <div class="stat-row">
          <div class="stat"><b>${formatClock(session.elapsedMs || 0)}</b><span>WORKED</span></div>
          <div class="stat"><b>${esc(ex.sets)} × ${esc(ex.reps)}</b><span>PRESCRIPTION</span></div>
        </div>
        <div class="felt">
          ${FEELINGS.map(feel => `<button type="button" class="chip${draft.feeling === feel ? " is-on" : ""}" data-feel="${esc(feel)}">${esc(feel)}</button>`).join("")}
        </div>
        <label class="field">
          <span>Load / pin</span>
          <input id="loadInput" type="text" inputmode="decimal" enterkeyhint="done" autocomplete="off" placeholder="e.g. 32 kg" value="${esc(draft.load || "")}" />
        </label>
        <div class="pr-row">
          <span>Mark a PR</span>
          <button type="button" class="switch${draft.pr ? " is-on" : ""}" id="prBtn" aria-pressed="${draft.pr ? "true" : "false"}"><i></i></button>
        </div>
        <label class="field">
          <span>Thoughts</span>
          <textarea id="notesInput" placeholder="What moved, what broke, what to chase next time.">${esc(draft.notes || "")}</textarea>
        </label>
        <div class="next-card">
          <small>Queued</small>
          <strong>${next ? esc(next.name) : "Close the session"}</strong>
        </div>
        <button type="button" class="primary" id="saveNextBtn">${next ? "Save & next" : "Save & finish"}</button>
      </div>
    </section>
  `;
}

function renderDone() {
  const session = state.session;
  const day = dayByNumber(session.day);
  const queue = queueFor(day);
  const notes = queue.map(ex => state.logs[ex.key]).filter(log => log && (log.notes || log.pr || log.feeling));
  const prs = notes.filter(log => log.pr).length;
  const totalMs = queue.reduce((sum, ex) => sum + (state.logs[ex.key]?.durationSec || 0) * 1000, 0);

  return `
    <section class="view done">
      <div class="done-inner">
        <div class="kicker">${DAY_NAMES[day.dayNumber]} · closed</div>
        <h2>That was ${esc(CHIP_TITLES[day.dayNumber])}.</h2>
        <div class="done-stats">
          <div class="stat"><b>${queue.length}</b><span>MOVEMENTS</span></div>
          <div class="stat"><b>${formatClock(totalMs)}</b><span>WORK CLOCK</span></div>
          <div class="stat"><b>${prs}</b><span>PRS</span></div>
        </div>
        <div class="note-list">
          ${notes.slice(-4).map(log => `
            <article>
              <b>${esc(log.name)}${log.pr ? " · PR" : ""}</b>
              <p>${esc(log.notes || log.feeling || "Logged.")}</p>
            </article>
          `).join("")}
        </div>
        <button type="button" class="primary" id="homeBtn">Back to today</button>
      </div>
    </section>
  `;
}

function bindView() {
  if (state.view === "home") bindHome();
  if (state.view === "session") bindSession();
  if (state.view === "debrief") bindDebrief();
  if (state.view === "done") bindDone();
}

function bindHome() {
  document.getElementById("modeBtn").addEventListener("click", () => {
    state.savageMode = !state.savageMode;
    persist();
    render();
  });
  document.querySelectorAll(".day-dot").forEach(btn => {
    btn.addEventListener("click", () => {
      state.selectedDay = Number(btn.dataset.day);
      render();
    });
  });
  document.getElementById("startBtn").addEventListener("click", startOrResume);
  const reset = document.getElementById("resetDayBtn");
  if (reset) {
    reset.addEventListener("click", () => {
      const day = dayByNumber(state.selectedDay);
      if (!window.confirm("Clear notes and checkmarks for this day?")) return;
      queueFor(day).forEach(ex => delete state.logs[ex.key]);
      if (state.session?.day === day.dayNumber) state.session = null;
      persist();
      render();
    });
  }
}

function startOrResume() {
  const day = dayByNumber(state.selectedDay);
  const queue = queueFor(day);
  const existing = state.session;
  if (existing && existing.day !== day.dayNumber && existing.status !== "done") {
    if (!window.confirm(`Leave the ${CHIP_TITLES[existing.day]} session and start ${CHIP_TITLES[day.dayNumber]}?`)) return;
  }
  if (existing && existing.day === day.dayNumber && existing.status !== "done" && existing.index < queue.length) {
    state.view = existing.status === "debrief" ? "debrief" : "session";
    if (state.session.status === "working") startClockLoop();
    render();
    return;
  }
  const firstOpen = queue.findIndex(ex => !state.logs[ex.key]?.completedAt);
  state.session = {
    day: day.dayNumber,
    index: firstOpen === -1 ? 0 : firstOpen,
    status: "ready",
    startedAt: Date.now(),
    exerciseStartedAt: null,
    elapsedMs: 0,
    draft: {}
  };
  state.view = "session";
  cueOpen = false;
  persist();
  render();
}

function bindSession() {
  document.getElementById("exitBtn").addEventListener("click", () => {
    if (state.session?.status === "working") {
      state.session.elapsedMs = liveElapsed();
      state.session.exerciseStartedAt = null;
      state.session.status = "ready";
    }
    stopClock();
    keepAwake(false);
    persist();
    state.view = "home";
    render();
  });
  document.getElementById("cueBtn").addEventListener("click", () => {
    cueOpen = !cueOpen;
    render();
  });
  document.getElementById("workBtn").addEventListener("click", () => {
    if (state.session.status === "working") stopExercise();
    else startExercise();
  });
  if (state.session.status === "working") startClockLoop();
}

function startExercise() {
  state.session.status = "working";
  state.session.exerciseStartedAt = Date.now();
  persist();
  keepAwake(true);
  buzz(16);
  render();
}

function stopExercise() {
  state.session.elapsedMs = liveElapsed();
  state.session.exerciseStartedAt = null;
  state.session.status = "debrief";
  state.session.draft = state.session.draft || {};
  stopClock();
  keepAwake(false);
  buzz([20, 40, 30]);
  persist();
  state.view = "debrief";
  render();
}

function startClockLoop() {
  stopClock();
  clockTimer = setInterval(() => {
    const clock = document.getElementById("workClock");
    if (clock) clock.textContent = formatClock(liveElapsed());
  }, 250);
}

function bindDebrief() {
  document.querySelectorAll("[data-feel]").forEach(btn => {
    btn.addEventListener("click", () => {
      state.session.draft = state.session.draft || {};
      state.session.draft.feeling = btn.dataset.feel;
      persist();
      render();
    });
  });
  const load = document.getElementById("loadInput");
  const notes = document.getElementById("notesInput");
  load.addEventListener("input", () => {
    state.session.draft = state.session.draft || {};
    state.session.draft.load = load.value;
    persist();
  });
  notes.addEventListener("input", () => {
    state.session.draft = state.session.draft || {};
    state.session.draft.notes = notes.value;
    persist();
  });
  document.getElementById("prBtn").addEventListener("click", () => {
    state.session.draft = state.session.draft || {};
    state.session.draft.pr = !state.session.draft.pr;
    persist();
    render();
  });
  document.getElementById("saveNextBtn").addEventListener("click", saveAndAdvance);
}

function saveAndAdvance() {
  const session = state.session;
  const day = dayByNumber(session.day);
  const queue = queueFor(day);
  const ex = queue[session.index];
  const draft = session.draft || {};
  state.logs[ex.key] = {
    name: ex.name,
    feeling: draft.feeling || "",
    notes: draft.notes || "",
    load: draft.load || "",
    pr: !!draft.pr,
    durationSec: Math.round((session.elapsedMs || 0) / 1000),
    completedAt: new Date().toISOString()
  };
  session.index += 1;
  session.elapsedMs = 0;
  session.exerciseStartedAt = null;
  session.draft = {};
  cueOpen = false;
  if (session.index >= queue.length) {
    session.status = "done";
    state.view = "done";
  } else {
    session.status = "ready";
    state.view = "session";
  }
  persist();
  render();
}

function bindDone() {
  document.getElementById("homeBtn").addEventListener("click", () => {
    state.session = null;
    state.selectedDay = todayNumber();
    state.view = "home";
    persist();
    render();
  });
}

function initApp() {
  state.selectedDay = todayNumber();
  if (state.session && state.session.status === "working") {
    state.session.elapsedMs = liveElapsed();
    state.session.exerciseStartedAt = null;
    state.session.status = "ready";
    persist();
  }
  render();
}

document.addEventListener("DOMContentLoaded", initApp);
document.addEventListener("visibilitychange", () => {
  if (document.hidden && state.session?.status === "working") {
    state.session.elapsedMs = liveElapsed();
    state.session.exerciseStartedAt = Date.now();
    persist();
  }
});
