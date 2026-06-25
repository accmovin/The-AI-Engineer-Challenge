<p align = "center" draggable=”false” ><img src="https://github.com/AI-Maker-Space/LLM-Dev-101/assets/37101144/d1343317-fa2f-41e1-8af1-1dbb18399719" 
     width="200px"
     height="auto"/>
</p>


## <h1 align="center" id="heading"> 👋 Welcome to the AI Engineer Challenge</h1>

## 🤖 Your First Vibe Coding LLM Application

> If you are a novice, and need a bit more help to get your dev environment off the ground, check out this [Setup Guide](docs/GIT_SETUP.md). This guide will walk you through the 'git' setup you need to get started.

> For additional context on LLM development environments and API key setup, you can also check out our [Interactive Dev Environment for LLM Development](https://github.com/AI-Maker-Space/Interactive-Dev-Environment-for-AI-Engineers).

In this repository, we'll walk you through the steps to create a LLM (Large Language Model) powered application with a vibe-coded frontend!

Are you ready? Let's get started!

<details>
  <summary>🖥️ Accessing "gpt-4.1-mini" (ChatGPT) like a developer</summary>

1. Head to [this notebook](https://colab.research.google.com/drive/1sT7rzY_Lb1_wS0ELI1JJfff0NUEcSD72?usp=sharing) and follow along with the instructions!

2. Complete the notebook and try out your own system/assistant messages!

That's it! Head to the next step and start building your application!

</details>


<details>
  <summary>🏗️ Forking & Cloning This Repository</summary>

Before you begin, make sure you have:

1. 👤 A GitHub account (you'll need to replace `YOUR_GITHUB_USERNAME` with your actual username)
2. 🔧 Git installed on your local machine
3. 💻 A code editor (like Cursor, VS Code, etc.)
4. ⌨️ Terminal access (Mac/Linux) or Command Prompt/PowerShell (Windows)
5. 🔑 A GitHub Personal Access Token (for authentication)

Got everything in place? Let's move on!

1. Fork [this](https://github.com/AI-Maker-Space/The-AI-Engineer-Challenge) repo!

     ![image](https://i.imgur.com/bhjySNh.png)

1. Clone your newly created repo.

     ``` bash
     # First, navigate to where you want the project folder to be created
     cd PATH_TO_DESIRED_PARENT_DIRECTORY

     # Then clone (this will create a new folder called The-AI-Engineer-Challenge)
     git clone git@github.com:<YOUR GITHUB USERNAME>/The-AI-Engineer-Challenge.git
     ```

     > Note: This command uses SSH. If you haven't set up SSH with GitHub, the command will fail. In that case, use HTTPS by replacing `git@github.com:` with `https://github.com/` - you'll then be prompted for your GitHub username and personal access token.

2. Verify your git setup:

     ```bash
     # Check that your remote is set up correctly
     git remote -v

     # Check the status of your repository
     git status

     # See which branch you're on
     git branch
     ```

     <!-- > Need more help with git? Check out our [Detailed Git Setup Guide](docs/GIT_SETUP.md) for a comprehensive walkthrough of git configuration and best practices. -->

3. Open the freshly cloned repository inside Cursor!

     ```bash
     cd The-AI-Engineering-Challenge
     cursor .
     ```

4. Check out the existing backend code found in `/api/index.py`

</details>

<details>
  <summary>⚙️ Backend Setup with uv</summary>

1. Install the [`uv`](https://github.com/astral-sh/uv) package manager (`pip install uv`). `uv` will download and manage Python 3.12 for you the first time you run a project command.
2. From the project root, install dependencies with `uv sync`. This creates `.venv/` (and fetches Python 3.12 automatically if needed).
3. Set your OpenAI API key in the shell before running the server, for example `export OPENAI_API_KEY=sk-...`.
4. Start the backend directly from the project root with `uv run uvicorn api.index:app --reload`. The server will run on `http://localhost:8000` with auto-reload enabled for development.
5. Additional backend details live in `api/README.md`.

</details>

<details>
  <summary>🔥Setting Up for Vibe Coding Success </summary>

While it is a bit counter-intuitive to set things up before jumping into vibe-coding - it's important to remember that there exists a gradient betweeen AI-Assisted Development and Vibe-Coding. We're only reaching *slightly* into AI-Assisted Development for this challenge, but it's worth it!

1. Check out the rules in `.cursor/rules/` and add theme-ing information like colour schemes in `frontend-rule.mdc`! You can be as expressive as you'd like in these rules!
2. We're going to index some docs to make our application more likely to succeed. To do this - we're going to start with `CTRL+SHIFT+P` (or `CMD+SHIFT+P` on Mac) and we're going to type "custom doc" into the search bar. 

     ![image](https://i.imgur.com/ILx3hZu.png)
3. We're then going to copy and paste `https://nextjs.org/docs` into the prompt.

     ![image](https://i.imgur.com/psBjpQd.png)

4. We're then going to use the default configs to add these docs to our available and indexed documents.

     ![image](https://i.imgur.com/LULLeaF.png)

5. After that - you will do the same with Vercel's documentation. After which you should see:

     ![image](https://i.imgur.com/hjyXhhC.png) 

</details>

<details>
  <summary>😎 Vibe Coding a Front End for the FastAPI Backend</summary>

1. Use `Command-L` or `CTRL-L` to open the Cursor chat console. 

2. Set the chat settings to the following:

     ![image](https://i.imgur.com/LSgRSgF.png)

3. Ask Cursor to create a frontend for your application. Iterate as much as you like!

4. Run the frontend using the instructions Cursor provided. 

> NOTE: If you run into any errors, copy and paste them back into the Cursor chat window - and ask Cursor to fix them!

> NOTE: You have been provided with a backend in the `/api` folder - please ensure your Front End integrates with it!

</details>

<details>
  <summary>🚀 Deploying Your First LLM-powered Application with Vercel</summary>

1. Ensure you have signed into [Vercel](https://vercel.com/) with your GitHub account.

2. Ensure you have `npm` (this may have been installed in the previous vibe-coding step!) - if you need help with that, ask Cursor!

3. Run the command:

     ```bash
     npm install -g vercel
     ```

4. Run the command:

     ```bash
     vercel
     ```

5. Follow the in-terminal instructions. (Below is an example of what you will see!)

     ![image](https://i.imgur.com/D1iKGCq.png)

6. Once the build is completed - head to the provided link and try out your app!

> NOTE: Remember, if you run into any errors - ask Cursor to help you fix them!

### Vercel Link to Share

You'll want to make sure you share you *domains* hyperlink to ensure people can access your app!

![image](https://i.imgur.com/mpXIgIz.png)

> NOTE: Test this is the public link by trying to open your newly deployed site in an Incognito browser tab!

</details>

<details>
     <summary>🧪 Vibe Check Your LLM App</summary>

### 🤔 What is a Vibe Check?

Now that you’ve built and deployed your first LLM-powered application, it’s time to evaluate it.

In this section, you’ll run a **“vibe check”** — a lightweight, practical way to test how well your application performs across common tasks.

Think of it as a **first pass to catch obvious issues** before deeper evaluation.

> 💡 You will complete this directly in this README. 

---

## 🏗️ Activity #1: General Capability Vibe Check

Run the following prompts through your app.

For each prompt Identify what capability is being tested (e.g., *summarization ability, reasoning, creativity*)

---

**1. Prompt:**  
Explain the concept of object-oriented programming in simple terms to a complete beginner.  
**Aspect Tested:**  explanation/reasoning

**Response:**  
Think of object-oriented programming (OOP) as a way to organize code around “things” from the real world.

Core idea:
- Object = a thing. It has data (what it is) and actions (what it can do).
- Class = the recipe or blueprint for making those things.

Simple analogy:
- A class is like a cookie cutter or a blueprint for a house.
- An object is a specific cookie or a specific house made from that blueprint.
- The blueprint describes: properties (color, number of rooms) and behaviors (open door, turn on lights). Each house you build can have different paint or furniture, but all houses know how to “open door.”

Key concepts (in friendly terms):
- Encapsulation: Keep the data and the actions that work on that data in one place (like a TV with its buttons). You decide what’s public (the buttons) and what stays hidden inside (the wiring).
- Inheritance: Make a new class by reusing an existing one. A “GuideDog” is a specialized “Dog”—it gets all the Dog stuff for free and adds extras.
- Polymorphism: Give the same instruction to different objects, and each does it in its own way. Tell any “Animal” to speak: a Dog barks, a Cat meows.
- Abstraction: Focus on what matters, ignore the messy details. You drive a car with a steering wheel and pedals without thinking about the engine’s internals.

Tiny example (plain English “code”):
- Class: Dog
  - Data: name, age
  - Actions: bark(), haveBirthday()
- Create objects: dog1 = Dog("Fido", 3), dog2 = Dog("Luna", 1)
- Use them: dog1.bark() → “Woof!”, dog2.haveBirthday() → age becomes 2
- Inheritance: GuideDog extends Dog, adds guideOwner()
- Polymorphism: If you have animals = [Dog, Cat], calling speak() on each gives different sounds.

Why OOP helps:
- Makes code easier to think about (you model real things).
- Reuse and extend code instead of starting from scratch.
- Keeps details in one place, reducing bugs.

How to practice (quick wins):
- Pick a familiar domain (pets, library books, shopping cart).
- List nouns (Dog, Book, Cart) → classes/objects.
- For each, list what it knows (properties) and what it does (methods).
- Start small: one or two classes, create a few objects, call their methods.

You’ve got this—start with a tiny example, get it working, then grow it step by step.

---

**2. Prompt:**  
Read the following paragraph and provide a concise summary of the key points…  
**Aspect Tested:**  summarization ability/fallback

**Response:**  
I’m ready to help. Please paste the paragraph you’d like summarized. Do you prefer a one- or two-sentence summary or quick bullet points of the key takeaways?

---

**3. Prompt:**  
Write a short, imaginative story (100–150 words) about a robot finding friendship in an unexpected place.  
**Aspect Tested:**  creativity

**Response:**  
R-17 swept the night market long after lanterns winked out. One monsoon evening, rain pooled beneath a flickering holo-billboard, its code bleeding into the water. In the shallow mirror, pixels unraveled into koi, their fins shivering with ads and weather. R-17 paused; no protocol covered neon fish of glitches. It lowered a finger; ripples spelled hello in broken timestamps. Each night after, they met at the puddle. The koi taught R-17 to read rain: the algebra of drips, the commas of thunder. R-17 offered screws as pebbles to make currents kinder. When the sun returned and the billboard was repaired, the puddle went clear. Grief clanged through R-17’s chassis—until a bus stop screen flickered, and one koi winked, migrating through circuits like an idea. R-17 followed the glow from shelter to shelter, learning friendship swims where systems leak, and unexpected places can move with you.

---

**4. Prompt:**  
If a store sells apples in packs of 4 and oranges in packs of 3, how many packs of each do I need to buy to get exactly 12 apples and 9 oranges?  
**Aspect Tested:**  Reasoning

**Response:**  
Great question! 
- Apples: 12 apples ÷ 4 per pack = 3 packs
- Oranges: 9 oranges ÷ 3 per pack = 3 packs

So you’ll need 3 packs of apples and 3 packs of oranges. Nice and tidy!

---

**5. Prompt:**  
Rewrite the following paragraph in a professional, formal tone.

Halloou bestie, how is it hanging? I have been a bit up and down lately, the rollercoaster of life you know. 
**Aspect Tested:**  summarization

**Response:**  
Hello, I hope you are well. I have been experiencing some ups and downs lately; life can be unpredictable.

---

### ❓Question #1

Do the answers appear to be correct and useful?

**Your Answer:**  
Yes, they are as expected.

---

## 🏗️ Activity #2: Personal Use Vibe Check

Now test your app with **real-world prompts that are relevant to your use case**.

---

**Prompt:**  
Please elaborate on different RAG techniques and include citations

**Result:**  
Happy to help. Here’s a clear map of widely used Retrieval-Augmented Generation (RAG) techniques, along with citations so you can dig deeper when you’re ready.

Core retrieval and indexing
- Sparse retrieval (BM25): Classic term-matching with strong baselines and interpretability; great for exact matches and long-tail terms (Robertson & Zaragoza, 2009).
- Dense retrieval: Encodes queries/passages into vectors; excels at semantic matches. Key models include DPR (Karpukhin et al., 2020) and Sentence-BERT encoders for general similarity (Reimers & Gurevych, 2019).
- Late-interaction and multi-vector encoders: ColBERT uses token-level late interaction to improve recall while staying efficient (Khattab & Zaharia, 2020).
- Sparse–dense hybrids: Combine BM25 with dense scores or use learned sparse expansion (e.g., SPLADE v2) to capture both exact and semantic signals (Formal et al., 2021).
- ANN vector indexes: For scalable search over embeddings, FAISS (Johnson et al., 2017) and HNSW graphs (Malkov & Yashunin, 2018) are common.
- Chunking and overlap: Splitting documents into passages improves retrieval granularity; ordering retrieved chunks matters because LLMs can miss mid-context facts (“Lost in the Middle”)—put the most relevant content early or at the end (Liu et al., 2023).
- Diversification: Maximal Marginal Relevance (MMR) reduces redundancy while covering subtopics (Carbonell & Goldstein, 1998).

Query understanding and expansion
- Query rewriting and decomposition: Break complex questions into sub-queries or reformulate them before retrieval. Techniques include Self-Ask-style decomposition (Press et al., 2022), ReAct prompting that alternates reasoning and retrieval (Yao et al., 2023), and IRCoT which interleaves retrieval with chain-of-thought (Trivedi et al., 2023).
- Hypothetical Document Embeddings (HyDE): Have the LLM draft a plausible answer/document, embed it, and retrieve by that embedding to improve zero-shot retrieval (Gao et al., 2023).
- Pseudo-relevance feedback and query expansion: Use initially retrieved passages to refine the query; modern counterparts build on classical PRF and doc2query ideas (Nogueira et al., 2019).

Reranking
- Two-stage retrieval: Use a fast retriever to get candidates, then apply a stronger reranker.
- Cross-encoder rerankers: Score query–document pairs jointly for high accuracy (e.g., MonoT5) and often deliver big quality gains at modest k (Nogueira et al., 2020). Late-interaction (ColBERT) can also serve as a powerful second stage (Khattab & Zaharia, 2020).

Fusing retrieval with generation
- Concatenate top-k passages in the prompt: Simple and effective for many use cases; ordering and chunk selection matter (Liu et al., 2023).
- Fusion-in-Decoder (FiD): Encodes each passage separately and fuses them in the decoder, improving multi-evidence QA (Izacard & Grave, 2021).
- RAG (original): Jointly retrieves and generates, marginalizing over passages to reduce hallucination and improve factuality (Lewis et al., 2020).
- RETRO: Conditions generation on nearest-neighbor chunks at each step with a learned retrieval module (Borgeaud et al., 2022).
- REALM and Atlas: Retrieval-aware pretraining/fine-tuning for knowledge-intensive tasks and few-shot generalization (Guu et al., 2020; Izacard et al., 2022).

Iterative and closed-loop RAG
- Multi-step retrieval: The model retrieves, reasons, then retrieves again as needed (IRCoT; Trivedi et al., 2023).
- Self-RAG: The model learns to retrieve, generate, and critique its own outputs, using feedback signals to decide when and what to retrieve and to reduce hallucinations (Asai et al., 2024).

Structured and graph-aware RAG
- SQL/BI RAG: Retrieve from structured sources (SQL, dataframes) via text-to-SQL, then ground the answer on retrieved rows; often combined with text retrieval for context (surveys cover this space broadly).
- Knowledge-graph/Graph RAG: Build or leverage graphs (entities/relations) to retrieve subgraphs or path evidence for complex questions; practical implementations and reports are available from Microsoft’s GraphRAG work (Microsoft Research, 2024).

Context optimization and efficiency
- Context selection and ordering: Prioritize highest-signal chunks and place them where the model pays attention (top or bottom of context) to mitigate “lost in the middle” (Liu et al., 2023).
- Summarization and key-passage extraction: Compress retrieved sets into targeted summaries before generation to fit budget while preserving evidence (FiD shows benefits of multi-evidence fusion; Izacard & Grave, 2021).
- Deduplication and diversity: Use MMR or embedding-based clustering to avoid repeating near-duplicates (Carbonell & Goldstein, 1998).

Evaluation and diagnostics
- Retrieval benchmarks: BEIR is a strong, multi-dataset benchmark for retrieval methods (Thakur et al., 2021).
- End-to-end grounding: KILT evaluates knowledge-intensive tasks with retrieval and answer grounding (Petroni et al., 2021).
- Practical QA/RAG evaluation: Toolkits like RAGAS provide faithfulness/answer quality diagnostics using reference documents and LLM-based grading (RAGAS, 2023).

Practical patterns to start strong
- Use hybrid search (BM25 + dense) with MMR for diversity.
- Chunk at semantic boundaries with modest overlap; keep chunks ~200–400 tokens where feasible.
- Apply a cross-encoder reranker on the top 50–200 candidates; pass the top 3–8 passages to the LLM.
- Consider HyDE for tail or underspecified queries, and iterative retrieval (IRCoT-like) for multi-hop questions.
- Prefer FiD-style fusion or careful prompt orchestration for multi-document answers; always cite retrieved sources in the output.
- Monitor with retrieval recall@k, rerank MRR, and end-to-end grounded metrics (BEIR/KILT/RAGAS).

Selected references (open-access where possible)
- Lewis, P. et al. (2020). Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks. https://arxiv.org/abs/2005.11401
- Izacard, G. & Grave, E. (2021). Leveraging Passage Retrieval with Generative QA (FiD). https://arxiv.org/abs/2007.01282
- Borgeaud, S. et al. (2022). Improving language models by retrieving from trillions of tokens (RETRO). https://arxiv.org/abs/2112.04426
- Guu, K. et al. (2020). REALM: Retrieval-Augmented Language Model Pre-Training. https://arxiv.org/abs/2002.08909
- Izacard, G. et al. (2022). Atlas: Few-shot Learning with Retrieval Augmented Language Models. https://arxiv.org/abs/2208.03299
- Karpukhin, V. et al. (2020). Dense Passage Retrieval for Open-Domain QA. https://arxiv.org/abs/2004.04906
- Reimers, N. & Gurevych, I. (2019). Sentence-BERT. https://arxiv.org/abs/1908.10084
- Khattab, O. & Zaharia, M. (2020). ColBERT: Efficient and Effective Passage Search via Contextualized Late Interaction. https://arxiv.org/abs/2004.12832
- Formal, T. et al. (2021). SPLADE v2: Sparse Lexical and Expansion Model for IR. https://arxiv.org/abs/2109.10086
- Johnson, J., Douze, M., & Jégou, H. (2017). FAISS. https://arxiv.org/abs/1702.08734
- Malkov, Y. & Yashunin, D. (2018). Efficient and Robust Approximate Nearest Neighbor Search Using HNSW. https://arxiv.org/abs/1603.09320
- Carbonell, J. & Goldstein, J. (1998). The Use of MMR for Diversity-Based Re-ranking. https://dl.acm.org/doi/10.1145/290941.291025
- Liu, N. F. et al. (2023). Lost in the Middle: How Language Models Use Long Context. https://arxiv.org/abs/2307.03172
- Press, O. et al. (2022). Measuring and Narrowing the Compositionality Gap in Language Models (Self-Ask). https://arxiv.org/abs/2210.03350
- Yao, S. et al. (2023). ReAct: Synergizing Reasoning and Acting in Language Models. https://arxiv.org/abs/2210.03629
- Trivedi, H. et al. (2023). Interleaving Retrieval with Chain-of-Thought Reasoning (IRCoT). https://arxiv.org/abs/2212.10509
- Gao, L. et al. (2023). Precise Zero-Shot Dense Retrieval without Relevance Labels (HyDE). https://arxiv.org/abs/2212.10496
- Nogueira, R. et al. (2019). Document Expansion by Query Prediction (doc2query). https://arxiv.org/abs/1904.08375
- Nogueira, R. et al. (2020). Document Ranking with a Pretrained Sequence-to-Sequence Model (MonoT5). https://arxiv.org/abs/2003.06713
- Thakur, N. et al. (2021). BEIR: A Heterogeneous Benchmark for Zero-shot Evaluation of IR. https://arxiv.org/abs/2104.08663
- Petroni, F. et al. (2021). KILT: a Benchmark for Knowledge Intensive Language Tasks. https://arxiv.org/abs/2009.02252
- Asai, A. et al. (2024). Self-RAG: Learning to Retrieve, Generate, and Critique. https://arxiv.org/abs/2310.11511
- Microsoft Research (2024). GraphRAG resources and examples. https://github.com/microsoft/graphrag

If you want, tell me your use case (QA, analytics, coding copilots, support bots, etc.), and I’ll suggest a minimal, high-impact RAG stack to start with.

---

### ❓Question #2

Are the vibes of your assistant aligned with your expectations? Why or why not?

**Your Answer:**  
I am a bit unsure of our specific use case, therefore I did not test more. But seems impressive without validating the sources.

---

## 🏗️ Activity #3: Capability Gaps Vibe Check

Now test your app with prompts that require **capabilities it may not have yet**, such as:
- Real-time data
- Memory
- External tools

Examples:
- “What does my schedule look like tomorrow?”
- “What time should I leave for the airport?”

---

**Prompt:**  
Who was the latest prime minister of UK to resign?

**Result:**  
Rishi Sunak. He tendered his resignation to King Charles III on 5 July 2024 after the general election, and was succeeded by Keir Starmer.

---

**Prompt:**  
Which teams have qualified for the FIFA World Cup 2026 knockout stage?

**Result:**  
 don’t have real-time access to 2026 results, so I can’t see which teams have clinched knockout spots right now.

Quick ways to check:
- FIFA.com or the FIFA app: “Standings” → World Cup 2026 → Groups will show teams marked as qualified.
- Reputable outlets (BBC Sport, ESPN, The Athletic) or LiveScore/OneFootball apps.
- Search tip: “World Cup 2026 qualified to knockout stage” or “Round of 32 qualifiers FIFA.”

If helpful, here’s how qualification works this edition:
- 12 groups of 4.
- Top 2 in each group (24 teams) + the 8 best third-placed teams advance to the Round of 32.
- Standard tie-breakers apply in groups (points, goal difference, goals scored, etc.); best third-placed ranking is primarily by points, then goal difference, then goals scored.

If you share the current group tables or a link, I’ll list the qualified teams for you and map out potential Round of 32 matchups. Which team are you following most closely?


---

### ❓Question #3

What are some limitations of your application?

**Your Answer:**  
Recent data information and inability to retrieve that information through web search.

---

## 🚀 (Optional) Improve Your App

Based on your vibe check, try improving your application:
- Adjust your prompt
- Change the model
- Add features

Then rerun your vibe check and document:

---

**Adjustments Made:**  
<!-- Describe what you changed -->

**Results:**  
<!-- What improved? What didn’t? -->

---

## 📦 Submission Instructions

1. Complete this section directly in your README
2. Commit and push your changes to GitHub
3. Share your **repo link + deployed Vercel app**








</details>

### 🎉 Congratulations! 

You just deployed your first LLM-powered application! 🚀🚀🚀 Get on linkedin and post your results and experience! Make sure to tag us at @AIMakerspace!

Here's a template to get your post started!

```
🚀🎉 Exciting News! 🎉🚀

🏗️ Today, I'm thrilled to announce that I've successfully built and shipped my first-ever LLM using the powerful combination of , and the OpenAI API! 🖥️

Check it out 👇
[LINK TO APP]

A big shoutout to the @AI Makerspace for all making this possible. Couldn't have done it without the incredible community there. 🤗🙏

Looking forward to building with the community! 🙌✨ Here's to many more creations ahead! 🥂🎉

Who else is diving into the world of AI? Let's connect! 🌐💡

#FirstLLMApp 
```
