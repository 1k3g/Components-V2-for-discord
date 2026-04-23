import {
    ContainerBuilder,
    TextDisplayBuilder,
    SeparatorBuilder,
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    MessageFlags
} from 'discord.js';

// Construire le container
const container = new ContainerBuilder();

const header = new TextDisplayBuilder()
    .setContent('# 🛑 Titre principal');

const body = new TextDisplayBuilder()
    .setContent('Contenu du message ici.');

const footer = new TextDisplayBuilder()
    .setContent('*Footer • Date*');

container
    .addTextDisplayComponents(header)
    .addSeparatorComponents(new SeparatorBuilder())
    .addTextDisplayComponents(body)
    .addSeparatorComponents(new SeparatorBuilder())
    .addTextDisplayComponents(footer);

// Boutons (optionnel)
const row = new ActionRowBuilder().addComponents(
    new ButtonBuilder()
        .setCustomId('btn_example')
        .setLabel('Cliquer')
        .setStyle(ButtonStyle.Primary)
);

// Envoyer
await channel.send({
    components: [container, row],
    flags: [MessageFlags.IsComponentsV2],
    allowedMentions: { parse: ['users'] }
});

// Modifier un message existant
await message.edit({
    components: [container, row],
    flags: [MessageFlags.IsComponentsV2]
});
