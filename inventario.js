export default class Inventario{
    #capacidade
    #pesoTotal
    #itens
    #pocoes
    #armas
    #todositens

    constructor(capacidade){
        this.#capacidade = capacidade;
        this.#todositens = [];
        this.#itens = [];
        this.#pocoes = [];
        this.#armas = [];     
        this.#pesoTotal = 0;            
    }

    adicionarItens(item){
        if (this.retornaPesoRestante()>item.peso){
            this.#pesoTotal = this.#pesoTotal+item.peso;
            this.#todositens.push(item);
        }
        
    }

    retornaPesoRestante(){
        return this.#capacidade - this.#pesoTotal;
    }

    adicionarItem(item){
        if (this.retornaPesoRestante()>item.peso){
            this.#pesoTotal = this.#pesoTotal+item.peso;
            this.#itens.push(item);
        }
        
    }

    adicionarPocao(pocao){
        var teste = this.retornaPesoRestante();
        if (this.retornaPesoRestante()>pocao.peso){

            this.#pesoTotal = this.#pesoTotal+pocao.peso;
            this.#pocoes.push(pocao)
        }

    }

    adicionarArma(arma){
        if (this.retornaPesoRestante()>arma.peso){
            this.#pesoTotal = this.#pesoTotal+arma.peso;
            this.#armas.push(arma);        
        }
    }
    get todositens(){
        return this.#todositens;
    }
    get pocoes(){
        return this.#pocoes;
    }
    get itens(){
        return this.#itens;
    }
    get armas(){
        return this.#armas;
    }

}