// DECLARATION
const demarre = new Promise((resolve, reject) => {
    let isRunning = false;    
    setTimeout(() => {if(isRunning === true) {
                        resolve();
                    } else {
                            reject();
                        }
                    }, 4000);
});

// INITIALISATION

demarre
    .then(()=>{
        console.log("Engine start !")
    }).catch((e)=> {console.log("Engine stopped !")}
    );


/************************ */
/* Promise avec arguments */
/************************ */

const calcul = (num1, num2) => {
    return new Promise((resolve,resolve2, reject) => {
        const result = num1 + num2;
        if (result>100) {
            resolve(result);
        } else {
            reject(result);
        }
    })
};

calcul(58, 56)
    .then((arg)=> {console.log(`Mon résultat est ${arg}.`); return arg})
    .then((resultat) => {
        (resultat%2 === 0) ? parite = "Oui" : parite = "Non";
        console.log(`Est pair ? ${parite}`)
    })
    .catch(() => {console.log('Pas de résultat !');});
