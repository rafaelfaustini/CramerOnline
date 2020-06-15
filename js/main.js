    const appVue = new Vue({
        el: '#appVue',
        data: {
            seletor: 0,
            seletorEquacao: 0,
            seletorEquacaoTxt: 'equação do primeiro grau',
            a: null,
            b: null,
            c: null,
            preview: false,
            resultado: {
                valor: null,
                passos: []
            },
            loaded: false
        },
        methods: {
            trocaPagina(numero){
                switch(numero){
                    case 1:
                        document.title = 'Snizer Online - Passo a passo de equações'
                        this.seletor = numero;
                        break;
                    case 2:
                        document.title = 'Snizer Online - Passo a passo de sistemas lineares'
                        this.seletor = numero;
                        break;
                    default:
                    case 0:
                        document.title = 'Snizer Online - Simplifique seus cálculos';
                        this.seletor = numero;
                        break;
                }
            },
            selecionaEquacao(){
                this.limparEquacao();
                switch(this.seletorEquacao){
                    case "0":
                        this.seletorEquacaoTxt = 'equação do primeiro grau';
                        break;
                    case "1":
                        this.seletorEquacaoTxt = 'equação do segundo grau';
                        break
                }
            },
            adicionaSinal(numero, oposto=0){
                if(!oposto){
                    if(numero < 0){
                        return numero;
                    } else{
                        return `+${numero}`;
                    }
            } else{
                if(numero < 0){
                    return numero*-1;
                } else{
                    return `-${numero}`;
                } 
            }
            },
            calcularEquacao(){
                switch(this.seletorEquacao){
                    case 0:
                        this.resultado.valor = (-parseFloat(this.b)+parseFloat(this.c))/parseFloat(this.a)
                        this.resultado.passos.push({ titulo: 'Montando a equação, temos', operacao: `${this.adicionaSinal(this.a)}x ${this.adicionaSinal(this.b)} = ${this.c}` })
                        this.resultado.passos.push({ titulo: `Passando ${this.b} para o outro lado e invertendo o sinal `, operacao: `${this.adicionaSinal(this.a)}x = ${this.adicionaSinal(this.b, 1)} ${this.adicionaSinal(this.c)}` })
                        this.resultado.passos.push({ titulo: `Como temos ${this.a} realizando uma multiplicação a X, passamos para o outro lado dividindo`, operacao: `x = ${-parseFloat(this.b) +parseInt(this.c)}/${this.a}` })
                        break;
                    case 1:
                        //this.resultado.valor
                        break;
                }
            },
            limparEquacao(){
                this.a = null;
                this.b = null;
                this.c = null;
                this.resultado = {valor: null, passos: null};
            },
            voltarEquacoes(){
                if(!this.resultado.valor){
                    this.trocaPagina(0)
                } else{
                    this.limparEquacao();
                }
            }

        },
        computed: {
            previewEquacao(){
                if(!isNaN(parseFloat(this.a)) && !isNaN(parseFloat(this.b)) && !isNaN(parseFloat(this.c))){
                    switch(this.seletorEquacao){
                        case 0:
                            this.preview = true;
                            return `${parseFloat(this.a)}x + ${parseFloat(this.b)} = ${parseFloat(this.c)}`;
                            break;
                        case 1:
                            this.preview = true;
                            return `${parseFloat(this.a)}x² + ${parseFloat(this.b)}x = ${parseFloat(this.c)}`;
                            break;
                    }
                }
                this.preview = false;
                return '';
            },
            disabledEquacao(){
                return !isNaN(parseFloat(this.a)) && !isNaN(parseFloat(this.b)) && !isNaN(parseFloat(this.c))
            },
            resultadoEquacao(){
                if(!isNaN(parseFloat(this.resultado.valor))){
                switch(this.seletorEquacao){
                    case 0:
                        return `X = ${this.resultado.valor}`
                        break;
                    case 1:
                        return `X1 = ${this.resultado.valor[0]}; X2 = ${this.resultado.valor[1]}`
                        break;
                }
                return null;
            }
        }
        }
    })
