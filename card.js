#!/usr/bin/env node

import boxen from 'boxen';
import chalk from 'chalk';
import inquirer from 'inquirer';
import clear from 'clear';
import open from 'open';
import request from 'request';
import path from 'path';
import ora from 'ora';
import cliSpinners from 'cli-spinners';

clear();

const prompt = inquirer.createPromptModule();

const questions = [
    {
        type: "list",
        name: "action",
        message: "Choose your action",
        choices: [
            {
                name: `Send me an ${chalk.green.bold("email")}?`,
                value: () => {
                    open("mailto:kaurbanga30@yahoo.com");
                    console.log("\nThanks!\n");
                }
            },            
            {
                name: "Exit",
                value: () => {
                    console.log("Goodbye\n");
                }
            }
        ]
    }
];

const data = {
    name: chalk.bold.blue("                        Japmann Kaur Banga"),
    handle: chalk.white("@JapmannKaur"),
    title: `${chalk.white("UI/UX Designer")}`,
    github: chalk.gray("https://github.com/") + chalk.red("JapmannKaur"),
    linkedin: chalk.gray("https://linkedin.com/in/") + chalk.red("japmann-kaur-banga-43962b1bb"),
    instagram: chalk.gray("https://instagram.com/") + chalk.red("japmann3003"),
    npx: chalk.white("npx") + " " + chalk.blue("japmann"),

    labelTitle: chalk.yellow.bold("           Title:"),
    labelGitHub: chalk.yellow.bold("          GitHub:"),
    labelLinkedIn: chalk.yellow.bold("        LinkedIn:"),
    labelInstagram: chalk.yellow.bold("       Instagram:"),
    labelCard: chalk.yellow.bold("            Card:")
};

const me = boxen(
    [
        `${data.name}`,
        ``,
        `${data.labelTitle}  ${data.title}`,
        ``,
        `${data.labelGitHub}  ${data.github}`,
        `${data.labelLinkedIn}  ${data.linkedin}`,
        `${data.labelInstagram}  ${data.instagram}`,
        ``,
        `${data.labelCard}  ${data.npx}`,
        ``,
        `${chalk.italic("       I am a Front-End developer. UX/UI Design Enthusiast")}`,
        `${chalk.italic("       Looking forward to exploring more!!")}`,
        `${chalk.italic("       Glad to attend you. Thanks for dropping by. "
        )}`,
    ].join("\n"),
    {
        margin: 1,
        float: 'center',
        padding: 1,
        borderStyle: "double",
        borderColor: "blue"
    }
);

console.log(me);
const tip = [
    `Tip: Try ${chalk.yellow.bold(
        "cmd/ctrl + click"
    )} on the links above`,
    '',
].join("\n");
console.log(tip);

prompt(questions).then(answer => answer.action());