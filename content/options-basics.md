# Options Trading Basics
### Your Complete Beginner's Guide to Trading Options

---

## Introduction

Welcome! If you've ever felt intimidated by options trading, you're not alone. Options seem complicated at first, but once you understand the basics, they become a powerful tool in your investing toolkit.

This guide will take you from zero to confidently understanding what options are, how they work, and how to make your first trade. No finance degree required—just a willingness to learn.

Let's get started.

---

## Chapter 1: What Are Options?

### The Simple Explanation

An option is a contract that gives you the **right** (but not the obligation) to buy or sell a stock at a specific price before a certain date.

Think of it like a reservation. Imagine you want to buy a house that's currently worth $300,000. You pay the owner $5,000 for the right to purchase that house for $300,000 anytime in the next 6 months—no matter what happens to the price.

- If the house goes up to $350,000, you exercise your option and buy it for $300,000. You just made $45,000 ($50,000 gain minus your $5,000 reservation fee).
- If the house drops to $250,000, you walk away and only lose your $5,000 reservation fee.

That's essentially how options work with stocks.

### Calls vs Puts

There are two types of options:

**CALL OPTIONS**
- Give you the right to BUY a stock at a set price
- You buy calls when you think the stock will go UP
- "I'm calling the stock to me"

**PUT OPTIONS**
- Give you the right to SELL a stock at a set price
- You buy puts when you think the stock will go DOWN
- "I'm putting the stock away from me"

### Why Trade Options?

**1. Leverage**
Control 100 shares of stock for a fraction of the cost. A $500 option contract might control $15,000 worth of stock.

**2. Limited Risk**
When you buy options, your maximum loss is what you paid. Unlike shorting stocks, you can't lose more than your investment.

**3. Income Generation**
Sell options to collect premium and generate consistent income from stocks you own.

**4. Hedging**
Protect your portfolio from downturns, like buying insurance for your stocks.

---

## Chapter 2: Key Terms You Must Know

Before placing your first trade, you need to understand these essential terms:

### Strike Price
The price at which you can buy (call) or sell (put) the underlying stock.

*Example: A $150 strike call on Apple gives you the right to buy Apple at $150, regardless of where the stock is trading.*

### Premium
The price you pay to buy an option (or receive when you sell one). This is quoted per share, but remember—each contract controls 100 shares.

*Example: A premium of $3.50 means you pay $350 per contract ($3.50 × 100 shares).*

### Expiration Date
The date when the option contract expires. After this date, the option is worthless if not exercised.

Options can expire:
- Weekly (every Friday)
- Monthly (third Friday of each month)
- Longer-term (LEAPS - up to 2+ years)

### In The Money (ITM)
An option has real value right now.
- Call is ITM when stock price > strike price
- Put is ITM when stock price < strike price

### Out of The Money (OTM)
An option has no real value yet.
- Call is OTM when stock price < strike price
- Put is OTM when stock price > strike price

### At The Money (ATM)
Stock price is equal (or very close) to the strike price.

### The Greeks (Simplified)

**Delta** - How much the option price moves when the stock moves $1
- Call deltas range from 0 to 1
- Put deltas range from -1 to 0
- Higher delta = option moves more with the stock

**Theta** - Time decay. How much value the option loses each day.
- Options lose value as expiration approaches
- This hurts option buyers, helps option sellers

**Implied Volatility (IV)** - How much movement the market expects
- High IV = expensive options (expecting big moves)
- Low IV = cheap options (expecting small moves)

---

## Chapter 3: How to Read an Options Chain

An options chain shows all available options for a stock. Here's how to read one:

### Sample Options Chain for XYZ Stock (Trading at $100)

```
CALLS                                    PUTS
Strike  Bid    Ask    Delta  Volume  |  Strike  Bid    Ask    Delta  Volume
─────────────────────────────────────|────────────────────────────────────
$95    $6.20  $6.40   0.75   1,200  |   $95   $0.80  $0.95  -0.20   800
$100   $3.00  $3.20   0.50   3,500  |   $100  $2.90  $3.10  -0.50   3,200
$105   $1.20  $1.35   0.30   2,100  |   $105  $5.80  $6.00  -0.72   950
```

### Understanding the Numbers

**Bid**: What buyers will pay (you get this when selling)
**Ask**: What sellers want (you pay this when buying)
**Spread**: The difference between bid and ask (tighter is better)

### Picking the Right Strike

- **ITM options**: More expensive, higher probability of profit, less leverage
- **ATM options**: Moderate price, ~50% chance of expiring ITM
- **OTM options**: Cheaper, lower probability, higher potential % return

**Beginner tip**: Start with ATM or slightly ITM options. OTM options are tempting because they're cheap, but they expire worthless more often.

---

## Chapter 4: Your First Strategies

### Strategy 1: Buying Calls (Bullish)

**When to use**: You think a stock will go UP.

**How it works**:
1. Buy a call option
2. If the stock rises above your strike price + premium paid, you profit
3. Maximum loss = premium paid

**Example**:
- Stock XYZ is at $100
- You buy the $105 call for $2.00 ($200 total)
- Breakeven: $107 ($105 strike + $2 premium)
- If stock goes to $115: Your call is worth ~$10, profit of $800
- If stock stays at $100: You lose your $200 premium

### Strategy 2: Buying Puts (Bearish/Protection)

**When to use**: You think a stock will go DOWN, or you want to protect shares you own.

**How it works**:
1. Buy a put option
2. If the stock falls below your strike price - premium paid, you profit
3. Maximum loss = premium paid

**Example**:
- Stock XYZ is at $100
- You buy the $95 put for $1.50 ($150 total)
- Breakeven: $93.50 ($95 strike - $1.50 premium)
- If stock drops to $85: Your put is worth ~$10, profit of $850
- If stock rises: You lose your $150 premium

### Strategy 3: Selling Covered Calls (Income)

**When to use**: You own 100+ shares and want to generate income.

**How it works**:
1. Own at least 100 shares of stock
2. Sell a call option against your shares
3. Collect the premium immediately
4. If stock stays below strike: Keep premium + shares
5. If stock goes above strike: Shares get sold at strike price (still keep premium)

**Example**:
- You own 100 shares of XYZ at $100
- You sell the $110 call for $1.50 ($150 collected)
- If stock stays under $110: Keep $150, keep shares
- If stock goes to $115: Shares sold at $110, you keep $150 premium
- Total return: $10 capital gain + $1.50 premium = $11.50/share

**This is one of the safest ways to start with options.**

---

## Chapter 5: Risk Management

### Rule 1: Never Risk More Than You Can Afford to Lose

With options, assume every trade could go to zero. Only trade with money you can lose completely.

**Position sizing guideline**: Risk no more than 1-5% of your trading account on a single options trade.

### Rule 2: Understand Your Maximum Loss BEFORE Entering

When buying options:
- Max loss = Premium paid

When selling naked options:
- Max loss = Potentially unlimited (DON'T do this as a beginner)

### Rule 3: Have an Exit Plan

Before entering any trade, know:
- Your profit target (when will you sell?)
- Your stop loss (when will you cut losses?)

**Example exit rules**:
- Take profits at 50-100% gain
- Cut losses at 50% loss
- Exit if your thesis changes

### Rule 4: Watch Your Expiration

Time decay accelerates in the final 30 days. Don't hold options too close to expiration unless you have a specific reason.

**Beginner tip**: Buy options with at least 30-45 days until expiration.

### Common Beginner Mistakes to Avoid

1. **Buying far OTM options** - They're cheap for a reason (low probability)
2. **Ignoring time decay** - Your option loses value every day
3. **Trading too big** - One bad trade shouldn't blow up your account
4. **No exit plan** - Winners turn into losers without a plan
5. **Chasing earnings** - Volatility crush after earnings destroys option value
6. **Overtrading** - Quality over quantity

---

## Chapter 6: Getting Started

### Step 1: Choose a Broker

Look for:
- Low or no commissions on options
- Good mobile app and platform
- Educational resources
- Paper trading feature

**Popular options-friendly brokers**:
- TD Ameritrade (thinkorswim platform)
- Tastytrade
- Robinhood (simple but limited features)
- Interactive Brokers (advanced)
- Webull

### Step 2: Get Approved for Options Trading

Brokers require approval before you can trade options. You'll answer questions about:
- Your income and net worth
- Trading experience
- Investment objectives

**Be honest.** Start with Level 1 or 2 approval:
- Level 1: Covered calls, cash-secured puts
- Level 2: Buying calls and puts

### Step 3: Paper Trade First

Practice with fake money before risking real capital. Most brokers offer paper trading.

**Paper trade for at least 1-2 months** until you're consistently profitable.

### Step 4: Start Small

Your first real trade:
- Trade just 1 contract
- Use money you can afford to lose
- Pick a stock you know well
- Start with covered calls or buying calls/puts

### Pre-Trade Checklist

Before every trade, ask yourself:

- [ ] What's my thesis? (Why am I making this trade?)
- [ ] What's my profit target?
- [ ] What's my maximum loss?
- [ ] How much time until expiration?
- [ ] What's the implied volatility? (Is it high or low?)
- [ ] What's my exit plan if I'm wrong?

---

## Final Thoughts

Options trading is a skill that takes time to develop. You will make mistakes—everyone does. The key is to:

1. Start small
2. Learn from every trade
3. Never risk more than you can afford to lose
4. Keep educating yourself

The fact that you're reading this guide means you're already ahead of most traders who jump in without learning the basics first.

Now go paper trade, practice these strategies, and when you're ready—make your first trade.

Good luck!

---

*Disclaimer: This guide is for educational purposes only. Options trading involves significant risk and is not suitable for all investors. Past performance does not guarantee future results. Always do your own research and consider consulting a financial advisor before trading.*

---

© 2025 TradingGuides. All rights reserved.
