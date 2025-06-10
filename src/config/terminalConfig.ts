import { myConfig } from "./myConfig";

export const commands = {
  "--help": {
    response: `You can type the following commands: </br>  <b>whoami, education, links, resume</b> </br> <b>toggle-theme, clear</b> `,
    suggestedCommand: "whoami",
  },
  "—help": {
    response: `You can type the following commands: </br>  <b>whoami, education, links, clear</b> </br> <b>toggle-theme</b> `,
    suggestedCommand: "whoami",
  },
  whoami: {
    response: `My name is ${myConfig.name}.</br>I'm a ${myConfig.stack} ${myConfig.occupation} and ${myConfig.role} based in ${myConfig.location}.`,
    suggestedCommand: `education`,
  },
  education: {
    response: `I completed my ${myConfig.education.degree} at ${myConfig.education.institution} in ${myConfig.education.year}.`,
    suggestedCommand: `resume`,
  },
  resume: { response: `<a href="${myConfig.resume.path}"}" target="_blank">/cv </a>` },
  links: {
    response: `<a href="${myConfig.social.linkedin}" target="_blank">/linkedin</a> <a href="${myConfig.social.github}" target="_blank">/github</a>`,
  },
};
