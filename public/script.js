const button = document.querySelector("button")
const form = document.querySelector("form");

function printMessage(e) {
    e.preventDefault()
    console.log('Message envoyer')

    if (form) {
        const dateVal = document.querySelector('#date').value;
        const ref1 = document.querySelector('#ref1').value;
        const texte_lecture_1 = document.querySelector('#texte_lecture_1').value;
        const refp = document.querySelector('#refp').value;
        const repond = document.querySelector('#repond').value;
        const texte_psaume = document.querySelector('#texte_psaume').value;
        const refd = document.querySelector('#refd').value;
        const texte_lecture_2 = document.querySelector('#texte_lecture_2').value;
        const antienne = document.querySelector('#antienne').value;
        const texte_evangile = document.querySelector('#texte_evangile').value;

        const data = {
            jour: dateVal,
            liturgie: {
                lecture_1: {
                    ref: ref1,
                    text: texte_lecture_1
                },
                psaume:{
                    ref: refp,
                    repond : repond,
                    texte: texte_psaume
                },
                lecture_2: {
                    ref: refd,
                    text: texte_lecture_2
                },
                evangile: {
                    antienne: antienne,
                    text:texte_evangile
                }
            }
        }

        axios
            .post('https://amissazema-shounsa.koyeb.app/liturgie/add', data)
            .then(response => {
                const respons = response.data
                console.log(`Data is added`, respons)

                form.reset()
            })
            .catch(error => console.error(error))
    }
}
button.addEventListener("click", printMessage)