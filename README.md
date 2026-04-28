# ✨ Discord Components V2 Message Builder

A minimal example showing how to **build and send a Discord Components V2 message** using `discord.js`.

---

## 🧱 Message Layout

The message is built using a structured container:

* 🏷️ **Header** — Main title
* 📝 **Body** — Main content
* 🔻 **Footer** — Additional info

Each section is separated with dividers for better readability.

---

## 💻 Example (`index.js`)

```js
import {
    ContainerBuilder,
    TextDisplayBuilder,
    SeparatorBuilder,
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    MessageFlags
} from 'discord.js';

// Build container
const container = new ContainerBuilder();

const header = new TextDisplayBuilder()
    .setContent('# 🛑 Main Title');

const body = new TextDisplayBuilder()
    .setContent('Message content goes here.');

const footer = new TextDisplayBuilder()
    .setContent('*Footer • Date*');

container
    .addTextDisplayComponents(header)
    .addSeparatorComponents(new SeparatorBuilder())
    .addTextDisplayComponents(body)
    .addSeparatorComponents(new SeparatorBuilder())
    .addTextDisplayComponents(footer);

// Optional button
const row = new ActionRowBuilder().addComponents(
    new ButtonBuilder()
        .setCustomId('btn_example')
        .setLabel('Click')
        .setStyle(ButtonStyle.Primary)
);

// Send message
await channel.send({
    components: [container, row],
    flags: [MessageFlags.IsComponentsV2],
    allowedMentions: { parse: ['users'] }
});

// Edit existing message
await message.edit({
    components: [container, row],
    flags: [MessageFlags.IsComponentsV2]
});
```

---

## 🔘 Features

* Clean container-based layout
* Optional interactive buttons
* Send or edit messages
* Uses **Components V2**

---

## ⚙️ Requirements

* Node.js
* `discord.js` (latest version)

---

## ▶️ Usage

```bash
npm install discord.js
node index.js
```

---

## 🧾 Structure Overview

```
Container
 ├── Header
 ├── Divider
 ├── Body
 ├── Divider
 ├── Footer
 └── (Optional) Buttons
```

---

## ✨ Summary

A simple, clean setup to create **modern and structured Discord messages** using Components V2.
