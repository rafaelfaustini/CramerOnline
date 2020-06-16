    const appVue = new Vue({
        el: '#appVue',
        data: {
            seletor: 0,
            seletorEquacao: 0,
            seletorEquacaoTxt: 'equação do primeiro grau',
            seletorSistemas: 0,
            seletorSistemasTxt: 'sistema linear 2x2',
            a: null,
            b: null,
            c: null,
            d: null,
            e: null,
            f: null,
            g: null,
            h: null,
            i: null,
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
            selecionaSistema(){
                this.limparSistema();
                switch(this.seletorEquacao){
                    case "0":
                        this.seletorEquacaoTxt = 'sistema linear 2x2';
                        break;
                    case "1":
                        this.seletorEquacaoTxt = 'sistema linear 3x3';
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
                switch(parseInt(this.seletorEquacao)){
                    case 0:
                        this.resultado.valor = (-parseFloat(this.b)+parseFloat(this.c))/parseFloat(this.a)
                        this.resultado.passos.push({ titulo: 'Montando a equação, temos', operacao: `${this.adicionaSinal(this.a)}x ${this.adicionaSinal(this.b)} = ${this.c}` })
                        this.resultado.passos.push({ titulo: `Passando ${this.b} para o outro lado e invertendo o sinal `, operacao: `${this.adicionaSinal(this.a)}x = ${this.adicionaSinal(this.b, 1)} ${this.adicionaSinal(this.c)}` })
                        this.resultado.passos.push({ titulo: `Como temos ${this.a} realizando uma multiplicação a X, passamos para o outro lado dividindo`, operacao: `x = ${-parseFloat(this.b) +parseInt(this.c)}/${this.a}` })
                        break;
                    case 1:
                        let delta = (parseFloat(this.b) * parseFloat(this.b)) - 4 * parseFloat(this.a) * parseFloat(this.c)
                        this.resultado.valor = [];
                        this.resultado.valor.push((-parseFloat(this.b) + Math.sqrt(delta)) / 2 * parseFloat(this.a))
                        this.resultado.valor.push((-parseFloat(this.b) - Math.sqrt(delta)) / 2 * parseFloat(this.a))
                        this.resultado.passos= [];
                        this.resultado.passos.push({ categoria: 'Calculo do Delta', titulo: 'Lembrando que usaremos a formula de bhaskara', operacao: `Δ = b² - 4.a.c` })
                        this.resultado.passos.push({ titulo: 'Montando bhaskara, substituindo os coeficientes da fórmula', operacao: `Δ=${this.adicionaSinal(this.b)}² - 4*${this.adicionaSinal(this.a)}*${this.adicionaSinal(this.c)}` })
                        this.resultado.passos.push({ titulo: 'Começando as operações da fórmula temos', operacao: `Δ=${this.adicionaSinal(parseFloat(this.b)*parseFloat(this.b))}${this.adicionaSinal(4*parseFloat(this.a)*parseFloat(this.c), 1)}` })
                        this.resultado.passos.push({ titulo: 'Chegamos no valor de delta', operacao: `Δ=${delta}` })
                        if(delta == 0){
                        this.resultado.passos.push({ titulo: 'Análise do delta', operacao: `Δ=0, a equação possui raízes reais iguais` })
                        }
                        if(delta < 0){
                        this.resultado.passos.push({ titulo: 'Análise do delta', operacao: `Δ<0, a equação não possui raízes reais` })
                        this.resultado.valor = 'y ∉ R';
                        } else {
                        this.resultado.passos.push({ titulo: 'Análise do delta', operacao: `Δ>0, a equação possui duas raízes reais e distintas` })


                        this.resultado.passos.push({ categoria: 'Calculo das raízes',titulo: 'Será usada a seguinte fórmula para calculo das raízes', operacao: `X = (-b ± √Δ) / 2.a` })
                        this.resultado.passos.push({ titulo: 'Substituindo os valores na fórmula', operacao: `X = (-(${this.adicionaSinal(parseFloat(this.b))}) ± √${delta}) / 2.${this.adicionaSinal(parseFloat(this.a))}` })
                        this.resultado.passos.push({ categoria: 'Calculando X¹',titulo: 'Preencheremos a fórmula com os valores', operacao: `X¹ = (${this.adicionaSinal(parseFloat(this.b), 1)} + √${delta}) / 2.${this.adicionaSinal(parseFloat(this.a))}` })
                        this.resultado.passos.push({ titulo: 'Continuaremos com as operações aritméticas', operacao: `X¹ = (${(-parseFloat(this.b) + Math.sqrt(delta))}) / ${this.adicionaSinal(2*parseFloat(this.a))}` })
                        this.resultado.passos.push({ categoria: 'Calculando X²',titulo: 'Colocando os respectivos valores na fórmula', operacao: `X² = (${this.adicionaSinal(parseFloat(this.b), 1)} - √${delta}) / 2.${this.adicionaSinal(parseFloat(this.a))}` })
                        this.resultado.passos.push({ titulo: 'Realizando os cálculos aritméticos', operacao: `X² = (${(-parseFloat(this.b) - Math.sqrt(delta))}) / ${this.adicionaSinal(2*parseFloat(this.a))}` })

                        }

                        break;
                }
            },
            limparEquacao(){
                this.a = null;
                this.b = null;
                this.c = null;
                this.resultado = {valor: null, passos: null};
            },
            limparSistema(){
                this.a = null;
                this.b = null;
                this.c = null;
                this.d = null;
                this.e = null;
                this.f = null;
                this.g = null;
                this.h = null;
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
                    switch(parseInt(this.seletorEquacao)){
                        case 0:
                            this.preview = true;
                            return `${this.adicionaSinal(this.a)}x ${this.adicionaSinal(this.b)} = ${this.adicionaSinal(this.c)}`;
                            break;
                        case 1:
                            this.preview = true;
                            return `${this.adicionaSinal(this.a)}x² ${this.adicionaSinal(this.b)}x ${this.adicionaSinal(this.c)} = 0`;
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
                if(!isNaN(parseFloat(this.resultado.valor)) || Array.isArray(this.resultado.valor) || typeof this.resultado.valor === 'string' && this.seletor==1){
                switch(parseInt(this.seletorEquacao)){
                    case 0:
                        return `X = ${this.resultado.valor}`
                        break;
                    case 1:
                        if(typeof this.resultado.valor === 'string'){
                            return this.resultado.valor
                        }
                        return `X¹ = ${this.resultado.valor[0]}; X² = ${this.resultado.valor[1]}`
                        break;
                }
                return null;
            }
        }
        }
    })
