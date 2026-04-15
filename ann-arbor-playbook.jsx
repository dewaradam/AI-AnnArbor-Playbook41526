import { useState } from "react";

const verticals = [
  {
    id: "hvac",
    label: "HVAC & Plumbing",
    emoji: "❄️",
    color: "#38BDF8",
    segment: {
      title: "Universal Segment for HVAC",
      pull: "Customers with service 13–24 months ago, no return visit, no active maintenance plan.",
      message: `"Hi [Name], this is [Company] — we serviced your [system] back in [timeframe]. With summer coming fast we're booking AC tune-ups now and wanted to reach our past customers first. Reply YES and we'll lock in your slot at your last service rate."`,
      why: "Average ticket $300–$600. Need 9–17 replies to prove $5k+ same day. Expect 8–15% SMS reply rate on a warm list.",
    },
    businesses: [
      {
        name: "Hutzel Plumbing, Heating & Cooling",
        since: "1857",
        tag: "167-Year Institution",
        overview: "Ann Arbor's oldest surviving home services company. When a business has been running since the Civil War era, they have customer records going back decades — likely tens of thousands of households served. Multiple service lines: plumbing, heating, cooling. Deep community trust. Zero AI infrastructure.",
        dataProfile: "167 years of service records. Easily 5,000–15,000+ household contacts across generations. Repeat customers by family legacy. Cell phones attached since the 90s at minimum.",
        contacts: [
          { name: "Front Office / Manager", title: "Start here", why: "No owner name publicly listed — call the main line, reference the longevity of the company, and ask who handles 'technology partnerships or growth initiatives.' That's your path in.", phone: "(734) 995-5280" },
        ],
        callScript: `"Hi, I'm hoping to reach whoever handles business development or technology at Hutzel. My name is [Your Name] — I work with home service companies on AI-powered customer reactivation. I was researching Ann Arbor's top HVAC and plumbing companies and Hutzel came up immediately given your history here. I have a specific idea I'd love to share — takes 20 minutes and I can show real results within 24 hours. Who would be the right person to speak with?"`,
        hooks: [
          { name: "Hook A — Dormant List Reactivation", pricing: "$5k / $15k / $3k mo", detail: "A 167-year company likely has thousands of lapsed customers. Pull 13–24 month dormant accounts, segment by service type (plumbing vs HVAC), and fire a personalized SMS in the room. A list that old and trusted will have exceptional reply rates." },
          { name: "Hook B — Maintenance Plan Enrollment", pricing: "$5k / $12k / $2.5k mo", detail: "Build an automated post-service enrollment flow for annual maintenance plans. Fire the first batch against their last 90 days of completed jobs. Show same-day enrollment replies." },
        ],
      },
      {
        name: "Fry Heating, Cooling & Plumbing",
        since: "1930s",
        tag: "Veteran-Owned, 90+ Years",
        overview: "Veteran-owned, family operated. SE Michigan and NW Ohio footprint with Ann Arbor as their Michigan base. Multiple service lines — residential and commercial HVAC, plumbing, geothermal. Companies this size doing commercial work have fleet routes, scheduled maintenance contracts, and a massive recurring customer base.",
        dataProfile: "90+ years of records. Commercial accounts with contract renewal cycles. Residential customers with seasonal service history. Both cell phones and commercial contact data.",
        contacts: [
          { name: "Owner / General Manager", title: "Veteran-owned — owner likely accessible", why: "Veteran-owned businesses tend to have an owner who answers. Call the main line and ask for the owner or GM directly. Mention 'revenue impact in 24 hours' and you'll get through.", phone: "(734) 913-2611" },
        ],
        callScript: `"Hi, I'm looking to connect with the owner or GM — my name is [Your Name]. I work with HVAC companies on AI reactivation campaigns and I specifically focus on companies with long histories and large customer bases. Fry has both. I have a specific thing I can show you in 24 hours that's generated real booked appointments for other shops. Can I get 20 minutes this week?"`,
        hooks: [
          { name: "Hook A — Commercial Contract Renewal Engine", pricing: "$8k / $20k / $4k mo", detail: "Commercial maintenance contracts have renewal windows. Build an AI-powered renewal reminder and reactivation sequence for lapsed commercial accounts. One commercial account = $2,000–$10,000/yr. Closing 3 = ROI proven." },
          { name: "Hook B — Residential Reactivation Campaign", pricing: "$5k / $12k / $2.5k mo", detail: "Residential lapsed list SMS — same play as all HVAC companies, but the depth of this list going back 90 years means even a filtered 'last 2 years' segment will be massive." },
        ],
      },
      {
        name: "Meridian Heating, Cooling, Plumbing & Electrical",
        since: "1984",
        tag: "40+ Years, 4 Services",
        overview: "Four service lines under one roof: HVAC, plumbing, electrical, heating. That's rare and valuable — it means they have a broader customer relationship per household than a single-trade shop. Customers who call for plumbing can be upsold HVAC tune-ups. Perfect for cross-sell AI automation.",
        dataProfile: "40 years of multi-trade service records per customer. One household might have 6–10 service events across all 4 lines. That's rich data for segmented campaigns.",
        contacts: [
          { name: "Owner / Operations Lead", title: "Likely owner-operated", why: "Multi-trade family shops this size are almost always owner-run. Call the main line and ask for the owner.", phone: "(734) 999-7040" },
        ],
        callScript: `"Hi, I'd love to connect with the owner — I work with multi-trade home service companies on AI-powered cross-sell and reactivation campaigns. Meridian is interesting to me specifically because you have four service lines, which means one customer could be generating revenue across HVAC, plumbing, electrical and heating — but probably isn't consistently. I have a 24-hour demo I'd love to show you. Can I get 20 minutes?"`,
        hooks: [
          { name: "Hook A — Cross-Trade Reactivation", pricing: "$5k / $15k / $3k mo", detail: "Pull customers who've used only ONE of the four service lines. Send a personalized SMS referencing their past service and introducing the other trades. 'You had your furnace serviced with us — did you know we also handle electrical?' This is a $15k setup because the campaign architecture is more complex and more valuable." },
          { name: "Hook B — Seasonal Campaign Calendar", pricing: "$5k / $12k / $2.5k mo", detail: "Four service lines = four seasonal hooks every quarter. Spring plumbing inspection, summer AC tune-up, fall furnace check, winter electrical safety. Build the entire 12-month calendar live in the room and schedule Q2 immediately." },
        ],
      },
      {
        name: "Haley Mechanical",
        since: "1999",
        tag: "25 Years, Residential Specialist",
        overview: "Residential-focused HVAC and plumbing specialist. 25 years in the Ann Arbor market means a solid book of repeat residential customers. Clean, focused operation — easier to get to the owner and easier to demonstrate impact quickly. Great first pitch if you want a fast close.",
        dataProfile: "25 years of residential records. Tight service area = high neighbor density. Great referral candidate. Likely 2,000–4,000 active customer records.",
        contacts: [
          { name: "Owner", title: "Likely answers the phone", why: "25-year residential shops are typically still owner-operated. Call the main line and ask for the owner by name if you can find it on Google Business — often listed in reviews.", phone: "(734) 480-0555" },
        ],
        callScript: `"Hi, I'm looking for the owner — I do AI-powered reactivation for residential HVAC companies in the Ann Arbor area. I was looking at Haley Mechanical's reviews and you clearly have a loyal customer base. I have a specific campaign I can run using your existing customer list that typically drives 8–15 booked service calls in the same day. Would you have 20 minutes this week to see it?"`,
        hooks: [
          { name: "Hook A — The Neighbor Referral Loop", pricing: "$5k / $10k / $2k mo", detail: "Post-service SMS referral sequence: after every completed job, customer gets a text asking for a neighbor referral with a small incentive. Demo it live using their last 30 completed jobs. Residential shops live and die by referrals — this is the easiest value sell." },
          { name: "Hook B — Dormant List Reactivation", pricing: "$5k / $10k / $2k mo", detail: "Standard HVAC play — pull lapsed list, fire seasonal SMS, show booked calls in the room. Smaller company = faster decision cycle. Likely $5k day one and same-day paperwork." },
        ],
      },
      {
        name: "Applegate Home Comfort",
        since: "1952",
        tag: "70+ Years, Energy-Efficiency Focus",
        overview: "One of Ann Arbor's longest-running HVAC companies with a focus on energy efficiency and UV purification — slightly higher-end residential customer. Customers who care about energy efficiency tend to spend more per service event and are strong candidates for maintenance plan enrollment.",
        dataProfile: "70+ years of premium residential customers. Energy-conscious homeowners = higher average ticket and higher likelihood to enroll in annual plans.",
        contacts: [
          { name: "Owner / GM", title: "Likely owner-run", why: "Call the main number and ask for the owner. Their energy-efficiency positioning makes them receptive to 'smart automation' framing — lean into that language.", phone: "(734) 995-5755" },
        ],
        callScript: `"Hi, I'm hoping to connect with the owner — my name is [Your Name]. I work with HVAC companies on AI-powered customer communication and reactivation. I'm specifically reaching out to Applegate because your energy-efficiency focus tells me you have a customer base that values their home systems — which means they're prime candidates for maintenance plans. I have a 24-hour demo I can show you. Can I get 20 minutes?"`,
        hooks: [
          { name: "Hook A — Maintenance Plan Enrollment Campaign", pricing: "$5k / $12k / $2.5k mo", detail: "Energy-conscious customers are the easiest maintenance plan sell. Build enrollment sequence targeting non-plan customers who've had service in the last 12 months. Model the math: 200 plan enrollments × $250/yr = $50k ARR. That's your day-two close." },
          { name: "Hook B — Spring AC Season Activation", pricing: "$5k / $10k / $2k mo", detail: "Simplest possible play — spring is now. Pull every customer with an AC unit serviced 12+ months ago. Fire the seasonal tune-up campaign live. Show booked appointments before you leave." },
        ],
      },
    ],
  },
  {
    id: "medspa",
    label: "Med Spa & Aesthetics",
    emoji: "✨",
    color: "#C084FC",
    segment: {
      title: "Universal Segment for Med Spas",
      pull: "Clients with a completed service 60–180 days ago and no follow-up booking. Filter out active series/package holders.",
      message: `"Hi [Name], it's [Clinic] — [Provider Name] wanted to check in! It's been a little while since your last visit. We have a couple openings this week and thought of you. Reply YES and we'll hold a spot for 48 hours."`,
      why: "Average ticket $250–$700. Need 7–20 replies to prove $5k. Expect 15–25% reply rate from warm aesthetics clients — emotional attachment to results is high.",
    },
    businesses: [
      {
        name: "CosMedic LaserMD",
        since: "Est. — Ann Arbor",
        tag: "Double Board Certified MD",
        overview: "Run by Dr. Deepa Macha — double board certified physician. Full range of services: Botox, fillers, lasers, body sculpting, medical weight loss, chemical peels. The weight loss program (Semaglutide) is a recurring revenue goldmine — those patients need monthly follow-ups and are extremely high LTV.",
        dataProfile: "Medical practice EMR system. Weight loss program = recurring monthly touchpoints already built in. Full aesthetic service menu = multiple treatment cycles per patient.",
        contacts: [
          { name: "Dr. Deepa Macha", title: "Owner, Double Board Certified MD", why: "She's the founder and runs the practice. Call the clinic directly and ask for Dr. Macha or her practice manager. Weight loss program angle is a strong hook — those patients are extremely high LTV.", phone: "(734) 822-7500" },
          { name: "Practice Manager", title: "Front office gatekeeper", why: "If Dr. Macha isn't available, ask for the practice manager. They feel the scheduling and follow-up pain daily.", phone: "(734) 822-7500" },
        ],
        callScript: `"Hi, I'm hoping to connect with Dr. Macha or her practice manager. My name is [Your Name] — I work with medical aesthetics practices on AI-powered patient reactivation and retention. I noticed CosMedic has a medical weight loss program, which is interesting to me because those patients are your highest LTV and they need consistent monthly engagement. I have a 24-hour demo I'd love to show you. Can I get 20 minutes this week?"`,
        hooks: [
          { name: "Hook A — Weight Loss Patient Retention Engine", pricing: "$5k / $18k / $4k mo", detail: "Semaglutide and weight loss patients who fall off the program are the most expensive churn in aesthetics. Build an AI-powered engagement and reactivation sequence specifically for those patients. Show Dr. Macha the revenue model: 50 reactivated weight loss patients × $299/month = $14,950/month in recurring revenue." },
          { name: "Hook B — Lapsed Aesthetic Patient Reactivation", pricing: "$5k / $12k / $2.5k mo", detail: "Pull EMR export of 60–180 day lapsed patients by service type. Personalized SMS by treatment (Botox, filler, laser). Fire campaign in the room. Show booked appointments before you leave." },
        ],
      },
      {
        name: "Radiance Beauty Lab",
        since: "Recent",
        tag: "Owner-Founded, Growth Stage",
        overview: "Founded by Lisa Evans — former dermatology and plastic surgery industry professional who left to build a more personalized skincare practice. She has a marketing professional (Rachel Speck) on staff, which means they're already thinking about growth. This is the most likely to say yes fast because they're building, not maintaining.",
        dataProfile: "Active booking system (likely Jane or Vagaro). Growing client list with strong loyalty. Small enough that the owner picks up the phone and makes decisions on the spot.",
        contacts: [
          { name: "Lisa Evans", title: "Owner & Founder", why: "She's the founder, injector, and decision maker. Call the clinic and ask for Lisa. She has a marketing person already — pitch this as amplifying what they're doing, not replacing it.", phone: "(734) 418-5454" },
          { name: "Rachel Speck", title: "Marketing Professional on Staff", why: "Second call. She'll understand the AI angle immediately. Could become your internal champion who takes the proposal to Lisa.", phone: "(734) 418-5454" },
        ],
        callScript: `"Hi, I'm trying to reach Lisa Evans — my name is [Your Name]. I work with boutique med spas on AI-powered client retention. I actually looked at your website and your team is impressive — the fact that you have a marketing professional on staff tells me you're thinking about growth. I have a specific idea using your existing client list that I can show results for in 24 hours. Would Lisa have 20 minutes this week?"`,
        hooks: [
          { name: "Hook A — Lapsed Client Reactivation", pricing: "$5k / $10k / $2k mo", detail: "Boutique med spas have intensely loyal clients who sometimes just drift. Pull 60–180 day lapsed clients from their booking system, personalize by treatment, fire SMS. The Lisa Evans personal brand makes these messages extremely high-converting." },
          { name: "Hook B — Referral Program Automation", pricing: "$5k / $10k / $2k mo", detail: "Post-service referral SMS: after every completed service, client gets a text from 'Lisa' asking for a referral with a small incentive. Boutique practices live on referrals — this is the fastest ROI demonstration." },
        ],
      },
      {
        name: "Med 1 Aesthetics",
        since: "Est. — Ann Arbor + Wyandotte",
        tag: "Two Locations, Physician-Led",
        overview: "Founded by Dr. Nicole O'Neill, MD — board certified. Two locations: Ann Arbor and Wyandotte. Two-location practices have a specific pain: getting customers from one location to visit the other, and managing two separate patient lists without cross-pollination. AI solves this elegantly.",
        dataProfile: "Two EMR systems or one split. Patient data across two markets. Opportunity to cross-pollinate and grow both location lists using each other's warm audiences.",
        contacts: [
          { name: "Dr. Nicole O'Neill", title: "Owner, Board Certified MD", why: "Physician-owner. Call the Ann Arbor location and ask for Dr. O'Neill or her office manager. Two-location angle is your hook — you're solving a problem she feels every day.", phone: "(734) 369-6100" },
          { name: "Office Manager", title: "Operational gatekeeper", why: "She runs scheduling across two locations and feels the complexity. Win her and she'll walk the pitch upstairs.", phone: "(734) 369-6100" },
        ],
        callScript: `"Hi, I'm hoping to reach Dr. O'Neill or her office manager — my name is [Your Name]. I work with multi-location aesthetics practices on AI-powered patient engagement. I'm specifically calling Med 1 because you have two locations, and I have a very specific approach to cross-pollinating your patient lists between Ann Arbor and Wyandotte that could meaningfully grow both locations at once. I can show results in 24 hours. Would Dr. O'Neill have 20 minutes?"`,
        hooks: [
          { name: "Hook A — Cross-Location Patient Migration", pricing: "$5k / $15k / $3k mo", detail: "Build an AI-powered sequence that introduces Ann Arbor patients to the Wyandotte location and vice versa — with a location-specific incentive. 'We're expanding our Ann Arbor patients with a special offer at our Wyandotte location.' Two markets, one campaign, compounding effect." },
          { name: "Hook B — Lapsed Patient Reactivation (Both Locations)", pricing: "$5k / $12k / $2.5k mo", detail: "Pull lapsed list from both locations combined. Personalized SMS by service type. Run the campaign live across both location databases simultaneously — show the dual-location impact on screen." },
        ],
      },
      {
        name: "RevivaJennz Medical Aesthetics",
        since: "Est. — Ann Arbor",
        tag: "Solo Physician, National Instructor",
        overview: "Dr. Jennifer Thomas-Goering — solo physician injector AND a national instructor who teaches techniques across the country. This is significant: she has a national reputation but a local practice she has to fill herself. She is time-constrained and can't be doing manual follow-up. That's your opening.",
        dataProfile: "Appointment-only solo practice. Every appointment was personally performed by Dr. Thomas-Goering. High-touch patient relationships = very high SMS response rates. Data is likely in a simple booking system or even spreadsheet.",
        contacts: [
          { name: "Dr. Jennifer Thomas-Goering", title: "Owner, Physician Injector & National Instructor", why: "She's the entire practice. Call or text the clinic number and ask for Dr. Jennifer. Lead with 'you're teaching across the country — who's filling your Ann Arbor schedule while you're away?' That's the hook.", phone: "(734) 407-7997" },
        ],
        callScript: `"Hi, I'm trying to reach Dr. Jennifer — my name is [Your Name]. I work with physician-injectors on AI-powered patient reactivation. I actually know you teach nationally, which means there are days and weeks when your Ann Arbor schedule isn't being actively filled. I have a specific automation I can set up in 24 hours that keeps your schedule full even when you're traveling. Would you have 20 minutes to see it?"`,
        hooks: [
          { name: "Hook A — Schedule Autopilot", pricing: "$5k / $10k / $2k mo", detail: "Build an AI-powered scheduling and reactivation system that runs while she travels. Lapsed patient SMS goes out automatically on a 60-day cycle. Show her the sequence live, fire it against her existing list, watch bookings come in. This is a life-improvement sell as much as a revenue sell." },
          { name: "Hook B — After-Hours Booking Agent", pricing: "$5k / $8k / $1.5k mo", detail: "Solo practitioners miss inquiries constantly. Build an AI agent that answers DMs, website inquiries, and texts after hours — captures name, service interest, and preferred times — and passes to Dr. Jennifer as qualified leads. Demo it live on her website and Instagram DM." },
        ],
      },
      {
        name: "Medical Aesthetics Ann Arbor",
        since: "2017",
        tag: "Physician-Led, Established 2017",
        overview: "Dr. Thomas Platt — Board Certified Internal Medicine, former CMO for three organizations. He came to aesthetics intentionally. That business background means he speaks ROI fluently. He was a CMO — he will understand your pitch better than almost any other prospect on this list. Don't dumb it down.",
        dataProfile: "7+ years of patient records. Former corporate executive turned clinic owner = business-minded, data-curious, ROI-oriented. EMR system in place. Likely open to technology.",
        contacts: [
          { name: "Dr. Thomas Platt", title: "Owner, Board Certified MD, Former CMO", why: "He has a corporate background — speak in business terms. ROI, ARR, conversion rates. He'll engage with the data. Call the clinic and ask for Dr. Platt directly.", phone: "Search: Medical Aesthetics Ann Arbor" },
        ],
        callScript: `"Hi, I'm hoping to connect with Dr. Platt — my name is [Your Name]. I work with physician-owned aesthetics practices on AI-powered revenue automation. I actually looked at Dr. Platt's background — former CMO — so I know he thinks differently than most clinic owners about business performance. I have a specific proposal that addresses patient retention and reactivation with a 24-hour proof of concept. Would he have 20 minutes this week?"`,
        hooks: [
          { name: "Hook A — The Full Retention Stack", pricing: "$8k / $20k / $4k mo", detail: "Dr. Platt's CMO background means he'll want the full picture. Present a complete AI retention stack: lapsed patient reactivation, post-service review automation, referral program, seasonal campaign calendar. He'll buy the full system, not just one piece. Lead with the 24-hour demo, then close the whole stack." },
          { name: "Hook B — Lapsed Patient Reactivation (Fast Demo)", pricing: "$5k / $12k / $2.5k mo", detail: "Standard lapsed list play, but present it with metrics and projections. Show the math: X lapsed patients × Y% response rate × Z average ticket = revenue. He came from corporate — he'll close on the spreadsheet as much as the live demo." },
        ],
      },
    ],
  },
  {
    id: "pest",
    label: "Pest Control",
    emoji: "🐜",
    color: "#FBBF24",
    segment: {
      title: "Universal Segment for Pest Control",
      pull: "Customers who cancelled a quarterly or annual plan 6–18 months ago. Exclude anyone with a complaint or disputed charge.",
      message: `"Hi [Name], it's [Company] — we serviced your home back in [timeframe]. We've been seeing increased activity reported in your area this season and wanted to give our past customers a priority heads-up. We can re-enroll you at your original rate this week. Reply YES and we'll reach out to confirm."`,
      why: "Quarterly plans $120–$200/qtr. Annual contracts $350–$600. 15 reactivations = $5,250–$9,000 ARR. 'Activity in your neighborhood' is the urgency unlock that makes this feel like a service, not a sales pitch.",
    },
    businesses: [
      {
        name: "Frame's Pest Control",
        since: "1972",
        tag: "50+ Years, Family Owned",
        overview: "Over 50 years serving SE Michigan — one of the most established independent pest control companies in the region. Family-owned, multiple service lines including commercial. 50+ years of customer data across residential AND commercial accounts. This is the highest data density on the pest control list.",
        dataProfile: "50+ years of records. Commercial and residential. Thousands of past customers including businesses near U-M campus. Likely using legacy CRM or even paper records for old accounts.",
        contacts: [
          { name: "Owner / GM", title: "Family-owned — owner accessible", why: "50-year family businesses always have an owner who knows the history. Call the main line and reference the longevity of their customer base — that's your data hook.", phone: "(877) 803-5966" },
        ],
        callScript: `"Hi, I'm hoping to reach the owner or GM — my name is [Your Name]. I work with established pest control companies on AI-powered reactivation campaigns. Frame's came up at the top of my research given your 50-year history here — that means you have a customer database that most companies would envy. I have a specific approach to turning that history into booked service calls in 24 hours. Can I get 20 minutes?"`,
        hooks: [
          { name: "Hook A — Legacy Customer Win-Back", pricing: "$5k / $12k / $2.5k mo", detail: "50 years = customers who cancelled 5, 10, even 15 years ago and might now be ready to come back. Segment by cancel date and fire tiered campaigns: 1–2 year lapse, 3–5 year lapse. Older lapses get a different message — nostalgia and trust-based vs. urgency-based." },
          { name: "Hook B — Commercial Account Reactivation", pricing: "$8k / $18k / $3.5k mo", detail: "Commercial pest control near U-M campus is a massive recurring revenue opportunity. Restaurants, offices, and retailers who haven't renewed. Build a B2B reactivation SMS + email sequence. Commercial accounts = $500–$2,500/month. Closing 5 covers your full year of retainer." },
        ],
      },
      {
        name: "Guardian Pest Control",
        since: "Est. — 16+ Years",
        tag: "Locally Owned, 16+ Years",
        overview: "Locally owned and operated serving SE Michigan including Ann Arbor. 16+ years, residential and commercial. Strong reputation. Uses a rigorous hiring and training process — which means they care about quality and are likely frustrated when good customers churn because of poor follow-up, not poor service.",
        dataProfile: "16 years of residential and commercial records. Strong Google review base. Customers who give good reviews are the best SMS candidates — they already like you.",
        contacts: [
          { name: "Owner", title: "Locally owned — owner accessible", why: "Call the main line and ask for the owner. Reference their strong reviews and the opportunity to reconnect with past customers who clearly liked them.", phone: "Search: Guardian Pest Control SE Michigan" },
        ],
        callScript: `"Hi, I'm trying to reach the owner — my name is [Your Name]. I work with locally owned pest control companies on AI-powered customer reactivation. I looked at Guardian's reviews and you clearly have customers who loved working with you. My job is to find those customers who fell off and get them back on service. I can show you how in 24 hours for a flat $5k. Would the owner have 20 minutes this week?"`,
        hooks: [
          { name: "Hook A — Happy Customer Win-Back", pricing: "$5k / $10k / $2k mo", detail: "Cross-reference 4–5 star reviewers with the lapsed customer list. Customers who praised you publicly but haven't booked in 12+ months are the warmest possible segment. SMS campaign that references their positive experience. Near 100% of them want to come back — they just forgot." },
          { name: "Hook B — Seasonal Mosquito Campaign", pricing: "$5k / $8k / $1.5k mo", detail: "Michigan spring = mosquito season NOW. Pull all previous mosquito control customers from last year + anyone who enquired but didn't book. Fire a 'mosquito season is here' campaign in the room. Mosquito control is an easy impulse buy when the timing is right." },
        ],
      },
      {
        name: "Community Pest Solutions",
        since: "Est. — Ann Arbor/Plymouth",
        tag: "500+ 5-Star Reviews in 2025",
        overview: "Family-owned, Plymouth/Ann Arbor area. Earned 500+ 5-star Google reviews in 2025 alone — that's exceptional review velocity and signals an extremely loyal, engaged customer base. High review volume = high SMS opt-in likelihood = best possible reactivation response rates on this list.",
        dataProfile: "Massive engaged customer base (500+ active reviewers in one year alone). Customers who leave reviews almost always give cell phones. Family-owned = owner answers.",
        contacts: [
          { name: "Owner", title: "Family-owned, review-responsive", why: "A company with 500+ 5-star reviews in a year is run by someone who cares deeply about customer relationships. That owner will immediately understand the reactivation value. Call the main line.", phone: "Search: Community Pest Solutions Ann Arbor / pestfreemi.com" },
        ],
        callScript: `"Hi, I'm trying to reach the owner — my name is [Your Name]. I was researching pest control companies in Ann Arbor and Community Pest Solutions stood out immediately — 500 five-star reviews in 2025 alone is genuinely rare. That tells me you have a customer base that loves you. My pitch is simple: let me show you how to turn that loyalty into recurring bookings automatically. I can prove it in 24 hours for $5k. Can the owner spare 20 minutes?"`,
        hooks: [
          { name: "Hook A — Review-to-Referral Automation", pricing: "$5k / $12k / $2.5k mo", detail: "Companies with 500+ reviews have the most referrable customer base in any market. Build an automated post-service referral SMS: after every 5-star review is posted, an AI-triggered message goes to that customer asking them to refer a neighbor. Compound the review flywheel." },
          { name: "Hook B — Lapsed Plan Reactivation", pricing: "$5k / $10k / $2k mo", detail: "Standard win-back campaign but with the highest expected response rate on the list given their review base. Happy customers who lapsed will come back in large numbers. Show booked plan re-enrollments in the room." },
        ],
      },
      {
        name: "Honorable Pest Control",
        since: "Recent",
        tag: "Owner: Nick — Growth Stage",
        overview: "Founded by Nick after his own family struggled with recurring pest problems. Story-driven, community-focused, faith-based. Nick is identifiable by name and runs a tight operation with his team. Growth-stage company means Nick is actively looking for ways to scale — perfect sales receptivity.",
        dataProfile: "Growing customer list. Likely using a simple CRM or even spreadsheet. Owner is the brand — his name is in the reviews. Personal brand + AI automation = compelling pitch.",
        contacts: [
          { name: "Nick", title: "Owner & Founder", why: "Nick is identifiable by name in reviews and on the website. Call the main line and ask for Nick directly. He built this company from personal frustration — lead with 'I want to help you protect the families in your community more effectively.'", phone: "Search: Honorable Pest Control Ann Arbor" },
        ],
        callScript: `"Hi, is this Nick? My name is [Your Name] — I came across Honorable Pest Control while researching Ann Arbor pest companies and I read your story about why you started it. I work with owner-operated pest control companies on AI-powered growth tools. I have a specific campaign that helps companies like yours turn your existing happy customers into a referral engine — and I can show you results in 24 hours for $5k. Would you have 20 minutes this week?"`,
        hooks: [
          { name: "Hook A — The Neighborhood Referral Loop", pricing: "$5k / $8k / $1.5k mo", detail: "Post-service SMS referral sequence triggered after every job. Nick's personal brand and community story make these messages resonate deeply. 'Nick at Honorable wanted to reach out...' — that's not a blast, that's a conversation." },
          { name: "Hook B — Lapsed Customer Win-Back", pricing: "$5k / $8k / $1.5k mo", detail: "Growth-stage companies have customers who signed up, got busy, and didn't renew. Pull all lapsed accounts. Fire a reactivation campaign. Growth-stage owner will feel the impact of even 10–15 reactivations dramatically — this is a very fast close." },
        ],
      },
      {
        name: "Security Pest Control",
        since: "1997",
        tag: "Owner: Clayton Lattimore, 27 Years",
        overview: "Founded in 1997 by Clayton Lattimore — that's a named owner with 27 years of equity in his customer relationships. Nearly three decades of Ann Arbor residential and commercial accounts. Clayton built this personally, which means every customer record in that database is a relationship he or his team earned.",
        dataProfile: "27 years of records under a named owner. Deep neighborhood penetration in Ann Arbor over nearly three decades. Clayton likely knows his customers personally — which means personalized SMS from his company will outperform any generic blast.",
        contacts: [
          { name: "Clayton Lattimore", title: "Owner & Founder, 27 Years", why: "27 years = he's seen everything and is likely open to anything that protects the relationships he's built. Call the main line and ask for Clayton directly.", phone: "Search: Security Pest Control Ann Arbor" },
        ],
        callScript: `"Hi, I'm looking for Clayton Lattimore — my name is [Your Name]. I came across Security Pest Control while researching established pest companies in Ann Arbor. 27 years under the same owner tells me you have a customer base that's genuinely loyal to you personally. I have a way to turn that loyalty into automatic bookings that I can demonstrate in 24 hours. Would you have 20 minutes to see it?"`,
        hooks: [
          { name: "Hook A — Clayton-Branded Reactivation", pricing: "$5k / $10k / $2k mo", detail: "Messages that come from 'Clayton at Security Pest Control' will perform dramatically better than generic company blasts. Build a personalized win-back sequence using his name and the 27-year story. 'Clayton wanted to personally reach out to customers we haven't heard from lately...' This converts." },
          { name: "Hook B — Annual Contract Renewal Engine", pricing: "$5k / $12k / $2.5k mo", detail: "27 years of annual contracts means some of them have silently lapsed. Build an automated renewal reminder and re-enrollment sequence. Show Clayton how many contracts are sitting dormant and what they're worth if re-enrolled." },
        ],
      },
    ],
  },
  {
    id: "auto",
    label: "Auto Repair",
    emoji: "🔧",
    color: "#FB923C",
    segment: {
      title: "Universal Segment for Auto Repair",
      pull: "Customers whose vehicle was serviced 12–24 months ago with no return visit. Filter out fleet accounts and active warranty contracts.",
      message: `"Hi [Name], this is [Shop] — we last serviced your [year/make/model] in [month]. Based on your mileage, you're likely due for [service]. We have openings this week and are holding spots for our regulars. Reply YES and we'll confirm your time."`,
      why: "Average ticket $150–$600. Mentioning the specific vehicle is the conversion unlock. Most shops never do this. Expect 10–20% reply rate on a personalized vehicle-referenced SMS.",
    },
    businesses: [
      {
        name: "Brian Hogue Auto Group",
        since: "Est. Ann Arbor",
        tag: "Owner: Brian Hogue — 4 Locations",
        overview: "Brian Hogue owns FOUR shops: Stadium Auto Service, Abbott Street Auto, Hoover Street Auto, and State Street Auto Service. This is the single highest-value target on the auto repair list. Four locations = four customer databases = one owner making one decision. He's the closest thing to a multi-rooftop dealer group in independent auto repair in Ann Arbor.",
        dataProfile: "Four shop databases — potentially 8,000–20,000+ combined vehicle records. European/German specialty (Audi, BMW, Mercedes) = high average ticket ($400–$2,000). Fleet work at State Street adds B2B layer.",
        contacts: [
          { name: "Brian Hogue", title: "Owner — All 4 Locations", why: "He's the one decision that activates all four locations. Find him via Stadium Auto Service (main location). He's quoted in press and on the website. Ask for Brian by name.", phone: "(734) 665-7133 (Stadium)" },
        ],
        callScript: `"Hi, is Brian available? My name is [Your Name] — I work with multi-location auto repair groups on AI-powered reactivation. I came across the Stadium / Abbott / Hoover / State Street group and I had to reach out. You have four locations worth of customer data and I have a specific approach to activating all four lists simultaneously. Most shops I work with see 8–15 same-day service bookings when we run this. I'd love 20 minutes to show you. Is Brian the right call?"`,
        hooks: [
          { name: "Hook A — Four-Location Simultaneous Reactivation", pricing: "$8k / $25k / $5k mo", detail: "Export all four shop management systems. Deduplicate by customer. Segment by last service date and location. Fire personalized campaigns per vehicle from the nearest location. Show the cumulative reply board across all four shops in real time. This is the 'enterprise' demo — numbers will be big." },
          { name: "Hook B — German Vehicle Loyalty Program", pricing: "$8k / $20k / $4k mo", detail: "European vehicle owners (BMW, Audi, Mercedes) are the highest LTV auto customers in any market. Build a loyalty and reactivation program specifically for Stadium's German vehicle specialty — seasonal maintenance alerts, pre-winter checks, ownership anniversary messages. Dealer alternative messaging that keeps them coming back." },
        ],
      },
      {
        name: "ArborMotion",
        since: "Est. 40+ Years",
        tag: "Largest Independent Shop, 40 Years",
        overview: "Ann Arbor's largest independent auto repair shop — locally owned and operated for over 40 years. European and Asian specialty. Certified technicians. Size means they have the deepest customer database on this list. 40 years of import vehicle service = a high-value, brand-loyal customer base.",
        dataProfile: "40+ years as the largest independent = potentially the largest single-shop database in Ann Arbor. European/Asian specialty = high-ticket customers. Certified techs = premium service = premium reactivation potential.",
        contacts: [
          { name: "Owner / General Manager", title: "Largest independent — owner-run", why: "40-year independent shops are almost always still owner-run or owned by someone deeply invested. Call the main number and ask for the owner or GM.", phone: "(734) 996-8080" },
        ],
        callScript: `"Hi, I'd like to connect with the owner or GM — my name is [Your Name]. I work with independent auto shops on AI-powered vehicle reactivation. ArborMotion is interesting to me specifically because you're the largest independent in Ann Arbor with 40 years of history — that customer database is genuinely rare. I have a specific approach to turning your dormant vehicle records into booked service appointments, and I can show results in 24 hours. Can I get 20 minutes?"`,
        hooks: [
          { name: "Hook A — European Vehicle Reactivation", pricing: "$5k / $15k / $3k mo", detail: "European vehicle customers (BMW, Audi, Mercedes, Volvo) have the highest average ticket and the strongest dealer-alternative motivation. Segment the reactivation list by vehicle make and personalize accordingly. 'Your BMW 5-Series is likely due for its annual inspection...' This is precision marketing they've never seen from a shop." },
          { name: "Hook B — The 40-Year Legacy Campaign", pricing: "$5k / $12k / $2.5k mo", detail: "Customers who brought their cars here 10–15 years ago and moved to a dealer may be ready to come back. Build a 'we've been serving Ann Arbor for 40 years' reactivation message targeting very long-lapsed customers. Trust and longevity are the hooks." },
        ],
      },
      {
        name: "Ron's Garage",
        since: "1982",
        tag: "Owner: Ron — 43 Years, Community Institution",
        overview: "Ron's Garage has been run by Ron since 1982 — 43 years of first-name relationships with Ann Arbor and Saline customers. Ron is personally trusted by his community. His name in a text message isn't marketing — it's a personal note. This is the highest-converting personalization play on the entire auto list.",
        dataProfile: "43 years of first-name customer relationships. Multiple certifications. Saline + Ann Arbor territory. Ron is personally known — his name on a message converts like no other.",
        contacts: [
          { name: "Ron", title: "Owner & Founder, 43 Years", why: "Ron answers the phone. He's a community institution. Call the shop and ask for Ron. Tell him a customer recommended you reach out. That's the door opener.", phone: "(734) 662-8379" },
        ],
        callScript: `"Hi, is Ron in? My name is [Your Name] — I actually drove by the shop and a customer in the parking lot told me about you. I work with long-time shop owners on AI tools that help them stay connected with their regular customers automatically. Ron's name in a text message is worth more than any ad — I want to show you how to use that. Can Ron spare 20 minutes?"`,
        hooks: [
          { name: "Hook A — The Ron Personal Outreach Campaign", pricing: "$5k / $10k / $2k mo", detail: "Every SMS goes out as 'Ron from Ron's Garage wanted to check in on your [vehicle]...' The personal brand here is the entire hook. Fire campaign against 12–24 month lapsed customers. Response rates will be among the highest of any shop you work with because Ron isn't a brand — he's a person." },
          { name: "Hook B — The December Charity Tie-In Campaign", pricing: "$5k / $8k / $1.5k mo", detail: "Ron does an annual Humane Society drive every December. Build a year-round community engagement campaign that uses this story. 'Ron's Garage gives back — and wanted to check in on your vehicle before the season changes.' Selling community values alongside service reactivation." },
        ],
      },
      {
        name: "Ann Arbor Auto Care",
        since: "Est.",
        tag: "Owner: Sam Al-Gwiery, 35 Years Experience",
        overview: "Sam Al-Gwiery is the owner — 35 years of hands-on experience, multiple ASE certifications including Driveability Diagnostics and Ford-specific training. One of only 4 shops in the Ann Arbor area with diagnostic equipment for both R134A and new R1234YF AC systems. Specialty equipment = specialty customers = hard to replace.",
        dataProfile: "Specialty diagnostic equipment means they attract vehicle owners who've been turned away elsewhere. Those customers are extremely loyal — their car is complex and Sam fixed it. High LTV, high return rate.",
        contacts: [
          { name: "Sam Al-Gwiery", title: "Owner, ASE Certified, 35 Years", why: "Sam is the shop. Call and ask for Sam. He's technically excellent and responds well to data-driven pitches. Lead with the specialty equipment angle — customers with complex vehicles are irreplaceable.", phone: "(734) 528-2591" },
        ],
        callScript: `"Hi, is Sam available? My name is [Your Name] — I work with specialty auto shops on AI-powered customer reactivation. I was reading about Ann Arbor Auto Care and the fact that you have both R134A and R1234YF diagnostic equipment — that's a differentiator. Customers who brought their complex vehicles to you specifically are hard to get and easy to lose to inertia. I have a specific way to keep them coming back automatically. Can I get 20 minutes with Sam?"`,
        hooks: [
          { name: "Hook A — Specialty Vehicle Owner Reactivation", pricing: "$5k / $10k / $2k mo", detail: "Customers who brought a vehicle requiring specialized diagnostics are the most loyal and highest-value segment. Their cars are complex and few shops can handle them. SMS campaign: 'Sam wanted to check in — your [year/make] is due for inspection and we have the equipment to do it right.' Expertise-based reactivation." },
          { name: "Hook B — AC Season Activation", pricing: "$5k / $8k / $1.5k mo", detail: "Spring is now. Sam has both AC diagnostic systems. Pull all customers with AC service in last 18 months + everyone with an older vehicle. Fire a targeted AC inspection campaign. One of only 4 shops in Ann Arbor with the new R1234YF equipment — that's a real urgency message." },
        ],
      },
      {
        name: "Main Street Motors",
        since: "Est.",
        tag: "Family-Owned, Best in Washtenaw County 2015",
        overview: "Family-owned, voted Best Auto Repair Shop in Washtenaw County in 2015 by Current Magazine readers. Every oil change serviced by an ASE Master Certified technician — that's premium positioning. Premium service means premium customers, and premium customers respond to premium personalized outreach.",
        dataProfile: "Reader's choice award winner = publicly beloved. Family shop in Ann Arbor = dense neighborhood customer base. Every car gets ASE Master tech inspection = detailed service records per vehicle.",
        contacts: [
          { name: "Owner / Manager", title: "Family-owned, owner accessible", why: "Call the shop and ask for the owner. Reference the 2015 reader's choice award as proof you've done your homework. 'A shop that wins a community vote has customers who trust them personally — I want to help you reconnect with the ones who haven't been back.'", phone: "Search: Main Street Motors Ann Arbor" },
        ],
        callScript: `"Hi, I'm hoping to reach the owner — my name is [Your Name]. I came across Main Street Motors while researching Ann Arbor's top independent shops. Being voted Best Auto Repair in Washtenaw County tells me you have customers who genuinely love you. I work with shops like yours on AI-powered reactivation to bring back customers who've drifted. I can show you real results in 24 hours. Can the owner spare 20 minutes?"`,
        hooks: [
          { name: "Hook A — Award-Winner Loyalty Campaign", pricing: "$5k / $10k / $2k mo", detail: "The Best in Washtenaw County story is a marketing asset they're not using. Build a reactivation campaign that leads with the community trust angle: 'You trusted us enough to vote us best in the county — we want to earn that again. Your [vehicle] is due...' Community pride + vehicle personalization = top-tier conversion." },
          { name: "Hook B — Post-Oil-Change Review & Referral Loop", pricing: "$5k / $10k / $2k mo", detail: "Every oil change gets a Master tech inspection. After every completed service, fire an automated SMS asking for a Google review and a referral. They already do premium work — they just aren't capturing the downstream value of every happy customer. This builds compounding reputation and referrals." },
        ],
      },
    ],
  },
];

export default function AnnArborPlaybook() {
  const [activeVertical, setActiveVertical] = useState(0);
  const [activeBiz, setActiveBiz] = useState(0);
  const [openHook, setOpenHook] = useState(0);
  const v = verticals[activeVertical];
  const b = v.businesses[activeBiz];

  return (
    <div style={{ minHeight: "100vh", background: "#070A0E", color: "#E8E4DC", fontFamily: "Georgia, serif", display: "flex", flexDirection: "column" }}>

      {/* Header */}
      <div style={{ padding: "24px 28px 16px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ fontSize: "10px", letterSpacing: "3px", color: "rgba(255,255,255,0.22)", fontFamily: "'Courier New', monospace", marginBottom: "8px" }}>
          ANN ARBOR, MI — LOCAL BRAND TARGET LIST — READY TO DIAL
        </div>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(18px, 3vw, 28px)", fontWeight: 900, margin: 0, letterSpacing: "-0.5px", lineHeight: 1.1 }}>
          20 Businesses. Real Owners. Real Numbers.
        </h1>
      </div>

      {/* Vertical Tabs */}
      <div style={{ display: "flex", gap: "0", borderBottom: "1px solid rgba(255,255,255,0.06)", overflowX: "auto" }}>
        {verticals.map((vert, i) => (
          <button key={vert.id} onClick={() => { setActiveVertical(i); setActiveBiz(0); setOpenHook(0); }}
            style={{
              padding: "14px 20px", background: activeVertical === i ? `${vert.color}15` : "transparent",
              border: "none", borderBottom: `2px solid ${activeVertical === i ? vert.color : "transparent"}`,
              cursor: "pointer", color: activeVertical === i ? vert.color : "rgba(255,255,255,0.4)",
              fontFamily: "'Courier New', monospace", fontSize: "11px", letterSpacing: "1.5px",
              textTransform: "uppercase", whiteSpace: "nowrap", transition: "all 0.2s",
            }}>
            {vert.emoji} {vert.label}
          </button>
        ))}
      </div>

      <div style={{ display: "flex", flex: 1, flexWrap: "wrap" }}>

        {/* Business List Sidebar */}
        <div style={{ width: "210px", minWidth: "160px", borderRight: "1px solid rgba(255,255,255,0.06)", padding: "16px 12px", display: "flex", flexDirection: "column", gap: "8px", flexShrink: 0 }}>
          <div style={{ fontSize: "10px", letterSpacing: "1.5px", color: "rgba(255,255,255,0.2)", fontFamily: "'Courier New', monospace", marginBottom: "4px", padding: "0 4px" }}>
            {v.businesses.length} TARGETS
          </div>
          {v.businesses.map((biz, i) => (
            <button key={i} onClick={() => { setActiveBiz(i); setOpenHook(0); }}
              style={{
                background: activeBiz === i ? `${v.color}18` : "transparent",
                border: `1px solid ${activeBiz === i ? v.color + "50" : "rgba(255,255,255,0.07)"}`,
                borderRadius: "8px", padding: "10px 12px", cursor: "pointer", textAlign: "left", transition: "all 0.2s",
              }}>
              <div style={{ color: activeBiz === i ? v.color : "rgba(255,255,255,0.75)", fontSize: "12px", fontFamily: "'Playfair Display', serif", fontWeight: 700, lineHeight: 1.3 }}>{biz.name}</div>
              <div style={{ color: "rgba(255,255,255,0.3)", fontSize: "10px", marginTop: "3px", fontFamily: "'Courier New', monospace" }}>{biz.tag}</div>
            </button>
          ))}

          {/* Segment Callout */}
          <div style={{ marginTop: "12px", background: `${v.color}10`, border: `1px solid ${v.color}25`, borderRadius: "8px", padding: "12px" }}>
            <div style={{ fontSize: "9px", letterSpacing: "1.5px", color: v.color, fontFamily: "'Courier New', monospace", marginBottom: "8px" }}>VERTICAL HOOK</div>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "11px", lineHeight: 1.6, margin: 0 }}>{v.segment.pull}</p>
          </div>
        </div>

        {/* Main Content */}
        <div style={{ flex: 1, padding: "24px 28px", overflowY: "auto", minWidth: "260px" }}>

          {/* Biz Header */}
          <div style={{ marginBottom: "20px" }}>
            <div style={{ display: "flex", gap: "10px", alignItems: "baseline", flexWrap: "wrap", marginBottom: "4px" }}>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(18px, 3vw, 24px)", fontWeight: 900, margin: 0, color: v.color }}>{b.name}</h2>
              <span style={{ fontSize: "10px", fontFamily: "'Courier New', monospace", letterSpacing: "1.5px", color: v.color, border: `1px solid ${v.color}40`, borderRadius: "4px", padding: "2px 8px", background: `${v.color}15` }}>{b.tag}</span>
            </div>
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "13px", lineHeight: 1.75, margin: "10px 0 0", maxWidth: "660px" }}>{b.overview}</p>
          </div>

          <div style={{ height: "1px", background: `${v.color}20`, margin: "16px 0" }} />

          {/* Data Profile */}
          <div style={{ marginBottom: "20px" }}>
            <Label label="Why Their Data Is Gold" color={v.color} />
            <div style={{ background: `${v.color}08`, border: `1px solid ${v.color}25`, borderLeft: `3px solid ${v.color}`, borderRadius: "0 8px 8px 0", padding: "14px 18px" }}>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "13px", lineHeight: 1.75, margin: 0 }}>{b.dataProfile}</p>
            </div>
          </div>

          {/* Contacts */}
          <div style={{ marginBottom: "20px" }}>
            <Label label="Who To Call" color={v.color} />
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {b.contacts.map((c, i) => (
                <div key={i} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "8px", padding: "14px 16px" }}>
                  <div style={{ display: "flex", gap: "8px", alignItems: "baseline", flexWrap: "wrap", marginBottom: "6px" }}>
                    <span style={{ color: "#fff", fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "14px" }}>{c.name}</span>
                    <span style={{ color: v.color, fontSize: "10px", fontFamily: "'Courier New', monospace" }}>{c.title}</span>
                    <span style={{ color: "rgba(255,255,255,0.25)", fontSize: "10px", fontFamily: "'Courier New', monospace", marginLeft: "auto" }}>{c.phone}</span>
                  </div>
                  <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "12px", margin: 0, lineHeight: 1.6 }}>{c.why}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Call Script */}
          <div style={{ marginBottom: "20px" }}>
            <Label label="What To Say When They Pick Up" color={v.color} />
            <div style={{ background: "#0C1018", border: `1px solid ${v.color}25`, borderRadius: "8px", padding: "16px 18px" }}>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "13px", lineHeight: 1.85, margin: 0, fontStyle: "italic" }}>{b.callScript}</p>
            </div>
          </div>

          {/* SMS */}
          <div style={{ marginBottom: "20px" }}>
            <Label label="The SMS That Drives $5k+ Same Day" color={v.color} />
            <div style={{ background: "#0C1018", border: `1px solid ${v.color}30`, borderRadius: "8px", padding: "16px 18px", marginBottom: "8px" }}>
              <div style={{ fontSize: "9px", letterSpacing: "1.5px", color: v.color, fontFamily: "'Courier New', monospace", marginBottom: "10px" }}>SEND THIS LIVE IN THE ROOM</div>
              <p style={{ color: "#E8E4DC", fontSize: "13px", lineHeight: 1.8, margin: "0 0 10px" }}>{v.segment.message}</p>
              <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "11px", fontStyle: "italic", margin: 0 }}>💡 {v.segment.why}</p>
            </div>
          </div>

          <div style={{ height: "1px", background: `${v.color}20`, margin: "16px 0" }} />

          {/* Hooks */}
          <Label label="Pitch Options" color={v.color} />
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {b.hooks.map((h, i) => (
              <div key={i} style={{
                background: openHook === i ? `${v.color}10` : "rgba(255,255,255,0.02)",
                border: `1px solid ${openHook === i ? v.color + "40" : "rgba(255,255,255,0.07)"}`,
                borderRadius: "10px", overflow: "hidden",
              }}>
                <button onClick={() => setOpenHook(openHook === i ? -1 : i)}
                  style={{ width: "100%", padding: "14px 18px", background: "transparent", border: "none", cursor: "pointer", textAlign: "left", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <div style={{ color: "#fff", fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "14px", marginBottom: "3px" }}>{h.name}</div>
                    <div style={{ color: v.color, fontSize: "11px", fontFamily: "'Courier New', monospace" }}>{h.pricing}</div>
                  </div>
                  <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "16px" }}>{openHook === i ? "−" : "+"}</span>
                </button>
                {openHook === i && (
                  <div style={{ padding: "0 18px 18px" }}>
                    <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "13px", lineHeight: 1.75, margin: 0 }}>{h.detail}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ padding: "12px 28px", borderTop: "1px solid rgba(255,255,255,0.05)", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "8px" }}>
        <span style={{ color: "rgba(255,255,255,0.15)", fontSize: "10px", fontFamily: "'Courier New', monospace" }}>ANN ARBOR, MI · 4 VERTICALS · 20 TARGETS</span>
        <span style={{ color: "rgba(255,255,255,0.15)", fontSize: "10px", fontFamily: "'Courier New', monospace" }}>TOOLS: SUBTEXT · SOCI · CLAUDE AGENT · AKILLION</span>
      </div>
    </div>
  );
}

function Label({ label, color }) {
  return (
    <div style={{ fontSize: "10px", letterSpacing: "2px", color: "rgba(255,255,255,0.28)", textTransform: "uppercase", fontFamily: "'Courier New', monospace", marginBottom: "12px", display: "flex", alignItems: "center", gap: "8px" }}>
      <div style={{ width: "14px", height: "1px", background: color }} />{label}
    </div>
  );
}
