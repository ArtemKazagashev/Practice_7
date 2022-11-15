const allEmails = ['horoshiyemail@mail.ru', 'horoshiyemail@mail.ru', 'horoshiyemail@mail.ru',  'plohoyemail@mail.ru', 'plohoyemail@mail.ru', 'plohoyemail@mail.ru', 'plohoyemail@mail.ru', 'plohoyemail@mail.ru', 'horoshiyemail@mail.ru', 'horoshiyemail@mail.ru'];

const blackList = ['plohoyemail@mail.ru', 'plohoyemail@mail.ru', 'plohoyemail@mail.ru', 'plohoyemail@mail.ru', 'plohoyemail@mail.ru'];

let validAll = [];

function generateValid(allE, black) {
        
    for (let indexAll in allE) {
            
        if (!black.includes(allE[indexAll])) {
                validAll.push(allE[indexAll]);
            }
        }
        return validAll;
    }
    let validEmails = generateValid(allEmails, blackList);
    
    console.log(validEmails);