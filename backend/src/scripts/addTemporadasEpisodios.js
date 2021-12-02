const database = require('../services/database');
const Filme = require('../models/filme');
const Temporada = require('../models/temporada');
const Episodio = require('../models/episodio');

const addTemporadasEpisodeos = async () => {
    try {
        //pegar o id da serie que desejamos adicionar
        const series = await Filme.find({ tipo: 'serie' }).select('_id');
        for (let serie of series) {

            //criar aleatoriamente um numero para quantidade de temporadas
            const numTemporadas = Math.floor(Math.random() * 10) + 1;
            for (let i = 1; i <= numTemporadas; i++) {
                console.log(`inserindo temporada ${i} de ${numTemporadas}`);

                //criar temporada
                const temporada = await new Temporada({
                    filme_id: serie,
                    titulo: `Temporada ${i}`,
                }).save();

                const numEpisodios = Math.floor(Math.random() * 15) + 1;
                for (let x = 1; x <= numEpisodios; x++) {

                    console.log(`Inserindo episódios ${x} de ${numEpisodios}`);
                    await new Episodio({
                        temporada_id: temporada._id,
                        titulo: `Episódio ${x}`,
                        numero: x,
                        descricao:
                            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took.',
                        //gerando imagens aleatorias
                        capa: 'https://picsum.photos/300/200',
                    }).save();
                }
            }
        };
        console.log("Cadastro de temporadas realizado");
    } catch (err) {
        console.log(err.message);
    }
};

addTemporadasEpisodeos();
