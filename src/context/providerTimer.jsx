import React, { Component, createContext } from "react";
import moment from "moment";

export const ContextTimer = createContext();



class ProviderTimer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            minutosEmSegundos: 6,
            timerAtivo: false,
            resetado: false,
            historico: []
        }
        this.timer = null

    }

    contador = () => {
        if (!this.state.timerAtivo) {
            this.timer = setInterval(() => {

                this.setState((prevState) => {
                    return { minutosEmSegundos: prevState.minutosEmSegundos - 1, timerAtivo: true }
                }, () => {
                    if (this.state.minutosEmSegundos <= 0) {
                        clearInterval(this.timer)
                        this.setState({ timerAtivo: false, resetado: false })
                    }
                })
            }, 1000)
            if (!this.state.resetado) {
                moment.locale('pt-br')
                this.setState((prevState)=>({historico: [{iniciado: moment().format('DD/MM/YYYY HH:mm:ss')}]}))

            }



        }
    }
    pausarContador = () => {
        clearInterval(this.timer)
        this.setState({ timerAtivo: false })
        moment.locale('pt-br')
        this.setState((prevState) => {
            const historico = [...prevState.historico]
            if (historico.length > 0) {
                historico[historico.length - 1] = {
                    ...historico[historico.length - 1],
                    pausado: moment().format('DD/MM/YYYY HH:mm:ss')
                }
            }
            return { historico }
        })

    }
        resetaContador = () => {
            clearInterval(this.timer)
            this.setState({ minutosEmSegundos: 6, timerAtivo: false, resetado: true })
        }
        render() {
            return (

                <ContextTimer.Provider value={{
                    ...this.state,
                    formataTempo: this.formataTempo,
                    pausarContador: this.pausarContador,
                    resetaContador: this.resetaContador,
                    contador: this.contador
                }}>
                    {this.props.children}
                </ContextTimer.Provider >
            );
        }
    }

export default ProviderTimer;