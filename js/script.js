/*-------------------------------------TRACCIA--------------------------------------------
Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta usando Vue.
Vi ricordo le funzionalità minime
Deve vedersi un'immagine grande che è l'immagine principale
Devono vedersi i thumbnails
Il thumbnails che corrisponde all'immagine grande deve essere graficamente messo in risalto con una classe active
Deve essere possibile cambiare l'immagine principale con le freccette prev e next
Bisogna fare in modo che il carosello sia "infinito": se clicco sul next e sono all'ultima immagine, ricomincio dalla prima; se sono alla prima immagine e clicco sul prev vado all'ultima.
Bonus:
1- al click su una thumb, visualizzare in grande l'immagine corrispondente
2- applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
3- quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce
Consigli del giorno:
- regola d'oro: riciclare ovunque possibile! Questo significa che per la parte di markup possiamo recuperare html e css dell'esercizio svolto qualche giorno fa: è già tutto pronto!
- il riciclo spesso va a braccetto con le funzioni! Sapendole sfruttare bene, l'esercizio si riduce a poche righe ;)
----------------------------------------------------------------------------------------*/

console.log('VUE OK', Vue);

const app = Vue.createApp({
    data(){
        return{
            currentIndex: 0,
            data
        }
    },
    methods: {
        goTo(target){
            if(target === 'next'){
                this.currentIndex = this.currentIndex === this.data.length - 1 ? 0 : ++this.currentIndex;
            }else if (target === 'previous'){
                this.currentIndex = this.currentIndex === 0 ? this.data.length - 1 : --this.currentIndex;
            }else {
                this.currentIndex = target;
            }
        },
        autoplay(){
            setInterval(() => {
                this.goTo('next');
            }, 3000)
        }
    },
    mounted(){
        this.autoplay()
    }
});

app.mount('#root');


