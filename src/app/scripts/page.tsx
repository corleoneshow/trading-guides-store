"use client";

import { useState } from "react";
import Link from "next/link";

type ScriptType = "quick-tip" | "mistake" | "tutorial" | "comparison" | "myth-buster";

interface GeneratedScript {
  hook: string;
  body: string[];
  cta: string;
  hashtags: string;
  duration: string;
}

const scriptTemplates: Record<ScriptType, { name: string; description: string; duration: string }> = {
  "quick-tip": {
    name: "Quick Tip",
    description: "15-30 second tip that provides immediate value",
    duration: "15-30 sec",
  },
  "mistake": {
    name: "Common Mistake",
    description: "Highlight a mistake beginners make and how to avoid it",
    duration: "30-45 sec",
  },
  "tutorial": {
    name: "Mini Tutorial",
    description: "Step-by-step explanation of a concept or strategy",
    duration: "45-60 sec",
  },
  "comparison": {
    name: "This vs That",
    description: "Compare two concepts, strategies, or approaches",
    duration: "30-45 sec",
  },
  "myth-buster": {
    name: "Myth Buster",
    description: "Debunk a common misconception about trading",
    duration: "30-45 sec",
  },
};

const topicScripts: Record<string, Record<ScriptType, GeneratedScript>> = {
  "what are options": {
    "quick-tip": {
      hook: "You can control $10,000 worth of stock for just $200. Here's how options work.",
      body: [
        "An option is a contract that gives you the RIGHT to buy or sell a stock at a specific price.",
        "You're not buying the stock. You're buying the opportunity.",
        "If you're right, you can make 10x your money. If you're wrong, you only lose what you paid.",
      ],
      cta: "Follow for more options basics. Link in bio for my complete guide.",
      hashtags: "#optionstradingforbeginners #options101 #stockmarket #investing #tradingtips",
      duration: "25 sec",
    },
    "mistake": {
      hook: "Most people think options are gambling. They're wrong. Here's why.",
      body: [
        "Options aren't gambling when you understand what you're doing.",
        "The mistake is jumping in without learning the basics first.",
        "Options are tools. Like any tool, they can build wealth or cause damage.",
        "Learn the fundamentals before you trade a single contract.",
      ],
      cta: "Want to learn the right way? Link in bio.",
      hashtags: "#optionstradingforbeginners #tradingmistakes #stockmarket #investing",
      duration: "35 sec",
    },
    "tutorial": {
      hook: "Options explained in 60 seconds. Save this.",
      body: [
        "Step 1: An option gives you the right to buy or sell a stock at a set price.",
        "Step 2: CALL options profit when stocks go UP. PUT options profit when stocks go DOWN.",
        "Step 3: You pay a 'premium' for this right. That's your max loss.",
        "Step 4: Each contract controls 100 shares of stock.",
        "That's why a $3 option actually costs $300.",
      ],
      cta: "Follow for part 2 where I show you your first trade.",
      hashtags: "#optionstradingforbeginners #options101 #stockmarket #tradingtutorial",
      duration: "55 sec",
    },
    "comparison": {
      hook: "Stocks vs Options. Which one should you trade?",
      body: [
        "Stocks: You own a piece of the company. Slower gains, lower risk.",
        "Options: You control shares without owning them. Faster gains, higher risk.",
        "With $1,000 in stocks, a 10% move makes you $100.",
        "With $1,000 in options, a 10% move could make you $500 or more.",
        "But options can also go to zero. Stocks rarely do.",
      ],
      cta: "Which do you prefer? Comment below. Follow for more.",
      hashtags: "#stocksvsoptions #optionstradingforbeginners #investing #stockmarket",
      duration: "40 sec",
    },
    "myth-buster": {
      hook: "Options are NOT gambling. Let me explain.",
      body: [
        "Myth: Options are just like going to a casino.",
        "Reality: Casinos have fixed odds against you. Options don't.",
        "With options, YOU choose your probability of profit.",
        "You can trade options with 70%, 80%, even 90% win rates.",
        "The key is education. Gamblers don't study. Traders do.",
      ],
      cta: "Ready to learn the real way to trade options? Link in bio.",
      hashtags: "#optionsmyths #optionstradingforbeginners #tradingmindset #investing",
      duration: "40 sec",
    },
  },
  "calls vs puts": {
    "quick-tip": {
      hook: "Calls go up. Puts go down. Here's the easy way to remember.",
      body: [
        "CALL: You're CALLING the stock to you. You want to BUY it. You're bullish.",
        "PUT: You're PUTTING the stock away. You want to SELL it. You're bearish.",
        "That's it. Calls = bullish. Puts = bearish.",
      ],
      cta: "Save this. You'll need it. Follow for more.",
      hashtags: "#callsandputs #optionstradingforbeginners #options101 #tradingtips",
      duration: "20 sec",
    },
    "mistake": {
      hook: "Beginners always buy calls. Here's why that's a mistake.",
      body: [
        "Everyone starts by buying calls because they're bullish on everything.",
        "But the market doesn't always go up.",
        "And even when it does, time decay eats your profits.",
        "Smart traders use BOTH calls and puts depending on the setup.",
        "Don't be one-dimensional.",
      ],
      cta: "Follow to learn when to use each one.",
      hashtags: "#tradingmistakes #optionstradingforbeginners #callsandputs #tradingtips",
      duration: "35 sec",
    },
    "tutorial": {
      hook: "When to buy calls vs puts. A simple framework.",
      body: [
        "Step 1: Look at the trend. Is the stock going up or down?",
        "Step 2: Uptrend = consider calls. Downtrend = consider puts.",
        "Step 3: Check the news. Any catalysts coming?",
        "Step 4: Look at support and resistance levels.",
        "Buy calls near support. Buy puts near resistance.",
      ],
      cta: "Want the full strategy? Link in bio.",
      hashtags: "#callsandputs #optionstradingforbeginners #tradingstrategy #stockmarket",
      duration: "45 sec",
    },
    "comparison": {
      hook: "Calls vs Puts. Which one makes more money?",
      body: [
        "Calls have unlimited upside. Stocks can go up forever.",
        "Puts have limited upside. Stocks can only go to zero.",
        "But puts often move faster because fear is stronger than greed.",
        "Markets take stairs up and elevators down.",
        "Both have their place. Learn to use both.",
      ],
      cta: "Which do you trade more? Comment below.",
      hashtags: "#callsvsputs #optionstradingforbeginners #stockmarket #tradingtips",
      duration: "35 sec",
    },
    "myth-buster": {
      hook: "Buying puts is NOT betting against America.",
      body: [
        "Myth: Buying puts means you want stocks to crash.",
        "Reality: Puts are insurance. They protect your portfolio.",
        "Even Warren Buffett uses puts.",
        "Smart investors buy puts to hedge, not just to speculate.",
        "It's not bearish to be prepared for the downside.",
      ],
      cta: "Follow for more options myths debunked.",
      hashtags: "#putoptionsmyth #optionstradingforbeginners #hedging #investing",
      duration: "35 sec",
    },
  },
  "wheel strategy": {
    "quick-tip": {
      hook: "The wheel strategy pays me every single week. Here's how.",
      body: [
        "Step 1: Sell a put on a stock you want to own.",
        "Step 2: If assigned, sell covered calls on those shares.",
        "Step 3: Repeat. Collect premium every week.",
        "It's like getting paid to buy stocks at a discount.",
      ],
      cta: "Follow for the full breakdown.",
      hashtags: "#wheelstrategy #optionstradingforbeginners #passiveincome #stockmarket",
      duration: "25 sec",
    },
    "mistake": {
      hook: "The wheel strategy isn't free money. Here's what can go wrong.",
      body: [
        "Mistake 1: Wheeling stocks you don't want to own.",
        "Mistake 2: Selling puts on overhyped stocks at the top.",
        "Mistake 3: Not having enough cash for assignment.",
        "Mistake 4: Panic selling when the stock drops.",
        "The wheel works, but only if you follow the rules.",
      ],
      cta: "Want my wheel strategy rules? Link in bio.",
      hashtags: "#wheelstrategy #tradingmistakes #optionstradingforbeginners #investing",
      duration: "40 sec",
    },
    "tutorial": {
      hook: "The wheel strategy explained in 60 seconds.",
      body: [
        "The wheel has two parts: selling puts and selling covered calls.",
        "Part 1: Sell a cash-secured put on a stock you want to own.",
        "You collect premium immediately. That's yours to keep.",
        "If the stock stays above your strike, you keep the premium. Repeat.",
        "If assigned, you buy the stock at your strike price.",
        "Part 2: Now sell covered calls against your shares.",
        "Collect more premium while you wait for the stock to recover.",
        "When called away, start over with puts.",
      ],
      cta: "This is how I generate consistent income. Full guide in bio.",
      hashtags: "#wheelstrategy #optionstradingforbeginners #coveredcalls #cashsecuredputs",
      duration: "55 sec",
    },
    "comparison": {
      hook: "Wheel strategy vs buying and holding. Which is better?",
      body: [
        "Buy and hold: You wait for the stock to go up. That's it.",
        "Wheel strategy: You get paid while you wait.",
        "With the wheel, a flat stock still makes you money through premium.",
        "But the wheel caps your upside if the stock rockets.",
        "For slow, steady income: wheel. For moonshots: buy and hold.",
      ],
      cta: "Which strategy fits you? Comment below.",
      hashtags: "#wheelstrategy #buyandhold #optionstradingforbeginners #investingstrategy",
      duration: "40 sec",
    },
    "myth-buster": {
      hook: "The wheel is NOT passive income. Here's the truth.",
      body: [
        "Myth: Set it and forget it. The wheel runs itself.",
        "Reality: You need to manage positions actively.",
        "You need to pick the right stocks at the right prices.",
        "You need to adjust when things go wrong.",
        "It's simpler than day trading, but it's not truly passive.",
      ],
      cta: "Follow for realistic trading advice.",
      hashtags: "#wheelstrategy #passiveincomemyth #optionstradingforbeginners #tradingreality",
      duration: "35 sec",
    },
  },
  "time decay": {
    "quick-tip": {
      hook: "Your option loses money every single day. Here's why.",
      body: [
        "It's called theta decay or time decay.",
        "Options have an expiration date. Every day that passes, they lose value.",
        "The closer to expiration, the faster they decay.",
        "This is why option buyers often lose even when they're right on direction.",
      ],
      cta: "Follow to learn how to use time decay to your advantage.",
      hashtags: "#timedecay #theta #optionstradingforbeginners #options101",
      duration: "25 sec",
    },
    "mistake": {
      hook: "This is how time decay destroys beginner traders.",
      body: [
        "You buy a call. The stock goes sideways for a week.",
        "The stock hasn't moved, but your option is down 30%.",
        "That's time decay eating your premium.",
        "The fix: Buy options with more time, or sell options instead of buying.",
      ],
      cta: "Save this before it costs you money.",
      hashtags: "#timedecay #tradingmistakes #optionstradingforbeginners #theta",
      duration: "30 sec",
    },
    "tutorial": {
      hook: "How to beat time decay. A simple strategy.",
      body: [
        "Option buyers fight time decay. Option sellers benefit from it.",
        "Strategy 1: Buy options with 45+ days until expiration.",
        "Strategy 2: Sell options instead of buying them.",
        "Strategy 3: Use spreads to reduce your theta exposure.",
        "Time decay accelerates in the last 30 days. Avoid holding through that.",
      ],
      cta: "Which strategy will you try? Follow for more.",
      hashtags: "#timedecay #optionsstrategy #optionstradingforbeginners #theta",
      duration: "45 sec",
    },
    "comparison": {
      hook: "Buying options vs selling options. Time decay is the difference.",
      body: [
        "When you BUY options, time works against you.",
        "When you SELL options, time works for you.",
        "Buyers need the stock to move fast and far.",
        "Sellers just need the stock to stay in a range.",
        "90% of traders buy options. That's why 90% lose.",
      ],
      cta: "Think about that. Follow for more.",
      hashtags: "#timedecay #buyingvsselling #optionstradingforbeginners #tradingstrategy",
      duration: "35 sec",
    },
    "myth-buster": {
      hook: "Weekly options are NOT better because they're cheaper.",
      body: [
        "Myth: Cheaper options = better value.",
        "Reality: Cheap options have massive time decay.",
        "A weekly option loses value 4x faster than a monthly.",
        "You might be right on direction but still lose money.",
        "Pay more for time. It's worth it.",
      ],
      cta: "Stop buying weeklies. Follow for better strategies.",
      hashtags: "#weeklyoptions #timedecay #optionstradingforbeginners #tradingmyths",
      duration: "35 sec",
    },
  },
  "risk management": {
    "quick-tip": {
      hook: "Never risk more than 5% on a single trade. Here's why.",
      body: [
        "If you risk 5% and lose 5 trades in a row, you're down 25%.",
        "If you risk 20% and lose 5 trades in a row, you're wiped out.",
        "Position sizing is the difference between a bad week and blowing up your account.",
      ],
      cta: "Save this. It will save your account.",
      hashtags: "#riskmanagement #optionstradingforbeginners #tradingpsychology #positionsizing",
      duration: "25 sec",
    },
    "mistake": {
      hook: "I blew up my first trading account. Here's what I learned.",
      body: [
        "I put 50% of my account into one trade. I was certain.",
        "The stock went the wrong way. I lost half my money in a day.",
        "Now I never risk more than 2-5% per trade.",
        "Confidence is good. Overconfidence is account suicide.",
      ],
      cta: "Don't make my mistake. Follow for more lessons.",
      hashtags: "#tradingmistakes #riskmanagement #optionstradingforbeginners #tradinglessons",
      duration: "35 sec",
    },
    "tutorial": {
      hook: "How to size your options trades. Simple formula.",
      body: [
        "Step 1: Decide your max risk per trade. I use 2-5%.",
        "Step 2: Calculate: Account size x risk % = max loss.",
        "Step 3: Only buy options where max loss fits your risk.",
        "Example: $10,000 account x 3% = $300 max risk per trade.",
        "So you'd only buy options costing $300 or less.",
      ],
      cta: "Use this formula. Your future self will thank you.",
      hashtags: "#positionsizing #riskmanagement #optionstradingforbeginners #tradingformula",
      duration: "45 sec",
    },
    "comparison": {
      hook: "Risk 2% vs risk 10% per trade. Watch what happens.",
      body: [
        "Trader A risks 2%. After 10 losing trades: still has 80% of account.",
        "Trader B risks 10%. After 10 losing trades: only 35% left.",
        "Trader A can recover. Trader B is basically done.",
        "Losing streaks happen to everyone. Position sizing is survival.",
      ],
      cta: "Which trader do you want to be? Follow for more.",
      hashtags: "#riskmanagement #positionsizing #optionstradingforbeginners #tradingmath",
      duration: "35 sec",
    },
    "myth-buster": {
      hook: "You don't need to win most of your trades to be profitable.",
      body: [
        "Myth: Good traders win 80-90% of their trades.",
        "Reality: Many profitable traders win only 40-50%.",
        "The secret is risk/reward ratio.",
        "If your winners are 3x your losers, you profit even at 40% win rate.",
        "Stop chasing win rate. Focus on risk management.",
      ],
      cta: "This changed everything for me. Follow for more.",
      hashtags: "#riskmanagement #winrate #optionstradingforbeginners #tradingmyths",
      duration: "40 sec",
    },
  },
};

export default function ScriptGeneratorPage() {
  const [topic, setTopic] = useState("");
  const [scriptType, setScriptType] = useState<ScriptType>("quick-tip");
  const [generatedScript, setGeneratedScript] = useState<GeneratedScript | null>(null);
  const [customMode, setCustomMode] = useState(false);

  const availableTopics = Object.keys(topicScripts);

  const generateScript = () => {
    const normalizedTopic = topic.toLowerCase().trim();

    // Find matching topic
    const matchedTopic = availableTopics.find(t =>
      normalizedTopic.includes(t) || t.includes(normalizedTopic)
    );

    if (matchedTopic && topicScripts[matchedTopic][scriptType]) {
      setGeneratedScript(topicScripts[matchedTopic][scriptType]);
      setCustomMode(false);
    } else {
      // Generate a custom template
      setGeneratedScript({
        hook: `[HOOK about ${topic}] - Start with something surprising or a pain point`,
        body: [
          `[POINT 1] - Main concept about ${topic}`,
          `[POINT 2] - Supporting detail or example`,
          `[POINT 3] - Key takeaway or actionable tip`,
        ],
        cta: "Follow for more trading tips. Link in bio for my complete guide.",
        hashtags: "#optionstradingforbeginners #stockmarket #investing #tradingtips #options101",
        duration: scriptTemplates[scriptType].duration,
      });
      setCustomMode(true);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const getFullScript = () => {
    if (!generatedScript) return "";
    return `HOOK:\n${generatedScript.hook}\n\nBODY:\n${generatedScript.body.map((b, i) => `${i + 1}. ${b}`).join("\n")}\n\nCTA:\n${generatedScript.cta}\n\nHASHTAGS:\n${generatedScript.hashtags}`;
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Header */}
      <header className="border-b border-zinc-800">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">
            TradingGuides
          </Link>
          <span className="text-zinc-400 text-sm">Script Generator</span>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-2">TikTok Script Generator</h1>
        <p className="text-zinc-400 mb-8">Generate engaging scripts for your options trading content</p>

        {/* Input Section */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 mb-8">
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Topic</label>
            <input
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="e.g., what are options, calls vs puts, wheel strategy..."
              className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 focus:outline-none focus:border-emerald-500"
            />
            <div className="mt-2 flex flex-wrap gap-2">
              {availableTopics.map((t) => (
                <button
                  key={t}
                  onClick={() => setTopic(t)}
                  className="text-xs bg-zinc-800 hover:bg-zinc-700 px-3 py-1 rounded-full transition"
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Script Type</label>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {Object.entries(scriptTemplates).map(([type, info]) => (
                <button
                  key={type}
                  onClick={() => setScriptType(type as ScriptType)}
                  className={`p-3 rounded-lg border text-left transition ${
                    scriptType === type
                      ? "border-emerald-500 bg-emerald-500/10"
                      : "border-zinc-700 hover:border-zinc-600"
                  }`}
                >
                  <div className="font-medium text-sm">{info.name}</div>
                  <div className="text-xs text-zinc-400">{info.duration}</div>
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={generateScript}
            disabled={!topic}
            className="w-full bg-emerald-500 hover:bg-emerald-600 disabled:bg-zinc-700 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-lg transition"
          >
            Generate Script
          </button>
        </div>

        {/* Generated Script */}
        {generatedScript && (
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Your Script</h2>
              <div className="flex gap-2">
                <span className="text-sm text-zinc-400 bg-zinc-800 px-3 py-1 rounded-full">
                  {generatedScript.duration}
                </span>
                <button
                  onClick={() => copyToClipboard(getFullScript())}
                  className="text-sm bg-emerald-500 hover:bg-emerald-600 px-3 py-1 rounded-full transition"
                >
                  Copy All
                </button>
              </div>
            </div>

            {customMode && (
              <div className="bg-yellow-500/10 border border-yellow-500/50 text-yellow-200 px-4 py-3 rounded-lg mb-6 text-sm">
                This is a template. Fill in the brackets with your specific content.
              </div>
            )}

            <div className="space-y-6">
              {/* Hook */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-emerald-400 font-semibold">HOOK (First 3 seconds)</h3>
                  <button
                    onClick={() => copyToClipboard(generatedScript.hook)}
                    className="text-xs text-zinc-400 hover:text-white"
                  >
                    Copy
                  </button>
                </div>
                <p className="bg-zinc-800 p-4 rounded-lg">{generatedScript.hook}</p>
              </div>

              {/* Body */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-emerald-400 font-semibold">BODY (Main Content)</h3>
                  <button
                    onClick={() => copyToClipboard(generatedScript.body.join("\n"))}
                    className="text-xs text-zinc-400 hover:text-white"
                  >
                    Copy
                  </button>
                </div>
                <div className="bg-zinc-800 p-4 rounded-lg space-y-3">
                  {generatedScript.body.map((point, i) => (
                    <p key={i} className="flex gap-3">
                      <span className="text-emerald-400 font-bold">{i + 1}.</span>
                      <span>{point}</span>
                    </p>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-emerald-400 font-semibold">CTA (Call to Action)</h3>
                  <button
                    onClick={() => copyToClipboard(generatedScript.cta)}
                    className="text-xs text-zinc-400 hover:text-white"
                  >
                    Copy
                  </button>
                </div>
                <p className="bg-zinc-800 p-4 rounded-lg">{generatedScript.cta}</p>
              </div>

              {/* Hashtags */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-emerald-400 font-semibold">HASHTAGS</h3>
                  <button
                    onClick={() => copyToClipboard(generatedScript.hashtags)}
                    className="text-xs text-zinc-400 hover:text-white"
                  >
                    Copy
                  </button>
                </div>
                <p className="bg-zinc-800 p-4 rounded-lg text-sm text-zinc-300">
                  {generatedScript.hashtags}
                </p>
              </div>
            </div>

            {/* Tips */}
            <div className="mt-8 pt-6 border-t border-zinc-800">
              <h3 className="font-semibold mb-3">Recording Tips</h3>
              <ul className="text-sm text-zinc-400 space-y-2">
                <li>• Use screen recordings from TradingView for visuals</li>
                <li>• Add captions in CapCut (most viewers watch without sound)</li>
                <li>• Keep energy high in the AI voiceover settings</li>
                <li>• Post between 7-9am or 7-10pm for best reach</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
