class Conexao {
    constructor(objetoA,objetoB)
    {
        var ultimaConexao = objetoA.body.bodies.length - 2;
        // var ultimaConexao = 1;
        // tradução
        // create = criar
        // body = corpo
        // bodies = corpos
        // array = vetor = gavetas
        this.conexao = Restricao.create(
            {
               bodyA: objetoA.body.bodies[ultimaConexao],
               pointA: {x:0, y:0},
               bodyB: objetoB,
               pointB: {x:0, y:0},
               length: -10,
               stiffness: 0.01
            }
        );

        Mundo.add(mundo, this.conexao);
    }


    cortar()
    {
        Mundo.remove(mundo,this.conexao);
    }
}