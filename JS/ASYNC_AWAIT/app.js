/* let func2 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Ma fonction 2')
        }, 1500);
    })
}

let func = async () => {
    console.log('ok');
    let val2 = await func2();
    return `N'importe quoi - ${val2}`;
}

func().then((text) => {console.log(text)}) */

/* Astuce si besoin d'utiliser await dans scope principal, 
utiliser une fonction anonyme async appelée avec ()*/

(async () => {
    let func3 = () => {
        return new Promise((response) => {
            setTimeout(() => {
                response('Ma fonction 3')
            }, 1000);
        })
    }

    let var1 = await func3();
    console.log(`J'affiche ${var1}`)
})
()