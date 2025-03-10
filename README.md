---

<h1 align="center">Airfarmbot Termux Edition</h1>

<p align="center">Automate your airdrop bot in Termux with session management powered by tmux!</p>

---

## 🚀 About Airfarmbot Termux Edition

**Airfarmbot Termux Edition** is a tool designed to automate airdrop bots in Termux with built‑in session management using tmux. It ensures that your bots remain active and up‑to‑date even if tmux sessions disconnect. This version has been updated to run on Node.js, making installation and usage simpler for JavaScript developers. The tool also features a user‑friendly interface with enhanced logging (using colors and emojis).

---

## 🌟 Version v2.15.2

### What's New in This Version

- **Raw Query Option:**  
  You can now add a `|raw` flag after the dApp URL in the `account.txt` file.

  - If the `|raw` flag is added, the query output will be returned as raw data (without decoding), preserving percent-encoding (except for a single level of decoding so that "=" appears properly).
  - If no flag is provided, the query output will be decoded for better readability.

- **Improved TIMEOUT Error Handling:**  
  Global error handlers now suppress TIMEOUT errors that occur during repository updates and tmux session management, preventing these errors from cluttering your logs.

---

## ⚙️ Key Features

- **Auto-Run with Delay:**  
  Automatically run your bots at specified intervals to keep sessions active.

- **Automatic Repository Updates:**  
  Keeps your bot's code up‑to‑date using `git pull`.

- **Detailed, User-Friendly Logging:**  
  Color‑coded logs with emojis provide clear and concise status updates and error messages.

- **Telegram Session Management:**  
  Automatically manages Telegram sessions for multiple accounts by storing session files locally.

- **Raw Query Extraction:**  
  Sends a RequestWebView to your bot’s dApp URL and extracts the query data from the URL fragment (the portion after `tgWebAppData=`).  
  If the `|raw` flag is specified in the account file, the query is output in raw format; otherwise, it is decoded for readability.

---

## ❗ Important Note

For the Auto Query system to work correctly, the dApp URL **must include "startapp"** in its query string.  
For example, the following URL will work:

```
https://t.me/RewardsHQ_bot/RewardsHQ?startapp=5438209644
```

However, a URL like the one below (using only `start`) will **not** be processed correctly:

```
https://t.me/otterlootbot?start=ref_6778b1d10091b8b33ebec9f9
```

---

## 📥 Installation Guide (Node.js)

### 1. Initial Setup

Ensure that you have [Node.js](https://nodejs.org/) and `git` installed.

### 2. Clone the Repository

Download the project code with the following command:

```bash
git clone https://github.com/livexords-nw/airfarmbot-termux-edition.git
```

### 3. Navigate to the Project Directory

Move into the project folder:

```bash
cd airfarmbot-termux-edition
```

### 4. Install Dependencies

Since this project is now implemented in Node.js, install the required Node module using:

```bash
npm install telegram
```

_(Only the `telegram` package is required, as other modules are built‑in.)_

### 5. Run the Bot

Execute your script with:

```bash
node main.js
```

---

## 🔧 Configuration in `config_bot.json`

Example configuration:

```json
{
  "update_repos": true,
  "auto_run": true,
  "delay_minutes": 5,
  "auto_query": true,
  "termux": true
}
```

- **`update_repos`**: Enables automatic repository updates.
- **`auto_run`**: Enables the auto‑run feature.
- **`delay_minutes`**: Time delay (in minutes) between each auto‑run.
- **`auto_query`**: Enables the auto query system.
- **`termux`**: Set to `true` to enable Termux‑specific features (like tmux session management); set to `false` to disable.

---

## 📂 Format for `sessions.txt`

Define bot sessions in `sessions.txt` with the following format:

```
session_name,directory,command
```

Example:

```
bot1,/home/user/bot1,python3 bot.py
bot2,/home/user/bot2,python3 bot.py
```

---

## 📄 Format for `account.txt` and `script_bot.txt`

- **`account.txt`**  
  Each line should follow this format:

  ```
  phone, @BotUsername|dapp_url, @BotUsername|dapp_url, ...
  ```

  **Example:**

  ```
  +6212345456, @RewardsHQ_bot|https://rewardshq.shards.tech/?startapp=5438209644, @OtherBot|https://otherdapp.example.com
  ```

  _To output the raw query, add `|raw` after the dApp URL:_

  ```
  +6285847103494, @RewardsHQ_bot|https://t.me/RewardsHQ_bot/RewardsHQ?startapp=5438209644|raw
  ```

- **`script_bot.txt`**  
  Each line maps a bot username to an output file:

  ```
  @BotUsername,C:\Users\YourName\Documents\airfarmbot\RewardsHQ\query.txt
  ```

---

## 📄 Bot Activity Logging

The logger outputs detailed messages such as:

- **🛑**: Skipping Git updates as per configuration.
- **✅**: Repository updated successfully.
- **🟢**: Session is already running.
- **❌**: Errors with descriptive messages.
- **🚀**: Starting the Auto Query System.
- **😴**: Sleeping between auto‑run cycles.

---

## 🤝 Contributors

This project is developed by **livexords**. For suggestions, questions, or contributions, feel free to reach out:

<div align="center">
  <a href="https://t.me/livexordsscript" target="_blank">
    <img src="https://img.shields.io/static/v1?message=Livexords&logo=telegram&label=&color=2CA5E0&logoColor=white&style=for-the-badge" height="25" alt="Telegram" />
  </a>
</div>

---
