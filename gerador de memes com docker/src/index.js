import memeMaker from '@erickwendel/meme-maker'

const options = {
    image: './assets/pet.jpg',
    outfile: './assets/meme.jpg',
    topText: 'JUNIOR',
    bottomText: 'NAO CONSEGUI RODAR O LIVE-RELOAD',

}

memeMaker(options).then(_ => {
    console.log('Image saved: ' + options.outfile)
}).catch(error => console.log(error));
