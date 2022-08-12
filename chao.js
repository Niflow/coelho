class Chao {
    constructor(x, y, largura, altura)
    {
        this.objeto = Objetos.rectangle(x, y, largura, altura, { isStatic: true });
        Mundo.add(mundo, this.objeto);
        this.largura = largura;
        this.altura = altura;
    }

    mostrar()
    {
        var pos = this.objeto.position;
        push(); // para a configuração atual
        rectMode(CENTER);
        noStroke();
        fill(123, 79, 99);
        rect(pos.x, pos.y, this.largura, this.altura);
        pop(); // volta a configuração anterior
    }
}